import React from 'react';
import THeader from './THeader'
import {Table, Icon} from 'antd';
const {Column} = Table;
class Contenido extends React.Component{
    render(){
      const iconStyle= {
		  padding: '0px 10px', 
		  fontSize: '18px'
	  }
      const dataSource = [{
          key: '1',
          titulo: 'Tormentas fuertes en GBA Sur',
          visibilidad: 'si',
          vigencia: '6hs',
          inicio: '10/06/2018',
          acciones: 'te la regalo'
        }, {
          key: '2',
          titulo: 'Inundaciones en Tandil',
          visibilidad: 'no',
          vigencia: '3d',
          inicio: '11/06/2018',
          acciones: 'te la regalo'
        }, {
          key: '3',
          titulo: 'Tornado en Mar Azul',
          visibilidad: 'si',
          vigencia: '2hs',
          inicio: '11/06/2018',
          acciones: 'te la regalo'
        }];
        
      return (
        <Table dataSource={dataSource}>
            <Column
              title={<THeader name={{text:'Titulo'}}/> }
              dataIndex="titulo"
              key="titulo"
            />
            <Column
              title="Visibilidad"
              dataIndex="visibilidad"
              key="visibilidad"
            />
            <Column
              title="Vigencia"
              dataIndex="vigencia"
              key="vigencia"
            />
            <Column
              title="Inicio"
              dataIndex="inicio"
              key="inicio"
            />
            <Column
              title="Acciones"
              key="acciones"
              render={(text, record) => (
                <span>
                  <a href=""><Icon style={iconStyle} type="edit"/></a>
                  <a href=""><Icon style={iconStyle} type="search"/></a>
                  <a href=""><Icon style={iconStyle} type="clock-circle-o" /></a>
                  <a href=""><Icon style={iconStyle} type="delete" /></a>
                </span>
              )}
            />
        </Table>
      );
    }
}

export default Contenido;