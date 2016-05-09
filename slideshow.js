(function (){

    var SLIDE_DURATION = 5000;

    var images;
    var element;
    var current;
    var preloadedImages;

    function init () {
        current = 0;
        preloadedImages = [];
        element = document.getElementById("slides");
        defaultImages();
        initializeSlideshow()
        setInterval(advance, SLIDE_DURATION);
    }

    function defaultImages () {
        images = [];
        for(var i=1; i<69; i++) {
            images.push('images/paris-flowers-' + i + '.jpg');
        }
    }

    function initializeSlideshow () {
        var item = displayImage(current);
        preloadedImages.push(item);
    }

    function displayImage(index) {
        var src = images[index];
        var img = document.createElement('img')
        img.onload = imageLoaded;
        img.setAttribute('src', src);
        img.setAttribute('alt', src);
        var li = document.createElement('li');
        li.appendChild(img);
        element.appendChild(li);
        return li
    }

    function loadNextImage() {
        console.log(preloadedImages.length);
        if (preloadedImages.length < 3) {
            // load another
            if (current < images.length -1) {
                current++;
            } else {
                current = 0;
            }
            var li = displayImage(current, true);
            preloadedImages.push(li);
        }
    }

    function imageLoaded(e) {
        loadNextImage();
    }

    function advance () {
        var remove = preloadedImages.shift();
        console.log(remove);
        element.removeChild(remove);
        loadNextImage();
    }

    init();

})();
