;(function(fox){
    let move = fox.querySelector(".parent");
    let animation = fox.querySelector(".animation");

    let cords = {
        startX: 0,
        startY: 0,
        degX: 0,
        degY: 0
    };

    function foxMove(event) {
        let stepX = 0, stepY = 0;

        stepX = cords.startX - event.pageX;
        stepY = cords.startY - event.pageY;

        cords.degX += -stepX;
        cords.degY += stepY;

        cords.startX = event.pageX;
        cords.startY = event.pageY;

        animation.style["transform"] = `rotateY(${cords.degX}deg) rotateX(${cords.degY}deg)`;
    }

    function mouseUp(event) {
        move.removeEventListener("mousemove", foxMove);
    }

    function mouseDown(event) {
        cords.startX = event.pageX;
        cords.startY = event.pageY;
        move.addEventListener("mousemove", foxMove);
    }

    move.addEventListener("mouseup", mouseUp);
    move.addEventListener("mousedown", mouseDown);
})(document);