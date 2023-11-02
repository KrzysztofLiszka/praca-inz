import { Component } from '@angular/core';

@Component({
    selector: 'app-management-page',
    templateUrl: './management-page.component.html',
    styleUrls: ['./management-page.component.scss']
})
export class ManagementPageComponent {
    displayedColumns: string[] = ['name', 'code', 'test', "jeden", "dwa", "trzy"];
    displayedHeaders: string[] = ['Nazwa zespołu', "Kod zespołu", 'Akcje', "SDF", "aAFSFS", "SFAFSA"];
    items: any[] = [
        { name: "test", code: "code", test: "test", jeden: "dsadsa", dwa: "dwa", trzy: "trzey" },
        { name: "test", code: "code", test: "test", jeden: "dsadsa", dwa: "dwa", trzy: "trzey" },
        { name: "test", code: "code", test: "test", jeden: "dsadsa", dwa: "dwa", trzy: "trzey" },
        { name: "test", code: "code", test: "test", jeden: "dsadsa", dwa: "dwa", trzy: "trzey" },
        { name: "test", code: "code", test: "test", jeden: "dsadsa", dwa: "dwa", trzy: "trzey" },
        { name: "test", code: "code", test: "test", jeden: "dsadsa", dwa: "dwa", trzy: "trzey" },
        { name: "test", code: "code", test: "test", jeden: "dsadsa", dwa: "dwa", trzy: "trzey" },
        { name: "test", code: "code", test: "test", jeden: "dsadsa", dwa: "dwa", trzy: "trzey" },
        { name: "test", code: "code", test: "test", jeden: "dsadsa", dwa: "dwa", trzy: "trzey" },
        { name: "test", code: "code", test: "test", jeden: "dsadsa", dwa: "dwa", trzy: "trzey" },
        { name: "test", code: "code", test: "test", jeden: "dsadsa", dwa: "dwa", trzy: "trzey" },
    ];
}
