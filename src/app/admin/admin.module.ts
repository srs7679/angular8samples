import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';



@NgModule({
  declarations: [AdminDashBoardComponent],
  imports: [
    CommonModule
  ],
  exports:[AdminDashBoardComponent]
})
export class AdminModule { }
