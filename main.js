Webcam.attach( '#camera' );
camera = document.getElementById("camera");

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90,    

})
function take_snapshot()
{
Webcam.snap(function(data_url){
document.getElementById("result").innerHTML='<img id="captured_imge"src="'+data_url+'"/>';
});
}
 classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-iHMtg6gT/model.json',modelLoaded);

 function modelLoaded(){
     console.log('Model Loaded!');
 }

function check()
 {
       img = document.getElementById('capture_image');
       classifier.classify(img, gotResult);
 }
function gotResult(error, result){
if (error) {
console.error(error);
}else{
    console.log (result);
    document.getElementById("result_object_name").innerHTML=results[0].label;
    document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
}
}