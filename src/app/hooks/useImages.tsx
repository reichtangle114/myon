'use client'
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import  db  from "../firebase_criant.js";
import Image from "../types/image";

const useImages = () => {
  const [allImages, setAllImages] = useState<Image[]>([]);
  const [imagesError, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "Images"), (snapshot) => {
      try {
        const imagesData: Image[] = snapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id } as Image))
          .sort((a, b) => b.timestamp.toMillis() - a.timestamp.toMillis());
        setAllImages(imagesData);
      } catch (error) {
        setErrorMsg(`Error: ${error}`);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return { allImages, imagesError };
};

export default useImages;