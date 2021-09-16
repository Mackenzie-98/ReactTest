import React from 'react';
import * as RJD from '../../../../lib/main';
import { TextNodeModel } from './TextNodeModel';

export class TextNodeWidget extends React.Component {
  static defaultProps = {
    node: null,
    color: 'rgb(224, 98, 20)'
  };

  onRemove() {
    const { node, diagramEngine } = this.props;
    node.remove();
    diagramEngine.forceUpdate();
  }

  getInPort() {
    const { node, color, displayOnly } = this.props;
    let inputNode = node;

    if (displayOnly) {
      inputNode = new TextNodeModel(node.name, color);
    }

    return inputNode.getInPort ? <RJD.DefaultPortLabel model={inputNode.getInPort()} key='in-port' /> : null;
  }

  getOutPort() {
    const { node, color, displayOnly } = this.props;
    let outputNode = node;

    if (displayOnly) {
      outputNode = new TextNodeModel(node.name, color);
    }

    return outputNode.getOutPort ? <RJD.DefaultPortLabel model={outputNode.getOutPort()} key='out-port' /> : null;
  }

  render() {
    const { node, displayOnly, color: displayColor } = this.props;
    const { name, color } = node;
    const style = {};
    if (color || displayColor) {
      style.background = color || displayColor;
    }

    return (
      <div className='text-node' >
        <div className="left-panel">
          {!displayOnly ? <div className='in'> {this.getInPort()} </div> : null}
        </div>
        
        <div className='body-textnode'>
            {!displayOnly ? <div className='fa fa-close' onClick={this.onRemove.bind(this)} /> : null}
            {!displayOnly ? <div className= "body-text" contenteditable="true" scro onInput={e => editTask(item.id, e.currentTarget.textContent)}>Text</div> 
            : <div className= "body-text">Text</div> }
        </div>
        <div className="right-panel">
          {!displayOnly ? <div className='out'> {this.getOutPort()} </div> : null}
        </div>
      </div>
    );
  }
}

export const TextNodeWidgetFactory = React.createFactory(TextNodeWidget);
