import React, { useEffect, useState } from "react";
import { IonButton, IonContent, IonIcon, IonInput, IonItem, IonLabel, IonPage } from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";
import ReactAudioPlayer from "react-audio-player";

import "./inicioAppCss.css";
import { InicioAppProps } from "../../data/InicioAppProps";

const InicioApp: React.FC<InicioAppProps> = (props) => {
  const [NumIteracion, setNumIteracion] = useState<number>(0);
  const [message, setmessage] = useState<string>();
  const [valueInputApp, setvalueInputApp] = useState<string>("")

  //al cambiar el numero de iteraccion se ejecuta el useEffect
  useEffect(() => {
    //dependiendo de la iteraccion envia atributos diferentes
    switch (NumIteracion) {
      case 0:
        document.getElementById("buttonInicioApp")?.setAttribute("disabled","true")
        document.getElementById("buttonInicioApp")?.classList.add("disabled");
        setmessage("Bueno miamor este es un dia muy especial");
          //remueve atributo disabled y agrega clase para transicion
        const showButtons = () => {
          document.getElementById("buttonInicioApp")?.removeAttribute("disabled");
          document.getElementById("buttonInicioApp")?.classList.remove("disabled");
          document.getElementById("buttonInicioApp")?.classList.add("buttonInicioAppCss");
        };
        //ejecuta funcion despues de 3 segundos para mostrar los botones
        window.setTimeout(showButtons, 3000);
        break;
      case 1:
        //agrega y elimina estilos iniciales para transicion hacia arriba
        document.getElementById("buttonInicioApp")?.setAttribute("disabled","true")
        document.getElementById("buttonInicioApp")?.classList.add("disabled");
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
      case 2:
        //agrega y elimina estilos iniciales para transicion hacia arriba
        document.getElementById("buttonInicioApp")?.setAttribute("disabled","true")
        document.getElementById("buttonInicioApp")?.classList.add("disabled");
        document.getElementById("tittleApp")?.classList.remove("tittleInicioApp");
        document.getElementById("ionContent")?.classList.remove("ion-content2");
        document.getElementById("ionContent")?.classList.add("ion-content3");
        document.getElementById("tittleApp")?.classList.add("titledisabled");
        document.getElementById("buttonInicioApp")?.setAttribute("disabled", "true");
        document.getElementById("buttonInicioApp")?.classList.add("disabled");
        document.getElementById("buttonInicioApp")?.classList.remove("buttonInicioAppCss2");
        //funcion traer texto de arriba
        const addAnimation3 = () => {
          setmessage("no es la gran cosa, pero le dedique cari??o y tiempo<3");
          document.getElementById("tittleApp")?.classList.remove("titledisabled");
          document.getElementById("tittleApp")?.classList.add("tittleInicioApp");
        };
        //funcion para mostrar boton
        const showButtons3=()=>{
          document.getElementById("buttonInicioApp")?.removeAttribute("disabled");
          document.getElementById("buttonInicioApp")?.classList.remove("disabled");
          document.getElementById("buttonInicioApp")?.classList.add("buttonInicioAppCss3");
        }
        //ejecuta las funciones depues de x tiempo para aplicar las animaciones
        window.setTimeout(addAnimation3, 3000);
        window.setTimeout(showButtons3, 6000);
        break;
        case 3:
          //agrega y elimina estilos iniciales para transicion hacia arriba
          document.getElementById("buttonInicioApp")?.setAttribute("disabled","true")
          document.getElementById("buttonInicioApp")?.classList.add("disabled");
          document.getElementById("tittleApp")?.classList.remove("tittleInicioApp");
          document.getElementById("ionContent")?.classList.remove("ion-content3");
          document.getElementById("ionContent")?.classList.add("ion-content4");
          document.getElementById("tittleApp")?.classList.add("titledisabled");
          document.getElementById("buttonInicioApp")?.setAttribute("disabled", "true");
          document.getElementById("buttonInicioApp")?.classList.add("disabled");
          document.getElementById("buttonInicioApp")?.classList.remove("buttonInicioAppCss3");
          //funcion traer texto de arriba
          const addAnimation4 = () => {
            setmessage("pero antes tienes que responder una pregunta para saber que eres tu");
            document.getElementById("tittleApp")?.classList.remove("titledisabled");
            document.getElementById("tittleApp")?.classList.add("tittleInicioApp");
          };
          //funcion para mostrar boton
          const showButtons4=()=>{
            document.getElementById("buttonInicioApp")?.removeAttribute("disabled");
            document.getElementById("buttonInicioApp")?.classList.remove("disabled");
            document.getElementById("buttonInicioApp")?.classList.add("buttonInicioAppCss4");
          }
          //ejecuta las funciones depues de x tiempo para aplicar las animaciones
          window.setTimeout(addAnimation4, 3000);
          window.setTimeout(showButtons4, 6000);
          break;
        case 4:
          //agrega y elimina estilos iniciales para transicion hacia arriba
          document.getElementById("buttonInicioApp")?.setAttribute("disabled","true")
          document.getElementById("buttonInicioApp")?.classList.add("disabled");
          document.getElementById("inputidapp")?.classList.add("disabledInputApp");
          document.getElementById("tittleApp")?.classList.remove("tittleInicioApp");
          document.getElementById("ionContent")?.classList.remove("ion-content4");
          document.getElementById("ionContent")?.classList.add("ion-content5");
          document.getElementById("tittleApp")?.classList.add("titledisabled");
          document.getElementById("buttonInicioApp")?.setAttribute("disabled", "true");
          document.getElementById("buttonInicioApp")?.classList.add("disabled");
          document.getElementById("buttonInicioApp")?.classList.remove("buttonInicioAppCss4");
          //funcion traer texto de arriba
          const addAnimation5 = () => {
            setmessage("una sola palabra, que fue lo que te dije que me regalaras cuando nos conocimos?");
            document.getElementById("tittleApp")?.classList.remove("titledisabled");
            document.getElementById("tittleApp")?.classList.add("tittleInicioApp");
          };
          //funcion para mostrar boton
          const showButtons5=()=>{
            document.getElementById("buttonInicioApp")?.removeAttribute("disabled");
            document.getElementById("buttonInicioApp")?.classList.remove("disabled");
            document.getElementById("buttonInicioApp")?.classList.add("buttonInicioAppCss5");
          }
          const showInput5=()=>{
            document.getElementById("inputidapp")?.classList.remove("disabledInputApp");
            document.getElementById("inputidapp")?.classList.add("inputApp");
          }
          //ejecuta las funciones depues de x tiempo para aplicar las animaciones
          window.setTimeout(addAnimation5, 3000);
          window.setTimeout(showButtons5, 6000);
          window.setTimeout(showInput5, 6000);
          break;

      default:
        
        break;
    }
  }, [NumIteracion]);

  //controla los cambios del input y los guarda en variable
  const onChange=(e:any)=>{
    e.stopPropagation();
    setvalueInputApp(e.target.value);
  }
  //compara la respuesta del input con las respuestas validas guardadas en variables de entorno .env
  const clickAppValidation=()=>{
    //si entra redireciona a la pagina principal
    if (valueInputApp.toLowerCase()===process.env.REACT_APP_VALIDATIONTXT1 || valueInputApp.toLowerCase()===process.env.REACT_APP_VALIDATIONTXT2 || valueInputApp.toLowerCase()===process.env.REACT_APP_VALIDATIONTXT3 || valueInputApp.toLowerCase()===process.env.REACT_APP_VALIDATIONTXT4) {
      console.log("validacion completa");

      props.setvalidationRoutes(1)
      
    //si no entra redireciona a la pagina de fallo
    }else{
      console.log("mala la res");
      props.setvalidationRoutes(2)
    }

    
  }

  

  return (
    <IonPage>
      <IonContent id="ionContent" className="ion-content1">
        <div className="CenterContent">
          <h1 id="tittleApp" className="tittleInicioApp">
            {message}
          </h1>
        </div>
        
        {NumIteracion===4?<IonItem id="inputidapp" ><IonLabel color="dark"  position="floating">Responde</IonLabel><IonInput color="dark"  onIonInput={onChange} value={valueInputApp}  placeholder="Enter text"></IonInput></IonItem>:null}
        <IonButton
          onClick={(e) => NumIteracion===4?clickAppValidation():setNumIteracion(NumIteracion + 1)}
          
          id="buttonInicioApp"
        >
          {NumIteracion===4?"Enviar":"Next"}
          <IonIcon icon={arrowForwardOutline} />
        </IonButton>
        {/* solo muestra la img en la 3 iteracion */}
        {NumIteracion===3?<img className="imgEmoji" src="/assets/images/emoji.png" alt="emoji"/>:null}

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
