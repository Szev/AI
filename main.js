song1="";
song2= "";
song1_status= "";
song2_status= "";

scoreRightWrist= 0;
scoreLeftWrist= 0;

rightWristX= 0;
rightWristY= 0;
leftWristX=0;
leftWristY=0;

function preload()
{
    song1= loadSound("music.mp3");
    song2= loadSound("music2.mp3");
}
function play()
{
    song.play();
    song.setVolumn(1);
    song.rate(1);

}

function setup()
{
    canvas= createCanvas(600, 500);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video, 0, 0, 600, 500);
}    