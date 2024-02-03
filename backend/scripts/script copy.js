document.addEventListener('DOMContentLoaded', () => {
	myFunc();

});

async function myFunc() {
	console.log('working');

    const buttonStart = document.querySelector('#buttonStart')
    const buttonStop = document.querySelector('#buttonStop')
    const audio = document.querySelector('#audio')


    buttonStart.addEventListener((event) => {
        alert("Start pressed!");
    });

    buttonStart.addEventListener((event) => {
        alert("Start pressed!");
    });


    const stream = await navigator.mediaDevices.getUserMedia({
        video: false,
        audio: true,
    })





	console.log('here');

}