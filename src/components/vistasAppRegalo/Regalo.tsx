import React, { useState } from "react";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonImg,
  IonMenuButton,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonSpinner,
  IonTitle,
  IonToolbar,
  RefresherEventDetail,
  useIonViewWillEnter,
} from "@ionic/react";
import { CatsAndRegaloProps } from "../../data/catsAndRegaloProps/CatsAndRegaloProps";

const Regalo: React.FC<CatsAndRegaloProps> = (props) => {
  //estilo para fondo de regalo 
  const styleRegalo={
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    backgroundRepeat: "repeat",
    backgroundImage: `${localStorage.getItem("temeDark")==="true"?"linear-gradient(to right,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),":""}  url("https://img.freepik.com/vector-gratis/patron-cajas-regalo-rojo-transparente_1284-43016.jpg")`,
  
  }
  //al cargar componente quita el de images comtent para optimizar y rendimiento
  const [OpenRegalo, setOpenRegalo] = useState<boolean>(false);
  let localStorageItem=localStorage.getItem("openRegalo")||null;
  useIonViewWillEnter(()=>{
    if (localStorage.getItem("openRegalo")) {
      if (localStorage.getItem("openRegalo")==="true") {
        setOpenRegalo(true);
      }
    }
    props.setisClose(true)
  })

  const [imgLoad, setimgLoad] = useState<boolean>(false);
  const [styleTapaRegalo, setstyleTapaRegalo] = useState("imgCubiertaRegalo");
  //carga de la imagen
  const imgLoadClomplet = () => {
    setimgLoad(true);
  };
  //da estilo a la tapa del regalo para animacion
  function clickOpenRegalo() {
    setTimeout(()=>localStorage.setItem("openRegalo", "true"),6000)
    setOpenRegalo(true);
    setstyleTapaRegalo("imgCubiertaRegaloRemove");
  }
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
      <IonHeader>
        <IonToolbar color={localStorage.getItem("temeDark")==="true"?"dark":""}>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Regalo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
      <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
        <IonRefresherContent></IonRefresherContent>
      </IonRefresher>
        <div
          style={styleRegalo}
        >
          {OpenRegalo ? (
            imgLoad ? null : (
              <IonSpinner color={localStorage.getItem("temeDark")==="true"?"light":""} className="imgRegaloSpinner" name="bubbles" />
            )
          ) : null}
          {OpenRegalo ? (
            <IonImg
              onIonImgDidLoad={() => imgLoadClomplet()}
              className="imgRegalo"
              src="/assets/images/imgRegalo.jpg"
              alt="imageRegalo"
            />
          ) : null}
          {localStorageItem==="true"?null:<IonImg
            onClick={() => clickOpenRegalo()}
            className={styleTapaRegalo}
            src="/assets/images/imgTapaRegalo.jpg"
          ></IonImg>}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Regalo;
