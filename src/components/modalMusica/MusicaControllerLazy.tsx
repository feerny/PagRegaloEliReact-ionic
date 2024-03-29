import React from "react";
import { lazy, Suspense } from 'react';
import { MusicaControllerProps } from "../../data/musicaControllerProps/MusicaControllerProps";
import { IonSpinner } from "@ionic/react";

const LazyComponent = lazy(() => import('../../components/modalMusica/MusicaController'));

const  MusicaControllerLazy: React.FC<MusicaControllerProps> = (props) => {

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
        <LazyComponent clickNextAleatorio={props.clickNextAleatorio} aleatorioActive={props.aleatorioActive} setaleatorioActive={props.setaleatorioActive} numMusic={props.numMusic} setnumMusic={props.setnumMusic} clickNext={props.clickNext} musicData={props.musicData} setmusicData={props.setmusicData} isPlayMusic={props.isPlayMusic} music={props.music} setIsOpen={props.setIsOpen} isOpen={props.isOpen}/>
      </Suspense>
    </>
  );
};

export default  MusicaControllerLazy;
