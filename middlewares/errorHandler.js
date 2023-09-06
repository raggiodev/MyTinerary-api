const errorHandler = (error, req, res, next) => {
  let status = error.status || 500;
  console.log(error.stack);

  res.status(status).json({
    success: false,
    status: status,
    error: error.message,
  });
};

export default errorHandler;