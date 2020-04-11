var nodemailer = require('nodemailer');
var config = require('./config.json');

/***
 * @body 
 {
     senderName:'',
     email:'',
     replyTo:'',
     subject:'',
     messageHtml:'',
     message:''
 }

 * @config
 {
     GMAIL_EMAIL:'',
     GMAIL_PASWD:''
 }

 */
let sendGmail=function(body, cb){
        

    //console.log(config)

    if(body.toEmail===undefined )
    {
        cb({message:"Insufficient parameters supplied"})
        return ;

    }
    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport('smtps://'+config.GMAIL_EMAIL+':'+config.GMAIL_PASWD+'@smtp.gmail.com');
    
    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: '"'+body.senderName+'" <'+body.email+'>', // sender address
        bcc:  body.toEmail, // list of receivers
        replyTo:(body.replyTo!==undefined?body.replyTo:body.email),
        subject: body.subject, // Subject line
       };
    

       if((body.messageHtml!==undefined && body.messageHtml.length>4))
       {
        mailOptions.html= body.messageHtml  

       }
       else
       {
        mailOptions.text= body.message   
   
       }
       
       
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
           // console.log(error);
            cb(error)
            return;
        }
        //console.log('Message sent: ' + info.response);
        cb({info:info.response,message:"E-Mail sent succesfully !"})
    });


 
}

exports.sendGmail= function(req,res)
{
    sendGmail(req.body,function(result)
    {
        res.send(result)
    })
}