var active_image = document.getElementsByClassName("slider-image")
var active_text = document.getElementsByClassName("slider-text")
loop=async()=>{
    for(var i =0 ;i<7 ;i++)
    {
        await new Promise(resolve=>setTimeout(resolve,5000))
        if(i==0)
        {
            active_image[6].classList.remove("active");
            active_text[6].classList.remove("activet")
        }
        else
        {
            active_image[i-1].classList.remove("active")
            active_text[i-1].classList.remove("activet")
        }
      
        active_image[i].classList.add("active")
        active_text[i].classList.add("activet")
        if(i==6)
        {
            i=-1;
        }
    }
}
loop();