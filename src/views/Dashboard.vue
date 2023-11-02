<template>
  <MDBContainer class="mt-5">
    <Navbar/>
  </MDBContainer>
  <MDBContainer>
    <MDBRow class="pt-5">
      <MDBCol class="text-center">
        <div v-if="pinTermList.length === 0">
          <strong>NO Pinned Terms. Good Job!</strong>
        </div>
        <div v-else class="text-start">
          <strong>Review Pinned Terms:</strong>
          <MDBAccordion v-model="activeItem" >
            <MDBAccordionItem v-for="term in pinTermList" 
              icon="fas fa-highlighter fa-sm me-2 opacity-70"
              :headerTitle=term.title
              :collapseId=term.title
            >
            <div v-if=term.pinTerm class="bg-warning">
              {{ term.description }}
            </div>
            <div v-else>
              {{ term.description }}
            </div>
            - From Chapter {{ term.chapterNumber }}
            <br/>
              <MDBIcon v-if = !term.pinTerm
                class="text-danger ms-3 me-3"
                title="Pin"
                icon="eye"
                style="cursor: pointer"
                @click="() => updateTerm(term._id, term.chapterNumber, term.title, term.description, true)"
              />
              <MDBIcon v-else
                class="text-danger ms-3 me-3"
                title="Pin"
                icon="eye-slash"
                style="cursor: pointer"
                @click="() => updateTerm(term._id, term.chapterNumber, term.title, term.description, false)"
              />
            </MDBAccordionItem>
          </MDBAccordion>
        </div>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  <MDBContainer>
    <MDBRow class="g-2 g-lg-3 pt-5 pb-4">
      <MDBCol class="justify-content-center align-items-center " md="8">
        <strong>Image Carousel:</strong>
        <MDBCarousel v-model="carousel1" 
        :items="items1" 
        fade innerClass="rounded-5 shadow-4-strong"
        transition-duration=3s;
        width="200"/>
      </MDBCol>
    </MDBRow>
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
    mdbRipple,
    MDBAccordion,
    MDBAccordionItem,
  } from "mdb-vue-ui-kit";
  import TextClamp from 'vue3-text-clamp';
  import axios from "axios";
  import Navbar from "../components/Navbar.vue";
  import {useStore} from '../stores/store'

  const store = useStore()

  const API_URL = ref("");

  interface SingleChapter {
    _id: number;
    chapterModal: string;
    chapterNumber: string;
    chapterTitle: string;
    chapterIntroduction: string;
    chapterImage: string;
    chapterImageDescription: string;
  };
  type SingleImage = {
    src: string;
    alt: string;
    label: string;
    caption: string;
  }

  const items1 = [
    {
      src: "https://openstax.org/apps/image-cdn/v1/f=webp/apps/archive/20230828.164620/resources/db97fc6cffc1f5cd7742760c14261fe0014572ad",
      alt: "...",
      label: "",
      caption: 'This 1507 map by cartographers Martin Waldseemüller and Matthais Ringmann is credited as the first to incorporate the \
      word "America." Little was known about the continent at the time, as the land masses on the far left of the map reveal. \
      But the New World offered opportunity that the Old World would exploit.'
    },
    {
      src: "https://openstax.org/apps/image-cdn/v1/f=webp/apps/archive/20230828.164620/resources/1089d89f117213e487177b77801023dcee6b8d59",
      alt: "...",
      label: "",
      caption: "Figure 2.1 After Christopher Columbus “discovered” the New World, he sent letters home to Spain describing the wonders he beheld. \
      These letters were quickly circulated throughout Europe and translated into Italian, German, and Latin. \
      This woodcut is from the first Italian verse translation of the letter Columbus sent to the Spanish court after his first voyage, \
      Lettera delle isole novamente trovata by Giuliano Dati."
    },
    {
      src: "https://openstax.org/apps/image-cdn/v1/f=webp/apps/archive/20230828.164620/resources/13dcea531cffeece7fc2fd4bb5c1aabedcffe639",
      alt: "...",
      label: "",
      caption: 'Figure 3.1 John Smith’s famous map of Virginia (1622) illustrates many geopolitical features of early colonization. \
      In the upper left, Powhatan, who governed a powerful local confederation of Algonquian communities, sits above other local leaders, \
      denoting his authority. Another native figure, Susquehannock, who appears in the upper right, visually reinforces the message that \
      the English did not control the land beyond a few outposts along the Chesapeake.'
    },
  ];

  const carousel1 = ref(0);

  const activeItem = ref('collapseOne');
  interface SingleTerm {
    _id: number;
    termModal: string;
    chapterNumber: string;
    title: string;
    description: string;
    pinTerm: false;
  }

  const pinTermList = ref<SingleTerm[]>([]);

  const getPinTermList = () => {
    axios.get(`${API_URL.value}terms/getPinTerms`).then((res) => (pinTermList.value = res.data));
  };

  const updateTerm = (id: number, 
    chapterNumber: string, 
    title: string,
    description: string,
    pinTerm:boolean) => {
    const data = { chapterNumber, title, description, pinTerm};
    console.log(pinTerm);
    axios.put(`${API_URL.value}terms/${id}`, data).then(() => {
      getPinTermList();
    });
  };

  onMounted(() => {
    API_URL.value = import.meta.env.VITE_API;
    getPinTermList();
  });
  </script>
