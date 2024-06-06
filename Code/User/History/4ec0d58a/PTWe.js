var number_of_stars = 200
const max_delay = 4

const space = document.getElementById('space')
const max_x = space.clientWidth
const max_y = space.clientHeight

const offset_p = 0.08 * max_x
const offset_q = 0.08 * max_y
const max_p = max_x - (offset_p * 2)
const max_q = max_y - (offset_q * 2)
const base_step = 5
const number_of_steps = 300

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function removeItemFromArray(arr, i) {
    if (i > -1) {
      arr.splice(i, 1);
    }
    return arr;
  }
  

document.body.onload = createStars()

function spawnStar(x= Math.random() * max_x, y = Math.random() * max_y, falling=false){
    const new_star = document.createElement("div");
    new_star.classList.add('star')
    if (!falling){
        new_star.classList.add('blinking')
        new_star.style.animationDelay = (2 - (Math.random() * max_delay) )+ 's'
    } else {
        new_star.classList.add('falling')
    }

    new_star.style.top = y + 'px'
    new_star.style.left = x + 'px'
    new_star.style.backgroundColor = `rgb(${randomInt(226, 255)}, ${randomInt(226, 255)}, ${randomInt(226, 255)})`

    space.appendChild(new_star)
    document.getElementById('counter').innerText = number_of_stars
    return new_star
}

function createStars(){
    while (space.firstChild && (space.lastChild != document.getElementById('counter'))) {
        space.removeChild(space.lastChild);
    }
    for (let i = 0; i<number_of_stars ;i++){
        spawnStar()
    }
}

function spawnFallingStar(){
    const step = (Math.random > 0.5) ? base_step : -1 * base_step
    const a = randomInt(1, 3) / 3000
    const p = Math.round((Math.random() * max_p) + offset_p)
    const q = Math.round((Math.random() * max_q) + offset_q)
    console.log(`a: ${a}, p: ${p}, q: ${q}, step: ${step}`);

    const base_func = (a, p, q) => {
        return `${a}*(x-${p})*(x-${p}) + ${q}`
    }

    let parable = x => {
        return eval(base_func(a, p, q).replace('x', x))
    }

    const timer = ms => new Promise(res => setTimeout(res, ms))
    async function showStar(){

        var all_stars = []
        let rng = randomInt(1, 5)

        for (let i=0; i < number_of_steps; i++){
            x =(p - (number_of_steps * step / rng)) + (step * i)
            y = parable(x)

            var new_star = spawnStar(x, y, true).classList.add('getReal')
            all_stars.push(new_star)

            setTimeout(function () {
                const s = new_star;
                s.remove()
            }, 510);
            await timer(5)
        }
        for (const s of all_stars){
            console.log(s);
        }
    }    
    showStar()
}


document.addEventListener('keydown', e => {
    console.log(e.key)
    if (e.key == 'ArrowDown') {
        number_of_stars -= 10
        createStars()
    } else if (e.key == 'ArrowUp') {
        number_of_stars += 10
        createStars()
    } else if (e.key == 'ArrowLeft') {
        spawnFallingStar()
    }
})


