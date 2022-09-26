export type usuario = {
    id: string,
    name: string,
    email: string,
    password: string
}

export type produto = {
    id: string,
    name: string,
    price: number,
    image_url: string
}

export type compra = {
    id: string,
    user_id: string,
    product_id: string,
    quantity: number,
    total_price: number
}