import React from "react";
import { IonButton, IonContent, IonIcon, IonPage } from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";
import ReactAudioPlayer from "react-audio-player";
import "./inicioAppCss.css";

const InicioApp: React.FC = () => {
  const showButtons=()=>{
    document.getElementById("buttonInicioApp")?.removeAttribute("disabled");
    document.getElementById("buttonInicioApp")?.classList.remove("disabled");
    document.getElementById("buttonInicioApp")?.classList.add("buttonInicioAppCss");

  }
  window.setTimeout(showButtons,3000);


  return (
    <IonPage>
      <IonContent className="ion-content1">
        <div className="CenterContent">
        <h1>inicia</h1>
        <IonButton className="disabled" disabled id="buttonInicioApp">
          Next
          <IonIcon icon={arrowForwardOutline} />
        </IonButton>
        </div>

        <ReactAudioPlayer src="https://www.bensound.com/bensound-music/bensound-pianomoment.mp3" autoPlay muted loop  />
      </IonContent>
    </IonPage>
  );
};

export default InicioApp;
