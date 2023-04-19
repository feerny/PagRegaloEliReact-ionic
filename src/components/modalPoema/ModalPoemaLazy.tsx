import React from "react";
import { lazy, Suspense } from 'react';
import { IonSpinner } from "@ionic/react";
import { ModalPoemaProps } from "../../data/dataPoema/ModalPoemaProps";

const LazyComponent = lazy(() => import('../../components/modalPoema/ModalPoema'));

const  ModalPoemaLazy: React.FC<ModalPoemaProps> = (props) => {

    const spinner=(
        <div  style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}>
            <IonSpinner  name="bubbles" />
          </div>
    )
  return (
    <>
      <Suspense fallback={spinner}>
        <LazyComponent setIsOpenPoema={props.setIsOpenPoema} isOpenPoema={props.isOpenPoema} />
      </Suspense>
    </>
  );
};

export default  ModalPoemaLazy;