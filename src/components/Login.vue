<template>

    <!-- Breadcrumb Section Start -->
    <div class="breadcrumb-section section bg_color--5 pt-100 pt-sm-50 pt-xs-40 pb-60 pb-sm-50 pb-xs-40">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="page-breadcrumb-content">
                        <ul class="page-breadcrumb">
                            <!-- <li></li>
                            <li>Login & Register</li> -->
                        </ul>
                        <h1>Login</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb Section Start -->

    <!-- Login Register Section Start -->
    <div class="login-register-section section bg_color--5 pb-120 pb-lg-100 pb-md-80 pb-sm-60 pb-xs-50">
        <div class="container">
            <div class="row g-0">

                <div class="col-lg-4">
                    <div class="login-register-form-area" id="login-register">
                        <div class="login-tab-menu">
                            <ul class="nav">
                                <li><a class="active show" data-bs-toggle="tab" href="/login">Login</a></li>
                                <!-- <li><a data-bs-toggle="tab" href="google.com">Register</a></li> -->
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
                                                    <input type="text" placeholder="Username or Email" name="name">
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="single-input">
                                                    <input type="password" placeholder="Password" name="password">
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="checkbox-input">
                                                    <input type="checkbox" name="login-form-remember"
                                                        id="login-form-remember">
                                                    <label for="login-form-remember">Remember me</label>
                                                </div>
                                            </div>
                                            <div class="col-12 mb-25"><button class="ht-btn">Login</button></div>
                                        </div>
                                    </form>
                                </div>
                                <a href="/register">Don't have account?</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="login-instruction">
                        <div class="login-instruction-content">
                            <h3 class="title">Why Login To Us</h3>
                            <p>It’s important for you to have an account and login in order to have full access at
                                Jotopa. We need to know your account details in order to allow work together</p>
                            <ul class="list-reasons">
                                <li class="reason">Be alerted to the latest jobs</li>
                                <li class="reason">Apply for jobs with a single click</li>
                                <li class="reason">Keep a record of all your applications</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <!-- Login Register Section End -->
</template>
