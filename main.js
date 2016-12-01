function run() {
    function makeAjaxRequest() {
        var newLocation = $('#address').val();
        console.log(newLocation)
        return $.ajax({
            url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + newLocation + '&key=AIzaSyB3fGsVL2tsGpCPLsiYd-uSdGD85gdhY2g',
            dataType: 'json',
        });
    }
    var promise = makeAjaxRequest()
    promise.then(function(response) {
        var lat = response.results[0].geometry.location.lat
        $("#lats").html("")
        $("#lats").append(lat)
        var lng = response.results[0].geometry.location.lng
        $("#longs").html("")
        $("#longs").append(lng)
    })
}
