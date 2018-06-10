import Prevencion from '../../Common/Prevencion/Prevencion';
import Accion from '../../Common/Accion/Accion';
import Contencion from '../../Common/Contencion/Contencion';
import React from "react";
import { Row, Col  } from 'antd'
class Columnas extends React.Component{
     render(){
        const ColumnaStyle= {
            padding: '3em',   
        }
        return(
            <content style= {ColumnaStyle}>
                <Row type="flex" around="xs" >
                    <Col xs={8} >
                        <div className="alerta uno">
                                <Prevencion />
                        </div>
                    </Col>
                   <Col xs={8} >
                        <div className="alerta dos">
                                <Accion />
                        </div>
                    </Col>
                    <Col xs={8} >
                        <div className="alerta tres">
                                <Contencion />
                        </div>
                    </Col>
                </Row>
            </content>
        );
    }
}

export default Columnas;