<template>
  <MDBContainer class="mt-5">
    <Navbar/>
  </MDBContainer>
  <MDBContainer v-if="section && section.sectionTitle">
    <MDBRow class="gy-5 mt-1 text-center">
      <MDBCol md="2" class="d-flex justify-content-end align-items-center " >
        Chapter Number:
      </MDBCol>
      <MDBCol md="8" class="d-flex justify-content-start align-items-center " >
        {{section.chapterNumber}}
      </MDBCol>
    </MDBRow>
    <MDBRow class="mt-1 text-center">
      <MDBCol md="2" class="d-flex justify-content-end align-items-center " >
        Section Number:
      </MDBCol>
      <MDBCol md="8" class="d-flex justify-content-start align-items-center " >
        {{section.sectionNumber}}
      </MDBCol>
    </MDBRow>
    <MDBRow class="mt-1 text-center">
      <MDBCol md="2" class="d-flex justify-content-end align-items-center " >
        Section Title:
      </MDBCol>
      <MDBCol md="8" class="d-flex justify-content-start align-items-center " >
        {{section.sectionTitle}}
      </MDBCol>
    </MDBRow>
    <MDBRow class="mt-1 text-center">
      <MDBCol md="2" class="d-flex justify-content-end align-items-start " >
        Section Text:
      </MDBCol>
      <MDBCol md="8" class="d-flex justify-content-start align-items-center " >
        <text-clamp :text=section.sectionText :max-lines='5' />
      </MDBCol>
    </MDBRow>
    <MDBRow>
      <MDBCol md="2" class="d-flex justify-content-end align-items-center " >
        
      </MDBCol>
      <MDBCol md="8" class="d-flex justify-content-end align-items-center ">
          ({{section.sectionText.split(' ').length}} words) 
      </MDBCol>
    </MDBRow>
    <MDBRow>
      <MDBCol md="2" class="d-flex justify-content-end align-items-center " >
        
      </MDBCol>
      <MDBCol md="8" class="d-flex justify-content-center align-items-center mt-2">
        <MDBBtn color="secondary" 
          @click="generateNote(section._id)" 
          class="me-3">
            AI Generate Note
        </MDBBtn>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  
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

  interface SingleSection {
    _id: number;
    sectionModal: string;
    chapterNumber: string;
    sectionNumber: string;
    sectionTitle: string;
    sectionImage: string;
    sectionImageDescription: string;
    sectionText: string;
    sectionSummary: string;
  }

  const section = ref();
  const sectionModal = ref(false);
  const newChapterNumber = ref("");
  const newSectionNumber = ref("");
  const newSectionTitle = ref("");
  const newSectionImage = ref("");
  const newSectionImageDescription = ref("");
  const newSectionText = ref("");
  const newSectionSummary = ref("");
  const isEdited = ref({ edited: false, value: -1 });
  const API_URL = ref("");

  const getSection = (section_id: number) => {
    axios.get(`${API_URL.value}sections/${section_id}`).then((res) => (section.value = res.data));
  };

  const generateNote = (section_id: number) => {
    
    axios.get(`${API_URL.value}openai/generateNote/${section_id}`).then((res) => (section.value = res.data));
  };

  onMounted(() => {
    API_URL.value = import.meta.env.VITE_API;
    getSection(store.current_section_id);
  });
  </script>
