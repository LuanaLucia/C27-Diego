class Estilingue {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            lenght: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }

    display(){
        var posA = this.sling.bodyA.position
        var posB = this.pointB
        
        strokeWeight(3)
        line(posA.x,posA.y,posB.x,posB.y)
    }


}
