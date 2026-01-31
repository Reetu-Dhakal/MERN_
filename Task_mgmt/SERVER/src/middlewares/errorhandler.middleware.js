export const errorhandler = (err,req,res,next)=>{
    console.log('error handler',err);
    const statusCode = err?.status || 500;
    res.status(statusCode).json({
        message:err?.message || 'Something went wrong',
    })
}