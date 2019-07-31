import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderBarComponent } from './header-bar.component';

@NgModule({
  imports: [CommonModule],
  exports: [HeaderBarComponent],
  declarations: [HeaderBarComponent]
})
export class CoreModule {}
