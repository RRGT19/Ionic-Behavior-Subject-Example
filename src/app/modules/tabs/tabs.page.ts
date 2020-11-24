import {Component} from '@angular/core';

interface ITab {
  title?: string;
  path: string;
  currentIcon: string;
  activeIcon: string;
  inactiveIcon: string;
}

@Component({
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage {

  tabOptions: ITab[] = [
    {title: 'Inicio', path: 'home', currentIcon: '', activeIcon: 'home-blue', inactiveIcon: 'home-grey'},
    {title: 'Citas', path: 'appointment', currentIcon: '', activeIcon: 'citas-blue', inactiveIcon: 'citas-grey'},
    {title: 'Médicos', path: 'doctor', currentIcon: '', activeIcon: 'medicos-blue', inactiveIcon: 'medicos-grey'},
    {title: 'Perfil', path: 'profile', currentIcon: '', activeIcon: 'perfil-blue', inactiveIcon: 'perfil-grey'},
  ];

  onTabsDidChange(event: { tab: string; }) {
    const tabSelected = event.tab;
    this.tabOptions.forEach(t => {
      if (t.path === tabSelected) {
        t.currentIcon = t.activeIcon;
      } else {
        t.currentIcon = t.inactiveIcon;
      }
    });
  }

}
