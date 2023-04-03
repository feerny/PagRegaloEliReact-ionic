import React from "react";
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
  IonToolbar,
} from "@ionic/react";
import { gift, people, earth, trash, list } from "ionicons/icons";
import { Redirect, Route } from "react-router";
import Regalo from "../../components/vistasAppRegalo/Regalo";
import ImagesContent from "../../components/vistasAppRegalo/ImagesContent";
import RandomCats from "../../components/vistasAppRegalo/RandomCats";
import { AppRegaloProps } from "../../data/appRegaloProps/AppRegaloProps";
import "./appRegaloCss.css";


const AppRegalo: React.FC<AppRegaloProps> = (props) => {
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
            <IonTitle>Menu Content</IonTitle>
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
              <IonAccordionGroup>
                <IonAccordion value="first">
                  <IonItem lines="none" slot="header" color="light">
                    <IonLabel>Secciones</IonLabel>
                  </IonItem>
                  <div className="ion-padding" slot="content">
                    <IonMenuToggle >
                      <IonItem href="/AppRegalo/nosotros#section0">Antes de conocernos</IonItem>
                    </IonMenuToggle>
                  </div>
                </IonAccordion>
                </IonAccordionGroup>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonTabs>
        <IonRouterOutlet id="main-content">
          <Route
            path="/AppRegalo/home"
            render={() => <Regalo />}
            exact={true}
          />
          <Route
            path="/AppRegalo/nosotros"
            render={() => <ImagesContent />}
            exact={true}
          />
          <Route
            path="/AppRegalo/casts"
            render={() => <RandomCats />}
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
    </IonContent>
  );
};

export default AppRegalo;
