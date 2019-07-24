import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { OrderComponent } from '../../app/components/order/order.component';
import { productDetail } from '../../app/orderOfEachClient';
 
@Injectable({
  providedIn: 'root'
})
export class firebaseService {
 
  constructor(private db: AngularFirestore) { }
 
  private collectionOrder = 'todos';
 
  getorder(): Observable<firebase.firestore.QuerySnapshot> {
    return this.db.collection<productDetail>(this.collectionOrder, ref => ref.orderBy('date', 'desc')).get();
  }
  saveOrder(productDetail: productDetail): Promise<DocumentReference> {
    return this.db.collection(this.collectionOrder).add(OrderComponent);
  }
  // editOrder(productDetail: productDetail): Promise<void>{
  //   return this.db.collection(this.collectionOrder).doc(OrderComponent.id).update(OrderComponent);
  // }
  // editOrderPartial(id: string, obj: Object): Promise<void>{
  //   return this.db.collection(this.collectionOrder).doc(id).update(obj);
  // }
  // deleteOrder(idTodo: string): Promise<void>{
  //   return this.db.collection(this.collectionOrder).doc(idTodo).delete();
  // }
}