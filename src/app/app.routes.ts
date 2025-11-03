import { Routes } from '@angular/router';
import { TypescriptInit } from '../components/typescript-init/typescript-init';
import { AngularFondamentaux } from '../components/angular-fondamentaux/angular-fondamentaux';

export const routes: Routes = [
  { path: "", component: TypescriptInit },
  { path: "angular-fondamentaux", component: AngularFondamentaux }
];
