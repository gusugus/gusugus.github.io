<!DOCTYPE html>
<html lang="es">
    <head>
        <title>Consola web</title>
        <meta content="width=device-width; initial-scale=1.0; maximum-scale=1.0;   user-scalable=0;" name="viewport">        
        <link rel="stylesheet" href="css/indice.css">
        <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
        
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    </head>

    <body >
        <div class="cuerpo">
            <div class="contendor">
                <h1 class="centrar">PREGUNTAS PARA GUIA DE APRENDIZAJE</h1>
            </div>
            <div class="contenedor">
                <div class="centrar">
                    <img class="centrar-imagen" src="https://www.monocubed.com/wp-content/uploads/2021/06/AngularJS.jpg" alt="Imagen de inicio">
                </div>
            </div>  
            <div class="contenedor">
                <h1 class="centrar">CICLO DE GRAYTON</h1>
            </div>

            <div id="myModal" style="display: none;">
                <iframe id="modal-content" width="100%" height="100%"></iframe>
            </div>


            <div class="contenedor-flex centrar">
                <div class="item-flex">
                    <a class="btn btn-primary"  href="ajax.html" rel="modal:open" id="boton_tema1" value="Compresor" onclick="abrirTema(this);">Compresor</a> 
                </div>
                <div class="item-flex">
                    <a class="btn btn-primary disabled" href="#ex1" rel="modal:open" id="boton_tema2" value="Calentamiento" >Calentamiento</a> 
                </div>
                <div class="item-flex">
                    <a class="btn btn-primary disabled" href="#ex1" rel="modal:open" id="boton_tema3" value="Turbina">Turbina</a> 
                </div>
                <div class="item-flex">
                    <a href="#" id="open-modal">Abrir Modal</a>
                </div>
            </div>
        </div>

        <script>
            var tema_actual = "";
            var temas_pasados = 0;

                $(document).ready(function() {
        $("#open-modal").click(function() {
          var modalContent = $("#modal-content");
          modalContent.attr("src", "contenedor.html");
          $("#myModal").dialog({
            modal: true,
            width: "auto",
            height: "auto"
          });
          return false; // Evita que el enlace redirija a una nueva página
        });
      });
    </script>

    

           
    </body>
</html>
