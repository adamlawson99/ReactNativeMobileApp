export class item {
    item_name;
    item_price;
    item_id;
    quantity;

    constructor(item,price,id) {
        this.name = item;
        this.item_price = price;
        this.item_id = id;
        this.quantity = 0;
    }
    
}

export function more() {
    this.quantity += 1;
}

export function less() {
    this.quantity -= 1;
}