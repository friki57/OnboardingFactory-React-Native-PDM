import 'react-native-gesture-handler';
import React from 'react';
import { View,  Text, Alert } from 'react-native';

  import imagenes from "./src/Config/Imagenes"
  //import Test from "onboardingnativepdm"
  import Onboarding from "onboardingerickaranibar/src"


  function Ejemplo({navigation}) {
    return (
      <View>
        <Text style={{textAlign: 'center', marginTop: 300}}>
          Este es un ejemplo de una pantalla final que se coloque despues del Onboarding.
          Tambien se puede añadir si se desea otra pila de navegacion.
        </Text>
      </View>
    )
  }

const App: () => React$Node = () => {
  return <Onboarding
    pantallas = {[
      {
        color : "#f00",
        Titulo : "Titulo Uno",
        Descripcion : "Descripcion Uno",
        imagen : imagenes.img1
      },
      {
        color : "#0f0",
        Titulo : "Titulo Dos",
        Descripcion : "Descripcion Dos",
        imagen : imagenes.img2
      },
      {
        color : "#00f",
        Titulo : "Titulo Tres",
        Descripcion : "Descripcion Tres",
        imagen : imagenes.img3
      }
    ]}
    Ultimo = {Ejemplo}
    />;
};

export default App;
