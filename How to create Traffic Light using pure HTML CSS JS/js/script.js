;(function(doc){
    let runLight = false;
    let interval;
    let step = 1; let count = 0;

    function removeClasses(elem, colors) {
        let len = colors.length;
        for(item of elem) {
            for(let i = 0; i < len; i++) {
                if(item.classList.contains(colors[i])) {
                    item.classList.remove(colors[i]);
                }
            }
        }
    }

    function runInterval(elem, colors) {
        elem[count].classList.add(colors[count]);
        let len = elem.length;
        interval = setInterval(function(){
            removeClasses(elem, colors);
            count += step;
            elem[count].classList.add(colors[count]);
            if(count === len - 1 || count === 0) {
                step = -step;
            }
        }, 1000);
    }

    function run() {
        let light = doc.querySelectorAll('.circle');
        if(light !== null) {
            let lightColor = ["red", "yellow", "green"];
            runInterval(light, lightColor);
        }
    }

    function start() {
        let btn = doc.querySelector('.btn-run');
        if(btn !== null) {
            btn.onclick = function(event) {
                runLight = !runLight;
                if(runLight) {
                    run();
                    btn.innerText = "Pause";
                }else {
                    clearInterval(interval);
                    btn.innerText = "Run";
                }
            }
        }
    }

    start();
})(document);