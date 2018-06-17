import Reporte from '../../Common/Reportes/Reporte';
import Noticia from '../../Common/Noticias/Noticia';
import React from "react";
import { Row, Col  } from 'antd'
class Menu extends React.Component{
     render(){
        const ColumnaStyle= {
            margin: '3em' 
        }
        const itemStyle={
            bottom: '-8px',
            right: '16px',
            fontSize: '3.5vw',
            position: 'absolute',
            fontFamily: 'Arvo',
            color: '#38618c',
            fontWeight: 'bold',
        }
        return(
            <div style= {ColumnaStyle}>
                <Row type="flex" around="xs" justify="space-between" >          
                    <Col xl={11} md={24} xs={24}>
                        <div style={{position:'relative'}}>
                            <Reporte tam="33vw" />
                            <h2 style={itemStyle}>Reportes</h2>
                        </div>
                    </Col>
                    <Col xl={11} md={24} xs={24}>
                        <div style={{position:'relative'}}>
                            <Noticia tam="33vw" />
                            <h2 style={itemStyle}>Noticias</h2>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Menu;