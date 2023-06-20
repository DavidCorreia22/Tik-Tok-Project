import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/Video";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {

let maxHeight;
if (window.innerHeight <= 800) {
  maxHeight = window.innerHeight
}


  /* daqui até o getVideos e referente a conseguir pegar as informações no Banco de dados */
  const [video, setVideos] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db,"videos"); /* "bd" é o aceeso ao banco de dados e o "videos" se refere a coleção criada no firebase */
    const videosSnapshot = await getDocs(videosCollection); /* vai pegar as informações do documento que esta na coleção videos no firebase*/
    const videosList = videosSnapshot.docs.map((doc) => doc.data()); /* vez o mapeamento para pegar todos as informações de cada documento */
    setVideos(videosList);
  }

  useEffect(() => {
    getVideos();
  }, []); /* as colunas são para não criar um loop */

  return (
    <div className="App" style={{maxHeight: maxHeight + "px"}}>
      <div className="app__videos">
        {video.map((item) => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
