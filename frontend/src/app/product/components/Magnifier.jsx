import React, { useState, useRef } from "react";

const Magnifier = ({ src, alt, magnifierHeight = 200, magnifierWidth = 200, zoomLevel = 2 }) => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const img = imgRef.current;
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y });
  };

  return (
    <div className="relative w-full h-full" onMouseMove={handleMouseMove} onMouseEnter={() => setShowMagnifier(true)} onMouseLeave={() => setShowMagnifier(false)}>
      {/* Main Image */}
      <img ref={imgRef} src={src} alt={alt} className="w-full h-full object-cover" />

      {/* Magnifying Glass */}
      {showMagnifier && (
        <div
          className="absolute pointer-events-none border-2 border-gray-300"
          style={{
            width: `${magnifierWidth}px`,
            height: `${magnifierHeight}px`,
            top: `${position.y - magnifierHeight / 2}px`,
            left: `${position.x - magnifierWidth / 2}px`,
            backgroundImage: `url('${src}')`,
            backgroundSize: `${imgRef.current.width * zoomLevel}px ${imgRef.current.height * zoomLevel}px`,
            backgroundPosition: `-${position.x * zoomLevel - magnifierWidth / 2}px -${position.y * zoomLevel - magnifierHeight / 2}px`,
          }}
        ></div>
      )}
    </div>
  );
};

export default Magnifier;
