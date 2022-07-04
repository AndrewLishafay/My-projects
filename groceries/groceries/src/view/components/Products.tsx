import BoxProduct from './BoxProduct'

const Products = (props: any) => {
    const { stock, setIsDragging } = props
    const initPosition = [23, -19.1, -2]
    console.log(stock);

    return (
        <group>
            {
                stock.map((item: any, i: number) => {
                    if (item === 'cereal1' || item === 'cereal2') 
                        // initPosition[2] = initPosition[2] + (i * 3);cd
                        return <BoxProduct typeOf={item} setIsDragging={setIsDragging} initPosition={initPosition} key={i} />
                    else return <></>
                })}
        </group >
    )
}

export default Products