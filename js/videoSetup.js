
let scene = document.querySelector('a-scene');
var cursor = document.querySelector('a-cursor');
/**
 * CINEMA MODE
 */
scene.lightOff = function() {
    scene.islightOn = true;
    scene.removeAttribute('animation__fogback');
    scene.setAttribute('animation__fog', "property: fog.color; to: #0c192a; dur: 800; easing: easeInQuad;");
}
scene.lightOn = function() {
    scene.islightOn = false;
    scene.removeAttribute('animation__fog');
    scene.setAttribute('animation__fogback', "property: fog.color; to: #dbdedb; dur: 800");
}
/**
 * AVideoPlayer
 */
var videoPlayer = new AVideoPlayer();
/**
 * CURSOR
 */
    // Cursor
let hideCursor = function() {
        cursor.removeAttribute('animation__cursorHideLeave');
        cursor.setAttribute('animation__cursorHideEnter', "property: scale; from: 0.6 0.6 0.6; to: 0 0 0; dur: 300; easing: easeInQuad;");
    }
let showCursor = function() {
    cursor.removeAttribute('animation__cursorHideEnter');
    cursor.setAttribute('animation__cursorHideLeave', "property: scale; from: 0 0 0; to: 0.6 0.6 0.6; dur: 300; easing: easeInQuad;");
}
document.querySelector('#video-screen').addEventListener('mouseenter', hideCursor);
document.querySelector('#video-screen').addEventListener('mouseleave', showCursor);
// Play button action
document.querySelector('#control-play').addEventListener('click', function () {
    if (videoPlayer.paused) {
        scene.lightOn()
    } else {
        scene.lightOff();
        hideCursor();
    }
});
