import React, { useEffect, useRef } from 'react';

const Home = () => {
    const planeRef = useRef(null);

    useEffect(() => {
        const el = planeRef.current;
        if (!el) return;

        const onAnimationEnd = () => {
            el.classList.remove('fly');
        };

        const run = () => {
            // console for debug if needed
            // eslint-disable-next-line no-console
            console.log('plane: start animation');
            el.classList.remove('fly');
            // force reflow to restart animation
            // eslint-disable-next-line no-unused-expressions
            el.offsetWidth;
            el.classList.add('fly');
        };

        el.addEventListener('animationend', onAnimationEnd);
        // initial run and repeat every 18s
        run();
        const id = setInterval(run, 18000);
        return () => {
            clearInterval(id);
            el.removeEventListener('animationend', onAnimationEnd);
        };
    }, []);

    return(
        <div>
            <div className="profile-card">
                <img id="fly-demo" ref={planeRef} alt="paper plane" src="my-paper-plane.png"/>    
                <header>
                    <h1>ROJINA DEUJA</h1>
                    <h2>From the Himalayas to Silicon Valley</h2>
                </header>
                <div className="profile-bio">
                    <p><span className="large-text">In 2019, </span>I travelled half-way across the world to pursue a career in Computer Science.<br/>I currently work as an <strong>MTS Software Engineer at Salesforce</strong>, building scalable solutions in the heart of San Francisco.
                    <br/><br/>
                    <h3>Outside of work:</h3><b>Travel, Art and Adventure</b> 
                    <br/><i>(No, I haven't climbed the Everest ...yet).</i>
                    <br/><br/>
                    <b>Want to talk tech, trails, or ideas?</b> &rarr; <a href="mailto: rojinadeuja33g@gmail.com"> Email</a></p><br/>
                    <a href="/docs/deuja_rojina_resume.pdf" target="_blank" rel="noopener noreferrer"> 
                        <button id='btn-download' type="submit" className="btn-download"><span style={{ paddingBottom: '0.3em', borderBottomStyle: 'solid' }}>View Resume</span></button>
                    </a> 
                </div>
            </div>
    </div>
    )
}

export default Home;
