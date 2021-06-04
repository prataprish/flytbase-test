export class Box {
    public id: number;
    public zIndex: number;
    public style: any;

    constructor (id: number, zindex: number) {
        this.id = id;
        this.zIndex = zindex;
        this.style = {
            top: 0,
            left: 0
        }
    }

    public get left () {
        return `${this.style.left}px`;
    }

    public get top () {
        return `${this.style.top}px`;
    }

    public move (x: number, y: number) {
        this.style.top += y;
        this.style.left += x;
    }
}