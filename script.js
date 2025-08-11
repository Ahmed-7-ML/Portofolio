    function openTab(tabName) {
        var i;
        var tabcontent = document.getElementsByClassName("tab-content");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("active");
        }
        document.getElementById(tabName).classList.add("active");
    }

    function openImage(src) {
        document.getElementById('popup-img').src = src;
        document.getElementById('popup').style.display = 'flex';
    }

    function closeImage() {
        document.getElementById('popup').style.display = 'none';
    }

    // Open the first tab by default
    document.addEventListener('DOMContentLoaded', function() {
        openTab('certificates');
    });
