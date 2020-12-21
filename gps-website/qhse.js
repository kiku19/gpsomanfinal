var slider_image = document.getElementsByClassName("slider-image");
var slider_text = document.getElementsByClassName("slider-text")
loop = async()=>{
    for(var i=0 ; i<9; i++)
    {
        await new Promise(resolve=>setTimeout(resolve,5000))
        if(i!=0)
        {
            slider_image[i-1].classList.remove("active")
            slider_image[i-1].classList.add("remove")
            slider_text[i-1].classList.remove("activet")
            slider_text[i-1].classList.add("removet")
        }
        else
        {
            slider_image[8].classList.remove("active")
            slider_image[8].classList.add("remove")
            slider_text[8].classList.remove("activet")
            slider_text[8].classList.add("removet")
        }
        slider_image[i].classList.remove("remove")
        slider_image[i].classList.add("active")
        slider_text[i].classList.remove("removet")
        slider_text[i].classList.add("activet")
        if(i>2)
        {
            slider_image[i-2].classList.remove("remove")
            slider_text[i-2].classList.remove("removet")
        }
        else
        {
            slider_image[8].classList.remove("remove")
            slider_image[7].classList.remove("remove")
            slider_text[8].classList.remove("removet")
            slider_text[7].classList.remove("removet")
        }
        if(i==8)
        {
            i=-1;
        }
    }
}
loop();

// text