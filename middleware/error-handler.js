const CustomAPIError = require("../errors/custom-error");

module.exports = (error, _request, response, _next) => {
  if (error instanceof CustomAPIError) return response
    .status(error.statusCode)
    .json({ message: error.message });

  return response.status(500).json({
    message: "Something went wrong."
  });
};