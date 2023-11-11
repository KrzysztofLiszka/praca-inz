import { Component, Input } from '@angular/core';
import * as ClassicEditor from '../../../../../assets/ckeditor';

@Component({
    selector: 'app-text-editor',
    templateUrl: './text-editor.component.html',
    styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent {
    @Input() formGroup: any;
    @Input() nameOfFormControl: string = "";

    public Editor = ClassicEditor;

    onReady(eventData: { plugins: any }): void {
        if (eventData.plugins == undefined) return;
        eventData.plugins.get('FileRepository').createUploadAdapter = (loader: any) => new UploadAdapter(loader);
    }
}

class UploadAdapter {
    private _loader: any;

    constructor(loader: any) {
        this._loader = loader;
    }

    async upload(): Promise<any> {
        const file = await this._loader.file;
        const result = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                resolve({ default: reader.result });
            };
            reader.readAsDataURL(file);
        });
        return result;
    }
}