<template>
    <!-- Breadcrumb Section Start -->
    <div class="breadcrumb-section section bg_color--5 pt-60 pt-sm-50 pt-xs-40 pb-60 pb-sm-50 pb-xs-40">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="page-breadcrumb-content">
                        <!-- <ul class="page-breadcrumb"> -->
                        <!-- <li></li>
                                <li></li> -->
                        <!-- </ul> -->
                        <h1>Register</h1>
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
                    <div class="login-register-form-area">
                        <div class="login-tab-menu">
                            <ul class="nav">
                                <li><a class="active show" data-bs-toggle="tab" href="/register">Register</a></li>
                            </ul>
                        </div>
                        <div class="tab-content">
                            <div id="login" class="tab-pane fade show active">
                                <div class="login-register-form">
                                    <form action="#" method="post">
                                        <p>Create Your account</p>
                                        <div class="row row-5">
                                            <div class="col-12">

                                            </div>
                                            <div class="col-12">
                                                <div class="single-input">
                                                    <input type="email" placeholder="Your Email Address" name="email"
                                                        id="email" required v-model="email">
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="single-input">
                                                    <input type="password" placeholder="Password" name="password1"
                                                        id="password1" required v-model="password1">
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="single-input">
                                                    <input type="password" placeholder="Confirm Password"
                                                        name="password2" id="password2" required v-model="password2">
                                                </div>
                                            </div>
                                            <div class="col-11">
                                                <div class="checkbox-input">
                                                    <input type="radio" name="login-form" id="login-form-candidate">
                                                    <label for="login-form-candidate">I am a company</label>

                                                    <input type="radio" name="login-form" id="login-form-employer">
                                                    <label for="login-form-employer">I am a employer</label>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <div class="checkbox-input">
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="register-account">
                                                    <input id="register-terms-conditions" type="checkbox"
                                                        class="checkbox" checked="" required="">
                                                    <label for="register-terms-conditions">I read and agree to the <a
                                                            href="#">Terms &amp; Conditions</a> and <a href="#">Privacy
                                                            Policy</a></label>
                                                </div>
                                            </div>
                                            <div class="col-12 mb-25"><button class="ht-btn">Register</button></div>
                                        </div>
                                    </form>
                                </div>
                                <a href="/login">Already have account?</a>

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

    <!-- Modal Area Strat -->
    <div class="modal fade quick-view-modal-container" id="quick-view-modal-container" tabindex="-1" role="dialog"
        aria-hidden="true">
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
                                <div class="login-register-form-area" id="login-register">
                                    <div class="login-tab-menu">
                                        <ul class="nav">
                                            <li><a class="active show" data-bs-toggle="tab" href="#loginOne">Login</a>
                                            </li>
                                            <li><a data-bs-toggle="tab" href="#registerOne">Register</a></li>
                                        </ul>
                                    </div>
                                    <div class="tab-content">
                                        <div id="loginOne" class="tab-pane fade show active">
                                            <div class="login-register-form">
                                                <form action="#" method="post">
                                                    <p>Login to Jotopa with your registered account</p>
                                                    <div class="row">
                                                        <div class="col-12">
                                                            <div class="single-input">
                                                                <input type="text" placeholder="Username or Email"
                                                                    name="name">
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
                                                                <input type="checkbox" name="login-form-remember"
                                                                    id="login-form-remember-one">
                                                                <label for="login-form-remember-one">Remember me</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-12 mb-25"><button class="ht-btn">Login</button>
                                                        </div>
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
                                        <div id="registerOne" class="tab-pane fade">
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
                                                                <input type="email" placeholder="Your Email Address"
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
                                                                <input type="password" placeholder="Confirm Password"
                                                                    name="conPassword">
                                                            </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div class="checkbox-input">
                                                                <input type="checkbox" name="login-form-candidate"
                                                                    id="login-form-candidate-one">
                                                                <label for="login-form-candidate-one">I am a
                                                                    candidate</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div class="checkbox-input">
                                                                <input type="checkbox" name="login-form-employer"
                                                                    id="login-form-employer-one">
                                                                <label for="login-form-employer-one">I am a
                                                                    employer</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-12">
                                                            <div class="register-account">
                                                                <input id="register-terms-conditions-one"
                                                                    type="checkbox" class="checkbox" checked=""
                                                                    required="">
                                                                <label for="register-terms-conditions-one">I read and
                                                                    agree to the <a href="#">Terms &amp; Conditions</a>
                                                                    and <a href="#">Privacy Policy</a></label>
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
                                        <p>It’s important for you to have an account and login in order to have full
                                            access at Jotopa. We need to know your account details in order to allow
                                            work together</p>
                                        <ul class="list-reasons">
                                            <li class="reason">Be alerted to the latest jobs</li>
                                            <li class="reason">Apply for jobs with a single click</li>
                                            <li class="reason">Showcase your CV to thousands of employers</li>
                                            <li class="reason">Keep a record of all your applications</li>
                                        </ul>
                                        <span class="sale-text theme-color border-color">Login today &amp; Get 15% Off
                                            Coupon for the first planning purchase</span>
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
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: "RegisterComponent",
 setup() {
    const name = ref('')
    const email = ref('')
    const password = ref('')
    const error = ref(null)

    const store = useStore()
    const router = useRouter()

    const Register = async () => {
      try {
        await store.dispatch('register', {
          email: email.value,
          password: password2.value,
          name: name.value
        })
        router.push('/')
      }
      catch (err) {
        error.value = err.message
            }
    }

    return { Register, name,email, password, error }
  }
};
</script>