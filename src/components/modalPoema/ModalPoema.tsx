import React from "react";
import {
    IonButton,
    IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonModal,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { ModalPoemaProps } from "../../data/dataPoema/ModalPoemaProps";
import { man, woman } from "ionicons/icons";

const ModalPoema: React.FC<ModalPoemaProps> = (props) => {
  return (
    <IonModal isOpen={props.isOpenPoema}>
      <IonHeader>
        <IonToolbar color={localStorage.getItem("temeDark")==="true"?"dark":""}>
          <IonTitle>Feliz aniversario miamor</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => props.setIsOpenPoema(false)}>Salir</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent color={localStorage.getItem("temeDark")==="true"?"dark":""} className="ion-padding">
        <div className="iconsModalPoema">
        <IonIcon size="large" icon={man} /><IonTitle>Un año de amor a distancia</IonTitle><IonIcon size="large" icon={woman} />
        </div>
 
        <p>
            <IonText>
            <br />
            Un año ha pasado, mi querida Eliana, <br />
            desde aquel día que juntos decidimos comenzar,<br />
            y hoy, al recordarlo, mi amor por ti no cambia,<br />
            crece y se fortalece, como un árbol que sigue creciendo sin parar.<br /><br />

            La distancia que nos separa, no es impedimento,<br />
            para que te ame y piense en ti cada día,<br />
            tú eres mi sueño, mi anhelo, mi aliento,<br />
            mi compañera, mi confidente, mi alegría.<br /><br />

            Quiero que sepas que cada momento contigo,<br />
            es como una chispa que enciende mi vida,<br />
            y aunque a veces extrañe tu abrazo y tu calor,<br />
            sé que el amor que nos une siempre nos guía.<br /><br />

            Quiero pasar muchos más años a tu lado,<br />
            llenándonos de aventuras y de amor,<br />
            creando recuerdos inolvidables,<br />
            y celebrando cada día nuestra unión.<br /><br />

            Eliana, mi amor, eres mi luz en la distancia,<br />
            mi razón para seguir adelante,<br />
            siempre te llevaré en mi corazón,<br />
            y te amaré por siempre, cada instante.<br /><br />

            Así que hoy, en nuestro primer aniversario,<br />
            quiero decirte que eres mi todo,<br />
            que eres la mejor decisión que he tomado,<br />
            y que a tu lado siempre me siento a salvo.<br /><br />

            Gracias por tu amor, gracias por tu presencia,<br />
            gracias por cada momento compartido,<br />
            espero que sigamos juntos en esta hermosa experiencia,<br />
            de ser uno en el amor, en el alma y en el corazón.<br /><br />

            Que el tiempo nos siga fortaleciendo,<br />
            que nuestro amor siga creciendo,<br />
            que siempre nos recordemos con cariño,<br />
            y que nuestros corazones sigan latiendo al mismo ritmo.<br /><br />

            Feliz primer aniversario, mi amada Eliana,<br />
            gracias por estar a mi lado cada día,<br />
            te amo con todo mi ser, con toda mi alma,<br />
            y por siempre, mi amor, te amaré de por vida.<br /><br /><br />
            --<i>Tu novio hermoso</i> 
            </IonText>
        </p>
      </IonContent>
    </IonModal>
  );
};

export default ModalPoema;
