import Prevencion from '../../Common/Prevencion/Prevencion';
import Accion from '../../Common/Accion/Accion';
import Contencion from '../../Common/Contencion/Contencion';
import React from "react";
import { Row, Col  } from 'antd'
class Columnas extends React.Component{
     render(){
        const ColumnaStyle= {
            margin: '3em' 
        }
        const itemStyle={
            bottom: '-8px',
            right: '16px',
            fontSize: '3vw',
            position: 'absolute',
            fontFamily: 'Arvo'
        }
        return(
            <div style= {ColumnaStyle}>
                <Row type="flex" justify="space-between" around="xs" >
                    <Col md={7} xs={24} >
                        <div style={{position:'relative'}}>
                                <Prevencion tam="15vw" />
                                <h2 style={itemStyle}>Prevención</h2>
                        </div>
                    </Col>
                   <Col md={7} xs={24} >
                        <div style={{position:'relative'}}>
                                <Accion tam="15vw" />
                                <h2 style={itemStyle}>Acción</h2>
                        </div>
                    </Col>
                    <Col md={7} xs={24} >
                        <div style={{position:'relative'}} >
                                <Contencion tam="15vw" />
                                <h2 style={itemStyle}>Contención</h2>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Columnas;