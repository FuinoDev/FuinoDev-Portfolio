function Contact() {
  return (
    <main>
      <section>
        <h1>Contact Me</h1>

        <p>
          Have a project or opportunity? Send me a message.
        </p>

        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              rows={5}
            />
          </div>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </main>
  );
}

export default Contact;