import MapaSitio from './Components/MapaSitio'
import Links from './Components/Links'
import Copyright from './Components/Copyright'
import React from "react";
import { Row, Col } from 'antd'
class Footer extends React.Component{
    render(){
        const alertStyle= {
            background: '#386297',
            padding: '20px'            
        }
        return(
            <div >
                <Row align="middle" style= {alertStyle}>
                    <Row type="flex" justify="center" align="middle" >
                        <Col>
                            <MapaSitio />
                      </Col>
                    </Row>
                    <Row type="flex" justify="center" align="middle" >
                      <Col>
                        <Links />
                      </Col>
                    </Row>
                    <Row type="flex" justify="center" align="middle" >
                      <Col>
                        <Copyright />
                      </Col>
                    </Row>
                </Row>
            </div>
        );
    }
}

export default Footer;