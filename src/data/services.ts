export interface Service {
    title: string;
    img: string;
    desc: string;
}


export const services : Service[] = [
  {
    title: 'تمارين الأوزان',
    img: require('../assets/img (12).jpg'),
    desc: 'أحدث أجهزة رفع الأثقال وبرامج تدريبية متقدمة'
  },
  {
    title: 'تمارين الكارديو',
    img: require('../assets/img (15).jpg'),
    desc: 'أجهزة جري ودراجات حديثة للياقة عالية.'
  },
  {
    title: 'حصص جماعية',
    img: require('../assets/img (21).jpg'),
    desc: 'زومبا، يوغا، كروس فيت وأكثر مع مدربين محترفين'
  },
  {
    title: 'تغذية وإستشارات',
    img: require('../assets/img (20).jpg'),
    desc: 'خطط غذائية واستشارات صحية مع مختصين'
  },
  {
    title: 'ساونا وجاكوزي',
    img: require('../assets/img22.jpeg'),
    desc: 'مرافق استرخاء متكاملة بعد التمرين'
  },
  {
    title: 'شرح تمارين للمبتدأين',
    img: require('../assets/services.jpg'),
    desc: 'دروس وورش عمل لشرح التمارين الصحيحة للمبتدئين خطوة بخطوة'
  }
];