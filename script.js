function flipUnit(unit, newValue) {
    const flipTop = unit.querySelector('.flip-top');
    const flipBottom = unit.querySelector('.flip-bottom');

    unit.classList.remove('flipping');
    setTimeout(() => {
        flipTop.innerText = newValue;
        flipBottom.innerText = newValue;
        unit.classList.add('flipping');
    }, 10);
}

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    flipUnit(document.getElementById('hours'), hours);
    flipUnit(document.getElementById('minutes'), minutes);
    flipUnit(document.getElementById('seconds'), seconds);

    // Update the date
    const dateElement = document.getElementById('date');
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });

    dateElement.innerText = `${year}.${month}.${day} ${dayOfWeek}`;
}

// Initialize the clock and update it every second
setInterval(updateClock, 1000);
updateClock();  // Initial call to set the clock immediately
