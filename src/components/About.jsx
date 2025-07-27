import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: 'Excelência Comprovada',
      description:
        'Nosso compromisso é com a entrega de projetos que superam as expectativas, seguindo os mais altos padrões de qualidade.',
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: 'Soluções Sustentáveis',
      description:
        'Integramos práticas sustentáveis em cada fase do projeto, visando um impacto positivo no meio ambiente e na sociedade.',
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'Equipe Especializada',
      description:
        'Contamos com um time de profissionais altamente qualificados e dedicados a transformar desafios em soluções inovadoras.',
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const imageUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/construction-about-image.jpg';

  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="section-title text-left">
              NTC Brasil: Construindo hoje, transformando o amanhã.
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Somos uma empresa apaixonada pelo que faz, dedicada a impulsionar
              o setor de construção no Brasil. Com um foco incansável na
              qualidade, inovação e na satisfação de nossos clientes, a NTC
              Brasil se estabelece como uma parceira de confiança para projetos
              de todos os portes.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative h-full min-h-[400px]"
            variants={itemVariants}
          >
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-secondary/10 rounded-lg transform -rotate-2 z-0"></div>
            <img
              src={imageUrl}
              alt="Equipe de construção em reunião"
              className="relative w-full h-full rounded-lg shadow-lifted object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
