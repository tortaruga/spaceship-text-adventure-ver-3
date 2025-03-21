import scenes from './data.mjs'; 

const playBtn = document.getElementById('play-game');
playBtn.addEventListener('click', () => playScene('start'));

function playScene(sceneKey) {
    // clear monitor from previous message
    document.querySelector('.choices').innerHTML = '';

    const scene = scenes[sceneKey];
    const parent = document.getElementById('message');
    // store message 
    parent.innerHTML = scene.message;
    
    // add underscore
    parent.appendChild(createUnderscore());

    const text = parent.textContent;
    // clear message or it gets displayes twice
    document.getElementById('message').innerHTML = '';

    // add typing effect
    typingEffect(parent, text);
    // add flickering effect to underscore
    parent.lastElementChild.classList.add('flicker');

    // add option buttons 
    scene.options.forEach(option => {
        createOptions(option);
    });
}

function createOptions(option) {
    const optionButton = document.createElement('button');
    optionButton.innerHTML = option.choice; 
    document.querySelector('.choices').appendChild(optionButton);
    optionButton.addEventListener('click', () => {
        playScene(option.next)
    })
}

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

function createUnderscore() {
    const underscore = document.createElement('span');
    underscore.textContent = '_';
    underscore.classList.add('flicker');
    return underscore;
}