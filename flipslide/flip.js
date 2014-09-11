$('body').on('mousedown',slideStart);
$('body').on('mousemove',swiping);
$('body').on('mouseup',swipeEnd)
var startOffset=0,
    pixelOffset= 0,
    sliding= 0,
    currentSlide= 0,
    totalSlides= 0,
    mouseDownOffset= 0,
    currentOffset= 0,
    direction= 0,
    isMouseDown=false;
function slideStart(event){
   isMouseDown=true;
   if(sliding==0){
       startOffset=event.clientX;
   }
    currentOffset=mouseDownOffset=event.clientX;
}
function isThirtyPercentage(){
    var swipedPixels=Math.abs(currentOffset-mouseDownOffset);
    var totalSize=$('body').width()*direction;
    return swipedPixels/totalSize*100>30
}
function swiping(event){
    event.preventDefault();
    if(!isMouseDown){
        return;
    }
    currentOffset=event.clientX;
   if(mouseDownOffset!==currentOffset){
       if(mouseDownOffset>currentOffset){
           direction=-1;
       }else{
           direction=1;
       }
       pixelOffset+=100*direction
       $('.slides').css('transform','translate3d('+(pixelOffset)+'px,0,0)');
   }else{
       direction=0;
   }
}

function swipeEnd(){
    var screenWidth=$('body').width()*direction;
    pixelOffset+=screenWidth;
    $('.slides').css('transform','translate3d('+pixelOffset+'px,0,0)');
    resetFlags();

}
function resetFlags(){
    isMouseDown=false;
    mouseDownOffset=0;
    currentOffset=0;
    direction=0;
}