import React, { useState } from 'react';
import { galleryImages } from '../data/galleryImages';


const GallerySection: React.FC = () => {
  const [modalImg, setModalImg] = useState<string | null>(null);

  const openModal = (img: string) => setModalImg(img);
  const closeModal = () => setModalImg(null);

  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl my-12 max-w-7xl mx-auto" data-aos="fade-up">
      <h2 className="text-4xl font-extrabold text-yellow-400 mb-10 text-center">معرض الصور</h2>
      <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-gray-800 snap-x snap-mandatory"
        style={{scrollbarColor:'#ffd700 #222', WebkitOverflowScrolling:'touch'}}>
        {galleryImages.map((img, idx) => (
          <div key={idx} className="flex-shrink-0 snap-center">
            <img
              src={img}
              alt={`صورة الجيم ${idx+1}`}
              className="rounded-2xl h-56 w-[80vw] max-w-xs min-w-[220px] sm:min-w-[300px] object-cover shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer border-2 border-yellow-400"
              // data-aos="slide-down"
              // data-aos-delay={idx * 150}
              onClick={() => openModal(img)}
            />
          </div>
        ))}
      </div>
      {modalImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative max-w-3xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-2 left-7 bg-red-600 text-white flex items-center justify-center rounded-full w-10 h-10 text-2xl font-bold shadow-lg hover:bg-red-700 transition z-50 focus:outline-none focus:ring-2 focus:ring-red-400"
              style={{lineHeight: 1, padding: 0}}
              onClick={closeModal}
              aria-label="إغلاق الصورة"
            >
              <span className="flex items-center justify-center w-full h-full">×</span>
            </button>
            <img
              src={modalImg}
              alt="صورة مكبرة"
              className="rounded-2xl object-cover border-4 border-yellow-400 shadow-2xl"
              style={{ width: '90vw', maxWidth: 500, height: 350 }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
