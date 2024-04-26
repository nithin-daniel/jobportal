<script>
import Navbar from './Navbar.vue';


export default {
    components: {
        Navbar
    }
}
</script>

<template>
    <Navbar/>
    <div class="template-color-1">

        <div id="main-wrapper">



            <!-- 
  <RouterLink to="/sample">Go to Home</RouterLink>
<h1>Sample</h1> -->

            <!-- Start Popup Menu -->
            <div class="popup-mobile-manu popup-mobile-visiable">
                <div class="inner">
                    <div class="mobileheader">
                        <div class="logo">
                            <a href="index.html">
                                <img src="../src/assets/images/logo-mobile.png" alt="Multipurpose">
                            </a>
                        </div>
                        <a class="mobile-close" href="#"></a>
                    </div>
                    <div class="menu-content">
                        <ul class="menulist object-custom-menu">
                            <li class="has-mega-menu"><a href="#"><span>Home</span></a>
                                <!-- Start Dropdown Menu -->
                                <ul class="object-submenu">
                                    <li><a href="index.html"><span>Home V1</span></a></li>
                                    <li><a href="index-2.html"><span>Home V2</span></a></li>
                                    <li><a href="index-3.html"><span>Home V3</span></a></li>
                                    <li><a href="index-4.html"><span>Home V4</span></a></li>
                                </ul>
                                <!-- End Dropdown Menu -->
                            </li>

                            <li class="has-mega-menu"><a href="#"><span>Jobs</span></a>
                                <!-- Start Dropdown Menu -->
                                <ul class="object-submenu">
                                    <li><a href="job-listing.html"><span>Jobs Listing</span></a></li>
                                    <li><a href="job-with-map.html"><span>Jobs With Map</span></a></li>
                                    <li><a href="job-details.html"><span>Job Detail V1</span></a></li>
                                    <li><a href="job-details-two.html"><span>Job Detail V2</span></a></li>
                                </ul>
                                <!-- End Dropdown Menu -->
                            </li>

                            <li class="has-mega-menu"><a href="#"><span>Candidates</span></a>
                                <!-- Start Dropdown Menu -->
                                <ul class="object-submenu">
                                    <li><a href="candidates-listing.html"><span>Candidates Listing</span></a></li>
                                    <li><a href="candidate-details.html"><span>Candidate Details V1</span></a></li>
                                    <li><a href="candidate-details-two.html"><span>Candidate Details V2</span></a></li>
                                </ul>
                                <!-- End Dropdown Menu -->
                            </li>

                            <li class="has-mega-menu"><a href="#"><span>Employers</span></a>
                                <!-- Start Dropdown Menu -->
                                <ul class="object-submenu">
                                    <li><a href="employer-listing.html"><span>Employers Listing</span></a></li>
                                    <li><a href="employer-details.html"><span>Employer Detail V1</span></a></li>
                                    <li><a href="employer-details-two.html"><span>Employer Detail V2</span></a></li>
                                </ul>
                                <!-- End Dropdown Menu -->
                            </li>

                            <li class="has-mega-menu"><a href="#"><span>Blog</span></a>
                                <!-- Start Dropdown Menu -->
                                <ul class="object-submenu">
                                    <li><a href="blog.html"><span>Blog</span></a></li>
                                    <li><a href="blog-details.html"><span>Blog Details</span></a></li>
                                </ul>
                                <!-- End Dropdown Menu -->
                            </li>

                            <li class="has-mega-menu"><a href="#"><span>Pages</span></a>
                                <!-- Start Dropdown Menu -->
                                <ul class="object-submenu">
                                    <li><a href="about.html"><span>About Us</span></a></li>
                                    <li><a href="contact.html"><span>Contact Us</span></a></li>
                                    <li><a href="faq.html"><span>FAQS</span></a></li>
                                    <li><a href="pricing.html"><span>Pricing & Plan</span></a></li>
                                    <li><a href="login-register.html"><span>Login / Register</span></a></li>
                                    <li><a href="dashboard.html"><span>Dashboard</span></a></li>
                                    <li><a href="shop.html"><span>Shop</span></a></li>
                                    <li><a href="product-details.html"><span>Product Details</span></a></li>
                                    <li><a href="cart.html"><span>Cart</span></a></li>
                                    <li><a href="checkout.html"><span>Checkout</span></a></li>
                                    <li><a href="wishlist.html"><span>Wishlist</span></a></li>
                                    <li><a href="404.html"><span>404 Error</span></a></li>
                                </ul>
                                <!-- End Dropdown Menu -->
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- End Popup Menu -->

            <!-- Bottom Navbar Mobile Start -->
            <div class="bottom-navbar-mobile section d-block d-lg-none">
                <nav>
                    <ul class="list-actions">
                        <li>
                            <a class="toggle-btn active" href="index.html">
                                <span><i class="lnr lnr-home"></i></span>
                                <span class="text">Home</span>
                            </a>
                        </li>
                        <li>
                            <a class="toggle-btn toggle-btn-js" data-target="#job-list-mobile-id" href="#">
                                <span><i class="lnr lnr-list"></i></span>
                                <span class="text">Jobs list</span>
                            </a>
                        </li>
                        <li>
                            <a href="login-register.html">
                                <span><i class="lnr lnr-heart"></i></span>
                                <span class="text">Save</span>
                            </a>
                        </li>
                        <li>
                            <a class="toggle-btn-two toggle-btn-js" data-target="#notifications-mobile-id" href="#">
                                <span><i class="lnr lnr-alarm"></i></span>
                                <span class="text">Notifications</span>
                            </a>
                        </li>
                        <li>
                            <a href="login-register.html">
                                <span><i class="lnr lnr-user"></i></span>
                                <span class="text">Account</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <!-- Bottom Navbar Mobile End -->

            <!-- Bottom Navbar Mobile Popup Start -->
            <div class="mobile-popup">
                <div class="job-list-mobile" id="job-list-mobile-id">
                    <div class="heading">
                        <div class="title">
                            <i class="lnr lnr-list"></i>
                            <h3>All Jobs list</h3>
                        </div>
                        <a class="view-all" href="#">See all jobs</a>
                    </div>
                    <div class="content-popup-scroll">
                        <ul class="list-item">
                            <li><a href="job-listing.html"><i class="lnr lnr-printer"></i>Accounting </a></li>
                            <li><a href="job-listing.html"><i class="lnr lnr-film-play"></i>Broadcasting </a></li>
                            <li><a href="job-listing.html"><i class="lnr lnr-phone"></i>Customer Service </a></li>
                            <li><a href="job-listing.html"><i class="lnr lnr-bullhorn"></i>Digital Marketing </a></li>
                            <li><a href="job-listing.html"><i class="lnr lnr-chart-bars"></i>Finance & Accounting </a>
                            </li>
                            <li><a href="job-listing.html"><i class="lnr lnr-smartphone"></i>Game Mobile </a></li>
                            <li><a href="job-listing.html"><i class="lnr lnr-picture"></i>Graphics & Design </a></li>
                            <li><a href="job-listing.html"><i class="lnr lnr-home"></i>Graphics & Design </a></li>
                            <li><a href="job-listing.html"><i class="lnr lnr-database"></i>Medical Doctor </a></li>
                            <li><a href="job-listing.html"><i class="lnr lnr-dinner"></i>Restaurant </a></li>
                        </ul>
                    </div>
                </div>
                <div class="notifications-mobile" id="notifications-mobile-id">
                    <div class="heading">
                        <div class="title">
                            <i class="lnr lnr-list"></i>
                            <h3>All Notifications</h3>
                        </div>
                        <a class="view-all" href="#">See all jobs</a>
                    </div>
                    <div class="content-popup-scroll">
                        <ul class="list-item">
                            <li><a href="login-register.html"><i class="lnr lnr-book"></i><span><b
                                            class="highlight">Register now</b> to reach dream jobs easier.</span> </a>
                            </li>
                            <li><a href="job-with-map.html"><i class="lnr lnr-book"></i><span><b class="highlight">Job
                                            suggestion</b> you might be interested based on your profile.</span> </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- Bottom Navbar Mobile Popup End -->

            <!--slider section start-->
            <div class="hero-section section position-relative">
                <!--Hero Item start-->
                <div class="hero-item bg_image--1">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">

                                <!--Hero Content start-->
                                <div class="hero-content-2 left">
                                    <h2 class="title">Top Recruiting Website</h2>
                                    <h3 class="sub-title">For Professionals</h3>
                                    <p>Jobs & Job search. Find jobs in global. Executive jobs & work. Employment</p>

                                    <div class="job-search-wrap mt-90 mt-md-70 mt-sm-50 mt-xs-30">
                                        <div class="job-search-form">
                                            <form action="#">
                                                <div class="row row-5">
                                                    <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                                        <!-- Single Field Item Start  -->
                                                        <div class="single-field-item">
                                                            <i class="lnr lnr-magnifier"></i>
                                                            <input placeholder="What jobs you want?" name="keyword"
                                                                type="text">
                                                        </div>
                                                        <!-- Single Field Item End  -->
                                                    </div>

                                                    <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                                                        <!-- Single Field Item Start  -->
                                                        <div class="single-field-item">
                                                            <i class="lnr lnr-map-marker"></i>
                                                            <input class="input-field input-field-location"
                                                                placeholder="Location" name="location" type="text">
                                                            <span class="btn-action-location">
                                                                <i class="far fa-dot-circle"></i>
                                                            </span>
                                                        </div>
                                                        <!-- Single Field Item End  -->
                                                    </div>
                                                    <div class="col-lg-2 col-md-6 col-sm-6 col-12">
                                                        <div class="submit-btn">
                                                            <button class="ht-btn" type="submit"> Search</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                    </div>

                                </div>
                                <!--Hero Content end-->

                            </div>
                        </div>
                    </div>
                </div>
                <!--Hero Item end-->
            </div>
            <!--slider section end-->

            <!-- Feature Section Start -->
            <div class="feature-section section bg-image-proparty bg_image--2 pt-40 pb-10">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <!-- Single Feature Start -->
                            <div class="single-feature mb-30">
                                <div class="feature-icon">
                                    <i class="far fa-address-card"></i>
                                </div>
                                <div class="feature-content">
                                    <h3 class="title">Complete Resume</h3>
                                    <p>Create resume free & get a job</p>
                                </div>
                            </div>
                            <!-- Single Feature End -->
                        </div>
                        <div class="col-lg-4">
                            <!-- Single Feature Start -->
                            <div class="single-feature mb-30">
                                <div class="feature-icon">
                                    <i class="far fa-file-alt"></i>
                                </div>
                                <div class="feature-content">
                                    <h3 class="title">Post Job Free</h3>
                                    <p>Approach a top million resumes</p>
                                </div>
                            </div>
                            <!-- Single Feature End -->
                        </div>
                        <div class="col-lg-4">
                            <!-- Single Feature Start -->
                            <div class="single-feature mb-30">
                                <div class="feature-icon">
                                    <i class="fa fa-search-location"></i>
                                </div>
                                <div class="feature-content">
                                    <h3 class="title">Find Work</h3>
                                    <p>Get the best jobs in your area</p>
                                </div>
                            </div>
                            <!-- Single Feature End -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- Feature Section End -->

            <!-- Featured Employer Start -->
            <div class="featured-employer section pt-115 pt-lg-95 pt-md-75 pt-sm-55 pt-xs-45">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title-wrap mb-45">
                                <div class="section-title">
                                    <!-- <span>JOB FROM EMPLOYERS</span> -->
                                    <h3 class="title">Job From Employers</h3>
                                </div>
                                <div class="jetapo-link">
                                    <a href="#">Browse All Employers <i class="lnr lnr-chevron-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row row-five-column g-0 border-top-left">
                        <div class="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                            <!-- Single Employer Item Start -->
                            <div class="employer-item item-border-bottom">
                                <span class="featured-employer-label">Featured</span>
                                <div class="employer-image">
                                    <img src="../assets/images/companies_logo/logo-1.jpg" alt="">
                                </div>
                                <div class="employer-info-top">
                                    <span class="employer-location"><i class="lnr lnr-map-marker"></i> Beijing,
                                        Beijing</span>
                                    <h3 class="employer-name"><a href="/sample/lk">Digital Asset</a></h3>
                                </div>
                            </div>
                            <!-- Single Employer Item End -->
                        </div>

                        <div class="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                            <!-- Single Employer Item Start -->
                            <div class="employer-item item-border-bottom">
                                <div class="employer-image">
                                    <img src="../assets/images/companies_logo/logo-2.jpg" alt="">
                                </div>
                                <div class="employer-info-top">
                                    <span class="employer-location"><i class="lnr lnr-map-marker"></i> Victoria</span>
                                    <h3 class="employer-name"><a href="employer-details.html">Liquididea Design</a></h3>
                                </div>
                            </div>
                            <!-- Single Employer Item End -->
                        </div>

                        <div class="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                            <!-- Single Employer Item Start -->
                            <div class="employer-item item-border-bottom">
                                <span class="featured-employer-label">Featured</span>
                                <div class="rating">
                                    <span class="rating-point">4.3</span>
                                </div>
                                <div class="employer-image">
                                    <img src="../assets/images/companies_logo/logo-3.jpg" alt="">
                                </div>
                                <div class="employer-info-top">
                                    <span class="employer-location"><i class="lnr lnr-map-marker"></i> Osaka,
                                        Osaka</span>
                                    <h3 class="employer-name"><a href="employer-details.html">Shippo Company</a></h3>
                                </div>
                            </div>
                            <!-- Single Employer Item End -->
                        </div>

                        <div class="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                            <!-- Single Employer Item Start -->
                            <div class="employer-item item-border-bottom">
                                <span class="featured-employer-label">Featured</span>
                                <div class="rating">
                                    <span class="rating-point">1.7</span>
                                </div>
                                <div class="employer-image">
                                    <img src="../assets/images/companies_logo/logo-4.jpg" alt="">
                                </div>
                                <div class="employer-info-top">
                                    <span class="employer-location"><i class="lnr lnr-map-marker"></i> Chicago,
                                        California</span>
                                    <h3 class="employer-name"><a href="employer-details.html">Alpha Investing <i
                                                class="fas fa-check-circle"></i></a></h3>
                                </div>
                            </div>
                            <!-- Single Employer Item End -->
                        </div>

                        <div class="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                            <!-- Single Employer Item Start -->
                            <div class="employer-item item-border-bottom">
                                <span class="featured-employer-label">Featured</span>
                                <div class="rating">
                                    <span class="rating-point">5.0</span>
                                </div>
                                <div class="employer-image">
                                    <img src="../assets/images/companies_logo/logo-5.jpg" alt="">
                                </div>
                                <div class="employer-info-top">
                                    <span class="employer-location"><i class="lnr lnr-map-marker"></i> New York, New
                                        York</span>
                                    <h3 class="employer-name"><a href="employer-details.html">Radio Game</a></h3>
                                </div>
                            </div>
                            <!-- Single Employer Item End -->
                        </div>

                        <div class="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                            <!-- Single Employer Item Start -->
                            <div class="employer-item item-border-bottom">
                                <div class="rating">
                                    <span class="rating-point">4.0</span>
                                </div>
                                <div class="employer-image">
                                    <img src="../assets/images/companies_logo/logo-6.jpg" alt="">
                                </div>
                                <div class="employer-info-top">
                                    <span class="employer-location"><i class="lnr lnr-map-marker"></i>Seville,
                                        Andalusia</span>
                                    <h3 class="employer-name"><a href="employer-details.html">Digital Vine <i
                                                class="fas fa-check-circle"></i></a></h3>
                                </div>
                            </div>
                            <!-- Single Employer Item End -->
                        </div>

                        <div class="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                            <!-- Single Employer Item Start -->
                            <div class="employer-item item-border-bottom">
                                <span class="featured-employer-label">Featured</span>
                                <div class="rating">
                                    <span class="rating-point">5.0</span>
                                </div>
                                <div class="employer-image">
                                    <img src="../assets/images/companies_logo/logo-7.jpg" alt="">
                                </div>
                                <div class="employer-info-top">
                                    <span class="employer-location"><i class="lnr lnr-map-marker"></i> London,
                                        England</span>
                                    <h3 class="employer-name"><a href="employer-details.html">Vsmarttech</a></h3>
                                </div>
                            </div>
                            <!-- Single Employer Item End -->
                        </div>

                        <div class="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                            <!-- Single Employer Item Start -->
                            <div class="employer-item item-border-bottom">
                                <div class="rating">
                                    <span class="rating-point">3.9</span>
                                </div>
                                <div class="employer-image">
                                    <img src="../assets/images/companies_logo/logo-8.jpg" alt="">
                                </div>
                                <div class="employer-info-top">
                                    <span class="employer-location"><i class="lnr lnr-map-marker"></i> Hamburg,
                                        Hamburg</span>
                                    <h3 class="employer-name"><a href="employer-details.html">BowThemes</a></h3>
                                </div>
                            </div>
                            <!-- Single Employer Item End -->
                        </div>

                        <div class="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                            <!-- Single Employer Item Start -->
                            <div class="employer-item item-border-bottom">
                                <span class="featured-employer-label">Featured</span>
                                <div class="rating">
                                    <span class="rating-point">5.0</span>
                                </div>
                                <div class="employer-image">
                                    <img src="../assets/images/companies_logo/logo-9.jpg" alt="">
                                </div>
                                <div class="employer-info-top">
                                    <span class="employer-location"><i class="lnr lnr-map-marker"></i> Dhaka,
                                        Bangladesh</span>
                                    <h3 class="employer-name"><a href="employer-details.html">HasThemes</a></h3>
                                </div>
                            </div>
                            <!-- Single Employer Item End -->
                        </div>

                        <div class="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                            <!-- Single Employer Item Start -->
                            <div class="employer-item item-border-bottom">
                                <div class="rating">
                                    <span class="rating-point">4.9</span>
                                </div>
                                <div class="employer-image">
                                    <img src="../assets/images/companies_logo/logo-10.jpg" alt="">
                                </div>
                                <div class="employer-info-top">
                                    <span class="employer-location"><i class="lnr lnr-map-marker"></i> Hanoi, Hà
                                        Nội</span>
                                    <h3 class="employer-name"><a href="employer-details.html">HasTech</a></h3>
                                </div>
                            </div>
                            <!-- Single Employer Item End -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- Featured Employer End -->







            <!-- Testimonial Section Start -->
            <div
                class="testimonial-section section bg-image-proparty bg_image--2 pt-115 pt-lg-95 pt-md-75 pt-sm-55 pt-xs-45 pb-180 pb-lg-160 pb-md-140 pb-sm-60 pb-xs-30">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-6">
                            <div class="section-title-wrap mb-45">
                                <div class="section-title">
                                    <span> OUR HAPPY CLIENTS</span>
                                    <h3 class="title"> From Testimonials</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-slider">

                        <div class="col-lg-6">
                            <!-- Single Testimonial Start -->
                            <div class="single-testimonial">
                                <div class="testimonial-author">
                                    <div class="testimonial-avatar">
                                        <img src="../src/assets/images/testimonial/testimonial-1.png" alt="">
                                    </div>
                                    <div class="testimonial-meta">
                                        <h5 class="name">Kilian Sanjeev</h5>
                                        <p class="text">
                                            <span class="position">CEO at</span>
                                            <span class="company theme-color">Alpha Investing</span>
                                        </p>
                                    </div>
                                    <span class="icon-quote theme-color">
                                        <i class="fas fa-quote-right"></i>
                                    </span>
                                </div>
                                <div class="testimonial-comment">
                                    <p>"I am so pleased with this product. Jopota Recruitment has completely surpassed
                                        our
                                        expectations. If you aren't sure, always go for Jopota Recruitment. Jopota
                                        Recruitment is the real deal!"</p>
                                </div>
                            </div>
                            <!-- Single Testimonial End -->
                        </div>



                        <div class="col-lg-6">
                            <!-- Single Testimonial Start -->
                            <div class="single-testimonial">
                                <div class="testimonial-author">
                                    <div class="testimonial-avatar">
                                        <img src="../src/assets/images/testimonial/testimonial-3.jpg" alt="">
                                    </div>
                                    <div class="testimonial-meta">
                                        <h5 class="name">Kilian Sanjeev</h5>
                                        <p class="text">
                                            <span class="position">Freelance Designer at</span>
                                            <span class="company theme-color">Alpha</span>
                                        </p>
                                    </div>
                                    <span class="icon-quote theme-color">
                                        <i class="fas fa-quote-right"></i>
                                    </span>
                                </div>
                                <div class="testimonial-comment">
                                    <p>"I am so pleased with this product. Jopota Recruitment has completely surpassed
                                        our
                                        expectations. If you aren't sure, always go for Jopota Recruitment. Jopota
                                        Recruitment is the real deal!"</p>
                                </div>
                            </div>
                            <!-- Single Testimonial End -->
                        </div>

                    </div>
                </div>
            </div>
            <!-- Testimonial Section End -->

            <!-- Funfact Section Start  -->
            <div class="funfact-section section mt--60 pb-50 pb-sm-0 pb-xs-0">
                <div class="container">
                    <div class="row g-0 border-top-left">

                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <!-- Single Funfact Start -->
                            <div class="single-funfact">
                                <div class="icon-img">
                                    <img src="../src/assets/images/icons/candidates.png" alt="">
                                </div>
                                <div class="funfact-content">
                                    <span class="counter">87,360</span>
                                    <span class="text theme-color">Candidates</span>
                                </div>
                            </div>
                            <!-- Single Funfact End -->
                        </div>

                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <!-- Single Funfact Start -->
                            <div class="single-funfact">
                                <div class="icon-img">
                                    <img src="../src/assets/images/icons/total-jobs.png" alt="">
                                </div>
                                <div class="funfact-content">
                                    <span class="counter">20,258</span>
                                    <span class="text theme-color">Total Jobs</span>
                                </div>
                            </div>
                            <!-- Single Funfact End -->
                        </div>

                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <!-- Single Funfact Start -->
                            <div class="single-funfact">
                                <div class="icon-img">
                                    <img src="../src/assets/images/icons/employers.png" alt="">
                                </div>
                                <div class="funfact-content">
                                    <span class="counter">8,650</span>
                                    <span class="text theme-color">Employers</span>
                                </div>
                            </div>
                            <!-- Single Funfact End -->
                        </div>

                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <!-- Single Funfact Start -->
                            <div class="single-funfact">
                                <div class="icon-img">
                                    <img src="../src/assets/images/icons/job-applications.png" alt="">
                                </div>
                                <div class="funfact-content">
                                    <span class="counter">50,299</span>
                                    <span class="text theme-color">job applications</span>
                                </div>
                            </div>
                            <!-- Single Funfact End -->
                        </div>

                    </div>
                </div>
            </div>
            <!-- Funfact Section Start  -->

            <!-- CTA Section Start  -->
            <div class="cta-section section bg_image--3 height-100vh pt-50 pt-xs-40">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="cta-wrap mb-45">
                                <div class="cta-info">
                                    <span> Getting started to work</span>
                                    <h3 class="title"> Don’t just find. Be found. Put your <br> CV in front of great
                                        employers</h3>
                                    <p>It helps you to increase your chances of finding a suitable job and let
                                        recruiters
                                        <br> contact you about jobs that are not needed to pay for advertising.
                                    </p>
                                    <!-- <a class="ht-btn lg-btn" href="#"><i class="lnr lnr-cloud-upload"></i>Upload Your
                                Resume</a> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- CTA Section End  -->

            <!-- Brand Section Start  -->
            <div class="brand-section section bg_color--3 pt-40 pb-40">
                <div class="container">
                    <div class="row row-five-column align-items-center">

                        <div class="col-xl-2 col-20">
                            <div class="brand-heading">
                                <h3 class="title">We are <br> trusted by</h3>
                            </div>
                        </div>

                        <div class="col-xl-2 col-20">
                            <!-- Single Brand Start  -->
                            <div class="single-brand">
                                <a href="#"><img src="../assets/images/brand/brand-1.png" alt=""></a>
                            </div>
                            <!-- Single Brand End -->
                        </div>

                        <div class="col-xl-2 col-20">
                            <!-- Single Brand Start  -->
                            <div class="single-brand">
                                <a href="#"><img src="../assets/images/brand/brand-2.png" alt=""></a>
                            </div>
                            <!-- Single Brand End -->
                        </div>

                        <div class="col-xl-2 col-20">
                            <!-- Single Brand Start  -->
                            <div class="single-brand">
                                <a href="#"><img src="../assets/images/brand/brand-3.png" alt=""></a>
                            </div>
                            <!-- Single Brand End -->
                        </div>

                        <div class="col-xl-2 col-20">
                            <!-- Single Brand Start  -->
                            <div class="single-brand">
                                <a href="#"><img src="../assets/images/brand/brand-4.png" alt=""></a>
                            </div>
                            <!-- Single Brand End -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- Brand Section End  -->


            <!--Footer section start-->
            <footer class="footer-section section">

                <!-- Footer Top Section Start -->
                <div
                    class="footer-top-section section pt-115 pt-lg-95 pt-md-75 pt-sm-55 pt-xs-45 pb-90 pb-lg-70 pb-md-40 pb-sm-20 pb-xs-15">
                    <div class="container">
                        <div class="row">

                            <div class="col-xl-4 col-lg-3 col-md-6">
                                <!-- Footer Widget Start -->
                                <div class="footer-widget mb-30">
                                    <h6 class="title">Contact Info</h6>
                                    <div class="address">
                                        <i class="lnr lnr-map-marker"></i>
                                        <span>8375 E. Heather Drive Tonawanda, Manchester 14150, United Kingdom</span>
                                    </div>
                                    <div class="email">
                                        <i class="lnr lnr-envelope"></i>
                                        <span>jopota@recruitment.com</span>
                                    </div>
                                    <div class="phone theme-color">(+1) 000 987-1234</div>
                                    <div class="footer-widget-image d-flex mt-35">
                                        <a class="mr-5" href="#"><img
                                                src="../src/assets/images/app-store/app-store-2.png" alt=""></a>
                                        <a href="#"><img src="../src/assets/images/app-store/app-chplay-2.png"
                                                alt=""></a>
                                    </div>
                                </div>
                                <!-- Footer Widget End -->
                            </div>

                            <div class="col-xl-2 col-lg-2 col-md-6">
                                <!-- Footer Widget Start -->

                                <!-- Footer Widget End -->
                            </div>

                            <div class="col-xl-2 col-lg-3 col-md-6">
                                <!-- Footer Widget Start -->

                                <!-- Footer Widget End -->
                            </div>

                            <div class="col-xl-4 col-lg-4 col-md-6">
                                <!-- Footer Widget Start -->
                                <div class="footer-widget mb-30">
                                    <h6 class="title">Newsletter</h6>
                                    <div class="newsletter">
                                        <p>Join our email subscription now to get updates on <strong>new jobs</strong>
                                            and
                                            <strong>notifications</strong>.
                                        </p>
                                        <div class="newsletter-form">
                                            <form id="mc-form" class="mc-form">
                                                <input type="email" placeholder="Enter Your email..." required=""
                                                    name="EMAIL">
                                                <button class="ht-btn small-btn" type="submit"
                                                    value="submit">Subscribe</button>
                                            </form>
                                        </div>
                                        <!-- mailchimp-alerts Start -->
                                        <div class="mailchimp-alerts">
                                            <div class="mailchimp-submitting"></div><!-- mailchimp-submitting end -->
                                            <div class="mailchimp-success"></div><!-- mailchimp-success end -->
                                            <div class="mailchimp-error"></div><!-- mailchimp-error end -->
                                        </div>
                                        <!-- mailchimp-alerts end -->
                                    </div>
                                </div>
                                <!-- Footer Widget End -->
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Footer Top Section End -->

                <!--Footer bottom start-->
                <div class="footer-bottom section fb-60">
                    <div class="container">
                        <div class="row g-0 st-border pt-35 pb-35 align-items-center justify-content-between">
                            <div class="col-lg-6 col-md-6">
                                <div class="copyright">
                                    <p>&copy;2024 <a href="https://hasthemes.com/">Jetapo</a>. All rights reserved.</p>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="footer-social">
                                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                    <a href="#"><i class="fab fa-google"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--Footer bottom end-->

            </footer>
            <!--Footer section end-->

            <!-- Modal Area Start -->
            <div class="modal fade quick-view-modal-container" id="quick-view-modal-container" tabindex="-1"
                role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="col-xl-12 col-lg-12">
                                <div class="row g-0">

                                    <div class="col-lg-4">
                                        <div class="login-register-form-area">
                                            <div class="login-tab-menu">
                                                <ul class="nav">
                                                    <li><a class="active show" data-bs-toggle="tab"
                                                            href="#login">Login</a>
                                                    </li>
                                                    <li><a data-bs-toggle="tab" href="#register">Register</a></li>
                                                </ul>
                                            </div>
                                            <div class="tab-content">
                                                <div id="login" class="tab-pane fade show active">
                                                    <div class="login-register-form">
                                                        <form action="#" method="post">
                                                            <p>Login to Jotopa with your registered account</p>
                                                            <div class="row">
                                                                <div class="col-12">
                                                                    <div class="single-input">
                                                                        <input type="text"
                                                                            placeholder="Username or Email" name="name">
                                                                    </div>
                                                                </div>
                                                                <div class="col-12">
                                                                    <div class="single-input">
                                                                        <input type="password" placeholder="Password"
                                                                            name="password">
                                                                    </div>
                                                                </div>
                                                                <div class="col-12">
                                                                    <div class="checkbox-input">
                                                                        <input type="checkbox"
                                                                            name="login-form-remember"
                                                                            id="login-form-remember">
                                                                        <label for="login-form-remember">Remember
                                                                            me</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 mb-25"><button
                                                                        class="ht-btn">Login</button></div>
                                                            </div>
                                                        </form>
                                                        <div class="divider">
                                                            <span class="line"></span>
                                                            <span class="circle">or login with</span>
                                                        </div>
                                                        <div class="social-login">
                                                            <ul class="social-icon">
                                                                <li><a class="facebook" href="#"><i
                                                                            class="fab fa-facebook"></i></a></li>
                                                                <li><a class="twitter" href="#"><i
                                                                            class="fab fa-twitter"></i></a></li>
                                                                <li><a class="linkedin" href="#"><i
                                                                            class="fab fa-linkedin"></i></a></li>
                                                                <li><a class="google" href="#"><i
                                                                            class="fab fa-google-plus"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="register" class="tab-pane fade">
                                                    <div class="login-register-form">
                                                        <form action="#" method="post">
                                                            <p>Create Your account</p>
                                                            <div class="row row-5">
                                                                <div class="col-12">
                                                                    <div class="single-input">
                                                                        <input type="text" placeholder="Your Username"
                                                                            name="name">
                                                                    </div>
                                                                </div>
                                                                <div class="col-12">
                                                                    <div class="single-input">
                                                                        <input type="email"
                                                                            placeholder="Your Email Address"
                                                                            name="emain">
                                                                    </div>
                                                                </div>
                                                                <div class="col-sm-6">
                                                                    <div class="single-input">
                                                                        <input type="password" placeholder="Password"
                                                                            name="password">
                                                                    </div>
                                                                </div>
                                                                <div class="col-sm-6">
                                                                    <div class="single-input">
                                                                        <input type="password"
                                                                            placeholder="Confirm Password"
                                                                            name="conPassword">
                                                                    </div>
                                                                </div>
                                                                <div class="col-6">
                                                                    <div class="checkbox-input">
                                                                        <input type="checkbox"
                                                                            name="login-form-candidate"
                                                                            id="login-form-candidate">
                                                                        <label for="login-form-candidate">I am a
                                                                            candidate</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-6">
                                                                    <div class="checkbox-input">
                                                                        <input type="checkbox"
                                                                            name="login-form-employer"
                                                                            id="login-form-employer">
                                                                        <label for="login-form-employer">I am a
                                                                            employer</label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-12">
                                                                    <div class="register-account">
                                                                        <input id="register-terms-conditions"
                                                                            type="checkbox" class="checkbox" checked=""
                                                                            required="">
                                                                        <label for="register-terms-conditions">I read
                                                                            and
                                                                            agree to the <a href="#">Terms &amp;
                                                                                Conditions</a> and <a href="#">Privacy
                                                                                Policy</a></label>
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 mb-25"><button
                                                                        class="ht-btn">Register</button></div>
                                                            </div>
                                                        </form>
                                                        <div class="divider">
                                                            <span class="line"></span>
                                                            <span class="circle">or login with</span>
                                                        </div>
                                                        <div class="social-login">
                                                            <ul class="social-icon">
                                                                <li><a class="facebook" href="#"><i
                                                                            class="fab fa-facebook"></i></a></li>
                                                                <li><a class="twitter" href="#"><i
                                                                            class="fab fa-twitter"></i></a></li>
                                                                <li><a class="linkedin" href="#"><i
                                                                            class="fab fa-linkedin"></i></a></li>
                                                                <li><a class="google" href="#"><i
                                                                            class="fab fa-google-plus"></i></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="login-instruction">
                                            <div class="login-instruction-content">
                                                <h3 class="title">Why Login To Us</h3>
                                                <p>It’s important for you to have an account and login in order to have
                                                    full
                                                    access at Jotopa. We need to know your account details in order to
                                                    allow
                                                    work together</p>
                                                <ul class="list-reasons">
                                                    <li class="reason">Be alerted to the latest jobs</li>
                                                    <li class="reason">Apply for jobs with a single click</li>
                                                    <li class="reason">Showcase your CV to thousands of employers</li>
                                                    <li class="reason">Keep a record of all your applications</li>
                                                </ul>
                                                <span class="sale-text theme-color border-color">Login today &amp; Get
                                                    15%
                                                    Off Coupon for the first planning purchase</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <!-- Modal Area End -->


            <!-- Placed js at the end of the document so the pages load faster -->


        </div>




    </div>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
