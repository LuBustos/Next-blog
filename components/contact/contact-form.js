import { useEffect, useState } from "react";
import classes from "./contact-form.module.css";
import Notification from "../ui/notification";

function ContactForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    if (requestStatus === "pending" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

  async function sendMessageHandler(event) {
    event.preventDefault();

    setRequestStatus("pending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          name: name,
          message: message,
        }),
        headers: { "Content-type": "application/json" },
      });
      const data = response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }
      setRequestStatus("success");
      setEmail("");
      setName("");
      setMessage("");
    } catch (error) {
      setError(error.message);
      setRequestStatus("error");
    }
  }

  function handlerEmail(event) {
    setEmail(event.target.value);
  }
  function handlerName(event) {
    setName(event.target.value);
  }
  function handlerMessage(event) {
    setMessage(event.target.value);
  }

  let notification;
  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "sending message...",
      message: "Your message is on its way",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "erorr",
      title: "Error!",
      message: error,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type={"email"}
              id="email"
              required
              value={email}
              onChange={handlerEmail}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type={"text"}
              id="name"
              required
              value={name}
              onChange={handlerName}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your message</label>
          <textarea
            id="message"
            rows="5"
            required
            value={message}
            onChange={handlerMessage}
          />
        </div>
        <div className={classes.actions}>
          <button onClick={sendMessageHandler}>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}
export default ContactForm;
