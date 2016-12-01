import React from 'react';
import fetch from 'isomorphic-fetch';

import Layout from '../components/Layout';
import TimelineItem from '../components/TimelineItem';

const {
    STACKABLE_URL,
    STACKABLE_KEY,
    STACKABLE_SKILLS,
    STACKABLE_TIMELINE
} = require('../utils/config').default;

const TITLE = 'My Resume';

class Resume extends React.Component {
    static async getInitialProps() {
        const skillsRes = await fetch(`${STACKABLE_URL}/containers/${STACKABLE_SKILLS}/items?token=${STACKABLE_KEY}`);
        const skills = await skillsRes.json();
        const timelineRes = await fetch(`${STACKABLE_URL}/containers/${STACKABLE_TIMELINE}/items?token=${STACKABLE_KEY}`);
        const timeline = await timelineRes.json();
        return { timeline, skills };
    }

    render() {
        const { timeline, skills } = this.props;
        const skillsData = { personal: [], programming: [] };
        skills.data.map(((skill) => {
            if (skill.data.type === 'personal') {
                skillsData.personal.push(skill.data.title);
            } else {
                skillsData.programming.push(skill.data.title);
            }
        }));

        return (
            <Layout title={TITLE}>
                <section className="page-header" style={{ backgroundImage: 'url(static/img/page_header_placeholder.jpg)' }}>
                    <div className="page-head-inside">
                        <div className="container">
                            <h1 className="font-reg">All About Me</h1>
                            <p className="font-reg">
                                Welcome to my timeline. My <strong>work experience</strong> and <strong>education</strong> details are almost explained here. Take a moment to <strong>check out</strong>!
                            </p>
                        </div>
                    </div>
                </section>

                <section className="page-section about-page">
                    <div className="container">
                        <ul className="row about-items">
                            <li className="col-xlarge-6 col-medium-6">
                                <div className="about-item font-reg">
                                    <i className="fa fa-pencil-square-o" />
                                    <h3>Download my CV</h3>
                                    <p>You can download my CV in pdf format if you like. I create usable web interfaces, front and back end coding stuff and almost anything. But i love what i do.</p>
                                </div>
                            </li>
                            <li className="col-xlarge-6 col-medium-6">
                                <div className="about-item font-reg">
                                    <i className="fa fa-pencil-square-o" />
                                    <h3>LINKEDIN PROFILE</h3>
                                    <p>You can view my LinkedIn profile and use it to get in touch.</p>
                                </div>
                            </li>
                        </ul>

                        <ul className="row about-items">
                            <li className="col-xlarge-6 col-medium-6">
                                <div className="about-item font-reg">
                                    <i className="fa fa-pencil-square-o" />
                                    <h3>Programming Skills</h3>
                                    <p>Man behind the gun, any sophisticated weapons. Human remains that taking the role. We are experienced in utilizing all resources, for best results and perfect quality.</p>
                                    <div className="sidebar-widget list-widget">
                                        <ul className="font-reg">
                                            {skillsData.programming.map(((item, index) => <li key={index}><a href="">{item}</a></li>))}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="col-xlarge-6 col-medium-6">
                                <div className="about-item font-reg">
                                    <i className="fa fa-pencil-square-o" />
                                    <h3>Personal Skills</h3>
                                    <p>Man behind the gun, any sophisticated weapons. Human remains that taking the role. We are experienced in utilizing all resources, for best results and perfect quality.</p>
                                    <div className="sidebar-widget list-widget">
                                        <ul className="font-reg">
                                            {skillsData.personal.map(((item, index) => <li key={index}><a href="">{item}</a></li>))}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>


                <section className="page-section cd-container" id="cd-timeline">

                    {/* <div className="cd-timeline-block">
                        <div className="cd-timeline-img cd-movie">
                            <i className="bookmark icon" />
                        </div>
                        <div className="cd-timeline-content">
                            <h2>Title of section 2</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <a href="#0" className="cd-read-more">Read more</a>
                            <span className="cd-date">Jan 18</span>
                        </div>
                    </div>*/}

                    {timeline.data.map(item => <TimelineItem key={item._id} item={item.data} />)}
                </section>
            </Layout>
        );
    }
}

Resume.propTypes = {
    timeline: React.PropTypes.object,
    skills: React.PropTypes.object
};

export default Resume;
