//plantilla de compra
export class SaleTemplate {
  id:number;
  date: any;
  nameCliente: any;
  total:any;
}
//detalle por producto
// ****
export class productDetail extends SaleTemplate {
   setProducts : {
       product:string;
       value_product:number;
   }
}

export class UnitProduct {
  name:string;
  value: number;
}


