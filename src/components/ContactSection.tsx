import React from 'react';

const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open('mailto:elsadek134@gmail.com');
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl my-12 max-w-xl mx-auto"
      data-aos="fade-up"
      aria-labelledby="contact-title"
    >
      <h2 id="contact-title" className="text-4xl font-extrabold text-yellow-400 mb-10 text-center">
        تواصل معنا
      </h2>
      <form
        className="flex flex-col gap-6 bg-gray-800 rounded-2xl p-8 shadow-xl"
        onSubmit={handleSubmit}
        aria-label="نموذج التواصل"
        autoComplete="on"
      >
        <input
          type="text"
          name="name"
          placeholder="الاسم"
          required
          className="p-4 rounded-md bg-gray-900 text-white placeholder-gray-400 text-lg"
          aria-label="الاسم"
        />
        <input
          type="email"
          name="email"
          placeholder="البريد الإلكتروني"
          required
          className="p-4 rounded-md bg-gray-900 text-white placeholder-gray-400 text-lg"
          aria-label="البريد الإلكتروني"
        />
        <textarea
          name="message"
          placeholder="رسالتك"
          rows={4}
          required
          className="p-4 rounded-md bg-gray-900 text-white placeholder-gray-400 text-lg"
          aria-label="رسالتك"
        />
        <button
          type="submit"
          className="bg-yellow-400 text-gray-900 font-bold py-4 rounded-md text-lg hover:bg-yellow-300 transition"
          aria-label="إرسال الرسالة"
        >
          إرسال
        </button>
      </form>

      {/* رقم الهاتف مع إمكانية الاتصال المباشر للفرعين */}
      <div className="flex flex-col items-center mt-8 w-full">
        <h3 className="text-2xl font-bold text-yellow-400 mb-4">أرقام الهاتف</h3>
        <div className="flex flex-row gap-4 w-full max-w-md justify-center">

         {/* الفرع الثاني */}
          <div className="flex flex-col items-center bg-gray-800 rounded-xl px-4 py-3 shadow-md w-1/2 min-w-[140px]">
            <span className="text-gray-400 text-sm mb-1">الفرع الثاني</span>
            <a
              href="tel:01060760385"
              className="text-base font-bold text-yellow-300 bg-gray-900 px-4 py-2 rounded-full shadow-lg hover:bg-yellow-400 hover:text-white transition mb-1"
              dir="ltr"
            >
              01060760385
            </a>
          </div>
         
          {/* الفرع الاول */}
          <div className="flex flex-col items-center bg-gray-800 rounded-xl px-4 py-3 shadow-md w-1/2 min-w-[140px]">
            <span className="text-gray-400 text-sm mb-1">الفرع الأول</span>
            <a
              href="tel:01556677870"
              className="text-base font-bold text-yellow-300 bg-gray-900 px-4 py-2 rounded-full shadow-lg  hover:bg-yellow-400 hover:text-white transition mb-1"
              dir="ltr"
            >
              01556677870
            </a>
          </div>
          
         
        </div>
      </div>

      {/* حساباتنا على السوشيال ميديا */}
      <div className="flex flex-col gap-4 items-center mt-8">
        <h3 className="text-2xl font-bold text-yellow-400 mb-2">حساباتنا على السوشيال ميديا</h3>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://www.instagram.com/powerhousegym_3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:scale-110 transition"
          >
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400 shadow-lg">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
              </svg>
            </span>
            <span className="sr-only">Instagram</span>
          </a>
          <a
            href="https://www.facebook.com/powerhouseandmuscles"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:scale-110 transition"
          >
            <span 
            className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400 shadow-lg">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </span>
            <span className="sr-only">Facebook</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
