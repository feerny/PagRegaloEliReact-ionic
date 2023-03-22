import React from "react";
import {
    IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const RandomCats: React.FC = () => {
  return (
    <IonContent>
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
    </IonContent>
  );
};

export default RandomCats;
