<script setup>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
import { collection, addDoc,getFirestore } from "firebase/firestore";
// import db from '../../firebase/firebase.js'
const db = getFirestore();

import { ref } from 'vue'
const overview = ref('')
const youget = ref('')
const skills = ref('')
const job_type = ref('')

const addWork = async () => {
    const docRef = await addDoc(collection(db, "works"), { 
        user: localStorage.user_id,
        email: localStorage.user_email,
        overview: overview.value,
        youget: youget.value,
        skills: skills.value,
        job_type:job_type.value
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
                <input type="text" placeholder="Overview" name="Overview" id="Overview" required v-model="overview">
            </div>
            <div class="single-input">
                <input type="text" placeholder="What You Will Get" name="youget" id="youget" required v-model="youget">
            </div>
            <div class="single-input">
                <input type="text" placeholder="Skills" name="skills" id="skills" required v-model="skills">
            </div>
            <div class="single-input pb-2">
                <label for="">Job Type</label>
                <select name="cars" id="cars" v-model="job_type">
                    <option value="parttimr" selected>Part Time</option>
                    <option value="household">House Hold</option>
                </select>
            </div>
            <div class="col-12 mb-25"><button class="ht-btn" @click="addWork">Add Work</button></div>
        </div>
    </div>
    <div class="">
        <Footer />
    </div>
</template>