import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
} from "@ionic/react";
import React from "react";
import { AllActivitiesProps } from "../../data/AllActivitiesProps";
import './allActivitiesCss.css'

const AllActivities: React.FC<AllActivitiesProps> = (props) => {
  return (
    <IonPage >
      <IonContent>
        <IonGrid>
          <IonRow class="ion-align-items-center ion-justify-content-center">
            <IonCol size="auto" >
              <h1>{props.tittle}</h1>
              <IonButton>next</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default AllActivities;
