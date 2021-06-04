import { Component, Input } from '@angular/core';
import { BoxesService } from './boxes.service';

import { Box } from './box';

@Component({
    selector: 'app-box',
    templateUrl: './box.component.html',
    styleUrls: ['./box.component.css']
})
export class BoxComponent {
    @Input()
    public box: Box;

    constructor (public boxesService: BoxesService) { }

    public get style () {
        return {
            left: this.box.left,
            top: this.box.top,
            zIndex: this.box.zIndex
        }
    }
}
