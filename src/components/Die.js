import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

export default class Die extends Component {
    render() {
        const {face} = this.props;
        return (
            <>
            <DieKlass>
                <i className = { `die fas fa-dice-${face}` } > </i>
            </DieKlass>
            </>
        )
    }
}

const DieKlass = styled.div`

.die{
    padding: 0.25rem;
    font-size: 10rem;
    color: slateblue;
}
`;