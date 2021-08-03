import { useState } from 'react';
import classes from './contact-form.module.css'


function ContactForm(){
    const [email,setEmail] = useState('')
    const [name,setName] = useState('')
    const [message,setMessage] = useState('')

    function sendMessageHandler(event){
        event.preventDefault();
        fetch('/api/contact',{
            method: 'POST',
            body:JSON.stringify({
                email:email,
                name:name,
                message:message
            })
        })
    }

    function handlerEmail(event){
        setEmail(event.target.value)
    }
    function handlerName(event){
        setName(event.target.value)
    }
    function handlerMessage(event){
        setMessage(event.target.value)
    }


    return <section className={classes.contact}>
        <h1>How can I help you?</h1>
        <form className={classes.form}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor='email' >
                        Your Email
                    </label >
                    <input type={"email"} id='email' required value={email} onChange={handlerEmail}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='name' >
                        Your Name
                    </label >
                    <input type={"text"} id='name' required value={name} onChange={handlerName}/>
                </div>
            </div>
            <div className={classes.control}>
                    <label htmlFor='message' >
                        Your message
                    </label >
                    <textarea  id='message' rows='5' required value={message} onChange={handlerMessage}/>
            </div>
            <div className={classes.actions}>
                <button>Send Message</button>
            </div>
        </form>
    </section>
}
export default ContactForm