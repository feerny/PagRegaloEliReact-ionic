import React from "react";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { MusicaControllerProps } from "../../data/musicaControllerProps/MusicaControllerProps";
import {
  pauseCircle,
  playCircle,
  playSkipBack,
  playSkipForward,
} from "ionicons/icons";

const MusicaController: React.FC<MusicaControllerProps> = (props) => {
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
              <button style={{ background: "none" }}>
                <IonIcon size="large" icon={playSkipBack} />
              </button>
              {/* validacion para saber si mostrar el icono de pausa o play y su funcionalidad */}
              {props.isPlayMusic?<button onClick={()=>props.music.audioEl.current.pause()} style={{ background: "none" }}>
                <IonIcon size="large" icon={pauseCircle} />
              </button>:
              <button onClick={()=>props.music.audioEl.current.play()} style={{ background: "none" }}>
                <IonIcon size="large" icon={playCircle} />
              </button>}
              <button style={{ background: "none" }}>
                <IonIcon size="large" icon={playSkipForward} />
              </button>
            </div>
          </div>
        </IonContent>
      </IonModal>
    </>
  );
};

export default MusicaController;
