import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private db: AngularFireDatabase) { }

  getDriverTransaction(key) {
    return this.db.list('transactions', ref => ref.orderByChild('userId').equalTo(key));
  }

  getRiderTransaction(key) {

  }
}
