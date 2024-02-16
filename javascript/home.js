const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const nextImage = document.querySelector(".image-container");
const imageCount =  document.querySelectorAll(".image-slide");
const getstartEl = document.querySelector(".menu-btn");
let currentImg = 1; 
let timeout;


// preview button for image slider
 prev.addEventListener("click", ()=>{
      currentImg--;
      clearTimeout(timeout);
     updateImg();
 });
//  next button for image slider
 next.addEventListener("click", ()=>{
    currentImg++;
    clearInterval(timeout);
   updateImg();       
 });

 
// auto matically slide your image slider
 updateImg();
 function updateImg() {
        if(currentImg > imageCount.length){
            currentImg = 1;
        }
        else if (currentImg < 1) {
         currentImg = 6;
        }
        else {  
            const changetoTablet = window.matchMedia("(max-width:850px)");
            const changetoMobile = window.matchMedia("(max-width: 610px")
            
            changetoTablet.addListener(TabletMode);
            changetoMobile.addListener(MobileMode);

            // change the image slider to tablet size
         function TabletMode(screeenwidth) {
            if (screeenwidth.matches) {
                nextImage.style.transform = `translateX(-${(currentImg - 1) * 600}px)`;
            }
            else {
                nextImage.style.transform = `translateX(-${(currentImg - 1) * 800}px)`;
            }
           
         }
        //  change the image slider to mobile size
         function MobileMode(screeenwidth) {
            if (screeenwidth.matches) {
                nextImage.style.transform = `translateX(-${(currentImg - 1) * 400}px)`;
            }
          
         }
           TabletMode(changetoTablet);
           MobileMode(changetoMobile);
          


           
        }
    
    timeout = setTimeout(()=>{
        currentImg++;
        updateImg();
       }, 2000);
} 

getstartEl.addEventListener("click",()=>{
    location.href = "product.html"

});

