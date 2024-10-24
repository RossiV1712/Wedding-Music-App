GMPlaying = 0;
GMVolume = 0;
EnMPlaying = 0;
EnMVolume = 0;
SMPlaying = 0;
SMVolume = 0;
ExMPlaying = 0;
ExMVolume = 0;



function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

function GuestArrivalMusic() {
    if(GMPlaying == 0) {
        document.getElementById("GuestArrivalMusic").ariaPressed = "true";
        document.getElementById("GuestArrivalAudio").play();
        for (i=0;i<100;i++) {
            (function(i) {
                setTimeout(
                function() {
                        if(GMVolume < 0.99) {
                        document.getElementById("GuestArrivalAudio").volume = GMVolume;
                        GMVolume = GMVolume + 0.01;
                        }
                        else {
                            GMVolume = 1;
                            i=100;
                        }
                        }, 100*i);
               })
           (i);
        }
        GMPlaying = 1;
    }
    else {
        for (i=0;i<100;i++) {
            (function(i) {
                setTimeout(
                function() {
                    if(GMVolume > 0.01) {
                        document.getElementById("GuestArrivalAudio").volume = GMVolume;
                        GMVolume = GMVolume - 0.01;
                    }
                    else {
                        GMVolume = 0;
                        document.getElementById("GuestArrivalMusic").ariaPressed = "false";
                        document.getElementById("GuestArrivalAudio").pause();
                        document.getElementById("GuestArrivalAudio").currentTime = 0;
                        GMPlaying = 0;
                        i=100;
                    }
                        }, 100*i);
               })
           (i);
        }
    }
}

function EntranceMusic () {
    if(EnMPlaying == 0) {
        document.getElementById("EntranceMusic").ariaPressed = "true";
        document.getElementById("EntranceAudio").play();
        for (i=0;i<100;i++) {
            (function(i) {
                setTimeout(
                function() {
                        if(EnMVolume < 0.99) {
                        document.getElementById("EntranceAudio").volume = EnMVolume;
                        EnMVolume = EnMVolume + 0.01;
                        }
                        else {
                            EnMVolume = 1;
                            i=100;
                        }
                        }, 100*i);
               })
           (i);
        }
        EnMPlaying = 1;
    }
    else {
        for (i=0;i<100;i++) {
            (function(i) {
                setTimeout(
                function() {
                    if(EnMVolume > 0.01) {
                        document.getElementById("EntranceAudio").volume = EnMVolume;
                        EnMVolume = EnMVolume - 0.01;
                    }
                    else {
                        EnMVolume = 0;
                        document.getElementById("EntranceMusic").ariaPressed = "false";
                        document.getElementById("EntranceAudio").pause();
                        document.getElementById("EntranceAudio").currentTime = 0;
                        EnMPlaying = 0;
                        i=100;
                    }
                        }, 100*i);
               })
           (i);
        }
    }
}

function SigningMusic () {
    if(SMPlaying == 0) {
        document.getElementById("SigningMusic").ariaPressed = "true";
        document.getElementById("SigningAudio").play();
        for (i=0;i<100;i++) {
            (function(i) {
                setTimeout(
                function() {
                        if(SMVolume < 0.99) {
                        document.getElementById("SigningAudio").volume = SMVolume;
                        SMVolume = SMVolume + 0.01;
                        }
                        else {
                            SMVolume = 1;
                            i=100;
                        }
                        }, 100*i);
               })
           (i);
        }
        SMPlaying = 1;
    }
    else {
        for (i=0;i<100;i++) {
            (function(i) {
                setTimeout(
                function() {
                    if(SMVolume > 0.01) {
                        document.getElementById("SigningAudio").volume = SMVolume;
                        SMVolume = SMVolume - 0.01;
                    }
                    else {
                        SMVolume = 0;
                        document.getElementById("SigningMusic").ariaPressed = "false";
                        document.getElementById("SigningAudio").pause();
                        document.getElementById("SigningAudio").currentTime = 0;
                        SMPlaying = 0;
                        i=100;
                    }
                        }, 100*i);
               })
           (i);
        }
    }
}

function ExitMusic () {
    if(ExMPlaying == 0) {
        document.getElementById("ExitMusic").ariaPressed = "true";
        document.getElementById("ExitAudio").play();
        for (i=0;i<100;i++) {
            (function(i) {
                setTimeout(
                function() {
                        if(ExMVolume < 0.99) {
                        document.getElementById("ExitAudio").volume = ExMVolume;
                        ExMVolume = ExMVolume + 0.01;
                        }
                        else {
                            ExMVolume = 1;
                            i=100;
                        }
                        }, 100*i);
               })
           (i);
        }
        ExMPlaying = 1;
    }
    else {
        for (i=0;i<100;i++) {
            (function(i) {
                setTimeout(
                function() {
                    if(ExMVolume > 0.01) {
                        document.getElementById("ExitAudio").volume = ExMVolume;
                        ExMVolume = ExMVolume - 0.01;
                    }
                    else {
                        ExMVolume = 0;
                        document.getElementById("ExitMusic").ariaPressed = "false";
                        document.getElementById("ExitAudio").pause();
                        document.getElementById("ExitAudio").currentTime = 0;
                        ExMPlaying = 0;
                        i=100;
                    }
                        }, 100*i);
               })
           (i);
        }
    }
}