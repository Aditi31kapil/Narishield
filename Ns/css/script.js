const shareLocationBtn = document.getElementById('shareLocationBtn');
const locationResult = document.getElementById('locationResult');

shareLocationBtn.addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            locationResult.innerHTML = `Latitude: ${latitude}, Longitude: ${longitude}`;
        }, function(error) {
            console.error(error.message);
            locationResult.innerHTML = 'Unable to retrieve location.';
        });
    } else {
        locationResult.innerHTML = 'Geolocation is not supported by your browser.';
    }
});
