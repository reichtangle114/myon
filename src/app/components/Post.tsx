'use client'
import React, { useState, ChangeEvent } from "react";
import { ref, uploadBytes } from "firebase/storage";
import { validateImage } from "image-validator";
import db,{ firestorage } from "../firebase_criant.js";
import { addDoc, collection } from "firebase/firestore";
import styled from '@emotion/styled';
import { Button,  Paper, TextField } from '@mui/material';

const Post: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState<string>("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // ファイルのバリデーション。3GB未満でかつ画像ファイルのみに制限している
  const validateFile = async (selectedFile: File): Promise<boolean> => {
    const limitFileSize = 3 * 1024 * 1024;

    if (selectedFile.size > limitFileSize) {
      setErrorMsg("File size is too large, please keep it under 3 GB.");
      return false;
    }

    const isValidImage = await validateImage(selectedFile);

    if (!isValidImage) {
      setErrorMsg("You cannot upload anything other than image files.");
      return false;
    }

    return true;
  };

  // 画像を選択する
  const handleImageSelect = async (e: ChangeEvent<HTMLInputElement>) => {
    setErrorMsg(null);
    e.preventDefault();
    const selectedFile = e.target.files?.[0];

    if (selectedFile && (await validateFile(selectedFile))) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setFile(selectedFile);
        setImagePreview(reader.result as string);
        setErrorMsg(null);
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  // 画像をstorageにアップロードし、firestoreに保存する
  const uploadImage = async () => {
    try {
      if (!file) {
        setErrorMsg("File not selected.");
        return;
      }

      const timestamp = new Date().getTime();
      const uniqueFilename = `${timestamp}_${file.name}`;
      const storageRef = ref(firestorage, `images/${uniqueFilename}`);

      // storageにアップロード
      await uploadBytes(storageRef, file);

      // firestoreに保存
      await addDoc(collection(db, "Images"), {
        text,
        fileName: uniqueFilename,
        timestamp: new Date(),
      });

      setErrorMsg("Submission completed!");
    } catch (e) {
      setErrorMsg(`Error: ${e}`);
    }
  };

  return (
    <div>
      <StyledPaper className='form'>
      <form>
        <input type="file" onChange={handleImageSelect} />
        <br />
        <TextField label="画像説明"  className="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setErrorMsg(null);
          }}
        />
        <br />
        <Button
          className='btn'
          onClick={uploadImage}
        >
          upload
        </Button>
      </form>
      <p style={{ color: "red" }}>{errorMsg && errorMsg}</p>
      {imagePreview && (
        <img
          src={imagePreview}
          style={{
            width: "auto",
            height: 200,
            objectFit: "cover",
          }}
          alt="preview"
        />
      )}
      </StyledPaper>
    </div>
  );
};

const StyledPaper = styled(Paper)`
display: flex;
justify-content: center;
width: 960px;
height: 540px;

.form {
  width: 60%;
  margin: 3rem;
  text-align: center;
}

.text {
  width: 100%;
  margin: 1rem 0;
  background-color: powderblue;
}

.btn {
  width: 60%;
  color: white;
  text-align: center;
  margin: 1.5rem 0;
  background-color: lightseagreen;
}

`;
export default Post;