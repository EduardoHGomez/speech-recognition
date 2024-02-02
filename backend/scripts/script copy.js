document.addEventListener('DOMContentLoaded', () => {
	myFunc();

});

async function myFunc() {
	console.log('working');

    const buttonStart = document.querySelector('#buttonStart')
    const buttonStop = document.querySelector('#buttonStop')
    const audio = document.querySelector('#audio')

    const stream = await navigator.mediaDevices.getUserMedia({
        video: false,
        audio: true,
    })

	console.log('here');

}