import React from "react";
import { IonButton, IonCol, IonGrid, IonIcon, IonRow } from "@ionic/react";
import { happy, arrowForwardOutline } from "ionicons/icons";

const YaNoEstesMal: React.FC = () => {
  const showButtons = () => {
    document.getElementById("button3")?.removeAttribute("disabled");
    document.getElementById("button3")?.classList.remove("disabled3");
    document.getElementById("button3")?.classList.add("button3");
  };
  window.setTimeout(() => {
    showButtons();
  }, 3000);
  const refresh=()=>{
    window.location.reload()
  }
  return (
    <IonCol className="ion-col" size="auto">
      <h1 id="h1Init4" className="h1Init4">
        Mira Tu Email
        <IonIcon className="iconHappyBlack" icon={happy} />
      </h1>
      <IonGrid>
        <IonRow class="rowDown2">
          <IonCol className="ion-col" size="11">
            <IonButton
              onClick={()=>{window.setTimeout(refresh, 100)}}
              routerLink="/InicioApp"
              disabled
              id="button3"
              className="disabled3"
            >
              Next
              <IonIcon icon={arrowForwardOutline} />
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCol>
  );
};

export default YaNoEstesMal;
