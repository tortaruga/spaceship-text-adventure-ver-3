import scenes from './data.mjs'; 
const playBtn = document.getElementById('play-game');

function playScene(sceneKey) {
    document.querySelector('.choices').innerHTML = '';

    const scene = scenes[sceneKey];
    
    const parent = document.getElementById('message');
    parent.innerHTML = scene.message;
    
    const underscore = document.createElement('span');
    underscore.textContent = '_';
    underscore.classList.add('flicker');
    parent.appendChild(underscore);

    console.log(parent.children);
    const text = parent.textContent;
    document.getElementById('message').innerHTML = '';

    typingEffect(parent, text);
    parent.lastElementChild.classList.add('flicker');

    scene.options.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.innerHTML = option.choice; 
        document.querySelector('.choices').appendChild(optionButton);
        optionButton.addEventListener('click', () => {
            playScene(option.next)
        })
    });
}

playBtn.addEventListener('click', () => playScene('start'));


function typingEffect(parent, textContent) {

    let delay = 0;

    const chars = textContent.split('');

    chars.forEach(char => {
        delay += .05;
        const span = document.createElement('span');
        span.innerHTML = char; 
        parent.appendChild(span);
        span.classList.add('animation');
        span.style.animationDelay = delay + 's';
    })
}
