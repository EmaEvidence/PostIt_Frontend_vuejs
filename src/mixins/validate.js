const validateSignUp = () => {
  if (!/^[a-zA-Z]{*}[\s]{1}[a-zA-Z]{*}$/.test(name)) {
    return 'Fullname not valid';
  }
  return true;
};

export default validateSignUp;
