import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-fetch';

import Layout from '../components/Layout';
import GithubItem from '../components/GithubItem';

const TITLE = 'Parminder Singh Klair';

class Home extends React.Component {
    static async getInitialProps() {
        const githubRes = await fetch('https://api.github.com/users/perminder-klair/repos?per_page=6');
        const github = await githubRes.json();
        // console.log('data', data);
        return { github };
    }

    render() {
        const { github } = this.props;

        return (
            <Layout title={TITLE}>
                <section className="home-section">
                    <div id="home-featured-banner" style={{ backgroundImage: 'url(static/img/featured_placeholder_1.jpg)' }}>
                        <div className="container">
                            <div className="featured-content featured-left font-reg">
                                <h2>Hello!<br />I&#39;m Parminder Singh Klair.</h2>
                                <p>I am a <strong>Website and Application Developer</strong> based in Birmingham, UK. I enjoy working on <strong>usable, clean and practical</strong> web sites.</p>
                                <Link href="/resume"><a className="primary-button font-reg hov-bk">Learn more</a></Link>
                            </div>
                        </div>
                    </div>
                </section>

                <p>Apps and websites screen shots here like</p>
                <img src="static/img/apps-screenshots.png" role="presentation" />

                <section className="page-section">
                    <div className="container">
                        <h3>Freelancers. Vetted by Crew. Perfect for you.</h3>
                        <p>Crew connects you with an acclaimed creative professional or small studio and a smart project management system designed specifically for design and development projects. 99% of our projects have been completed on time, on budget and issue-free.</p>
                    </div>
                </section>

                <section className="page-section blog-list-3">
                    <div className="container">
                        <ul className="row">
                            {github.map(item => <GithubItem key={item.id} item={item} />)}
                        </ul>
                        <a href="https://github.com/perminder-klair" className="primary-button font-reg hov-bk" target="_blank" rel="noopener noreferrer">all repositories</a>
                    </div>
                </section>

                <section className="page-section">
                    <div className="container">
                        <h3>Tweets here</h3>
                    </div>
                </section>

                <section className="page-section">
                    <div className="container">
                        <h3>Fun facts here</h3>
                    </div>
                </section>
            </Layout>
        );
    }
}

Home.propTypes = {
    github: React.PropTypes.array
};

export default Home;
