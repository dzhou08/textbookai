<template>
  <MDBContainer class="mt-5">
    <Navbar/>
  </MDBContainer>
  <MDBContainer v-if="section && section.sectionTitle">
    <MDBRow class="gy-5 mt-1 text-center">
      <MDBCol md="2" class="d-flex justify-content-end align-items-center " >
        <strong>Chapter Number:</strong>
      </MDBCol>
      <MDBCol md="8" class="d-flex justify-content-start align-items-center " >
        {{section.chapterNumber}}
      </MDBCol>
    </MDBRow>
    <MDBRow class="mt-1 text-center">
      <MDBCol md="2" class="d-flex justify-content-end align-items-center " >
        <strong>Section Number:</strong>
      </MDBCol>
      <MDBCol md="8" class="d-flex justify-content-start align-items-center " >
        {{section.sectionNumber}}
      </MDBCol>
    </MDBRow>
    <MDBRow class="mt-1 text-center">
      <MDBCol md="2" class="d-flex justify-content-end align-items-center " >
        <strong>Section Title:</strong>
      </MDBCol>
      <MDBCol md="8" class="d-flex justify-content-start align-items-center " >
        {{section.sectionTitle}}
      </MDBCol>
    </MDBRow>
    <MDBRow class="mt-1 text-center">
      <MDBCol md="2" class="d-flex justify-content-end align-items-start " >
        <strong>Section Summary:</strong>
      </MDBCol>
      <MDBCol md="8" class="d-flex justify-content-start align-items-start " >
        {{section.sectionSummary}}
      </MDBCol>
    </MDBRow>
    <MDBRow class="mt-1 text-center">
      <MDBCol md="2" class="d-flex justify-content-end align-items-start " >
        <strong>Section Text:</strong>
      </MDBCol>
      <MDBCol md="8" class="d-flex justify-content-start align-items-start " >
        <text-clamp :text=section.sectionText :max-lines='5' />
      </MDBCol>
    </MDBRow>
    <MDBRow>
      <MDBCol md="2" class="d-flex justify-content-end align-items-center " >
        
      </MDBCol>
      <MDBCol md="8" class="d-flex justify-content-end align-items-center ">
         <MDBBtn color="secondary" @click="textModal = true">View all {{section.sectionText.split(' ').length}} words</MDBBtn>
      </MDBCol>
    </MDBRow>
    <MDBRow>
      <MDBCol md="4" class="d-flex justify-content-start align-items-center " >
        <MDBBtn color="secondary" 
          @click="generateNote(section._id)" 
          class="me-5">
            Generate Note with AI
        </MDBBtn>  
      </MDBCol>
      <MDBCol md="6" class="d-flex justify-content-start align-items-center mt-2">

      </MDBCol>
    </MDBRow>
    <MDBRow v-if="ai_note" class="mt-3">
      <MDBCol md="10" class="d-flex justify-content-end align-items-center " >
        <div v-html=ai_note></div>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  <MDBModal
    id="textModal"
    tabindex="-1"
    labelledby="textModalLabel"
    v-model="textModal"
  >
    <MDBModalHeader>
      <MDBModalTitle id="textModalLabel">
        Section Full Text
      </MDBModalTitle>
    </MDBModalHeader>
    <MDBModalBody>
      {{section.sectionText}}
    </MDBModalBody>
    <MDBModalFooter>
      <MDBBtn
        color="secondary"
        @click="
          {
            textModal = false;
          }
        "
        >Close</MDBBtn>
    </MDBModalFooter>
  </MDBModal>
  
</template>
<script setup lang="ts">
  import { ref, onMounted, computed } from "vue";
  import {
    MDBContainer,
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
  } from "mdb-vue-ui-kit";
  import TextClamp from 'vue3-text-clamp';
  import axios from "axios";
  import Navbar from "../components/Navbar.vue";
  import {useStore} from '../stores/store'

  const store = useStore();

  const section_full_text= ref();
  const textModal = ref(false);

  const section = ref();
  const API_URL = ref("");

  // AI generated section note
  const ai_note = ref("");

  const getSection = (section_id: string) => {
    axios.get(`${API_URL.value}sections/${section_id}`).then((res) => (section.value = res.data));
  };

  const generateNote = (section_id: string) => {
    const data = { section_id};
    // add human answer to the list
    axios.post(`${API_URL.value}openai/generateNote`, data).
    then((res) => {
      ai_note.value = res.data;
    }
    );
  };

  onMounted(() => {
    API_URL.value = import.meta.env.VITE_API;
    getSection(store.current_section_id);
  });
  </script>
