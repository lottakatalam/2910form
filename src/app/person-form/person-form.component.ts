import { Component } from '@angular/core';

import { Person } from '../Person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent {

  nationality = ['FI', 'SE',
            'RUS', 'EST'];
    language = ['ES', 'FR',
            'ENG', 'NOR'];

  model = new Person('010795-123D','Lotta Katariina','Lampola','FI','FI','01-07-1996','','Kehittäjäntie 1 D 33, 00100 Helsinki')

  submitted = false;

  onSubmit() { this.submitted = true; }

}