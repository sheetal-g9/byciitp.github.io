var plays;
var playing;

var RAMAYANA_LOADED = false;

var setListeners = function() {
		plays = document.getElementsByClassName("plays");
		console.log("hello");		
		var player = document.getElementById("audio_player");
		player.style.display = "block";
		
		for(var i = 0; i < plays.length; ++i) {
			plays[i].addEventListener("click", function() {
				if(playing == null || playing.id != this.id)
				{
					player.pause();
					player.src = "https://raw.githubusercontent.com/byciitp/audios/master/" + this.id;
					this.classList.add("active");
					if (playing)
						playing.classList.remove("active");
					playing = this;
					player.play();
				}
			});
		};
	};


setListeners();