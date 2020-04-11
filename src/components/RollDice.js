import React, { Component } from 'react';
import Die from './Die';

export default class RollDice extends Component {
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    }
    constructor(props) {
        super(props)
    
        this.state = {
             dice1: 'one', dice2: 'two' }
         }
    
      roll  () {
         const newDie1 =  this.props.sides[Math.floor((Math.random() * this.props.sides.length))];

         const newDie2 =  this.props.sides[Math.floor((Math.random() * this.props.sides.length))];

            this.setState({
                dice1 : newDie1,
                dice2: newDie2
            });

      }
    
    render() {
        return (
            <div>
                <Die face = {this.state.dice1} />
                <Die face = {this.state.dice2} />
                <button className = "btn btn-primary" onClick = {this.roll}> Rolled Dice </button>
            </div>
        )
    }
}
