Webcam.set({
    width:350,
    height:300,
    img_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function takeSnapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_img" src="'+data_uri+'"/>';
    });
}
console.log('ML5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/p6E-tRU3E/model.json', modelloaded);

function modelloaded() {
    console.log('Model Loaded');
}