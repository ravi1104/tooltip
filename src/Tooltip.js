import React, { useState } from 'react';

const Tooltip = ({ position }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <div className="tooltip-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className="tooltip-trigger">Hover over me</button>
      {isTooltipVisible && (
        <div className={`tooltip tooltip-${position}`}>
          This is the tooltip content
        </div>
      )}
    </div>
  );
};

export default Tooltip;
