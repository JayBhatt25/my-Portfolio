import React from 'react'
import './value-proposition.scss'
import '../shared/animated-titles.scss'

export default function ValueProposition() {
    return (
        <div className="value-proposition">
            <div className="fade-in">
                <h1 className="vp_title animated-title value-prop-title">Value Proposition</h1>
            </div>
            <div className="fade-in vp-container">
                <p>
                    I turn complex problems into dependable, scalable software - combining a Master's
                    in Computer Science with 3+ years of hands-on experience building and shipping
                    production systems at American Tire Distributors. As an AWS Certified Developer,
                    I bring cloud-native thinking to every project, and my portfolio of ML/AI artifacts
                    reflects a hands-on grasp of machine learning that extends beyond traditional
                    software engineering. I care as much about clean, maintainable code as I do about
                    solving the problem in front of me.
                </p>
            </div>
        </div>
    )
}
