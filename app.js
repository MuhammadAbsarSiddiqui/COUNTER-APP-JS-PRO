let number = document.getElementById('number')
let count = 0;

function increment() {
    count = count + 1;
    number.innerHTML = count;  
    number.style.color="black"
}

function decrement() {
    count = count - 1;
    number.innerHTML = count;
    number.style.color="black"
}

function reset() {
    count = 0;
    number.innerHTML = count;  
    number.style.color="#ff1493"
}