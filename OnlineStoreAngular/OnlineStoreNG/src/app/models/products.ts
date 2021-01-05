export class Products {
    Product_Id: string;
    Name: string;
    Category: string;
    Price: number;

    constructor(product_Id, name, category="", price=0){
        this.Product_Id = product_Id
        this.Name = name
        this.Category = category
        this.Price = price
    }

}
