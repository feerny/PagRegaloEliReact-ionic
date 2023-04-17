import React, { useState } from "react";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonModal,
  IonTitle,
  IonToolbar,
  useIonViewDidEnter,
} from "@ionic/react";
import { MusicaControllerProps } from "../../data/musicaControllerProps/MusicaControllerProps";
import {
  pauseCircle,
  playCircle,
  playSkipBack,
  playSkipForward,
} from "ionicons/icons";
import {MusicList} from "../../data/dataMusic/MusicList";

const MusicaController: React.FC<MusicaControllerProps> = (props) => {
  const [numMusic, setnumMusic] = useState(0)
  const clickNext=()=>{
    if (numMusic+1===MusicList.length) {
      console.log(MusicList.length);
      props.setmusicData({url:MusicList[0].url,title:MusicList[0].tittle})
      setnumMusic(0)
    }else{
      props.setmusicData({url:MusicList[numMusic+1].url,title:MusicList[numMusic+1].tittle})
      setnumMusic(numMusic+1)
      console.log(numMusic);
    }

  }
  const clickPrev=()=>{
    if (numMusic===0) {
      console.log(MusicList.length);
      props.setmusicData({url:MusicList[MusicList.length-1].url,title:MusicList[MusicList.length-1].tittle})
      setnumMusic(MusicList.length-1)
    }else{
      props.setmusicData({url:MusicList[numMusic-1].url,title:MusicList[numMusic-1].tittle})
      setnumMusic(numMusic-1)
      console.log(numMusic);
    }

  }
  useIonViewDidEnter(()=>{
    console.log(props.music.audioEl)
  })
  return (
    <>
      <IonModal isOpen={props.isOpen}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Music</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => props.setIsOpen(false)}>
                Close
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <IonTitle>Controles para la musica</IonTitle>
            <div style={{ marginTop: "20px" }} className="iconsControllsMusic">
              <button onClick={()=>clickPrev()} style={{ background: "none" }}>
                <IonIcon size="large" icon={playSkipBack} />
              </button>
              {/* validacion para saber si mostrar el icono de pausa o play y su funcionalidad */}
              {props.isPlayMusic?<button onClick={()=>props.music.audioEl.current.pause()} style={{ background: "none" }}>
                <IonIcon size="large" icon={pauseCircle} />
              </button>:
              <button onClick={()=>props.music.audioEl.current.play()} style={{ background: "none" }}>
                <IonIcon size="large" icon={playCircle} />
              </button>}
              <button onClick={()=>clickNext()} style={{ background: "none" }}>
                <IonIcon size="large" icon={playSkipForward} />
              </button>
            </div>
            <h1 className="tittleMusic">{props.musicData}</h1>
          </div>
        </IonContent>
      </IonModal>
    </>
  );
};

export default MusicaController;
