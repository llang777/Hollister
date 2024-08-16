function showPopup(date) {
    document.getElementById('popup-date').textContent = date;
    document.getElementById('popup-container').style.display = 'flex';
}

function hidePopup() {
    document.getElementById('popup-container').style.display = 'none';
}
