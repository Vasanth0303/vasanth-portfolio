import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const Projects = () => {
  const [activeImages, setActiveImages] = useState<string[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showArrows, setShowArrows] = useState(false);

  const openModal = (images: string[], withArrows: boolean) => {
    setActiveImages(images);
    setCurrentIndex(0);
    setShowArrows(withArrows);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveImages(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    if (!activeImages) return;
    setCurrentIndex((prev) => (prev + 1) % activeImages.length);
  };

  const prevImage = () => {
    if (!activeImages) return;
    setCurrentIndex(
      (prev) => (prev - 1 + activeImages.length) % activeImages.length
    );
  };

  // ESC + Arrow keys
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!activeImages) return;

      if (e.key === "Escape") closeModal();
      if (showArrows && e.key === "ArrowRight") nextImage();
      if (showArrows && e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeImages, showArrows]);

  return (
    <>
      <section id="projects" className="py-20 w-10/12 mx-auto">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>

        <ProjectCard
          title="MERN Authentication System (OTP Verification + Password Reset)"
          details={[
            "Designed and developed 15+ RESTful APIs for user authentication and authorization",
            "Implemented JWT-based login system, improving session security and access control",
            "Built email OTP verification and password reset flow, handling 100+ test user cases",
            "Applied bcrypt password hashing, preventing plaintext credential storage",
            "Tested APIs using Postman, reducing API errors during frontend integration",
            "Implemented input validation and error handling middleware, improving API reliability and preventing invalid request failures"
          ]}
          images={[ "/auth2.jpeg", "/auth3.jpeg",
            "/auth4.jpeg",  "/auth6.jpeg",
             "/auth9.jpeg",
            "/auth10.jpeg", "/auth11.jpeg", "/auth12.jpeg",
            "/auth13.jpeg", "/auth15.jpeg",
            "/auth16.jpeg","/auth14.jpeg"

          ]}
          github="https://github.com/Vasanth0303/mern-auth.git"
          openModal={openModal}
        />

        <ProjectCard
          title="Task Management / To-Do List Application"
          details={[
            "Developed a full-stack task management system supporting CRUD operations",
            "Implemented role-based user authentication using JWT",
            "Added task prioritization (Low/Medium/High), improving task tracking efficiency",
            "Integrated frontend and backend using Axios, ensuring smooth data flow",
            "Implemented role-based user authentication using JWT",
            "Designed efficient MongoDB schemas and indexing, improving task retrieval performance during search and filtering"
          ]}
          images={[
            "/task1.jpeg",
            "/task2.jpeg",
            "/task3.jpeg",
            "/task4.jpeg",
            "/task5.jpeg",
            "/task6.jpeg",
            "/task7.jpeg"
          ]}
          github="https://github.com/Vasanth0303/task-manager.git"
          openModal={openModal}
        />

        <ProjectCard
          title="Pizza Hut – Food Ordering Web Application"
          details={[
            "Created secure backend APIs for cart, orders, and user sessions",
            "Implemented dynamic cart functionality with real-time price calculations",
            "Enabled user-specific cart and order handling using JWT authentication",
            "Improved UI responsiveness and user experience across devices",
            "Structured backend using MVC architecture, improving code maintainability and scalability for future features"
          ]}
          images={["/pizza1.jpeg", "/pizza2.jpeg", "/pizza3.jpeg", "/pizza5.jpeg", "/pizza6.jpeg", "/pizza7.jpeg", "/pizza8.jpeg", "/pizza9.jpeg",  "/pizza10.jpeg"]}
          github="https://github.com/Vasanth0303/pizza-hut.git"
          openModal={openModal}
        />
      </section>

      {activeImages &&
        createPortal(
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[9999]">

            {/* CLOSE BUTTON */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-8 text-white text-3xl font-bold hover:text-red-400 transition"
            >
              ✕
            </button>

            {/* ARROWS */}
            {showArrows && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-8 text-white text-5xl hover:scale-125 transition"
                >
                  ‹
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-8 text-white text-5xl hover:scale-125 transition"
                >
                  ›
                </button>
              </>
            )}

            {/* IMAGE WRAPPER */}
            <div className="flex flex-col items-center justify-center w-full h-full px-4">

              <img
                src={activeImages[currentIndex]}
                alt="Project"
                className="max-w-[95vw] max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />

              {/* COUNTER */}
              <div className="mt-4 text-white text-sm bg-black/60 px-4 py-1 rounded-full">
                {currentIndex + 1} / {activeImages.length}
              </div>

            </div>
          </div>,
          document.getElementById("modal-root")!
        )}
    </>
  );
};

/* PROJECT CARD */
const ProjectCard = ({
  title,
  details,
  images,
  github,
  openModal,
}: {
  title: string;
  details: string[];
  images: string[];
  github: string;
  openModal: (images: string[], withArrows: boolean) => void;
}) => {
  return (
    <div className="bg-[#111] border border-gray-700 p-6 rounded-lg mb-6">
      <div className="flex flex-col md:flex-row md:justify-between gap-6">

        <div className="md:w-3/4">
          <h3 className="text-green-400 text-xl font-semibold">
            {title}
          </h3>

          <ul className="list-disc ml-6 mt-3 text-gray-400">
            {details.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <a
            className="inline-block mt-4 text-green-400 hover:underline"
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            👉 View on GitHub
          </a>
        </div>

        <div className="md:w-1/4 flex flex-col items-center">
          <img
            src={images[0]}
            alt="Project Preview"
            onClick={() => openModal(images, true)}
            className="rounded-lg border border-gray-700 w-64 cursor-pointer hover:scale-105 transition"
          />

          <p
            onClick={() => openModal(images, true)}
            className="text-sm text-gray-400 mt-2 cursor-pointer hover:text-green-400"
          >
            Click to view full gallery →
          </p>
        </div>

      </div>
    </div>
  );
};

export default Projects;