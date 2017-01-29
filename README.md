# TextLife
A simple text game.
<a href="http://functionadvanced.github.io/TextLife/">Visit here</a>

![alt tag](https://functionadvanced.github.io/TextLife/demo.gif)
## Story Model
### Structure
The structure of the story is a directed graph.
<a href="http://functionadvanced.github.io/TextLife/diagram.html">See here</a>
### Data
The story data is stored in "story.json". Here is one sample entry of "story.json".
```json
"201701150029":{
  "question": "Australia is a wonderful place. After making that decision,you buy a flight ticket with [  ]",
  "choices": ["$200","$500","$1000"],
  "destination": ["201701161735", "201701161736", "201701161737"]
},
```
The number "201701150029" is the ID of this entry. The property "question" is a string shown to the player. The property of "choices" is an array which contains the choices that player can make. Typically, choices are shown in buttons so player can click button to make their choice. The propertiy of "destination" is also an array. It contains IDs of the destinations of each choices, respectively.
### Endings
The story has multiple endings. An ending entry looks like this.
```json
"201701161647":{
  "question": "Overwatch is so fun that you addict to it. After playing for 48 hours without sleeping, you die. [ENDING: Game Star]",
  "choices": ["Try Again!"],
  "destination": ["201701150005"]
},
```
There is only one choice of an ending entry ("Try Again"). And its only destination is the beginning of the story (node "201701150005"). Usually we identify a node as an ending like "[ENDING: Game Star]".
