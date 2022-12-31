//Node.js Send an Email

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth : {
		user : 'youremail@gmail.com',
		pass : 'yourpassword'
	}
});

const mailOptions = {
	from : 'youremail@gmail.com',
	to : 'myfriend@yahoo.com',
	subject : 'Sending email using node.js',
	text : 'That was easy!'

};

transporter.sendMail(mailOptions,function(error,info){

	if(error){
		console.log(error);
	}else{
		console.log('Email sent : ' + info.response);
	}

});