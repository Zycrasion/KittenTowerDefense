function uiScaleDivWidth()
{
    return width/__UISCALE__;
}

function uiScaleDivHeight()
{
    return height/__UISCALE__;
}

class UI
{
    constructor(title="Kitten Tower Defense")
    {
        this.title = title;
        this.infoText = new UIText(__UISCALE__/2,5,this.title + " Version: " + __VERSION__ + " Developed By: " + __AUTHOR__,35);
        this.infoPanel = new UIPanel(0,0,__UISCALE__,10,[this.infoText]);
    }

    drawGameUI()
    {
        this.infoPanel.draw();
        push();
        fill(255);
        noStroke();
        textAlign(CENTER,CENTER);
        textSize(width/35)
        frameAverage += 1/(deltaTime*0.001);
        text(Math.round(frameAverage/frameCount),width/2,height/2);
        pop();
        
    }
}


class UIPanel
{
    constructor(x,y,w,h,elements=[])
    {
        this.elements = elements;
        this.pos = createVector(x,y);
        this.size = createVector(w,h);
    }

    draw()
    {
        let sW = uiScaleDivWidth();
        let sH = uiScaleDivHeight();
        push();
        fill(0);
        stroke(50);
        strokeWeight(10)
        rect(sW*this.pos.x,sH*this.pos.y,sW*this.size.x,sH*this.size.y,10);
        pop();
        for (let element of this.elements)
        {
            element.draw();
        }
    }
}

class UIText
{
    constructor(x,y,t,fS)
    {
        this.pos = createVector(x,y);
        this.fontSize = fS;
        this.t = t;
    }

    draw()
    {
        let sW = uiScaleDivWidth();
        let sH = uiScaleDivHeight();
        push();
        fill(255);
        noStroke();
        textAlign(CENTER,CENTER);
        textSize(width/this.fontSize);
        text(this.t,sW*this.pos.x,sH*this.pos.y);
        pop();
    }
}