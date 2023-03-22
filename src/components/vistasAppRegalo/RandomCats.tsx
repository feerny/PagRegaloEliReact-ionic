import React from "react";
import {
    IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const RandomCats: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Generador de Gatos randoms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}> Generador de gatos Randoms Content</div>
    
      </IonContent>
    </IonPage>
  );
};

export default RandomCats;
