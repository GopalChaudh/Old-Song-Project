

let songdetails = document.getElementById('songdetails');
let songcontroles = document.getElementById('songcontroles');
let fullzoom = document.getElementById('fullzoom');
let nightmode = document.getElementById('nightmode');
let mastercontrols =
{
    play: document.getElementById('play'),
    left: document.getElementById('left'),
    right: document.getElementById('right'),
    cover: document.getElementById('shortimg'),
    progressBar: document.getElementById('input')
}
let current_volume
let songData = [

    { path: new Audio('../songs/beautiful_mistaks.mp3'), name: 'beautiful mistaks', duration: '348', coverpath: '../png/p1.jpg', },
    { path: new Audio('../songs/Heat Waves.mp3'), name: 'heat_Waves', duration: '3:55', coverpath: '../png/p2.jpg' },
    { path: new Audio('../songs/hey_mama.mp3'), name: 'hey_mama', duration: '3:17', coverpath: '../png/p3.jpg' },
    { path: new Audio('../songs/let_me_down.mp3'), name: 'Down Slowly', duration: '3:26', coverpath: '../png/p4.jpg' },
    { path: new Audio('../songs/love_gone.mp3'), name: 'love_is Gone', duration: '3:10', coverpath: '../png/p5.jpg' },
    { path: new Audio('../songs/Memories.mp3'), name: 'memories', duration: '2:21', coverpath: '../png/p6.jpg' },
    { path: new Audio('../songs/no_lie.mp3'), name: 'no_lie', duration: '3:40', coverpath: '../png/p7.jpg' },
    { path: new Audio('../songs/pain.mp3'), name: '_pain__', duration: '3:08', coverpath: '../png/p8.jpg' },
    { path: new Audio('../songs/Sad_Girlz.mp3'), name: 'SadGirlz', duration: '3:25', coverpath: '../png/p9.jpg' },
    { path: new Audio('../songs/Skechers.mp3'), name: 'Skechers', duration: '3:09', coverpath: '../png/p10.jpg' },
    { path: new Audio('../songs/weakend.mp3'), name: 'weakend', duration: '4:18', coverpath: '../png/p11.jpg' },
    { path: new Audio('../songs/Cradles.mp3'), name: 'Cradles', duration: '3:29', coverpath: '../png/p12.jpg' },
    { path: new Audio('../songs/fuck_love.mp3'), name: 'fuckLove', duration: '2:27', coverpath: '../png/p13.jpg' },
    { path: new Audio('../songs/Bad Boy.mp3'), name: 'BadBoy', duration: '3:18', coverpath: '../png/p14.jpg' },
    { path: new Audio('../songs/BROWN MUNDE.mp3'), name: 'BROWN_MUNDE', duration: '4:27', coverpath: '../png/p10.jpg' },
    { path: new Audio('../songs/Changes.mp3'), name: 'Changes', duration: '2:16', coverpath: '../png/p15.jpg' },
    { path: new Audio('../songs/Sugar & Brownies.mp3'), name: 'Sugar& Brownies', duration: '3:31', coverpath: '../png/p16.jpg' },
    { path: new Audio('../songs/Levels.mp3'), name: 'Levels', duration: '3:51', coverpath: '../png/p7.jpg' },
    { path: new Audio('../songs/Losing Interest.mp3'), name: 'Losing Interest', duration: '0:32', coverpath: '../png/p6.jpg' },
    { path: new Audio('../songs/Lost Sky - Where We Started.mp3'), name: 'WhereWe Started', duration: '3:42', coverpath: '../png/p17.png' },
    { path: new Audio('../songs/No Love Shubh_320(PagalWorld).mp3'), name: 'No_Love', duration: '2:51', coverpath: '../png/p5.jpg' },
];
let left = document.getElementById('left');
let right = document.getElementById('right');
let play = document.getElementById('play');
let nav = document.querySelector('nav');
let body = document.querySelector('body');
let sdclick = false;
let night = true;
let songcsscontainer = [];
let all, coverimg, play1, songname;
let previous_song = 0;


function masterplay(){
    if (mastercontrols.play.src === 'file:///C:/Users/HP/Desktop/web%20dev/my%20programs/song/png/play.png' || mastercontrols.play.src === 'http://127.0.0.1:5500/my%20programs/song/png/play.png' || mastercontrols.play.src === 'http://127.0.0.1:5500/png/play.png') {
        mastercontrols.play.src = '../png/pause.png';
        playbtn[previous_song].src = '../png/pause.png';
        mastercontrols.cover.classList.remove('rotate');
        class_cover[previous_song].classList.remove('currentPlaying');

        songData[previous_song].path.pause();

    }
    else {
        class_cover[previous_song].classList.add('currentPlaying');

        playbtn[previous_song].src = '../png/play.png';

        songData[previous_song].path.play();
        mastercontrols.cover.src = songData[previous_song].coverpath;
        mastercontrols.cover.classList.add('rotate');

        mastercontrols.play.src = '../png/play.png';
        document.getElementById('sd_songname').innerHTML = songData[previous_song].name
        document.querySelector('.coverimage').src = songData[previous_song].coverpath;
        progressBar_all();
    }
}


