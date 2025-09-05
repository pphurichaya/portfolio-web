import React from "react";
import { motion } from "framer-motion";
import {
  User,
  MapPin,
  GraduationCap,
  BadgeCheck,
  Briefcase,
  Mail,
  Phone,
  Download,
} from "lucide-react";

const scrollToContact = () => {
  const element = document.querySelector("#contact");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const personalInfo = [
  { icon: User, label: "Name", value: "Phurichaya Isariyadol" },
  { icon: MapPin, label: "Location", value: "Bangkok, Thailand" },
  // { icon: Mail, label: "Email", value: "phurichaya.dear@gmail.com" },
  // { icon: Phone, label: "Phone", value: "095 679 7464" },
  { icon: Briefcase, label: "Experience", value: "9 months (internship)" },
  { icon: BadgeCheck, label: "Status", value: "Open to Full-time" },
];

const education = [
  {
    icon: GraduationCap,
    label: "Education",
    value: {
      university: "Mahanakorn University of Technology",
      degree: "Data Science and System Management Engineering",
      graduated: "Graduated in 2025",
      coursework: [
        "A field related to Web Programming, Database Systems,",
        "Data Structure, Software Engineering",
      ],
    },
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

// Component แสดงแต่ละ item
const InfoItem = ({ icon: Icon, label, value }) => (
  <motion.div
    variants={itemVariants}
    className="flex items-start space-x-4 group"
  >
    <div className="bg-primary/10 p-2.5 rounded-lg group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
      <Icon className="h-5 w-5 text-primary" />
    </div>
    <div className="min-w-0 flex-1">
      <p className="text-sm font-medium text-muted-foreground mb-1 uppercase tracking-wide">
        {label}
      </p>
      <div className="font-semibold text-foreground leading-relaxed">
        {typeof value === "string" ? (
          value
        ) : (
          <>
            <div>{value.university}</div>
            <div className="text-sm text-muted-foreground mt-1">
              {value.degree}
            </div>
            <div className="text-sm text-gray-400 mt-1">
              {value.graduated} <br />
              {Array.isArray(value.coursework)
                ? value.coursework.map((line, i) => <div key={i}>{line}</div>)
                : value.coursework}
            </div>
          </>
        )}
      </div>
    </div>
  </motion.div>
);

// Card รวม personal info + education
const InfoCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
    viewport={{ once: true }}
    className="bg-card p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-500 mb-8 "
  >
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h2 className="text-3xl sm:text-4xl lg:text-3xl text-primary font-bold mb-4 sm:mb-6">
        Personal information
      </h2>
      <p className="text-lg sm:text-sm text-muted-foreground max-w-3xl mx-auto px-4">
        I have dedicated time to learning and refining my skills in
        frontend development including{" "}
        <b>React.js, JavaScript, Tailwind CSS,</b> related technologies. I have
        also built{" "}
        <a href="#projects" className="font-bold underline hover:text-primary">
          3 personal projects
        </a>
        <br />
        <br />
        Currently, I continue gaining hands-on frontend experience through new
        projects, and I am fully ready to contribute actively and collaborate
        with a team.
      </p>

      {/* Separator */}
      <hr className="border-t border-border mt-6 mb-6" />

      {/* Personal Info */}
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        {personalInfo.map((info) => (
          <InfoItem key={info.label} {...info} />
        ))}
      </div>

      {/* Education */}
      <div className="space-y-4">
        {education.map((info) => (
          <InfoItem key={info.label} {...info} />
        ))}
      </div>

      {/* Separator */}
      <hr className="border-t border-border mt-6 mb-6" />

      {/* button CV + Contect */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
      >
        <button
          size="lg"
          className="w-full sm:w-auto flex items-center justify-center border-2 px-6 sm:px-8 py-3 text-base transition-all duration-200 hover:scale-105 min-h-[48px] rounded-full"
        >
          <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
          Download CV
        </button>

        <button
          size="lg"
          variant="outline"
          onClick={scrollToContact}
          className="w-full sm:w-auto flex items-center justify-center px-6 sm:px-8 py-3 bg-primary hover:bg-primary/90 text-base text-primary-foreground transition-all duration-200 hover:scale-105 min-h-[48px] rounded-full"
        >
          <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
          Work Together
        </button>
      </motion.div>
      {/* <div className="text-xs text-muted-foreground mt-1">
        Latest update: Aug 2025
      </div> */}
    </motion.div>
  </motion.div>
);

// Avatar Component แยกออกมา
const Avatar = ({
  src = "/avatar.png",
  alt = "Profile avatar",
  className = "",
}) => (
  <div className="relative mx-auto">
    <motion.img
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      viewport={{ once: true }}
      src={src}
      alt={alt}
      className={`w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-background shadow-2xl ${className}`}
      /*onError={(e) => {
        e.target.src = 'https://placehold.co/400x400/e5e7eb/6b7280?text=Avatar';
      }}*/
    />
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent" />
  </div>
);

// Main About Section
const About = () => {
  const experienceText = "9 months";

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            I’m a recent graduate with 9 months of internship experience as a
            Programmer (Odoo ERP). I’m passionate about web development and
            eager to start my career as a <b>Junior Frontend Developer</b>
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Avatar/>
          <InfoCard />
        </div>
      </div>
    </section>
  );
};

export default About;
