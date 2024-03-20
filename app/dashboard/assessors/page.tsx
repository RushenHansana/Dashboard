
export default async function Page() {

    const getProducts = async () => {
        const response = await fetch('https://dummyjson.com/products');
        return response.json();;
    }

    const data = await getProducts();
    
    return (
        <div>
            <ul>
            {data.products.map((item:any, index:number) => (
                <li key={index}>{item.title}</li>
            ))}

            </ul>  
        </div>
    );
}