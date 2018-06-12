import React from 'react';
import {List, Icon} from 'antd'
class Precauciones extends React.Component{
    render(){
        const data = [
            'No saque la basura',
            'Evite circular con elementos metálicos'
        ]
        const headerStyle = {
            fontFamily: 'Arvo',
            color: '#153668', 
            fontWeight: 'bold',
            marginBottom: '-10px'
        }
        return(
            <div>
                <h2 style={headerStyle}>Precauciones</h2>
                <List dataSource={data}
                    size='small'
                    split={false}
                    renderItem={item => (<List.Item> <Icon type="double-right"/>{item}</List.Item>)}
                />
                <span>Para más información diríjase a <a href="/prevencion">prevención</a></span>
            </div>
        );
    }
}

export default Precauciones;