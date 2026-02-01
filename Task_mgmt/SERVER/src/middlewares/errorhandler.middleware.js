export const errorHandler = (error, req, res, next) => {
  console.log('error handler', error)
  const statusCode = error?.status || 500;
  res.status(statusCode).json({
    message: error?.message || 'internal server error'
  })
}