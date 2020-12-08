<! DOCTYPE html> 
<html> 
    <head> 
        <title> Geolocalização </title> 
        <meta name = "viewport" content = "initial-scale = 1.0, user-scalable = no" > 
        <meta charset = "utf-8 " > 
        <style> / * Sempre defina a altura do mapa explicitamente para definir o tamanho do 
                   elemento div * que contém o mapa. * / # mapa { altura : 100% ; } /
                    * Opcional: Faz com que a página de amostra preencha a janela. * /  
                         html , ; margem : 0 ; preenchimento : 0 ; }
        </style>
        </head>
        <body>
            <div id = "map" > </div> 
            <script> // Nota: Este exemplo requer que você consinta com o compartilhamento de localização quando // solicitado por seu navegador. Se vir o erro "O serviço de geolocalização // falhou.", Significa que provavelmente não deu permissão para o navegador // localizá-lo. var map , infoWindow ; função initMap () 
                {  map = new google .
         
         
      
    
  
  
     
    
      
      
      
      
      
       
 mapas . Map ( document . GetElementById ( 'map' ), {           center : { lat : - 34.397 , lng : 150.644 },           zoom : 6 });         infoWindow = novo google . mapas . InfoWindow ; // Experimente a geolocalização em HTML5. if ( navegador . geolocalização ) {           navegador . geolocalização . 
   
 
        
 

        
          
getCurrentPosition ( function ( position ) { var pos = {               lat : position . coords . latitude ,               lng : position . coords . longitude };             infoWindow . setPosition ( pos );             infoWindow . setContent ( 'Location found.' );             infoWindow . open ( mapa ); 
             


            




            mapa . setCenter ( pos ); }, function () {             handleLocationError ( true , infoWindow , map . getCenter ()); }); } else { // O navegador não oferece suporte a geolocalização           handleLocationError ( false , infoWindow , map . getCenter ()); } } function handleLocationError ( browserHasGeolocation , infoWindow
            

          
          
          

        
      

      , pos ) {         infoWindow . setPosition ( pos );         infoWindow . setContent ( browserHasGeolocation ? 'Erro: O serviço de Geolocalização falhou.' : 'Erro: Seu navegador não suporta geolocalização.' );         infoWindow . abrir ( mapa ); } </script> <script defer src = "https://maps.googleapis.com/maps/api/js?key= 


                               
                              

      
    
     
    YOUR_API_KEY& callback = initMap " > </script> </body> </html>
    
  