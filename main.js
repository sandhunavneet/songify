// fancyTimeFormat decimal value nikaal deta hai, aur integer return karta hai
function fancyTimeFormat(time)
{   
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}


// update current time
function updateCurrentTime() {
    var song = document.querySelector('audio');
    var currentTime = Math.floor(song.currentTime);     //Remove decimal value
    currentTime = fancyTimeFormat(currentTime);          // make the time look good
    var duration = Math.floor(song.duration);
    duration = fancyTimeFormat(duration)
    $('.time-elapsed').text(currentTime);
    $('.song-duration').text(duration);
}



              // $('#song1 .song-name').text(songList[0]);
           // $('#song2 .song-name').text(songList[1]);
             // $('#song3 .song-name').text(songList[2]);
            // $('#song4 .song-name').text(songList[3]);


         // $('#song1 .song-artist').text(artistList[0]);
//             // $('#song2 .song-artist').text(artistList[1]);
//             // $('#song3 .song-artist').text(artistList[2]);
//             // $('#song4 .song-artist').text(artistList[3]);

        


// var song = {
//         'name': 'Song Name',
//         'artist': 'Song Artist',
//         'album': 'Song Album',
//         'duration': '3:46',
//         'fileName': 'song.mp3',
//        'image': 'song.jpg'       
// };
            
 var songs = [{
            
                'name': 'Badri Ki Dulhania (Title Track)',
                'artist': 'Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi',
                'album': 'Badrinath ki Dulhania',
                'duration': '2:56',
                'fileName': 'song1.mp3',
                'image': 'song1.jpg'

            },
            {
                'name': 'Humma Song',
                'artist': 'Badshah, Jubin Nautiyal, Shashaa Tirupati',
                'album': 'Ok Jaanu',
                'duration': '3:15',
                'fileName': 'song2.mp3',
               'image': 'song2.jpg'  
            },
            {
                'name': 'Nashe Si Chadh Gayi',
                'artist': 'Arijit Singh',
                'album': 'Befikre',
                'duration': '2:34',
                'fileName': 'song3.mp3',
                'image': 'song3.jpg'
            },
            {
                'name': 'The Breakup Song',
                'artist': 'Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi',
                'album': 'Ae Dil Hai Mushkil',
                'duration': '2:29',
                'fileName': 'song4.mp3',
               'image': 'song4.jpg'
            }];
         

function changeCurrentSongDetails(songObj) {
    $('.current-song-image').attr('src','img/' + songObj.image);
    $('.current-song-name').text(songObj.name);
    $('.current-song-album').text(songObj.album);
}


function addSongNameClickEvent(songObj,position) {

    var id = '#song' + position;
    var songName = songObj.fileName;
      
    $(id).click(function() {
        var audio = document.querySelector('audio');
        var currentSong = audio.src;
        if(currentSong.search(songObj.fileName) != -1)
        {
              toggleSong();
        }
        else {
            audio.src = songName;
            toggleSong();
            changeCurrentSongDetails(songObj); 
        }
    });
}

window.onload = function() {

 changeCurrentSongDetails(songs[0])

    for(var i =0; i < songs.length;i++) {
        var obj = songs[i];
        var name = '#song' + (i+1);
        var song = $(name);
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEvent(obj,i+1);
    }
    updateCurrentTime(); 
    
    setInterval(function() {
        updateCurrentTime();
    },1000);


// datatables are added

$('#songs').DataTable({
        paging: false
    });
}
 // with the use of function,the line of code decreases and it provides the reusability property 


function toggleSong() {
    
   var song = document.querySelector('audio');
    
   if(song.paused == true) {
          console.log('Playing');
          $('.play-icon').removeClass('fa-play').addClass('fa-pause');
          song.play();
    }
    else {
        console.log('Pausing');
        $('.play-icon').removeClass('fa-pause').addClass('fa-play');
        song.pause();
    }
} 

  // click event for welcome-screen
$('.welcome-screen button').on('click', function() {
     var name = $('#name-input').val();
    if (name.length > 2) {
          
        var message = "Welcome, " + name;
        $('.main .user-name').text(message);
        $('.welcome-screen').addClass('hidden');
          $('.main').removeClass('hidden');
        
    }
     else {
        
        $('#name-input').addClass('error');
    }
});


//use of function to toggle a song
$('.play-icon').on('click', function() {        // click event for play or pause the icon using mouse
    toggleSong();
});


//controlled by keyboard
$('body').on('keypress',function(event) {
    var target = event.target;
    if (event.keyCode == 32 && target.tagName !='INPUT')
    {
        toggleSong();
    }
});
