CanvasRenderingContext2D.prototype.roundRect = function (x, y, width, height, radius) {
    this.beginPath();
    this.moveTo(x + radius, y);
    this.arcTo(x + width, y, x + width, y + height, radius);
    this.arcTo(x + width, y + height, x, y + height, radius);
    this.arcTo(x, y + height, x, y, radius);
    this.arcTo(x, y, x + width, y, radius);
    this.closePath();
    this.fill();
    return this;
};
let canvas = document.querySelector('.bubble');
let ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const getColor = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    return [
        `rgba(${r}, ${g}, ${b}, 0.7)`,
        `rgb(${r}, ${g}, ${b})`
    ];
};

const createBooble = (count = 1, bubble = []) => {
    for(let i = 0; i < count; i++) {
        let color = getColor();
        let size = Math.floor(Math.random() * (80 - 30) + 30);
        let startX = Math.floor(Math.random() * (width - size));
        let startY = Math.floor(Math.random() * (height - size));
        bubble.push({
            color: color[0],
            stroke: color[1],
            size: size,
            radius: size / 2,
            line: Math.floor(Math.random() * (5 - 1) + 1),
            startX: startX,
            startY: startY,
            posX: startX > width / 2 ? -1 : 1,
            posY: startY > height / 2 ? -1 : 1,
            step: Math.floor(Math.random() * (20 - 10) + 10)
        });
    }

    return bubble;
};

let bubble = createBooble(50);

const drawBubble = () => {
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, width, height);

    bubble.map(item => {
        ctx.fillStyle = item.color;
        ctx.roundRect(item.startX, item.startY, item.size, item.size, item.radius);
        ctx.lineWidth = item.line;
        ctx.strokeStyle = item.stroke;
        ctx.stroke();

        if(item.startX + item.step < 0) {
            item.posX = -item.posX;
            item.startX = 0;
        }

        if(item.startX + item.step > width - item.size) {
            item.posX = -item.posX;
            item.startX = width - item.size;
        }

        if(item.startY + item.step < 0) {
            item.posY = -item.posY;
            item.startY = 0;
        }

        if(item.startY + item.step > height - item.size) {
            item.posY = -item.posY;
            item.startY = height - item.size;
        }

        item.startX += (item.step * item.posX);
        item.startY += (item.step * item.posY);
    });

    ctx.font = "48px Arial";
    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "center";
    ctx.fillText("© JAVASCRIPT", width / 2, height / 2);
};

setInterval(drawBubble, 1000 / 25);