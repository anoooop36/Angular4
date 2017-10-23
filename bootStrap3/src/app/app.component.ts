import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container-fluid">
  
  <hr>
  <p>
    This is a demo plnkr forked from the <strong>ng-bootstrap</strong> project: Angular powered Bootstrap.
    Visit <a href="https://ng-bootstrap.github.io/" target="_blank">https://ng-bootstrap.github.io</a> for more widgets and demos.
  </p>
  <hr>

  <app-modal-component></app-modal-component>
</div>
`
})
export class AppComponent {
  title = 'app';
}
