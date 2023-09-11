import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() type: 'primary' | 'secondary' = 'primary';
  @Input() color: string = '';
  @Input() buttonText: string = 'Button';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() padding: string = '10px 20px'; 
  @Input() borderRadius: string = '25px';
  @Input() fontStyle: string = '';
}
