import "./ContactMe.css";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { Link } from "@chakra-ui/react";

function ContactMe() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const templateparams = {
            from_name: email,
            name: name,
            to_name: "Anirudha Mandal",
            feedback: message,
        }
        emailjs.send("service_f0do68p", "template_1icd76b", templateparams, "gvNe7r5ssqUQcVacx")
            .then(function (response) {
                console.log("Success!", response.status, response.text);
            },
                function (error) {
                    console.log("Failed...", error);
                })
    };

    return (
        <div className="contact-me-part" id="contactme">
            <div className="relative-bg"></div>
            <div className="contact-inner-part d-flex flex-column">
                <span className="about-me-text">Contact Me</span>
                <span className="why-text-sub mb-5">Lets Keep in Touch</span>
                <div>
                    <div className="contact-me-card row">
                        <div className="col-lg-6 col-md-5 col-sm-12 left-contact px-2 py-2">
                            <span className="get-in-touch">Get in touch</span>
                            <span className="profile-links">
                                <Link href="https://github.com/crusher8010" isExternal><i className="fa-brands fa-github"></i></Link>
                                <Link href="https://www.linkedin.com/in/anirudha-mandal-b3ab5a18a/" isExternal><i className="fa-brands fa-linkedin"></i></Link>
                            </span>
                            <span className="profile-det">
                                <h1>Email: anirudhamandal8010@gmail.com</h1>
                                <h1>Contact no: 9511817488</h1>
                            </span>
                            <div className="py-5 d-flex justify-content-center lottie2">
                                <lottie-player className="lottie1" src="https://assets10.lottiefiles.com/packages/lf20_3ktmthuy.json" background="transparent" speed="1" style={{ width: "300px" }} loop autoplay></lottie-player>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5 col-sm-12 my-auto">
                            <form ref={form} className="d-flex flex-column card-contact-right" onSubmit={sendEmail}>
                                <div className="input-group my-3 d-flex flex-column">
                                    <label> Name </label>
                                    <input type="text" placeholder="Enter your name..." className="input-groups" value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="input-group my-3 d-flex flex-column">
                                    <label> Email </label>
                                    <input type="text" placeholder="Enter your mail..." className="input-groups" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="input-group my-3 d-flex flex-column">
                                    <label> Message </label>
                                    <textarea type="text" placeholder="Your message..." className="input-groups" value={message} onChange={(e) => setMessage(e.target.value)} />
                                </div>
                                <div className="input-group my-3 d-flex flex-column">
                                    <input className="btn btn-success" type="submit" value="Send Message" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe;