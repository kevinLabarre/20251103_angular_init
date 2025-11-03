import { Routes } from '@angular/router';
import { TypescriptInit } from '../components/typescript-init/typescript-init';
import { AngularFondamentaux } from '../components/angular-fondamentaux/angular-fondamentaux';
import { ComposantParentEtEnfant } from '../components/composant-parent-et-enfant/composant-parent-et-enfant';
import { DirectiveIf } from '../components/directive-if/directive-if';
import { DirectiveFor } from '../components/directive-for/directive-for';
import { BindDesPropsEtDesEvenements } from '../components/bind-des-props-et-des-evenements/bind-des-props-et-des-evenements';
import { Compteur } from '../components/compteur/compteur';
import { InputAvecNgModel } from '../components/input-avec-ng-model/input-avec-ng-model';
import { Exercice } from '../components/exercice/exercice';

export const routes: Routes = [
  { path: "", component: TypescriptInit },
  { path: "angular-fondamentaux", component: AngularFondamentaux },
  { path: "composant-parent-et-enfant", component: ComposantParentEtEnfant },
  { path: "directive-if", component: DirectiveIf },
  { path: "directive-for", component: DirectiveFor },
  { path: "bind-des-props-et-des-evenements", component: BindDesPropsEtDesEvenements },
  { path: "compteur", component: Compteur },
  { path: "input-avec-ng-model", component: InputAvecNgModel },
  { path: "exercice", component: Exercice }
];
