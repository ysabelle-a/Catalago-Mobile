export interface Product {
    id: number
    title: string
    price: number
    thumbnail: string
    category: string
    description: string
    rating: number
    stock: number
    brand: string
    images: string[]
}

export const getProducts = async (): Promise<Product[]> => {

    const response = await fetch('https://dummyjson.com/products?limit=0')

    const data = await response.json()

    return data.products

}

export const getProductById = async (id: number): Promise<Product> => {

    const response = await fetch(
        `https://dummyjson.com/products/${id}`
    )

    const data = await response.json()

    return data
}