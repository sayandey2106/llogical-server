const logger = require('./LoggerController');
const { loggerStatus, OPERATIONS } = require('../config/LoggerObject');
const DemoClass = require('../model/demoClassModel')
const axios = require('axios');
const nodemailer = require('nodemailer');
const crypto = require("crypto");
require('dotenv').config();
const { hash } = require("bcrypt");

module.exports = {
    createNewDemoClass: async (req, res) => {
        const { name, email, grade , date, time, school, board, address, mobileNo } = req.body;

        if (!name || !email || !grade || !date || !time || !school || !board || !address || !mobileNo) {
            logger.logActivity(loggerStatus.ERROR, req.body, ' name, email, grade , date, time, school, board, address, mobileNo are required!', null, OPERATIONS.DEMOCLASS.CREATE);
            res.status(400).json({ message: ' name, email, grade , date, time, school, board, address, mobileNo  are required!' });
            return;
        }
        
        try {
            const newDemo = new DemoClass ({ 
                name : name,
                email: email,
                grade : grade,
                date : date,
                time : time,
                school : school,
                board : board,
                address :address,
                mobileNo: mobileNo,
                isDeleted: false 
            });

            const savedDemo = await newDemo.save().catch((err) => {
                logger.logActivity(loggerStatus.ERROR, req.body, 'Cannot create the demo class at the moment!', err, OPERATIONS.DEMOCLASS.CREATE);
                res.status(500).json({ error: 'Cannot create the demo class at the moment!' });
            });
        
            if (savedDemo) {
                logger.logActivity(loggerStatus.INFO, req.body, 'Demo class creation Successful!!', null, OPERATIONS.DEMOCLASS.CREATE);
                let variable;
                

                const demoDetails = {
                    id : savedDemo._id,
                    name : savedDemo.name,
                    variable: variable
                }






                res.json({ 
                    message: 'Demo class Creation Successful!!',
                    data: demoDetails
                });
            }
        } catch (error) {
            logger.logActivity(loggerStatus.ERROR, req.body, 'Unable to execute db query to create', error, OPERATIONS.DEMOCLASS.CREATE);
        }
    },

    
}