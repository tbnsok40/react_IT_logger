import React from 'react';
import LUXFileDropZone from 'luna-rocket/LUXFileDropZone';

export default class LUXFileDropZoneExample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedFiles: []
        }
    }

    handleChange = (files, type, arg) => {
        this.setState({ selectedFiles: files });
        if (type === "delete") {
            console.log('type : ', type);
            console.log('delFile : ', arg);
        }
    }

    handleTouchTabCloud = () => {
        console.log('handleTouchTabCloud');
    }

    render() {
        return (
            <div style={{display: 'block'}}>
                <LUXFileDropZone
                    onChange={this.handleChange}
                    onTouchTapCloud={this.handleTouchTabCloud}
                    selectedFiles={this.state.selectedFiles}
                    accept="image/png"
                />
            </div>
        );
    }
}