import React from 'react';

function Peoples() {
  return (
    <div className="section peoples p-4 mt-8">
      <h2 className="flex justify-between items-center text-lg font-bold text-almond">
        People <span className="text-sm text-almond cursor-pointer">View all</span>
      </h2>
      <div className="people-grid flex flex-rows-1 flex-overflow overflow-y-hidden gap-2 mt-4 md:grid md:grid-cols-3 md:grid-rows-3 md:h-96">
        <div className="people-item large row-span-2 col-span-2 bg-almond text-cordovan p-4 align-text-bottom">
          Waseem Arshad <br /> User interface designer <br /> 18,7887 views
        </div>
        <div className="people-item small bg-almond text-cordovan p-4">Michael Keilgh <br /> 15454 views</div>
        <div className="people-item small bg-almond text-cordovan p-4">Ahmed Yasin <br /> 1984 views</div>
        <div className="people-item small bg-almond text-cordovan p-4">John Stanior <br /> 2554 views</div>
        <div className="people-item small bg-almond text-cordovan p-4">John Doe <br /> 2554 views</div>
        <div className="people-item upload small border border-almond bg-cordovan text-almond p-4 cursor-pointer">Show Your Work</div>
      </div>
    </div>
  );
}

export default Peoples;
