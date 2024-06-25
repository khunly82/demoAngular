## Composants
« Brique » qui permettront de créer un projet Angular

- typescript (logique du composant)
- html (visuelle du composant)
- css (style du composant)

```
ng g c [path/nomDuComposant]
```
*rem:* 
- *Dans un projet de type module,
un composant doit appartenir à un et un seul module*
- *Rien n'empèche un composant de s'intégrer à l'intérieur de lui-même*

### Binding
Lien entre la partie visuelle et la partie logique

- Binding 1 way (logique -> visuelle)
```ts
maVariable: string = 'Khun';
```

```html
<p>Hello {{maVariable}}</p>
<!-- <p>Hello Khun</p>    -->
```

- Binding 2 ways (logique <-> visuelle)
```ts
maVariable: number = 42
```

```html
<input [(ngModel)]="maVariable" />
```

*rem: Nécéssite FormsModule*

### @Input()
Permet de paramètre depuis un composant (parent) une autre composant (enfant)

```ts
// enfant
@Component({selector:'my-child-component' })
class MyChildComponent {
    @Input()
    value: number = 0;
}
```

```html
<!-- parent  -->
<my-child-component value="42"></my-child-component>

```
