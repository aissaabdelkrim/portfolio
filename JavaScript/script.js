var lnk = document.getElementById('lnk');
var small = document.getElementById('small');
var big = document.getElementById('big');

lnk.addEventListener("click", function () {
    if (small.className === 'show') {
        small.className = 'hide';
        big.className = 'show';
        lnk.innerHTML ='<< less';
    } else {
        small.className = 'show';
        big.className = 'hide';
        lnk.innerHTML ='more>>';
    }
});
document.getElementById('contact-form').addEventListener('submit', function(event) { event.preventDefault(); var formData = new FormData(this); fetch(this.action, { method: 'POST', body: formData, headers: { 'Accept': 'application/json' } }).then(response => { if (response.ok) { document.getElementById('contact-form').style.display = 'none'; document.getElementById('thankyou-message').style.display = 'block'; } else { alert('Failed to send message. Please try again.'); } }).catch(error => { console.error('Error:', error); alert('Failed to send message. Please try again.'); }); });
function closePopup() { document.getElementById('popup').style.display = 'none'; } // Open the popup on page load window.onload = function() { document.getElementById('popup').style.display = 'flex'; }
