import React, {  useState } from "react";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonImg,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,

} from "@ionic/react";

const Regalo: React.FC = () => {
  const [OpenRegalo, setOpenRegalo] = useState<boolean>(false)
  const [styleTapaRegalo, setstyleTapaRegalo] = useState("imgCubiertaRegalo")
  function clickOpenRegalo(){
    setOpenRegalo(true)
    setstyleTapaRegalo("imgCubiertaRegaloRemove")

  }


  return (
    <IonPage>
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
          {OpenRegalo?<IonImg className="imgRegalo" src="/assets/images/imgRegalo.jpg" alt="imageRegalo" />:null}
          <IonImg onClick={clickOpenRegalo} className={styleTapaRegalo} src="/assets/images/imgTapaRegalo.jpg"></IonImg>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Regalo;
