let albumCover = document.querySelectorAll('.album-cover');
let audioDivs = document.querySelectorAll('.audio');

function hideAll() {
    audioDivs.forEach(function(el) {
      el.style.display = 'none';
    });
  };

    hideAll();

  albumCover.forEach(function(el) {
    el.onclick = (e) => {
      hideAll();

      let players = document.querySelectorAll('audio');
players.forEach(function(el) {
        el.pause();
        el.currentTime = 0;
    });
  
  switch (e.target.getAttribute('id')) {
    case 'warm-jets':
      document.querySelector('#cindy-tells-me')
          .style.display = 'block';
      break;
    case 'another-green-world':
      document.querySelector('#golden-hours')
          .style.display = 'block';
      break;
    case 'ambient-1':
      document.querySelector('#one-one')
      .style.display = 'block';
      break;
    case 'apollo':
      document.querySelector('#an-ending')
      .style.display = 'block';
      break;
    };
};
});


