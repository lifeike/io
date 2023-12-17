import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";
import emailjs from "@emailjs/browser";
import React, { useState } from "react";
// useRouter
import { useRouter } from "next/navigation";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;
  const { contact_form_action } = config.params;
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  var templateParams = { name, email, subject, message };
  const sendEmail = async () => {
    emailjs
      .send(
        "service_a2hw60c",
        "template_ayvg0w7",
        templateParams,
        "LNIXWNBcWiH30Gpa8"
      ) //use your Service ID and Template ID and template content and public key
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          router.push("/", { scroll: false });
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        <div className="section row pb-0">
          <div className="col-12 md:col-6 lg:col-7">
            <form
              className="contact-form"
              method="POST"
              // action={contact_form_action}
            >
              <div className="mb-3">
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="form-input w-full rounded"
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="form-input w-full rounded"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                  className="form-input w-full rounded"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="form-textarea w-full rounded-md"
                  rows="7"
                  placeholder="Your message"
                />
              </div>
              <button
                onClick={sendEmail}
                type="submit"
                className="btn btn-primary"
              >
                Send Now
              </button>
            </form>
          </div>
          <div className="content col-12 md:col-6 lg:col-5">
            {markdownify(info.title, "h4")}
            {markdownify(info.description, "p", "mt-4")}
            <ul className="contact-list mt-5">
              {info.contacts.map((contact, index) => (
                <li key={index}>
                  {markdownify(contact, "strong", "text-dark")}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
