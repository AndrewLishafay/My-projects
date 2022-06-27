
import { Vector3 } from 'three'
import Checker from './Checker'
interface props {
    layout: any
    position: any
    rotation: any
}
const CheckerLayout = (props: props) => {
    const { layout, position, rotation } = props
    return (
        <group position={position} rotation={rotation}>
            {layout.map((position: any, i: number) => {
                if (position.count > 0) {
                    const column = new Array(position.count);
                    column.fill(true, 0, position.count + 1)
                    return column.map((checker: any, j: number) => {
                        let centerOffset = i;
                        let sideOffset = j;
                        if(i>5) centerOffset += 0.75
                        if(i>11){
                            sideOffset += -10.3
                            centerOffset += -24.5
                            sideOffset *= -1
                            centerOffset *= -1
                            if(i>17) centerOffset += -0.75
                        } 
                        return <Checker key={i + (j * 100)} position={[centerOffset / 4.05, 0, sideOffset / 4]} color={position.color} />
                    })
                }
            }
            )}
        </group>
    )
}

export default CheckerLayout