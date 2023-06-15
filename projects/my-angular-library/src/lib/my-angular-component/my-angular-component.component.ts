import { Component } from '@angular/core';


@Component({
  selector: 'lib-my-angular-component',
  templateUrl: './my-angular-component.component.html',
  styleUrls: ['./my-angular-component.component.css'],
  template: `
    <div>
      <h2>My Angular Component</h2>
      <p>This is an Angular component inside the package.</p>
    </div>
  `,
})
export class MyAngularComponentComponent {

}
