import React from 'react';

const trainers = [
  {
    name: 'كابتن أحمد',
    img: require('../assets/img (6).jpg'),
    desc: 'مدرب كمال أجسام معتمد بخبرة 10 سنوات.'
  },
  {
    name: 'كابتن سارة',
    img: require('../assets/img (7).jpg'),
    desc: 'مدربة لياقة بدنية وحصص جماعية.'
  },
  {
    name: 'كابتن يوسف',
    img: require('../assets/img (14).jpg'),
    desc: 'مدرب تغذية ورياضي محترف.'
  },
  {
    name: 'كابتن منى',
    img: require('../assets/img (15).jpg'),
    desc: 'مدربة يوغا ولياقة للسيدات.'
  }
];

const TrainersSection: React.FC = () => (
  <section id="trainers" className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl my-12 max-w-6xl mx-auto" data-aos="fade-up">
    <h2 className="text-4xl font-extrabold text-yellow-400 mb-10 text-center">المدربون</h2>
    <div className="mb-8 flex flex-col gap-2 items-center">
      <p className="text-lg text-yellow-200 font-bold text-center">معاك خطوة بخطوة لتحقيق هدفك الرياضي</p>
      <p className="text-base text-white font-medium text-center">مدربين معتمدين يشرحوا لك التمارين ويوجهوك صح في كل مرحلة</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
      {trainers.map((trainer, idx) => (
        <div key={idx} className="bg-gray-800 rounded-2xl p-6 shadow-xl hover:scale-105 transition-transform duration-300 flex flex-col items-center" data-aos="zoom-in" data-aos-delay={idx * 100}>
          <img src={trainer.img} alt={trainer.name} className="rounded-full mb-4 w-36 h-36 object-cover border-4 border-yellow-400 shadow-lg" />
          <h4 className="text-xl font-bold text-yellow-300 mb-2">{trainer.name ||'?'}</h4>
          <p className="text-gray-200 text-lg text-center">{trainer.desc}</p>
        </div>
      ))}
    </div>
    {/* قسم الأسئلة الشائعة */}
    <section className="mt-16 max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center">أسئلة شائعة</h3>
      <div className="bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col gap-4 text-end">
        <div>
          <h4 className="text-yellow-300 font-bold mb-1">هل يوجد مدربين للسيدات؟</h4>
          <p className="text-gray-200">نعم، يوجد مدربات متخصصات للسيدات وبرامج مخصصة للياقة واليوغا.</p>
        </div>
        <div>
          <h4 className="text-yellow-300 font-bold mb-1">هل يوجد باقات اشتراك متنوعة؟</h4>
          <p className="text-gray-200">نعم، لدينا باقات شهرية و3 شهور وسنوية مع عروض خاصة للمجموعات والطلاب.</p>
        </div>
        <div>
          <h4 className="text-yellow-300 font-bold mb-1">هل يمكن تجربة الجيم قبل الاشتراك؟</h4>
          <p className="text-gray-200">نعم، يمكنك الحصول على جلسة تجريبية مجانية عند زيارتك الأولى.</p>
        </div>
      </div>
    </section>
  </section>
);

export default TrainersSection;
