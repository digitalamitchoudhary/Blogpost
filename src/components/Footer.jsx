import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16">
      {/* Newsletter */}
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-gray-900">
          Never Miss a Blog!
        </h2>
        <p className="text-gray-500 mt-2">
          Subscribe to get the latest blog, new tech, and exclusive news.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <input
            type="email"
            placeholder="Enter your email id"
            className="w-full sm:w-96 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo */}
        <div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              Q
            </div>
            <span className="text-xl font-semibold">Quickblog</span>
          </div>
          <p className="text-gray-500 mt-4 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Rerum unde quaerat eveniet cumque accusamus atque qui error
            quo enim fugiat?
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Best Sellers</Link></li>
            <li><Link to="/">Offers & Deals</Link></li>
            <li><Link to="/">Contact Us</Link></li>
            <li><Link to="/">FAQs</Link></li>
          </ul>
        </div>

        {/* Need Help */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Need Help?</h4>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>Delivery Information</li>
            <li>Return & Refund Policy</li>
            <li>Payment Methods</li>
            <li>Track your Order</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        Copyright © 2025 © QuickBlog GreatStack - All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;
