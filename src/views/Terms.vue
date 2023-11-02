<template>
  <MDBContainer class="mt-5">
    <Navbar/>
    <MDBRow class="pt-5 pb-4">
      <MDBCol class="text-start">
        <MDBBtn color="secondary" @click="termModal = true">Add Term</MDBBtn>
      </MDBCol>
      <MDBCol md="4">
        <MDBInput
            inputGroup
            :formOutline="false"
            wrapperClass="mb-3"
            v-model="searchT"
            placeholder="Search terms, e.g. 'chapter 1', 'Calvinism', ..."
            aria-label="Search"
          >
            <MDBBtn color="primary" @click="searchTerm">
              <MDBIcon icon="search" />
            </MDBBtn>
          </MDBInput>
      </MDBCol>
    </MDBRow>
    <MDBRow class="pt-5">
      <MDBCol class="text-center">
        <div v-if="termList.length === 0">
          Nothing to display. Add a few terms.
        </div>
        <MDBAccordion v-else v-model="activeItem">
          <MDBAccordionItem v-for="term in termList" 
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
            <MDBIcon
              class="text-primary me-3"
              title="edit"
              icon="pen"
              style="cursor: pointer"
              @click="() => editModal(term)"
            />
            <MDBIcon
              class="text-danger"
              title="delete"
              icon="trash"
              style="cursor: pointer"
              @click="() => deleteTerm(term._id)"
            />
          </MDBAccordionItem>
        </MDBAccordion>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  <MDBModal
    id="addNewTermrModal"
    tabindex="-1"
    labelledby="addNewTermModalLabel"
    v-model="termModal"
  >
    <MDBModalHeader>
      <MDBModalTitle id="exampleModalLabel">{{
        isEdited.edited ? "Edit term" : "Add term"
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
            label="title"
            type="text"
            v-model="newTitle"
            counter
            :maxlength="255"
          />
        </div>
        <div class="my-4">
          <MDBTextarea
            label="description"
            type="text"
            v-model="newDescription"
          />
        </div>
        <div class="my-4">
          <MDBCheckbox label="Pin Term for later review?" v-model="newPinTerm" />
        </div>
      </form>
    </MDBModalBody>
    <MDBModalFooter>
      <MDBBtn
        color="secondary"
        @click="
          {
            resetInputs();
            termModal = false;
          }
        "
        >Close</MDBBtn>
      <MDBBtn
        color="primary"
        @click="handleSaveChanges"
        :disabled="!canSendData"
        >{{ isEdited.edited ? "Save changes" : "Add Term" }}</MDBBtn>
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
    MDBAccordion,
    MDBAccordionItem,
    MDBCheckbox
  } from "mdb-vue-ui-kit";
  import TextClamp from 'vue3-text-clamp';
  import axios from "axios";
  import Navbar from "../components/Navbar.vue";
  import {useStore} from '../stores/store'

  const store = useStore()

  const activeItem = ref('collapseOne');

  interface SingleTerm {
    _id: number;
    termModal: string;
    chapterNumber: string;
    title: string;
    description: string;
    pinTerm: false;
  }

  const termList = ref<SingleTerm[]>([]);
  const termModal = ref(false);
  const newChapterNumber = ref("");
  const newTitle = ref("");
  const newDescription = ref("");
  const newPinTerm = ref(false);
  const isEdited = ref({ edited: false, value: -1 });
  const API_URL = ref("");

  const canSendData = computed(() => {
    if (newChapterNumber.value.trim() === ""
      || newTitle.value.trim() === "" 
      || newDescription.value.trim() === "") {
      return false;
    }
    return true;
  });

  const resetInputs = () => {
    newChapterNumber.value = "";
    newTitle.value = "";
    newDescription.value = "";
    isEdited.value = { edited: false, value: -1 };
  };

  const handleSaveChanges = async () => {
    if (!canSendData.value) {
      return;
    }

    isEdited.value.edited
      ? updateTerm(
      isEdited.value.value, 
      newChapterNumber.value,
      newTitle.value, 
      newDescription.value,
      newPinTerm.value)
      : createTerm(
      newChapterNumber.value,
      newTitle.value, 
      newDescription.value,
      newPinTerm.value);
    resetInputs();
    termModal.value = false;
  };

  const editModal = (term: SingleTerm) => {
    newChapterNumber.value = term.chapterNumber;
    newTitle.value = term.title;
    newDescription.value = term.description;
    newPinTerm.value = term.pinTerm;
    isEdited.value = { edited: true, value: term._id };
    termModal.value = true;
  };

  const getTermList = () => {
    axios.get(`${API_URL.value}terms`).then((res) => (termList.value = res.data));
  };

  // search sections
  const searchT = ref('');
  const searchTerm = () => {
    const searchString = searchT.value;
    axios.get(`${API_URL.value}terms`,
    {
      params: {
        search: searchString
      }
    }).then((res) => (termList.value = res.data));
  }

  const createTerm = (
    chapterNumber: string, 
    title: string,
    description: string,
    pinTerm: boolean) => {
      const data = { chapterNumber, title, description};
    axios.post(`${API_URL.value}terms`, data).then(() => {
      getTermList();
    });
  };

  const deleteTerm = (id: number) => {
    axios.delete(`${API_URL.value}terms/${id}`).then(() => {
      getTermList();
    });
  };

  const pinTerm = (id: number) => {
    axios.post(`${API_URL.value}terms/${id}`).then(() => {
      getTermList();
    });
  };

  const updateTerm = (id: number, 
    chapterNumber: string, 
    title: string,
    description: string,
    pinTerm:boolean) => {
    const data = { chapterNumber, title, description, pinTerm};
    console.log(pinTerm);
    axios.put(`${API_URL.value}terms/${id}`, data).then(() => {
      getTermList();
    });
  };

  onMounted(() => {
    API_URL.value = import.meta.env.VITE_API;
    getTermList();
  });
  </script>
