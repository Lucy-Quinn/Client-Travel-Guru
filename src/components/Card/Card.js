import React from 'react'


class Card extends React.Component {
    render() {
        console.log('propssss', this.props);
        return (
            <div>
                <h1>{this.props.posts.title}</h1>
            </div>
        )
    }
}

export default Card;
