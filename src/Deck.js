import React, {Component} from "react";
import {
    View,
    Animated,
    PanResponder
} from "react-native";

class Deck extends Component {

    constructor(props){
        super(props);

        const panResponder = PanResponder.create({
            // any time user press down the screen this is responsible if it is true
            onStartShouldSetPanResponder: () => true,
            // drag event
            onPanResponderMove: (event, gesture) => {
                console.log(gesture);
            },
            onPanResponderRelease: () => {

            }

        });

        this.state = {panResponder};
    }

    renderCards(){
        return this.props.data.map(item => {
            return this.props.renderCard(item);
        }) ;
    }

    render() {
        return(
            <View {...this.state.panResponder.panHandlers}>
                {this.renderCards()}
            </View>
        );
    }
}
export default Deck
