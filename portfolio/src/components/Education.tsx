const Education = () => {
  return (
    <section id="education" className="py-20 w-10/12 mx-auto">
      <h2 className="text-3xl font-bold mb-6">Education  & Training</h2>

      <div className="bg-[#111] border border-gray-700 p-6 rounded-lg">
        <h3 className="text-green-400 text-xl font-semibold">
          Panimalar Engineering College
        </h3>

        <p className="text-gray-300 mt-1">
          Bachelor of Engineering (Mechanical Engineering) — CGPA: 8.0/10
        </p>

        <h4 className="text-green-400 text-lg mt-6">
          Full Stack MERN Developer (Training)
        </h4>

        <p className="text-gray-300">
          Apollo Computer Education Ltd., Kanchipuram  
          
        </p>Jan 2025 – Aug 2025

        <ul className="list-disc ml-6 mt-3 text-gray-300 leading-relaxed">
          <li> Intensive hands-on training in end-to-end MERN stack development</li>
          <li> Built full-stack applications using React, TypeScript, Node.js, Express, MongoDB
</li>
        <li>
           Implemented JWT authentication, Email OTP, password reset, and RESTful APIs
        </li>
          <li>
            Worked with Git/GitHub, Postman, and followed SDLC and Agile practices
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
