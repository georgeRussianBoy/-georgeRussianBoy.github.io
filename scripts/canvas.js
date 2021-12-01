function getRandom(max) {
    return Math.random() * max;
  }

function drawDiagram()
{
    var n = parseInt(document.getElementById('countOfColumns').value);
    if (!n)
        return 0;
    var canvas = document.getElementById('diagram');

    var w = canvas.width;
    var h = canvas.height;

    var ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "rgb(245,10,10)"
    for (var i = 0; i < n; ++i)
    {
        rand_num = getRandom(h);
        console.log(rand_num);
        ctx.fillRect ((w / n) * i, h - rand_num, (w / n), rand_num);
    }
}

