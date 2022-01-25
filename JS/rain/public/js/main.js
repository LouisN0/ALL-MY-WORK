function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function rain() {
    let amount = 1000;
    let body = document.querySelector('body');
    let i = 0;
    while (i < amount) {
        let drop = document.createElement('p');
        let a = document.createElement("a")
        a.innerText = getRandomInt(9)
        a.style.color = "#03A062"
        drop.appendChild(a)

        let size = Math.random() * 5;
        let posX = Math.floor(Math.random() * window.innerWidth);

        let delay = Math.random() * -20;
        let duration = Math.random() * 5;


        drop.style.width = 0.2 + size + 'px';
        drop.style.left = posX + 'px';
        drop.style.animationDelay = delay + 's';
        drop.style.animationDuration = 2 + duration + 's';

        body.appendChild(drop);
        i++;
    }
}

rain()