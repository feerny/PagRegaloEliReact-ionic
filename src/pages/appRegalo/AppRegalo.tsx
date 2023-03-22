import React from "react";
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { gift, people, earth, trash } from "ionicons/icons";
import { Redirect, Route } from "react-router";
import Regalo from "../../components/vistasAppRegalo/Regalo";
import ImagesContent from "../../components/vistasAppRegalo/ImagesContent";
import RandomCats from "../../components/vistasAppRegalo/RandomCats";

const AppRegalo: React.FC = () => {
    const clearLocalSesion=()=>{
        localStorage.clear();
        const refreshAppRegalo=()=>{
            window.location.reload()
        };
        window.setTimeout(refreshAppRegalo,100);
    }
  return (
    <IonPage>
        <IonMenu contentId="main-content">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu Content</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent class="ion-padding">
            <IonList>
              <IonMenuToggle>
                <IonItem onClick={()=>clearLocalSesion()} routerLink="/all-activities/ComoEstas">
                    <IonIcon slot="start" icon={trash} />
                    <IonLabel>Cerrar la sesión</IonLabel>
                </IonItem>
              </IonMenuToggle>
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
    </IonPage>
  );
};

export default AppRegalo;
