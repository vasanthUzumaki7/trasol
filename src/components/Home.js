import React from 'react';
import comp from '../components/images/computer.png';

const Home = () => {
  return (
    <div className="bg-gray-100 text-center py-10 px-5">
      {/* Navbar */}
      <nav className="flex flex-col md:flex-row justify-center items-center py-5 bg-gray-100 px-5">
        <div className="text-center mb-4 md:mb-0">
          <span className="text-red-600 font-bold text-2xl">HNTFX</span>
        </div>
        <ul className="flex space-x-4 text-sm font-medium mb-4 md:mb-0">
          <li>Home</li>
          <li>Company <span className="text-red-600">&#9660;</span></li>
          <li>Products</li>
          <li>Platform</li>
          <li>Master Broker</li>
          <li>Analytical Tools</li>
          <li>Contact Us</li>
        </ul>
        <div className="flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:space-x-4">
          <span className="text-sm">Hello. Sign in</span>
          <span className="text-sm">Your Account <span className="text-red-600">&#9660;</span></span>
          <button className="border border-red-600 text-red-600 py-1 px-4 rounded">
            Try Demo
          </button>
          <button className="bg-red-600 text-white py-1 px-4 rounded">
            Start Trading
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="py-10" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>

        <div>
          <h2 className="text-4xl font-bold mb-5">PRODUCTS</h2>
          <p className="max-w-xl mx-auto mb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
          </p>
          <p className="max-w-xl mx-auto mb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
          </p>

          {/* Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <button className="border border-red-600 text-red-600 py-2 px-6 rounded">
              Try Demo
            </button>
            <button className="bg-red-600 text-white py-2 px-6 rounded">
              Start Trading
            </button>
          </div>
        </div>

        {/* Single Image */}
        <div className="flex justify-center mt-10">
          <img src={comp} alt="Product" className="w-full max-w-md h-auto object-cover" />
        </div>
      </div>
    </div>
  );
}

export default Home;
