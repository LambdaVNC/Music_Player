
class Music {
    constructor(title, singer, img, file){
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName(){
        return this.title + " - " + this.singer; 
    }
}
const musicList = [
    new Music("Boşver","Nilüfer","1.jpg","1.mp3"),
    new Music("Bu da geçer mi sevgilim","Yalın","2.jpg","2.mp3"),
    new Music("Emro","Şakıro","3.jpg","3.mp3")
]