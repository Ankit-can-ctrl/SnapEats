const globalErrorHandler = (error, req, res, next) => {
  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || "Something went wrong!",
  });
};

export default globalErrorHandler;
