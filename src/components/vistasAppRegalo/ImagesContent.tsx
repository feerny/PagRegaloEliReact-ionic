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

const ImagesContent: React.FC = () => {
  return (
    <IonContent>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Nuestros Momentos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonText>Nuestros Momentos Content</IonText>
      </IonContent>
    </IonContent>
  );
};

export default ImagesContent;
