import sendMail from "../utils/mailBuilder";

export const registerMailService = (name:string, activationCode: string, email:string) => {
    // const html = `<!DOCTYPE html><html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>LMS Activation Email</title><style type="text/css">body{margin: 0;padding: 0; min-width: 100%;font-family: Arial, Helvetica, sans-serif;font-size: 16px;line-height: 1.5;background-color: #fafafa;color: #222222;}a{color: #000;text-decoration: none;}h1{font-size: 24px;font-weight: 700;line-height: 1.25;margin-top: 0;margin-bottom: 15px;text-align: center;}p{margin-top: 0;margin-bottom: 24px;}table td{vertical-align: top;}.email-wrapper{max-width: 600px;margin: 0 auto;}.email-header{background-color: #0070f3; padding: 24px;color: #ffffff;}.email-body{padding: 24px;background-color: #ffffff;}.email-footer{background-color: #f6f6f6;padding: 24px;}</style></head><body><div class="email-wrapper"><div class="email-header"><h1>Wellcome to LMS</h1></div><div class="email-body"><p>Hello ${name}</p><p>Thank you for registering with LMS. To activate youe account, please use the following activation code:</p><h2>${activationCode}</h2><p>Please enter this code on the activation page within the next 5 minutes.</p><p>If you did not register for a BaLT account, please ignore this email.</p></div><div class="email-footer"><p>If you have any questions, please don't hesitate to contact us at <a href="mailto:khailendraprasad@gmail.com"> khailendraprasad@gmail.com</a></p></div></div></body></html>`
    const html =''
    const subject = "Activate your account";
    // sendMail(email, subject, html);
    console.log("activationCode From mail service"+ activationCode);
    
}