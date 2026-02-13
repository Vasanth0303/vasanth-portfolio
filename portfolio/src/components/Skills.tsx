const category = [
  {
    title: "Programming Languages:",
    items: ["Python" , " JavaScript (ES6+)", "  TypeScript"]
  },
  {
    title: "Frontend",
    items: [" React.js ", " React Hooks", "JReact Router DOM ", " HTML5 ", " TailwindCSS" , "Axios"]
  },
  {
    title: "Backend",
    items: [" Node.js", " Express.js",  "Middleware"]
  },
  {
    title: "Database",
    items: [" MongoDB Atlas", " MySQL", " Mongoose ODM",  "Indexing"]
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", " Visual Studio Code", "Postman"]
  },
  {
    title: "Concepts",
    items: [
      " API Security",
      " MVC Architecture",
      "State Management ",
      " Debugging",
      " SDLC Basics",
      " Agile Workflow",
      
    ]
  },
  {
    title: "Deployment",
    items: ["Vercel", "Render", "MongoDB Atlas","Netlify"]
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
