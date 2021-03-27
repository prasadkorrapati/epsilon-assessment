import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { FormElementsComponent } from './components/form-elements/form-elements.component';
import { TableFunctionsComponent } from './components/table-functions/table-functions.component';
import { HeaderComponent } from './core/components/header/header.component';
import { CoreModule } from './core/core.module';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: 'cardComponent',
        component: CardComponent
      },
      {
        path: 'formElements',
        component: FormElementsComponent
      },
      {
        path: 'tableFunctions',
        component: TableFunctionsComponent
      },
      { path: '**', redirectTo: '/cardComponent', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true}),
    CoreModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
