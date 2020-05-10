import React, { Component } from 'react'
import { listInventoryApps } from '../graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'

class ListItems extends Component {

    state = {
        posts: []
    }

    componentDidMount = async () => {
        this.getPosts()
    }

    getPosts = async () => {
        const result = await API.graphql(graphqlOperation(listInventoryApps))

        //this.setState({ posts: result.data.listInventoryApps.items })
        console.log(result.data.items)
        //console.log("All Posts: ", JSON.stringify(result.data.listPosts.items))
        //console.log("All Posts: ", result.data.listPosts.items)
    }


    render() {
        const { posts } = this.state
        return posts.map((post) => {
            return (
                <div className="posts" key={post.id}>
                    <h1> {post.items}</h1>
                    <span style={{ fontStyle: "italic", color: "#0ca5e297" }}>
                        {"Wrote by: "} {post.items}
                    </span>

                </div>
            )
        })
    }

}

export default ListItems