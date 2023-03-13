import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import AllActivities from "./pages/allActivities/AllActivities";
import { Redirect, Route } from "react-router-dom";
import { useState } from "react";
import InicioApp from "./pages/inicioApp/InicioApp";

setupIonicReact();

const App: React.FC = () => {
  //validaciones next
  const [validationRoutes, setvalidationRoutes] = useState<number>(0);

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route
            path="/all-activities/:id"
            render={() => {
              return <AllActivities tittle={"Hola Miamor como estas?"} />;
            }}
            exact
          />
          <Route
            path="/InicioApp"
            render={() => {
              return <InicioApp setvalidationRoutes={setvalidationRoutes} validationRoutes={validationRoutes} />;
            }}
            exact
          />

          <Redirect exact from="/" to="/all-activities/ComoEstas" />
          <Redirect exact from="/all-activities" to="/all-activities/ComoEstas" />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
