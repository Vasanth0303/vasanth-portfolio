const category = [
  {
    title: "Frontend",
    items: ["HTML", "CSS (Tailwind CSS)", "JavaScript (ES6+)", "React.js"]
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js"]
  },
  {
    title: "Database",
    items: ["MySQL", "MongoDB", "Mongoose"]
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "MySQL Workbench", "MongoDB Atlas"]
  },
  {
    title: "Concepts",
    items: [
      "REST API Development",
      "Cookies",
      "JWT Authentication",
      "Bcrypt Password Hashing",
      "Nodemailer OTP",
      "React Hooks",
      "React Router"
    ]
  },
  {
    title: "Soft Skills",
    items: ["Communication", "Problem Solving", "Analytical Thinking", "Adaptability"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 w-10/12 mx-auto text-white">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.map((cat) => (
          <div key={cat.title}>
            <h3 className="text-green-400 text-xl mb-3">{cat.title}</h3>
            <div className="flex flex-col gap-2">
              {cat.items.map((item) => (
                <div
                  key={item}
                  className="bg-[#111] border border-gray-700 px-3 py-2 rounded text-gray-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
