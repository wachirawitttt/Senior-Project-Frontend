import React from 'react'

function About() {
    return (
        <>
            {/* <!-- About--> */}
            <section class="about-section text-center" id="about">
                <div class="container px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-lg-8">
                            <h2 class="text-white mb-4">About our project</h2>
                            <p class="text-white-50">
                            Football match prediction system is a system that is used to predict the result of the football match using machine learning technique.
                            Currently, we only focusing on English Premier League.
                            {/* <a href="https://startbootstrap.com/theme/grayscale/">the preview page.</a>
                            The theme is open source, and you can use it for any purpose, personal or commercial. */}
                            </p>
                        </div>
                    </div>
                    <img class="img-prem" src="assets/img/premier-league-logo4.png" alt="..." />
                </div>
            </section>
        </>
    )
}

export default About