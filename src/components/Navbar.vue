<template>
  <MDBNavbar 
  light 
  style="background-color: #e3f2fd"
  container
  expand="lg"
  class="d-flex justify-content-between"
  position="top"
  >
    <MDBNavbarBrand>
      <img
          src="../images/logo.png"
          height="22"
          alt="..."
        />
    </MDBNavbarBrand>
    <MDBNavbarToggler
      target="#navbarColor01"
      @click="collapse7 = !collapse7"
      v-if="store.loggedIn"
    ></MDBNavbarToggler>
    <!-- Collapsible wrapper -->
    <MDBCollapse
      v-if="store.loggedIn"
      id="navbarColor01" 
      v-model="collapse7">
      <MDBNavbarNav class="mb-2 mb-lg-0">
        <MDBNavbarItem to="/dashboard" linkClass="link-secondary fw-bold" active
          >Dashboard</MDBNavbarItem
        >
        <MDBNavbarItem to="/chapters" linkClass="link-secondary fw-bold" active
          >Chapters</MDBNavbarItem
        >
        <MDBNavbarItem to="/sections" linkClass="link-secondary fw-bold"
          >Sections</MDBNavbarItem
        >
        <MDBNavbarItem to="/terms" linkClass="link-secondary fw-bold"
          >Terms</MDBNavbarItem
        >
        <MDBNavbarItem to="/questions" linkClass="link-secondary fw-bold"
          >Questions</MDBNavbarItem
        >
      </MDBNavbarNav>
    </MDBCollapse>

    <MDBNavbarNav right class="mb-2 mb-lg-0 d-flex flex-row">
      <MDBBtn class="btn btn-danger btn-floating googleLogin"
      @click="googleLogin()"
      v-if="!store.loggedIn">
        <i class="fab fa-google"></i>
      </MDBBtn>
      <!-- Avatar -->
      <MDBDropdown 
        v-if="store.loggedIn"
        class="nav-item" 
        v-model="dropdown6">
        <MDBDropdownToggle tag="a" class="nav-link" @click="dropdown6 = !dropdown6"
          ><img
            :src=store.user_avatar
            class="rounded-circle"
            height="22"
            alt=""
            loading="lazy"
          />
        </MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem href="#">My profile</MDBDropdownItem>
          <MDBDropdownItem href="#">Settings</MDBDropdownItem>
          <MDBDropdownItem href="#" @click="logout()">Logout</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    </MDBNavbarNav>
  </MDBNavbar>
</template>
<script setup lang="ts">
  import {
    MDBNavbar,
    MDBNavbarItem,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBBadge,
    MDBBtn,
    MDBIcon,
    MDBCollapse,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBDropdown
  } from 'mdb-vue-ui-kit';
  import { ref } from "vue";
  import {useStore} from '../stores/store';
  import {googleAuth, googleLogout} from '../services/firebase.service'

  const store = useStore();
  const current_nav = store.current_nav;

  const collapse7 = ref(false);
  const dropdown6 = ref(false);
  
  function googleLogin() {
    console.log("sss");
    googleAuth()
  }

  function logout() {
    console.log("sss");
    googleLogout()
  }

</script>