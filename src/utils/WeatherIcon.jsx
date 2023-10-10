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
        iconUrl = "";
        break;
    case "Ligeras lluvias":
        iconUrl = "";
        break;
    case "Periodos de lluvia moderada":
        iconUrl = "";
        break;
    case "Lluvia moderada":
        iconUrl = "";
        break;
    case "Periodos de fuertes lluvias":
        iconUrl = "";
        break;
    case "Fuertes lluvias":
        iconUrl = "";
        break;
    case "Ligeras precipitaciones":
        iconUrl = "";
        break;
    case "Lluvias fuertes o moderadas":
        iconUrl = "";
        break;
    case "Lluvias torrenciales":
        iconUrl = "";
        break;

    // nieve
    case "Nieve moderada a intervalos en las aproximaciones":
        iconUrl = "";
        break;
    case "Aguanieve moderada a intervalos en las aproximaciones":
        iconUrl = "";
        break;
    case "Chubascos de nieve":
        iconUrl = "url de la imagen para nublado";
        break;
    case "Ligeras lluvias heladas":
        iconUrl = "";
        break;
    case "Lluvias heladas fuertes o moderadas":
        iconUrl = "";
        break;
    case "Ligeras precipitaciones de aguanieve":
        iconUrl = "";
        break;
    case "Aguanieve fuerte o moderada":
        iconUrl = "";
        break;
    case "Nevadas ligeras a intervalos":
        iconUrl = "";
        break;
    case "Nevadas ligeras":
        iconUrl = "";
        break;
    case "Nieve moderada a intervalos":
        iconUrl = "";
        break;
    case "Nieve moderada":
        iconUrl = "";
        break;
    case "Nevadas intensas":
        iconUrl = "";
        break;
    case "Fuertes nevadas":
        iconUrl = "";
        break;
    case "Granizo":
        iconUrl = "";
        break;
    case "Ligeros chubascos de aguanieve":
        iconUrl = "";
        break;
    case "Chubascos de aguanieve fuertes o moderados":
        iconUrl = "";
        break;
    case "Ligeras precipitaciones de nieve":
        iconUrl = "";
        break;
    case "Chubascos de nieve fuertes o moderados":
        iconUrl = "";
        break;
    case "Ligeros chubascos acompañados de granizo":
        iconUrl = "";
        break;
    case "Chubascos fuertes o moderados acompañados de granizo":
        iconUrl = "";
        break;
        
        

    // parcialmente nublado
    case "Parcialmente nublado":
        iconUrl = "url de la imagen para lluvia";
        break;

    // nublado
    case "Nublado":
        iconUrl = "url de la imagen para nublado";
        break;
    case "Cielo cubierto":
        iconUrl = "url de la imagen para nublado";
        break;
    case "Neblina":
        iconUrl = "url de la imagen para nublado";
        break;
    case "Llovizna helada a intervalos en las aproximaciones":
        iconUrl = "";
        break;
    case "Llovizna a intervalos":
        iconUrl = "url de la imagen para nublado";
        break;
    case "Llovizna":
        iconUrl = "url de la imagen para nublado";
        break;
    case "Llovizna helada":
        iconUrl = "url de la imagen para nublado";
        break;
    case "Fuerte llovizna helada":
        iconUrl = "url de la imagen para nublado";
        break;
    case "Lluvias ligeras a intervalos":
        iconUrl = "url de la imagen para nublado";
        break;

    // tormenta
    case "Cielos tormentosos en las aproximaciones":
        iconUrl = "";
        break;
    case "Intervalos de lluvias ligeras con tomenta en la región":
        iconUrl = "";
        break;
    case "Lluvias con tormenta fuertes o moderadas en la región":
        iconUrl = "";
        break;
    case "Nieve moderada con tormenta en la región":
        iconUrl = "";
        break;
    case "Nieve moderada o fuertes nevadas con tormenta en la región":
        iconUrl = "";
        break;

    // viento
    case "Ventisca":
        iconUrl = "url de la imagen para lluvia";
        break;
    
    // niebla
    case "Niebla moderada":
        iconUrl = "";
        break;
    case "Niebla helada":
        iconUrl = "";
        break;
    
    default:
      iconUrl = "url de la imagen por defecto";
      break;
  }

  if (size === 'short') {
    return <img src={iconUrl} alt={weatherCondition} />;
  } else{
    return <img src={iconUrl} alt={weatherCondition}  width={200}/>;
  }

};

export default WeatherIcon;
