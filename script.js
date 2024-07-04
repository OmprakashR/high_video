navigator.mediaDevices.getUserMedia({
    video: {
        width: { ideal: 720 },
        height: { ideal: 1280 },
        facingMode: "user", // use "environment" for the back camera
        aspectRatio: { ideal: 9 / 16 }
    }
}).then(stream => {
    const video = document.getElementById('video');
    video.srcObject = stream;
    video.play();

    const captureButton = document.getElementById('capture');
    const snapshot = document.getElementById('snapshot');

    captureButton.addEventListener('click', () => {
        html2canvas(video).then(canvas => {
            // Get the image data from the canvas
            const imageData = canvas.toDataURL('image/png');

            // Display the captured image
            snapshot.src = imageData;
        }).catch(error => {
            console.error('Error capturing video frame.', error);
        });
    });
}).catch(error => {
    console.error('Error accessing media devices.', error);
});
