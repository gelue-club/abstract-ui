/* eslint-disable */

/**
 * 堆砌布局，
 *
 * - [X] 给定数据
 *
 * - [X] 动态测量砖的高度
 *
 * - [X] 给定行间距
 *
 * - [ ] 第一行有上间距，最后一行有下间距
 *
 * - [ ] `卸载` 后再渲染时，记住上次滚动位置
 *
 * - [ ] 删（逐个）
 *
 * - [ ] 增（从顶部增加）
 *
 * - [ ] 增（从末尾增加）
 *
 * - [X] 在 CSR 项目下使用
 *
 * - [X] 在 Next.js 框架下使用
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import merge from 'lodash/merge';

import floor from 'utilities/floor';
import stubArray from 'utilities/stubArray';

import debug from 'debug';

import './Masonry.css';

/**
 * TODO: 监听容器尺寸变化
 */
class Masonry extends Component {
  /**
   * `render()` 会把砖渲染出来，但并不会直
   * 接作用在 DOM 上，所以此处用于计算砖的实
   * 际高度
   */
  render() {
    this.calculateColumnCounts();
    this.initializeColumnsStatus();
    this.positionBricks();

    return (
      <div
        className={cn('masonry', this.props.className)}
        style={{
          width: this.getMasonryWidth(),
          height: this.getMax(this.cols).height,
        }}
      >
        {this.cells()}
      </div>
    );
  }

  /**
   * TODO: 缓存数目是否与条目数一致
   *
   * ```
   * render() {
   *   this.calculateColumnCounts();
   *   this.initializeColumnsStatus();
   *   this.positionBricks();
   * }
   * ```
   * 👆在不晓得`<Brick />` 高度时就尝试了计算砖块的高度，此时使用的是默认高度 `30px`，这是
   * 不对的，所以需要在知道了`<Brick />` 高度后，重新计算砖块的位置。
   *
   * `componentDidMount` 这一步已经装载进 DOM，即：知晓了所有 `<Brick />` 的高度，但尚
   * 未呈现视图，所以重新渲染的最佳时机便是此处。
   *
   * 💥渲染出 `<Masonry />` 的必要前提：知晓所有 `<Brick />` 的高度。
   * 即：优先渲染 `<Brick />`，并它们的缓存高度，再渲染 `<Masonry />`。
   *
   * https://programmingwithmosh.com/javascript/react-lifecycle-methods/
   * 👆详细介绍了 `componentDidMount()`。
   */
  componentDidMount() {
    // this.log('已知晓所有的 `<Brick />` 高度');

    if (!this.didMount) {
      // this.log('重新渲染 `<Masonry />`');
      this.forceUpdate();
      this.didMount = true;
    }
  }

  cells = () => {
    const { cellCount, columnWidth } = this.props;

    const childs = stubArray();
    for (let index = 0; index <= cellCount - 1; index++) {
      childs.push(
        this.content({
          key: `-${index}`,
          cellIndex: index,
          style: merge(this.brickPositions[index], {
            width: columnWidth,
          }),
        }),
      );
    }

    return childs;
  };

  /**
   * `getSnapshotBeforeUpdate` 这一步已经将最新的变更装载进 DOM，即：知晓了所
   * 有 `<Brick />` 的高度，但尚未呈现视图，所以重新渲染的最佳时机便是此处。
   *
   * https://programmingwithmosh.com/javascript/react-lifecycle-methods/
   * 👆详细介绍了 `getSnapshotBeforeUpdate()`。
   */
  getSnapshotBeforeUpdate(prevProps) {
    if (prevProps.identity !== this.props.identity) {
      this.forceUpdate();
    }

    return null;
  }

  getMasonryWidth = () => {
    const masonryWidth =
      this.columnCount * this.props.columnWidth +
      (this.columnCount - 1) * this.props.gap;

    // console.info(`\n\n\n 墙宽 ${masonryWidth} px`);
    return masonryWidth;
  };

