import discordIcon from "../assets/icons/discord.svg";
import facebookIcon from "../assets/icons/facebook.svg";
import dribbbleIcon from "../assets/icons/dribbble.svg";
import instagramIcon from "../assets/icons/instagram.svg";
import beIcon from "../assets/icons/be.svg";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact__info">
        <h2 className="contact__title">Let’s work together</h2>
        <p className="contact__text">
          This is a template Figma file, turned into code using Anima. Learn
          more at AnimaApp.com This is a template Figma file, turned into code
          using Anima. Learn more at AnimaApp.com
        </p>
        <div className="contact__icons">
          <a href="/" target="_blank">
            <img src={discordIcon} alt="icon" />
          </a>
          <a href="/" target="_blank">
            <img src={facebookIcon} alt="icon" />
          </a>
          <a href="/" target="_blank">
            <img src={dribbbleIcon} alt="icon" />
          </a>
          <a href="/" target="_blank">
            <img src={instagramIcon} alt="icon" />
          </a>
          <a href="/" target="_blank">
            <img src={beIcon} alt="icon" />
          </a>
        </div>
      </div>
      <form
        className="contact__form"
        action="https://getform.io/f/8bdf4752-b08f-4992-997b-9d0dcb101deb"
        method="POST"
      >
        <input
          className="contact__form-name"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className="contact__form-email"
          type="text"
          name="email"
          placeholder="Email"
        />
        <textarea
          className="contact__form-msg"
          name="message"
          placeholder="Type your message here"
        />
        <button className="contact__form-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
