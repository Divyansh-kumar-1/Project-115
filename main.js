noseX = 0;
noseY = 0;
function preload(){

}
function setup() {
        canvas = createCanvas(500, 500);
        canvas.center();
        Video = createCapture(VIDEO);
        Video.size(300,300);
        Video.hide();
        
        poseNet = ml5.poseNet(Video, modelLoaded);
        poseNet.on('pose', gotPoses);
}
function draw(){
        
}
function gotPoses(results)
{
 if(results.length > 0){
  console.log(results);      
  noseX = results[0].pose.nose.x;
  noseY = results[0].pose.nose.y;
 }
}
function modelLoaded(){
        console.log("Model Loaded")
}