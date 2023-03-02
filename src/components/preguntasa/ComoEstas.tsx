import React from "react";
import { IonCol, IonGrid, IonRow,IonButton } from "@ionic/react";
import { ComoEstasProps } from "../../data/ComoEstasProps";

const ComoEstas: React.FC<ComoEstasProps> = (props) => {

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
      {props.tittle?<h1 id="h1Init2" className="h1Init2">Como que mal?</h1>:<h1 id="h1Init" className="h1Init">Hola Miamor como estas?</h1>}
      <IonGrid>
        <IonRow class="ion-justify-content-center rowDown">
          <IonCol size="5.5" >
          <IonButton routerLink="/InicioApp" disabled  id="button1" className="disabled">Bien </IonButton>
          </IonCol>
          <IonCol size="5.5" offset="3">
          <IonButton routerLink="/all-activities/ComoQueMal" onClick={()=>{props.clickMalo()}} disabled  id="button2" className="disabled2">Mal </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCol>
  );
};

export default ComoEstas;
