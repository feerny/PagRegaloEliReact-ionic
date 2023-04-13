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
} from "@ionic/react";

const Regalo: React.FC = () => {
  const [OpenRegalo, setOpenRegalo] = useState<boolean>(false);
  const [imgLoad, setimgLoad] = useState<boolean>(false);
  const [styleTapaRegalo, setstyleTapaRegalo] = useState("imgCubiertaRegalo");
  const imgLoadClomplet = () => {
    console.log("ffssf");

    setimgLoad(true);
  };
  function clickOpenRegalo() {
    setOpenRegalo(true);
    setstyleTapaRegalo("imgCubiertaRegaloRemove");
    setTimeout(() => setstyleTapaRegalo("imgCubiertaRegaloRemoveFinal"), 6000);
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
      <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
        <IonRefresherContent></IonRefresherContent>
      </IonRefresher>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Regalo</IonTitle>
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
          {OpenRegalo ? (
            imgLoad ? null : (
              <IonSpinner className="imgRegaloSpinner" name="bubbles" />
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
          <IonImg
            onClick={() => clickOpenRegalo()}
            className={styleTapaRegalo}
            src="/assets/images/imgTapaRegalo.jpg"
          ></IonImg>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Regalo;
