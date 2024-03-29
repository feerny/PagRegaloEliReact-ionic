import React from "react";
import emailjs from '@emailjs/browser';
import {
    IonButton,
    IonCol,
  IonGrid,
  IonRow,
} from "@ionic/react";

const  ComoQueMal: React.FC = () => {
  const sendEmail=()=>{

    localStorage.setItem("emailSend","true")
    var templateParams = {
      reply_to:"luisfpe219@gmail.com"

    };

    
    emailjs.send(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        templateParams,
        "J19FWhSEGpLBBEG2H"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  }
    const showButtons=()=>{
        document.getElementById("button1")?.removeAttribute("disabled");
        document.getElementById("button1")?.classList.remove("disabled");
        document.getElementById("button1")?.classList.add("button1");
  
        document.getElementById("button2")?.removeAttribute("disabled")
        document.getElementById("button2")?.classList.remove("disabled2")
        document.getElementById("button2")?.classList.add("button2")
  
      }
      window.setTimeout(showButtons,3000);
      const refresh=()=>{
        window.location.reload()
      }
    return (
      <IonCol className="ion-col" size="auto">
        <h1 id="h1Init2" className="h1Init3">Como que mal?</h1>
        <IonGrid>
          <IonRow class="ion-justify-content-center rowDown">
            <IonCol className="ion-col" size="11" >
            <IonButton onClick={()=>{localStorage.getItem("emailSend")==="true"?console.log("correo ya enviado")
            : sendEmail()}} routerLink="/all-activities/YaNoEstesMal"  disabled  id="button1" className="disabled">Shi </IonButton>
            </IonCol>
            <IonCol className="ion-col" size="9" offset="3">
            <IonButton routerLink="/InicioApp" onClick={()=>{window.setTimeout(refresh, 100)}} disabled  id="button2" className="disabled2">Mentiris </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCol>
    );
  };

export default  ComoQueMal;
