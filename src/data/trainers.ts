export interface Trainers {
    name: string;
    img: string;
    desc: string;
    
}

export const trainers : Trainers[] = [
  {
    name: 'كابتن أحمد',
    img: require('../assets/img (6).jpg'),
    desc: 'مدرب كمال أجسام معتمد بخبرة 10 سنوات'
  },
  {
    name: 'كابتن سارة',
    img: require('../assets/img (7).jpg'),
    desc: 'مدربة لياقة بدنية وحصص جماعية'
  },
  {
    name: 'كابتن يوسف',
    img: require('../assets/img (14).jpg'),
    desc: 'مدرب تغذية ورياضي محترف'
  },
  {
    name: 'كابتن منى',
    img: require('../assets/img (15).jpg'),
    desc: 'مدربة يوغا ولياقة للسيدات'
  }
];