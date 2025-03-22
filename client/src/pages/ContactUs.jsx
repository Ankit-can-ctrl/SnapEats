import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="bg-red-500 min-h-screen flex flex-col items-center">
        {/* Hero Section */}
        <div
          className="w-full bg-cover bg-center h-64 flex items-center justify-center text-white text-4xl font-bold"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/1600x900/?restaurant,food')",
          }}
        >
          Contact SnapEats
        </div>

        <div className="max-w-5xl w-full bg-secodary p-8 mt-8 rounded-lg shadow-lg">
          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800">
                Get In Touch
              </h2>
              <p className="text-gray-600 mt-2">
                Have questions? Feel free to reach out to us!
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <FaPhoneAlt className="text-green-500" />
                  <p className="text-gray-700">+1 234 567 890</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-red-500" />
                  <p className="text-gray-700">ak537664@gmail.com</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-blue-500" />
                  <p className="text-gray-700">
                    Greater Noida, Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800">
                Send a Message
              </h2>
              <form className="mt-4 space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
                <button className="w-full bg-primary text-white py-3 rounded-md hover:bg-red-400 transition">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Google Maps */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">Find Us</h2>
            <iframe
              className="w-full h-64 mt-4 rounded-lg shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224408.21865636253!2d77.35118544954459!3d28.498260405949843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea64b8f89aef%3A0xec0ccabb5317962e!2sGreater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1742647193827!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
