import React from "react";
import {
  IonButton,
  IonContent,
  IonIcon,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  RefresherEventDetail,
} from "@ionic/react";
import "./pagFalloCss.css";
import ReactAudioPlayer from "react-audio-player";
import { arrowBackOutline } from "ionicons/icons";
import { PagFalloProps } from "../../data/PagFalloProps";

const PagFallo: React.FC<PagFalloProps> = (props) => {
  document.getElementById("buttonPagFallo")?.setAttribute("disabled","true")
  document.getElementById("buttonPagFallo")?.classList.add("disabledFallo");
  const showButtons = () => {
    document.getElementById("buttonPagFallo")?.removeAttribute("disabled");
    document.getElementById("buttonPagFallo")?.classList.remove("disabledFallo");
    document.getElementById("buttonPagFallo")?.classList.add("buttonInicioAppCssFallo");
  };
  //ejecuta funcion despues de 3 segundos para mostrar los botones
  window.setTimeout(showButtons, 5000);
  const clickBack = () => {
    localStorage.setItem('number', "0") 
    props.setvalidationRoutes(0)
    props.setNumIteracion(4);
    console.log("back");
  };
  //funcion para refrescar la pagina
  function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
    setTimeout(() => {
      // Any calls to load data go here
      window.location.reload();
      event.detail.complete();
    }, 1000);
  }
  return (
    <IonPage>
      <IonContent className="ion-content-fallo">
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <h1 className="h1InitFallo">. . . khe?</h1>
        <IonButton
          routerLink="/InicioApp"
          onClick={() => clickBack()}
          id="buttonPagFallo"
        >
          <IonIcon icon={arrowBackOutline} />
          volver
        </IonButton>
      </IonContent>
      <ReactAudioPlayer
        src="http://www.sonidosmp3gratis.com/sounds/error-fallo%203.mp3"
        autoPlay
      />
    </IonPage>
  );
};

export default PagFallo;
