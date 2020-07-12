const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

$(document).ready(function () {
    console.log("ready!");

    const img1 = "img/1.jpg";
    const img2 = "img/2.jpg";

    $("#img_1").css('background', 'url(' + img1 + ')');
    $("#img_2").css('background', 'url(' + img2 + ')');

    $("#tv_img_1").css('background', 'url(' + img1 + ')');
    $("#tv_img_2").css('background', 'url(' + img2 + ')');

    $('input[type=range]').on('input', function () {
        if(this.value > 25 && this.value <= 75){
            $("#tv_img_2").css('width', scale(this.value, 25, 75, 0, 100) + '%');
        }
        $("#img_2").css('width', this.value + '%');
    });




    console.log(scale(25, 25, 75, 0, 100));
    console.log(scale(30, 25, 75, 0, 100));
    console.log(scale(40, 25, 75, 0, 100));
    console.log(scale(50, 25, 75, 0, 100));
    console.log(scale(60, 25, 75, 0, 100));
    console.log(scale(70, 25, 75, 0, 100));
    console.log(scale(75, 25, 75, 0, 100));

});