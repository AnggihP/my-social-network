import React from 'react';

function Videos() {
  return (
    <div className="section videos p-4">
      <h2 className="flex justify-between items-center text-lg font-bold text-almond">
        Videos <span className="text-sm text-almond cursor-pointer">Browse all videos</span>
      </h2>
      <div className="video-grid flex flex-rows-1 flex-overflow overflow-y-hidden gap-2 mt-4 md:grid md:grid-cols-3 md:grid-rows-3 md:h-96">
        <div className="video-item large bg-almond text-cordovan p-4 align-text-bottom md:row-span-2 md:col-span-2">
          How to improve your skills <br /> Waseem Arshad <br /> 10,7687 views
        </div>
        <div className="video-item small bg-almond text-cordovan p-4">Michael Keilgh <br /> 15454 views</div>
        <div className="video-item small bg-almond text-cordovan p-4">Ahmed Yasin <br /> 1984 views</div>
        <div className="video-item small bg-almond text-cordovan p-4">John Stainior <br /> 2554 views</div>
        <div className="video-item small bg-almond text-cordovan p-4">John Doe <br /> 2554 views</div>
        <div className="video-item upload bg-cordovan text-almond p-4 border border-almond cursor-pointer">
          Upload Your Own Video
        </div>
      </div>
    </div>
  );
}

export default Videos;
