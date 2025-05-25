import React, { useEffect, useRef } from 'react';

const LocationSection: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically load Leaflet CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);

    // Dynamically load Leaflet JS
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.async = true;
    let leafletMap: any = null;
    script.onload = () => {
      // @ts-ignore
      const L = window.L;
      if (L && mapRef.current && !mapRef.current.dataset.initialized) {
        mapRef.current.innerHTML = '';
        leafletMap = L.map(mapRef.current).setView([30.5722452, 31.0101183], 18);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(leafletMap);
        L.marker([30.5722452, 31.0101183]).addTo(leafletMap)
          .bindPopup('<b>Power House & Muscles Gym</b><br>المنصورة - شارع عبد السلام عارف').openPopup();
        mapRef.current.dataset.initialized = 'true';
      }
    };
    document.body.appendChild(script);
    const mapDiv = mapRef.current;
    return () => {
      if (leafletMap) {
        leafletMap.remove();
      }
      if (mapDiv) mapDiv.innerHTML = '';
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  return (
    <section id="location" 
    className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl my-12 max-w-4xl mx-auto" 
    data-aos="fade-up">

      <h2 
      className="text-4xl font-extrabold text-yellow-400 mb-8 text-center">
        موقعنا على الخريطة
        </h2>

      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        {/* الفرع الأول */}
        <div className="flex-1 w-full max-w-md">
          <h3 className="text-2xl font-bold text-yellow-300 mb-2 text-center md:text-right">
            الفرع الأول
            </h3>

          <p className="text-gray-200 mb-4 text-center md:text-right">
            البر الشرقي شارع النويشي متفرع من سعد زغلول بجوار مسجد ابو بكر الصديق
            </p>

          <div className="w-full h-72 rounded-2xl overflow-hidden shadow-lg border-4 border-yellow-400 flex items-center justify-center bg-gray-700 mb-2">
            <iframe
              title="فرع البر الشرقي"
              src="https://www.openstreetmap.org/export/embed.html?bbox=31.0132%2C30.5732%2C31.0152%2C30.5742&amp;layer=mapnik&amp;marker=30.5737%2C31.0142"
              style={{ width: '100%', height: '100%', minHeight: 220, minWidth: 220, border: 0, borderRadius: '1rem' }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <a
            href="https://www.google.com/maps/place/%D8%A8%D8%A7%D9%88%D8%B1+%D9%87%D8%A7%D9%88%D8%B3%E2%80%AD/@30.554621,31.0267822,16z/data=!4m10!1m2!2m1!1z2KfZhNio2LEg2KfZhNi02LHZgtmKINmB2Yog2LTYqNmK2YYg2KfZhNmD2YjZhSBwb3dlciBob3VzZQ!3m6!1s0x14f7d717a91b2519:0x753d0e22a0a4149a!8m2!3d30.554621!4d31.017255!15sCjrYp9mE2KjYsSDYp9mE2LTYsdmC2Yog2YHZiiDYtNio2YrZhiDYp9mE2YPZiNmFIHBvd2VyIGhvdXNlWjwiOtin2YTYqNixINin2YTYtNix2YLZiiDZgdmKINi02KjZitmGINin2YTZg9mI2YUgcG93ZXIgaG91c2WSAQNneW2aASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUTJiMlpVYVdObkVBRaoBiwEKCy9nLzF0ZjNkc2NoEAEqGSIV2KfZhNio2LEg2KfZhNi02LHZgtmKKDYyHxABIhuyztog2d-Iv4v2bQ4qP6x4pQr6-i9UUUspf-MyPhACIjrYp9mE2KjYsSDYp9mE2LTYsdmC2Yog2YHZiiDYtNio2YrZhiDYp9mE2YPZiNmFIHBvd2VyIGhvdXNl4AEA-gEECAAQGg!16s%2Fg%2F11h045xynk?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-yellow-400 underline text-lg font-bold mb-4 w-full text-center"
          >
            عرض الموقع على Google Maps
          </a>

        </div>
        {/* الفرع الثاني */}
        <div className="flex-1 w-full max-w-md">
          <h3 
          className="text-2xl font-bold text-yellow-300 mb-2 text-center md:text-right">
            الفرع الثاني
            </h3>
            
          <p className="text-gray-200 mb-4 text-center md:text-right">
            <br/>شارع باريس امام بيت المحافظ بجوار بنك عوده 
            </p>

          <div 
          className="w-full h-72 rounded-2xl overflow-hidden shadow-lg border-4 border-yellow-400 flex items-center justify-center bg-gray-700 mb-2">
            <iframe
              title="فرع باريس"
              src="https://www.openstreetmap.org/export/embed.html?bbox=30.5555%2C30.5705%2C31.0155%2C30.5745&amp;layer=mapnik&amp;marker=30.5722452%2C31.0101183"
              style={{ width: '100%', height: '100%', minHeight: 220, minWidth: 220, border: 0, borderRadius: '1rem' }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <a
            href="https://www.google.com/maps/place/Power+House+%26+Muscles/@30.5721647,31.0105765,19.67z/data=!4m10!1m2!2m1!1z2KjYp9mI2LEg2YfYp9mI2LMg2KzZitmFINi02KjZitmGINin2YTZg9mI2YU!3m6!1s0x14f7d75ee294f167:0xab7cb5c2a2f4433b!8m2!3d30.5722452!4d31.0101183!15sCizYqNin2YjYsSDZh9in2YjYsyDYrNmK2YUg2LTYqNmK2YYg2KfZhNmD2YjZhSIDiAEBkgEDZ3ltqgGAAQoKL20vMDVtdnEwchABKhwiGNio2KfZiNixINmH2KfZiNizINis2YrZhSg2MiAQASIc1zbnF8u5VfuZdPF9KKLwPm9XYhl4cL8kSBiCpjIwEAIiLNio2KfZiNixINmH2KfZiNizINis2YrZhSDYtNio2YrZhiDYp9mE2YPZiNmF4AEA!16s%2Fg%2F11qnk57s40?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-yellow-400 underline text-lg font-bold mb-4 w-full text-center" >
            عرض الموقع على Google Maps
          </a>

        </div>
      </div>
  
      <p className="text-center text-yellow-300 font-bold mt-8 text-lg">
        !ابدأ رحلتك مع بيئة محفزة ودعم مستمر من فريقنا حتى تحقق أفضل نتائجك
        </p>
        
    </section>
  );
};

export default LocationSection;
