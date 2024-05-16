import { useState } from "react";

const HomePage = () => {
  const [scale, setScale] = useState(1);
  const handleWheel = (event: any) => {
    if (event.ctrlKey) {
      let zoomDirection = 1;
      if (event.deltaY > 0) {
        zoomDirection = -1;
      }
      setScale((prevScale) => prevScale + zoomDirection * 0.1);
    }
  };

  return (
    <div
      className="bg-white w-full h-screen"
      style={{
        transform: `scale(${scale})`,
        transition: "transform 0.3s ease",
      }}
      onWheel={handleWheel}
    >
      This is the new thing
    </div>
  );
};

export default HomePage;
