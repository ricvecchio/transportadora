import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './componentes/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material.module';
import { ConfirmationDialogComponent } from './componentes/confirmation-dialog/confirmation-dialog.component';


@NgModule({
    imports: [
        CommonModule,
        AppMaterialModule,
        ErrorDialogComponent,
        ConfirmationDialogComponent
    ],
    exports: [
        ErrorDialogComponent,
        ConfirmationDialogComponent
    ]
})
export class CompartilhadoModule { }
