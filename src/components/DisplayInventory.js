import React, { Component } from 'react'
import CreateItem from './CreateItem'
import ListItems from './ListItems'

class DisplayInventory extends Component {
    render() {
        return (
            <div>
                <h1>Inventory App</h1>

                <CreateItem />
                <ListItems />
                <br />
                <div>
                    <h6>ReOrder</h6>
                    <input type="checkbox" />
                    <button type="submit">Submit</button>
                </div>
            </div>
        )

    }
}
export default DisplayInventory