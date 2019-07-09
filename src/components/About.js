import React from 'react'

const About = () => {
    return (
        <div className="container center-align">
            <div className="row">
                <div className="col s12">
                    <h4>About</h4>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <p>Simple ToDo App made to practice:</p>
                    <ul>
                        <li>- React</li>
                        <li>- Redux</li>
                        <li>- React Router</li>
                        <li>- Materialize</li>
                    </ul>
                    <p>Enjoy <span role="img" aria-label="smile">&#128516;</span> </p>
                </div>
            </div>
        </div>
    )
}

export default About