// creating a utility file for wrapper for database connection 
// There are two approach :-

// using promises

const asyncHandler = (requestHandler) => {
    (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next))
               .catch((err) => next(err))
    }
}

export {asyncHandler}



// using try catch

/*
const asyncHandler = (fn) => async(req, res, next) => {
    try {
        await fn(req,res,next)
    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: error.message
        })
    }
}
*/    