function createcontainer() {


    for (let i = 0; i < songData.length; i++) {

        //all css
        all = document.createElement('div');
        all.classList.add('songcontainer');
        // cover
        coverimg = document.createElement('img');
        coverimg.classList.add('ci')
        coverimg.src = songData[i].coverpath;
        //play
        play1 = document.createElement('img');
        play1.classList.add('play')
        play1.src = '../png/pause.png'
        //song name
        songname = document.createElement('span');
        songname.innerText = songData[i].name;
        songname.classList.add('sn');


        all.append(coverimg, songname, play1);
        document.querySelector('.songholder').append(all);
        songcsscontainer.push(all);
    }

}
///////////
createcontainer();

mastercontrols.progressBar.addEventListener('timeupdate', () => {
    if (mastercontrols.progressBar.value >= 99) {
        songData[i].path.currentTime = 0;
        mastercontrols.progressBar.value = 0;
        songData[i].path.pause();



    }
    else {

        mastercontrols.progressBar.value = parseInt((songData[i].path.currentTime / songData[i].path.duration) * 100);
    }

});

// all classiss are here
let song_back = Array.from(document.getElementsByClassName('songcontainer'));
let class_cover = Array.from(document.getElementsByClassName('ci'));
let playbtn = Array.from(document.getElementsByClassName('play'));
let songtext = Array.from(document.getElementsByClassName('sn'));




songdetails.classList.remove('up');
songdetails.classList.add('Down');


//song details 
function songdetail() {

    if (sdclick === false) {

        songdetails.classList.remove('Down');
        songdetails.classList.add('up');
        setTimeout(() => {

            songdetails.style.top = '0%';
        }, 400);
        sdclick = true;

    }
    else {


        songdetails.classList.remove('up')


        songdetails.style.top = '100%';
        sdclick = false;

    }

}

// on click play button event

//dark and day mode
function day_light() {
    if (night === true) {
        songcontroles.style.backgroundColor = 'white';
        songcontroles.style.boxShadow = 'inset 0px 0px 10px black';
        nightmode.style.backgroundColor = 'yellow';
        nav.style.backgroundColor = 'white';
        nav.style.boxShadow = 'inset 0px 0px 10px black';
        body.style.backgroundColor = 'white';
        nightmode.style.boxShadow = '0px 0px 15px black';
        songdetails.style.backgroundColor = 'white';
        songdetails.style.boxShadow = 'inset 0px 0px 10px black';


        //    for(let i=0; i <11;i++){

        song_back.forEach((element) => {
            element.style.backgroundColor = 'white';
            element.style.boxShadow = '10px 10px 30px black'

        });
        //    }
        class_cover.forEach((element) => {
            element.style.border = '1px solid black';
        })

        songtext.forEach((i) => {
            i.style.color = "black"
        });

        night = false;
    }
    //for night
    else {
        songcontroles.style.backgroundColor = 'black';
        songcontroles.style.boxShadow = 'inset 0px 0px 10px white';
        nightmode.style.backgroundColor = 'white';
        nav.style.backgroundColor = 'black';
        nav.style.boxShadow = 'inset 0px 0px 10px white';
        nightmode.style.boxShadow = '0px 0px 15px white';
        body.style.backgroundColor = 'black';
        songdetails.style.backgroundColor = 'black';
        songdetails.style.boxShadow = 'inset 0px 0px 10px white';

        song_back.forEach((element) => {
            element.style.backgroundColor = 'black';

            element.style.boxShadow = '10px 10px 30px white'


        });


        class_cover.forEach((element) => {
            element.style.border = '1px solid white'
        });


        songtext.forEach((element) => {
            element.style.color = "white"
        });
        night = true;
    }
}


