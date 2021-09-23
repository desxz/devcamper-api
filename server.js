const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');

const app = express();

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


if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use(logger);

app.use('/api/v1/bootcamps', bootcamps);

const server = app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
});

//Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    //Close server & exit process
    server.close(() => process.exit(1));
})
