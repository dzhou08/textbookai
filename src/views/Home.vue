<template>
  <MDBContainer class="mt-5">
    <Navbar/>


  </MDBContainer>
  <MDBContainer class="overflow-hidden">
    <MDBRow class="gx-5">
      <MDBCol>
        <figure class="figure float-start mt-5">
        <blockquote class="blockquote mt-5">
          <h3 class="text-primary">
            Contents based on OpenStax textbooks
          </h3>
          <br/>
          <h5 >
            TextbookAI is trained on textbook content, images, learning goals and key terms from OpenStax textbooks.
          </h5>
        </blockquote>
        <!--<figcaption class="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>-->
      </figure>
      </MDBCol>
      <MDBCol>
        <figure class="figure float-end mt-5">
          <img
            src="../images/US_history.svg"
            class="figure-img img-fluid rounded-5 shadow-5 mb-3"
            alt="..."
          />
          <figcaption class="figure-caption">
            <a href="https://openstax.org/books/us-history/pages/1-introduction">
              OpenStax Free textbooks
            </a>
          </figcaption>
        </figure>
      </MDBCol>
    </MDBRow>
    <MDBRow class="gx-5">
      <MDBCol>
        <figure class="figure float-start mt-5">
        <img
          src="../images/chapters.png"
          class="figure-img img-fluid rounded-5 shadow-5 mb-3"
          alt="..."
        />
        <figcaption class="figure-caption">
          Grid-layout of textbook chapters
        </figcaption>
      </figure>
      </MDBCol>
      <MDBCol>
        <figure class="figure float-start mt-5">
        <blockquote class="blockquote mt-5">
          <h3 class="text-primary">
            Easily navigable textbook contents
          </h3>
          Grid-layout of textbook chapters and sections; Supports full-text search
        </blockquote>
      </figure>
      </MDBCol>
    </MDBRow>
    <MDBRow class="mt-5">
      <MDBCol md="12" class="text-center">
          <img
            src="../images/logo_full.png"
            class="img-fluid text-center rounded-5 mb-3"
            width="300"
            alt="..."
          />
      </MDBCol>
    </MDBRow>
    <MDBRow class="gx-5">
      <MDBCol col-lg-12 class="text-center text-primary display-1"> 
        <h4>
          Your Personalized AI Assistant
        </h4></MDBCol>
    </MDBRow>
    <MDBRow class="gx-5">
      <MDBCol>
        <figure class="figure float-start mt-5">
        <blockquote class="blockquote mt-5">
          <h3 class="text-primary">
            GenAI generated notes
          </h3>
          <br/>
          <h5 >
            GenAI can take notes for each section, using the format of <a href="https://en.wikipedia.org/wiki/Cornell_Notes">Cornell Notes</a>
          </h5>
        </blockquote>
      </figure>
      </MDBCol>
      <MDBCol>
        <figure class="figure float-end mt-5">
        <img
          src="../images/ai_notes.png"
          class="figure-img img-fluid rounded-5 shadow-5 mb-3"
          alt="..."
        />
        <figcaption class="figure-caption">
          Use GenAI to generate Cornell-notetaking format note, with Term and Definition columns 
        </figcaption>
      </figure>
      </MDBCol>
    </MDBRow>
    <MDBRow class="gx-5">
      <MDBCol>
        <figure class="figure float-end mt-5">
        <img
          src="../images/question_feedback.png"
          class="figure-img img-fluid rounded-5 shadow-5 mb-3"
          alt="..."
        />
        <figcaption class="figure-caption">
          Icons mark stuent submitted content, vs GenAI-generated feedback based on rubric criteria.
        </figcaption>
      </figure>
      </MDBCol>
      <MDBCol>
        <figure class="figure float-start mt-5">
        <blockquote class="blockquote mt-5">
          <h3 class="text-primary">
            Receive feedback from GenAI 
          </h3>
          <br/>
          <h5 >
            Student-GenAI collaboration: Student iteratively submits short-answer questions, and receives rubric-based feedback from GenAI
          </h5>
        </blockquote>
      </figure>
      </MDBCol>
    </MDBRow>
    <MDBRow class="gx-5">
      <MDBCol>
        <figure class="figure float-start mt-5">
        <blockquote class="blockquote mt-5">
          <h3 class="text-primary">
            Practice with key terms 
          </h3>
          <br/>
          <h5 >
            A flash-card style of key terms with corresponding definitions
          </h5>
        </blockquote>
      </figure>
      </MDBCol>
      <MDBCol>
        <figure class="figure float-end mt-5">
        <img
          src="../images/terms.png"
          class="figure-img img-fluid rounded-5 shadow-5 mb-3"
          alt="..."
        />
        <figcaption class="figure-caption">
          List of key items
        </figcaption>
      </figure>
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
    mdbRipple
  } from "mdb-vue-ui-kit";
  import TextClamp from 'vue3-text-clamp';
  import axios from "axios";
  import Navbar from "../components/Navbar.vue";
  import {useStore} from '../stores/store'

  const store = useStore();

  const API_URL = ref("");

  onMounted(() => {
    API_URL.value = import.meta.env.VITE_API;
  });
  </script>
