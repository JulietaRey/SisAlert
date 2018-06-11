import React from "react";
import Sites from './Sites'
import { Row, Col  } from 'antd'
class SiteMap extends React.Component{
    render(){
        const mapStyle = {
            color: 'white',
            textAlign: 'center'
        }
        const ArvoTypo = {
            fontFamily : 'Arvo',
            fontSize: '16px'
        }

        return(
            <div style={mapStyle}>
                <Row type="flex" justify="center" align="middle">
                   <Col xs={24} xl={24} style={{paddingBottom: '10px'}}>
                        <b style={ArvoTypo}>Mapa del Sitio</b>
                   </Col>
                </Row>
                <Row type="flex" justify="center" align="middle">
                   <Col>
                        <Sites/>
                   </Col>
                </Row>
            </div>
        );
    }
}

export default SiteMap;