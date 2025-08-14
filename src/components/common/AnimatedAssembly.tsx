// components/common/AnimatedAssembly.tsx
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

// Define colors for the animation
const colors = {
  crimson: '#ED2568',
  red: '#EE343B',
  amber: '#FFC857',
  navy: '#1C1F2A',
  teal: '#2DD4BF',
  purple: '#8B5CF6',
  blue: '#3B82F6'
};

// Define the letters for CITRIX CONSULTING
const letters = ['C', 'I', 'T', 'R', 'I', 'X', ' ', ' ', 'C', 'O', 'N', 'S', 'U', 'L', 'T', 'I', 'N', 'G'];

const phrases = [
  'Transforming Compliance',
  'Elevating Standards',
  'Securing Excellence',
  'Building Trust',
];

// 3D letter animation variants
const letterVariants: Variants = {
  hidden: { opacity: 0, y: 20, rotateX: -90 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
      delay: 0.1 * i,
    },
  }),
  hover: {
    y: -10,
    scale: 1.1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 10,
    },
  }
};

// Container variants for the CITRIX text
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export default function AnimatedAssembly() {
  const navigate = useNavigate();
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSolutionsClick = () => {
    navigate('/solutions');
  };

  // Rotate through phrases
  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setCurrentPhrase(prev => (prev + 1) % phrases.length);
    }, 3000);
    
    return () => clearInterval(phraseInterval);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Where <span style={{ background: `linear-gradient(to right, ${colors.crimson}, ${colors.red})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Innovation</span> Meets <span style={{ color: colors.red, fontWeight: 'bold' }}>Compliance</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Watch as our expertise comes together to transform your business
          </motion.p>
        </div>

        <div className="flex flex-col items-center justify-center" ref={containerRef}>
          {/* 3D CITRIX CONSULTING text with animations */}
          <div className="relative w-full h-[200px] mb-0 overflow-hidden flex items-center justify-center">
            <motion.div
              className="flex gap-1 md:gap-2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              {letters.map((letter, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={letterVariants}
                  className="relative flex items-center justify-center"
                  whileHover="hover"
                  style={{
                    perspective: '1000px',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <motion.span
                    className="text-5xl md:text-6xl font-extrabold"
                    style={{
                      color: colors.red,
                      textShadow: `
                        0 1px 0 #ccc,
                        0 2px 0 #c9c9c9,
                        0 3px 0 #bbb,
                        0 4px 0 #b9b9b9,
                        0 5px 0 #aaa,
                        0 6px 1px rgba(0,0,0,.1),
                        0 0 5px rgba(0,0,0,.1),
                        0 1px 3px rgba(0,0,0,.3),
                        0 3px 5px rgba(0,0,0,.2),
                        0 5px 10px rgba(0,0,0,.25),
                        0 10px 10px rgba(0,0,0,.2),
                        0 20px 20px rgba(0,0,0,.15)
                      `,
                      display: 'inline-block',
                      transformStyle: 'preserve-3d',
                    }}
                    animate={{
                      rotateY: [0, 5, 0, -5, 0],
                      rotateX: [0, -5, 0, 5, 0],
                      textShadow: [
                        `
                          0 1px 0 #ccc,
                          0 2px 0 #c9c9c9,
                          0 3px 0 #bbb,
                          0 4px 0 #b9b9b9,
                          0 5px 0 #aaa,
                          0 6px 1px rgba(0,0,0,.1),
                          0 0 5px rgba(0,0,0,.1),
                          0 1px 3px rgba(0,0,0,.3),
                          0 3px 5px rgba(0,0,0,.2),
                          0 5px 10px rgba(0,0,0,.25),
                          0 10px 10px rgba(0,0,0,.2),
                          0 20px 20px rgba(0,0,0,.15)
                        `,
                        `
                          0 1px 0 #ccc,
                          0 2px 0 #c9c9c9,
                          0 3px 0 #bbb,
                          0 4px 0 #b9b9b9,
                          0 5px 0 #aaa,
                          0 6px 1px rgba(0,0,0,.1),
                          0 0 8px rgba(237,37,104,.5),
                          0 1px 3px rgba(0,0,0,.3),
                          0 3px 5px rgba(0,0,0,.2),
                          0 5px 10px rgba(0,0,0,.25),
                          0 10px 10px rgba(0,0,0,.2),
                          0 20px 20px rgba(0,0,0,.15)
                        `
                      ]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'easeInOut',
                      delay: index * 0.1
                    }}
                  >
                    {letter}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Features section */}

          {/* Animated text with improved transitions */}
          <div className="h-20 overflow-hidden mb-6 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPhrase}
                className="text-2xl md:text-3xl font-bold text-gray-800 absolute w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                {phrases[currentPhrase]}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Enhanced features list */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {['Expert Guidance', 'Tailored Solutions', 'Proven Results', 'Ongoing Support'].map((feature, i) => (
              <motion.div 
                key={feature}
                className="flex items-center gap-2 group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + (i * 0.2), duration: 0.5 }}
                whileHover={{ x: 5 }}
              >
                <div 
                  className="flex items-center justify-center w-8 h-8 rounded-full group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${[colors.crimson, colors.amber, colors.purple, colors.teal][i]}40, ${[colors.red, colors.teal, colors.blue, colors.crimson][i]}20)`,
                    boxShadow: `0 0 10px 2px ${[colors.crimson, colors.amber, colors.purple, colors.teal][i]}30`
                  }}
                >
                  <CheckCircle className="h-4 w-4 text-gray-800" />
                </div>
                <span className="text-gray-700 font-medium">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Button
              size="lg"
              className="text-white px-8 py-4 min-h-[52px] text-base font-medium transition-all duration-300 group relative overflow-hidden"
              onClick={handleSolutionsClick}
              style={{
                background: `linear-gradient(135deg, ${colors.crimson}, ${colors.red})`,
                boxShadow: `0 10px 25px -5px ${colors.crimson}40`
              }}
            >
              <span className="relative z-10 flex items-center">
                Discover Our Solutions
                <motion.span
                  animate={isHovering ? { x: 4 } : { x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.span>
              </span>

              {/* Button shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                animate={isHovering ? { x: '100%' } : { x: '-100%' }}
                transition={{ duration: 0.7 }}
              />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}