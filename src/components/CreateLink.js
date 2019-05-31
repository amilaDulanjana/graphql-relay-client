import React, { Component } from 'react'
import CreateLinkMutation from './mutations/CreateLinkMutation'
import { GC_USER_ID } from './constants'

class CreateLink extends Component {

    state = {
        url: ''
    }

    _createLink = () => {
        const postedById = localStorage.getItem(GC_USER_ID)
        if (!postedById) {
            console.error('No user logged in')
            return
        }
        const { url } = this.state
        CreateLinkMutation(postedById, url, () => console.log(`Mutation completed`))
    }

    render() {
        return (
            <div>
                <div className='flex flex-column mt3'>
                    {/* <input
                        className='mb2'
                        value={this.state.description}
                        onChange={(e) => this.setState({ description: e.target.value })}
                        type='text'
                        placeholder='A description for the link'
                    /> */}
                    <input
                        className='mb2'
                        value={this.state.url}
                        onChange={(e) => this.setState({ url: e.target.value })}
                        type='text'
                        placeholder='The URL for the link'
                    />
                </div>
                <button
                    type="submit"
                    className='button'
                    onClick={() => this._createLink()}
                >
                    submit
                </button>
            </div>
        )
    }
}

export default CreateLink