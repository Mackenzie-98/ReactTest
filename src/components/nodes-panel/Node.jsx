import React from 'react';
import DragWrapper from './DragWrapper';
import { ImageNodeWidget } from '../nodes/imagenode/ImageNodeWidget';
import { ImageNodeModel } from '../nodes/imagenode/ImageNodeModel';
import { TextNodeWidget } from '../nodes/textnode/TextNodeWidget';
import { TextNodeModel } from '../nodes/textnode/TextNodeModel';

class Node extends React.Component {
    renderNode() {
        const { type, name, color} = this.props;

        if (type === 'imagenode') {
            const newImageNode = new ImageNodeModel(name, color, {title: name});
            return <ImageNodeWidget node={newImageNode} color={color} displayOnly/>;
        }else if( type === "textnode"){
            const newTextNode = new TextNodeModel(name, color);
            return <TextNodeWidget node={newTextNode} color={color} displayOnly/>;
        }else{
            console.warn('Unknown node type');
        }

        return null;
    }

    render() {
        const { type, name, color } = this.props;

        return (
            <DragWrapper type={type} color={color} handle = {name} style={{ display: 'inline-block' }}>
                {this.renderNode()}
            </DragWrapper>
        );
    }
}

export default Node;