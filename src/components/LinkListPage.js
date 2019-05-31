import React, { Component } from 'react'
import { graphql, QueryRenderer } from 'react-relay';
import environment from '../Environment'
import LinkList from './LinkList';

export default class LinkListPage extends Component {
    render() {
        return (
            <QueryRenderer
                environment={environment}
                query={graphql`
                    query LinkListPageQuery {
                        viewer {
                        ...LinkList_viewer
                        }
                    }`
                }
                variables={{}}
                render={({ error, props }) => {
                    console.log("App", props)
                    if (error) {
                        return <div>Error!</div>;
                    }
                    if (!props) {
                        return <div>Loading...</div>;
                    }
                    return <LinkList viewer={props.viewer} />
                }}
            />
        )
    }
}
