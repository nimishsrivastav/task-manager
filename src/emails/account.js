require('dotenv').config();
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const welcomeMail = (email, name) => {
  sgMail.send({
    to: email,
    from: '<email address>',
    subject: 'Thanks for trying Task Manager API!',
    html: 
    `<div style="background-color: #f1f1f1; padding: 40px; font-family: 'Google Sans', Roboto,RobotoDraft,Helvetica,Arial,sans-serif;">
        <h3>Hello ${name},</h3>
        <p>Thanks for trying this API</p>
        <p>This is simple task manager API created using Node.js and MongoDB and hosted on Heroku.</p>
        <p><i>Features of this API: </i></p>
        <p>
          <ui>
            <li>You can create, read, update, delete users and tasks.</li>
            <li>Mails will be sent to your email address (if you enter correctly! :P) on creating new user and deleting user.</li>
            <li>Plus, repo is available on <a href="https://github.com/nimishsrivastav/task-manager">GitHub</a>. So you can make changes and use it as your own!</li>
          </ul>
        </p>
        <br>
        <h5><strong>Note: </strong>DO NOT reply to this email as this mail address is not monitored. 
        If you want to connect, please reply to <email address></h5>
     </div>`
  });
}

const thanksMail = (email, name) => {
  sgMail.send({
    to: email,
    from: '<email address>',
    replyTo: '<email address>',
    subject: 'Sad to see you go! :(',
    html: 
    `<div style="background-color: #f1f1f1; padding: 40px; font-family: 'Google Sans', Roboto,RobotoDraft,Helvetica,Arial,sans-serif;">
        <h3>Hello ${name},</h3>
        <p>It's sad that you're discontinuing from this API. Anyway, thanks for giving this a shot!</p>
        <p>Kindly share your feedback by replying to this email. </p>
        <p>Thank you once again! :)</p>
        <br>
        <h5><strong>Note: </strong>DO NOT reply to this email as this mail address is not monitored. 
        If you want to connect, please reply to <email address></h5>
     </div>`
  });
}

module.exports = {
  welcomeMail,
  thanksMail
}