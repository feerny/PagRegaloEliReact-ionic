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
  const [nameVali, setnameVali] = useState<String>("");
  const [NumIteracion, setNumIteracion] = useState<Number>(0);
  const [message, setmessage] = useState("Hola Miamor como estas?");

  if (NumIteracion) {
  }

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route
            path="/all-activities/:id"
            render={() => {
              return <AllActivities tittle={message} />;
            }}
            exact
          />
          <Route
            path="/InicioApp"
            render={() => {
              return <InicioApp />;
            }}
            exact
          />

          <Redirect exact from="/" to="/all-activities" />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
