let map;

function initMap() {
  map = new google.maps.Map(document.querySelector(".map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
// Smooth Scrolling
$('#navbar a').on('click', function(event){
  if(this.hash !==''){
    event.preventDefault();
    const hash = this.hash;
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top-50
      },
      800
    );
  }
});