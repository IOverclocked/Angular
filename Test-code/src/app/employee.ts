export interface IEmployee {
    id: number;
    name: string;
    username: string;
    email: string;
    age: number;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

interface Address {
    street: string;
    suite: string;
    city: string;
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

