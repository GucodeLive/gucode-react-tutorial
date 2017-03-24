import React from 'react'
import RepositoryListItem from './RepositoryListItem.react'

class RepositoryList extends React.Component {

    state = {
        repositoryNames: [
            "facebook/react",
            "vuejs/vue",
            "angular/angular"
        ]
    }

    render() {
        const repositoryItems = this.state.repositoryNames.map( (name) => {
            return <RepositoryListItem repositoryName={name} key={name} />
        })
        return (
            <div className="section">
                { repositoryItems }
            </div>
        )
    }
}

export default RepositoryList