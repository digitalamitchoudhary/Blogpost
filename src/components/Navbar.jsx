import {useNavigate } from "react-router-dom";
import { assets } from '../assets/assets';

const Navbar = () => {
  const navigate = useNavigate(); 
  return (
    <nav className="w-full bg-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            onClick={() => navigate('/')} 
            src={assets.logo} 
            alt="logo" 
            className='w-32 sm:w-44 cursor-pointer' 
          />
        </div>

        {/* Right Button */}
        <button 
          onClick={() => navigate('/admin')} 
          className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'
        > 
          Admin  <img src={assets.arrow} className='w-3' alt="arrow " />
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
