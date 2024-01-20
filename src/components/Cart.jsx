import React, { useState } from 'react';

const Cart = () => {
  const [isSliderOpen, setSliderOpen] = useState(false);

  const handleSliderToggle = () => {
    setSliderOpen(!isSliderOpen);
  };

  return (
    <div>
      <button onClick={handleSliderToggle}>Toggle Slider</button>
      {isSliderOpen && (
        <div className=' max-h-screen z-30 max-w-[500px] fixed inset-0 bg-slate-500'>
          {/* Your slider content goes here */}
          Slider Content
        </div>
      )}
    </div>
  );
};

export default Cart