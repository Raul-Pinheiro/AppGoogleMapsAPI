
//var button = document.querySelector('#research');


function getInfo(destination){
    var geoCode= new google.maps.Geocoder();
    geoCode.geocode({
        'address': destination
                
     }, function (results,status){
      if(status=='OK'){
        return results[0].geometry.location;
       
     }else{
       console.log('Erro: '+ status );
     }
    });    
}



//button.addEventListener('click', function(event){
    //event.preventDefault();
    //var destinations= 'Rua Anadir Dias de Carvalho, São Vicente, SP';
    //getInfo(destinations);
//});

    //Geocoding adress type string to plot a map--------------------
    var geoCode= new google.maps.Geocoder();
    geoCode.geocode({
        'address': destination
                
     }, function (results,status){
      if(status=='OK'){           
        console.log(results[0].geometry.location);       
                   
     }else{
       console.log('Erro: '+ status );
     }
    }); 