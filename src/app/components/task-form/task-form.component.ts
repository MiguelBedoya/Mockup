import { Component, OnInit } from '@angular/core';

import {TaskService} from '../../services/task.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {


  constructor(
    public taskService: TaskService
  ) { }

  ngOnInit() {
  }

  addTask(newDate: HTMLInputElement,
          name: HTMLInputElement,
          address: HTMLInputElement,
          nameDriver: HTMLInputElement,
          newPrice: HTMLInputElement) {
    console.log(newDate.value, name.value, address.value, nameDriver.value, newPrice.value);
    this.taskService.addTask({
      date: new Date(Date()),
      name: name.value,
      address: address.value,
      nameDriver: nameDriver.value,
      price: newPrice.value
    });
    newDate.value ='';
    name.value ='',
    address.value = '';
    nameDriver.value = '';
    newPrice.value = '';
    name.focus();
    return false;

  }
}
