document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        const slider = document.querySelector('input[name=range]')
        
        slider.oninput = function () {
            document.getElementById("img_2").style.width = this.value +"%";
        }
    }
}