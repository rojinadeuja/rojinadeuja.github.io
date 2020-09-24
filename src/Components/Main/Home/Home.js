import React from 'react';

const home = () => {
    return(
    <div class="profile-card">
        <header>
            <h1>ROJINA DEUJA</h1>
            <h2>M.S. in Computer Science, University of Nebraska-Lincoln</h2>
        </header>
        <div class="profile-bio">
        <p>In 2019, I travelled half-way acorss the world to pursue Computer Science in the USA.</p>
        </div>
        <div>
        <form id='download' method="get" action="assets/deuja_rojina_resume_2020.pdf">
            <button id='btn-download' type="submit"><span style={{ paddingBottom: '0.5em', borderBottomStyle: 'solid' }}>Download Resume</span></button>
        </form>
    </div>
    </div>)
}

export default home;