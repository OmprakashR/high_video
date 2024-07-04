// Get references to the video element and canvas
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const screenshot = document.getElementById('screenshot');
const captureButton = document.getElementById('capture');
const context = canvas.getContext('2d');

// Ask for user permission to access the webcam
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(error => {
        console.error('Error accessing the webcam', error);
    });

// Capture the current frame from the video when the button is clicked
captureButton.addEventListener('click', () => {
    // Draw the current video frame onto the canvas
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Use html2canvas to capture the canvas as an image
    html2canvas(canvas).then(capturedCanvas => {
        screenshot.src = capturedCanvas.toDataURL('image/png');
    });
});
