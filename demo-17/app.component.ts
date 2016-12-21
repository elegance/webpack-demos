import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `
    <input #box (keyup)="onKey(box.value)">
    <p>hello {{value}}</p>
    `
})
export class AppComponent {
    value = '';

    onKey(val: string) {
        this.value = val;
    }
}