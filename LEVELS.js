class Level1
{
    constructor(coins=0)
    {
        this.coins = coins;
        this.round = 0;
        this.mapArray = [
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,1,1,1,0,0,0,0],
            [0,0,0,1,0,1,0,0,0,0],
            [1,1,1,1,0,1,0,0,0,0],
            [0,0,0,0,0,1,0,0,0,0],
            [0,0,0,1,1,1,0,0,0,0],
            [0,0,0,1,0,0,0,0,0,0],
            [0,0,0,1,0,0,0,0,0,0],
            [0,0,0,1,1,1,1,1,1,1],
            [0,0,0,0,0,0,0,0,0,0]
        ];
    }

    draw(mouseClick=true,ui=null)
    {
        if (mouseClick) {return;}
        background(0);
        // Size For Tiles (Always Sqaure)
        let r = ((width+height)/2)/__MAPSIZE__/2;
        for (let x = -__MAPSIZE__/2; x<__MAPSIZE__/2; x++)
        {
            for (let y=-__MAPSIZE__/2; y<__MAPSIZE__/2; y++)
            {
                drawTile(this.mapArray[y+5][x+5],x,y,r);
            }
        }
        ui.drawGameUI();
    }
}