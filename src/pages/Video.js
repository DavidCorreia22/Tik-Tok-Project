import React, { useRef, useState } from "react"; /* difitando "rfce"cria a estrutura react com uma function com nome do arquivo */
import VideoFooter from "./components/footer/videoFooter" /* importa o arquivo videoFooter.js */
import VideoSidebar from "./components/sidebar/VideoSidebar" /* importa o arquivo videoSidebar.js */
import "./video.css"; /* importa o aqui video.css */

function Video({likes, messages, shares, name, description, music, url}) {
  const videoRef = useRef(null);
  const [ play, setPlay ] = useState(false);

  function handdleStart() { /* função para o play e o pause clicando no video */
    if (play) {
      videoRef.current.pause();
      setPlay(false);   
     } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart} /* o "onclick" é a tag é quando clica na tela ou em algum objeto ela faz alguma função */
        loop
        src={url}
      ></video>
      < VideoSidebar /* inclui os valores nas variaveis vendo dos parametros da function video */
         likes={likes}
         messages={messages}
         shares={shares}
      />
      < VideoFooter /* inclui os valores nas variaveis vendo dos parametros da function video */
         name={name}
         description={description}
         music={music}
      />
    </div>
  );
}

export default Video;
