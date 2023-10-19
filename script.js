var rect=document.querySelector("#rect");

rect.addEventListener("mousemove",function(details){
    let rectanglelocation=rect.getBoundingClientRect();

    let relativemouselocation=details.clientX-rectanglelocation.left;


    let redcolorutil=255-gsap.utils.mapRange(0,rectanglelocation.width,0,255,relativemouselocation);
    console.log(redcolorutil);

    let bluecolorutil=255-gsap.utils.mapRange(rectanglelocation.width,0,0,255,relativemouselocation);
    console.log(bluecolorutil);


    if(relativemouselocation<rectanglelocation.width/2)
    {
            rect.style.backgroundColor=`rgb(${redcolorutil},0,0)`;
    }
    else{
        rect.style.backgroundColor=`rgb(0,0,${bluecolorutil})`;
    }

    // if(details.clientX>rectanglelocation.left&&details.clientX<rectanglelocation.right-200)
    // {
    //     rect.style.backgroundColor="red";
    // }
})


