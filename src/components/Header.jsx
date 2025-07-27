import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753658529171_0.png';

  const navLinks = [
    { href: '#sobre', label: 'Sobre Nós' },
    { href: '#diferenciais', label: 'Diferenciais' },
    { href: '#contato', label: 'Contato' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="flex items-center">
          <img
            src={logoUrl}
            alt="NTC Brasil Logo"
            className="h-12 md:h-14 w-auto"
          />
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-secondary font-medium hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contato" className="hidden md:inline-block btn btn-primary">
          Fale Conosco
        </a>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-secondary focus:outline-none"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            <div className="flex flex-col items-center space-y-4 py-6">
              {navLinks.map(link => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={toggleMenu}
                  className="text-secondary font-medium text-lg hover:text-primary transition-colors duration-300"
                  variants={itemVariants}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contato"
                onClick={toggleMenu}
                className="btn btn-primary mt-4"
                variants={itemVariants}
              >
                Fale Conosco
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
