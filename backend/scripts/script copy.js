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

    buttonStop.addEventListener((event) => {
        alert("Stop pressed!");
    });


    const stream = await navigator.mediaDevices.getUserMedia({ // <1>
        video: false,
        audio: true,
    });





	console.log('here');

}