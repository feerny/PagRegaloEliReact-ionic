import React, { useEffect, useRef, useState } from "react";
import {
  IonAccordion,
  IonAccordionGroup,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import {
  gift,
  people,
  earth,
  trash,
  list,
  heart,
  musicalNotes,
  moon,
  reader,
} from "ionicons/icons";
import { Redirect, Route } from "react-router";
import Regalo from "../../components/vistasAppRegalo/Regalo";
import { AppRegaloProps } from "../../data/appRegaloProps/AppRegaloProps";
import ImagesContent from "../../components/vistasAppRegalo/ImagesContent";
import RandomCats from "../../components/vistasAppRegalo/RandomCats";
import "./appRegaloCss.css";
import ReactAudioPlayer from "react-audio-player";
import MusicaControllerLazy from "../../components/modalMusica/MusicaControllerLazy";
import { MusicList } from "../../data/dataMusic/MusicList";
import ModalPoemaLazy from "../../components/modalPoema/ModalPoemaLazy";

const AppRegalo: React.FC<AppRegaloProps> = (props) => {
  //modal poema
  const [isOpenPoema, setIsOpenPoema] = useState(false);
  //data de musica
  const [musicData, setmusicData] = useState({
    url: "https://cdn.pixabay.com/audio/2021/12/16/audio_232a4bdedf.mp3",
    title: "Let It Go",
  });

  //funcion para cambiar de musica al finalizar
  const [numMusic, setnumMusic] = useState(0);
  const clickNext = () => {
    if (numMusic + 1 === MusicList.length) {
      console.log(MusicList.length);
      setmusicData({ url: MusicList[0].url, title: MusicList[0].tittle });
      setnumMusic(0);
    } else {
      setmusicData({
        url: MusicList[numMusic + 1].url,
        title: MusicList[numMusic + 1].tittle,
      });
      setnumMusic(numMusic + 1);
      console.log(numMusic);
    }
  };
  //valida si esta activado el modo aleatorio o no
  const [aleatorioActive, setaleatorioActive] = useState<Boolean>(false);
  //funcion de cambio de musica en modo aleatorio
  const clickNextAleatorio = () => {
    const number = Math.floor(Math.random() * MusicList.length);
    setmusicData({
      url: MusicList[number].url,
      title: MusicList[number].tittle,
    });
    setnumMusic(number);
  };
  const [isPlayMusic, setisPlayMusic] = useState<boolean>(true);
  //hace la referencia al audio
  const [music, setmusic] = useState<any>();
  const [isOpen, setIsOpen] = useState(false);
  //controlla si se cierra la seccion de imagenes para rendimiento
  const [isClose, setisClose] = useState(true);
  //controla si el video se reproduce o no
  const [isOnPlayVideo, setisOnPlayVideo] = useState<boolean>(false);
  //agarra los elementos del acordeon
  const accordionGroup = useRef<null | HTMLIonAccordionGroupElement>(null);
  //funcion para cerrar acordeon al dar clik en uno de sus hijos
  const toggleAccordion = (s: any) => {
    setisClose(false);
    let href = s;
    // hace scroll hasta el id dado
    const scroll = () => {
      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
      });
    };
    setTimeout(scroll, 100);

    //valida no es null
    if (!accordionGroup.current) {
      return;
    }
    //cierra el acordeon
    const nativeEl = accordionGroup.current;
    nativeEl.value = undefined;
  };
  //limpia datos de localStorage y vuelve a vista inicial
  const clearLocalSesion = () => {
    localStorage.clear();
    props.setvalidationTrue("0");
    window.location.reload();
  };
  //funcion para modo oscuro
  const [darkmode, setdarkmode] = useState(false);
  const clickDarkTheme = (t: any) => {
    localStorage.setItem("temeDark", `${t.detail.checked}`);
    setdarkmode(!darkmode);
  };
  useEffect(() => {
    if (localStorage.getItem("temeDark") === "true") {
      document
        ?.querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", "#222428");
      setdarkmode(true);
    } else {
      document
        ?.querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", "");
      setdarkmode(false);
    }
    console.log("tema " + (darkmode ? "dark" : "default"));
  }, [darkmode]);

  return (
    <IonContent>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar
            color={localStorage.getItem("temeDark") === "true" ? "dark" : ""}
          >
            <IonItem
              lines="none"
              color={localStorage.getItem("temeDark") === "true" ? "dark" : ""}
            >
              <IonIcon
                style={
                  localStorage.getItem("temeDark") === "true"
                    ? { color: "white" }
                    : {}
                }
                icon={heart}
                slot="start"
              />
              <IonTitle
                color={
                  localStorage.getItem("temeDark") === "true" ? "light" : ""
                }
              >
                Menu Eli
              </IonTitle>
            </IonItem>
          </IonToolbar>
        </IonHeader>
        <IonContent
          class="ion-padding"
          color={localStorage.getItem("temeDark") === "true" ? "dark" : ""}
        >
          <IonList
            style={
              localStorage.getItem("temeDark") === "true"
                ? { backgroundColor: "#222428" }
                : {}
            }
          >
            <IonMenuToggle onClick={() => clearLocalSesion()}>
              <IonItem
                color={
                  localStorage.getItem("temeDark") === "true" ? "dark" : ""
                }
                routerLink="/all-activities/ComoEstas"
                lines="none"
              >
                <IonIcon slot="start" icon={trash} />
                <IonLabel>Cerrar la sesión</IonLabel>
              </IonItem>
            </IonMenuToggle>

            {isClose ? null : (
              <IonItem
                color={
                  localStorage.getItem("temeDark") === "true" ? "dark" : ""
                }
                lines="none"
              >
                <IonIcon slot="start" icon={list} />
                <IonAccordionGroup ref={accordionGroup}>
                  <IonAccordion
                    style={
                      localStorage.getItem("temeDark") === "true"
                        ? { backgroundColor: "#222428" }
                        : {}
                    }
                    value="first"
                  >
                    <IonItem
                      color={
                        localStorage.getItem("temeDark") === "true"
                          ? "dark"
                          : ""
                      }
                      lines="none"
                      slot="header"
                    >
                      <IonLabel>Secciones</IonLabel>
                    </IonItem>
                    <div className="ion-padding" slot="content">
                      <IonMenuToggle>
                        <IonItem
                          color={
                            localStorage.getItem("temeDark") === "true"
                              ? "dark"
                              : ""
                          }
                          onClick={(e, s = "#section0") => toggleAccordion(s)}
                        >
                          Antes de conocernos
                        </IonItem>
                      </IonMenuToggle>
                      <IonMenuToggle>
                        <IonItem
                          color={
                            localStorage.getItem("temeDark") === "true"
                              ? "dark"
                              : ""
                          }
                          onClick={(e, s = "#section25") => toggleAccordion(s)}
                        >
                          Primer Encuentro
                        </IonItem>
                      </IonMenuToggle>
                      <IonMenuToggle>
                        <IonItem
                          color={
                            localStorage.getItem("temeDark") === "true"
                              ? "dark"
                              : ""
                          }
                          onClick={(e, s = "#section38") => toggleAccordion(s)}
                        >
                          Cita en museo
                        </IonItem>
                      </IonMenuToggle>
                      <IonMenuToggle>
                        <IonItem
                          color={
                            localStorage.getItem("temeDark") === "true"
                              ? "dark"
                              : ""
                          }
                          onClick={(e, s = "#section66") => toggleAccordion(s)}
                        >
                          Año nuevo juntos
                        </IonItem>
                      </IonMenuToggle>
                    </div>
                  </IonAccordion>
                </IonAccordionGroup>
              </IonItem>
            )}
            <IonMenuToggle onClick={() => setIsOpen(true)}>
              <IonItem
                color={
                  localStorage.getItem("temeDark") === "true" ? "dark" : ""
                }
                lines="none"
              >
                <IonIcon slot="start" icon={musicalNotes} />
                <IonLabel>Musica</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem
                color={
                  localStorage.getItem("temeDark") === "true" ? "dark" : ""
                }
                lines="none"
              >
                <IonIcon slot="start" icon={moon} />
                <IonLabel>Dark mode</IonLabel>
                <IonToggle
                  checked={
                    localStorage.getItem("temeDark") === "true" ? true : false
                  }
                  onIonChange={(t) => clickDarkTheme(t)}
                  color="medium"
                ></IonToggle>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle onClick={() => setIsOpenPoema(true)}>
              <IonItem
                color={
                  localStorage.getItem("temeDark") === "true" ? "dark" : ""
                }
                lines="none"
              >
                <IonIcon slot="start" icon={reader} />
                <IonLabel>Poema pa ti</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonTabs>
        <IonRouterOutlet id="main-content">
          <Route
            path="/AppRegalo/home"
            render={() => <Regalo setisClose={setisClose} />}
            exact={true}
          />
          <Route
            path="/AppRegalo/nosotros"
            render={() =>
              isClose ? null : (
                <ImagesContent
                  setisClose={setisClose}
                  setisOnPlayVideo={setisOnPlayVideo}
                />
              )
            }
            exact={true}
          />
          <Route
            path="/AppRegalo/casts"
            render={() => <RandomCats setisClose={setisClose} />}
            exact={true}
          />
          <Redirect exact from="/" to="/AppRegalo/home" />
        </IonRouterOutlet>

        <IonTabBar
          color={localStorage.getItem("temeDark") === "true" ? "dark" : ""}
          slot="bottom"
        >
          <IonTabButton tab="home" href="/AppRegalo/home">
            <IonIcon icon={gift} />
            <IonLabel>Regalito</IonLabel>
          </IonTabButton>

          <IonTabButton
            onClick={() => setisClose(false)}
            tab="nosotros"
            href="/AppRegalo/nosotros"
          >
            <IonIcon icon={people} />
            <IonLabel>Nosotros</IonLabel>
          </IonTabButton>

          <IonTabButton tab="casts" href="/AppRegalo/casts">
            <IonIcon icon={earth} />
            <IonLabel>Gatitos</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
      <ReactAudioPlayer
        //cambia de musica dependiendo de la iteracion
        src={musicData.url}
        autoPlay
        onPlay={() => setisPlayMusic(true)}
        onPause={() => setisPlayMusic(false)}
        muted={isOnPlayVideo ? true : false}
        onEnded={() => (aleatorioActive ? clickNextAleatorio() : clickNext())}
        ref={(element) => {
          setmusic(element);
        }}
      /> 
      <ModalPoemaLazy setIsOpenPoema={setIsOpenPoema} isOpenPoema={isOpenPoema} />
      <MusicaControllerLazy
        clickNextAleatorio={clickNextAleatorio}
        aleatorioActive={aleatorioActive}
        setaleatorioActive={setaleatorioActive}
        numMusic={numMusic}
        setnumMusic={setnumMusic}
        clickNext={clickNext}
        musicData={musicData.title}
        setmusicData={setmusicData}
        isPlayMusic={isPlayMusic}
        music={music}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
    </IonContent>
  );
};

export default AppRegalo;
