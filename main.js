song = "";
song_1 = "";
function preload()
{
    song = loadSound("Music 1.mp3");
    song_1 = loadSound("Music 2.mp3");
}

function setup()
{
    canvas = createCanvas(450,400);
    canvas.position(490,200);

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video,0,0,450,400);
}