  getMin = cols => {
    let min = cols[0];

    for (const col of cols) {
      if (col.height < min.height) {
        min = col;
      }
    }

    return min;
  };

  getMax = cols => {
    let max = cols[0];

    for (const col of cols) {
      if (col.height > max.height) {
        max = col;
      }
    }

    return max;
  };

  runColumnStatusInitEngine() {
    for (let i = 0; i < this.columnCount; i++) {
      this.cols.push({ height: 0, index: i });
    }
  }

  /**
   * TODO: 动态获取容器的宽度
   */
  calculateColumnCounts = () => {
    const parentWidth = this.width;

    const { maxColumns, gap, columnWidth, columnCount } = this.props;

    this.columnCount = columnCount
      ? columnCount
      : floor((parentWidth + gap) / (columnWidth + gap));

    if (maxColumns && this.columnCount > maxColumns) {
      this.columnCount = maxColumns;
    }

    // this.log(`${this.columnCount} 列板砖`);
  };

  /**
   * 第一次渲染只是为了计算每一个条目
   * 的高度，
   *
   * 第二次渲染是为了给以下字段填充正
   * 确的数据
   * - `cols`
   * - `columnCount`
   * - `brickPositions`
   *
   * 但因第一次渲染时这几个字段已经被
   * 赋值过，所以需要在第二次渲染或者
   * 说重新渲染前清空它们
   */
  initializeColumnsStatus = () => {
    this.createOrClearColumnsStatusDB();
    this.runColumnStatusInitEngine();
  };

  createOrClearColumnsStatusDB = () => {
    this.cols = stubArray();
  };

  /**
   * 第一次渲染只是为了计算每一个条目
   * 的高度，
   *
   * 第二次渲染是为了给以下字段填充正
   * 确的数据
   * - `cols`
   * - `columnCount`
   * - `brickPositions`
   *
   * 但因第一次渲染时这几个字段已经被
   * 赋值过，所以需要在第二次渲染或者
   * 说重新渲染前清空它们
   *
   * TODO: 缓存 1 列、2 列、3 列等不同布局下砖块位置
   */
  positionBricks = () => {
    this.createOrClearBricksPositionDB();
    this.runBrickPositioningEngine();
  };

  createOrClearBricksPositionDB = () => {
    this.brickPositions = stubArray();
  };

  runBrickPositioningEngine() {
    const { columnWidth, gap, cache, cellCount } = this.props;

    for (let index = 0; index <= cellCount - 1; index++) {
      // this.log(`获取 ${index}-0 砖块的高度：${cache.getHeight(index, 0)}px`);

      const col = this.getMin(this.cols);

      const left = col.index * (columnWidth + gap);

      const topGutter = col.height ? gap : 0;
      const top = col.height + topGutter;

      col.height += cache.getHeight(index, 0) + topGutter;

      this.brickPositions.push({
        top,
        left,
      });
    }
  }

  constructor(props) {
    super(props);

    this.columnCount = 0;
    this.cols = stubArray();
    this.brickPositions = stubArray();

    this.width = this.props.initialWidth;

    this.didMount = false;

    this.content = this.props.children || this.props.cellRenderer;
  }

  componentDidUpdate() {
    // this.log('`<Masonry />` componentDidUpdate()');
  }

  static defaultProps = {
    className: '',

    identity: '',

    maxColumns: 0,

    children: () => {},

    gap: 0,
  };

  static propTypes = {
    className: PropTypes.string,

    identity: PropTypes.string,

    columnCount: PropTypes.number,
    maxColumns: PropTypes.number,
    cellCount: PropTypes.number.isRequired,

    children: PropTypes.func,
    cellRenderer: PropTypes.func,

    initialWidth: PropTypes.number.isRequired,
    columnWidth: PropTypes.number.isRequired,
    gap: PropTypes.number,
  };

  // debug('HUSO_DWA:Masonry')
  log = message => {
    console.log(message);
  };
}

export default Masonry;
