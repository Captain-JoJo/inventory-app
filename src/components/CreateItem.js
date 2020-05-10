import React, { Component } from 'react'

class CreateItem extends Component {

    render() {
        return (
            <div>
                <input type="text" placeholder="Item" />
                <button type="submit">Submit</button>
            </div>
        )
    }
}
export default CreateItem