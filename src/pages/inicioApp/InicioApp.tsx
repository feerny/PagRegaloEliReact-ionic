import React, { useEffect, useState } from "react";
import { IonButton, IonContent, IonIcon, IonPage } from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";
import ReactAudioPlayer from "react-audio-player";
import "./inicioAppCss.css";

const InicioApp: React.FC = () => {
  const [NumIteracion, setNumIteracion] = useState<number>(0);
  const [message, setmessage] = useState<string>();
  //remueve atributo disabled y agrega clase para transicion
  const showButtons = () => {
    document.getElementById("buttonInicioApp")?.removeAttribute("disabled");
    document.getElementById("buttonInicioApp")?.classList.remove("disabled");
    document.getElementById("buttonInicioApp")?.classList.add("buttonInicioAppCss");
  };
  //ejecuta funcion despues de 3 segundos para mostrar los botones
  window.setTimeout(showButtons, 3000);
  //al cambiar el numero de iteraccion se ejecuta el useEffect
  useEffect(() => {
    //dependiendo de la iteraccion envia atrivutos diferentes
    switch (NumIteracion) {
      case 0:
        setmessage("Bueno miamor este es un dia muy especial");
        break;
      case 1:
        //agrega estilos iniciales para transicion
        document.getElementById("tittleApp")?.classList.remove("tittleInicioApp");
        document.getElementById("ionContent")?.classList.remove("ion-content1");
        document.getElementById("ionContent")?.classList.add("ion-content2");
        document.getElementById("tittleApp")?.classList.add("titledisabled");
        document.getElementById("buttonInicioApp")?.setAttribute("disabled", "true");
        document.getElementById("buttonInicioApp")?.classList.add("disabled");
        document.getElementById("buttonInicioApp")?.classList.remove("buttonInicioAppCss");
        //funcion traer texto de arriba
        const addAnimation = () => {
          setmessage("por eso te queria dar un regalito diferente");
          document.getElementById("tittleApp")?.classList.remove("titledisabled");
          document.getElementById("tittleApp")?.classList.add("tittleInicioApp");
        };
        //funcion para mostrar boton
        const showButtons2=()=>{
          document.getElementById("buttonInicioApp")?.removeAttribute("disabled");
          document.getElementById("buttonInicioApp")?.classList.remove("disabled");
          document.getElementById("buttonInicioApp")?.classList.add("buttonInicioAppCss2");
        }
        //ejecuta las funciones depues de x tiempo para aplicar las animaciones
        window.setTimeout(addAnimation, 3000);
        window.setTimeout(showButtons2, 6000);
        break;

      default:
        break;
    }
  }, [NumIteracion]);

  return (
    <IonPage>
      <IonContent id="ionContent" className="ion-content1">
        <div className="CenterContent">
          <h1 id="tittleApp" className="tittleInicioApp">
            {message}
          </h1>
        </div>
        <IonButton
          onClick={(e) => {
            setNumIteracion(NumIteracion + 1);
          }}
          className="disabled"
          disabled
          id="buttonInicioApp"
        >
          Next
          <IonIcon icon={arrowForwardOutline} />
        </IonButton>

        <ReactAudioPlayer
          src="https://www.bensound.com/bensound-music/bensound-pianomoment.mp3"
          autoPlay
          muted
          loop
        />
      </IonContent>
    </IonPage>
  );
};

export default InicioApp;
