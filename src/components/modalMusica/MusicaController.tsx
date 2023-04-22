import React, { useRef, useState } from "react";
import {
  IonAccordion,
  IonAccordionGroup,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonModal,
  IonSpinner,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { MusicaControllerProps } from "../../data/musicaControllerProps/MusicaControllerProps";
import {
  pauseCircle,
  playCircle,
  playSkipBack,
  playSkipForward,
  shuffle,
} from "ionicons/icons";
import { MusicList } from "../../data/dataMusic/MusicList";

const MusicaController: React.FC<MusicaControllerProps> = (props) => {
  //valida si ya cargo la imagen
  const [imgLoad, setimgLoad] = useState(false)
  //agarra los elementos del acordeon
  const accordionGroup = useRef<null | HTMLIonAccordionGroupElement>(null);
  //funcion para cerrar acordeon al dar clik en uno de sus hijos
  const toggleAccordion = (data: any, index: any) => {
    //envia los datos de la cancion seleccionada
    props.setmusicData({
      url: data.url,
      title: data.tittle,
    });
    props.setnumMusic(index);
    //valida no es null
    if (!accordionGroup.current) {
      return;
    }
    //cierra el acordeon
    const nativeEl = accordionGroup.current;
    nativeEl.value = undefined;
  };
  const clickPrev = () => {
    if (props.numMusic === 0) {
      props.setmusicData({
        url: MusicList[MusicList.length - 1].url,
        title: MusicList[MusicList.length - 1].tittle,
      });
      props.setnumMusic(MusicList.length - 1);
    } else {
      props.setmusicData({
        url: MusicList[props.numMusic - 1].url,
        title: MusicList[props.numMusic - 1].tittle,
      });
      props.setnumMusic(props.numMusic - 1);
    }
  };
  return (
    <>
      <IonModal isOpen={props.isOpen}>
        <IonHeader>
          <IonToolbar color={localStorage.getItem("temeDark")==="true"?"dark":""}>
            <IonTitle>Musica pa Eli</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => props.setIsOpen(false)}>
                Close
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent color={localStorage.getItem("temeDark")==="true"?"dark":""}>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <IonTitle>Controles para la musica</IonTitle>
            <div style={{ marginTop: "20px" }} className="iconsControllsMusic">
              <button
                onClick={() => clickPrev()}
                style={{ background: "none" }}
              >
                <IonIcon style={localStorage.getItem("temeDark")==="true"?{color:"white"}:{}} size="large" icon={playSkipBack} />
              </button>
              {/* validacion para saber si mostrar el icono de pausa o play y su funcionalidad */}
              {props.isPlayMusic ? (
                <button
                  onClick={() => props.music.audioEl.current.pause()}
                  style={{ background: "none" }}
                >
                  <IonIcon style={localStorage.getItem("temeDark")==="true"?{color:"white"}:{}} size="large" icon={pauseCircle} />
                </button>
              ) : (
                <button
                  onClick={() => props.music.audioEl.current.play()}
                  style={{ background: "none" }}
                >
                  <IonIcon style={localStorage.getItem("temeDark")==="true"?{color:"white"}:{}} size="large" icon={playCircle} />
                </button>
              )}
              <button
                onClick={() =>
                  props.aleatorioActive
                    ? props.clickNextAleatorio()
                    : props.clickNext()
                }
                style={{ background: "none" }}
              >
                <IonIcon style={localStorage.getItem("temeDark")==="true"?{color:"white"}:{}} size="large" icon={playSkipForward} />
              </button>
              <button
                onClick={() => props.setaleatorioActive(!props.aleatorioActive)}
                style={{ background: "none" }}
              >
                <IonIcon 
                  style={localStorage.getItem("temeDark")==="true"?{color:"white"}:{}}
                  color={props.aleatorioActive ? "primary" : ""}
                  size="large"
                  icon={shuffle}
                />
              </button>
            </div>
            <h1 className="tittleMusic">{props.musicData}</h1>
            <IonAccordionGroup ref={accordionGroup}>
              <IonAccordion style={localStorage.getItem("temeDark")==="true"?{backgroundColor:"#222428"}:{}} value="first">
                <IonItem color={localStorage.getItem("temeDark")==="true"?"dark":""} lines="none" slot="header" >
                  <IonLabel>Musica disponible</IonLabel>
                </IonItem>
                <div className="ion-padding" slot="content">
                  {MusicList.map((data, index) => (
                    <IonItem color={localStorage.getItem("temeDark")==="true"?"dark":""} onClick={() => toggleAccordion(data, index)}>
                      {data.tittle}
                    </IonItem>
                  ))}
                </div>
              </IonAccordion>
            </IonAccordionGroup>
            {imgLoad?null:<IonSpinner className="imgRegaloSpinner" name="bubbles" />}
            <img
              onLoad={()=>setimgLoad(true)}
              width="370rem"
              height="417rem"
              alt={"imageCatDance"}
              src={
                "https://i.pinimg.com/originals/72/77/19/72771935f70719c9d006e4c3f1a8320a.gif"
              }
            />
          </div>
          <IonFooter>
            <IonToolbar color={localStorage.getItem("temeDark")==="true"?"dark":""}>
              <IonTitle>Musica Obtenida de <a target="__blank" href="https://pixabay.com/es/music/search/lofi/">pixabay</a></IonTitle>
            </IonToolbar>
          </IonFooter>
        </IonContent>
      </IonModal>
    </>
  );
};

export default MusicaController;
