<script setup>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';

import { ref } from 'vue'
const overview = ref('')
const youget = ref('')
const skills = ref('')

const addWork = async() => {
    const docRef = await addDoc(collection(dbnew, "works"), {
        user: localStorage.user_id,
        email: localStorage.email,
        overview:overview ,
        youget:youget,

        
    });
    console.log("Document written with ID: ", docRef.id);
}
</script>
<template>
    <div class="">
        <Navbar />
    </div>
    <div class="container pt-10">
        <h1 style="padding-top: 100px;">Add Work</h1>
        <hr>
        <div class="col-12">
            <div class="single-input">
                <input type="text" placeholder="Overview" name="Overview" id="Overview" required v-model="Overview">
            </div>
            <div class="single-input">
                <input type="text" placeholder="What You Will Get" name="youget" id="youget" required v-model="youget">
            </div>
            <div class="single-input">
                <input type="text" placeholder="Skills" name="skills" id="skills" required v-model="skills">
            </div>
            <div class="col-12 mb-25"><button class="ht-btn" @click="register">Add Work</button></div>
        </div>
    </div>
    <div class="">
        <Footer />
    </div>
</template>