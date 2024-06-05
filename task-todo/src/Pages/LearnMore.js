import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center justify-center mb-8">
            <img
              src="https://via.placeholder.com/150"
              alt="Company Logo"
              className="w-24 h-24 rounded-full border-4 border-gray-200 shadow-md mr-4"
            />
            <h2 className="text-2xl font-semibold">Our Company</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla ante at lacus
            tempus, ac fermentum dolor dictum. Suspendisse potenti. Vivamus vel sem quis lacus
            vestibulum condimentum. Proin scelerisque enim at eros posuere, sed volutpat lectus
            vestibulum. Donec eget sapien velit. Cras vestibulum, risus nec ullamcorper interdum,
            ipsum justo vehicula eros, sed tincidunt purus neque non nunc. Donec id nunc eget
            sapien rhoncus sollicitudin. Nulla suscipit est auctor, sagittis ante quis, viverra
            libero. Nullam id tortor ut mauris suscipit placerat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
