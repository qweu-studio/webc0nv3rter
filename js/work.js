// volume
let btnVolume = document.querySelector('#volume-btn');

btnVolume.onclick = function () {
    let inputVolumeOne = document.querySelector('#volume-one').value,
        inputVolumeTwo = document.querySelector('#volume-two').value,
        inputVolumeThree = document.querySelector('#volume-three').value;
    btnVolume.innerHTML = inputVolumeOne * inputVolumeTwo * inputVolumeThree;
}
// /volume