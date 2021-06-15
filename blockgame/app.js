var app = new Vue({
    el:"#app",

    data:{
        piece_x:0,
        piece_y:0,
        goal_x:0,
        goal_y:0,
        score:0,
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
        }
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
            if (this.score == 3){
                this.comment = "Three in a Row!";
            } else if (this.score == 10){
                this.comment = "Awesome Sauce!";
            } else if (this.score == 15){
                this.comment = "Amazing Job!";
            } else if (this.score == 25){
                this.comment = "Wow!";
            } else if (this.score == 50){
                this.comment = "You're a Rockstar!";
            } else if (this.score == 69){
                this.comment = "Nice!";
            } else if (this.score == 75){
                this.comment = "You're Killing It!";
            } else if (this.score == 100){
                this.comment = "You're a Legend!";
            } else if (this.score == 250){
                this.comment = "POG!";
            } else if (this.score == 420){
                this.comment = "Funny Number!";
            } else if (this.score == 500){
                this.comment = "You've Got Skill!";
            } else if (this.score == 690){
                this.comment = "Nice!";
            } else if (this.score == 750){
                this.comment = "You're Insane!";
            } else if (this.score == 1000){
                this.comment = "WINNER!";
            } else if (this.score == 1001){
                this.comment = "You're Still Playing?";
            } else if (this.score == 1005){
                this.comment = "You Can Stop Now";
            } else if (this.score == 1010){
                this.comment = "You Don't Need To Play Anymore";
            } else if (this.score == 1015){
                this.comment = "Why Are You Still Playing?";
            } else if (this.score == 1020){
                this.comment = "Seriously, You Can Stop Now";
            } else if (this.score == 1025){
                this.comment = "Are You Okay?";
            } else if (this.score == 1030){
                this.comment = "Please Get Some Help";
            } else if (this.score == 1035){
                this.comment = "Why Are You Still Here?";
            } else if (this.score == 1040){
                this.comment = "You Can Go Now";
            } else if (this.score == 1045){
                this.comment = "It's Okay To Stop Now";
            } else if (this.score >= 1050 && this.score < 2000){
                this.comment = "Please Stop Playing";
            } else if (this.score == 2000){
                this.comment = "10";
            } else if (this.score == 2001){
                this.comment = "9";
            } else if (this.score == 2002){
                this.comment = "8";
            } else if (this.score == 2003){
                this.comment = "7";
            } else if (this.score == 2004){
                this.comment = "6";
            } else if (this.score == 2005){
                this.comment = "5";
            } else if (this.score == 2006){
                this.comment = "4";
            } else if (this.score == 2007){
                this.comment = "3";
            } else if (this.score == 2008){
                this.comment = "2";
            } else if (this.score == 2009){
                this.comment = "1";
            } else if (this.score == 2050){
                this.comment = "Are You Gone Yet?";
            } else {
                this.comment = "";
            }
        }
    }
})