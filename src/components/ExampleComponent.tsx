import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ExampleComponent: React.FC = () => {
    React.useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div data-aos="fade-up" className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">Example Component</h2>
            <p className="mt-2 text-gray-700">
                This is an example component demonstrating the use of AOS for animations on scroll.
            </p>
        </div>
    );
};

export default ExampleComponent;
