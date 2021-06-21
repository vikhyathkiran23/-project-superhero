var Canvas = new fabric.Canvas("myCanvas");
var Block_Image_Width = 30;
var Block_Image_Height = 30;
var Player_X = 10;
var Player_Y = 10
var Player_Object = "";

function Player_Update() {
    fabric.Image.fromURL("player.png", function (img) {
        Player_Object = img;
        Player_Object.scaleToWidth(150);
        Player_Object.scaleToHeight(140);
        Player_Object.set({
            top: Player_Y,
            left: Player_X
        });
        Canvas.add(Player_Object);

    });
}


function New_Image(getImage) {
    fabric.Image.fromURL(getImage, function (img) {
        Block_Image_Object = img;
        Block_Image_Object.scaleToWidth(Block_Image_Width);
        Block_Image_Object.scaleToHeight(Block_Image_Height);
        Block_Image_Object.set({
            top: Player_Y,
            left: Player_X

        });
        Canvas.add(Block_Image_Object);
    })
}

window.addEventListener("keypress", myKeyDown);

function myKeyDown(e) {
    keypressed = e.keyCode;
    if (window.shiftKey && keypressed == 80) {
        Block_Image_Height = Block_Image_Height + 10;
        Block_Image_Width=Block_Image_Width+10;
        New_Image();

    }
    if (window.shiftKey && keypressed == 77) {
        Block_Image_Height = Block_Image_Height - 10;
        Block_Image_Width=Block_Image_Width-10;
        New_Image();

    }
    if (keypressed == 38) {
        console.log("up");
        up();
    }
    if (keypressed == 39) {
        console.log("right");
        right();
    }
    
    if (keypressed == 37) {
        console.log("left");
        left();

    }
    if (keypressed == 40) {
        console.log("down");
        down();
    }
    if (keypressed==70) {
        New_Image("ironman_face.png");
        console.log("f");
    }
    if (keypressed==66) {
        New_Image("spiderman_body.png");
        console.log("b");        
    }

    if (keypressed==76) {
        New_Image("hulk_legs.png");  
        console.log("l");      
    }
    if (keypressed==82) {
        New_Image("thor_right_hand.png")   ;
        console.log("r");
    }
    if (keypressed==72){
        New_Image("captain_america_left_hand.png")
    }
}
