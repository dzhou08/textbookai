<template>
  <MDBContainer class="mt-5">
    <Navbar/>
    <MDBRow class="g-2 g-lg-3 pt-5 pb-4">
      <MDBCol class="text-start">
        <MDBBtn color="secondary" @click="chapterModal = true">Add Chapter</MDBBtn>
      </MDBCol>
      <MDBCol md="4">
        <MDBInput
            inputGroup
            :formOutline="false"
            wrapperClass="mb-3"
            v-model="search4"
            placeholder="Search chapters, e.g. 'chapter 1', 'awakening', ..."
            aria-label="Search"
          >
            <MDBBtn color="primary" @click="searchChapter">
              <MDBIcon icon="search" />
            </MDBBtn>
          </MDBInput>
      </MDBCol>
    </MDBRow>
   <!--<MDBRow class="mt-3 pt-5" style="min-height: 40vh">-->
   <MDBRow v-if="chapterList.length === 0" class="gy-5">
      <MDBCol col="6" class="p-3">
        <div class="p-3">Nothing to display. Add a few chapters.</div>
      </MDBCol>
    </MDBRow>
    <MDBRow v-else class="gy-5">
      <MDBCol v-for="chapter in chapterList"  md="4" class="d-flex justify-content-center align-items-center " >
        <MDBCard>
          <a v-mdb-ripple="{ color: 'light' }">
            <MDBCardImg 
            style="width: 100%; height: 15rem; object-fit:cover" 
            :src=chapter.chapterImage top 
            :alt=chapter.chapterImageDescription
            :label=chapter.chapterImageDescription 
            :caption=chapter.chapterImageDescription />
          </a>
          <MDBCardBody>
            <MDBCardTitle>
              Chapter {{ chapter.chapterNumber }} 
              <text-clamp :text = chapter.chapterTitle :max-lines='2' />
            </MDBCardTitle>
            <MDBCardText>
              <text-clamp :text=chapter.chapterIntroduction :max-lines='3' />
            </MDBCardText>
            <MDBIcon
                class="text-primary me-3"
                title="edit"
                icon="pen"
                style="cursor: pointer"
                @click="() => editModal(chapter)"
              />
              <MDBIcon
                class="text-danger"
                title="delete"
                icon="trash"
                style="cursor: pointer"
                @click="() => deleteChapter(chapter._id)"
              />
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  <MDBModal
    id="addNewChapterModal"
    tabindex="-1"
    labelledby="addNewChapterModalLabel"
    v-model="chapterModal"
  >
    <MDBModalHeader>
      <MDBModalTitle id="exampleModalLabel">{{
        isEdited.edited ? "Edit chapter" : "Add chapter"
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
            label="chapter_title"
            type="text"
            v-model="newChapterTitle"
            counter
            :maxlength="255"
          />
        </div>
        <div class="my-4">
          <MDBInput
            label="chapter_image"
            type="text"
            v-model="newChapterImage"
          />
        </div>
        <div class="my-4">
          <MDBTextarea
            label="chapter_image_description"
            type="text"
            v-model="newChapterImageDescription"
          />
        </div>
        <div class="my-4">
          <MDBTextarea
            label="chapter_introduction"
            type="text"
            v-model="newChapterIntroduction"
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
            chapterModal = false;
          }
        "
        >Close</MDBBtn>
      <MDBBtn
        color="primary"
        @click="handleSaveChanges"
        :disabled="!canSendData"
        >{{ isEdited.edited ? "Save changes" : "Add Chapter" }}</MDBBtn>
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
  
  const vMdbRipple = mdbRipple; 
  const store = useStore()

  interface SingleChapter {
    _id: number;
    chapterModal: string;
    chapterNumber: string;
    chapterTitle: string;
    chapterIntroduction: string;
    chapterImage: string;
    chapterImageDescription: string;
  }

  const chapterList = ref<SingleChapter[]>([]);
  const chapterModal = ref(false);
  const newChapterNumber = ref("");
  const newChapterTitle = ref("");
  const newChapterIntroduction = ref("");
  const newChapterImage = ref("");
  const newChapterImageDescription = ref("");
  const isEdited = ref({ edited: false, value: -1 });
  const API_URL = ref("");

  const canSendData = computed(() => {
    if (newChapterNumber.value.trim() === ""
      || newChapterTitle.value.trim() === "" 
      || newChapterIntroduction.value.trim() === ""
      || newChapterImage.value.trim() === ""
      || newChapterImageDescription.value.trim() === "") {
      return false;
    }
    return true;
  });

  const resetInputs = () => {
    newChapterNumber.value = "";
    newChapterTitle.value = "";
    newChapterIntroduction.value = "";
    newChapterImage.value = "";
    newChapterImageDescription.value = "";
    isEdited.value = { edited: false, value: -1 };
  };

  const handleSaveChanges = async () => {
    if (!canSendData.value) {
      return;
    }

    isEdited.value.edited
      ? updateChapter(
      isEdited.value.value, 
      newChapterNumber.value,
      newChapterTitle.value, 
      newChapterImage.value, 
      newChapterImageDescription.value, 
      newChapterIntroduction.value)
      : createChapter(
      newChapterNumber.value,
      newChapterTitle.value, 
      newChapterImage.value, 
      newChapterImageDescription.value, 
      newChapterIntroduction.value);
    resetInputs();
    chapterModal.value = false;
  };

  const editModal = (chapter: SingleChapter) => {
    newChapterNumber.value = chapter.chapterNumber;
    newChapterTitle.value = chapter.chapterTitle;
    newChapterImage.value = chapter.chapterImage; 
    newChapterImageDescription.value = chapter.chapterImageDescription;
    newChapterIntroduction.value = chapter.chapterIntroduction;
    isEdited.value = { edited: true, value: chapter._id };
    chapterModal.value = true;
  };

  const getChapterList = () => {
    axios.get(`${API_URL.value}chapters`).then((res) => (chapterList.value = res.data));
  };

  // search sections
  const search4 = ref('');
  const searchChapter = () => {
    const searchString = search4.value;
    axios.get(`${API_URL.value}chapters`,
    {
      params: {
        search: searchString
      }
    }).then((res) => (chapterList.value = res.data));
  }

  const createChapter = (
    chapterNumber: string, 
    chapterTitle: string,
    chapterImage: string,
    chapterImageDescription: string,
    chapterIntroduction: string) => {
    const data = { 
      chapterNumber, chapterTitle,
      chapterImage, chapterImageDescription,
      chapterIntroduction};
    axios.post(`${API_URL.value}chapters`, data).then(() => {
      getChapterList();
    });
  };

  const deleteChapter = (id: number) => {
    axios.delete(`${API_URL.value}chapters/${id}`).then(() => {
      getChapterList();
    });
  };

  const updateChapter = (id: number, 
    chapterNumber: string, 
    chapterTitle: string,
    chapterImage: string,
    chapterImageDescription: string,
    chapterIntroduction: string) => {
    const data = { chapterNumber, chapterTitle,
      chapterImage, chapterImageDescription,
      chapterIntroduction};
    axios.put(`${API_URL.value}chapters/${id}`, data).then(() => {
      getChapterList();
    });
  };

  onMounted(() => {
    API_URL.value = import.meta.env.VITE_API;
    getChapterList();
  });
  </script>
