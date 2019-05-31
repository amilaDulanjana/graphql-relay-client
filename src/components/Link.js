import React, { Component } from 'react'
import {
    createFragmentContainer,
    graphql
} from 'react-relay'

class Link extends Component {

    render() {
        console.log("Link", this.props)
        return (
            <div>
                <div>{this.props.link.id} ({this.props.link.url})</div>
            </div>
        )
    }

    _voteForLink = async () => {
        // ... you'll implement this in chapter 6  
    }

}

export default createFragmentContainer(Link, {
    link: graphql`
        fragment Link_link on Link {
            id
            url
        }
    `
})