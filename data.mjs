export default {
    start: {
      message: '<p>You\'re late. Where have you been?</p>',
      options: [
        {choice: '...', next: 'instructions_one'}
      ]
    },

    instructions_one: {
        message: '<p>What, you think we have all day? You need to fix the thermo-proto-solar engine before the alien pirate spaceship bursts into flames.</p>',
        options: [
            {choice: 'Thermo-proto what...?', next: 'instructions_two'}
        ]
    },

    instructions_two: {
      message: '<p>Thermo-robo-lobar engine, you dim-wit. You have no idea how to do that, right? Well, that is none of my business. Good luck!</p>',
      options: [
        {choice: 'Wait...!', next: 'two_doors'}
      ],
    },

    two_doors: {
      message: '<p>You are on an alien pirate spaceship, of course.</p> <p>There\'s a door to your left with a sign that says "Come on in!", and one to your right that says "Don\'t you even think about it". Which do you choose?</p>',
      options: [
        {choice: 'Left', next: 'left'}, {choice: 'Right', next: 'right'}
       ]
    },
    
    right: {
        message: '<p>Is it rebellious spirit or are you just stupid?</p> <p>Anyway, Gobble the Gobbling Monster gobbles you up. I hope you\'re proud of your choices.</p>',
        options: [
            {choice: 'Restart', next: 'start'}
        ],
    },    
    
    left: {
        message: '<p>A little elf with glowing blue skin is doing laudry.</p> <p>He looks up at you and starts laughing histerically.</p>',
        options: [
            {choice: 'What, what is it??', next: 'why_am_i_being_ridiculed'},
            {choice: 'Who are you?', next: 'who_are_you?'},
            {choice: 'Stop laughing you under-evolved smurf!', next: 'smurf'},
        ]

    },
    
    'why_am_i_being_ridiculed': {
      message: '<p>He laughs even harder, pointing at you and rolling on the floor.</p>',
      options: [
        {choice: 'Stop laughing you under-evolved smurf!', next: 'smurf'}
      ],
    },
    
    'who_are_you?': {
      message: '<p>"That\'s none of your business. Here, take this key and this bag of chips and hurry to the techno roboidical room."</p>',
      options: [
        {choice: 'The what room again?', next: 'what_room'},
        {choice: 'How the hell should I know...!?', next: 'where'},
        {choice: 'Shut up and take the key and chips.', next: 'take_key'},
        ],
    },
    
    smurf: {
      message: '<p>He does as you request. But then he pulls an object from who knows where that looks suspiciously like a bazooka and blasts your impolite ass to pieces. Seriously, when did it seem like a good idea to insult a glowing creature on an alien spaceship?!?</p>',
      options: [{choice:'Restart', next: 'start'}],
    },

    what_room: {
      message: '<p>"<em>The</em> room, you dumbass! The one you\'re supposed to be in in five minutes if you don\'t want Madama Bone Cracker to crack your bones!"</p>',
      options: [
        {choice: 'Where the hell...?!', next: 'where'},
        {choice: 'Shut up and take the key and chips.', next: 'take_key'},
      ]
    },

    where: {
      message: '<p>"Oh, you\'ll find it, <em>eventually</em>... But I\'d try to find it in less than five minutes if I were you!"</p>',
      options: [
        {choice: 'Listen...', next: 'listen'}
      ],
    },
    
    listen: {
      message: '<p>He starts to look quite annoyed. He reaches a hand in a pocket he does not have because he is not wearing any clothes (laundry) and starts pulling out something alarmingly similar to a bazooka</p>',
      options: [
        {choice: 'Shut up and take the key and chips.', next: 'take_key'}
      ],
    }, 
    
    take_key: {
      message: '<p>You roam this spectral retro futuristic bluish maze of a spaceship until you find yourself in front of two aliens guarding a door.</p>',
      options: [
        {choice: 'Ask what they\'re guarding', next: 'ask_guards'},
        {choice: 'Try to force your way in', next: 'break_in'},
        {choice: 'Pretend you\'ve just remembered something and go right back where you came from.', next: 'go_back'}
        ],
    },
    
    ask_guards: {
      message: '<p>"A door." Duh.</p>',
      options: [
        {choice: 'Try to force your way in', next: 'break_in'},
        {choice: 'Pretend you\'ve just remembered something and go right back where you came from.', next: 'go_back'},
       ],
    },
    
    break_in: {
      message: '<p>What the hell were you thinking? This door doesn\'t even have anything to do with you! You\'re just wasting time while you should be reaching the robokobo flame-flamboco room and prevent this ship from exploding in your face! Jeez!</p><p>Anyway, in case it wasn\'t obvious already, you\'re dead. Acting like a fool instead of doing your job. I am so disappointed in you</p>',
      options: [{choice: 'Restart', next: 'start'}],
    },
    
    go_back: {
      message: '<p>Chicken. Anyway, at least you\'re not <em>dead</em> like your usual...</p><p>You hear a melodious singing, a voice so sweet it moves you to tears and makes the tip of your nose tremble.</p>',
      options: [
        {choice: 'Follow the voice', next: 'follow_voice'},
        {choice: 'I dont\'t give no fuck about voices', next: 'fuck_them_voices'},
        ],
    },

    follow_voice: {
      message: '<p>You\'re not that good at... well, <em>anything,</em> but the voice seems to be getting closer, even though you\'re <em>clearly</em> always choosing the wrong direction...</p><p>It\'s almost as if... it <em>wanted</em> to be found...</p>',
      options: [
        {choice: 'You know what, nevermind, I uh... have... things to do', next: 'nevermind'},
        {choice: 'Keep following', next: 'keep_following'},
        {choice: 'Stop a minute to use your brain', next: 'stop'},
        ],
    },

    nevermind: {
      message: '<p>Good. Problem is you\'ve lost what little sense of direction you had in the first place, and this spaceship is starting to look more and more like a labyrinth designed by a sadistic programmer and less like whatever the hell an alien pirate space ship is supposed to look like.</p>',
      options: [
        {choice: 'Throw up', next: 'throw_up'},
        {choice: 'Enter the first room you find on your left', next: 'first_room'},
        {choice: 'Take a potato chip... and <em>eat</em> it.', next: 'potato_chip'},
      ],
    },

    keep_following: {
      message: '<p>Have you never heard of sirens? mermaids? deceiving creatures that lure the senseless dim-wits like yourself to a painful death through their enchanting lullabies? where the hell have you lived?</p><p>Anyway, this is just an alien mermaid, not a regular one, and a pirate alien on top of that, so she won\'t drown you or eat you. She\'ll try to rob you and then skin you alive in anger when she finds out you have absolutely nothing, not even an acorn in your pockets.</p>',
      options: [
        {choice: 'Restart.', next: 'start'},
        ],
    }, 

    stop: {
      message: '<p>You don\'t have a minute, and you clearly don\'t have a brain either. You\'re horribly late for the rumba-koomba-shalumba room, and Madama Bone Cracker is <em>not</em> of patient disposition. You do not go to the mountain, but the mountain <em>does</em> come to you, and breaks every single one of your bones, alphabetically.</p>',
      options: [
        {choice: 'Restart.', next: 'start'},
       ],
    },
    
    throw_up: {
      message: '<p>Eww, gross! Does it seem like a respectable thing to do, puking on the freshly cleaned floor of an alien pirate retro futuristic spaceship as if it were a public toilet, or worse, your own home? Do you think the floors clean themselves? Or that the people in charge of keeping them clean <em>enjoy</em> scrubbing away your half-digested breakfast? were you raised in a jungle by orangutans? I should just make you start it all over again! That\'s it, i\'m killing you. Bye. Maybe that\'ll knock some sense into you.</p>',
      options: [
        {choice: 'Restart.', next: 'start'},
        ],
    },

    first_room: {
      message: '<p>Oh no! This is the Turquoise People Muncher\'s room! There he is! Run!!!!!!</p>',
      options: [
        {choice: 'Run.', next: 'run'},
        {choice: 'Don\'t worry, he only munches turquoise people.', next: 'dont_run'},
      ],
    },


    potato_chip: {
      message: '<p>You feel a power unlike any you\'ve ever felt or imagined. It courses through your veins as you feel like the god of a new world. The voice of the siren becomes more and more distant, the walls stop closing in on you and the suffocatingly narrow hallway becomes larger and more illuminated. Right in front of you you see a door, and half a dozen neon signs pointing at it:  "Roomba kaloomba!", "Shimba Shalimba Technical Robo-Room", "MamboCarambo Sedano e Cilantro!", "This is the room you\'re looking for", "The jibby-tippy, lollo-lippy, whatever just get the hell inside already". </p>',
      options: [
        {choice: 'Get in.', next: 'get_in'},
    ],
    },

    fuck_them_voices: {
      message: '<p>Wow, what a romantic soul of poetic disposition... Anyway, you keep looking for the Zoomba Loomba Techno Disco Room, and soon enough you see a door that, you suspect, is the one you\'re looking for. This suspicion is born because of the very subtle neon signs poiting at it: "Fucking finally, you moron", "Oh wow, it only took you three goddamn years!", "I honestly forgot you were even supposed to come".</p>',
      options: [
        {choice: 'Get in.', next: 'get_in'},
        ],
    },

    run: {
      message: '<p>My god, you call <em>that</em> running? whatever. Lucky for you the Turquoise People Muncher is kinda slow, and he also thought you were a monkey and not a human, so it didn\'t even try to chase you. Sometimes growing up in a jungle raised by orangutans can come in handy.</p><p>While you run screaming like an idiot and waving your arms about as if trying to shake off a tarantula from your body, you slam your stupid nose against a closed door. There\'s a sign on it that reads: "Shut up already, what is all this noise! You\'re late. get yo ass in."</p>',
      options: [
        {choice: 'Get in.', next: 'get_in'},
        ],
    },

    dont_run: {
      message: '<p>...</p><p>I... have no words. Do you think I told you to run because I like seeing you throw your pathetic little legs about this place while you hiss like a frightened kettle? The one time I try to <em>help</em>... Well, you\'re obviously being munched to death right now, so let\'s just talk later.</p>',
      options: [
        {choice: 'Restart.', next: 'start'},
        ],
    },

    get_in: {
      message: '<p>Well, well, well... look who\'s finally here! Madama Bone Cracker is playing Shanghai with the Captain, and that\'s the only reason she doesn\'t snap your spine, as you are definitely, extremely, unforgivably late. Without raising his gaze from the Shanghai game, the Captain tells you: "You\'re going to need to talk to the chef. But don\'t let him eat you". He throws a torchlight at you. </p>',
      options: [
        {choice: 'Ask some stupid question like you usually do.', next: 'stupid_question'},
        {choice: 'Go find the chef.', next: 'find_chef'},
        {choice: 'Demand a map of the damn place.', next: 'map'},
        ],
    },

    stupid_question: {
      message: '<p>They don\'t even acknowledge that you\'re still here. You\'re like a flea, less than a flea if possible. </p>',
      options: [
        {choice: 'Go find the chef.', next: 'find_chef'},
        {choice: 'Demand a map of the damn place.', next: 'map'},
        ],
    },
      
    map: {
      message: '<p>Excuse me? I don\'t think you\'re in the position to <em>demand</em> anything. Besides, a map would be useless. The place switches constantly between different planes of reality, going from one possible layout to the next each second. I thought that would be obvious by now even to someone like you.</p>',
      options: [
        {choice: 'Go find the chef.', next: 'find_chef'},
        ],
    },

    find_chef: {
      message: '<p>So, what did the Captain mean by "Don\'t let him eat you"? Aren\'t you curious? Nervous? Scared? Do you have a brain at all? Anyway, it\'s not like you got any choice. You go looking for the chef, but you don\'t know what he looks like, what his name is, where he could be, I mean, couldn\'t you ask while you were there? you just, "Find the chef", "Sure!", and left? How exactly are you gonna find the chef, pray tell? What\'s your plan here? You don\'t have one. Of course you don\'t. Why would you? You\'re just a dim-wit.</p>',
      options: [
        {choice: '...', next: 'let_me_rant'},
      ],
    },

    let_me_rant: {
      message: '<p>Oh, look! Here\'s the chef. That boar face and the chicken legs clearly indicate that he\'s a chef. Go on, talk to him.</p>',
      options: [
        {choice: 'So, uh... the Captain sent me to talk to you.', next: 'talk_chef'},
        {choice: 'Are you the chef?', next: 'ask_chef'},
    ]  
    },

    talk_chef: {
      message: '<p>"I ain\'t got no Captain. I take no orders and I don\'t talk to food". So, turns out he wasn\'t the chef after all. The boar face and chicken legs got me confused. He\'s just a hungry alien roaming the spaceship for no reason at all. You get eaten. Sorry about that.</p>',
      options: [
        {choice: 'Restart.', next: 'start'},
        ],
    },
    
    ask_chef: {
    
      message: '<p>"No. Are you the food?"</p>',
      options: [
        {choice: 'Hell no', next: 'hell_no'},
    ],  
    },

    hell_no: {
      message: '<p>"Pity. I\'ll eat you anyway."</p>',
      options: [
        {choice: 'I taste horrible.', next: 'bad_taste'},
        {choice: 'Run!!!!!!', next: 'flee_at_once'},
        ],
    },

    bad_taste: {
      message: '<p>"...Yeah, I can tell... So you\'re looking for the chef, eh? He\'s in the next room. Tell him to give me someone to eat that tastes better than you"</p>',
      options: [
        {choice: 'Thank you sir, yes sir.', next: 'thank_you'},
        {choice: 'Hey! I\'ll let you know Mr Monster that I am the most scrumptious, delicious, mouth-watering snack on the whole freaking ship!', next: 'sell_yourself'},
        ],
    }, 
    
    flee_at_once: {
      message: '<p>Wait, where the hell are you going now?? Your legs are not that fast, you know? You could at least try to cunningly think your way out of the situation. Ever heard of brains? neurons? Well, whatever. The alien caught you. See you later!</p>',
      options: [
        {choice: 'Restart.', next: 'start'},
    ],
    },
    
    thank_you: {
      message: '<p>Pathetic. Anyway, in the next room a boar-faced, eagle-legged alien is waiting for you. He looks you up and down as if barely restraining himself from biting you. "You must be the dinne—uhm, the technical-issue-fixer, I mean". He is cutting onions with a very sharp knife. "I have been told to give you something." He produces a carrot from his pocket. </p>',
      options: [
        {choice: 'Take the carrot', next: 'carrot'},
        {choice: 'Give him the chips.', next: 'want_a_chip'},
        ],
    },
    
    sell_yourself: {
      message: '<p>Good job. Very well done. The perfect moment to stand up for yourself. The one time your grovelling nature could have served you well, you had to go and decide to fight against bullies. Your talent for wrong choices is honestly inspiring. You\'re still dead tho.</p>',
      options: [
        {choice: 'Restart.', next: 'start'},
        ],
    },
    
    want_a_chip: {
      message: '<p>"I usually eat technical-issue-fixers, but I\'ll give it a try..."</p><p>His head is flooded by the light of pure knowledge and understanding. He is transfixed. His eyes are <em>seeing</em> when before they were merely looking. This is your chance.</p>',
      options: [
        {choice: 'Take the carrot and GET THE HELL OUT AS FAST AS FREAKING LIGHTENING.', next: 'get_hell_out'},
    ],
    },
    
    carrot: {
      message: '<p>You take the carrot from his big hand and you can\'t help but notice the long, sharp claws, as well as the long, sharp look he gives you as you start to back away... Is it your imagination or is he licking his lips? Are your ears playing a trick on you, or did you just hear his stomach grumble? Well champ, are you gonna flee or are we gonna stay here admiring the beast until it eats us?</p>',
      options: [
        {choice: 'Run!!!!!!', next: 'flee_from_chef'},
        {choice: 'Look, boss, I wouldn\'t eat me if I were you—', next: 'use_cunning'},
    ],
    },
    
    flee_from_chef: {
      message: '<p>Kick them legs! Higher! Faster!! He\'s gonna get you! Go!!! Don\'t stop! You can do it! I believe in you! ...No, wait, I was wrong... No, you actually might... Nope, I was joking... Yes, yes, good move! Show him! Right that way! No, not <em>that</em> way, that\'s the Brain Slurper\'s Cave!! Not that he would find much to slurp with you... </p>',
      options: [
        {choice: 'Stop to catch your breath', next: 'catch_breath'},
        {choice: 'Keep running as if your damn life depended on it (it does).', next: 'keep_running'},
        ],
    },
    
    use_cunning: {
      message: '<p>Really? Does this look like the moment to try out your persuasive skills? Do you <em>enjoy</em> dying in the stupidest ways? are you trying to stress me out? i think you\'re trying to stress me out. you\'re definitely succeeding in stressing me out.</p>',
      options: [
        {choice: 'Restart', next: 'start'},
        ],
    },
    
    catch_breath: {
      message: '<p>...</p><p>What. Why. You were almost safe... Now the monsters will get to you... Oh... Oh, no, the Brain Slurper took one sniff at you and immediately understood there\'s nothing to feast on, and the chef is distracted by the sight of that juicy Brain Slurper right in front of him... They both left you alone. Tch. Pathetic. You\'re not even worth eating.</p>',
      options: [
        {choice: '...', next: 'get_hell_out'},
        ],
    },
    
    keep_running: {
      message: '<p>I mean, you really didn\'t need to run <em>that</em> hard. You could have wasted a second or two to catch your breath, and now your heart wouldn\'t be pumping like crazy in your throat, and you wouldn\'t be feeling this weak and dizzy, and you wouldn\'t collapse on the ground and die of a heart attack. I mean, choices.</p>',
      options: [
        {choice: '...', next: 'hello'},
        ],
    },

    hello: {
      message: '<p>Am I annoying you? Are you fed up with this stupid game? would you like to snap my neck and kick my lifeless body? jeez, what\'s wrong with you... It\'s not like i am <em>forcing</em> you to play, you\'re the one who keeps on clicking "Restart". Why don\'t you take responsibilily for your actions? You are the one who keeps making poor choices, so stop blaming my insufferable arbitrariness and deceiving tone for your stupid deaths. Bitch.</p>',
      options: [
        {choice: 'Restart? <3', next: 'start'},
    ],
    },
    
    get_hell_out: {
      message: '<p>Wow, it has been a while since you last died... I am impressed. You can rest a bit now. You deserve it.</p><p>On second thought, I don\'t have all day, so let\'s get right into it: look! A ghost!!!</p>',
      options: [
        {choice: 'Where?!?!', next: 'what_ghost'},
        ],
    },
    
    what_ghost: {
      message: '<p>Quick, use the torchlight!!</p>',
      options: [
        {choice: 'But it\'s not dark in here...', next: 'not_dark_yet'},
        {choice: 'Stop bitching and use the damn torch', next: 'use_torch'},
        ],
    },
    
    
    not_dark_yet: {
      message: '<p>I am going to punch you so hard.</p>',
      options: [
        {choice: 'Stop bitching and use the damn torch', next: 'use_torch'},
        ],
    },
    
    use_torch: {
      message: '<p>All the light gets sucked in your torchlight as soon as you turn it on, and in the spooky darkness all you see is a spooky glowing blue ghost. It is quite cute.</p>',
      options: [
        {choice: 'Pet the ghost', next: 'pet_ghost'},
        {choice: 'Scream like a macho man very insecure about his virility (it goes like this: "kyaaaaaaaaa!!!"', next: 'kyaa'},
    ],
    },
    
    pet_ghost: {
      message: '<p>it bites you.</p>',
      options: [
        {choice: 'Scream like a macho man very insecure about his virility (it goes like this: "kyaaaaaaaaa!!!"', next: 'kyaa'},
    ],
    },
    
    kyaa: {
      message: '<p>The ghost chuckles. "Hi! what do you want?"</p>',
      options: [
        {choice: 'Have a nervous breakdown and start confusingly listing all your adventures up to this point with tears streaming down your face', next: 'breakdown'},
        {choice: '...I have no idea.', next: 'no_idea'},
        ],
    },
    
    
    breakdown: {
      message: '<p>Oh wow. What a work of art.</p><p>The ghost gingerly pats you on the head."Do you want a cookie?"</p>',
      options: [
        {choice: 'Accept the cookie', next: 'accept_cookie'},
        {choice: 'Refuse the cookie', next: 'refuse_cookie'},
        ],
    },
    
    no_idea: {
      message: '<p>"...Well, I\'ll... leave you to your things, then..." The ghost starts disappearing.</p>',
      options: [
        {choice: 'Have a nervous breakdown and start confusingly listing all your adventures up to this point with tears streaming down your face', next: 'breakdown'},
    ],
    },
    
    accept_cookie: {
      message: '<p>This is not a cookie. It appears to be some sort of device with a glowing red button and the words "You are supposed to push it, idiot" carved on it.</p>',
      options: [
        {choice: 'Push the button', next: 'push_button'},
        {choice: 'You damn fool. Just push the goddamn button.', next: 'push_button'},
    ],
    },
    
    refuse_cookie: {
      message: '<p>The ghost appears deeply saddened by your refusal. I hope you are proud of yourself. Poor little ghosty, it was just trying to be nice and cheer you up because you were flooding the ship with your snot sobbing like a five year old about who knows what exactly. Now the ghost is sobbing uncontrollably.</p>',
      options: [
        {choice: 'Console the ghost.', next: 'console_ghost'},
    ],
    },
    
    push_button: {
      message: '<p>You get transported to a very technical-looking room, full of weird computer screens and buttons and flickering lights and funny sounds and fifteen keyboards, all missing the letter F. On one of the screens, in big scary letters, you read the words "DANGER. ERROR. FIX ME OR WE GO BOOM". Ha. Whatcha gonna do now, my pretty gender-neutral little friend?</p>',
      options: [
        {choice: 'Slam your head on the keyboard', next: 'slam_head'},
        {choice: 'Start pushing random buttons', next: 'random_buttons'},
        {choice: 'Ask the heavens for help', next: 'ask_heavens'},
        ],
    },
    
    
    console_ghost: {
      message: '<p>You try to pat the ghost\'s head, but your hand goes right through it. So you search through your pockets for something that might cheer him up, but the only thing you find is a key...</p><p>The ghost\'s eyes light up (well, not really, they are two black holes, nothing would light them up, but it is very interested in the key). "I know where the key goes!"</p>',
      options: [
        {choice: 'Ask for clarification', next: 'clarification'},
        ],
    },
    
    
    clarification: {
      message: '<p>"Follow me!" The ghost leads you to a very technical-looking room, filled with computer screens and lights and noises and bla bla bla, and you see on one screen a very comforting message:"WE ABOUT TO GO BOOM. FIX ME PLEASE".</p>',
      options: [
        {choice: 'Slam your head against the keyboard', next: 'slam_head'},
        {choice: 'Let ghosty save the day', next: 'leave_it_to_ghosty'},
    ],
    },
    
    
    slam_head: {
      message: '<p>Your head-slam types "fuck this shit". The universe stops a moment in shock due to the high improbabilty of this event (accentuated by the absence of the F key on all keybords), tries to come to terms with it, fails, and then collapses. Congratulations. You have single-handedly killed everything that ever was or will be.</p>',
      options: [
        {choice: 'PLAY AGAIN?', next: 'start'},
        ],
    },
    
    random_buttons: {
      message: '<p>Hey, good job! The red menacing message is gone! The weird noises stop and the ship seems to be less close to exploding than it was up until now. You\'re hailed as the best technical-issue-fixer in the galaxy and get offered a job on Her Majesty The Galactic Empress\'s Alien Pirate Space Ship. Unfortunately, your luck is short-lived, and you get executed as a scammer when it becomes clear to everyone that you have no freaking clue what you are doing. Oops.</p>',
      options: [
        {choice: 'PLAY AGAIN?', next: 'start'},
        ],
    },
    
    ask_heavens: {
      message: '<p>An annoyed voice answers your screams: "The key, you dumbass! And keep it down, I\'m trying to sleep up here."</p><p>Key? Oh, yes, the key! That elf gave you a key! You\'re so dumb you forgot about it all this time! Quick, look for a keyhole!</p>',
      options: [
        {choice: 'Put key in keyhole', next: 'use_key'},
        ],
    },
    
    leave_it_to_ghosty: {
      message: '<p>"The key! It needs to be put in that keyhole! The prophecy foretold that a great catastrophe would be stopped when a fool with a totally useless carrot in his pockets and mustaches drawn on their face with a sharpie returns the key to its place!" (Oh, yeah, guess I should tell you somebody drew a nice pair of mustaches on your stupid face with a sharpie.)</p>',
      options: [
        {choice: 'Put key in keyhole', next: 'use_key'},
        
        ],
    },
    
    use_key: {
      message: '<p>A mystical light floods the place. Angels are singing somewhere in their dim abodes, the noises of the technical stuff stop and the red ominous words disappear. In their place, this message can be read: "Yuhuu, nice job. Now get the hell out of here". You did it. You saved the ship. I\'m proud of you. You...</p><p>You hit random keys on the keyboard on accident while celebrating. You type "my god that was a bumpy ride, wasn\'t it?". The universe stops a moment in shock due to the high improbabilty of this event, tries to come to terms with it, fails, and then collapses. Congratulations. You have single-handedly killed everything that ever was or will be. </p>',
      options: [
        {choice: 'PLAY AGAIN?', next: 'start'},
        
        ],
    },
}
  