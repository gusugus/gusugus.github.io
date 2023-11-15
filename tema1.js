let rutaImagenes='imagenes/';
var preguntas1 = [
    {
        preguntas: [

            {
                pregunta: "¿Cuál es la función del compresor?",
                opciones: ["Aumentar tanto la presión como la temperatura", 
                           "Aumentar la presión y disminuir la temperatura", 
                           "Disminuir la temperatura y aumentar la presión",
                           "Disminuir tanto la presión como la temperatura"],
                tipoRespuesta:"texto",
                tipoPregunta:"texto",
                respuestaCorrecta: 0,
                retroalimentacion_titulo: "Retroalimentación",
                retroalimentacion_contenido: "<div class='retroalimentacion-contenido'>El aire es comprimido y dirigido hacia la cámara de combustión mediante un compresor (movido por la turbina). Puesto que esta fase es muy rápida, se modela mediante una compresión adiabática.</div>"+
                                            "<div><a  target='_blank' href='https://mechanicalboost.com/brayton-cycle/'>Enlace (inglés)</a></div>"+
                                            "<div><a target='_blank' href='http://tesla.us.es/wiki/index.php/Ciclo_Brayton'>Enlace (español) </a></div>"
            },

//p2
            {
                pregunta: "En la etapa del compresor …",
                opciones: ["El aire realiza trabajo sobre el compresor", 
                           "El compresor realiza trabajo sobre el aire", 
                           "No se realiza trabajo en esta etapa",
                        "-"],
                tipoRespuesta:"texto",
                tipoPregunta:"texto",
                respuestaCorrecta: 0,
                retroalimentacion_titulo: "Retroalimentación",
                retroalimentacion_contenido: "<div class='retroalimentacion-contenido'>Revise el siguiente diagrama P vs.V del ciclo de Brayton:</div>"+
                                            "<div ><img class='imagen-retro' src='imagenes/retrot1p2.jpg' </div>"+
                                            "<div><a  target='_blank' href='https://mechanicalboost.com/brayton-cycle/'>Enlace (inglés)</a></div>"+
                                            "<div><a target='_blank' href='http://tesla.us.es/wiki/index.php/Ciclo_Brayton'>Enlace (español) </a></div>"
            },


/*
            {
                pregunta: "El proceso termodinámico en el compresor se llama...",
                opciones: [rutaImagenes+"t1p4o1.jpg", 
                            rutaImagenes+"t1p4o2.jpg", 
                            rutaImagenes+"t1p4o3.jpg", 
                            rutaImagenes+"t1p4o4.jpg"],
                tipoRespuesta:"imagen",
                tipoPregunta:"texto",
                respuestaCorrecta: 0,
                retroalimentacion_titulo: "Mal hecho",
                retroalimentacion_contenido: "Visite el siguiente link para mas info <a  target='_blank' href='http://google.com'>Link Externo </a>"
                
            },


            {
                pregunta: "El proceso termodinámico en el compresor se llama...",
                opciones: ["Isentrópico", 
                           "Isobárico", 
                           "Isotérmico", 
                           "Isométrico"],
                tipoRespuesta:"texto",
                tipoPregunta:"texto",
                respuestaCorrecta: 0
            },
            
            {
                pregunta: "En la compresión: la temperatura de salida del aire con respecto a la temperatura de entrada será...",
                opciones: ["Mayor", 
                           "Menor", 
                           "Igual",
                        "Mm"],
                tipoRespuesta:"texto",
                tipoPregunta:"texto",
                respuestaCorrecta: 0
            },

            {
                pregunta: "En la compresión: la presión de salida del aire con respecto a la presión de entrada será...",
                opciones: ["Mayor", 
                           "Menor", 
                           "Igual"],
                tipoRespuesta:"texto",
                tipoPregunta:"texto",
                respuestaCorrecta: 0
            },

            {
                pregunta: "En sistemas más completos se presenta una etapa de sub-enfriamiento para que la temperatura del aire que entra al compresor por lo general se mantenga a la temperatura ambiente. ¿Por qué motivo la temperatura del aire que entra al compresor debe ser baja?",
                opciones: ["Para que consuma menos potencia", 
                           "Para aproximarlo a un proceso isentrópico", 
                           "Para que la presión de entrada aumente",
                           "Para que ingrese mayor flujo de aire"],
                tipoRespuesta:"texto",
                tipoPregunta:"texto",
                respuestaCorrecta: 0
            },
*/
            
        ]
    }
];

//preguntas1[0].preguntas = preguntas1[0].preguntas.sort(() => Math.random() - 0.5);