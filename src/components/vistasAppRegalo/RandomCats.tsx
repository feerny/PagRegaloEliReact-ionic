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
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import axios from 'axios';
import { paw } from "ionicons/icons";

const RandomCats: React.FC = () => {

  //guardo los datos de la imagen de la api
  const [imgUrl, setimgUrl] = useState<string>("")
  const [idImg, setidImg] = useState<string>("")
  const [isLoading, setisLoading] = useState<boolean>(false)
  //funcion para comsumo de api
  const generateCat = async() => {
    //envia estado cargando y espera a que pase la consulta 
    setisLoading(true)
    await axios.get('https://api.thecatapi.com/v1/images/search')
  .then(function (response) {
    // handle success
    //envia los datos al usestate
    setimgUrl(response.data[0].url)
    setidImg(response.data[0].id)
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    //rompe el estado cargando y muestra el error
    setisLoading(false)
    console.log(error);
  })
  .finally(function () {
    //rompe el estado cargando e imprime un ok
    setisLoading(false)
    console.log("finalizo ok");
  });
  };

  //ejecuta el consumo de api en el primer render
  useEffect(() => {
    generateCat()
    return () => {
      console.log("se fue");
      };
    
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
          <div >
           {/* si el estado es loading muestra un loading */}
          {isLoading?<IonImg className="imgCats" src={"https://img1.picmix.com/output/stamp/normal/8/5/2/9/509258_fb107.gif"} alt={"loading..."}></IonImg>:<IonImg className="imgCats" src={imgUrl} alt={idImg}></IonImg>}
          <IonButton color="dark" fill="outline" expand="block" onClick={()=>generateCat()}>Dame Otro Gato<IonIcon slot="end" icon={paw}></IonIcon></IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default RandomCats;
