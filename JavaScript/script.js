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
