
const errorsVal = {
  EMAIL_REQUIRED: {
    message: "Email is required",
    status: 400,
  },
  PASSWORD_REQUIRED: {
    message: "Password is required",
    status: 400,
  },
  INVALIDE_EMAIL: {
    message: "Invalid email",
    status: 401,
  },
  INVALIDE_EMAIL_OR_PASSWORD: {
    message: "Invalid email or password",
    status: 401,
  },
  NAME_REQUIRED: {
    message: "Name is required",
    status: 400,
  },
  INVALIDE_EMAIL_FORMAT: {
    message: "Invalid email format",
    status: 400,
  },
  WEAK_PASSWORD: {
    message:
      "Password must be at least 9 characters and contain one lowercase, one uppercase, one number, and one symbol",
    status: 400,
  },
  INVALIDE_EMAIL_RESET: {
    message: "Invalid email for password reset",
    status: 404,
  },
  TOKEN_REQUIRED: {
    message: "Token is required",
    status: 400,
  }
};

export default errorsVal;