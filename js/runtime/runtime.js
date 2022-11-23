var now = new Date;

function createtime() {
    now.setTime(now.getTime() + 1e3);
    var e = new Date("08/01/2022 00:00:00"),
        r = new Date("08/09/2022 00:00:00"),
        o = (now - r) / 1e3 / 60 / 60 / 24,
        i = Math.floor(o),
        n = (now - r) / 1e3 / 60 / 60 - 24 * i,
        s = Math.floor(n);
    1 == String(s)
        .length && (s = "0" + s);
    var l = (now - r) / 1e3 / 60 - 1440 * i - 60 * s,
        g = Math.floor(l);
    1 == String(g)
        .length && (g = "0" + g);
    var d = (now - r) / 1e3 - 86400 * i - 3600 * s - 60 * g,
        c = Math.round(d);
    1 == String(c)
        .length && (c = "0" + c);
    let h = "";
    h = s < 18 && s >= 9 ? `<img class='boardsign' src='https://img.shields.io/badge/糖果屋-营业中-6adea8?style=social&logo=cakephp' title='摆烂中~'><br> This site actually ran ${i} days ${s} hours ${g} minutes ${c} seconds <i id="heartbeat" class='fas fa-heartbeat'></i> <br> In such a soft and warm season, please accept my sincere blessing and deep concern for you.✨ `
        : `<img class='boardsign' src='https://img.shields.io/badge/F小屋-打烊休息啦-6adea8?style=social&logo=coffeescript' title='摆大烂中~'><br> This site actually ran ${i} days ${s} hours ${g} minutes ${c} seconds <i id="heartbeat" class='fas fa-heartbeat'></i> <br> In such a soft and warm season, please accept my sincere blessing and deep concern for you.✨ `
        , document.getElementById("workboard") && (document.getElementById("workboard").innerHTML = h)
}
setInterval((() => {
    createtime()
}), 1e3);