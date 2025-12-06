function Contact() {
  return (
    <section id="contact" className="sec-css">
      <h3 className="h3-bg">CONTACT US</h3>
      <hr className="hr-orange" />
      <p className="p-css">
        Lorem ipsum is not simply random text. It has roots in a piece or
        classical at hampaen-syaney corege.
      </p>
      <div className="container">
        <div className="aside-contact">
          <div className="contact-info">
            <p>
              Mobile Number <br />
              <a href="tel:+1357733214442">+1357733214442</a>
            </p>
            <p>
              Email Address <br />
              <a href="mailto:demo@demo.com">demo@demo.com</a>
            </p>
          </div>
          <form method="post" action="#">
            <h4>Make An Appointment</h4>
            <input type="text" id="name" name="name" placeholder="Your Name" />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
            />
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </form>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5206.369417739571!2d-70.55631433928019!3d41.45495813513231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1str!2str!4v1764179662137!5m2!1str!2str"
          width={600}
          height={450}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
export default Contact;
