import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const imageUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/construction-hero-image.jpg';

  return (
    <section
      id="hero"
      className="relative bg-light pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-light to-light -z-1"></div>
      <div className="container mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6"
              variants={itemVariants}
            >
              Construindo o <span className="gradient-text">futuro</span> com
              qualidade e inovação.
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto md:mx-0"
              variants={itemVariants}
            >
              A NTC Brasil oferece soluções de excelência para o setor de
              construção, transformando projetos em realidade com compromisso e
              sustentabilidade.
            </motion.p>
            <motion.div variants={itemVariants}>
              <a
                href="#contato"
                className="btn btn-accent inline-flex items-center group"
              >
                Transforme seu Projeto
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          <motion.div
            className="relative"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute -top-4 -right-4 w-full h-full bg-primary rounded-lg transform rotate-3 z-0"></div>
            <img
              src={imageUrl}
              alt="Projeto de construção moderno"
              className="relative w-full h-auto rounded-lg shadow-lifted object-cover"
              style={{ maxHeight: '500px' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
