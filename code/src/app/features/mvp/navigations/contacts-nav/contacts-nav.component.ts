import {Component, OnDestroy, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {ChangeMessageStatus, ContactUs, MvpSelectors} from "../../store";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-contacts-nav',
  templateUrl: './contacts-nav.component.html',
  styleUrls: ['./contacts-nav.component.scss']
})
export class ContactsNavComponent implements OnInit, OnDestroy {
  @Select(MvpSelectors.messageStatus)
  messageStatus$!: Observable<boolean>;
  messageGroup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(100),
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
  private subscription = new Subscription();

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.subscription.add(this.messageStatus$.subscribe(status => {
      if (status){
        setTimeout(() => {
          this.store.dispatch(new ChangeMessageStatus());
        }, 4000)
      }
    }));
  }

  ngOnDestroy() {
  }

  onSendMessage() {
    // if (this.messageGroup.valid) {
      const values = this.messageGroup.value;
      this.store.dispatch(new ContactUs(values.name, values.email, values.message));
    // }
  }
}
