import React from 'react'
import RepositoryListItem from './RepositoryListItem.react'

class RepositoryList extends React.Component {
    render() {
        return (
            <div className="section">
                <RepositoryListItem repositoryName="facebook/react" />
                <RepositoryListItem repositoryName="vuejs/vue" />
                <RepositoryListItem repositoryName="angular/angular" />
            </div>
        )
    }
}

export default RepositoryList