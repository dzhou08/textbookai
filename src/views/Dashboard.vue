<template>
  <MDBContainer class="mt-5">
    <Navbar/>
    <MDBCarousel
    v-model="carousel2"
    :items="items2"
    :controls="true"
    :indicators="true"
    fade 
    innerClass="rounded-5 shadow-4-strong"
    class="pt-5"
  />
  </MDBContainer>
</template>
<script setup lang="ts">
  import { ref, onMounted, computed } from "vue";
  import {
    MDBContainer,
    MDBCarousel,
    MDBRow,
    MDBCol,
    MDBListGroup,
    MDBListGroupItem,
    MDBBtn,
    MDBModal,
    MDBModalTitle,
    MDBModalHeader,
    MDBModalBody,
    MDBModalFooter,
    MDBInput,
    MDBIcon,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBTextarea,
    MDBCardImg,
    mdbRipple
  } from "mdb-vue-ui-kit";
  import TextClamp from 'vue3-text-clamp';
  import axios from "axios";
  import Navbar from "../components/Navbar.vue";
  import {useStore} from '../stores/store'

  const store = useStore()

  const API_URL = ref("");

  const items2 = [
    {
      src: "https://mdbootstrap.com/img/Photos/Slides/img%20(15).webp",
      alt: "...",
      label: "First slide label",
      caption: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      src: "https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp",
      alt: "...",
      label: "Second slide label",
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      src: "https://mdbootstrap.com/img/Photos/Slides/img%20(23).webp",
      alt: "...",
      label: "Third slide label",
      caption:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
    }
  ];

  const carousel2 = ref(0);

  onMounted(() => {
    API_URL.value = import.meta.env.VITE_API;
  });
  </script>
