const Bootcamp = require('../models/Bootcamp');
const ErrorResponse = require('../utils/errorResponse');

//@desc Get all bootcamps
//@route GET /api/v1/bootcamps
//@access Public
exports.getBootcamps = async (req, res, next) => {
    try{
        const bootcamps = await Bootcamp.find();
        res.status(200).json({
            success: true,
            count: bootcamps.length,
            data: bootcamps
        });
    }catch(err){
        next(err);
    }
}


//@desc Get single bootcamp
//@route GET /api/v1/bootcamps/:id
//@access Public
exports.getBootcamp = async (req, res, next) => {
    try{
        const bootcamp = await Bootcamp.findById(req.params.id);

        if(!bootcamp){
            return next(new ErrorResponse(`Bootcamp not found with id ${req.params.id}`, 404));
        }

        res.status(200).json({
            success: true,
            data: bootcamp
        });
    }catch(err){
        next(err);
    }
}


//@desc Create a new bootcamp
//@route POST /api/v1/bootcamps/
//@access Public
exports.createBootcamp = async (req, res, next) => {
    try{
        const bootcamp = await Bootcamp.create(req.body);

        if(!bootcamp){
            return next(new ErrorResponse(`Bootcamp not found with id ${req.params.id}`, 404));
        }

        res.status(201).json({
            success: true,
            data: bootcamp,
        });
    }catch(err){
        next(err);

    }
}

//@desc Update bootcamp
//@route PUT /api/v1/bootcamps/:id
//@access Public
exports.updateBootcamp = async (req, res, next) => {
    try{
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true        
        });


        res.status(200).json({
            success: true,
            data: bootcamp
        });
    }catch(err){
        next(err);

    }
}

//@desc Delete bootcamp
//@route DELETE /api/v1/bootcamps/:id
//@access Public
exports.deleteBootcamp = async (req, res, next) => {
    try{
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

        if(!bootcamp){
            return next(new ErrorResponse(`Bootcamp not found with id ${req.params.id}`, 404));
        }

        res.status(200).json({
            success: true,
            data: {}
        });
    }catch(err){
        next(err);

    }
}