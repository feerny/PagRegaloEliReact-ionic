import {
  IonContent,
  IonGrid,
  IonPage,
  IonRouterOutlet,
  IonRow,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import React, { useState } from "react";
import { Route, Redirect } from "react-router";

import ComoEstas from "../../components/preguntasa/ComoEstas";
import { AllActivitiesProps } from "../../data/AllActivitiesProps";
import InicioApp from "../inicioApp/InicioApp";
import "./allActivitiesCss.css";

const AllActivities: React.FC<AllActivitiesProps> = (props) => {
  const [maloText, setmaloText] = useState<any>(null);
  const clickMalo = () => {
    setmaloText("mal");
  };

  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow class="ion-align-items-center ion-justify-content-center">
            <IonReactRouter>
              <IonRouterOutlet>

                <Route path="/all-activities" exact={true}>
                <ComoEstas clickMalo={clickMalo} tittle={maloText} />
                </Route>

                <Redirect exact from="/" to="/all-activities" />
              </IonRouterOutlet>
            </IonReactRouter>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default AllActivities;
