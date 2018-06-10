import Alerta from '../../Common/Alertas/Alerta';
import React from "react";
import { Row, Col  } from 'antd'
class Columnas extends React.Component{
     render(){
        const ColumnaStyle= {
            padding: '3em',
            borderBottom: '1px solid black'            
        }
        return(
            <content style= {ColumnaStyle}>
                <Row type="flex" around="xs" >
                    <Col xs={8} >
                        <div className="alerta uno">
                                <Alerta />
                        </div>
                    </Col>
                   <Col xs={8} >
                        <div className="alerta dos">
                                <Alerta />
                        </div>
                    </Col>
                    <Col xs={8} >
                        <div className="alerta tres">
                                <Alerta />
                        </div>
                    </Col>
                </Row>
            </content>
        );
    }
}

export default Columnas;