const Contact = () => {
  return (
    <section id="contact" className="py-20 w-10/12 mx-auto mb-24">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <div className="bg-[#111] border border-gray-700 p-6 rounded-lg">
        <p className="text-gray-300">Email:</p>
        <a
          href="mailto:vasanthmrsir@gmail.com"
          className="text-green-400 hover:underline"
        >
          vasanthmrsir@gmail.com
        </a>

        <p className="text-gray-300 mt-4">Phone:</p>
        <p className="text-gray-400">+91 6383049086</p>

        <p className="text-gray-300 mt-4">Location:</p>
        <p className="text-gray-400"> Bangalore, Karnataka</p>

        <div className="mt-4 flex gap-6">
          <a
            href="https://github.com/Vasanth0303"
            target="_blank"
            className="text-green-400 hover:underline"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/vasanth-j-078853393"
            target="_blank"
            className="text-green-400 hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
