import { Injectable } from '@angular/core';
import { Box } from './box';

@Injectable({
    providedIn: 'root'
})
export class BoxesService {
    public boxes: Box[];

    private selected: number;
    private lastId = 0;

    constructor () {
        this.boxes = [];
    }

    public get selectedBox (): Box {
        return this.boxes.find(box => box.id === this.selected);
    }

    public isSelected (id: number) {
        return this.selected === id;
    }

    public addNewBox () {
        const box = new Box(this.lastId + 1, this.lastId + 10);
        this.boxes.push(box);
        this.lastId += 1;
    }

    public removeBox () {
        this.boxes.splice(this.boxes.findIndex(box => box.id === this.selected), 1)
    }

    public select (id: number) {
        this.selected = id;
    }
}
