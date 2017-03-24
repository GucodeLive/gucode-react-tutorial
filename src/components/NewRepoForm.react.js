import React from 'react'

class NewRepoForm extends React.Component {
    render() {
        return (
            <div className="section">
                <form>
                    <div className="field">
                        <label className="label">Add Repository</label>
                        <p className="control">
                            <input className="input is-large" type="repoName" placeholder="Enter Repository Name"/>
                        </p>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewRepoForm