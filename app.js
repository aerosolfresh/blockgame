
// Shrink board as game progresses 345
// adjust scoreKeep to track score to adjust
// change move distance + boundaries
// High score and new game/save game

var app = new Vue({
    el:"#app",

    data:{
        piece_x:0,
        piece_y:0,
        goal_x:0,
        goal_y:0,
        score:4999,
        list_beginner:[
            "Awesome Sauce!",
            "Amazing Job!",
            "Wow!",
            "Great Work!",
            "Epic Score!",
            "Wowza!",
            "Incredible!",
        ],
        list_intermediate:[
            "Amazing!",
            "You're a Rockstar!",
            "You're Killing It!",
            "You're a Legend!",
            "You're Nuts!",
            "This is Epic!",
            "Can't Believe It!",
            "You've Got Skill!",
        ],
        list_pro:[
            "Ka-Chow!",
            "PogChamp!",
            "You're a Legend!",
            "This is Epic!",
            "You're a Pro!",
            "Ph1lza Would Be Proud!",
            "Cracked at the Craft!",
            "1000 IQ Moment!",
            "Definitely Poggers!",
            "You're Insane!",
            "You almost have 0.00021% of Shaggy's Power",
            "You're Almost There!"
        ],
        list_beyond:[
            "You Can Stop Now",
            "You Don't Need To Play Anymore",
            "Why Are You Still Playing?",
            "Seriously, You Can Stop Now",
            "Are You Okay?",
            "Why Are You Still Here?",
            "You Can Go Now",
            "Please Get Some Help",
            "It's Okay To Stop Now",
            "Please Stop Playing",
            "Are You Done Yet?",
        ],
        testcomment:"",
        comment:""

    },
    created: function(){
        window.addEventListener("keydown", this.keyEvents);
        this.goal_x = Math.floor(Math.random()*18) *25;
        this.goal_y = Math.floor(Math.random()*18) *25;
    },
    methods:{
        keyEvents: function(event){
            if(event.which == 39){
                event.preventDefault()
                this.moveRight();
            } else if(event.which == 37){
                event.preventDefault()
                this.moveLeft();
            } else if(event.which == 38){
                event.preventDefault()
                this.moveUp();
            } else if(event.which == 40){
                event.preventDefault()
                this.moveDown();
            }
        },
        moveRight: function(){
            if (this.piece_x < 425){
                this.piece_x +=25;
            } else {
                this.piece_x +=0;
            }
        },
        moveLeft: function(){
            if (this.piece_x > 0){
                this.piece_x -=25;
            } else {
                this.piece_x -=0;
            }
        },
        moveUp: function(){
            if (this.piece_y > 0){
                this.piece_y -=25;
            } else {
                this.piece_y -=0;
            }
        },
        moveDown: function(){
            if (this.piece_y < 425){
                this.piece_y +=25;
            } else {
                this.piece_y +=0;
            }
        },
    },

    computed:{
        pieceStyle: function(){
            return{
                left: this.piece_x + "px",
                top:this.piece_y + "px"
            }
        },
        goalStyle: function(){
            return{
                left: this.goal_x + "px",
                top:this.goal_y + "px"
            }
        },
        scoreKeep: function(){
            if(this.piece_x == this.goal_x && this.piece_y == this.goal_y){
                this.score++;
                this.piece_x = 0;
                this.piece_y = 0;
                this.goal_x = Math.floor(Math.random()*18) *25;
                this.goal_y = Math.floor(Math.random()*18) *25;
            }
        },
        scoreCheck: function(){
            // specifics 3, 69, 420, 690,
            // 10, 15, 25, 75, 50,100
            if (this.score == 10 || this.score == 15){
                var beginnerChosen = Math.floor(Math.random() * this.list_beginner.length);
                this.comment = this.list_beginner[beginnerChosen];
            } else if (this.score > 10 && this.score % 25 == 0 && this.score < 500){
                var beginnerChosen = Math.floor(Math.random() * this.list_beginner.length);
                this.comment = this.list_beginner[beginnerChosen];
            } else if (this.score >= 500 && this.score % 25 == 0 && this.score < 750){
                var intermediateChosen = Math.floor(Math.random() * this.list_intermediate.length);
                this.comment = this.list_intermediate[intermediateChosen];
            } else if (this.score >= 750 && this.score % 25 == 0 && this.score < 1000){
                var proChosen = Math.floor(Math.random() * this.list_pro.length);
                this.comment = this.list_pro[proChosen];
            } else if (this.score == 3){
                this.comment = "Three in a Row!";
            } else if (this.score == 69 || this.score == 690){
                this.comment = "Nice!";
            } else if (this.score == 420){
                this.comment = "Funny Number!" 
            } else if (this.score == 1000){
                this.comment = "WINNER!";
            } else if (this.score == 1005){
                this.comment = "You're Still Playing?";
            } else if (this.score > 1005 && this.score % 10 == 0 && this.score < 5000){
                var beyondChosen = Math.floor(Math.random() * this.list_beyond.length);
                this.comment = this.list_beyond[beyondChosen];
            } else if (this.score >= 5000){
                this.comment = "GAME OVER";
                this.score = "N/A";
                this.goal_x = 475;
                this.goal_y = 225;
            } else {
                this.comment = "";
            }
        }
    }
})