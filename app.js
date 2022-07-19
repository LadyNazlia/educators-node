document.querySelector('button').addEventListener('click', emailRes) 


let receiver = document.querySelector('#fname').value + document.querySelector('#lname').value
let receiverEmail = document.querySelector('#email').value

function emailRes() {
    
    let transporter = nodemailer.createTransport({
        sendmail: true,
        newline: 'unix',
        path: '/usr/sbin/sendmail'
    })
    
    transporter.sendMail({
    from: "sender@email.com",
    to: receiverEmail,
    subject: "Thanks for Reaching Out!",
    text: "We have received your message and will reach out to you with futher information soon."
    })

    }

