import {
  IonContent,
  IonGrid,
  IonPage,
  IonRouterOutlet,
  IonRow,
} from "@ionic/react";
import React, { useState } from "react";
import { Route, Redirect } from "react-router";

import ComoEstas from "../../components/preguntasa/ComoEstas";
import ComoQueMal from "../../components/preguntasa/ComoQueMal";
import YaNoEstesMal from "../../components/preguntasa/YaNoEstesMal";
import { AllActivitiesProps } from "../../data/AllActivitiesProps";
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
            <IonRouterOutlet>
              <Route path="/all-activities/ComoEstas" exact={true}>
                <ComoEstas clickMalo={clickMalo} tittle={maloText} />
              </Route>

              <Route path="/all-activities/ComoQueMal" exact={true}>
                <ComoQueMal  />
              </Route>
              <Route path="/all-activities/YaNoEstesMal" exact={true}>
                <YaNoEstesMal  />
              </Route>

              <Redirect exact from="/" to="/all-activities" />
            </IonRouterOutlet>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default AllActivities;
