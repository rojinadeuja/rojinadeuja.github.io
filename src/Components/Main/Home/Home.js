import React from 'react';

const home = () => {
    return(
        <div>
            <div className="header">
                <a href="https://www.linkedin.com/in/rojinadeuja/" target="_blank">Linkedin</a><a href="https://github.com/rojinadeuja" target="_blank">Github</a>
            </div> 
            <img id="motion-demo" src="my-paper-plane.png"/>    
    <div className="profile-card" data-rotation="auto">
        <header>
            <h1>ROJINA DEUJA</h1>
            <h2>M.S. in Computer Science, University of Nebraska-Lincoln</h2>
        </header>
        <div className="profile-bio">
        <p>In 2019, I travelled half-way acorss the world to pursue Computer Science in the USA. So far, so great! 
         <br/>I work as a Graduate Teaching Assitant facilitating courses related to Data Modeling and Software Engineering.
         <br/>I love learning about the human brain, so I do my research on Machine Learning and listen to podcasts. Invisibilia and Hidden Brain are my favorites!
         <br/><br/>
         <h3>I'm currently seeking Sofware Development Internship opportunity for Summer 2021.</h3>
         Lets get in touch &rarr;
         <a href="mailto: rojinadeuja33g@gmail.com"> Email</a>
        </p><br/>
        <form id='download' method="get" action="assets/deuja_rojina_resume_2020.pdf" target="_blank">
            <button id='btn-download' type="submit"className="btn-download"><span style={{ paddingBottom: '0.3em', borderBottomStyle: 'solid' }}>View Resume</span></button>
        </form>
        </div>
    </div>
    <div className="footer"><p>Designed & Developed by Rojina Deuja | Inspired by <a href="https://codepen.io/VictoryDesign" target="_blank">David Jones</a></p></div>

    </div>)
}

export default home;