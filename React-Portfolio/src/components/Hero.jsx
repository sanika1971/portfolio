import React from "react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 lg:pt-0">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl text-gray-400">Hi, I'm</h2>

            <h2 className="text-5xl lg:text-7xl font-bold">
              Sanika{" "}
              <span className="bg-gradient-neon bg-clip-text text-transparent">
                       Gaikwad Patil
              </span>
            </h2>

            <h2 className="text-3xl lg:text-4xl text-gray-300">
              Full Stack Developer
            </h2>

            <p className="text-gray-400 text-lg max-w-xl">
              Aspiring Software Engineer | Java, Python & MERN Stack Developer | Ex-Intern @ Y-Hills | B.Tech CSE Student passionate about building scalable, efficient, and user-friendly applications with a strong focus on clean code and continuous learning.
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            <a 
             href="/Sanika-CV.pdf" 
             download="Sanika-Gaikwad-CV.pdf"
              className="px-8 py-3 bg-gradient-neon text-white rounded-full font-medium hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2">
                                              
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
           </svg>
          Download CV
             </a>

            <button className="px-8 py-3 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary/10 transition-all duration-300 transform hover:-translate-y-1">
              Contact Me
            </button>
          </div>
        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="relative flex justify-center">
          <div className="relative w-64 h-64 lg:w-80 lg:h-80">

            {/* Glow background */}
            <div className="absolute inset-0 bg-gradient-neon rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>

            {/* Image Border */}
            <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-br from-primary via-secondary to-accent">
              <div className="w-full h-full rounded-full overflow-hidden bg-dark">

                {/* ✅ PROFILE IMAGE */}
                <img
                  src="/sanika.png"
                  alt="Sanika Gaikwad"
                  className="w-full h-full object-contain rounded-full"
                />

              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl rotate-12 opacity-80 animate-float-slow"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full animate-float-slow animation-delay-2000"></div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
