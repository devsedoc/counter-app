let count = 0;

const counter = document.getElementById("counter");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

function updateCounter() {
    counter.textContent = count;
}

increaseBtn.addEventListener("click", function () {
    count++;
    updateCounter();
});

decreaseBtn.addEventListener("click", function () {

    if (count > 0) {
        count--;
        updateCounter();
    }

});

resetBtn.addEventListener("click", function () {
    count = 0;
    updateCounter();
});

document.addEventListener("keydown", function (event) {

    if (event.key === "+") {
        count++;
        updateCounter();
    }

    if (event.key === "-") {

        if (count > 0) {
            count--;
            updateCounter();
        }

    }

    if (event.key.toLowerCase() === "r") {
        count = 0;
        updateCounter();
    }

});