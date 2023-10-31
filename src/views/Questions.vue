<template>
  
  <MDBContainer class="mt-5">
    <Navbar/>
    <MDBRow class="pt-5 pb-4">
      <MDBCol class="text-start">
        <MDBBtn color="secondary" @click="questionModal = true">Add Question</MDBBtn>
      </MDBCol>
      <MDBCol md="4">
        <MDBInput
            inputGroup
            :formOutline="false"
            wrapperClass="mb-3"
            v-model="searchQ"
            placeholder="Search questions, e.g. 'chapter 1', 'labor systems', ..."
            aria-label="Search"
          >
            <MDBBtn color="primary" @click="searchQuestion">
              <MDBIcon icon="search" />
            </MDBBtn>
          </MDBInput>
      </MDBCol>
    </MDBRow>

    <MDBAccordion v-model="activeItem" borderless flush>
          <MDBAccordionItem v-for="question in questionList" 
            icon="fas fa-question-circle fa-sm me-2 opacity-70"
            :headerTitle=question.text
            :collapseId=question.text
          >
            <MDBListGroup class="light" v-for="a in answerList">
              <MDBListGroupItem >
                <i class="fas fa-graduation-cap" v-if = "a.human_or_ai === 'human'" ></i>
                <i class="fas fa-robot" v-else></i>

                  <div v-html=a.answer_text></div>
              </MDBListGroupItem>
            </MDBListGroup>
            <MDBContainer fluid class="mt-3">
              <MDBTextarea
                label="Your answer to above question:"
                type="text"
                v-model="answer"
              />
              <MDBBtn 
              color="secondary" 
              class="mt-3"
              @click="check_answer(question._id, question.chapterNumber, question.text, answer)">
                Submit Answer
              </MDBBtn>
              <MDBIcon
                class="text-primary me-3"
                title="edit"
                icon="pen"
                style="cursor: pointer"
                @click="() => editModal(question)"
              />
              <MDBIcon
                class="text-danger"
                title="delete"
                icon="trash"
                style="cursor: pointer"
                @click="() => deleteQuestion(question._id)"
              />
            </MDBContainer>
          </MDBAccordionItem>
        </MDBAccordion>
    <!--<form v-for="question in questionList">
      <MDBContainer fluid>
          <div class="text-start bg-primary bg-gradient text-white">
            <strong>{{ question.text }} </strong>
          </div>
          <MDBListGroup class="light" v-for="a in answerList">
            <MDBListGroupItem >
              <i class="fas fa-graduation-cap" v-if = "a.human_or_ai === 'human'" ></i>
              <i class="fas fa-robot" v-else></i>

                {{ a.answer_text }}
            </MDBListGroupItem>
          </MDBListGroup>
      </MDBContainer>
      <br/>
      <MDBContainer fluid>
          <MDBTextarea
            label="Your answer to above question:"
            type="text"
            v-model="answer"
          />
          <MDBBtn color="secondary" @click="check_answer(question._id, question.chapterNumber, question.text, answer)">Submit Answer</MDBBtn>
      </MDBContainer>
    </form>-->
  </MDBContainer>
  <MDBModal
    id="addNewQuestionrModal"
    tabindex="-1"
    labelledby="addNewQuestionModalLabel"
    v-model="questionModal"
  >
    <MDBModalHeader>
      <MDBModalTitle id="exampleModalLabel">{{
        isEdited.edited ? "Edit question" : "Add question"
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
            label="text"
            type="text"
            v-model="newText"
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
            questionModal = false;
          }
        "
        >Close</MDBBtn>
      <MDBBtn
        color="primary"
        @click="handleSaveChanges"
        :disabled="!canSendData"
        >{{ isEdited.edited ? "Save changes" : "Add Question" }}</MDBBtn>
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
  } from "mdb-vue-ui-kit";
  import TextClamp from 'vue3-text-clamp';
  import axios from "axios";
  import Navbar from "../components/Navbar.vue";
  import {useStore} from '../stores/store';
  const store = useStore();
  const activeItem = ref('collapseOne');

  interface SingleQuestion {
    _id: number;
    questionModal: string;
    chapterNumber: string;
    text: string;
  }

  interface SingleAnswer {
    human_or_ai: string;
    answer_text: string;
  }

  const questionList = ref<SingleQuestion[]>([]);
  const questionModal = ref(false);
  const newChapterNumber = ref("");
  const newText = ref("");
  const isEdited = ref({ edited: false, value: -1 });
  const API_URL = ref("");
  const answer = ref("");

  const answerList = ref<SingleAnswer[]>([]);

  // search sections
  const searchQ = ref('');
  const searchQuestion = () => {
    const searchString = searchQ.value;
    axios.get(`${API_URL.value}questions`,
    {
      params: {
        search: searchString
      }
    }).then((res) => (questionList.value = res.data));
  }

  const canSendData = computed(() => {
    if (newChapterNumber.value.trim() === ""
      || newText.value.trim() === "") {
      return false;
    }
    return true;
  });

  const resetInputs = () => {
    newChapterNumber.value = "";
    newText.value = "";
    isEdited.value = { edited: false, value: -1 };
  };

  const handleSaveChanges = async () => {
    if (!canSendData.value) {
      return;
    }

    isEdited.value.edited
      ? updateQuestion(
      isEdited.value.value, 
      newChapterNumber.value,
      newText.value)
      : createQuestion(
      newChapterNumber.value,
      newText.value);
    resetInputs();
    questionModal.value = false;
  };

  const editModal = (question: SingleQuestion) => {
    newChapterNumber.value = question.chapterNumber;
    newText.value = question.text;
    isEdited.value = { edited: true, value: question._id };
    questionModal.value = true;
  };

  const getQuestionList = () => {
    axios.get(`${API_URL.value}questions`).then((res) => (questionList.value = res.data));
  };

  const createQuestion = (
    chapterNumber: string, 
    text: string) => {
      const data = { chapterNumber, text};
    axios.post(`${API_URL.value}questions`, data).then(() => {
      getQuestionList();
    });
  };

  const deleteQuestion = (id: number) => {
    axios.delete(`${API_URL.value}questions/${id}`).then(() => {
      getQuestionList();
    });
  };

  const updateQuestion = (id: number, 
    chapterNumber: string, 
    text: string) => {
    const data = { chapterNumber, text};
    axios.put(`${API_URL.value}questions/${id}`, data).then(() => {
      getQuestionList();
    });
  };

  const check_answer = ( 
    question_id: number, 
    chapter_number: string,
    question_text: string,
    answer_input: string) => {
    const data = { question_id, chapter_number, question_text, answer_input};
    // add human answer to the list
    const newAnswer: SingleAnswer = { human_or_ai: 'human', answer_text: answer_input };
    answerList.value.push(newAnswer)
    axios.post(`${API_URL.value}openai/generateAnswer`, data).then((res) => {
      console.log(question_id);
      console.log(chapter_number);
      console.log(question_text);
      console.log(answer_input);
      console.log("after openai call");
      console.log(res);
      const newAnswer: SingleAnswer = { human_or_ai: 'ai', answer_text: res.data };
      answerList.value.push(newAnswer)

      // reset the answer field
      answer.value = "";
    });
  };

  onMounted(() => {
    API_URL.value = import.meta.env.VITE_API;
    getQuestionList();
  });
  </script>
