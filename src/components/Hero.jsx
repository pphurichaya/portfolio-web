import React from "react";
import { Download, Github, Mail } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16 sm:pt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent font-reenie leading-tight">
            Hello! I Am Phurichaya
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Frontend Developer
            <br className="hidden sm:block" />
            <span className="sm:hidden"> - </span>Bringing designs to life with
            clean, responsive code
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
        >
          <button 
            size="lg" 
            className="w-full sm:w-auto flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 text-base transition-all duration-200 hover:scale-105 min-h-[48px] rounded-full"
          >
            <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Download CV
          </button>
          
          <button 
            size="lg" 
            variant="outline" 
            onClick={scrollToContact}
            className="w-full sm:w-auto flex items-center justify-center border-2 px-6 sm:px-8 py-3 text-base transition-all duration-200 hover:scale-105 min-h-[48px] rounded-full"
          >
            <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Let's Work Together
          </button>
          
          <button 
            size="lg" 
            variant="ghost" 
            className="w-full sm:w-auto flex items-center justify-center px-6 sm:px-8 py-3 text-base transition-all duration-200 hover:scale-105 min-h-[48px]"
            onClick={() => window.open('https://github.com/pphurichaya', '_blank')}
          >
            <Github className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            GitHub
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        >
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
