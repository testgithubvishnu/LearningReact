import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function App() {
  const [Images, setImages] = useState([]);
  useEffect(() => {
    getImages();
  }, []);
  uss;
  const getImages = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      const data = response.data;
      setImages(data);
      console.log(Images);
    } catch (error) {
      console.error("Unable to get images");
    }
  };

  return (
    <div>
      <button
        onClick={getImages}
        className="px-5 py-3 bg-green-600 text-white font-bold mx-10 my-10"
      >
        Get Images
      </button>
      <div className="p-10">
        {Images.map((elem) => {
          return (
            <img
              key={i}
              src={elem.download_url}
              width={300}
              height={300}
              className="m-10 rounded inline-block"
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
