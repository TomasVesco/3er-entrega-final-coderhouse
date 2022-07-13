import twilio from 'twilio';
import { createTransport } from "nodemailer";

import { userDAO as DAO } from '../../dao/userDAO/index.js';
import { UtilsUserService } from './utils/index.js';
import { PossibleErrors } from '../Errors/index.js';

import { config } from '../../config/index.js';

const userDAO = new DAO();

async function saveUser(user){
    for(const propery in user){
        if(user[propery] === undefined){
            return PossibleErrors.CREATEUSERPROPS;
        }
    }
    const checkEmail = UtilsUserService.checkEmail(user.email);
    const checkPhone = UtilsUserService.checkPhone(user.phoneNumber);
    if(!checkEmail || !checkPhone){
        return 'Some value is wrong';
    } else {
        user.password = await UtilsUserService.encrypt(user.password);
        const response = await userDAO.save(user);
        if(response.code){
            return PossibleErrors.EMAIL;
        } else {
            sendEmail(response, 'New user created');
            return 'Signup success';
        }
    }
}

async function findUserByEmail(email){
    return await userDAO.find({email});
}

async function sendEmail(body, subject){  
    try {
        const transporter = createTransport({
            service: 'gmail',
            port: 587,
            auth: {
                user: config.COMPANY_EMAIL,
                pass: config.COMPANY_EMAIL_TOKEN
            }
        }); 
        const mailOptions = {
            from: 'Servidor Node.js',
            to: config.ADM_EMAIL,
            subject:`${subject}`,
            html: `${body}`
        }
        await transporter.sendMail(mailOptions);
    } catch (error) {
        return error;
    }
}

async function sendWP(phone, body){
    try {
        const client = twilio(config.WP_ACCOUNT_SID, config.WP_AUTH_TOKEN);
 
        client.messages 
            .create({ 
                from: 'whatsapp:+14155238886',       
                body: `${body}`, 
                to: `whatsapp:${phone}`
            }) 
            .done();
    } catch(error){
        return error;
    }
}

export const UserService = {
    saveUser,
    findUserByEmail,
    sendEmail,
    sendWP
}