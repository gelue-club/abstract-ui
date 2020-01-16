export const DEFAULT_HEIGHT = 30;
export const DEFAULT_WIDTH = 100;

function defaultKeyMapper(rowIndex, columnIndex) {
  return `${rowIndex}-${columnIndex}`;
}

/**
 * Caches measurements for a given cell.
 */
export default class CellMeasurerCache {
  $cellHeightCache = {};

  $cellWidthCache = {};

  $columnWidthCache = {};

  $rowHeightCache = {};

  $columnCount = 0;

  $rowCount = 0;

  constructor(params = {}) {
    const {
      defaultHeight,
      defaultWidth,
      fixedHeight,
      fixedWidth,
      keyMapper,
      minHeight,
      minWidth,
    } = params;

    this.$hasFixedHeight = fixedHeight === true;
    this.$hasFixedWidth = fixedWidth === true;
    this.$minHeight = minHeight || 0;
    this.$minWidth = minWidth || 0;
    this.$keyMapper = keyMapper || defaultKeyMapper;

    this.$defaultHeight = Math.max(
      this.$minHeight,
      typeof defaultHeight === 'number' ? defaultHeight : DEFAULT_HEIGHT,
    );
    this.$defaultWidth = Math.max(
      this.$minWidth,
      typeof defaultWidth === 'number' ? defaultWidth : DEFAULT_WIDTH,
    );

    if (process.env.NODE_ENV !== 'production') {
      if (this.$hasFixedHeight === false && this.$hasFixedWidth === false) {
        // console.warn(
        //   "CellMeasurerCache should only measure a cell's width or height. " +
        //     'You have configured CellMeasurerCache to measure both. ' +
        //     'This will result in poor performance.',
        // );
      }

      if (this.$hasFixedHeight === false && this.$defaultHeight === 0) {
        // console.warn(
        //   'Fixed height CellMeasurerCache should specify a :defaultHeight greater than 0. ' +
        //     'Failing to do so will lead to unnecessary layout and poor performance.',
        // );
      }

      if (this.$hasFixedWidth === false && this.$defaultWidth === 0) {
        // console.warn(
        //   'Fixed width CellMeasurerCache should specify a :defaultWidth greater than 0. ' +
        //     'Failing to do so will lead to unnecessary layout and poor performance.',
        // );
      }
    }
  }

  clear(rowIndex, columnIndex = 0) {
    const key = this.$keyMapper(rowIndex, columnIndex);

    delete this.$cellHeightCache[key];
    delete this.$cellWidthCache[key];

    this.$updateCachedColumnAndRowSizes(rowIndex, columnIndex);
  }

  clearAll() {
    this.$cellHeightCache = {};
    this.$cellWidthCache = {};
    this.$columnWidthCache = {};
    this.$rowHeightCache = {};
    this.$rowCount = 0;
    this.$columnCount = 0;
  }

  columnWidth = ({ index }) => {
    const key = this.$keyMapper(0, index);

    return this.$columnWidthCache.hasOwnProperty(key)
      ? this.$columnWidthCache[key]
      : this.$defaultWidth;
  };

  get defaultHeight() {
    return this.$defaultHeight;
  }

  get defaultWidth() {
    return this.$defaultWidth;
  }

  hasFixedHeight() {
    return this.$hasFixedHeight;
  }

  hasFixedWidth() {
    return this.$hasFixedWidth;
  }

  getHeight(rowIndex, columnIndex = 0) {
    if (this.$hasFixedHeight) {
      return this.$defaultHeight;
    }

    const key = this.$keyMapper(rowIndex, columnIndex);

    // console.log(key);
    // console.log(this.$cellHeightCache.hasOwnProperty(key));
    return this.$cellHeightCache.hasOwnProperty(key)
      ? Math.max(this.$minHeight, this.$cellHeightCache[key])
      : this.$defaultHeight;
  }

  getWidth(rowIndex, columnIndex = 0) {
    if (this.$hasFixedWidth) {
      return this.$defaultWidth;
    }

    const key = this.$keyMapper(rowIndex, columnIndex);

    return this.$cellWidthCache.hasOwnProperty(key)
      ? Math.max(this.$minWidth, this.$cellWidthCache[key])
      : this.$defaultWidth;
  }

  has(rowIndex, columnIndex = 0) {
    const key = this.$keyMapper(rowIndex, columnIndex);

    return this.$cellHeightCache.hasOwnProperty(key);
  }

  rowHeight = ({ index }) => {
    const key = this.$keyMapper(index, 0);

    return this.$rowHeightCache.hasOwnProperty(key)
      ? this.$rowHeightCache[key]
      : this.$defaultHeight;
  };

  set(rowIndex, columnIndex, width, height) {
    const key = this.$keyMapper(rowIndex, columnIndex);

    if (columnIndex >= this.$columnCount) {
      this.$columnCount = columnIndex + 1;
    }

    if (rowIndex >= this.$rowCount) {
      this.$rowCount = rowIndex + 1;
    }

    // Size is cached per cell so we don't have to re-measure if cells are re-ordered.
    this.$cellHeightCache[key] = height;
    this.$cellWidthCache[key] = width;

    this.$updateCachedColumnAndRowSizes(rowIndex, columnIndex);
  }

  $updateCachedColumnAndRowSizes(rowIndex, columnIndex) {
    // :columnWidth and :rowHeight are derived based on all cells in a column/row.
    // Pre-cache these derived values for faster lookup later.
    // Reads are expected to occur more frequently than writes in this case.
    // Only update non-fixed dimensions though to avoid doing unnecessary work.
    if (!this.$hasFixedWidth) {
      let columnWidth = 0;
      for (let i = 0; i < this.$rowCount; i++) {
        columnWidth = Math.max(columnWidth, this.getWidth(i, columnIndex));
      }
      const columnKey = this.$keyMapper(0, columnIndex);
      this.$columnWidthCache[columnKey] = columnWidth;
    }
    if (!this.$hasFixedHeight) {
      let rowHeight = 0;
      for (let i = 0; i < this.$columnCount; i++) {
        rowHeight = Math.max(rowHeight, this.getHeight(rowIndex, i));
      }
      const rowKey = this.$keyMapper(rowIndex, 0);
      this.$rowHeightCache[rowKey] = rowHeight;
    }
  }
}
