var Canvas = new fabric.Canvas("myCanvas");
var Block_Image_Width = 30;
var Block_Image_Height = 30;
var Player_X = 10;
var Player_Y = 10
var Player_Object = "";

function Player_Update() {
    fabric.Image.fromURL("player.png", function (img) {
        Player_Object = img;
        Player_Object.ScaleToWidth(150);
        Player_Object.ScaleToHeight(140);
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
        Block_Image_Object.ScaleToWidth(Block_Image_Width);
        Block_Image_Object.ScaleToHeight(Block_Image_Height);
        Block_Image_Object.set({
            top: Player_Y,
            left: Player_X

        });
        Canvas.add(Block_Image_Object);
    })
}
