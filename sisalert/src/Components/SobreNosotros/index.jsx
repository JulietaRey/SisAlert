import SobreNosotros from './Components/SobreNosotros'
import React from "react";
import { Row, Col } from 'antd'
class SobreNos extends React.Component{
    render(){
        const alertStyle= {
            borderRadius: '20px',
            borderColor: '#386297',
            background: 'black',
            padding: '20px',
        }
        const backstyle= {
            padding: '3em'
        }

        return(
            <div style= {backstyle}>
                <Row align="middle" style= {alertStyle}>
                    <Row type="flex" justify="center" align="middle" >
                       <Col>
                            <SobreNosotros />
                        </Col>
                    </Row>
                </Row>
            </div>
        );
    }
}

export default SobreNos;