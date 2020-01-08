/**
 * strongPasswordPattern,
 * /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,18}$/
 *
 * https://goo.gl/Vryhq5
 */

import size from 'utilities/size';

const hasDigitSize = password => {
  const digitPattern = /\d/g;

  return (
    digitPattern.test(password) && size(password) >= 8 && size(password) <= 18
  );
};

export default hasDigitSize;
