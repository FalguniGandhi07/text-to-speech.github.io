function message(){
		var msg = document.getElementById("msg_id").value;
		var linkq="https://ttsagain.mybluemix.net/audioOutput?textalert="+msg;
		window.location=linkq;

	}
