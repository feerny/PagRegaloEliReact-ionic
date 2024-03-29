import React, { useEffect, useState } from "react";
import { IonButton, IonContent, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRefresher, IonRefresherContent, RefresherEventDetail, useIonAlert, useIonViewDidEnter  } from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";
import ReactAudioPlayer from "react-audio-player";
import "./inicioAppCss.css";
import { InicioAppProps } from "../../data/InicioAppProps";

const InicioApp: React.FC<InicioAppProps> = (props) => {

  useIonViewDidEnter(()=>{
    localStorage.setItem('number', "0")
  })

  const [message, setmessage] = useState<string>();
  const [valueInputApp, setvalueInputApp] = useState<string>("")
  const [themeColor, setthemeColor] = useState("")

  //al cambiar el numero de iteraccion se ejecuta el useEffect
  useEffect(() => {
    //dependiendo de la iteraccion envia atributos diferentes
    switch (props.NumIteracion) {
      case 0:
        setthemeColor("#dd0a9e")
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
        setthemeColor("#db0f42")
        //agrega y elimina estilos iniciales para transicion hacia arriba
        document.getElementById("buttonInicioApp")?.setAttribute("disabled","true")
        document.getElementById("buttonInicioApp")?.classList.add("disabled");
        document.getElementById("tittleApp")?.classList.remove("tittleInicioApp");
        document.getElementById("ionContent")?.classList.remove("ion-content1");
        document.getElementById("ionContent")?.classList.add("ion-content2");
        document.getElementById("tittleApp")?.classList.add("titledisabled");
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
        setthemeColor("#4c0ddf")
        //agrega y elimina estilos iniciales para transicion hacia arriba
        document.getElementById("buttonInicioApp")?.setAttribute("disabled","true")
        document.getElementById("buttonInicioApp")?.classList.add("disabled2");
        document.getElementById("tittleApp")?.classList.remove("tittleInicioApp");
        document.getElementById("ionContent")?.classList.remove("ion-content2");
        document.getElementById("ionContent")?.classList.add("ion-content3");
        document.getElementById("tittleApp")?.classList.add("titledisabled");
        document.getElementById("buttonInicioApp")?.classList.remove("buttonInicioAppCss2");
        //funcion traer texto de arriba
        const addAnimation3 = () => {
          setmessage("no es la gran cosa, pero le dedique cariño y tiempo<3");
          document.getElementById("tittleApp")?.classList.remove("titledisabled");
          document.getElementById("tittleApp")?.classList.add("tittleInicioApp");
        };
        //funcion para mostrar boton
        const showButtons3=()=>{
          document.getElementById("buttonInicioApp")?.removeAttribute("disabled");
          document.getElementById("buttonInicioApp")?.classList.remove("disabled2");
          document.getElementById("buttonInicioApp")?.classList.add("buttonInicioAppCss3");
        }
        //ejecuta las funciones depues de x tiempo para aplicar las animaciones
        window.setTimeout(addAnimation3, 3000);
        window.setTimeout(showButtons3, 6000);
        break;
        case 3:
          setthemeColor("#0fe42b")
          //agrega y elimina estilos iniciales para transicion hacia arriba
          document.getElementById("buttonInicioApp")?.setAttribute("disabled","true")
          document.getElementById("buttonInicioApp")?.classList.add("disabled3");
          document.getElementById("tittleApp")?.classList.remove("tittleInicioApp");
          document.getElementById("ionContent")?.classList.remove("ion-content3");
          document.getElementById("ionContent")?.classList.add("ion-content4");
          document.getElementById("tittleApp")?.classList.add("titledisabled");
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
            document.getElementById("buttonInicioApp")?.classList.remove("disabled3");
            document.getElementById("buttonInicioApp")?.classList.add("buttonInicioAppCss4");
          }
          //ejecuta las funciones depues de x tiempo para aplicar las animaciones
          window.setTimeout(addAnimation4, 3000);
          window.setTimeout(showButtons4, 6000);
          break;
        case 4:
          setthemeColor("#e45d0f")
          //agrega y elimina estilos iniciales para transicion hacia arriba
          document.getElementById("buttonInicioApp")?.setAttribute("disabled","true")
          document.getElementById("buttonInicioApp")?.classList.add("disabled4");
          document.getElementById("inputidapp")?.classList.add("disabledInputApp");
          document.getElementById("tittleApp")?.classList.remove("tittleInicioApp");
          document.getElementById("ionContent")?.classList.remove("ion-content4");
          document.getElementById("ionContent")?.classList.add("ion-content5");
          document.getElementById("tittleApp")?.classList.add("titledisabled");
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
            document.getElementById("buttonInicioApp")?.classList.remove("disabled4");
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
        case 5:
            setthemeColor("#09fafa")
            //agrega y elimina estilos iniciales para transicion hacia arriba
            document.getElementById("buttonInicioApp")?.setAttribute("disabled","true")
            document.getElementById("buttonInicioApp")?.classList.add("disabled5");
            document.getElementById("tittleApp")?.classList.remove("tittleInicioApp");
            document.getElementById("ionContent")?.classList.remove("ion-content5");
            document.getElementById("ionContent")?.classList.add("ion-content6");
            document.getElementById("tittleApp")?.classList.add("titledisabled");
            document.getElementById("buttonInicioApp")?.classList.remove("buttonInicioAppCss5");
            //funcion traer texto de arriba
            const addAnimation6 = () => {
              setmessage("muuuuuuuuuy bien miamooor");
              document.getElementById("tittleApp")?.classList.remove("titledisabled");
              document.getElementById("tittleApp")?.classList.add("tittleInicioApp");
            };
            //funcion para mostrar boton
            const showButtons6=()=>{
              document.getElementById("buttonInicioApp")?.removeAttribute("disabled");
              document.getElementById("buttonInicioApp")?.classList.remove("disabled5");
              document.getElementById("buttonInicioApp")?.classList.add("buttonInicioAppCss6");
            }
            //ejecuta las funciones depues de x tiempo para aplicar las animaciones
            window.setTimeout(addAnimation6, 3000);
            window.setTimeout(showButtons6, 6000);
            break;
          case 6:
              setthemeColor("#d6fa09")
              //agrega y elimina estilos iniciales para transicion hacia arriba
              document.getElementById("buttonInicioApp")?.setAttribute("disabled","true")
              document.getElementById("buttonInicioApp")?.classList.add("disabled6");
              document.getElementById("tittleApp")?.classList.remove("tittleInicioApp");
              document.getElementById("ionContent")?.classList.remove("ion-content6");
              document.getElementById("ionContent")?.classList.add("ion-content7");
              document.getElementById("tittleApp")?.classList.add("titledisabled");
              document.getElementById("buttonInicioApp")?.classList.remove("buttonInicioAppCss6");
              //funcion traer texto de arriba
              const addAnimation7 = () => {
                setmessage("ahora si vamos a pasar a lo principal");
                document.getElementById("tittleApp")?.classList.remove("titledisabled");
                document.getElementById("tittleApp")?.classList.add("tittleInicioApp");
              };
              //funcion para mostrar boton
              const showButtons7=()=>{
                document.getElementById("buttonInicioApp")?.removeAttribute("disabled");
                document.getElementById("buttonInicioApp")?.classList.remove("disabled6");
                document.getElementById("buttonInicioApp")?.classList.add("buttonInicioAppCss7");
              }
              //ejecuta las funciones depues de x tiempo para aplicar las animaciones
              window.setTimeout(addAnimation7, 3000);
              window.setTimeout(showButtons7, 6000);
              break;
            case 7:
              setthemeColor("#5d09fa")
              //agrega y elimina estilos iniciales para transicion hacia arriba
              document.getElementById("buttonInicioApp")?.setAttribute("disabled","true")
              document.getElementById("buttonInicioApp")?.classList.add("disabled7");
              document.getElementById("tittleApp")?.classList.remove("tittleInicioApp");
              document.getElementById("ionContent")?.classList.remove("ion-content7");
              document.getElementById("ionContent")?.classList.add("ion-content8");
              document.getElementById("tittleApp")?.classList.add("titledisabled");
              document.getElementById("buttonInicioApp")?.classList.remove("buttonInicioAppCss7");
              //funcion traer texto de arriba
              const addAnimation8 = () => {
                setmessage("esta es una pagina con algunos recuerdos que tenemos juntos:3");
                document.getElementById("tittleApp")?.classList.remove("titledisabled");
                document.getElementById("tittleApp")?.classList.add("tittleInicioApp");
              };
              //funcion para mostrar boton
              const showButtons8=()=>{
                document.getElementById("buttonInicioApp")?.removeAttribute("disabled");
                document.getElementById("buttonInicioApp")?.classList.remove("disabled7");
                document.getElementById("buttonInicioApp")?.classList.add("buttonInicioAppCss8");
              }
              //ejecuta las funciones depues de x tiempo para aplicar las animaciones
              window.setTimeout(addAnimation8, 3000);
              window.setTimeout(showButtons8, 6000);
              break;
            case 8:
              setthemeColor("#fa0909")
              //agrega y elimina estilos iniciales para transicion hacia arriba
              document.getElementById("buttonInicioApp")?.setAttribute("disabled","true")
              document.getElementById("buttonInicioApp")?.classList.add("disabled8");
              document.getElementById("tittleApp")?.classList.remove("tittleInicioApp");
              document.getElementById("ionContent")?.classList.remove("ion-content8");
              document.getElementById("ionContent")?.classList.add("ion-content9");
              document.getElementById("tittleApp")?.classList.add("titledisabled");
              document.getElementById("buttonInicioApp")?.classList.remove("buttonInicioAppCss8");
              //funcion traer texto de arriba
              const addAnimation9 = () => {
                setmessage("la dividi en varias secciones a las cuales puedes acceder con los botones de abajo");
                document.getElementById("tittleApp")?.classList.remove("titledisabled");
                document.getElementById("tittleApp")?.classList.add("tittleInicioApp");
              };
              //funcion para mostrar boton
              const showButtons9=()=>{
                document.getElementById("buttonInicioApp")?.removeAttribute("disabled");
                document.getElementById("buttonInicioApp")?.classList.remove("disabled8");
                document.getElementById("buttonInicioApp")?.classList.add("buttonInicioAppCss9");
              }
              //ejecuta las funciones depues de x tiempo para aplicar las animaciones
              window.setTimeout(addAnimation9, 3000);
              window.setTimeout(showButtons9, 6000);
              break;

            case 9:
                setthemeColor("#fa09b2")
                //agrega y elimina estilos iniciales para transicion hacia arriba
                document.getElementById("buttonInicioApp")?.setAttribute("disabled","true")
                document.getElementById("buttonInicioApp")?.classList.add("disabled9");
                document.getElementById("tittleApp")?.classList.remove("tittleInicioApp");
                document.getElementById("ionContent")?.classList.remove("ion-content9");
                document.getElementById("ionContent")?.classList.add("ion-content10");
                document.getElementById("tittleApp")?.classList.add("titledisabled");
                document.getElementById("buttonInicioApp")?.classList.remove("buttonInicioAppCss9");
                //funcion traer texto de arriba
                const addAnimation10 = () => {
                  setmessage("y podras volver a repetir esto en el menu de la esquina superior donde tendras otras funciones");
                  document.getElementById("tittleApp")?.classList.remove("titledisabled");
                  document.getElementById("tittleApp")?.classList.add("tittleInicioApp");
                };
                //funcion para mostrar boton
                const showButtons10=()=>{
                  document.getElementById("buttonInicioApp")?.removeAttribute("disabled");
                  document.getElementById("buttonInicioApp")?.classList.remove("disabled9");
                  document.getElementById("buttonInicioApp")?.classList.add("buttonInicioAppCss10");
                }
                //ejecuta las funciones depues de x tiempo para aplicar las animaciones
                window.setTimeout(addAnimation10, 3000);
                window.setTimeout(showButtons10, 6000);
                break;
              case 10:
                setthemeColor("#c8ff00")
                //agrega y elimina estilos iniciales para transicion hacia arriba
                document.getElementById("buttonInicioApp")?.setAttribute("disabled","true")
                document.getElementById("buttonInicioApp")?.classList.add("disabled10");
                document.getElementById("tittleApp")?.classList.remove("tittleInicioApp");
                document.getElementById("ionContent")?.classList.remove("ion-content10");
                document.getElementById("ionContent")?.classList.add("ion-content11");
                document.getElementById("tittleApp")?.classList.add("titledisabled");
                document.getElementById("buttonInicioApp")?.classList.remove("buttonInicioAppCss10");
                //funcion traer texto de arriba
                const addAnimation11 = () => {
                  setmessage("bueno, ya te dejo ir a ver tu pequeño regalo<3");
                  document.getElementById("tittleApp")?.classList.remove("titledisabled");
                  document.getElementById("tittleApp")?.classList.add("tittleInicioApp");
                };
                //funcion para mostrar boton
                const showButtons11=()=>{
                  document.getElementById("buttonInicioApp")?.removeAttribute("disabled");
                  document.getElementById("buttonInicioApp")?.classList.remove("disabled10");
                  document.getElementById("buttonInicioApp")?.classList.add("buttonInicioAppCss11");
                }
                //ejecuta las funciones depues de x tiempo para aplicar las animaciones
                window.setTimeout(addAnimation11, 3000);
                window.setTimeout(showButtons11, 6000);
                break;
      default:
        
        break;
    }
  }, [props.NumIteracion]);

  //cuando esta enfocado el input desenfoca el fondo
  const onfocusapp=()=>{
    document.getElementById("tittleApp")?.classList.add("backfocusinput");
    document.getElementById("ionContent")?.classList.add("backfocus");
  }
  //cuando se desenfoca el input enfoca el fondo
  const onblurapp=()=>{
    document.getElementById("tittleApp")?.classList.remove("backfocusinput");
    document.getElementById("ionContent")?.classList.remove("backfocus");
  }


  //compara la respuesta del input con las respuestas validas guardadas en variables de entorno .env
  const onChangeValidation=(e:any)=>{
    document.getElementById("audioFallo")?.setAttribute("muted","true")
        //controla los cambios del input y los guarda en variable
        e.stopPropagation();
        setvalueInputApp(e.target.value);
        //si entra pasa link pag principal
        if (e.target.value.toLowerCase()===process.env.REACT_APP_VALIDATIONTXT1 || e.target.value.toLowerCase()===process.env.REACT_APP_VALIDATIONTXT2 || e.target.value.toLowerCase()===process.env.REACT_APP_VALIDATIONTXT3 || e.target.value.toLowerCase()===process.env.REACT_APP_VALIDATIONTXT4 || e.target.value.toLowerCase()===process.env.REACT_APP_VALIDATIONTXT5) {
          props.setvalidationRoutes(1);      
          
          localStorage.setItem('number', `${1}`) 
        //si no entra pasa link a la pagina de fallo
        }else if(e.target.value===""){
          localStorage.setItem('number', "0") 
          props.setvalidationRoutes(0)
        }else{
          localStorage.setItem('number', "2") 
          props.setvalidationRoutes(2);
        }
  }
  const [presentAlert] = useIonAlert();
  const clickAppValidation=()=>{
    //si no hay texto en el input mustra alerta
    if (props.validationRoutes===0) {
      presentAlert({
        header: '.-.',
        cssClass: 'custom-alert',
        subHeader: 'Que Pasa?',
        message: 'Escriba algo pendeja',
        buttons: [{text:'Weno :c',cssClass:"buttonAlert"}],
      })
    }

    //si entra redireciona a la pagina principal
    if (valueInputApp.toLowerCase()===process.env.REACT_APP_VALIDATIONTXT1 || valueInputApp.toLowerCase()===process.env.REACT_APP_VALIDATIONTXT2 || valueInputApp.toLowerCase()===process.env.REACT_APP_VALIDATIONTXT3 || valueInputApp.toLowerCase()===process.env.REACT_APP_VALIDATIONTXT4 || valueInputApp.toLowerCase()===process.env.REACT_APP_VALIDATIONTXT5) {
      setvalueInputApp("")
      props.setNumIteracion(props.NumIteracion + 1)
      
    //si no entra redireciona a la pagina de fallo
    }else if(props.validationRoutes===2){
      const refresh=()=>{
        window.location.reload()
      }

      window.setTimeout(refresh, 100)
      
      setvalueInputApp("")
    } 
  }

  //funcion para refrescar la pagina
  function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
    setTimeout(() => {
      // Any calls to load data go here
      window.location.reload();
      event.detail.complete();
    }, 1000);
  }

  const clickFinalValidation=()=>{
    if (props.validationRoutes===1) {
      props.setvalidationTrue(process.env.REACT_APP_NUMVALID);      
      localStorage.setItem('ValiSesion', `${process.env.REACT_APP_NUMVALID}`) 
      const refresh=()=>{
        window.location.reload()
      }
      window.setTimeout(refresh, 100)
    }else{
      alert("completa la validacion")
      window.location.reload()
    }

  }

  

  return (
    <IonPage>
      <head>
      <meta name="theme-color" content={themeColor} />
      </head>

      <IonContent id="ionContent" className="ion-content1">
      <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
      </IonRefresher>
        <div className="CenterContent">
          <h1 id="tittleApp" className="tittleInicioApp">
            {message}
          </h1>
        </div>
        
        {props.NumIteracion===4?<IonItem id="inputidapp" ><IonLabel color="dark"  position="floating">Responde</IonLabel><IonInput color="dark" onIonBlur={onblurapp} onIonFocus={onfocusapp}  onIonInput={onChangeValidation} value={valueInputApp}  placeholder="Enter text"></IonInput></IonItem>:null}
        <IonButton
        routerLink={props.validationRoutes===0?"/InicioApp":props.NumIteracion===10?"/appRegalo":props.validationRoutes===2?"/FalloApp":"/InicioApp"}
        onClick={(e) => props.NumIteracion===4?clickAppValidation():props.NumIteracion===10?clickFinalValidation():props.setNumIteracion(props.NumIteracion + 1)}
        id="buttonInicioApp"
        >
          {props.NumIteracion===4?"Enviar":"Next"}
          <IonIcon icon={arrowForwardOutline} />
        </IonButton>
        {/* solo muestra la img en la 3 iteracion */}
        {props.NumIteracion===3?<img className="imgEmoji" src="https://images.emojiterra.com/google/android-11/512px/1f914.png" alt="emoji"/>:null}

        <ReactAudioPlayer
        //cambia de musica dependiendo de la iteracion
          src={props.NumIteracion===5?"https://cdn.pixabay.com/audio/2021/08/09/audio_364cfa6e8b.mp3":props.NumIteracion>5?"https://cdn.pixabay.com/audio/2021/12/16/audio_232a4bdedf.mp3":"https://www.bensound.com/bensound-music/bensound-pianomoment.mp3"}
          autoPlay
          
          loop={props.NumIteracion===5?false:true}
        />
      </IonContent>
    </IonPage>
  );
};

export default InicioApp;
