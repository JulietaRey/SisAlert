import React from 'react';
import {List, Icon} from 'antd';

class Numeros extends React.Component {
    render() {
        const headerStyle = {
            fontFamily: 'Arvo',
            color: '#153668', 
            fontWeight: 'bold',
            marginBottom: '-10px'
        }
        const data = [
            {
                number: '911',
                text: 'Central de emergencias policiales'
            },
            {
                number: '100',
                text: 'Bomberos'
            }, {
                number: '103',
                text : 'Defensa civil'
            },
            {
                number: '107',
                text: 'Emergencia médica en la vía pública'
            }

        ]
        return (
            <div>
                <h2 style={headerStyle}>Números de emergencia</h2>
                <i>Atención las 24hs</i>
                <List 
                    size = 'small'
                    dataSource = {data}
                    split={false}                    
                    renderItem={item => (<List.Item>
                        <Icon type="double-right"/>
                        <b>{item.number}</b>
                        - {item.text}
                        </List.Item>)}
                />
            </div>
        );
    }
}
export default Numeros;