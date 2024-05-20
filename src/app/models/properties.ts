export class Properties {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;

    constructor(id: number, name: string, description: string, price: number, image: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
    }
}

