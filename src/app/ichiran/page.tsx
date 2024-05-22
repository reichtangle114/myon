'use client'
import React from "react";
import Header from "../head.jsx"
import Post from "../components/Post";
import useImages from "../hooks/useImages";
import PreviewImage from "../components/PreviewImage";

const App: React.FC = () => {
  const { allImages, imagesError } = useImages();
  return (
    <div className="App">
      <Header />
      <Post />
      <h3>投稿一覧</h3>
      <p style={{ color: "red" }}>{imagesError && imagesError}</p>
      <div className="container">
        <div className="row">
          {allImages.map((image, index) => (
            <div className="col-4" key={index}>
              <PreviewImage image={image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;