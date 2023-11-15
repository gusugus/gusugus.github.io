var preguntas2 = [
    {
        //Calor
        preguntas: [
            //p1            
            {
                pregunta: "¿Cuál es la función del intercambiador de calor (calentamiento)?",
                opciones: ["Aumentar tanto la presión como la temperatura", 
                           "Disminuir tanto la presión como la temperatura", 
                           "Permanecer constante la presión disminuyendo la temperatura", 
                           "Permanecer constante la presión aumentando la temperatura"],
                tipoRespuesta:"texto",
                tipoPregunta:"texto",
                respuestaCorrecta: 3,
                retroalimentacion_titulo: "Retroalimentación",
                retroalimentacion_contenido: 
                "<div><a  target='_blank' href='https://web.mit.edu/16.unified/www/FALL/thermodynamics/notes/node28.html'> Enlace(Inglés) </a> </div>"+
                "<div><a  target='_blank' href='https://www.cicloscombinados.com/index.php/articulos/articulos-avanzados/centrales-termicas-de-ciclo-combinado/el-ciclo-brayton '> Enlace(Español) </a> </div>"


            },

            //p2
            {
                pregunta: "El proceso termodinámico en la combustión se llama",
                opciones: ["Isentrópico", 
                           "Isobárico", 
                           "Isotérmico", 
                           "Isométrico"],
                tipoRespuesta:"texto",
                tipoPregunta:"texto",
                respuestaCorrecta: 1,
                retroalimentacion_titulo: "Retroalimentación",
                retroalimentacion_contenido: "<div>El aire caliente pasa por la turbina, a la cual mueve. En este paso el aire se expande y se enfría rápidamente, lo que se describe mediante una expansión adiabática.</div>"+
                                            "<div><a  target='_blank' href='https://mechanicalboost.com/brayton-cycle/'>Enlace(Inglés) </a> </div>"+
                                            "<div><a  target='_blank' href='http://tesla.us.es/wiki/index.php/Ciclo_Brayton'>Enlace(Español) </a> </div>"
            },

            //p3
            {
                pregunta: "¿Cuál de las opciones representa de mejor manera la relación presión – volumen en la combustión?",
                opciones: ["imagenes/t1p4o1.jpg", 
                           "imagenes/t1p4o2.jpg", 
                           "imagenes/t1p4o3.jpg", 
                           "imagenes/t1p4o4.jpg"],
                tipoRespuesta:"imagen",
                tipoPregunta:"texto",
                respuestaCorrecta: 1,
                retroalimentacion_titulo: "Retroalimentación",
                retroalimentacion_contenido: "<div>Revise el siguiente diagrama P vs.V del ciclo de Brayton:</div>"+
                                            "<div ><img class='imagen-retro' src='imagenes/retrot2p3.jpg'> </div>"+
                                            "<div><a  target='_blank' href='https://mechanicalboost.com/brayton-cycle/'>Enlace(Inglés) </a> </div>"+
                                            "<div><a  target='_blank' href='http://tesla.us.es/wiki/index.php/Ciclo_Brayton'>Enlace(Español) </a> </div>"
            },

            //p4
            {
                pregunta: "En la etapa de la combustión...",
                opciones: ["El aire realiza trabajo sobre la combustión", 
                           "La combustión realiza trabajo sobre el aire", 
                           "No se realiza trabajo en esta etapa",
                        "-"],
                tipoRespuesta:"texto",
                tipoPregunta:"texto",
                respuestaCorrecta: 2,
                retroalimentacion_titulo: "Retroalimentación",
                retroalimentacion_contenido: "<div>Revise el siguiente diagrama P vs.V del ciclo de Brayton:</div>"+
                                            "<div ><img class='imagen-retro' src='imagenes/retrot2p4.jpg'> </div>"+
                                            "<div><a  target='_blank' href='https://mechanicalboost.com/brayton-cycle/'>Enlace(Inglés) </a> </div>"+
                                            "<div><a  target='_blank' href='http://tesla.us.es/wiki/index.php/Ciclo_Brayton'>Enlace(Español) </a> </div>"
            },

            //p5
            {
                pregunta: "En la combustión: la temperatura de salida del aire con respecto a la temperatura de entrada será...",
                opciones: ["Mayor", 
                           "Igual", 
                           "Menor",
                        "-"],
                tipoRespuesta:"texto",
                tipoPregunta:"texto",
                respuestaCorrecta: 0,
                retroalimentacion_titulo: "Retroalimentación",
                retroalimentacion_contenido: "<div>En esta fase hay una transferencia de calor a presión constante al gas desde una fuente externa, ya que la cámara está abierta para fluir hacia adentro y hacia afuera. En un ciclo Brayton ideal abierto, el aire comprimido pasa a través de una cámara de combustión, donde se quema el combustible y se calienta el aire u otro medio</div>"+
                                            "<div ><img class='imagen-retro' src='imagenes/retrot2p4.jpg'> </div>"+
                                            "<div><a  target='_blank' href='https://mechanicalboost.com/brayton-cycle/'>Enlace(Inglés) </a> </div>"+
                                            "<div><a  target='_blank' href='https://www.thermal-engineering.org/es/que-es-el-ciclo-de-brayton-procesos-ecuaciones-definicion/'>Enlace(Español) </a> </div>"
            },

            //p6
            {
                pregunta: "En la combustión: la presión de salida del aire con respecto a la presión de entrada será...",
                opciones: ["Mayor", 
                            "Igual", 
                            "Menor",
                        "-"],
                tipoRespuesta:"texto",
                tipoPregunta:"texto",
                respuestaCorrecta: 1,
                retroalimentacion_titulo: "Retroalimentación",
                retroalimentacion_contenido: "<div>En esta fase la cámara está abierta para fluir hacia adentro y hacia afuera.</div>"+
                                            "<div ><img class='imagen-retro' src='imagenes/retrot2p6.jpg'> </div>"+
                                            "<div><a  target='_blank' href='https://mechanicalboost.com/brayton-cycle/'>Enlace(Inglés) </a> </div>"+
                                            "<div><a  target='_blank' href='https://www.thermal-engineering.org/es/que-es-el-ciclo-de-brayton-procesos-ecuaciones-definicion/'>Enlace(Español) </a> </div>"
            }


        ]
    }
];

