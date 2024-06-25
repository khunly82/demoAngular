## Directives
Les directives sont des attributs des composants permettant de les modifier.

### ngClass
Permet de rajouter des classes au composant
```html
<p [ngClass]="{myClass: contidtion}">paragraphe</p>
```

### ngStyle
Permet de rajouter des styles au composant
```html
<p [ngStyle]="{propriete: valeur}">paragraphe</p>
```

### disabled
Permet de désactiver un composant
```html
<button [disabled]="condition">paragraphe</button>
```

### *ngIf
Permet de ajouter ou non un composant
```html
<p *ngIf="condition">paragraphe</p>
<!-- depuis angular 16 -->
@if(condition) {
    <p *ngIf="condition">paragraphe</p>
}
```

### *ngFor
Permet de multiplier un composant
```html
<p *ngFor="let item of list">{{item}}</p>
<!-- depuis angular 16 -->
@for(item of list; track $index) {
    <p>{{item}}</p>
}
```