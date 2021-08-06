const GRASS = 0;
const PATH = 1;

const tileFill = [[50,150,75],("#705535")]

function drawTile(type,x,y,r)
{
    x += 0.5;
    y += 0.5;
    push();
    stroke(0);
    fill(tileFill[type]);
    rectMode(CENTER);
    rect(width/2 + r*x, height/2+r*y,r,r);
    pop();
}