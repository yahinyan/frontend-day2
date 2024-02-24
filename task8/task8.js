const button = document.getElementById('click_button');
const count_display = document.getElementById('click_count');
let count = 0;
button.addEventListener('click', function() {
    count++;
    count_display.textContent = count;
});