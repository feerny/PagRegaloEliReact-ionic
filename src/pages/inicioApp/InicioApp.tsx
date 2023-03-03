import React from "react";
import { IonButton, IonContent, IonIcon, IonPage } from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";
import ReactAudioPlayer from "react-audio-player";

const InicioApp: React.FC = () => {


  return (
    <IonPage>
      <IonContent>
        <h1>inicia</h1>
        <IonButton routerLink="/InicioApp" disabled id="button3">
          Next
          <IonIcon icon={arrowForwardOutline} />
        </IonButton>
        <ReactAudioPlayer src="https://www.bensound.com/bensound-music/bensound-memories.mp3" autoPlay={false} controls={true}  />
      </IonContent>
    </IonPage>
  );
};

export default InicioApp;
