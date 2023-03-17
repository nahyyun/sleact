const REGEX = {
  email: /^[\w]+@[\w]+\.[\w]{2,4}/,
  password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,15}$/,
};

export default REGEX;
