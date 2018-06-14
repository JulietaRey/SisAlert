import React from 'react';

class ContenidoAlerta extends React.Component{
    render(){
        const FullWidth = {
            fontSize: '90%',
            color: 'white',
            textAlign: 'left',
            padding: '2em'
        }
       
        return (
            <div style={FullWidth}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  
                <br/>
            </div>
        );
    }
}

export default ContenidoAlerta;