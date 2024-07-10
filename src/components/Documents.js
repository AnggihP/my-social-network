import React from 'react';

function Documents() {
  return (
    <div className="section documents p-4 mt-8">
      <h2 className="flex justify-between items-center text-lg font-bold text-almond">
        Documents <span className="text-sm text-almond cursor-pointer">Browse all documents</span>
      </h2>
      <div className="document-flex flex flex-rows-1 flex-overflow overflow-y-hidden gap-2 mt-4 md:grid md:grid-cols-3 md:grid-rows-3 md:h-96">
        <div className="document-item large row-span-2 col-span-2 bg-almond text-cordovan p-4 text-bottom">
          HTML5 and usage <br /> 18,7887 views
        </div>
        <div className="document-item small bg-almond text-cordovan p-4">CSS Guidelines <br /> 15454 views</div>
        <div className="document-item small bg-almond text-cordovan p-4">React Basics <br /> 1984 views</div>
        <div className="document-item small bg-almond text-cordovan p-4">JavaScript ES6 <br /> 2554 views</div>
        <div className="document-item small bg-almond text-cordovan p-4">Node.js Intro <br /> 2554 views</div>
        <div className="document-item upload small border border-almond bg-cordovan text-almond p-4 cursor-pointer">Upload Your Own Document</div>
      </div>
    </div>
  );
}

export default Documents;
