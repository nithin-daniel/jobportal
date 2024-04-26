<script setup>
import Footer from './Footer.vue';
import Navbar from './Navbar.vue';
</script>

<template>
    <Navbar/>
    <!-- Breadcrumb Section Start -->
    <div class="breadcrumb-section section bg_color--5 pt-60 pt-sm-50 pt-xs-40 pb-60 pb-sm-50 pb-xs-40">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="page-breadcrumb-content">
                        <ul class="page-breadcrumb">
                            <li></li>
                            <li></li>
                        </ul>
                        <h1>Jobs Listing</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb Section Start -->

    <!-- Job Listing Section Start -->
    <div class="job-listing-section section bg_color--5 pb-120 pb-lg-100 pb-md-80 pb-sm-60 pb-xs-50">
        <div class="container">
            <div class="row g-0">



                <div class="col-lg-12 order-lg-2 order-1">
                    <div class="filter-form">
                        <div class="result-sorting">
                            <div class="total-result">
                                <span class="total">(22)</span>
                                Jobs &amp; Vacancies
                            </div>
                            <div class="job-alert-form">
                                <!-- <span class="btn-open-form">
                                    <i class="lnr lnr-envelope"></i>
                                    Email me jobs like these 
                                </span> -->
                                <div class="job-alert-form-box">
                                    <h3 class="title"> Email me jobs like these</h3>
                                    <div class="btn-close-form"><i class="lnr lnr-cross-circle"></i></div>
                                    <form action="#">
                                        <div class="newsletter">
                                            <div class="row">
                                                <div class="col-md-5">
                                                    <input type="text" name="alert-name" placeholder="Job alert name..."
                                                        class="alert-name">
                                                </div>
                                                <div class="col-md-5">
                                                    <input type="email" class="alert-email"
                                                        placeholder="example@email.com" name="alert-email">
                                                </div>
                                                <div class="col-md-2">
                                                    <button class="ht-btn">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="form-left">
                                <!-- <div class="sort-by">
                                        <form action="#">
                                            <label class="text-sortby">Sort by:</label>
                                            <select class="nice-select">
                                                <option value="1">Title</option>
                                                <option value="2">Date</option>
                                                <option value="3">Salary</option>
                                            </select>
                                        </form>
                                    </div> -->
                            </div>
                        </div>
                    </div>
                    <div class="tab-content">
                        <div id="list" class="tab-pane fade show active">
                            <div class="row">

                                <div class="col-lg-12 mb-20">
                                    <!-- Single Job Start  -->
                                    <div class="single-job style-two">
                                        <div class="info-top">
                                            <div class="job-image">
                                                <a href="job-details.html">
                                                    <img src="../assets/images/companies_logo/logo-100/logo1.jpg"
                                                        alt="logo">
                                                </a>
                                            </div>
                                            <div class="job-info">
                                                <div class="job-info-inner">
                                                    <div class="job-info-top">
                                                        <div class="saveJob for-listing">
                                                            <span class="featured-label">featured</span>
                                                            <a class="job-type-label ml-20 mr-20">Full Time</a>
                                                            <a class="save-job" href="#quick-view-modal-container"
                                                                data-toggle="modal">
                                                                <i class="far fa-heart"></i>
                                                            </a>
                                                        </div>
                                                        <div class="title-name">
                                                            <h3 class="job-title">
                                                                <a href="/jobs-details">Chief Accountant</a>
                                                            </h3>
                                                            <div class="employer-name">
                                                                <a href="job-details.html">Shippo Company</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="job-meta-two">
                                                        <div class="field-salary_from">
                                                            $500 - $1,000 / month
                                                        </div>
                                                        <div class="field-datetime"><i class="lnr lnr-clock"></i>8
                                                            months ago</div>
                                                        <div class="field-map"><i class="lnr lnr-map-marker"></i>Hanoi,
                                                            Hanoi</div>
                                                    </div>
                                                    <div class="job-skill-tag">
                                                        <a href="#">Android</a>
                                                        <a href="#">app</a>
                                                        <a href="#">ReactJs</a>
                                                        <a href="#">Ruby</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Job End -->
                                </div>

                                <div class="col-lg-12 mb-20">
                                    <!-- Single Job Start  -->
                                    <div class="single-job style-two">
                                        <div class="info-top">
                                            <div class="job-image">
                                                <a href="job-details.html">
                                                    <img src="../assets/images/companies_logo/logo-100/logo2.jpg"
                                                        alt="logo">
                                                </a>
                                            </div>
                                            <div class="job-info">
                                                <div class="job-info-inner">
                                                    <div class="job-info-top">
                                                        <div class="saveJob for-listing">
                                                            <span class="featured-label">featured</span>
                                                            <a class="job-type-label partTime ml-20 mr-20">Part
                                                                Time</a>
                                                            <a class="save-job" href="#quick-view-modal-container"
                                                                data-toggle="modal">
                                                                <i class="far fa-heart"></i>
                                                            </a>
                                                        </div>
                                                        <div class="title-name">
                                                            <h3 class="job-title">
                                                                <a href="job-details.html">Senior Data Engineer</a>
                                                            </h3>
                                                            <div class="employer-name">
                                                                <a href="employer-details.html">Radio Game</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="job-meta-two">
                                                        <div class="field-salary_from">
                                                            <i class="gj-icon gj-icon-money"></i>
                                                            $500 - $1,000 / month
                                                        </div>
                                                        <div class="field-datetime"><i class="lnr lnr-clock"></i>8
                                                            months ago</div>
                                                        <div class="field-map"><i
                                                                class="lnr lnr-map-marker"></i>Chicago, Illinois
                                                        </div>
                                                    </div>
                                                    <div class="job-skill-tag">
                                                        <a href="#">CSS</a>
                                                        <a href="#">PHP</a>
                                                        <a href="#">WordPress</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Job End -->
                                </div>

                                <div class="col-lg-12 mb-20">
                                    <!-- Single Job Start  -->
                                    <div class="single-job style-two">
                                        <div class="info-top">
                                            <div class="job-image">
                                                <a href="job-details.html">
                                                    <img src="../assets/images/companies_logo/logo-100/logo3.jpg"
                                                        alt="logo">
                                                </a>
                                            </div>
                                            <div class="job-info">
                                                <div class="job-info-inner">
                                                    <div class="job-info-top">
                                                        <div class="saveJob for-listing">
                                                            <a class="job-type-label ml-20 mr-20">Remote</a>
                                                            <a class="save-job" href="#quick-view-modal-container"
                                                                data-toggle="modal">
                                                                <i class="far fa-heart"></i>
                                                            </a>
                                                        </div>
                                                        <div class="title-name">
                                                            <h3 class="job-title">
                                                                <a href="job-details.html">Construction Worker</a>
                                                            </h3>
                                                            <div class="employer-name">
                                                                <a href="employer-details.html">Digital Vine</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="job-meta-two">
                                                        <div class="field-salary_from">
                                                            <i class="gj-icon gj-icon-money"></i>
                                                            $500 - $1,000 / month
                                                        </div>
                                                        <div class="field-datetime"><i class="lnr lnr-clock"></i>8
                                                            months ago</div>
                                                        <div class="field-map"><i
                                                                class="lnr lnr-map-marker"></i>Chicago, Illinois
                                                        </div>
                                                    </div>
                                                    <div class="job-skill-tag">
                                                        <a href="#">Angular</a>
                                                        <a href="#">ASP.NET</a>
                                                        <a href="#">Banner</a>
                                                        <a href="#">C++</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Job End -->
                                </div>

                                <div class="col-lg-12 mb-20">
                                    <!-- Single Job Start  -->
                                    <div class="single-job style-two">
                                        <div class="info-top">
                                            <div class="job-image">
                                                <a href="job-details.html">
                                                    <img src="../assets/images/companies_logo/logo-100/logo4.jpg"
                                                        alt="logo">
                                                </a>
                                            </div>
                                            <div class="job-info">
                                                <div class="job-info-inner">
                                                    <div class="job-info-top">
                                                        <div class="saveJob for-listing">
                                                            <span class="featured-label">featured</span>
                                                            <a class="job-type-label ml-20 mr-20">Full Time</a>
                                                            <a class="save-job" href="#quick-view-modal-container"
                                                                data-toggle="modal">
                                                                <i class="far fa-heart"></i>
                                                            </a>
                                                        </div>
                                                        <div class="title-name">
                                                            <h3 class="job-title">
                                                                <a href="job-details.html">Unity Developer</a>
                                                            </h3>
                                                            <div class="employer-name">
                                                                <a href="employer-details.html">Vsmarttech</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="job-meta-two">
                                                        <div class="field-salary_from">
                                                            <i class="gj-icon gj-icon-money"></i>
                                                            $500 - $1,000 / month
                                                        </div>
                                                        <div class="field-datetime"><i class="lnr lnr-clock"></i>8
                                                            months ago</div>
                                                        <div class="field-map"><i class="lnr lnr-map-marker"></i>Hanoi,
                                                            Hanoi</div>
                                                    </div>
                                                    <div class="job-skill-tag">
                                                        <a href="#">NodeJS</a>
                                                        <a href="#">PHP</a>
                                                        <a href="#">Python</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Job End -->
                                </div>

                                <div class="col-lg-12 mb-20">
                                    <!-- Single Job Start  -->
                                    <div class="single-job style-two">
                                        <div class="info-top">
                                            <div class="job-image">
                                                <a href="job-details.html">
                                                    <img src="../assets/images/companies_logo/logo-100/logo5.jpg"
                                                        alt="logo">
                                                </a>
                                            </div>
                                            <div class="job-info">
                                                <div class="job-info-inner">
                                                    <div class="job-info-top">
                                                        <div class="saveJob for-listing">
                                                            <span class="featured-label">featured</span>
                                                            <a class="job-type-label ml-20 mr-20">Full Time</a>
                                                            <a class="save-job" href="#quick-view-modal-container"
                                                                data-toggle="modal">
                                                                <i class="far fa-heart"></i>
                                                            </a>
                                                        </div>
                                                        <div class="title-name">
                                                            <h3 class="job-title">
                                                                <a href="job-details.html">Receptionist</a>
                                                            </h3>
                                                            <div class="employer-name">
                                                                <a href="employer-details.html">Digital Vine</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="job-meta-two">
                                                        <div class="field-salary_from">
                                                            <i class="gj-icon gj-icon-money"></i>
                                                            $500 - $1,000 / month
                                                        </div>
                                                        <div class="field-datetime"><i class="lnr lnr-clock"></i>8
                                                            months ago</div>
                                                        <div class="field-map"><i class="lnr lnr-map-marker"></i>Hanoi,
                                                            Hanoi</div>
                                                    </div>
                                                    <div class="job-skill-tag">
                                                        <a href="#">Android</a>
                                                        <a href="#">app</a>
                                                        <a href="#">ReactJs</a>
                                                        <a href="#">Ruby</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Job End -->
                                </div>

                                <div class="col-lg-12 mb-20">
                                    <!-- Single Job Start  -->
                                    <div class="single-job style-two">
                                        <div class="info-top">
                                            <div class="job-image">
                                                <a href="job-details.html">
                                                    <img src="../assets/images/companies_logo/logo-100/logo6.jpg"
                                                        alt="logo">
                                                </a>
                                            </div>
                                            <div class="job-info">
                                                <div class="job-info-inner">
                                                    <div class="job-info-top">
                                                        <div class="saveJob for-listing">
                                                            <span class="featured-label">featured</span>
                                                            <a class="job-type-label ml-20 mr-20">Full Time</a>
                                                            <a class="save-job" href="#quick-view-modal-container"
                                                                data-toggle="modal">
                                                                <i class="far fa-heart"></i>
                                                            </a>
                                                        </div>
                                                        <div class="title-name">
                                                            <h3 class="job-title">
                                                                <a href="job-details.html">iOS Developer</a>
                                                            </h3>
                                                            <div class="employer-name">
                                                                <a href="employer-details.html">InwaveThemes</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="job-meta-two">
                                                        <div class="field-salary_from">
                                                            <i class="gj-icon gj-icon-money"></i>
                                                            $500 - $1,000 / month
                                                        </div>
                                                        <div class="field-datetime"><i class="lnr lnr-clock"></i>8
                                                            months ago</div>
                                                        <div class="field-map"><i
                                                                class="lnr lnr-map-marker"></i>Seville, Andalusia
                                                        </div>
                                                    </div>
                                                    <div class="job-skill-tag">
                                                        <a href="#">app</a>
                                                        <a href="#">ios</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Job End -->
                                </div>

                                <div class="col-lg-12 mb-20">
                                    <!-- Single Job Start  -->
                                    <div class="single-job style-two">
                                        <div class="info-top">
                                            <div class="job-image">
                                                <a href="job-details.html">
                                                    <img src="../assets/images/companies_logo/logo-100/logo2.jpg"
                                                        alt="logo">
                                                </a>
                                            </div>
                                            <div class="job-info">
                                                <div class="job-info-inner">
                                                    <div class="job-info-top">
                                                        <div class="saveJob for-listing">
                                                            <span class="featured-label">featured</span>
                                                            <a class="job-type-label partTime ml-20 mr-20">Part
                                                                Time</a>
                                                            <a class="save-job" href="#quick-view-modal-container"
                                                                data-toggle="modal">
                                                                <i class="far fa-heart"></i>
                                                            </a>
                                                        </div>
                                                        <div class="title-name">
                                                            <h3 class="job-title">
                                                                <a href="job-details.html">Senior Data Engineer</a>
                                                            </h3>
                                                            <div class="employer-name">
                                                                <a href="employer-details.html">Radio Game</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="job-meta-two">
                                                        <div class="field-salary_from">
                                                            <i class="gj-icon gj-icon-money"></i>
                                                            $500 - $1,000 / month
                                                        </div>
                                                        <div class="field-datetime"><i class="lnr lnr-clock"></i>8
                                                            months ago</div>
                                                        <div class="field-map"><i
                                                                class="lnr lnr-map-marker"></i>Chicago, Illinois
                                                        </div>
                                                    </div>
                                                    <div class="job-skill-tag">
                                                        <a href="#">CSS</a>
                                                        <a href="#">PHP</a>
                                                        <a href="#">WordPress</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Job End -->
                                </div>

                                <div class="col-lg-12 mb-20">
                                    <!-- Single Job Start  -->
                                    <div class="single-job style-two">
                                        <div class="info-top">
                                            <div class="job-image">
                                                <a href="job-details.html">
                                                    <img src="../assets/images/companies_logo/logo-100/logo3.jpg"
                                                        alt="logo">
                                                </a>
                                            </div>
                                            <div class="job-info">
                                                <div class="job-info-inner">
                                                    <div class="job-info-top">
                                                        <div class="saveJob for-listing">
                                                            <a class="job-type-label ml-20 mr-20">Remote</a>
                                                            <a class="save-job" href="#quick-view-modal-container"
                                                                data-toggle="modal">
                                                                <i class="far fa-heart"></i>
                                                            </a>
                                                        </div>
                                                        <div class="title-name">
                                                            <h3 class="job-title">
                                                                <a href="job-details.html">Construction Worker</a>
                                                            </h3>
                                                            <div class="employer-name">
                                                                <a href="employer-details.html">Digital Vine</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="job-meta-two">
                                                        <div class="field-salary_from">
                                                            <i class="gj-icon gj-icon-money"></i>
                                                            $500 - $1,000 / month
                                                        </div>
                                                        <div class="field-datetime"><i class="lnr lnr-clock"></i>8
                                                            months ago</div>
                                                        <div class="field-map"><i
                                                                class="lnr lnr-map-marker"></i>Chicago, Illinois
                                                        </div>
                                                    </div>
                                                    <div class="job-skill-tag">
                                                        <a href="#">Angular</a>
                                                        <a href="#">ASP.NET</a>
                                                        <a href="#">Banner</a>
                                                        <a href="#">C++</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Job End -->
                                </div>

                                <div class="col-lg-12 mb-20">
                                    <!-- Single Job Start  -->
                                    <div class="single-job style-two">
                                        <div class="info-top">
                                            <div class="job-image">
                                                <a href="job-details.html">
                                                    <img src="../assets/images/companies_logo/logo-100/logo4.jpg"
                                                        alt="logo">
                                                </a>
                                            </div>
                                            <div class="job-info">
                                                <div class="job-info-inner">
                                                    <div class="job-info-top">
                                                        <div class="saveJob for-listing">
                                                            <span class="featured-label">featured</span>
                                                            <a class="job-type-label ml-20 mr-20">Full Time</a>
                                                            <a class="save-job" href="#quick-view-modal-container"
                                                                data-toggle="modal">
                                                                <i class="far fa-heart"></i>
                                                            </a>
                                                        </div>
                                                        <div class="title-name">
                                                            <h3 class="job-title">
                                                                <a href="job-details.html">Unity Developer</a>
                                                            </h3>
                                                            <div class="employer-name">
                                                                <a href="employer-details.html">Vsmarttech</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="job-meta-two">
                                                        <div class="field-salary_from">
                                                            <i class="gj-icon gj-icon-money"></i>
                                                            $500 - $1,000 / month
                                                        </div>
                                                        <div class="field-datetime"><i class="lnr lnr-clock"></i>8
                                                            months ago</div>
                                                        <div class="field-map"><i class="lnr lnr-map-marker"></i>Hanoi,
                                                            Hanoi</div>
                                                    </div>
                                                    <div class="job-skill-tag">
                                                        <a href="#">NodeJS</a>
                                                        <a href="#">PHP</a>
                                                        <a href="#">Python</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Job End -->
                                </div>

                               

                            </div>
                            <!-- <div class="row">
                                    <div class="col-12">
                                        <ul class="page-pagination">
                                            <li><a href="#"><i class="fa fa-angle-left"></i></a></li>
                                            <li class="active"><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#"><i class="fa fa-angle-right"></i></a></li>
                                        </ul>
                                    </div>
                                </div> -->
                        </div>
                        <div id="grid" class="tab-pane fade">
                            <div class="row">

                                <div class="col-md-6 mb-20">
                                    <!-- Single Job Start  -->
                                    <div class="single-job-grid-two">
                                        <div class="saveJob-grid">
                                            <a class="job-type-label remote" href="#">Remote</a>
                                            <a class="save-job" href="#quick-view-modal-container" data-toggle="modal">
                                                <i class="far fa-heart"></i>Save </a>
                                        </div>
                                        <div class="job-image">
                                            <a href="job-details.html">
                                                <img src="../assets/images/companies_logo/logo-100/logo1.jpg" alt="">
                                            </a>
                                            <span class="featured-label for-grid">featured</span>
                                        </div>
                                        <div class="job-info">
                                            <div class="job-info-top">
                                                <div class="title-name">
                                                    <h3 class="job-title">
                                                        <a href="job-details.html">Chief Accountant</a>
                                                    </h3>
                                                    <div class="employer-name">
                                                        <a href="employer-details.html">Shippo Company</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="job-meta-two">
                                                <div class="field-salary_from">
                                                    <i class="gj-icon gj-icon-money"></i>
                                                    $500 - $1,000 / month
                                                </div>
                                                <div class="field-datetime"><i class="lnr lnr-clock"></i>8 months
                                                    ago</div>
                                                <div class="field-map"><i class="lnr lnr-map-marker"></i>Hanoi,
                                                    Hanoi</div>
                                            </div>
                                            <div class="field-descriptions">
                                                <p>International collaborative, high-energy environmentCompetitive
                                                    salary and great benefits, English training provided About Our
                                                    Client Our…</p>
                                            </div>
                                            <div class="job-skill-tag">
                                                <a href="#">Android</a>
                                                <a href="#">app</a>
                                                <a href="#">ReactJs</a>
                                                <a href="#">Ruby</a>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Job End -->
                                </div>

                                <div class="col-md-6 mb-20">
                                    <!-- Single Job Start  -->
                                    <div class="single-job-grid-two">
                                        <div class="saveJob-grid">
                                            <a class="job-type-label" href="#">Full Time</a>
                                            <a class="save-job" href="#quick-view-modal-container" data-toggle="modal">
                                                <i class="far fa-heart"></i>Save </a>
                                        </div>
                                        <div class="job-image">
                                            <a href="job-details.html">
                                                <img src="../assets/images/companies_logo/logo-100/logo2.jpg" alt="">
                                            </a>
                                            <span class="featured-label for-grid">featured</span>
                                        </div>
                                        <div class="job-info">
                                            <div class="job-info-top">
                                                <div class="title-name">
                                                    <h3 class="job-title">
                                                        <a href="job-details.html">Android & IOS Developer</a>
                                                    </h3>
                                                    <div class="employer-name">
                                                        <a href="employer-details.html">Inwave Studio</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="job-meta-two">
                                                <div class="field-salary_from">
                                                    <i class="gj-icon gj-icon-money"></i>
                                                    $500 - $1,000 / month
                                                </div>
                                                <div class="field-datetime"><i class="lnr lnr-clock"></i>8 months
                                                    ago</div>
                                                <div class="field-map"><i class="lnr lnr-map-marker"></i>Hanoi,
                                                    Hanoi</div>
                                            </div>
                                            <div class="field-descriptions">
                                                <p>International collaborative, high-energy environmentCompetitive
                                                    salary and great benefits, English training provided About Our
                                                    Client Our…</p>
                                            </div>
                                            <div class="job-skill-tag">
                                                <a href="#">Android</a>
                                                <a href="#">app</a>
                                                <a href="#">ReactJs</a>
                                                <a href="#">Ruby</a>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Job End -->
                                </div>

                                <div class="col-md-6 mb-20">
                                    <!-- Single Job Start  -->
                                    <div class="single-job-grid-two">
                                        <div class="saveJob-grid">
                                            <a class="job-type-label" href="#">Full Time</a>
                                            <a class="save-job" href="#quick-view-modal-container" data-toggle="modal">
                                                <i class="far fa-heart"></i>Save </a>
                                        </div>
                                        <div class="job-image">
                                            <a href="job-details.html">
                                                <img src="../assets/images/companies_logo/logo-100/logo3.jpg" alt="">
                                            </a>
                                            <span class="featured-label for-grid">featured</span>
                                        </div>
                                        <div class="job-info">
                                            <div class="job-info-top">
                                                <div class="title-name">
                                                    <h3 class="job-title">
                                                        <a href="job-details.html">Construction Worker</a>
                                                    </h3>
                                                    <div class="employer-name">
                                                        <a href="employer-details.html">Digital Vine</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="job-meta-two">
                                                <div class="field-salary_from">
                                                    <i class="gj-icon gj-icon-money"></i>
                                                    $500 - $1,000 / month
                                                </div>
                                                <div class="field-datetime"><i class="lnr lnr-clock"></i>8 months
                                                    ago</div>
                                                <div class="field-map"><i class="lnr lnr-map-marker"></i>Hanoi,
                                                    Hanoi</div>
                                            </div>
                                            <div class="field-descriptions">
                                                <p>International collaborative, high-energy environmentCompetitive
                                                    salary and great benefits, English training provided About Our
                                                    Client Our…</p>
                                            </div>
                                            <div class="job-skill-tag">
                                                <a href="#">Android</a>
                                                <a href="#">app</a>
                                                <a href="#">ReactJs</a>
                                                <a href="#">Ruby</a>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Job End -->
                                </div>

                                <div class="col-md-6 mb-20">
                                    <!-- Single Job Start  -->
                                    <div class="single-job-grid-two">
                                        <div class="saveJob-grid">
                                            <a class="job-type-label" href="#">Full Time</a>
                                            <a class="save-job" href="#quick-view-modal-container" data-toggle="modal">
                                                <i class="far fa-heart"></i>Save </a>
                                        </div>
                                        <div class="job-image">
                                            <a href="job-details.html">
                                                <img src="../assets/images/companies_logo/logo-100/logo4.jpg" alt="">
                                            </a>
                                            <span class="featured-label for-grid">featured</span>
                                        </div>
                                        <div class="job-info">
                                            <div class="job-info-top">
                                                <div class="title-name">
                                                    <h3 class="job-title">
                                                        <a href="job-details.html">IOS & Android Developer</a>
                                                    </h3>
                                                    <div class="employer-name">
                                                        <a href="employer-details.html">Radio Game</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="job-meta-two">
                                                <div class="field-salary_from">
                                                    <i class="gj-icon gj-icon-money"></i>
                                                    $500 - $1,000 / month
                                                </div>
                                                <div class="field-datetime"><i class="lnr lnr-clock"></i>8 months
                                                    ago</div>
                                                <div class="field-map"><i class="lnr lnr-map-marker"></i>Hanoi,
                                                    Hanoi</div>
                                            </div>
                                            <div class="field-descriptions">
                                                <p>International collaborative, high-energy environmentCompetitive
                                                    salary and great benefits, English training provided About Our
                                                    Client Our…</p>
                                            </div>
                                            <div class="job-skill-tag">
                                                <a href="#">Android</a>
                                                <a href="#">app</a>
                                                <a href="#">ReactJs</a>
                                                <a href="#">Ruby</a>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Job End -->
                                </div>

                                <div class="col-md-6 mb-20">
                                    <!-- Single Job Start  -->
                                    <div class="single-job-grid-two">
                                        <div class="saveJob-grid">
                                            <a class="job-type-label" href="#">Full Time</a>
                                            <a class="save-job" href="#quick-view-modal-container" data-toggle="modal">
                                                <i class="far fa-heart"></i>Save </a>
                                        </div>
                                        <div class="job-image">
                                            <a href="job-details.html">
                                                <img src="../assets/images/companies_logo/logo-100/logo5.jpg" alt="">
                                            </a>
                                            <span class="featured-label for-grid">featured</span>
                                        </div>
                                        <div class="job-info">
                                            <div class="job-info-top">
                                                <div class="title-name">
                                                    <h3 class="job-title">
                                                        <a href="job-details.html">Jr. Developer Shopify</a>
                                                    </h3>
                                                    <div class="employer-name">
                                                        <a href="employer-details.html">InwaveThemes</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="job-meta-two">
                                                <div class="field-salary_from">
                                                    <i class="gj-icon gj-icon-money"></i>
                                                    $500 - $1,000 / month
                                                </div>
                                                <div class="field-datetime"><i class="lnr lnr-clock"></i>8 months
                                                    ago</div>
                                                <div class="field-map"><i class="lnr lnr-map-marker"></i>Hanoi,
                                                    Hanoi</div>
                                            </div>
                                            <div class="field-descriptions">
                                                <p>International collaborative, high-energy environmentCompetitive
                                                    salary and great benefits, English training provided About Our
                                                    Client Our…</p>
                                            </div>
                                            <div class="job-skill-tag">
                                                <a href="#">Android</a>
                                                <a href="#">app</a>
                                                <a href="#">ReactJs</a>
                                                <a href="#">Ruby</a>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Job End -->
                                </div>

                                <div class="col-md-6 mb-20">
                                    <!-- Single Job Start  -->
                                    <div class="single-job-grid-two">
                                        <div class="saveJob-grid">
                                            <a class="job-type-label" href="#">Full Time</a>
                                            <a class="save-job" href="#quick-view-modal-container" data-toggle="modal">
                                                <i class="far fa-heart"></i>Save </a>
                                        </div>
                                        <div class="job-image">
                                            <a href="job-details.html">
                                                <img src="../assets/images/companies_logo/logo-100/logo6.jpg" alt="">
                                            </a>
                                            <span class="featured-label for-grid">featured</span>
                                        </div>
                                        <div class="job-info">
                                            <div class="job-info-top">
                                                <div class="title-name">
                                                    <h3 class="job-title">
                                                        <a href="job-details.html">Receptionist</a>
                                                    </h3>
                                                    <div class="employer-name">
                                                        <a href="employer-details.html">Digital Vine</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="job-meta-two">
                                                <div class="field-salary_from">
                                                    <i class="gj-icon gj-icon-money"></i>
                                                    $500 - $1,000 / month
                                                </div>
                                                <div class="field-datetime"><i class="lnr lnr-clock"></i>8 months
                                                    ago</div>
                                                <div class="field-map"><i class="lnr lnr-map-marker"></i>Hanoi,
                                                    Hanoi</div>
                                            </div>
                                            <div class="field-descriptions">
                                                <p>International collaborative, high-energy environmentCompetitive
                                                    salary and great benefits, English training provided About Our
                                                    Client Our…</p>
                                            </div>
                                            <div class="job-skill-tag">
                                                <a href="#">Android</a>
                                                <a href="#">app</a>
                                                <a href="#">ReactJs</a>
                                                <a href="#">Ruby</a>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Job End -->
                                </div>

                                <div class="col-md-6 mb-20">
                                    <!-- Single Job Start  -->
                                    <div class="single-job-grid-two">
                                        <div class="saveJob-grid">
                                            <a class="job-type-label internship" href="#">Internship</a>
                                            <a class="save-job" href="#quick-view-modal-container" data-toggle="modal">
                                                <i class="far fa-heart"></i>Save </a>
                                        </div>
                                        <div class="job-image">
                                            <a href="job-details.html">
                                                <img src="../assets/images/companies_logo/logo-100/logo2.jpg" alt="">
                                            </a>
                                            <span class="featured-label for-grid">featured</span>
                                        </div>
                                        <div class="job-info">
                                            <div class="job-info-top">
                                                <div class="title-name">
                                                    <h3 class="job-title">
                                                        <a href="job-details.html">Recreation & Fitness Worker</a>
                                                    </h3>
                                                    <div class="employer-name">
                                                        <a href="employer-details.html">Digital Asset</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="job-meta-two">
                                                <div class="field-salary_from">
                                                    <i class="gj-icon gj-icon-money"></i>
                                                    $500 - $1,000 / month
                                                </div>
                                                <div class="field-datetime"><i class="lnr lnr-clock"></i>8 months
                                                    ago</div>
                                                <div class="field-map"><i class="lnr lnr-map-marker"></i>Hanoi,
                                                    Hanoi</div>
                                            </div>
                                            <div class="field-descriptions">
                                                <p>International collaborative, high-energy environmentCompetitive
                                                    salary and great benefits, English training provided About Our
                                                    Client Our…</p>
                                            </div>
                                            <div class="job-skill-tag">
                                                <a href="#">Android</a>
                                                <a href="#">app</a>
                                                <a href="#">ReactJs</a>
                                                <a href="#">Ruby</a>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Job End -->
                                </div>

                                <div class="col-md-6 mb-20">
                                    <!-- Single Job Start  -->
                                    <div class="single-job-grid-two">
                                        <div class="saveJob-grid">
                                            <a class="job-type-label" href="#">Full Time</a>
                                            <a class="save-job" href="#quick-view-modal-container" data-toggle="modal">
                                                <i class="far fa-heart"></i>Save </a>
                                        </div>
                                        <div class="job-image">
                                            <a href="job-details.html">
                                                <img src="../assets/images/companies_logo/logo-100/logo5.jpg" alt="">
                                            </a>
                                            <span class="featured-label for-grid">featured</span>
                                        </div>
                                        <div class="job-info">
                                            <div class="job-info-top">
                                                <div class="title-name">
                                                    <h3 class="job-title">
                                                        <a href="job-details.html">Senior Data Engineer</a>
                                                    </h3>
                                                    <div class="employer-name">
                                                        <a href="employer-details.html">Radio Game</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="job-meta-two">
                                                <div class="field-salary_from">
                                                    <i class="gj-icon gj-icon-money"></i>
                                                    $500 - $1,000 / month
                                                </div>
                                                <div class="field-datetime"><i class="lnr lnr-clock"></i>8 months
                                                    ago</div>
                                                <div class="field-map"><i class="lnr lnr-map-marker"></i>Hanoi,
                                                    Hanoi</div>
                                            </div>
                                            <div class="field-descriptions">
                                                <p>International collaborative, high-energy environmentCompetitive
                                                    salary and great benefits, English training provided About Our
                                                    Client Our…</p>
                                            </div>
                                            <div class="job-skill-tag">
                                                <a href="#">Android</a>
                                                <a href="#">app</a>
                                                <a href="#">ReactJs</a>
                                                <a href="#">Ruby</a>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Job End -->
                                </div>

                                <div class="col-md-6 mb-20">
                                    <!-- Single Job Start  -->
                                    <div class="single-job-grid-two">
                                        <div class="saveJob-grid">
                                            <a class="job-type-label remote" href="#">Remote</a>
                                            <a class="save-job" href="#quick-view-modal-container" data-toggle="modal">
                                                <i class="far fa-heart"></i>Save </a>
                                        </div>
                                        <div class="job-image">
                                            <a href="job-details.html">
                                                <img src="../assets/images/companies_logo/logo-100/logo3.jpg" alt="">
                                            </a>
                                            <span class="featured-label for-grid">featured</span>
                                        </div>
                                        <div class="job-info">
                                            <div class="job-info-top">
                                                <div class="title-name">
                                                    <h3 class="job-title">
                                                        <a href="job-details.html">Senior PHP Web Developer</a>
                                                    </h3>
                                                    <div class="employer-name">
                                                        <a href="employer-details.html">InwaveThemes</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="job-meta-two">
                                                <div class="field-salary_from">
                                                    <i class="gj-icon gj-icon-money"></i>
                                                    $500 - $1,000 / month
                                                </div>
                                                <div class="field-datetime"><i class="lnr lnr-clock"></i>8 months
                                                    ago</div>
                                                <div class="field-map"><i class="lnr lnr-map-marker"></i>Hanoi,
                                                    Hanoi</div>
                                            </div>
                                            <div class="field-descriptions">
                                                <p>International collaborative, high-energy environmentCompetitive
                                                    salary and great benefits, English training provided About Our
                                                    Client Our…</p>
                                            </div>
                                            <div class="job-skill-tag">
                                                <a href="#">Android</a>
                                                <a href="#">app</a>
                                                <a href="#">ReactJs</a>
                                                <a href="#">Ruby</a>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Job End -->
                                </div>

                                <div class="col-md-6 mb-20">
                                    <!-- Single Job Start  -->
                                    <div class="single-job-grid-two">
                                        <div class="saveJob-grid">
                                            <a class="job-type-label" href="#">Full Time</a>
                                            <a class="save-job" href="#quick-view-modal-container" data-toggle="modal">
                                                <i class="far fa-heart"></i>Save </a>
                                        </div>
                                        <div class="job-image">
                                            <a href="job-details.html">
                                                <img src="../assets/images/companies_logo/logo-100/logo1.jpg" alt="">
                                            </a>
                                            <span class="featured-label for-grid">featured</span>
                                        </div>
                                        <div class="job-info">
                                            <div class="job-info-top">
                                                <div class="title-name">
                                                    <h3 class="job-title">
                                                        <a href="job-details.html">Tax Manager</a>
                                                    </h3>
                                                    <div class="employer-name">
                                                        <a href="employer-details.html">HasThemes</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="job-meta-two">
                                                <div class="field-salary_from">
                                                    <i class="gj-icon gj-icon-money"></i>
                                                    $500 - $1,000 / month
                                                </div>
                                                <div class="field-datetime"><i class="lnr lnr-clock"></i>8 months
                                                    ago</div>
                                                <div class="field-map"><i class="lnr lnr-map-marker"></i>Hanoi,
                                                    Hanoi</div>
                                            </div>
                                            <div class="field-descriptions">
                                                <p>International collaborative, high-energy environmentCompetitive
                                                    salary and great benefits, English training provided About Our
                                                    Client Our…</p>
                                            </div>
                                            <div class="job-skill-tag">
                                                <a href="#">Android</a>
                                                <a href="#">app</a>
                                                <a href="#">ReactJs</a>
                                                <a href="#">Ruby</a>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Single Job End -->
                                </div>


                            </div>
                            <!-- <div class="row">
                                    <div class="col-12">
                                        <ul class="page-pagination">
                                            <li><a href="#"><i class="fa fa-angle-left"></i></a></li>
                                            <li class="active"><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#"><i class="fa fa-angle-right"></i></a></li>
                                        </ul>
                                    </div>
                                </div> -->
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
    <!-- Job Listing Section End -->
    <Footer/>
</template>