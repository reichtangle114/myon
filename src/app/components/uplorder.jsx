'use client'
import { useState} from "react"
import { ref , uploadBytes } from "firebase/storage";
import { validateImage } from "image-validator";
import { firestorage } from "../firebase_criant.js"
import { Button } from "flowbite-react";

export default function Post() {
        const [file, setFile] = useState();
      
        // ファイルのバリデーション関数
      　　 const validateFile = async (file) => {
          // 3GBを最大のファイルサイズに設定
          const limitFileSize = 3 * 1024 * 1024;
          if (file.size > limitFileSize) {
            alert("ファイルサイズが大きすぎます。\n3メガバイト以下にしてください。");
            return false;
          }
          const isValidImage = await validateImage(file);
          if (!isValidImage) {
            alert("画像ファイル以外はアップロードできません。");
            return false;
          }
          return true;
        }
      
        // 画像選択関数
        const handleImageSelect = async(e) => {
          e.preventDefault();
          const reader = new FileReader();
          const file = e.target.files[0];
          if (!(await validateFile(file))) {
            return;
          }
          reader.onloadend = async () => {
            setFile(file);
          };
          reader.readAsDataURL(file);
        };
      
        // 画像アップロード関数
        const uploadImage = async () => {
        // 参照を作成 → 'images/(画像名)'
        const storageRef = ref(firestorage, `images/${file.name}`);
        await uploadBytes(storageRef, file)
            .then((snapshot) => {
              console.log("アップロードに成功しました");
            })
            .catch((error) => {
              console.log("アップロードに失敗しました");
            });
        }

return (
    <>
    <div>
      <form onSubmit={uploadImage}>
        <input type="file" onChange={handleImageSelect} />
        <Button color="blue">アップロード</Button>
      </form>
    </div>
    </>
)
}