// components/common/AnimatedAssembly.tsx
import { motion, useAnimation, Variants, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

const logoElements = [
  { id: 'c', text: 'C', color: 'bg-crimson-pink' },
  { id: 'i', text: 'I', color: 'bg-warm-amber' },
  { id: 't', text: 'T', color: 'bg-vivid-red' },
  { id: 'r', text: 'R', color: 'bg-crimson-pink' },
  { id: 'i2', text: 'I', color: 'bg-warm-amber' },
  { id: 'x', text: 'X', color: 'bg-vivid-red' },
];

const phrases = [
  'Transforming Compliance',
  'Elevating Standards',
  'Securing Excellence',
  'Building Trust',
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
};

const elementVariants: Variants = {
  hidden: (i: number) => ({
    x: (i % 2 === 0 ? -1000 : 1000) * Math.random(),
    y: (i % 3 === 0 ? -500 : 500) * Math.random(),
    rotate: Math.random() * 360,
    opacity: 0,
    scale: 0,
  }),
  visible: {
    x: 0,
    y: 0,
    rotate: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 20,
      mass: 1,
    },
  },
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
};

// Animation properties are applied directly to elements

export default function AnimatedAssembly() {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [assembled, setAssembled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleSolutionsClick = () => {
    navigate('/services');
  };

  useEffect(() => {
    // Start the animation sequence
    const startAnimation = async () => {
      await controls.start('visible');
      setAssembled(true);
    };

    startAnimation();

    // Rotate through phrases
    const phraseInterval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(phraseInterval);
  }, [controls]);

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-off-white to-soft-lavender-grey/30">
      {/* Enhanced Background elements */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-crimson-pink/10 rounded-full blur-3xl z-0"
        animate={{
          y: [0, -30, 0],
          opacity: [0.4, 0.6, 0.4],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-warm-amber/10 rounded-full blur-3xl z-0"
        animate={{
          y: [0, 30, 0],
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/3 left-1/4 w-64 h-64 bg-vivid-red/10 rounded-full blur-3xl z-0"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            <motion.div 
              className="relative w-24 h-24 mb-4"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              <img 
                src="/citrix-logo_optimized.webp" 
                alt="Citrix Logo" 
                className="w-full h-full object-contain"
              />
              <motion.div 
                className="absolute inset-0 bg-crimson-pink/10 rounded-full blur-lg -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-charcoal-navy mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Where <span className="text-gradient-crimson">Innovation</span> Meets <span className="text-gradient-crimson">Compliance</span>
          </motion.h2>
          <motion.p
            className="text-lg text-charcoal-navy/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Watch as our expertise comes together to transform your business
          </motion.p>
        </div>

        <div className="flex flex-col items-center justify-center">
          {/* Animated logo assembly */}
          <motion.div
            className="flex flex-wrap justify-center items-center mb-12 min-h-[160px] relative gap-3 md:gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {logoElements.map((element, i) => (
              <motion.div
                key={element.id}
                className={`${element.color} w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center text-white font-bold text-3xl md:text-4xl shadow-lg relative overflow-hidden group`}
                custom={i}
                variants={elementVariants}
                animate={assembled ? 'pulse' : 'visible'}
                whileHover={{ scale: 1.2, rotate: 5, zIndex: 10 }}
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              >
                {element.text}
                <motion.div 
                  className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                <motion.div 
                  className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Animated text with improved transitions */}
          <div className="h-20 overflow-hidden mb-12 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPhrase}
                className="text-2xl md:text-3xl font-bold text-charcoal-navy absolute w-full"
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
            animate={{ opacity: assembled ? 1 : 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            {['Expert Guidance', 'Tailored Solutions', 'Proven Results', 'Ongoing Support'].map((feature, i) => (
              <motion.div 
                key={feature}
                className="flex items-center gap-2 group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 + (i * 0.2), duration: 0.5 }}
                whileHover={{ x: 5 }}
              >
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${i % 3 === 0 ? 'bg-crimson-pink/20' : i % 3 === 1 ? 'bg-warm-amber/20' : 'bg-vivid-red/20'} group-hover:scale-110 transition-transform duration-300`}>
                  <CheckCircle className={`h-4 w-4 ${i % 3 === 0 ? 'text-crimson-pink' : i % 3 === 1 ? 'text-warm-amber' : 'text-vivid-red'}`} />
                </div>
                <span className="text-charcoal-navy/80 font-medium">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: assembled ? 1 : 0, y: assembled ? 0 : 20 }}
            transition={{ delay: 2, duration: 0.8 }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <Button
              size="lg"
              className="bg-crimson-gradient hover:shadow-lg hover:shadow-crimson-pink/25 text-white px-8 py-4 min-h-[52px] text-base font-medium transition-all duration-300 group relative overflow-hidden"
              onClick={handleSolutionsClick}
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