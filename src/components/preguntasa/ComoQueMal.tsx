import React from "react";
import {
    IonButton,
    IonCol,
  IonGrid,
  IonRow,
} from "@ionic/react";

const  ComoQueMal: React.FC = () => {
    const showButtons=()=>{
        document.getElementById("button1")?.removeAttribute("disabled");
        document.getElementById("button1")?.classList.remove("disabled");
        document.getElementById("button1")?.classList.add("button1");
  
        document.getElementById("button2")?.removeAttribute("disabled")
        document.getElementById("button2")?.classList.remove("disabled2")
        document.getElementById("button2")?.classList.add("button2")
  
      }
      window.setTimeout(showButtons,4000);
    return (
      <IonCol size="auto">
        <h1 id="h1Init2" className="h1Init3">Como que mal?</h1>
        <IonGrid>
          <IonRow class="ion-justify-content-center rowDown">
            <IonCol size="11" >
            <IonButton routerLink="/all-activities/YaNoEstesMal"  disabled  id="button1" className="disabled">Shi </IonButton>
            </IonCol>
            <IonCol size="11" offset="6">
            <IonButton routerLink="/InicioApp" disabled  id="button2" className="disabled2">Mentiris </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCol>
    );
  };

export default  ComoQueMal;
