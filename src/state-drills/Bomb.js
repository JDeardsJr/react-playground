import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        //console.log('componentDidMount')
        this.interval = setInterval(() => {
            //console.log('setInterval')
            const newCount = this.state.count + 1
            this.setState({
                count: newCount
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    renderDisplay() {
        const { count } = this.state
        if (count >= 8) {
            clearInterval(this.interval)
            return 'Boom!!!!'
        } else if (count % 2 === 0) {
            return 'tick'
        } else {
            return 'tock'
        }
    }

    render() {
        return (
            <div>
                <p>{this.renderDisplay()}</p>
            </div>
        )
    }
}

export default Bomb;