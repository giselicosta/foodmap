$(document).ready(function() {
    
      $('#inicial-page').delay('5000').fadeIn('slow');
      $('#splash').delay('5000').fadeOut('fast');
});
      $('.input').click(function() {
        var inputValue = $('.search-input').val();
        for (rest in restaurantes) {
          if (inputValue === restaurantes[rest].name) {
            refreshMapNameSearch(restaurantes[rest]);
            showPhotoNameSearch(restaurantes[rest]);
          }
        }
      });
    
      $('.vegan-food').click(function() {
        var filteredRestaurants = restaurantes.filter(rest => rest.type === 'vegana');
        refreshMapFilterSearch(filteredRestaurants);
        showPhotoFilterSearch(filteredRestaurants);
      })
      $('.japanese-food').click(function() {
        var filteredRestaurants = restaurantes.filter(rest => rest.type === 'japonesa');
        refreshMapFilterSearch(filteredRestaurants);
        showPhotoFilterSearch(filteredRestaurants);
      })
      $('.arabic-food').click(function() {
        var filteredRestaurants = restaurantes.filter(rest => rest.type === 'arabe');
        refreshMapFilterSearch(filteredRestaurants);
        showPhotoFilterSearch(filteredRestaurants);
      })
      $('.italian-food').click(function() {
        var filteredRestaurants = restaurantes.filter(rest => rest.type === 'italiana');
        refreshMapFilterSearch(filteredRestaurants);
        showPhotoFilterSearch(filteredRestaurants);
      })
        $('.fast-food').click(function() {
        var filteredRestaurants = restaurantes.filter(rest => rest.type === 'fast food');
        refreshMapFilterSearch(filteredRestaurants);
        showPhotoFilterSearch(filteredRestaurants);
      })
    });

function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(6.481831, -80.825333),
        zoom: 2,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
   var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
   infoWindow = new google.maps.InfoWindow;
    var position = restaurantes.map(function(rest) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(rest,latitude, rest.longitude),
            title:"comida",
            map: map
        });
    });
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
        infoWindow.setPosition(pos);
        infoWindow.setContent('Você está aqui!');
        infoWindow.open(map);
        map.setCenter(pos);
    }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
    });
    } else { 
        handleLocationError(false, infoWindow, map.getCenter());
    
    }
  
function handleLocationError(browerHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow,setContent(browerHasGeolocation ?
        'Error: The Geolocation service failed.':
        'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);

function refreshMapFilterSearch(restarants) {
    map = new google,maps.Map(document.getElementById('map'),{
        zoom:14
    });
infoWind = new google.maps.InfoWindow;
var marker = new google.maps.LatLng(restarant.latitude, restaurant.longitude),
title:"Comida!",
map: map
});
}
function showPhotoFilterSearch(restaurant) {
    $('.results').empty();
    $('.show-results').html(`SEU PEDIDO ESTA PRONTO:`);
    $('.results').html(`<div class='restaurants-infos'><img class='small-image' data-toggle='modal' data-target='#exampleModal' src='${restaurant.image}'><div class='restaurants-names'>${restaurant.name}</div></div>`);
    $('.modal-title').html(restaurant.name);
    $('.modal-description').html(restaurant.description);
    $('.modal-image').html(`<img class='large-image' src='${restaurant.image}'>`);
  }
  
}
//Exibir resultados da busca e modal

function refreshMapFilterSearch(restaurant) {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -23.5681, lng: -46.6492}, 
      zoom: 14
    });
    infoWindow = new google.maps.InfoWindow;
    var position = restaurant.map(function(rest) {
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(rest.latitude, rest.longitude),
        title: "Comida!",
        map: map
      }); 
    });
  }
  
  // Exibir resultados dos filtros e modal
  function showPhotoFilterSearch(restaurant) {
    $('.results').empty();
    restaurant.forEach(function(rest, index) {
      $('.show-results').html(`AQUI ESTÁ O QUE VOCÊ PEDIU:`);
      $('.results').append(`<div class='restaurants-infos'><img id="${index}" class='small-image' src='${rest.image}'><div class='restaurants-names'>${rest.name}</div></div>`);
      $('#' + index).on('click', function() {
      $('#exampleModal').modal();
      $('.modal-title').html(rest.name);
      $('.modal-description').html(rest.description);
      $('.modal-image').html(`<img class='large-image' src='${rest.image}'>`);
      });
    });
  }
    


// //  function image() {
// //      for (restaurante of restaurantes){
// //  var image= restaurante['image'];
// //  var img = $ ("<img></img>").attr ('src',restaurante.image);

// //  $('.imagens').append ("img");
// //      }};

 }       