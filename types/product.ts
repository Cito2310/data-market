export interface Product {
    _id: string;
    brand: string;
    category: string;
    subCategory: string;
    majorCategory: string;
    barcode: string;
    name: string;
    price: number;
    type: "unit" | "weight";
    size: number;
    typeSize: string;
}

export interface ProductTicket {
    _id: string;
    brand: string;
    category: string;
    subCategory: string;
    majorCategory: string;
    barcode: string;
    name: string;
    price: number;
    type: "unit" | "weight";
    size: number;
    typeSize: string;

    total: number;
    amount: number;
}