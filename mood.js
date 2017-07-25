 $('#links1').on('click',function() {

 songs=[{

                 'name': 'Bolna',
                'artist': 'Monali Thakur',
                'album': 'Kapoor & sons',
                'duration': '3:32',
                'fileName': 'song5.mp3',
                'image':'song6.jpg'

            },
            {
                'name': 'Cutiepie',
                'artist': 'Pritam',
                'album': 'Ae dil h mushkil',
                'duration': '3:51',
               'fileName': 'song6.mp3',
                'image':'song7.jpg'
                
            },
            {
                'name': 'Kar Gayi Chull',
                'artist': 'Badsah,Fazilpuria',
                'album': 'Kapoor & Sons',
                'duration': '3:07',
              'fileName': 'song7.mp3',
               'image':'song6.jpg'
                
            },
            {
                'name': 'Love You Zindagi',
                'artist': 'Amit Trivedi',
                'album': 'Dear zindagi',
                'duration': '3:52',
              'fileName': 'song8.mp3',
                'image':'song5.jpg'
                
                
    }];

   

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

});

  $('#links2').on('click',function() {

    songs=[{

                 'name': 'Dard-E-Disco',
                'artist': 'Sukhwinder singh',
                'album': 'Om shanti om',
                'duration': '4:52 ',
                'fileName': 'song9.mp3',
                'image':'song8.jpg'

            },
            {
                'name': 'Ding Dang',
                'artist': 'Antara Mitra',
                'album': 'Munna Michael',
                'duration': '2:42',
                'fileName': 'song10.mp3',
                'image':'song9.jpg'
                
            },
            {
                'name': 'Disco Disco',
                'artist': 'Vishal',
                'album': 'Golmaal',
                'duration': '2:46',
                'fileName': 'song11.mp3',
                'image':'song10.jpg'
            },
            {
                'name': 'The Disco Song',
                'artist': 'Benny Dayal',
                'album': 'The student of the year',
                 'duration': '2:46',
                 'fileName': 'song12.mp3',
                'image':'song11.jpg'
                
    }];

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
});


  $('#links3').on('click',function() {

    songs=[{

                 'name': 'Cola Vs Milk',
                'artist': 'Anmol Gaggan Mann',
                'album': 'Cola Vs Milk',
                'duration': '3:52',
                'fileName': 'song13.mp3',
                'image':'song12.jpg'

            },
            {
                'name': 'Kala Chashma',
                'artist': 'Amar Arshi',
                'album': 'Baar Baar Dekho',
                'duration': '3:07',
                 'fileName': 'song14.mp3',
                'image':'song13.jpg'
                
            },
            {
                'name': 'Ring',
                'artist': 'Neha Kakkar',
                'album': 'Ring',
                'duration': '3:43',
                'fileName': 'song15.mp3',
                'image':'song14.jpg'
            },
            {
                'name': 'Wakhra Swag ',
                'artist': 'Inder Chahal',
                'album': 'Wkhra Sawag',
                'duration': '3:12',
                 'fileName': 'song16.mp3',
                'image':'song15.jpg'
                
    }];
   

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
});
 
  $('#links4').on('click',function() {

    songs=[{

                 'name': 'Mahiya',
                'artist': 'Annie Khalid',
                'album': 'Dus Kahaniyan',
                'duration': '4:29',
                'fileName': 'song17.mp3',
                'image':'song16.jpg'

            },
            {
                'name': 'Mauja Mauja',
                'artist': 'Amar Arshi',
                'album': 'Jab We Met',
                'duration': '4:12',
                'fileName': 'song18.mp3',
                'image':'song17.jpg'
                
            },
            {
                'name': 'Radio',
                'artist': 'Kamaal khan',
                'album': 'Tubelight',
                'duration': '4:29',
                'fileName': 'song19.mp3',
                'image':'song18.jpg'
            },
            {
                'name': 'yaara Dhol bajake ',
                'artist': 'Soham Chakarvarti',
                'album': 'Yaara Dhol Bajake',
                'duration': '3:35',
                'fileName': 'song20.mp3',
                'image':'song19.jpg'
                
    }];

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
});
