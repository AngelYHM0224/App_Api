export default class ProductModel {
    id : string
    name : string
    price : number
    description : string
    category : string
    createAt : string
    updatedAt : string

    constructor(
        id: string,
        name : string,
        price : number,
        description : string,
        category : string,
        createAt : string,
        updatedAt : string) {
            this.id = id,
            this.name = name,
            this.price = price,
            this.description = description
            this.category = category,
            this.createAt = createAt,
            this.updatedAt = updatedAt
        }
}