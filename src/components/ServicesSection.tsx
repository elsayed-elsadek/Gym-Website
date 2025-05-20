import React from 'react';

const services = [
  {
    title: 'تمارين الأوزان',
    img: require('../assets/img (12).jpg'),
    desc: 'أحدث أجهزة رفع الأثقال وبرامج تدريبية متقدمة.'
  },
  {
    title: 'تمارين الكارديو',
    img: require('../assets/img (15).jpg'),
    desc: 'أجهزة جري ودراجات حديثة للياقة عالية.'
  },
  {
    title: 'حصص جماعية',
    img: require('../assets/img (21).jpg'),
    desc: 'زومبا، يوغا، كروس فيت وأكثر مع مدربين محترفين.'
  },
  {
    title: 'تغذية وإستشارات',
    img: require('../assets/img (20).jpg'),
    desc: 'خطط غذائية واستشارات صحية مع مختصين.'
  },
  {
    title: 'ساونا وجاكوزي',
    img: require('../assets/img (13).jpg'),
    desc: 'مرافق استرخاء متكاملة بعد التمرين.'
  },
  {
    title: 'شرح تمارين للمبتدأين',
    img: require('../assets/services.jpg'),
    desc: 'دروس وورش عمل لشرح التمارين الصحيحة للمبتدئين خطوة بخطوة.'
  }
];

const ServicesSection: React.FC = () => (
  <section id="services" className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl my-12 max-w-6xl mx-auto" data-aos="fade-up">
    <h2 className="text-4xl font-extrabold text-yellow-400 mb-10 text-center">الخدمات</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {services.map((service, idx) => (
        <div key={idx} className="bg-gray-800 rounded-2xl p-6 shadow-xl hover:scale-105 transition-transform duration-300 flex flex-col h-full" data-aos="zoom-in" data-aos-delay={idx * 100}>
          <img src={service.img} alt={service.title} className="rounded-xl mb-4 w-full h-56 min-h-[224px] max-h-64 object-cover object-center border-2 border-yellow-400" />
          <h3 className="text-2xl font-bold text-yellow-300 mb-2 text-center">{service.title}</h3>
          <p className="text-gray-200 text-lg text-center flex-1">{service.desc}</p>
        </div>
      ))}
    </div>
    <div className="mt-10 flex flex-col gap-3 items-center">
      <p className="text-lg text-yellow-200 font-bold text-center">حقق أهدافك مع أحدث الأجهزة وأفضل برامج التدريب المخصصة لك</p>
      <p className="text-base text-yellow-300 font-semibold text-center">نضمن لك نتائج ملموسة ودعم مستمر من فريقنا المحترف</p>
    </div>
  </section>
);

export default ServicesSection;
