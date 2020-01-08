import size from 'utilities/size';

const hasDigitLeterSize = password => {
  const letterPattern = /[A-Za-z]/g;
  const digitPattern = /\d/g;

  return (
    letterPattern.test(password) &&
    digitPattern.test(password) &&
    size(password) >= 8
  );
};

export default hasDigitLeterSize;
