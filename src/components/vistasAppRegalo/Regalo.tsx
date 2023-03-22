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

const Regalo: React.FC = () => {
  return (
    <IonContent>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Regalo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>Regalo Content</IonContent>
    </IonContent>
  );
};

export default Regalo;
