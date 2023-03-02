import React from "react";
import {
    IonButton,
    IonCol,
  IonGrid,
  IonIcon,
  IonRow,
} from "@ionic/react";

const  YaNoEstesMal: React.FC = () => {
  return (

    <IonCol size="auto">
    <h1 id="h1Init4" className="h1Init4">Mira Tu Email <IonIcon /> </h1>
    <IonGrid>
      <IonRow class="ion-justify-content-center rowDown">
        <IonCol size="11" >
        <IonButton  disabled  id="button1" className="disabled">Shi </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonCol>
  );
};

export default  YaNoEstesMal;
