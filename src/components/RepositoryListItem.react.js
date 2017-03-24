import React from 'react'
import { fetchRepository } from 'api'

class RepositoryListItem extends React.Component {

    state = {
        repository: {}
    }

    componentDidMount() {        
        fetchRepository(this.props.repositoryName)
        .then( repository => {
            this.setState({ 
                repository: repository
            })
        })
    }

    render() {
        const { 
            full_name = "Loading...",
            description,
            stargazers_count,
            open_issues_count,
            forks_count,
            watchers_count,
            organization = {}
         } = this.state.repository

        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img alt="" src={organization.avatar_url}/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong><a className="title" href="#/frontend-war-react/facebook/react">
                                { full_name }
                                </a></strong>
                            </p>
                            <p className="subtitle">
                                { description }
                            </p>
                        </div>
                    </div>
                </article>

                <hr/>

                <nav className="level is-mobile">
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Stars</p>
                            <a className="title" href="#/frontend-war-react/">{ stargazers_count }</a>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Open Issues</p>
                            <p className="title">{ open_issues_count }</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Forks</p>
                            <p className="title">{ forks_count }</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                        <p className="heading">Watchers</p>
                        <p className="title">{ watchers_count }</p>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default RepositoryListItem