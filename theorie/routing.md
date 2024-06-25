## Routing

Le « routerModule » permet de définir le composant qui sera afficher en fonction de la route

### Création des routes
```ts
const routes = [
    { path: 'chemin', component: MyComponent },
    { path: 'autre/chemin', component: MyOtherComponent },
]
```

### router-outlet

Définit l'endroit où le composant sera intégré
```html
<router-outlet></router-outlet>
```

### RouterLink
Permet de définir les liens vers les différentes routes
```html
<a routerLink="/chemin">Lien vers une route</a>
```