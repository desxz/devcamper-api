const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const fileUpload = require('express-fileupload');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');
const app = express();

//Body parser
app.use(express.json());

//Set Dotenv Config Path
dotenv.config({path: './config/config.env'});

//Connect to Database
connectDB();

//Set PORT variable
const PORT = process.env.PORT || 5000;

//Set Logger Middleware
const logger = require('./middleware/logger');

//Set Bootcamps
const bootcamps = require('./routes/bootcamps');
const courses = require('./routes/courses');
const auth = require('./routes/auth');

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

//File Upload Middleware
app.use(fileUpload());

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));


app.use(logger);

app.use('/api/v1/bootcamps', bootcamps);
app.use('/api/v1/courses', courses);
app.use('/api/v1/auth', auth);

app.use(errorHandler);

const server = app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
});

//Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    //Close server & exit process
    server.close(() => process.exit(1));
})
