import React, { Component } from 'react'
import {
    createFragmentContainer,
    graphql
} from 'react-relay';
import Link from './Link'
import NewVoteSubscription from './subscriptions/NewVoteSubscription'

class LinkList extends Component {

    componentDidMount() {
        NewVoteSubscription()
    }

    render() {
        return (
            <div>
                {this.props.viewer.allLinks.edges.map(({ node }, index) =>
                    <Link key={node.__id} link={node} index={index} />
                )}
            </div>
        )
    }

}

export default createFragmentContainer(LinkList, {
    viewer: graphql`
        fragment LinkList_viewer on Viewer {
            allLinks(last: 100, orderBy: createdAt_DESC) {
            edges {
                node {
                    ...Link_link
                }
            }
            }
        }`
})