import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Moon, 
  Sun, 
  Terminal,
  Cpu,
  Braces,
  GitBranch,
  Monitor,
  Layout,
  Settings,
  Code,
  Server,
  Database
} from 'lucide-react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Update scroll progress
      setScrollProgress((currentScrollY / scrollHeight) * 100);
      
      // Hide/show header on scroll
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white' 
        : 'bg-gradient-to-br from-gray-50 to-white text-gray-900'
    }`}>
      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-blue-500 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating Navigation */}
      <AnimatePresence>
        {isVisible && (
          <motion.nav 
            className={`fixed top-0 left-0 right-0 z-40 ${
              isDarkMode ? 'bg-gray-900/80' : 'bg-white/80'
            } backdrop-blur-lg`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
              <motion.span 
                className="text-xl font-bold"
                variants={floatingVariants}
                initial="initial"
                animate="animate"
              >
                JM
              </motion.span>
              <div className="flex items-center gap-4">
                <button 
                  onClick={toggleTheme}
                  className={`p-2 rounded-full transition-colors ${
                    isDarkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-200 text-gray-900'
                  }`}
                >
                  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <motion.header 
        className="container mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="flex items-center gap-4 mb-6"
            variants={itemVariants}
          >
            <Terminal className="w-8 h-8 text-blue-500" />
            <span className="text-blue-500 font-mono">ready for new challenges_</span>
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            Joseph Mwamba
          </motion.h1>
          <motion.h2 
            className={`text-2xl md:text-3xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-8`}
            variants={itemVariants}
          >
            Full Stack Web Developer
          </motion.h2>
          <motion.p 
            className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-8 max-w-2xl leading-relaxed`}
            variants={itemVariants}
          >
            Dynamic Web Developer with a proven track record at Gecogamesstudio, excelling in responsive design and user experience. Expert in HTML, CSS, and JavaScript frameworks, I deliver high-performance websites with a keen eye for aesthetics.
          </motion.p>
          <motion.div 
            className="flex gap-4"
            variants={itemVariants}
          >
            <a 
              href="https://github.com/JosephTy7" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`p-3 rounded-lg transition-all transform hover:scale-110 ${
                isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/joseph-mwamba-ba9844320/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`p-3 rounded-lg transition-all transform hover:scale-110 ${
                isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:mwambaj2002@gmail.com" 
              className={`p-3 rounded-lg transition-all transform hover:scale-110 ${
                isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </motion.header>

      {/* Tech Stack Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-100'}`}>
        <motion.div 
          className="container mx-auto px-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="flex items-center gap-4 mb-12 justify-center"
            variants={itemVariants}
          >
            <Cpu className="w-8 h-8 text-blue-500" />
            <h2 className="text-3xl font-bold text-center">Tech Stack</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard 
              icon={<Code />}
              title="Frontend"
              skills={["React", "Next.js", "TypeScript", "Tailwind CSS"]}
              isDarkMode={isDarkMode}
              color="blue"
            />
            <SkillCard 
              icon={<Server />}
              title="Backend"
              skills={["Node.js", "PHP", "Python", "RESTful APIs"]}
              isDarkMode={isDarkMode}
              color="green"
            />
            <SkillCard 
              icon={<Database />}
              title="Database"
              skills={["PostgreSQL", "MySQL", "MongoDB", "Redis"]}
              isDarkMode={isDarkMode}
              color="yellow"
            />
            <SkillCard 
              icon={<Settings />}
              title="DevOps"
              skills={["Git", "Docker", "CI/CD", "AWS"]}
              isDarkMode={isDarkMode}
              color="purple"
            />
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <motion.section 
        className="container mx-auto px-6 py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div 
          className="flex items-center gap-4 mb-12 justify-center"
          variants={itemVariants}
        >
          <Braces className="w-8 h-8 text-blue-500" />
          <h2 className="text-3xl font-bold text-center">Experience</h2>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          <ExperienceCard 
            title="Web Developer / Lead Web Developer"
            company="Gecogamesstudio"
            location="Lusaka, Zambia"
            period="December 2022 - Present"
            description={[
              "Led end-to-end development of multiple websites with a strong focus on responsive, high-performance front-end design using HTML, CSS, JavaScript, and PHP",
              "Specialized in crafting sleek, user-focused UI experiences and clean, maintainable code",
              "Currently expanding technical stack with React, Next.js, Node.js, and Python to build more scalable, full-stack applications",
              "Known for fast turnarounds, pixel-perfect implementation, and a strong eye for design that bridges functionality with modern aesthetics"
            ]}
            isDarkMode={isDarkMode}
            icon={<Layout />}
          />
        </div>
      </motion.section>

      {/* Education Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-100'}`}>
        <motion.div 
          className="container mx-auto px-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="flex items-center gap-4 mb-12 justify-center"
            variants={itemVariants}
          >
            <GitBranch className="w-8 h-8 text-blue-500" />
            <h2 className="text-3xl font-bold text-center">Education</h2>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            <EducationCard 
              school="Cavendish University Zambia"
              degree="Bachelor of Science in Computing, Computer Science"
              period="Expected October 2025"
              location="Lusaka, Zambia"
              isDarkMode={isDarkMode}
              icon={<Monitor />}
            />
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-200'}`}>
        <div className="container mx-auto px-6 text-center">
          <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
            © 2025 Joseph Mwamba. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ icon, title, skills, isDarkMode, color }: { icon: React.ReactNode; title: string; skills: string[]; isDarkMode: boolean; color: 'blue' | 'green' | 'yellow' | 'purple' }) {
  const colors = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    purple: 'bg-purple-500'
  };

  return (
    <motion.div 
      className={`p-6 rounded-lg backdrop-blur-lg ${
        isDarkMode 
          ? 'bg-gray-900/50 hover:bg-gray-900' 
          : 'bg-white/50 hover:bg-white shadow-lg'
      } transition-all duration-300`}
      whileHover={{ y: -5, scale: 1.02 }}
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
      }}
    >
      <div className={`w-12 h-12 ${colors[color]} rounded-lg flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <motion.li 
            key={index} 
            className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
            whileHover={{ x: 5 }}
          >
            <span className={`w-1 h-1 rounded-full ${colors[color]}`} />
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  isDarkMode: boolean;
  icon: React.ReactNode;
}

function ExperienceCard({ title, company, location, period, description, isDarkMode, icon }: ExperienceCardProps) {
  return (
    <motion.div 
      className={`p-6 rounded-lg backdrop-blur-lg ${
        isDarkMode 
          ? 'bg-gray-900/50 hover:bg-gray-900' 
          : 'bg-white/50 hover:bg-white shadow-lg'
      } transition-all duration-300`}
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
      }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-blue-500">{company}</p>
        </div>
      </div>
      <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>{location}</p>
      <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm mb-4`}>{period}</p>
      <ul className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} space-y-2`}>
        {description.map((item, index) => (
          <motion.li 
            key={index} 
            className="flex items-start gap-2"
            whileHover={{ x: 5 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

interface EducationCardProps {
  school: string;
  degree: string;
  period: string;
  location: string;
  isDarkMode: boolean;
  icon: React.ReactNode;
}

function EducationCard({ school, degree, period, location, isDarkMode, icon }: EducationCardProps) {
  return (
    <motion.div 
      className={`p-6 rounded-lg backdrop-blur-lg ${
        isDarkMode 
          ? 'bg-gray-900/50 hover:bg-gray-900' 
          : 'bg-white/50 hover:bg-white shadow-lg'
      } transition-all duration-300`}
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
      }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold">{school}</h3>
          <p className="text-blue-500">{degree}</p>
        </div>
      </div>
      <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>{location}</p>
      <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{period}</p>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div>
      <App />
    </div>
  );
}