playbtn.forEach((element, i) => {
    element.addEventListener('click', () => {
        if (element.src === 'http://127.0.0.1:5500/my%20programs/song/png/pause.png' || element.src === 'file:///C:/Users/HP/Desktop/web%20dev/my%20programs/song/png/pause.png' || element.src === 'http://127.0.0.1:5500/png/pause.png') {
            songData[previous_song].path.currentTime = 0;
            //for pausing all the elements
            playbtn.forEach((element) => {
                element.src = '../png/pause.png';
            });
            class_cover[previous_song].classList.remove('currentPlaying');

            mastercontrols.cover.classList.add('rotate');
            element.src = '../png/play.png';
            mastercontrols.cover.src = songData[i].coverpath
            document.getElementById('sd_songname').innerHTML = songData[i].name
            document.querySelector('.coverimage').src = songData[i].coverpath;

            mastercontrols.play.src = "../png/play.png";
            class_cover[i].classList.add('currentPlaying');
            songData[previous_song].path.pause();

            songData[i].path.play();
            previous_song = i;

            progressBar_all();




        }
        else {

            element.src = '../png/pause.png';
            class_cover[previous_song].classList.remove('currentPlaying');

            mastercontrols.play.src = '../png/pause.png';

            mastercontrols.cover.classList.remove('rotate');

            songData[previous_song].path.pause();

        }
    })
});


mastercontrols.play.addEventListener('click', () => {

    masterplay()

});


function left_song() {

    songData[previous_song].path.pause();
    class_cover[previous_song].classList.remove('currentPlaying');
    playbtn.forEach((element) => {
        element.src = '../png/pause.png';
    });

    if (previous_song <=0) {
        previous_song = songData.length - 1
    }
    else {

        previous_song -= 1;
    }

    playbtn[previous_song].src = '../png/play.png';

    songData[previous_song].path.play();
    mastercontrols.cover.src = songData[previous_song].coverpath;
    mastercontrols.cover.classList.add('rotate');

    mastercontrols.play.src = '../png/play.png';
    document.getElementById('sd_songname').innerHTML = songData[previous_song].name
    document.querySelector('.coverimage').src = songData[previous_song].coverpath;
    class_cover[previous_song].classList.add('currentPlaying');

    progressBar_all();

}
function right_song() {
    songData[previous_song].path.pause();
    class_cover[previous_song].classList.remove('currentPlaying');
    playbtn.forEach((element) => {
        element.src = '../png/pause.png';

    });


    if (previous_song >= songData.length - 1) {
        previous_song = songData.length - 1
    }
    else {

        previous_song += 1;
    }
    playbtn[previous_song].src = '../png/play.png';

    songData[previous_song].path.play();
    mastercontrols.cover.src = songData[previous_song].coverpath;
    mastercontrols.cover.classList.add('rotate');

    mastercontrols.play.src = '../png/play.png';
    document.getElementById('sd_songname').innerHTML = songData[previous_song].name
    document.querySelector('.coverimage').src = songData[previous_song].coverpath;
    class_cover[previous_song].classList.add('currentPlaying');

    progressBar_all();

}


mastercontrols.progressBar.addEventListener('change', () => {

    songData[previous_song].path.currentTime = songData[previous_song].path.duration * mastercontrols.progressBar.value / 100;
})


//serch a song
function search() {
    if (document.getElementById('songnameserch').value == '') {
        alert('enter song name first')
    }
    else {
        for (let i = 0; i < songData.length; i++) {
            if (songData[i].name == document.getElementById('songnameserch').value) {
                songData[previous_song].path.pause();
                class_cover[previous_song].classList.remove('currentPlaying');
                playbtn.forEach((element) => {
                    element.src = '../png/pause.png';

                });


                playbtn[i].src = '../png/play.png';

                songData[i].path.play();
                mastercontrols.cover.src = songData[i].coverpath;
                mastercontrols.cover.classList.add('rotate');

                mastercontrols.play.src = '../png/play.png';
                document.getElementById('sd_songname').innerHTML = songData[i].name
                document.querySelector('.coverimage').src = songData[i].coverpath;
                class_cover[i].classList.add('currentPlaying');

                progressBar_all();
                previous_song = i;

            }
            else {
                continue;
            }
        }
    }
}

function progressBar_all() {



    songData[previous_song].path.addEventListener('timeupdate', () => {

        if (mastercontrols.progressBar.value >= 99) {
            songData[previous_song].path.currentTime = 0;
            mastercontrols.progressBar.value = 0;


        }
        else {

            mastercontrols.progressBar.value = parseInt((songData[previous_song].path.currentTime / songData[previous_song].path.duration) * 100);
        }
    });
}



window.addEventListener('keypress',(e)=>{
    if(e.key ===' '){
        masterplay();
        e.preventDefault();

    }

    if(e.key ==='b'){
        day_light();
    }
    if(e.key ==='f'){
        songdetail()
    }
    if(e.key ==='m'){
            
if(songData[previous_song].path.volume<=0){

    songData[previous_song].path.volume=current_volume ;


}
else{
    current_volume = songData[previous_song].path.volume
    songData[previous_song].path.volume = 0;
}
}

if(e.key==='a'){
    left_song();
}
 
if(e.key==='d'){
    right_song();
}


})
console.log(window.innerWidth);