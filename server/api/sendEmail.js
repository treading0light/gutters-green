import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
    // console.log(event)
    const body = await readBody(event);
    if (body.lastName !== '') {
      console.log('WEE WOO WEE WOO, BOT DETECTED!')
      return {
        statusCode: 400
      }
    }
    console.log(body)

    const config = useRuntimeConfig()

    // console.log(config)
  
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: config.public.businessEmail,
        pass: config.businessEmailPassword,
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
      text: `Name: ${body.name} /nEmail: ${body.email} /nPhone: ${body.phone} /n
      Message: /n${body.message}` ,
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