import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
    // console.log(event)
    const body = await readBody(event);
    console.log(body)

    const config = useRuntimeConfig()

    // console.log(config)
  
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'tonygreen@theguttersgreen.com',
        pass: 'hhszcduwxdqfwprr',
      },
    });

    transporter.verify(function(error, success) {
      if (error) {
            console.log('error verifying', error);
      } else {
            console.log('Server is ready to take our messages');
      }
    });
  
    const mailOptions = {
      from: body.email,
      to: config.public.businessEmail,
      subject: `New Contact from ${body.name}`,
      text: body.message,
    };
    
    try {
      await transporter.sendMail(mailOptions)
      return {
        statusCode: 200,
        message: 'Email sent!'
      }
    } catch (error) {
      return {
        statusCode: 500,
        message: 'There was an error sending the email.',
        error: error
      }
    }
  })