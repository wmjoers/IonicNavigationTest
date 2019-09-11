import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
      path: 'tabs',
      component: TabsPage,
      children: [
        { path: '', redirectTo: '/tabs/tab1', pathMatch: 'full' },
        {
          path: 'tab1',
          children : [
            {
              path: '',
              loadChildren: '../tabs/tab1/tab1.module#Tab1PageModule'
            },
            {
              path: 'another',
              loadChildren: '../tabs/tab1/another/another.module#AnotherPageModule'
            }
          ]
        },
        {
          path: 'tab2',
          loadChildren: '../tabs/tab2/tab2.module#Tab2PageModule'
        }
      ]
    },
    { path: '', redirectTo: '/tabs/tab1', pathMatch: 'full' }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
