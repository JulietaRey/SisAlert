import React from 'react';
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
          acciones: ''
        }, {
          key: '2',
          titulo: 'Inundaciones en Tandil',
          visibilidad: 'no',
          vigencia: '3d',
          inicio: '11/06/2018',
          acciones:''
        }, {
          key: '3',
          titulo: 'Tornado en Mar Azul',
          visibilidad: 'si',
          vigencia: '2hs',
          inicio: '11/06/2018',
          acciones: ''
        }];
        
      return (
        <Table dataSource={dataSource} scroll={{ x: 1300 }}>
            <Column
              title='Titulo'
              dataIndex="titulo"
              key="titulo"
              width= '50'
              fixed="left"
            />
            <Column
              title="Visibilidad"
              dataIndex="visibilidad"
              key="visibilidad"
              width= '50'
            />
            <Column
              title="Vigencia"
              dataIndex="vigencia"
              key="vigencia"
              width= '50'

            />
            <Column
              title="Inicio"
              width= '50'

              dataIndex="inicio"
              key="inicio"
            />
            <Column
              width= '150'

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