require('dotenv').config();
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const welcomeMail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'TaskManagerAPI<contact.nimishsrivastav@gmail.com>',
    subject: 'Thanks for using Task Manager API!',
    text: `Welcome to the API ${name}!\n You can bla bla bla bla bla bla bla.`
  });
}

const thanksMail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'TaskManagerAPI<contact.nimishsrivastav@gmail.com>',
    subject: 'Thanks for using Task Manager API!',
    text: `Thanks for using the API ${name}!\n You can bla bla bla bla bla bla bla.`
  });
}

module.exports = {
  welcomeMail,
  thanksMail
}

// sgMail.send({
//   to: 'Nimish Srivastav<nimish.srivastav@gmail.com>',
//   from: 'TaskManagerAPI<contact.nimishsrivastav@gmail.com>',
//   subject: 'Subject 1',
//   text: 'hello'
// }).then(() => {
//   console.log('Message Sent!');
// }).catch((e) => {
//   console.log(e.response.body);
// });