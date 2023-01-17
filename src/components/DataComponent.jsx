import React, { Component } from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import axios from 'axios'
import LoadData from './LoadData'

export default class DataComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
        }
    }

    componentDidMount() {
        axios
            .get('http://127.0.0.1:8000/api/posts')
            .then(res => {
                const posts = res.data;
                this.setState({ posts });
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        // console.log(this.state.posts);
        const { posts } = this.state
        return (
            <Table striped bordered hover className="mt-3">
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Aksi</th>
            </tr>
            </thead>

            <tbody>
                { posts && posts.map((post) => (
                    <LoadData 
                    key={post.id}
                    post={post}
                    />
                ))}
            </tbody>
        </Table>
        )
    }
}