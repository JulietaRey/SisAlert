import React from 'react';
import ImagenSatelital from '../../../../Common/Satelital';
import { Row, Col, Layout } from 'antd';
const {Content} = Layout;

class Satelital extends React.Component {
    render(){
        return(
            <Content style={{ padding: '15px 0px'}}>
                <Row type="flex" justify="center">
                    <Col xs={22} xl={18}>
                        <div>
                            <figcaption>Imagen satelital</figcaption>
                            <figure>
                                <ImagenSatelital/>
                            </figure>
                        </div>
                    </Col>
                </Row>
            </Content>
        );
    }
}

export default Satelital;