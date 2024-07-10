import React from 'react';

function Footer() {
  return (
    <footer className="bg-cordovan text-almond p-4 border-t-2 mx-12">
      <div className="flex justify-center mb-4 space-x-2">
        <a href="https://twitter.com" className="p-2 bg-white rounded-md hover:bg-red-500">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://linkedin.com" className="p-2 bg-white rounded-md hover:bg-red-500">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://facebook.com" className="p-2 bg-white rounded-md hover:bg-red-500">
          <i className="fab fa-facebook"></i>
        </a>
      </div>
      <nav className="flex flex-wrap justify-center space-x-2 text-sm mb-4">
        <a href="#about" className="hover:underline">About</a>
        <span>/</span>
        <a href="#business" className="hover:underline">For Business</a>
        <span>/</span>
        <a href="#suggestions" className="hover:underline">Suggestions</a>
        <span>/</span>
        <a href="#help" className="hover:underline">Help & FAQs</a>
        <span>/</span>
        <a href="#contacts" className="hover:underline">Contacts</a>
        <span>/</span>
        <a href="#pricing" className="hover:underline">Pricing</a>
      </nav>
      <div className="text-center text-sm mb-4">
        © Copyright 2013 companyname inc.
      </div>
      <nav className="flex justify-center space-x-2 text-sm">
        <a href="#privacy" className="hover:underline">Privacy</a>
        <span>/</span>
        <a href="#terms" className="hover:underline">Terms</a>
      </nav>
    </footer>
  );
}

export default Footer;
