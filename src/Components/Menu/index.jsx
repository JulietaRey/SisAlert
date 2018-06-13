import Reporte from '../../Common/Reportes/Reporte';
import Noticia from '../../Common/Noticias/Noticia';
import React from "react";
import { Row, Col  } from 'antd'
class Menu extends React.Component{
     render(){
        const ColumnaStyle= {
            margin: '3em' 
        }
        return(
            <div style= {ColumnaStyle}>
                <Row type="flex" around="xs" >          
                    <Col xs={12} >
                        <div className="reportes">
                            <Reporte />
                        </div>
                    </Col>
                    <Col xs={12} >
                        <div className="noticias">
                            <Noticia />
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Menu;