
xpos=200
ypos=200
dx=5;
dy=3;
rightWristy = 0;
function setup(){
    canvas=createCanvas(500,400)
    canvas.position(500,150)
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotResults);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
}
function gotResults(results){
    rightWristy = results[0].pose.rightWrist.y;
    
}
function draw(){
    background('black');
    fill('cyan')
    rect(10,ypos,10,80);
    rect(480,rightWristy,10,80)
    ellipse(xpos,ypos,20,20)
    if(xpos>=width-20 || xpos==20){
        dx=-dx
    }
    if(ypos>=height-20 || ypos==20){
        dy=-dy
    }
    xpos=xpos+dx;
    ypos=ypos+dy
}