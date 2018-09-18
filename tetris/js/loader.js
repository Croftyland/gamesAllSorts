var loaderNew = {
    imageLinks:["blocks","bg","over"],
    sounds:[], 
    images:[],
    loaded:true,
    loadedCount:0, 
    totalCount:0,
    start:function(){
        for (var n = 0; n < loaderNew.imageLinks.length; ++n) {
            var img = loaderNew.loadImage("images/"+loaderNew.imageLinks[n]+".png");
			this.images.push(img);
        }
    },
    loadImage:function(url){       
        loaderNew.totalCount++;
        loaderNew.loaded = false;
        var image = new Image();
        image.src = url;
        image.onload = loaderNew.itemLoaded;
        return image;
    },
    itemLoaded:function(){
        loaderNew.loadedCount++;     
        if (loaderNew.loadedCount === loaderNew.totalCount){
            loaderNew.loaded = true;
            loaderNew.loadComplite();
            if(loaderNew.onload){
                loaderNew.onload();
                loaderNew.onload = undefined;
            }
        }
    },
    loadComplite:function(){
               onImagesLoaded();   
    },
    loadSounds:function(){
        for (var n = 0; n < loaderNew.sounds.length; n++) {
            var sound = new Audio();
            var name = 'sounds/' + loaderNew.sounds[n] + game.soundFileExtn;
            sound.src = name;
            game.sounds.push(sound);
        }    
    }
}