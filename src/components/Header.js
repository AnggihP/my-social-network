import React, { useState } from 'react';


function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-cordovan text-almond p-4 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-row justify-between items-center mb-4 md:mb-0 w-full md:w-auto md:mx-12">
        <div className="text-2xl font-bold">SocialNetwork</div>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-almond">
            <img
              src="https://user-images.githubusercontent.com/2970318/209647125-dc41103d-c545-4e2e-b89b-099fbfcde702.svg"
              alt="Hamburger Icon"
              className="w-6 h-6"
            />
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-4 w-full md:w-auto">
          <input
            type="text"
            placeholder="Find..."
            className="p-2 bg-almond text-cordovan placeholder-pink-200 rounded-md w-full"
          />
          <button className="bg-almond p-2 rounded-md text-almond">🔍</button>
          <button className="bg-almond p-2 space-x-2 rounded-md text-sm text-cordovan bg-almond">⏫ Upload</button>
          <div className="flex items-center space-x-2 bg-almond text-cordovan rounded-md">
            <span>👤</span>
            <span>Waseem Arshad</span>
          </div>
        </div>
      </div>

      <nav className="flex flex-row hidden space-x-4 md:flex text-xl mt-4 border-t-2 border-b-2 mx-12 p-2">
        <a href="Videos" className="hover:underline">Videos</a>
        <span>/</span>
        <a href="#people" className="hover:underline">People</a>
        <span>/</span>
        <a href="Documents" className="hover:underline">Documents</a>
        <span>/</span>
        <a href="#events" className="hover:underline">Events</a>
        <span>/</span>
        <a href="#communities" className="hover:underline">Communities</a>
        <span>/</span>
        <a href="#favorites" className="hover:underline">Favorites</a>
        <span>/</span>
        <a href="Channels" className="hover:underline">Channels</a>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden flex flex-col space-y-2 mt-4">
          <a href="#videos" className="hover:underline">Videos</a>
          <a href="#people" className="hover:underline">People</a>
          <a href="#documents" className="hover:underline">Documents</a>
          <a href="#events" className="hover:underline">Events</a>
          <a href="#communities" className="hover:underline">Communities</a>
          <a href="#favorites" className="hover:underline">Favorites</a>
          <a href="#channels" className="hover:underline">Channels</a>
        </nav>
      )}
    </header>
  );
}

export default Header;
