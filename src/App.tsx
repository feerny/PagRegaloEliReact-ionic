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
import PagFallo from "./pages/pagFallo/PagFallo";
import AppRegalo from "./pages/appRegalo/AppRegalo";

setupIonicReact();

const App: React.FC = () => {
  //validaciones next
  const [validMuteFallo, setvalidMuteFallo] = useState(1)
  const [NumIteracion, setNumIteracion] = useState<number>(0);
  const [validationRoutes, setvalidationRoutes] = useState<number>(localStorage.getItem("number")?parseInt(localStorage.getItem("number") || ""):0);
  const [validationTrue, setvalidationTrue] = useState<string>(localStorage.getItem("ValiSesion")?localStorage.getItem("ValiSesion") || "":"0")
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route
            path="/all-activities/:id"
            render={() => {
              return validationTrue===process.env.REACT_APP_NUMVALID?  <Redirect  to="/AppRegalo" />:<AllActivities tittle={"Hola Miamor como estas?"} />;
            }}
            exact
          />
          <Route
            path="/InicioApp"
            render={() => {
              return validationTrue===process.env.REACT_APP_NUMVALID?  <Redirect  to="/AppRegalo" />:<InicioApp setvalidationTrue={setvalidationTrue}  setNumIteracion={setNumIteracion} NumIteracion={NumIteracion} setvalidationRoutes={setvalidationRoutes} validationRoutes={validationRoutes} />;
            }}
            exact
          />
          <Route
            path="/FalloApp"
            render={() => {

                return validationRoutes===2?  <PagFallo validMuteFallo={validMuteFallo} setvalidMuteFallo={setvalidMuteFallo} setvalidationRoutes={setvalidationRoutes} setNumIteracion={setNumIteracion}/>:<Redirect  to="/InicioApp" />;
          
            }}
            exact
          />
          <Route
            path="/AppRegalo/:id"
            render={() => {

                return validationTrue===process.env.REACT_APP_NUMVALID?  <AppRegalo />:<Redirect  to="/InicioApp" />;
          
            }}
            exact
          />
          

          <Redirect exact from="/" to="/all-activities/ComoEstas" />
          <Redirect exact from="/all-activities" to="/all-activities/ComoEstas" />
          <Redirect exact from="/AppRegalo" to="/AppRegalo/home" />
        </IonRouterOutlet>
      </IonReactRouter>

    </IonApp>
  );
};

export default App;
