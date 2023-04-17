import React, { useRef } from "react";
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
          <IonToolbar>
            <IonTitle>Music</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => props.setIsOpen(false)}>
                Close
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <IonTitle>Controles para la musica</IonTitle>
            <div style={{ marginTop: "20px" }} className="iconsControllsMusic">
              <button
                onClick={() => clickPrev()}
                style={{ background: "none" }}
              >
                <IonIcon size="large" icon={playSkipBack} />
              </button>
              {/* validacion para saber si mostrar el icono de pausa o play y su funcionalidad */}
              {props.isPlayMusic ? (
                <button
                  onClick={() => props.music.audioEl.current.pause()}
                  style={{ background: "none" }}
                >
                  <IonIcon size="large" icon={pauseCircle} />
                </button>
              ) : (
                <button
                  onClick={() => props.music.audioEl.current.play()}
                  style={{ background: "none" }}
                >
                  <IonIcon size="large" icon={playCircle} />
                </button>
              )}
              <button
                onClick={() =>
                  props.aleatorioActive ? props.clickNextAleatorio() : props.clickNext()
                }
                style={{ background: "none" }}
              >
                <IonIcon size="large" icon={playSkipForward} />
              </button>
              <button
                onClick={() => props.setaleatorioActive(!props.aleatorioActive)}
                style={{ background: "none" }}
              >
                <IonIcon
                  color={props.aleatorioActive ? "primary" : ""}
                  size="large"
                  icon={shuffle}
                />
              </button>
            </div>
            <h1 className="tittleMusic">{props.musicData}</h1>
            <IonAccordionGroup ref={accordionGroup}>
              <IonAccordion value="first">
                <IonItem lines="none" slot="header" color="light">
                  <IonLabel>Musica disponible</IonLabel>
                </IonItem>
                <div className="ion-padding" slot="content">
                  {MusicList.map((data, index) => (
                    <IonItem onClick={() => toggleAccordion(data, index)}>
                      {data.tittle}
                    </IonItem>
                  ))}
                </div>
              </IonAccordion>
            </IonAccordionGroup>
          </div>
          <IonFooter>
            <IonToolbar>
              <IonTitle>Footer</IonTitle>
            </IonToolbar>
          </IonFooter>
        </IonContent>
      </IonModal>
    </>
  );
};

export default MusicaController;
