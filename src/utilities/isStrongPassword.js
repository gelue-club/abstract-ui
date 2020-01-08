const isStrongPassword = text =>
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,18}$/.test(
    text,
  );

export default isStrongPassword;
