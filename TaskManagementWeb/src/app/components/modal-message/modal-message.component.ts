import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { DialogModule } from 'primeng/dialog';
import { AvatarModule } from 'primeng/avatar';
import { GeneralResponse } from '../../shared/models/GeneralResponse';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-modal-message',
  standalone: true,
  imports: [AvatarGroupModule, DialogModule, AvatarModule, ButtonModule, CommonModule],
  templateUrl: './modal-message.component.html',
  styleUrl: './modal-message.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ModalMessageComponent implements OnChanges{
 
  constructor(  private router: Router, private route: ActivatedRoute) {
    
    
  }
ngOnChanges(changes: SimpleChanges): void {
}
@Input() visible: boolean = false;
@Input() message: GeneralResponse = new GeneralResponse(0, "");
Close(){
  this.visible = false;
  if(this.message.Code !== 200){
    this.router.navigate(["/"]);
  }
}
}
