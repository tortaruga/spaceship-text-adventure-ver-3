third (and i should hope final) version of a [text adventure game i coded when i was just learning coding](https://github.com/tortaruga/spaceship-text-adventure). how moving.

the story is always the same, number one because this is not a creative writing exercise but a coding one, and number two because even though it makes little sense i grew fond of it over time.

#### notes

now, as you might have noticed the code is considerably shorter in this version...
i am torn between two emotions:
- i am delighted that this time it was a breeze to code
- i want to kill myself when i think it was this easy and i spent 700+ lines of code trying to do something that was achievable in less than 50.

i **knew** there had to be a smarter way to do it; i **knew** there was no way somebody would sit through the hours and tediousness of that repetitive monstrous task like i was doing. could i have researched it better yes, but even if i had come across something similar to this, would i have understood any of it? 
probably not. i was lucky i knew what a function was.
my fingers did not thank me, nor did my eyes, and had i brain it would not have thanked me either, but lucky for it and unlucky for me, i once again prove myself to be utterly brainless.

anyway, i guess this wanting to bang my head against the keyboard is what they call progess, yes?

also, one of my questions finally has an answer (maybe):
```
<!-- access underscore directly -->
underscore.classList.add('flicker');

<!-- access underscore as last child of its parent -->
parentElement.lastElementChild.classList.add('flicker');

```
the reason why these two lines, which to me appear to be identical in purpose, yield different results might be that the underscore is created, appended and accessed all in the same function; this means that even though i create and append it before i try to access it, technically until i exit the function the DOM is not updated, and so when i try to access the element it does not behave as wanted. lastElementChild() however, doesn't give a damn about whether or not the DOM is updated, it just retrieves from memory the last appended thing, so it adds the class to the underscore without complaining as much about it.
or maybe it's just something completely different, who knows.

i decided to re-do this project because i realized there was a faster, smarter, more efficient way, and while i was there i figured it couldnt hurt to try and update the design to something only slightly less hideous, but i hope i will not be remaking this anymore because i'm starting to have nightmares about it
