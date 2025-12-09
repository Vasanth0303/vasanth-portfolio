const Education = () => {
  return (
    <section id="education" className="py-20 w-10/12 mx-auto">
      <h2 className="text-3xl font-bold mb-6">Education</h2>

      <div className="bg-[#111] border border-gray-700 p-6 rounded-lg">
        <h3 className="text-green-400 text-xl font-semibold">
          Panimalar Engineering College
        </h3>

        <p className="text-gray-300 mt-1">
          Bachelor of Engineering (Mechanical Engineering) — CGPA: 8.0/10
        </p>

        <h4 className="text-green-400 text-lg mt-6">
          Full Stack MERN Developer (Course)
        </h4>

        <p className="text-gray-300">
          Apollo Computer Education Ltd., Kanchipuram  
          
        </p>January 2025 – July 2025

        <ul className="list-disc ml-6 mt-3 text-gray-300 leading-relaxed">
          <li>Trained in building end-to-end MERN web applications using Python, HTML, CSS( Tailwind CSS),
React.js(both typescript and javascript), node.js, express.js, MongoDB, MySQL</li>
          <li>Includes debugging real-time web page apps and resolving frontend/backend integration issues.
</li>
          
        </ul>
      </div>
    </section>
  );
};

export default Education;
