import React from 'react';
import { motion } from 'framer-motion';
import { Building, Target, ShieldCheck, HardHat } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Building className="h-10 w-10 text-primary" />,
      title: 'Projetos Inovadores',
      description:
        'Desenvolvemos projetos arquitetônicos e de engenharia que combinam estética, funcionalidade e as mais recentes tecnologias do setor.',
    },
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: 'Execução Precisa',
      description:
        'Gerenciamos e executamos obras com máxima precisão, cumprindo prazos e orçamentos com um rigoroso controle de qualidade.',
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: 'Qualidade Garantida',
      description:
        'Utilizamos materiais de primeira linha e processos certificados para garantir a durabilidade e a segurança de cada empreendimento.',
    },
    {
      icon: <HardHat className="h-10 w-10 text-primary" />,
      title: 'Consultoria Especializada',
      description:
        'Oferecemos consultoria técnica para otimizar todas as etapas do seu projeto, da viabilidade à entrega final.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="diferenciais" className="section-padding bg-light">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 className="section-title" variants={cardVariants}>
            Nossos Diferenciais
          </motion.h2>
          <motion.p className="section-subtitle" variants={cardVariants}>
            Compromisso e excelência em cada detalhe. Veja como podemos agregar
            valor ao seu projeto.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-soft hover:shadow-lifted transition-shadow duration-300 flex flex-col text-center items-center transform hover:-translate-y-2"
              variants={cardVariants}
            >
              <div className="bg-primary/10 p-4 rounded-full mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
              <div className="mt-auto pt-6">
                <a
                  href="#contato"
                  className="font-semibold text-primary hover:text-secondary transition-colors"
                >
                  Saber Mais
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
