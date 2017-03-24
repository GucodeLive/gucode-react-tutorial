import React from 'react'

class RepositoryListItem extends React.Component {
    render() {
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img alt="" src="https://avatars0.githubusercontent.com/u/69631?v=3"/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong><a className="title" href="#/frontend-war-react/facebook/react">react</a></strong>
                            </p>
                            <p className="subtitle">
                                A declarative, efficient, and flexible JavaScript library for building user interfaces.
                            </p>
                        </div>
                    </div>
                </article>

                <hr/>

                <nav className="level is-mobile">
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Stars</p>
                            <a className="title" href="#/frontend-war-react/">62689</a>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Open Issues</p>
                            <p className="title">701</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Forks</p>
                            <p className="title">11570</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                        <p className="heading">Watchers</p>
                        <p className="title">124</p>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default RepositoryListItem