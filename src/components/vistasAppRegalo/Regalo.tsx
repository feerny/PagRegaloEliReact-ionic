import React, {   useState } from "react";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonImg,
  IonMenuButton,
  IonPage,
  IonSpinner,
  IonTitle,
  IonToolbar,

} from "@ionic/react";

const Regalo: React.FC = () => {
  const [OpenRegalo, setOpenRegalo] = useState<boolean>(false)
  const [imgLoad, setimgLoad] = useState<boolean>(false)
  const [styleTapaRegalo, setstyleTapaRegalo] = useState("imgCubiertaRegalo")
  const imgLoadClomplet=()=>{
    console.log("ffssf");
    
    setimgLoad(true)
  }
  function clickOpenRegalo(){
    setOpenRegalo(true)
    setstyleTapaRegalo("imgCubiertaRegaloRemove")
    setTimeout(()=>setstyleTapaRegalo("imgCubiertaRegaloRemoveFinal"),6000);

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
          {OpenRegalo?(imgLoad?null:<IonSpinner className="imgRegaloSpinner"  name="bubbles"/>):null}
          {OpenRegalo?<IonImg onIonImgDidLoad={()=>imgLoadClomplet()} className="imgRegalo" src="/assets/images/imgRegalo.jpg" alt="imageRegalo" />:null}
          <IonImg onClick={()=>clickOpenRegalo()} className={styleTapaRegalo} src="/assets/images/imgTapaRegalo.jpg"></IonImg>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Regalo;
