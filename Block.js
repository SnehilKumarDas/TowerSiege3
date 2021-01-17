class Block{
    constructor(x,y,w,h){

        var options = {

            restitution : 0.4,
            friction : 0
        }
        this.body = Bodies.rectangle(x,y,w,h,options)
        
        this.w = w
        this.h = h
        this.visibility = 255
        World.add(world,this.body)
 }

     display(){

        if(this.body.speed < 3){

            push(); 
            stroke("green");
             fill("white"); 
             translate(this.body.position.x,this.body.position.y) 
             rotate(this.body.angle) 
             rect(0,0,this.w,this.h) 
             pop();
        }

        else{ 
            World.remove(world, this.body); 
            push(); 
            this.visibility = this.visibility-5; 
            tint(255,this.visibility); 
            pop(); }
     }

     score(){

        if(this.visibility<0 && this.visibility >-105){

            score++
        }
     }


}