// Handles loading the events for <model-viewer>'s slotted progress bar

let canAutoRotate = "0";
let isAudioPlaying = false;

const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};

const modelViewer = document.querySelector('model-viewer')
modelViewer.addEventListener('progress', onProgress);

function OnAnimationFinished() {
  console.log('onAnimationFinished');
  const button = document.querySelector('.Hotspot');
  if (button) {
    button.style.display = 'flex';
  }
}

function OpenDoor()
{
  let modelViewer = document.querySelector('model-viewer')
  console.log("Open Door");

  modelViewer.setAttribute("animation-name","Animation")
  modelViewer.play({repetitions: 1});
  modelViewer.addEventListener("finished", OnAnimationFinished);
  modelViewer.setAttribute("animation-loop","false")

}

window.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.Hotspot');
  const audio = document.getElementById('hotspot-audio');
  audio.currentTime = 0;
  button.addEventListener('click', () => {
    if (!audio.paused) {
      // Audio is playing, so pause it
      audio.pause();
    } else {
      // Audio is paused/stopped, so play it from start
      audio.play();
    }
  });
});