import React from 'react';

const home = () => {
    return(
        <div>
            <img id="fly-demo" alt="Korean Airlines Nepal to USA" src="my-paper-plane.png"/>    
            <div className="profile-card">
                <header>
                    <h1>ROJINA DEUJA</h1>
                    <h2>M.S. in Computer Science, University of Nebraska-Lincoln</h2>
                </header>
                <div className="profile-bio">
                    <p><span className="large-text">In 2019,</span> I travelled half-way acorss the world to pursue Computer Science in the USA. So far, so great!<br/>I work as a Graduate Teaching Assitant facilitating courses related to Data Modeling and Software Engineering.<br/>I'm interested in studying mind and behavior, so I do my research on Machine Learning and listen to podcasts. Invisibilia and Hidden Brain are my favorites!<br/><br/>
                    <h3>I'm currently seeking Sofware Development Internship opportunity for Summer 2021. </h3>Lets get in touch &rarr; <a href="mailto: rojinadeuja33g@gmail.com"> Email</a></p><br/>
                    <a href="/docs/deuja_rojina_resume.pdf" target="_blank" rel="noopener noreferrer"> 
                        <button id='btn-download' type="submit" className="btn-download"><span style={{ paddingBottom: '0.3em', borderBottomStyle: 'solid' }}>View Resume</span></button>
                    </a> 
                </div>
            </div>
            
    </div>
    )
}

export default home;