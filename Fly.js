class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.0,
            length: 200
        }
        
        this.pointB = pointB
        this.fly = Constraint.create(options);
        World.add(world, this.fly);
    }
    
    

    display(){
       
if(this.fly.bodyA){
    var pointA = this.fly.bodyA.position;
    var pointB = this.pointB;
    push();
                
    stroke(48,22,8);
                
    strokeWeight(0);
    line(pointA.x  , pointA.y, pointB.x , pointB.y);
                    
            
                
    pop();
           }
      }
}
