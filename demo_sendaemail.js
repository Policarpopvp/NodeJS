var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'joaovader99@gmail.com',
    pass: 'vgxw cdfq txsj zibp '
  }
});

var mailOptions = {
  from: 'joaovader99@gmail.com',
  to: 'luanhoesel@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 
