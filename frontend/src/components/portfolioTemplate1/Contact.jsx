const Contact = () => (
    <section id="contact" className="py-12">
      <h2 className="text-center text-4xl font-bold">Contact Me</h2>
      <form className="max-w-lg mx-auto mt-6">
        <input type="text" placeholder="Name" className="block w-full p-2 mb-4 border rounded" />
        <input type="email" placeholder="Email" className="block w-full p-2 mb-4 border rounded" />
        <textarea placeholder="Message" className="block w-full p-2 mb-4 border rounded"></textarea>
        <button className="w-full p-2 bg-cyan-500 rounded text-white">Submit</button>
      </form>
    </section>
  );

  export default Contact;