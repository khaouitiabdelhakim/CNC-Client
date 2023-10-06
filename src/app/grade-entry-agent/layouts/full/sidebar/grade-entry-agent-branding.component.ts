import { Component } from '@angular/core';

@Component({
  selector: 'grade-entry-agent-app-branding',
  template: `
    <div class="branding">
      <a href="/">
      <img
          src="./assets/images/logos/dark-logo.png"
          class="align-middle m-2"
          alt="logo"
          width="130px"
        />
      </a>
    </div>
  `,
})
export class GradeEntryAgentBrandingComponent {
  constructor() {}
}
