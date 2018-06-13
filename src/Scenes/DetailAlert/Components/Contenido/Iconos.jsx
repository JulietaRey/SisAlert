import React from 'react';
import { Card, Row, Col, Layout, Icon } from 'antd';
const {Content} = Layout;

class Iconos extends React.Component {
    render(){
        const cardStyle = {
            borderRadius: '15px',
            border: '1px solid #fe5a61'
        }
        const itemStyle = {
            fontSize: '18px'
        }
        const titulo = <span><Icon type="warning"/> Este alerta incluye</span>
        return(
            <Content>
                <Row type="flex" justify="center">
                    <Col xs={22} xl={18}>
                        <Card title={titulo} 
                        style={cardStyle}>
                            <div style={itemStyle} > <Icon style={{ padding: '0px 10px'}} type="cloud"/>Lluvias fuertes</div>
                            <div style={itemStyle} > <Icon style={{ padding: '0px 10px'}} type="dingding" />Actividad eléctrica</div>
                        </Card>
                    </Col>
                </Row>
            </Content>
        );
    }
}

export default Iconos;