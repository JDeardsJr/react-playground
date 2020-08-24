import React from 'react';

class HelloWorld extends React.Component {
    static defaultProps = {
        whoWorld: 'world!',
        whoFriend: 'friend!',
        whoReact: 'React!'
    };
    constructor(props) {
        super(props)
        this.state = {
            who: 'world!'
        }
    }
    handleWorldClick = () => {
        //const whoWorld = 'world!'
        this.setState({
            who: this.props.whoWorld
        })
    }
    handleFriendClick = () => {
        //const whoFriend = 'friend!'
        this.setState({
            who: this.props.whoFriend
        })
    }
    handleReactClick = () => {
        //const whoReact = 'React!'
        this.setState({
            who: this.props.whoReact
        })
    }
    render() {
        return (
            <div>
                <p>Hello, {this.state.who}</p>
                <button
                    onClick={this.handleWorldClick}
                >
                    World
                </button>
                <button
                    onClick={this.handleFriendClick}
                >
                    Friend
                </button>
                <button
                    onClick={this.handleReactClick}
                >
                    React
                </button>
            </div>
        )
    }
}

export default HelloWorld;