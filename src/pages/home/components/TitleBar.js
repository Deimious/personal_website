import React from 'react';

export default class TitleBar extends React.Component {
    render() {
        return (
            <nav>
                Hello, {this.props.name}
            </nav>
        );
    }
}

