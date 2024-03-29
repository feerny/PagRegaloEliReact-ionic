import React, { useEffect, useState } from "react";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonMenuButton,
  IonPage,
  IonProgressBar,
  IonRefresher,
  IonRefresherContent,
  IonSpinner,
  IonTitle,
  IonToolbar,
  RefresherEventDetail,
  useIonViewDidLeave,
  useIonViewWillEnter,
} from "@ionic/react";
import axios from "axios";
import { paw } from "ionicons/icons";
import { CatsAndRegaloProps } from "../../data/catsAndRegaloProps/CatsAndRegaloProps";
const RandomCats: React.FC<CatsAndRegaloProps> = (props) => {
  //estilo de fondo 
  const contentCatsRandoms={
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    backgroundRepeat: 'repeat',
    backgroundImage: `${localStorage.getItem("temeDark")==="true"?"linear-gradient(to right,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),":""}  url("/assets/images/FondoGatos.png")`,
  }
  // Creamos el controlador para abortar la petición
  const controller = new AbortController();
  // Recuperamos la señal del controlador
  const { signal } = controller;
  //guardo los datos de la imagen de la api
  const [imgUrl, setimgUrl] = useState<string>("");
  const [idImg, setidImg] = useState<string>("");
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [isLoadingImg, setisLoadingImg] = useState<boolean>(true);
  //funcion para comsumo de api
  const generateCat = async () => {
    //envia estado cargando y espera a que pase la consulta
    setisLoading(true);
    await axios
      .get("https://api.thecatapi.com/v1/images/search", { signal })
      .then(function (response) {
        // handle success
        //envia los datos al usestate
        setimgUrl(response.data[0].url);
        setidImg(response.data[0].id);
      })
      .catch(function (error) {
        // handle error
        //rompe el estado cargando y muestra el error
        setisLoading(false);
        console.log(error);
      })
      .finally(function () {
        //rompe el estado cargando e imprime un ok
        setisLoadingImg(true)
        setisLoading(false);
        console.log("finalizo ok");
      });
  };

  //al desmontar componente cancela peticion a la api si se sigue ejecutando
  useIonViewDidLeave(() => {
    controller.abort();
    console.log("salio de cats");
  });
  //al cargar componente quita el de images comtent para optimizar y rendimiento
  useIonViewWillEnter(() => {
     props.setisClose(true);
  });
  //funcion para refrescar la pagina
  function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
    setTimeout(() => {
      // Any calls to load data go here
      window.location.reload();
      event.detail.complete();
    }, 1000);
  }
  //ejecuta el consumo de api en el primer render
  useEffect(() => {
    generateCat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={localStorage.getItem("temeDark")==="true"?"dark":""}>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle >Generador de Gatos randoms</IonTitle>
          {isLoading ? (
            <IonProgressBar color="dark" type="indeterminate"></IonProgressBar>
          ) : null}
        </IonToolbar>
      </IonHeader>
      <IonContent >
      <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
        <IonRefresherContent></IonRefresherContent>
      </IonRefresher>
        <div
          
          style={contentCatsRandoms}
        >
          <div className="spinnerCats" >
            {/* si el estado es loading muestra un spinner */}
            {isLoading ? (
              <IonSpinner color={localStorage.getItem("temeDark")==="true"?"light":""} name="bubbles" />
            ) : (
              <IonImg onIonImgDidLoad={()=>setisLoadingImg(false)}  className={localStorage.getItem("temeDark")==="true"?"imgCatsDark":"imgCats"} src={imgUrl} alt={idImg}></IonImg>
            )}
            {isLoading ?null:isLoadingImg?<IonSpinner  color={localStorage.getItem("temeDark")==="true"?"light":""} name="bubbles" />:null}
            <IonButton
            style={{backdropFilter: "blur(10px)"}}
              color={localStorage.getItem("temeDark")==="true"?"light":"dark"}
              fill="outline"
              expand="block"
              onClick={() => generateCat()}
            >
              Dame Otro Gato<IonIcon slot="end" icon={paw}></IonIcon>
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default RandomCats;
