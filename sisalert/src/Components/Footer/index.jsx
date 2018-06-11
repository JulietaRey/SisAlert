import React from "react";
import SiteMap from './Components/SiteMap';
import Copyright from './Components/Copyright'
import { Row, Col, Layout  } from 'antd';
const Footer = Layout.Footer;
class Pie extends React.Component{
    render(){
        const footerStyle= {
            padding: '10px 0px'
        }
        return(
            <footer>
                <Footer>
                    <Row style={footerStyle} type="flex" justify="center" align="middle">
                        <Col>
                            <SiteMap />
                        </Col>
                    </Row>
                    <Row  style={footerStyle} type="flex" justify="center" align="middle">
                        <Col>
                            <Copyright />
                        </Col>
                    </Row>
                </Footer>
            </footer>
        );
    }
}

export default Pie;