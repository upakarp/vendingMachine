import React from 'react'
import { Card} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const Sodas = ({ sodas }) => {
        return (
            <div>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:'40px', marginBotton:'40px'}}>
                    <Card>
                        <h1><center>Soda List</center></h1>
                    {sodas.map((sodas) => (
                        sodas.quantity > 0 ?
                        (
                            <Card.Content>
                                <Card.Header>{sodas.product_name}</Card.Header>
                                <Card.Meta>Cost: {sodas.cost}$ each</Card.Meta>
                                <Card.Meta>Items Left: {sodas.quantity}</Card.Meta>
                                <Card.Description>{sodas.description}</Card.Description>
                            </Card.Content>
                        ) : null
                    ))}
                    </Card>
                </div>
            </div>
            
            
        )
};

export default Sodas