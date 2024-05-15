'use client'
import { useState, useEffect} from "react"
import { ref , getDownloadURL } from "firebase/storage";
import { firestorage } from "../firebase_criant.js"
import Header from "../head.jsx"

export default function Otama() {
    let [Image, setImage] = useState();
    useEffect(() => {
        const gsReference = ref(
        firestorage,
        "gs://myon-cbc85.appspot.com/むれる.jpg"
        );
        getDownloadURL(gsReference)
        .then((url) => {
        setImage(url);
        })
        .catch((err) => console.log(err));   
    }, []
    );

    function over(){
        const gsReference = ref(
            firestorage,
            "gs://myon-cbc85.appspot.com/うたう.jpg"
          );
          getDownloadURL(gsReference)
          .then((url) => {
            setImage(url);
          })
          .catch((err) => console.log(err));   
      }
      
      //マウスアウト時の処理を記述
      function leave(){
        const gsReference = ref(
            firestorage,
            "gs://myon-cbc85.appspot.com/むれる.jpg"
          );
          getDownloadURL(gsReference)
          .then((url) => {
            setImage(url);
          })
          .catch((err) => console.log(err));   
      }
    
    return (
        <>
          <Header />
            わう♪
            <a href="https://www.youtube.com/watch?v=fjVenA8boRo">
            <img src={Image} alt="おたまホース" onMouseOver={over} onMouseLeave={leave} width="300" height="400"/>
            </a>
        </>
    )
}