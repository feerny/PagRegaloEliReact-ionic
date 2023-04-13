import React, { useRef, useState } from "react";
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
  IonSpinner,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { gift, people, earth, trash, list, heart, musicalNotes } from "ionicons/icons";
import { Redirect, Route } from "react-router";
import Regalo from "../../components/vistasAppRegalo/Regalo";
import { AppRegaloProps } from "../../data/appRegaloProps/AppRegaloProps";
import "./appRegaloCss.css";
import ReactAudioPlayer from "react-audio-player";
import { lazy, Suspense } from 'react';

const ImagesContent = lazy(() => import('../../components/vistasAppRegalo/ImagesContent'));
const RandomCats = lazy(() => import('../../components/vistasAppRegalo/RandomCats'));

const AppRegalo: React.FC<AppRegaloProps> = (props) => {
  //controla si el video se reproduce o no
  const [isOnPlayVideo, setisOnPlayVideo] = useState<boolean>(false)
  //agarra los elementos del acordeon
  const accordionGroup = useRef<null | HTMLIonAccordionGroupElement>(null);
  //funcion para cerrar acordeon al dar clik en uno de sus hijos
  const toggleAccordion = (e:any,s:any) => {
    let href = s;
    // hace scroll hasta el id dado
    const scroll=()=>{
      document.querySelector(href).scrollIntoView({
        behavior: "smooth"
    })
    }
    setTimeout(scroll,100)

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

  return (
    <IonContent>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonItem>
            <IonIcon color="red" icon={heart} slot="start"/>
            <IonTitle color="red">Menu Eli</IonTitle>
           </IonItem>
          </IonToolbar>
        </IonHeader>
        <IonContent class="ion-padding">
          <IonList>
            <IonMenuToggle onClick={() => clearLocalSesion()}>
              <IonItem routerLink="/all-activities/ComoEstas" lines="none">
                <IonIcon slot="start" icon={trash} />
                <IonLabel>Cerrar la sesión</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonItem lines="none">
              <IonIcon slot="start" icon={list} />
              <IonAccordionGroup ref={accordionGroup}>
                <IonAccordion value="first">
                  <IonItem lines="none" slot="header" color="light">
                    <IonLabel>Secciones</IonLabel>
                  </IonItem>
                  <div className="ion-padding" slot="content">
                    <IonMenuToggle>
                      <IonItem onClick={(e,s="#section0")=>toggleAccordion(e,s)} routerLink="/AppRegalo/nosotros">
                        Antes de conocernos
                      </IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle>
                      <IonItem onClick={(e,s="#section25")=>toggleAccordion(e,s)} routerLink="/AppRegalo/nosotros">
                        Primer Encuentro
                      </IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle>
                      <IonItem onClick={(e,s="#section38")=>toggleAccordion(e,s)} routerLink="/AppRegalo/nosotros">
                        Cita en museo
                      </IonItem>
                    </IonMenuToggle>
                    <IonMenuToggle>
                      <IonItem onClick={(e,s="#section66")=>toggleAccordion(e,s)} routerLink="/AppRegalo/nosotros">
                        Año nuevo juntos
                      </IonItem>
                    </IonMenuToggle>
                  </div>
                </IonAccordion>
              </IonAccordionGroup>
            </IonItem>
            <IonMenuToggle onClick={() => clearLocalSesion()}>
              <IonItem routerLink="/all-activities/ComoEstas" lines="none">
                <IonIcon slot="start" icon={musicalNotes} />
                <IonLabel>Musica</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonTabs>
        <IonRouterOutlet id="main-content">
          <Route
            path="/AppRegalo/home"
            component={Regalo}
            exact={true}
          />
          <Route
            path="/AppRegalo/nosotros"
            render={() =><Suspense fallback={<div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}><IonSpinner  name="bubbles"/></div>}><ImagesContent setisOnPlayVideo={setisOnPlayVideo}/></Suspense>}
            exact={true}
          />
          <Route
            path="/AppRegalo/casts"
            render={() =><Suspense fallback={<div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}><IonSpinner  name="bubbles"/></div>}> <RandomCats /></Suspense>}
            exact={true}
          />
          <Redirect exact from="/" to="/AppRegalo/home" />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/AppRegalo/home">
            <IonIcon icon={gift} />
            <IonLabel>Regalito</IonLabel>
          </IonTabButton>

          <IonTabButton tab="nosotros" href="/AppRegalo/nosotros">
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
          src={"https://cdn.pixabay.com/audio/2021/12/16/audio_232a4bdedf.mp3"}
          autoPlay
          muted={isOnPlayVideo?true:true}
          loop
        />
    </IonContent>
  );
};

export default AppRegalo;
