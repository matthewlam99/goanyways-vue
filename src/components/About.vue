<template>
  <div>
    <b-jumbotron text-variant="white" header="About Us" fluid="true">
    </b-jumbotron>
    <b-row class="spacing">
      <b-col></b-col>
      <b-col cols="6">
    <h3>Our Mission</h3>
    <p>{{missionStatement}}</p>
      </b-col>
      <b-col></b-col>
    </b-row>

    <b-row class="alt spacing">
      <b-col></b-col>
      <b-col cols="8">
        <h3>About</h3>
        <p>{{aboutStatement}}</p>
      </b-col>
      <b-col></b-col>
    </b-row>

    <b-container class="spacing">
    <h3>Meet the Team</h3>
      <b-row class="spacing">
        <b-col>
          <b-card
            bg-variant="light"
            title="Shaiv Kumat"
            img-src="https://picsum.photos/600/300/?image=25"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
          <p class="card-text">
          Founder
          </p>
          <b-button href="#" variant="primary">View LinkedIn</b-button>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            bg-variant="light"
            title="Arion Law"
            img-src="https://picsum.photos/600/300/?image=25"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
          <p class="card-text">
          Founder
          </p>
          <b-button href="#" variant="primary">View LinkedIn</b-button>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            bg-variant="light"
            title="Matthew Lam"
            img-src="https://picsum.photos/600/300/?image=25"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
          <p class="card-text">
            Web Dev
          </p>
          <b-button href="#" variant="primary">View LinkedIn</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>


export default {
  name: 'about',
  data () {
    return {
      missionStatement: "We aim to produce a vehicle capable of meeting the average commuters daily requirements while remaining affordable in the current economy. ",
      aboutStatement: "While only travelling a distance of 10 km, Shaiv and Arion spent approximately 3 hours (1.5 hours for one way) riding public transit to school each day. The time wasted on commuting to school sparked the initial development of a motorized robot chassis. Using the parts they had available and past experience in designing robust solutions to intricate problems, we are confident in our ability to build a viable electric vehicle."
    }
  },
  methods: {

  }
}
</script>
<style scoped>
.alt{
  background-color: #eee;
}
.spacing{
  padding: 20px;
}

</style>