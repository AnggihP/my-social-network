import React from 'react';

function Channels() {
  return (
    <div className="section channels p-4">
      <h2 className="flex justify-between items-center text-lg font-bold text-almond">
        Channels <span className="text-xs text-almond cursor-pointer">Browse all channels</span>
      </h2>
      <div className="channels-grid grid grid-cols-3 md:grid-cols-2 gap-4 mt-4 text-sm">
        <div className="channel-item small bg-almond text-cordovan p-4">Google</div>
        <div className="channel-item small bg-almond text-cordovan p-4">Dribbble</div>
        <div className="channel-item small bg-almond text-cordovan p-4">Microsoft</div>
        <div className="channel-item small bg-almond text-cordovan p-4">Behance</div>
        <div className="channel-item small bg-almond text-cordovan p-4">Weather Channel</div>
        <div className="channel-item small bg-almond text-cordovan p-4">Gurus</div>
        <div className="channel-item small bg-almond text-cordovan p-4">iMedia</div>
        <div className="channel-item small bg-almond text-cordovan p-4">Creativeye</div>
        <div className="channel-item small bg-almond text-cordovan p-4">Khan Studios</div>
        <div className="channel-item small bg-almond text-cordovan p-4">Yahoo</div>
      </div>
    </div>
  );
}

export default Channels;
