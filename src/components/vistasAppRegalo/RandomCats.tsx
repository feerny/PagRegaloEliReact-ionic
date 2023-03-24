import React, { useEffect } from "react";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const RandomCats: React.FC = () => {
  const generateCat = () => {
    console.log("generado");
  };

  useEffect(() => {
    generateCat()
  },[])
  
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          
          
          <IonButton onClick={()=>generateCat()}>Generate</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default RandomCats;
