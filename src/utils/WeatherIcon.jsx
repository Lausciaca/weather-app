import React from "react";

const WeatherIcon = ({ weatherCondition, size }) => {
  let iconUrl = "";

  // Lógica para asignar la imagen según el valor recibido
  switch (weatherCondition) {
    // soleado
    case "Soleado":
        iconUrl = "/svg/soleado.svg";
        break;

    // lluvia
    case "Lluvia  moderada a intervalos":
        iconUrl = "svg/lluvia.svg";
        break;
    case "Ligeras lluvias":
        iconUrl = "svg/lluvia.svg";
        break;
    case "Periodos de lluvia moderada":
        iconUrl = "svg/lluvia.svg";
        break;
    case "Lluvia moderada":
        iconUrl = "svg/lluvia.svg";
        break;
    case "Periodos de fuertes lluvias":
        iconUrl = "svg/lluvia-dos.svg";
        break;
    case "Fuertes lluvias":
        iconUrl = "svg/lluvia-dos.svg";
        break;
    case "Ligeras precipitaciones":
        iconUrl = "svg/lluvia.svg";
        break;
    case "Lluvias fuertes o moderadas":
        iconUrl = "svg/lluvia-dos.svg";
        break;
    case "Lluvias torrenciales":
        iconUrl = "svg/lluvia-dos.svg";
        break;
    case "Llovizna helada a intervalos en las aproximaciones":
        iconUrl = "svg/lluvia.svg";
        break;
    case "Llovizna a intervalos":
        iconUrl = "svg/lluvia.svg";
        break;
    case "Llovizna":
        iconUrl = "svg/lluvia.svg";
        break;
    case "Llovizna helada":
        iconUrl = "svg/lluvia.svg";
        break;
    case "Fuerte llovizna helada":
        iconUrl = "svg/lluvia.svg";
        break;
    case "Lluvias ligeras a intervalos":
        iconUrl = "svg/lluvia.svg";
        break;

    // nieve
    case "Nieve moderada a intervalos en las aproximaciones":
        iconUrl = "svg/nieve.svg";
        break;
    case "Aguanieve moderada a intervalos en las aproximaciones":
        iconUrl = "svg/nieve.svg";
        break;
    case "Chubascos de nieve":
        iconUrl = "svg/nieve.svg";
        break;
    case "Ligeras lluvias heladas":
        iconUrl = "svg/nieve.svg";
        break;
    case "Lluvias heladas fuertes o moderadas":
        iconUrl = "svg/nieve.svg";
        break;
    case "Ligeras precipitaciones de aguanieve":
        iconUrl = "svg/nieve.svg";
        break;
    case "Aguanieve fuerte o moderada":
        iconUrl = "svg/nieve.svg";
        break;
    case "Nevadas ligeras a intervalos":
        iconUrl = "svg/nieve.svg";
        break;
    case "Nevadas ligeras":
        iconUrl = "svg/nieve.svg";
        break;
    case "Nieve moderada a intervalos":
        iconUrl = "svg/nieve.svg";
        break;
    case "Nieve moderada":
        iconUrl = "svg/nieve.svg";
        break;
    case "Nevadas intensas":
        iconUrl = "svg/nieve.svg";
        break;
    case "Fuertes nevadas":
        iconUrl = "svg/nieve.svg";
        break;
    case "Granizo":
        iconUrl = "svg/nieve.svg";
        break;
    case "Ligeros chubascos de aguanieve":
        iconUrl = "svg/nieve.svg";
        break;
    case "Chubascos de aguanieve fuertes o moderados":
        iconUrl = "svg/nieve.svg";
        break;
    case "Ligeras precipitaciones de nieve":
        iconUrl = "svg/nieve.svg";
        break;
    case "Chubascos de nieve fuertes o moderados":
        iconUrl = "svg/nieve.svg";
        break;
    case "Ligeros chubascos acompañados de granizo":
        iconUrl = "svg/nieve.svg";
        break;
    case "Chubascos fuertes o moderados acompañados de granizo":
        iconUrl = "svg/nieve.svg";
        break;
        
        

    // parcialmente nublado
    case "Parcialmente nublado":
        iconUrl = "svg/nublado-tres.svg";
        break;

    // nublado
    case "Nublado":
        iconUrl = "svg/nublado.svg";
        break;
    case "Cielo cubierto":
        iconUrl = "svg/nublado-dos.svg";
        break;
    case "Neblina":
        iconUrl = "svg/nublado-dos.svg";
        break;
    

    // tormenta
    case "Cielos tormentosos en las aproximaciones":
        iconUrl = "svg/tormenta.svg";
        break;
    case "Intervalos de lluvias ligeras con tomenta en la región":
        iconUrl = "svg/tormenta.svg";
        break;
    case "Lluvias con tormenta fuertes o moderadas en la región":
        iconUrl = "svg/tormenta.svg";
        break;
    case "Nieve moderada con tormenta en la región":
        iconUrl = "svg/tormenta.svg";
        break;
    case "Nieve moderada o fuertes nevadas con tormenta en la región":
        iconUrl = "svg/tormenta.svg";
        break;

    // viento
    case "Ventisca":
        iconUrl = "svg/viento.svg";
        break;
    
    // niebla
    case "Niebla moderada":
        iconUrl = "svg/nublado-tres.svg";
        break;
    case "Niebla helada":
        iconUrl = "svg/nublado-tres.svg";
        break;
    
    default:
      iconUrl = "";
      break;
  }

  if (size === 'short') {
    return <img src={iconUrl} alt={weatherCondition} width={140}/>;
  } else{
    return <img src={iconUrl} alt={weatherCondition}  width={250}/>;
  }

};

export default WeatherIcon;
