import React from 'react'
import DeleteButton from './button/DeleteButton'
import EditButton from './button/EditButton'

export const LoadData = ({post}) => {
    return (
        <>
            <tr>
                <td>{post.title}</td>
                <td>{post.image}</td>
                <td>{post.content}</td>
                <td>
                    <EditButton />
                    <DeleteButton />
                </td>
            </tr>
        </>
    )
}

export default LoadData