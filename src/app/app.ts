import {Component, signal} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {MatButton} from '@angular/material/button';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    imports: [
        MatToolbar,
        RouterOutlet,
        RouterLink,
        MatButton,
        RouterLinkActive,
    ],
    templateUrl: './app.html',
    styleUrl: './app.scss'
})
export class App {
    protected readonly title = signal('euler');

    constructor(private matIconRegistry: MatIconRegistry,
                private domSanitizer: DomSanitizer) {
        matIconRegistry.addSvgIcon('js', this.domSanitizer.bypassSecurityTrustResourceUrl('img/js.svg'));
        matIconRegistry.addSvgIcon('rust', this.domSanitizer.bypassSecurityTrustResourceUrl('img/rust.svg'));
        matIconRegistry.addSvgIcon('java', this.domSanitizer.bypassSecurityTrustResourceUrl('img/java.svg'));
    }
}
