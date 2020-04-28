const sgMail = require("@sendgrid/mail");

// const senderIdAPIKey = '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'
sgMail.setApiKey(process.env.SENDERGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "anand.raj@letsventure.com",
    subject: "welcome to my company",
    text: `it is pleasure to onboard on my company, Thanks ${name} for joing us`,
  });
};

const sendCancellationEmail = (name, email) => {
  sgMail.send({
    to: email,
    from: "anand.raj@letsventure.com",
    subject: `Sorry ${name} if any  inconvenience cause to lead you this`,
    text: `hey ${name} sorry for inconvenience cause to you, how can we help you, let me know `,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
