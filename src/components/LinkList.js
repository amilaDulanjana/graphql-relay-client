import React, { Component } from 'react'
import {
    createFragmentContainer,
    graphql
} from 'react-relay';
import Link from './Link'


class LinkList extends Component {

    render() {
        console.log("LinkList",this.props)
        return (
            <div>
                {this.props.viewer.allLinks.edges.map(({ node }) =>
                    <Link key={node.__id} link={node} />
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