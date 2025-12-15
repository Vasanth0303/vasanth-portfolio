const Projects = () => {
  return (
    <section id="projects" className="py-20 w-10/12 mx-auto">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <div className="bg-[#111] border border-gray-700 p-6 rounded-lg">
        <h3 className="text-green-400 text-xl font-semibold">
          MERN Authentication System (OTP Verification + Password Reset)
        </h3>

       

        <ul className="list-disc ml-6 mt-3 text-gray-400">
          <li>Tech Stack: React, Tailwind CSS, Node.js, Express.js, MongoDB Atlas, JWT, Nodemailer, Bcrypt
</li>
          <li> A secure full-stack authentication application that supports user signup, login, email-based OTP verification, and
passwword reset.
</li>
          <li>Features: Email OTP verification, Password reset using OTP, JWT-based authentication, Secure password
hashing, Fully responsive UI, Backend API testing with Postman</li>
          <li>My Role: Built REST APIs, Designed frontend UI, Integrated frontend backend, Implemented authentication
logic
</li>
          
        </ul>

        <a
          className="inline-block mt-4 text-green-400 hover:underline"
          href="https://github.com/Vasanth0303/mern-auth.git"
          target="_blank"
        >
          👉 View on GitHub
        </a>
      </div><br />
      <div className="bg-[#111] border border-gray-700 p-6 rounded-lg">
        <h3 className="text-green-400 text-xl font-semibold">
          Task Management / To-Do List Application
        </h3>

       

        <ul className="list-disc ml-6 mt-3 text-gray-400">
          <li> Tech Stack: React, TypeScript, Node.js, Express.js, MongoDB, JWT, Axios
</li>
          <li> A full-stack task management application that allows users to create, update, delete, and track tasks efficiently.
</li>
          <li>Features : User authentication, Add/Edit/Delete tasks, Task completion tracking, Priority levels
(Low/Medium/High), Search & filter tasks, Task summary dashboard, Responsive UI</li>
          <li> My Role : Built REST APIs, Designed frontend UI, Integrated frontend and backend, Implemented task logic and
state management
</li>
          
        </ul>

        <a
          className="inline-block mt-4 text-green-400 hover:underline"
          href="https://github.com/Vasanth0303/task-manager.git"
          target="_blank"
        >
          👉 View on GitHub
        </a>
      </div>
    </section>


  );
};

export default Projects;
