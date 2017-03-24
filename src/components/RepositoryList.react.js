import React from 'react'
import RepositoryListItem from './RepositoryListItem.react'

class RepositoryList extends React.Component {
    render() {
        return (
            <div className="section">
                <RepositoryListItem />
                <RepositoryListItem />
                <RepositoryListItem />
                <RepositoryListItem />
            </div>
        )
    }
}

export default RepositoryList