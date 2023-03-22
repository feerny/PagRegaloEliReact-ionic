import React from "react";
import {
    IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonText,
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
        <IonText>Generador de gatos Randoms Content</IonText>
      </IonContent>
    </IonPage>
  );
};

export default RandomCats;
