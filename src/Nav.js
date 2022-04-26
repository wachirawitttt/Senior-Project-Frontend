import React from 'react'

function Nav() {
    return (
        <>
            {/* <!-- Navigation--> */}
            <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div class="container px-4 px-lg-5">
                    <a class="navbar-brand" href="#page-top">Predicter</a>
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                            <li class="nav-item"><a class="nav-link" href="#contents">Prediction</a></li>
                            <li class="nav-item"><a class="nav-link" href="#standings">Standing</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <!-- Masthead--> */}
            <header class="masthead">
                <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                    <div class="d-flex justify-content-center">
                        <div class="text-center">
                            <h1 class="mx-auto my-0 text-uppercase">Football Match Prediction</h1>
                            <h2 class="text-white-50 mx-auto mt-2 mb-5"></h2>
                            <a class="btn btn-primary" href="#about">Get Started</a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Nav