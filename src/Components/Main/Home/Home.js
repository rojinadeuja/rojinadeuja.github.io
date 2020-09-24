import React from 'react';

const home = () => {
    return(
    <div class="profile-card">
        <header>
            <h1>ROJINA DEUJA</h1>
            <h2>M.S. in Computer Science, University of Nebraska-Lincoln</h2>
        </header>
        <div class="profile-bio">
        <p>In 2019, I travelled half-way acorss the world to pursue Computer Science in the USA. So far, so great! 
         <br/>I work as a Graduate Teaching Assitant facilitating courses related to Data Modeling and Software Engineering.
         <br/>I love learning about the human brain, through both research on Machine Learning and listening to Podcasts. Invisibilia and Hidden Brain are my favorites!
         <br/><br/>I'm seeking Sofware Development Internship for Summer 2021. Lets get in touch-
         <a href="mailto: rojinadeuja33g@gmail.com">Email</a>
        </p><br/>
        <div>
        <form id='download' method="get" action="assets/deuja_rojina_resume_2020.pdf" target="_blank">
            <button id='btn-download' type="submit"className="btn-download"><span style={{ paddingBottom: '0.5em', borderBottomStyle: 'solid' }}>Download Resume</span></button>
        </form>
    </div>
    </div>
    </div>)
}

export default home;