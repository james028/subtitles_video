(() => {

let video = document.querySelector("video");
    
video.addEventListener("loadedmetadata", () => {
    let track = video.addTextTrack('subtitles', 'English', 'en');

    track.mode = "showing";
    video.textTracks[0].mode = "showing"; 

    track.addCue(new VTTCue(8, 13, "We are on the market since 2008, constantly developing innovative technology and products."));
    track.addCue(new VTTCue(13.1, 15.5, "We created the largest polish content delivery network,"));
    track.addCue(new VTTCue(16, 21, "which supports the major multimedia platforms, such as player.pl or ipla."));
    track.addCue(new VTTCue(21.1, 23, "How did it start?"));
    track.addCue(new VTTCue(24.1, 30, "In 2006, one of the first Polish VoD service Cineman.pl was founded."));
    track.addCue(new VTTCue(30.1, 37, "We have created for them our redCDN."));
    track.addCue(new VTTCue(37.1, 42, "Our growth was boosted in 2008 when we received a proposal from Redefine - ipla service operator "));
    track.addCue(new VTTCue(42, 47, "to distribute World Football Championships Euro 2008,"));
    track.addCue(new VTTCue(47.1, 50, "then the service developed significantly."));
    track.addCue(new VTTCue(50.1, 53, "We launched servers at key places in the Internet traffic exchange,"));
    track.addCue(new VTTCue(53.1, 57, "we launched servers in major cities all over the country"));
    track.addCue(new VTTCue(57.1, 66.0, "to cope adequately under heavy load, generated by thousands of users watching this content."));
    track.addCue(new VTTCue(66.3, 70.4, "Who are our customers?"));
    track.addCue(new VTTCue(71.1, 74, "Player.pl by TVN debuted on September 2011"));
    track.addCue(new VTTCue(74.1, 77, "and since then, TVN is one of our most important clients."));
    track.addCue(new VTTCue(78, 80, "What are our key assets?"));
    track.addCue(new VTTCue(81.3, 86, "Our advantage is the fact that we provide services based on our own proprietary software."));
    track.addCue(new VTTCue(86.1, 89, "We implement it by ourselves and we design it by ourselves."));
    track.addCue(new VTTCue(89.1, 91, "Therefore, we control it completely"));
    track.addCue(new VTTCue(91.1, 96, "and we are not limited by 3rd-party  technology and several of our systems features are unique."));
    track.addCue(new VTTCue(97, 101, "In such a big systems it is a challenge to combine of functionality, performance and reliability."));
    track.addCue(new VTTCue(102, 106, "What distinguishes us?"));
    track.addCue(new VTTCue(106.3, 111.5, "We are, as I mentioned before, the biggest Content Delivery system in Poland."));
    track.addCue(new VTTCue(112, 116, "We serve traffic at the level of 150 Gb/s."));
    track.addCue(new VTTCue(116.1, 120, "This means, that we are just after Polish Youtube."));
    track.addCue(new VTTCue(120.1, 123, "We generate one of the largest traffic volumes in Poland."));
    track.addCue(new VTTCue(124, 127, "What is our biggest advantage?"));
    track.addCue(new VTTCue(128.1, 133, "Our biggest advantage is that we understand technology in the smallest details."));
    track.addCue(new VTTCue(133.3, 140, "Our software is based, from the beginning till the end, on our own technology,"));
    track.addCue(new VTTCue(140.1, 144, "that's why we can create for our clients things hardly possible"));
    track.addCue(new VTTCue(144.1, 146, "and the clients really appreciate it."));
    track.addCue(new VTTCue(147, 150, "What challenges are awaiting us?"));
    track.addCue(new VTTCue(151.4, 155, "In the nearest future we want to focus on improving our software."));
    track.addCue(new VTTCue(155.4, 160, "We want to significantly push the limits of our system,"));
    track.addCue(new VTTCue(160.4, 163, "scaling it out to handle the bandwidth over 1000 Gb/s."));
    track.addCue(new VTTCue(164, 167, "Why knowledge and passion?"));
    track.addCue(new VTTCue(168, 174, "Knowledge and passion are the basis of innovation."));
    track.addCue(new VTTCue(174.1, 176, "Knowledge makes it possible to create leading-edge technology."));
    track.addCue(new VTTCue(176.1, 178, "It is impossible to create technology without knowledge."));
    track.addCue(new VTTCue(178.1, 181, "It is impossible to create technology without understanding it."));
    track.addCue(new VTTCue(181.1, 184, "While passion gives us strength and courage to follow the unknown."));
    track.addCue(new VTTCue(184.1, 187, "I like to mention the case of Christopher Columbus."));
    track.addCue(new VTTCue(187.1, 189, "who for sure was a perfect sailor,"));
    track.addCue(new VTTCue(189.1, 193, "he had knowledge about seas and oceans and passion which led him to sail into the unknown."));
    track.addCue(new VTTCue(193.1, 196, "We try to work similar way."));
    track.addCue(new VTTCue(196.1, 200, "We try to ensure that our employees embrace this rules."));
    track.addCue(new VTTCue(200.1, 206, "Our goal as a company is to create a first global Polish technological brand"));
    track.addCue(new VTTCue(206.1, 207, "and we do it."));
    track.addCue(new VTTCue(207.1, 211, "We have office in Bristol, we are opening office in Silicon Valley."));
    track.addCue(new VTTCue(211.1, 213, "We cooperate with the biggest brands in the industry."));
    track.addCue(new VTTCue(213.1, 215, "We do it, because we believe that we will succeed."));
    track.addCue(new VTTCue(215.1, 218, "We have passion which leads us this way"));
    track.addCue(new VTTCue(218.1, 222, "and this is  it what we build our company on and our competitive edge."));
    

    //toggle subtitles
    let subtitles = document.getElementById("subtitles");
    
    subtitles.addEventListener("click", () => {
            track.mode = (track.mode == "hidden" ? "showing" : "hidden");
    });
    
   
    //button play/pause
    let start = document.getElementById("playpause");

    start.addEventListener("click", () => {
        video.paused ? video.play() : video.pause();
    });

    let stop = document.getElementById("stop");

    //stop
    stop.addEventListener("click", () => {
        video.pause();
        video.currentTime = 0;
    });

    //mute/unmute
    let mute = document.getElementById("mute");

    mute.addEventListener("click", () => {
        video.muted = !video.muted;
    });


    //fullscreen
    let videoContainer = document.getElementById('videoContainer');

    const isFullScreen = () =>  {
        return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
    }

    const handleFullscreen = () => {
        if (isFullScreen()) {
                if (document.exitFullscreen) document.exitFullscreen();
                else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
                else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
                else if (document.msExitFullscreen) document.msExitFullscreen();
            }
            else {
                if (videoContainer.requestFullscreen) videoContainer.requestFullscreen();
                else if (videoContainer.mozRequestFullScreen) videoContainer.mozRequestFullScreen();
                else if (videoContainer.webkitRequestFullScreen) {
                    video.webkitRequestFullScreen();
                }
                else if (videoContainer.msRequestFullscreen) videoContainer.msRequestFullscreen();
            }
        }

        let fs = document.getElementById("fs");

        fs.addEventListener("click", () => {
            handleFullscreen();
        });

        //progress bar
        let progress = document.getElementById('progress');
        let progressBar = document.getElementById('progress-bar');
        
        video.addEventListener('timeupdate', () => {
            if (!progress.getAttribute('max')) progress.setAttribute('max', video.duration);
            progress.value = video.currentTime;
            progressBar.style.width = Math.floor((video.currentTime / video.duration) * 100) + '%';
        });

        //after click in progress bar
        progress.addEventListener('click', function(e) {
            let pos = (e.pageX  - (this.offsetLeft + this.offsetParent.offsetLeft + this.offsetParent.offsetParent.offsetLeft)) / this.offsetWidth;
            video.currentTime = pos * video.duration;
        });
 });
})();

