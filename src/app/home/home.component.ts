import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { BoxesService } from '../box/boxes.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    public keyboardControl = new FormControl(true);
    public selected: number;

    constructor (public boxesService: BoxesService) {
        this.boxesService.addNewBox();
        window.addEventListener('keydown', this.handleKeyInput.bind(this));
        document.addEventListener('keydown', this.handleKeyInput.bind(this), true);
    }

    public handleKeyInput (event: KeyboardEvent) {
        if (this.boxesService.selectedBox && this.keyboardControl.value) {
            switch (event.code) {
                case 'KeyW': this.boxesService.selectedBox.move(0, -5); break;
                case 'KeyS': this.boxesService.selectedBox.move(0, 5); break;
                case 'KeyA': this.boxesService.selectedBox.move(-5, 0); break;
                case 'KeyD': this.boxesService.selectedBox.move(5, 0); break;
                case 'KeyD': this.boxesService.selectedBox.move(5, 0); break;
                case 'Backspace': this.boxesService.removeBox(); break;
            }
        }
    }
}
