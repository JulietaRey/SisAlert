import React from 'react';
import {Table} from 'antd'
class Contenido extends React.Component{
    render(){
        const backstyle= {
            padding: '1em'
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
          
          const columns = [{
            title: 'Titulo',
            dataIndex: 'titulo',
            key: 'titulo',
          }, {
            title: 'Visibilidad',
            dataIndex: 'visibilidad',
            key: 'visibilidad',
          }, {
            title: 'Vigencia',
            dataIndex: 'vigencia',
            key: 'vigencia',
          }, {
            title: 'Inicio',
            dataIndex: 'inicio',
            key: 'inicio',
          }, {
            title: 'Acciones',
            dataIndex: 'acciones',
            key: 'acciones',
          }];
          
        return (
            <Table style= {backstyle} dataSource={dataSource} columns={columns}/>
        );
    }
}

export default Contenido;