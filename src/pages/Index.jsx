import { FaGuitar, FaDrum, FaPiano, FaMicrophone } from "react-icons/fa";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="w-full bg-blue-600 text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">MusicStore</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#products" className="hover:underline">Products</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section id="home" className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Welcome to MusicStore</h2>
          <p className="text-lg mb-6">Your one-stop shop for all musical instruments</p>
          <a href="#products" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">Shop Now</a>
        </section>

        <section id="about" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg">MusicStore is dedicated to providing the best musical instruments for musicians of all levels. Whether you're a beginner or a professional, we have the right instrument for you.</p>
        </section>

        <section id="products" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FaGuitar className="text-6xl mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2">Guitars</h3>
              <p className="text-gray-700">Explore our wide range of guitars for all skill levels.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FaDrum className="text-6xl mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2">Drums</h3>
              <p className="text-gray-700">Find the perfect drum set to match your style.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FaPiano className="text-6xl mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2">Pianos</h3>
              <p className="text-gray-700">Discover our collection of pianos and keyboards.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FaMicrophone className="text-6xl mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-bold mb-2">Microphones</h3>
              <p className="text-gray-700">Get the best microphones for your recording needs.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <form className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
              <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
              <textarea id="message" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" rows="4"></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">Send Message</button>
          </form>
        </section>
      </main>

      <footer className="w-full bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 MusicStore. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;