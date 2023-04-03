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

const ImagesContent: React.FC = () => {
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
              <IonCard>
                { index===9 || index===5? (
                  <video width="360rem" controls>
                    <source src={item.image} type="video/mp4" />
                  </video>
                ) : (
                  item.image!==""?<img alt={"imageNumber " + (index + 1)} src={item.image} />:null
                )}
                <IonCardHeader>
                  <IonCardTitle>{item.title}</IonCardTitle>
                  <IonCardSubtitle>{item.date}</IonCardSubtitle>
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
