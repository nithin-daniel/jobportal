<template>
    <div class="template-color-1">
        <div id="main-wrapper">
            <!--Header section start-->
            <div class="header-absolute sb-border header-sticky d-none d-lg-block">
                <div class="main-header">
                    <div class="container-fluid pl-50 pl-lg-15 pl-md-15 pr-0">
                        <div class="row align-items-center g-0">

                            <!--Logo start-->
                            <div class="col-xl-2 col-lg-2 col-12">
                                <div class="logo">
                                    <a href="/"><img src="../assets/images/logo-white.png" alt=""></a>
                                </div>
                            </div>
                            <!--Logo end-->

                            <!--Menu start-->
                            <div class="col-xl-7 col-lg-7 col-12">
                                <nav class="main-menu">
                                    <ul>
                                        <li><a href="/">Home <small class="icon-arrow"></small></a>

                                        </li>
                                        <li><a href="/jobs"><span class="label-status hot"></span>Jobs <small
                                                    class="icon-arrow"></small></a>
                                        </li>
                                        <li><a href="/candidates"><span class="label-status new"></span>
                                                Candidates <small class="icon-arrow"></small></a>

                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <!--Menu end-->

                            <!-- Cart & Search Area Start -->
                            <div class="col-xl-3 col-lg-3 col-12">
                                <div class="header-btn-action d-flex justify-content-end">
                                    <div class="btn-action-wrap d-flex">
                                        <div class="jp-author item" v-if="storedValue">
                                            <a href="/" v-on:click="logout">
                                                <i class="lnr lnr-user"></i>
                                                <span>Logout</span>

                                            </a>
                                        </div>
                                        <div class="jp-author item" v-else>
                                            <a href="/login">
                                                <i class="lnr lnr-user"></i>
                                                <span>Login</span>
                                            </a>
                                            <a href="/register">
                                                <i class="lnr lnr-user"></i>
                                                <span>Register</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Cart & Search Area End -->
                        </div>

                    </div>
                </div>
            </div>
            <!--Header section end-->

            <!--Header Mobile section start-->
            <div class="header-mobile bg_color--2 d-block d-lg-none">
                <div class="header-bottom menu-right">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="header-mobile-navigation d-block d-lg-none">
                                    <div class="row align-items-center">
                                        <div class="col-3 col-md-3">
                                            <div class="mobile-navigation text-right">
                                                <div class="header-icon-wrapper">
                                                    <ul class="icon-list justify-content-start">
                                                        <li class="popup-mobile-click">
                                                            <a href="javascript:void(0)"><i
                                                                    class="lnr lnr-menu"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-6">
                                            <div class="header-logo text-center">
                                                <a href="index.html">
                                                    <img src="../src/assets/images/logo-mobile.png" class="img-fluid"
                                                        alt="">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-3 col-md-3">
                                            <div class="mobile-navigation text-right">
                                                <div class="header-icon-wrapper">
                                                    <ul class="icon-list justify-content-end">
                                                        <li>
                                                            <div class="header-cart-icon">
                                                                <a href="#" class="header-search-toggle"><i
                                                                        class="lnr lnr-magnifier"></i></a>
                                                            </div>
                                                            <div class="header-search-form">
                                                                <form action="#">
                                                                    <input type="text" placeholder="Type and hit enter">
                                                                    <button><i class="lnr lnr-magnifier"></i></button>
                                                                </form>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <!--Header Mobile section end-->
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'; // Assuming you're using Vue 3 (optional)

export default {
    setup() {
        const storedValue = ref(null); // Initialize a reactive variable for the value

        // Access localStorage on component mount (or at a specific time)
        const fetchStoredValue = () => {
            const valueFromStorage = localStorage.getItem('user_id');
            storedValue.value = valueFromStorage;
        };

        fetchStoredValue();

        return {
            storedValue,
            // Other component data and methods
        };
    },
    methods: {
        logout(event) {
            // Execute your click event logic here

            // Remove the event listener after the first click
            // this.$el.removeEventListener('click', this.handleClickOnce);
            localStorage.clear();
        },
    },
};

</script>