import React from 'react';

function Activity() {
  return (
    <div className="section activity ">
      <h2 className="flex justify-between items-center text-lg font-bold text-almond ">
        Activity <span className="text-xs text-almond cursor-pointer ">View timeline / Filter activities</span>
      </h2>
      <div className="activity-grid flex flex-col gap-2 mt-4 flex-overflow overflow-x-hidden max-h-96 border-b-2 border-t-4 p-4 border-almond">
        <div className="activity-item bg-cordovan text-almond text-sm p-4 border border-almond">John Stanior commented <br /> Well, I am liking how it captures the audience <br /> 2 seconds ago</div>
        <div className="activity-item bg-cordovan text-almond text-sm p-4 border border-almond">John Stanior added a new video <br /> Creative people must follow these guidelines <br /> 5 minutes ago</div>
        <div className="activity-item bg-cordovan text-almond text-sm p-4 border border-almond">John Stanior shared a document <br /> "How to become an expert" <br /> 1 day ago</div>
        <div className="activity-item bg-cordovan text-almond text-sm p-4 border border-almond">Arjun unlocked a new badge <br /> Social Guru <br /> 44 minutes ago</div>
        <div className="activity-item bg-cordovan text-almond text-sm p-4 border border-almond">Michael uploaded a new video <br /> How do I start a website design project <br /> 1 hour ago</div>
        <div className="activity-item bg-cordovan text-almond text-sm p-4 border border-almond">John Stanior liked a video <br /> Some marketing tricks <br /> 19 minutes ago</div>
      </div>
    </div>
  );
}

export default Activity;
