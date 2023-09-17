import { getManifest, Manifest } from '@angular-architects/module-federation';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomManifest, CustomRemoteConfig } from './utils/config';
import { buildRoutes } from './utils/route';
import { Imenu } from './utils/Imenu';
import { createMenu } from './utils/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mainMenu: {
    title: string,
    routePath: string
  }[] = []
  mfeMenu: Imenu[] = []
  login: boolean = false;
  constructor(
    private router: Router) {
  }
  async ngOnInit(): Promise<void> {
    this.mainMenu.push(
      {
        title: "خانه",
        routePath: "/"
      })
    this.mainMenu.push(
      {
        title: "حساب کاربری",
        routePath: "/profile"
      }
    )
    const manifest = getManifest<CustomManifest>();
    this.mfeMenu = createMenu(manifest);
    const routes = buildRoutes(manifest);
    this.router.resetConfig(routes);
  }
}