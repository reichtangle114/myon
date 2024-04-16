'use client'
import { useState} from "react"
import { ref , getDownloadURL } from "firebase/storage";
import { firestorage } from "../firebase_criant.js"

export default function Mainpage() {
  let [Image, setImage] = useState();
  let url;
  const gsReference = ref(
    firestorage,
    "gs://myon-cbc85.appspot.com/おたまとおたち.jpg"
  );
  getDownloadURL(gsReference)
  .then((url) => {
    setImage(url);
  })
  .catch((err) => console.log(err));     
console.log(url)

  return (
      <>
        左：おたま（ぬいぐるみ）
        <br></br>
        アニーのトゥモローをよく歌う。たまらぶゆー。
        <br></br>
        中：おたま（オタマトーン）
        <br></br>
        つけっぱなしにするとすぐに電池切れになる。基本無言でぱくぱくしている。
        <br></br>
        右：おたち
        <br></br>
        お立ちのお客様へのご案内が仕事。座りたい。
        <br></br>
        <img src={Image} alt="おたまとおたち" />
      </>
  )
}