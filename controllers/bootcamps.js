//@desc Get all bootcamps
//@route GET /api/v1/bootcamps
//@access Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({success: true, msg: "Show all bootcamps", hello: req.hello});
}


//@desc Get single bootcamp
//@route GET /api/v1/bootcamps/:id
//@access Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Show bootcamp ${req.params.id}`});
}


//@desc Create a new bootcamp
//@route POST /api/v1/bootcamps/
//@access Public
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: "Create a new bootcamp"});
}

//@desc Update bootcamp
//@route PUT /api/v1/bootcamps/:id
//@access Public
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Update bootcamp ${req.params.id}`});
}

//@desc Delete bootcamp
//@route DELETE /api/v1/bootcamps/:id
//@access Public
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Remove bootcamp ${req.params.id}`});
}