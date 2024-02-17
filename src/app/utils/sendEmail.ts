import config from '../config'
import nodemailer from 'nodemailer'

export const sendEmail = async (to: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com.',
    port: 587,
    secure: config.node_env === 'production',
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: 'monnavai54@gmail.com',
      pass: 'xfqj dshz wdui ymtb',
    },
  })

  await transporter.sendMail({
    from: 'monnavai54@gmail.com', // sender address
    to, // list of receivers
    subject: 'Reset your password within ten mins!', // Subject line
    text: '', // plain text body
    html, // html body
  })
}
