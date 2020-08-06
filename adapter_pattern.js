class VlcPlayer {
	constructor() {
		
	}
	
	playVlc(fileName) {
		console.log('Playing vlc file. Name: ' + fileName);
	}
	
	playMp4(fileName) {
		// do nothing
	}
}

class Mp4Player {
	constructor() {
		
	}
	
	playVlc(fileName) {
		// do nothing
	}
	
	playMp4(fileName) {
		console.log('Playing mp4 file. Name: ' + fileName);
	}
}

class MediaAdapter {
	constructor(audioType) {
		this.adavancedMediaPlayer;
		if(audioType == 'vlc') {
			this.adavancedMediaPlayer = new VlcPlayer();
		} else if(audioType == 'mp4') {
			this.adavancedMediaPlayer = new Mp4Player();
		}
	}
	
	play(audioType, fileName) {
		if(audioType == 'vlc') {
			this.adavancedMediaPlayer.playVlc(fileName);
		} else if(audioType == 'mp4') {
			this.adavancedMediaPlayer.playMp4(fileName);
		}
	}
}

class AudioPlayer {
	constructor() {
		this.mediaAdapter;
	}
	
	play(audioType, fileName) {
		if(audioType == 'mp3') {
			console.log('Playing mp3 file. Name: ' + fileName);
		} else if (audioType == 'vlc' || audioType == 'mp4') {
			const mediaAdapter = new MediaAdapter(audioType);
			mediaAdapter.play(audioType, fileName);
		} else {
			console.log('Invalid media. ' + audioType + ' format not supported')
		}
	}
}

const audioPlayer = new AudioPlayer();
audioPlayer.play('mp3', 'beyond the horizon.mp3');
audioPlayer.play('mp4', 'beyond the alone.mp3');
audioPlayer.play('vlc', 'beyond the away.vlc');
audioPlayer.play('avi', 'beyond the me.avi');