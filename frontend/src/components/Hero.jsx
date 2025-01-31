import React from "react";
import { Link } from "react-scroll";  

function Hero() {

    // function logout() {
    //     localStorage.removeItem("token");
    //     localStorage.removeItem("smid");
    //     window.location.href = "/";
    // }

    return (
        <>
            <div class="container-xxl bg-primary hero-header">
                <div class="container px-lg-5">
                    <div class="row g-5">
                        <div class="col-lg-8 text-center text-lg-start">
                            <h1 class="text-white mb-4 animated slideInDown">Set Sail for Samudramanthan!</h1>
                            <p class="text-white pb-3 animated slideInDown">Experience a legendary voyage where knowledge, innovation, and exploration converge. Join us as we unravel the mysteries of the ocean and pioneer new waves in Ocean Engineering and Naval Architecture.</p>
                            {/* {localStorage.getItem("token") ? (
                                
                                <a onClick={logout} class="btn btn-primary-gradient py-sm-3 px-4 px-sm-5 rounded-pill me-3 animated slideInLeft">logout</a>
                            ) : (
                                <a href="/register" class="btn btn-primary-gradient py-sm-3 px-4 px-sm-5 rounded-pill me-3 animated slideInLeft">Register</a>
                            )} */}
                            <Link to="footer" class="btn btn-secondary-gradient py-sm-3 px-4 px-sm-5 rounded-pill animated slideInRight"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            >Contact Us</Link>
                        </div>
                        <div class="col-lg-4 d-flex justify-content-center justify-content-lg-end wow fadeInUp mt-0" data-wow-delay="0.3s">
                            <img class="img-fluid" src="img/logo.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
