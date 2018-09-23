// document.body.style.backgroundColor = "#ffccff";
document.body.style = "transition: 3s ;font-size: 150%;";

var allImages = document.getElementsByTagName('img');

for (var i = 0; i < allImages.length; i++) {
    console.log(allImages[i]);

    allImages[i].addEventListener('mouseover',function(){
        console.log(this);
        var x = Math.floor((Math.random() * 10) + 1);
        if (x < 3) {
            this.setAttribute('src', 'http://2.bp.blogspot.com/-tRCx8IKkd5U/UGTg9H8dx5I/AAAAAAAAGAE/Ve2XCLnu-js/s1600/Rabbit_Wallpaper_6.jpg');
        } else if(x < 5) {
            this.setAttribute('src','http://2.bp.blogspot.com/-06MAi43eDlY/TqEM7wa4L_I/AAAAAAAACao/5ZjOg-vtLBs/s1600/cute_rabbit-photo-03.jpg');
        } else if(x < 7) {
            this.setAttribute('src','http://2.bp.blogspot.com/_qU2ZnLYEg1Y/TUuptKsGHoI/AAAAAAAAACo/r1JAa14PiVY/s1600/rabbit-233-16.jpg');
        } else if (x < 9) {
            this.setAttribute('src','http://cdn.kickvick.com/wp-content/uploads/2015/09/cutest-bunny-rabbits-18.jpg');
        } else {
            this.setAttribute('src','https://anima.dk/sites/default/files/cde8ab3971fc6ca50f9dd221c4ecb078-d55al8i.jpg');
        }
    })
}


var elementsToDisappear = document.getElementsByTagName('p');
for (var j = 0; j < elementsToDisappear.length; j++){
    elementsToDisappear[j].addEventListener('click',function(){
        this.style.opacity = "0.0";
    });
}

