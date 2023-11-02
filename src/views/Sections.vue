<template>
  <MDBContainer class="mt-5">
    <Navbar/>
    <MDBRow class="g-2 g-lg-3 pt-5 pb-4">
      <MDBCol class="text-start">
        <MDBBtn color="secondary" @click="sectionModal = true">Add Section</MDBBtn>
      </MDBCol>
      <MDBCol md="4">
        <MDBInput
            inputGroup
            :formOutline="false"
            wrapperClass="mb-3"
            v-model="search5"
            placeholder="Search sections, e.g. 'chapter 1', 'world war II', ..."
            aria-label="Search"
          >
            <MDBBtn color="primary" @click="searchSection">
              <MDBIcon icon="search" />
            </MDBBtn>
          </MDBInput>
      </MDBCol>
    </MDBRow>
   <!--<MDBRow class="mt-3 pt-5" style="min-height: 40vh">-->
   <MDBRow v-if="sectionList.length === 0" class="gy-5">
      <MDBCol col="6" class="p-3">
        <div class="p-3">Nothing to display. Add a few sections.</div>
      </MDBCol>
    </MDBRow>
    <MDBRow v-else class="gy-5">
      <MDBCol v-for="section in sectionList"  md="4" class="d-flex justify-content-center align-items-center " >
        <MDBCard>
          <a v-mdb-ripple="{ color: 'light' }">
            <MDBCardImg 
            style="width: 100%; height: 15rem; object-fit:cover" 
            :src=section.sectionImage top :alt=section.sectionImageDescription />
          </a>
          <MDBCardBody>
            <MDBCardTitle>
              Chapter {{ section.chapterNumber }}.{{ section.sectionNumber }} 
              <text-clamp :text = section.sectionTitle :max-lines='2' />
            </MDBCardTitle>
            <MDBCardText>
              <text-clamp :text=section.sectionSummary :max-lines='3' />
            </MDBCardText>
            <MDBBtn color="secondary" 
            @click="toSection(section._id.toString())" 
            class="me-3">
              Go to Section
            </MDBBtn>

            <MDBIcon
                class="text-primary me-3"
                title="edit"
                icon="pen"
                style="cursor: pointer"
                @click="() => editModal(section)"
              />
              <MDBIcon
                class="text-danger"
                title="delete"
                icon="trash"
                style="cursor: pointer"
                @click="() => deleteSection(section._id)"
              />
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  <MDBModal
    id="addNewSectionModal"
    tabindex="-1"
    labelledby="addNewSectionModalLabel"
    v-model="sectionModal"
  >
    <MDBModalHeader>
      <MDBModalTitle id="exampleModalLabel">{{
        isEdited.edited ? "Edit section" : "Add section"
      }}</MDBModalTitle>
    </MDBModalHeader>
    <MDBModalBody>
      <form>
        <div class="my-4">
          <MDBInput
            label="chapter_number"
            type="text"
            v-model="newChapterNumber"
            counter
            :maxlength="2"
          />
        </div>
        <div class="my-4">
          <MDBInput
            label="section_number"
            type="text"
            v-model="newSectionNumber"
            counter
            :maxlength="2"
          />
        </div>
        <div class="my-4">
          <MDBInput
            label="section_title"
            type="text"
            v-model="newSectionTitle"
            counter
            :maxlength="255"
          />
        </div>
        <div class="my-4">
          <MDBInput
            label="section_image"
            type="text"
            v-model="newSectionImage"
            counter
            :maxlength="255"
          />
        </div>
        <div class="my-4">
          <MDBTextarea
            label="section_image_description"
            type="text"
            v-model="newSectionImageDescription"
          />
        </div>
        <div class="my-4">
          <MDBTextarea
            label="section_text"
            type="text"
            v-model="newSectionText"
          />
        </div>
        <div class="my-4">
          <MDBTextarea
            label="section_summary"
            type="text"
            v-model="newSectionSummary"
          />
        </div>
      </form>
    </MDBModalBody>
    <MDBModalFooter>
      <MDBBtn
        color="secondary"
        @click="
          {
            resetInputs();
            sectionModal = false;
          }
        "
        >Close</MDBBtn
      >
      <MDBBtn
        color="primary"
        @click="handleSaveChanges"
        :disabled="!canSendData"
        >{{ isEdited.edited ? "Save changes" : "Add Section" }}</MDBBtn
      >
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
    mdbRipple,
  } from "mdb-vue-ui-kit";
  import TextClamp from 'vue3-text-clamp';
  import axios from "axios";
  import Navbar from "../components/Navbar.vue";
  import {useStore} from '../stores/store'
  import router from "../router";
  
  const store = useStore();

  const toSection = (sectionId:string) => {
    store.current_section_id = sectionId,
    router.push('section') 
  }

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

  const sectionList = ref<SingleSection[]>([]);
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

  const canSendData = computed(() => {
    if (newChapterNumber.value.trim() === ""
      || newSectionNumber.value.trim() === "" 
      || newSectionTitle.value.trim() === ""
      || newSectionImage.value.trim() === ""
      || newSectionImageDescription.value.trim() === ""
      || newSectionText.value.trim() === ""
      || newSectionSummary.value.trim() === "") {
      return false;
    }
    return true;
  });

  const resetInputs = () => {
    newChapterNumber.value = "";
    newSectionNumber.value = "";
    newSectionTitle.value = "";
    newSectionImage.value = "";
    newSectionImageDescription.value = "";
    newSectionText.value = "";
    newSectionSummary.value = "";
    isEdited.value = { edited: false, value: -1 };
  };

  const handleSaveChanges = async () => {
    if (!canSendData.value) {
      return;
    }

    isEdited.value.edited
      ? updateSection(isEdited.value.value, 
      newChapterNumber.value, newSectionNumber.value, 
      newSectionTitle.value, 
      newSectionImage.value, newSectionImageDescription.value,
      newSectionText.value, newSectionSummary.value)
      : createSection(newChapterNumber.value, newSectionNumber.value, 
      newSectionTitle.value, newSectionImage.value, newSectionImageDescription.value, 
      newSectionText.value, newSectionSummary.value);
    resetInputs();
    sectionModal.value = false;
  };

  const editModal = (section: SingleSection) => {
    newChapterNumber.value = section.chapterNumber;
    newSectionNumber.value = section.sectionNumber;
    newSectionTitle.value = section.sectionTitle;
    newSectionImage.value = section.sectionImage;
    newSectionImageDescription.value = section.sectionImageDescription;
    newSectionText.value = section.sectionText;
    newSectionSummary.value = section.sectionSummary;
    isEdited.value = { edited: true, value: section._id };

    sectionModal.value = true;
  };

  const getSectionList = () => {
    axios.get(`${API_URL.value}sections`).then((res) => (sectionList.value = res.data));
  };

  // search sections
  const search5 = ref('');
  const searchSection = () => {
    const searchString = search5.value;
    axios.get(`${API_URL.value}sections`,
    {
      params: {
        search: searchString
      }
    }).then((res) => (sectionList.value = res.data));
  }

  const createSection = (
    chapterNumber: string, 
    sectionNumber: string,
    sectionTitle: string,
    sectionImage: string,
    sectionImageDescription: string,
    sectionText: string,
    sectionSummary: string) => {
    const data = { chapterNumber, sectionNumber, 
      sectionTitle, sectionImage, sectionImageDescription,
      sectionText, sectionSummary};
    axios.post(`${API_URL.value}sections`, data).then(() => {
      getSectionList();
    });
  };

  const deleteSection = (id: number) => {
    axios.delete(`${API_URL.value}sections/${id}`).then(() => {
      getSectionList();
    });
  };

  const updateSection = (id: number, 
    chapterNumber: string, 
    sectionNumber: string,
    sectionTitle: string,
    sectionImage: string,
    sectionImageDescription: string,
    sectionText: string,
    sectionSummary: string) => {
    const data = { chapterNumber, sectionNumber, 
      sectionTitle, sectionImage, sectionImageDescription,
      sectionText, sectionSummary};
    axios.put(`${API_URL.value}sections/${id}`, data).then(() => {
      getSectionList();
    });
  };

  onMounted(() => {
    API_URL.value = import.meta.env.VITE_API;
    store.current_section_id='',
    getSectionList();
  });
  </script>
