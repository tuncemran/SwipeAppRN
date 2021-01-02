import React, {Component} from "react";
import {
    View,
    Animated,
    PanResponder
} from "react-native";

class Deck extends Component {

    constructor(props){
        super(props);
        const position = new Animated.ValueXY();

        const panResponder = PanResponder.create({
            // any time user press down the screen this is responsible if it is true
            onStartShouldSetPanResponder: () => true,
            // drag event
            onPanResponderMove: (event, gesture) => {
                position.setValue({x: gesture.dx, y:gesture.dy});
            },
            onPanResponderRelease: () => {

            }

        });
        this.state = {panResponder, position};
    }

    renderCards(){
        return this.props.data.map(item => {
            return this.props.renderCard(item);
        }) ;
    }

    render() {
        return(
            <Animated.View
                {...this.state.panResponder.panHandlers}
                style={this.state.position.getLayout()}
            >
                {this.renderCards()}
            </Animated.View>
        );
    }
}
export default Deck
