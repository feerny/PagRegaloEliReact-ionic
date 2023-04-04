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

const ImagesContent: React.FC<ImagesContentProps> = (props) => {
  //funcion para enviar estado de video(si se reproduce o no)
  const videoPlayOrNot=(validation:boolean)=>{
    props.setisOnPlayVideo(validation)
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
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Nuestros Momentos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <div>
          <IonList>
            {dataCards.map((item, index) => (
              <IonCard key={index} id={`section${index}`}>
                { item.image.split(".")[1]==="mp4"? (
                  <video onPause={()=>videoPlayOrNot(false)} onPlay={()=>videoPlayOrNot(true)}  width="370rem" controls>
                    <source src={item.image} type="video/mp4" />
                  </video>
                ) : (
                  item.image!==""?<img alt={"imageNumber " + (index + 1)} src={item.image} />:null
                )}
                <IonCardHeader>
                  <IonCardTitle>{item.title}</IonCardTitle>
                  {item.date!==""?<IonCardSubtitle>{item.date}</IonCardSubtitle>:null}
                </IonCardHeader>

                <IonCardContent>{item.description}</IonCardContent>
              </IonCard>
            ))}
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ImagesContent;
