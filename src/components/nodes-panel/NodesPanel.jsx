import React from 'react';
import Node from './Node';

class NodesPanel extends React.Component {
    render() {
        return (
            <div className="panel-wrapper">
                <div className="nodes-panel">
                    <div className='node-wrapper'>
                        <Node type='textnode' name="text" color='rgb(0,0,0)' />
                    </div>
                    <hr />
                    <div className='node-wrapper'>
                        <Node type='imagenode' name="rds" color='rgb(238, 238, 238)' />
                    </div>
                    <div className='node-wrapper'>
                        <Node type='imagenode' name="ec2" color='rgb(238, 238, 238)' />
                    </div>
                    <div className='node-wrapper'>
                        <Node type='imagenode' name="elb" color='rgb(238, 238, 238)' />
                    </div>
                </div>
            </div>
        );
    }
}

export default NodesPanel;
