CanvasRenderingContext2D.prototype.createTicToc = function(x = 50, y = 50) {
    this.beginPath();
    this.arc(x - 2, y - 2, 7, 0, 1.5 * Math.PI);
    this.moveTo(x + 5, y - 1);
    this.lineTo(x + 5, y - 22);
    this.strokeStyle = "#66c3ca";
    this.lineWidth = 5;
    this.stroke();
    this.closePath();

    this.beginPath();
    this.arc(x + 13, y - 22, 7, 1.2, 1 * Math.PI);
    this.strokeStyle = "#66c3ca";
    this.lineWidth = 5;
    this.stroke();
    this.closePath();

    this.beginPath();
    this.arc(x + 2, y + 2, 7, 0, 1.5 * Math.PI);
    this.moveTo(x + 9, y + 2);
    this.lineTo(x + 9, y - 18);
    this.strokeStyle = "#e71c4f";
    this.lineWidth = 5;
    this.stroke();
    this.closePath();

    this.beginPath();
    this.arc(x + 17, y - 18, 7, 1.2, 1 * Math.PI);
    this.strokeStyle = "#e71c4f";
    this.lineWidth = 5;
    this.stroke();
    this.closePath();

    this.beginPath();
    this.arc(x, y, 7, 0, 1.5 * Math.PI);
    this.moveTo(x + 7, y);
    this.lineTo(x + 7, y - 20);
    this.strokeStyle = "#f7f7f7";
    this.lineWidth = 5;
    this.stroke();
    this.closePath();

    this.beginPath();
    this.arc(x + 15, y - 20, 7, 1.2, 1 * Math.PI);
    this.strokeStyle = "#f7f7f7";
    this.lineWidth = 5;
    this.stroke();
    this.closePath();

    return this;
}

let canvas = document.querySelector('.tic-toc');
let ctx = canvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const createTicToc = (count = 1, ticToc = []) => {
    for(let i = 0; i < count; i++) {
        let startX = Math.floor(Math.random() * ((width - 50) - 50) + 50);
        let startY = Math.floor(Math.random() * ((height - 50) - 50) + 50);
        ticToc.push({
            startX: startX,
            startY: startY,
            posX: startX > width / 2 ? -1 : 1,
            posY: startY > height / 2 ? -1 : 1,
            step: Math.floor(Math.random() * (15 - 5) + 5)
        });
    }

    return ticToc;
};

let ticToc = createTicToc(10);

const drawBubble = () => {
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, width, height);

    ticToc.map(item => {
        ctx.createTicToc(item.startX, item.startY);

        if(item.startX + item.step < 50) {
            item.posX = -item.posX;
            item.startX = 50;
        }

        if(item.startX + item.step > width - 50) {
            item.posX = -item.posX;
            item.startX = width - 50;
        }

        if(item.startY + item.step < 50) {
            item.posY = -item.posY;
            item.startY = 50;
        }

        if(item.startY + item.step > height - 50) {
            item.posY = -item.posY;
            item.startY = height - 50;
        }

        item.startX += (item.step * item.posX);
        item.startY += (item.step * item.posY);

        ctx.font = "50px Arial";
        ctx.fillStyle = "#FFFFFF";
        ctx.textAlign = "center";
        ctx.fillText("© JAVASCRIPT", width / 2, height / 2);
    });
};

setInterval(drawBubble, 1000 / 25);