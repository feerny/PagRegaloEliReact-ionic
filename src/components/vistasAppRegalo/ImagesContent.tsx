import React from "react";
import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonList,
  IonMenuButton,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  RefresherEventDetail,
} from "@ionic/react";

import { dataCards } from "../../data/dataCards/DataCards";
import { ImagesContentProps } from "../../data/imagesContentProps/ImagesContentProps";
import { useHistory } from "react-router-dom";

const ImagesContent: React.FC<ImagesContentProps> = (props) => {
  let history=useHistory();
  //funcion para enviar estado de video(si se reproduce o no)
  const videoPlayOrNot=(e:any,validation:boolean)=>{
    e.preventDefault()
    props.setisOnPlayVideo(validation)
  }
  //funcion para refrescar la pagina
  function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
    setTimeout(() => {
      // Any calls to load data go here
      history.push("/AppRegalo/home")
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
          <IonTitle>Nuestros Momentos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
        {/* funcion de ionic para refrescar la pagina al hacer scroll hacia abajo */}
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
          <IonList style={localStorage.getItem("temeDark")==="true"?{backgroundColor:"rgb(56 59 64)"}:{}} className="listContent">
            {dataCards.map((item, index) => (
              // es mala practica poner el index como key pero ya que no se agregaran mas ni se modificaran lo deje asi
              <IonCard color={localStorage.getItem("temeDark")==="true"?"dark":""} key={index} id={`section${index}`}>
                {/* una validacion simple para saber si es una imagen o un video y elegir que debe usar */}
                {item.image.split(".")[1]==="staticflickr"? (
                  // si el recurso es un video entra y manda los atributos requeridos 
                  <video onPause={(e)=>videoPlayOrNot(e,false)} onPlay={(e)=>videoPlayOrNot(e,true)}  width="370rem" controls>
                    <source src={item.image} type="video/mp4" />
                  </video>
                ) : (
                  // si el recurso es una imagen entra y manda los atributos requeridos
                  item.image!==""?<img width="370rem" alt={"imageNumber " + (index + 1)} src={item.image} />:null
                )}
                <IonCardHeader>
                  <IonCardTitle>{item.title}</IonCardTitle>
                  {item.date!==""?<IonCardSubtitle>{item.date}</IonCardSubtitle>:null}
                </IonCardHeader>
                <IonCardContent>{item.description}</IonCardContent>
              </IonCard>
            ))}
          </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ImagesContent;
