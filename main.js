
var array = ["https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg" , "https://img-19.commentcamarche.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg" , "https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"]
var i = 0
document.getElementById("image").src = array[i]


setInterval(()=>{
   next()
} , 5000)

function next(){
   i++

    if(i === array.length){
        i=0
    }
   document.getElementById("image").src = array[i]
}
function prev(){
    i--
    if(i === -1){
        i= array.length - 1
    }
    document.getElementById("image").src = array[i]
}

function move(){
    if(i === 0){
        document.getElementById("one").scrollIntoView();
    } else if (i === 1) {
        document.getElementById("two").scrollIntoView();
    } else {
        document.getElementById("three").scrollIntoView();
    }
}


