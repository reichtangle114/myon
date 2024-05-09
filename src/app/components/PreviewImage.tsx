'use client'
import React, { useState, useEffect } from "react";
import Image from "../types/image";
import  {formatTimestamp}  from "../utils/formatTimestamp";
import { ref, getDownloadURL, StorageReference } from "firebase/storage";
import { firestorage } from "../firebase_criant.js";

const PreviewImage: React.FC<{ image: Image }> = ({ image }) => {
  const [prevUrl, setPrevUrl] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const getImageUrl = async (imageRef: StorageReference) => {
      try {
        const url = await getDownloadURL(imageRef);
        setPrevUrl(url);
      } catch (e) {
        setError(`${e}`);
      }
    };

    const imageRef = ref(firestorage, `images/${image.fileName}`);
    getImageUrl(imageRef);
  }, [image.fileName]);

  return (
    <div
      style={{
        boxShadow: "0px 4px 8px gray",
        padding: 10,
        margin: 10,
        width: 350,
        height: 400,
      }}
    >
      <p>
        <img
          src={prevUrl}
          alt={error}
          style={{ height: 200, width: 300, objectFit: "cover" }}
        />
      </p>
      <p>{image.text}</p>
      <p>{formatTimestamp(image.timestamp.toDate())}</p>
    </div>
  );
};

export default PreviewImage;