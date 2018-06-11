import Enlace from './Components/Enlace'
import React from "react";
import { Row, Col  } from 'antd'
class Volver extends React.Component{
    render(){
        const linkStyle= {
            margin: '1em 0em'
        }
        return(
            <div style={linkStyle}>
                <Row type="flex" justify="" align="left">
                    <Col xs={24}>
                        <Enlace sendTo={{ path:'/'}}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Volver;