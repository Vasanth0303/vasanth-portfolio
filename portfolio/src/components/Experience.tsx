const Experience = () => {
  return (
    <section id="experience" className="py-20 w-10/12 mx-auto">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>

      <div className="bg-[#111] border border-gray-700 p-6 rounded-lg">
        <h3 className="text-green-400 text-xl font-semibold">
          Quality Trainee— Hyundai Motor India Pvt. Ltd.
        </h3>

        <p className="text-gray-400 mt-1">October 2022 – October 2023</p>

        <ul className="list-disc ml-6 mt-3 text-gray-300 leading-relaxed">
          <li>Performed inspection and quality testing of components</li>
          <li>Documented defects and supported root cause analysis</li>
          <li>Ensured production quality and SOP compliance</li>
          <li>Coordinated with QC team for improvement</li>
        </ul>

        <a
  href="/Vasanthcertificate.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="text-green-400 hover:underline mt-3 inline-block"
>
  Certification: View Certificate
</a>

      </div>
    </section>
  );
};

export default Experience;
