import React from 'react';

const AboutSection: React.FC = () => (
  <section id="about"
   className="py-20 px-4 text-center bg-gradient-to-br from-gray-900 
   to-gray-800 rounded-2xl shadow-2xl my-12 max-w-5xl mx-auto" 
   data-aos="fade-up">
    <h2 
    className="text-4xl font-extrabold text-yellow-400 mb-8 text-center">
      عن الجيم</h2>

    <p 
    className="text-xl text-yellow-200 font-bold text-center mb-6">
      ابدأ رحلتك مع أقوى فريق دعم وتحفيز في شبين الكوم
      </p>

    <div 
    className="flex flex-col md:flex-row items-center gap-10 justify-center">
      <img src={require('../assets/img (17).jpg')} alt="صالة الجيم" 
      className="mx-auto rounded-2xl mb-6 max-w-md w-full shadow-xl border-4 border-yellow-400" />

      <p
       className="text-xl text-gray-200 max-w-xl mx-auto leading-relaxed">
        PowerHouse Gym هو المكان المثالي لتحقيق أهدافك الرياضية، مع أحدث الأجهزة وأفضل المدربين في بيئة محفزة وآمنة. نقدم لك برامج تدريبية مخصصة، دعم مستمر، وأجواء عائلية تساعدك على تحقيق أفضل النتائج
      </p>

    </div>
  </section>
);

export default AboutSection;
