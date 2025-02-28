import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-yellow text-white py-20 lg:py-[120px] px-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left">
        {/* Left Section */}
        <div className="md:w-1/3 mb-6 md:mb-0">
          <img src="/assets/logo.png" alt="" className="mx-auto md:mx-0" />
          <p className=" text-xl lg:text-2xl max-w-[438px] mt-[60px]">Overcome fears, increase your self-confidence and live your full potential</p>
          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-4 text-2xl mt-[60px]">
            <FaFacebookF className="cursor-pointer hover:text-gray-700" />
            <FaInstagram className="cursor-pointer hover:text-gray-700" />
            <FaYoutube className="cursor-pointer hover:text-gray-700" />
            <FaLinkedinIn className="cursor-pointer hover:text-gray-700" />
          </div>
        </div>
        
        {/* Center Section - Company */}
        <div className="md:w-1/3 mb-6 md:mb-0">
          <h3 className="font-semibold">Company</h3>
          <ul className="text-sm space-y-3 mt-2">
            <li>About Us</li>
            <li>Careers</li>
            <li>FAQs</li>
            <li>Teams</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Right Section - Get Support & Stay Update */}
        <div className="md:w-1/3 flex flex-col md:flex-row justify-between md:space-x-10">
          <div>
            <h3 className="font-semibold">Get Support</h3>
            <ul className="text-sm space-y-3 mt-2">
              <li>Our Services</li>
              <li>Testimonials</li>
              <li>Blog Post</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Stay Update</h3>
            <ul className="text-sm space-y-3 mt-2">
              <li>Email Alert</li>
              <li>New Offer</li>
              <li>Wellness Tips</li>
              <li>Event Update</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
