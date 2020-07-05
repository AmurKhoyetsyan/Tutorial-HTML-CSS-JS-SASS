;(function(glob){
    function init(selelector){
        let clock = glob.createElement('div');
        clock.classList.add('clock');
        let count = 12;
        for(let i = 1; i <= count; i++) {
            let counter = glob.createElement('div');
            if(i % 3 === 0){
                counter.classList.add('item-hour');
                counter.setAttribute('data-count', i);
            }else {
                counter.classList.add('item');
            }
            counter.classList.add('item-count');
            clock.appendChild(counter);
        }

        let hour = glob.createElement('div');
        hour.classList.add('hour');
        let min = glob.createElement('div');
        min.classList.add('min');
        let sec = glob.createElement('div');
        sec.classList.add('sec');

        clock.appendChild(hour);
        clock.appendChild(min);
        clock.appendChild(sec);

        selelector.appendChild(clock);

        positionItem();
    };

    function positionItem() {
        let circle = glob.querySelector('.clock'),
        items = glob.querySelectorAll('.item-count'),
        len = items.length,
        diam, radius2, itemW;
        let item = [];

        for(let key of items) {
            item.push(key);
        }

        let replace = item[item.length - 1];
        item.pop();
        item.unshift(replace);

        diam = parseInt( window.getComputedStyle(circle).getPropertyValue('width'));
        radius = (diam - 8) / 2; // 8 border i chapna aysinqn 2 * 4 shrjanagicna

        itemW = item[0].getBoundingClientRect().width;
        radius2 = radius - itemW;

        let alpha = Math.PI / 2,
            corner = 2 * Math.PI / len;
            
        for (let i = 0; i < len; i++) {
            item[i].style.left = parseInt( ( radius - itemW / 2 ) + ( radius2 * Math.cos( alpha ) ) ) + 'px';
            item[i].style.top =  parseInt( ( radius - itemW / 2 ) - ( radius2 * Math.sin( alpha ) ) ) + 'px';
            alpha = alpha - corner;
        }

        runClock();
    };

    function runClock() {
        let deg = 6;

        let hour = glob.querySelector('.hour');
        let min = glob.querySelector('.min');
        let sec = glob.querySelector('.sec');

        

        setInterval(function (){
            let date = new Date();
            let hh = date.getHours() * 30;
            let mm = date.getMinutes() * deg;
            let ss = date.getSeconds() * deg;

            hour.style.transform = "rotateZ(" + (hh + (mm / 12)) + "deg)";
            min.style.transform = "rotateZ(" + mm + "deg)";
            sec.style.transform = "rotateZ(" + ss + "deg)";
        }, 1000);
    };

    init(glob.body);
})(document);