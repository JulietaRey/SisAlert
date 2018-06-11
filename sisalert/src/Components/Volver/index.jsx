import Enlace from './Components/Enlace'
import React from "react";
import { Row, Col  } from 'antd'
class Volver extends React.Component{
    render(){
        const headerStyle= {
            margin: '1em'
        }
        return(
            <header style= {headerStyle}>
                <Row type="flex" justify="" align="left">
                    <Col xs={24}>
                        <Enlace />
                    </Col>
                </Row>
            </header>
        );
    }
}

export default Volver;