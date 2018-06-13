import SobreNosotros from './Components/SobreNosotros'
import React from "react";
import { Row, Col } from 'antd'
class SobreNos extends React.Component{
    render(){
        const alertStyle= {
            borderRadius: '20px',
            border: '1px solid #386297'
        }
        const backstyle= {
            padding: '3em'
        }
        const titleStyle= {
            fontWeight: 'bold',
            fontFamily: 'Arvo',
            color: '#386297', 
            fontSize: '36px',
            marginBottom: '-15px'
        }
        return(
            <div style= {backstyle}>
                <h2 style={titleStyle}>Sobre nosotros</h2>
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