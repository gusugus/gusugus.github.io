var preguntas3 = [
    {
        //Turbina
        preguntas: [
            //p1            
            {
                pregunta: "¿Cuál es la función de la turbina?",
                opciones: ["Aumentar tanto la presión como la temperatura", 
                           "Disminuir tanto la presión como la temperatura", 
                           "Aumentar la presión y disminuir la temperatura", 
                           "Disminuir la temperatura y aumentar la presión"],
                tipoRespuesta:"texto",
                tipoPregunta:"texto",
                respuestaCorrecta: 1,
                retroalimentacion_titulo: "Retroalimentación",
                retroalimentacion_contenido: "<div>El aire caliente pasa por la turbina, a la cual mueve. En este paso el aire se expande y se enfría rápidamente, lo que se describe mediante una expansión adiabática.</div>"+
                                            "<div class='retroalimentacion-contenido'>Revise el siguiente enlace</div>"+
                                            "<div><a  target='_blank' href='https://mechanicalboost.com/brayton-cycle/'>Enlace(Inglés) </a> </div>"+
                                            "<div><a  target='_blank' href='http://tesla.us.es/wiki/index.php/Ciclo_Brayton'>Enlace(Español) </a> </div>"
            },

            //p2
            {
                pregunta: "El proceso termodinámico en la turbina se llama",
                opciones: ["Isentrópico", 
                           "Isobárico", 
                           "Isotérmico", 
                           "Isométrico"],
                tipoRespuesta:"texto",
                tipoPregunta:"texto",
                respuestaCorrecta: 0,
                retroalimentacion_titulo: "Retroalimentación",
                retroalimentacion_contenido: "<div>El gas funciona en los alrededores (álabes de la turbina) y pierde una cantidad de energía interna igual al trabajo que abandona el sistema</div>"+
                                            "<div class='retroalimentacion-contenido'>Revise el siguiente enlace</div>"+
                                            "<div><a  target='_blank' href='https://mechanicalboost.com/brayton-cycle/'>Enlace(Inglés) </a> </div>"+
                                            "<div><a  target='_blank' href='https://www.thermal-engineering.org/es/que-es-el-ciclo-de-brayton-procesos-ecuaciones-definicion/'>Enlace(Español) </a> </div>"
            },

            /*
            //p3
            {
                pregunta: "¿Cuál de las opciones representa de mejor manera la relación presión - volumen en la turbina?",
                opciones: ["imagenes/t1p4o1.jpg", 
                           "imagenes/t1p4o2.jpg", 
                           "imagenes/t1p4o3.jpg", 
                           "imagenes/t1p4o4.jpg"],
                tipoRespuesta:"imagen",
                tipoPregunta:"texto",
                respuestaCorrecta: 0,
                retroalimentacion_titulo: "Retroalimentación",
                retroalimentacion_contenido: "<div>Revise el siguiente diagrama P vs.V del ciclo de Brayton:</div>"+
                                            "<div class='retroalimentacion-contenido'>Revise el siguiente enlace</div>"+
                                            "<div><a  target='_blank' href='https://mechanicalboost.com/brayton-cycle/'>Enlace(Inglés) </a> </div>"+
                                            "<div><a  target='_blank' href='http://tesla.us.es/wiki/index.php/Ciclo_Brayton'>Enlace(Español) </a> </div>"
            },

            //p4
            {
                pregunta: "En la etapa de la turbina...",
                opciones: ["El aire realiza trabajo sobre la turbina", 
                           "La turbina realiza trabajo sobre el aire", 
                           "No se realiza trabajo en esta etapa",
                    ],
                tipoRespuesta:"texto",
                tipoPregunta:"texto",
                respuestaCorrecta: 1,
                retroalimentacion_titulo: "Retroalimentación",
                retroalimentacion_contenido: "<div>El aire caliente pasa por la turbina, a la cual mueve. En este paso el aire se expande y se enfría rápidamente, lo que se describe mediante una expansión adiabática.</div>"+
                                            "<div class='retroalimentacion-contenido'>Revise el siguiente enlace</div>"+
                                            "<div><a  target='_blank' href='https://mechanicalboost.com/brayton-cycle/'>Enlace(Inglés) </a> </div>"+
                                            "<div><a  target='_blank' href='http://tesla.us.es/wiki/index.php/Ciclo_Brayton'>Enlace(Español) </a> </div>"
            },

            //p5
            {
                pregunta: "En la turbina: la temperatura de salida del aire con respecto a la temperatura de entrada será",
                opciones: ["Mayor", 
                           "Menor", 
                           "Igual",
                        ],
                tipoRespuesta:"texto",
                tipoPregunta:"texto",
                respuestaCorrecta: 1,
                retroalimentacion_titulo: "Retroalimentación",
                retroalimentacion_contenido: "<div>El aire caliente pasa por la turbina, a la cual mueve. En este paso el aire se expande y se enfría rápidamente, lo que se describe mediante una expansión adiabática.</div>"+
                                            "<div class='retroalimentacion-contenido'>Revise el siguiente enlace</div>"+
                                            "<div><a  target='_blank' href='https://mechanicalboost.com/brayton-cycle/'>Enlace(Inglés) </a> </div>"+
                                            "<div><a  target='_blank' href='http://tesla.us.es/wiki/index.php/Ciclo_Brayton'>Enlace(Español) </a> </div>"
            },

            //p6
            {
                pregunta: "En la turbina: la presión de salida del aire con respecto a la presión de entrada será",
                opciones: ["Mayor", 
                           "Igual", 
                           "Menor",
                ],
                tipoRespuesta:"texto",
                tipoPregunta:"texto",
                respuestaCorrecta: 2,
                retroalimentacion_titulo: "Retroalimentación",
                retroalimentacion_contenido: 
                                            "<div class='retroalimentacion-contenido'>Revise el siguiente enlace</div>"+
                                            "<div><a  target='_blank' href='https://mechanicalboost.com/brayton-cycle/'>Enlace(Inglés) </a> </div>"+
                                            "<div><a  target='_blank' href='http://tesla.us.es/wiki/index.php/Ciclo_Brayton'>Enlace(Español) </a> </div>"
            },

            //p7
            {
                pregunta: "Tanto la salida de la turbina como la entrada del compresor están abiertos a la atmósfera. ¿Cuál de las opciones es correcta con respecto a las temperaturas?",
                opciones: ['<math><msub> <mi>T</mi><mn>1</mn> </msub></math> > <math><msub> <mi>T</mi><mn>4</mn> </msub></math>', 
                '<math><msub> <mi>T</mi><mn>1</mn> </msub></math> = <math><msub> <mi>T</mi><mn>4</mn> </msub></math>', 
                '<math><msub> <mi>T</mi><mn>1</mn> </msub></math> < <math><msub> <mi>T</mi><mn>4</mn> </msub></math>',
                'Depende de las condiciones a la que opere la turbina de gas'],
                tipoRespuesta:"texto",
                tipoPregunta:"texto",
                respuestaCorrecta: 2,
                retroalimentacion_titulo: "Retroalimentación",
                retroalimentacion_contenido:
                                            "<div><a  target='_blank' href='https://mechanicalboost.com/brayton-cycle/'>Enlace(Inglés) </a> </div>"+
                                            "<div><a  target='_blank' href='http://tesla.us.es/wiki/index.php/Ciclo_Brayton'>Enlace(Español) </a> </div>"
            }

*/

        ]
    }
]