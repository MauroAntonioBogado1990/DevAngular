export interface Article {
    name: string
    color: string
    size: string
    company:string
    price: number
    //img: { type: String, required: true },
    description:string
    createdAt?:string
    updateAt?:string
    _id?:string
   }