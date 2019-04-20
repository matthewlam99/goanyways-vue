<template>
  <div class="informatics">
  <b-container>
    <h1>Features</h1>
    <b-row>
      <b-col>
        <b-card bg-variant="light">
          <div class="circle container">
          <img src="../assets/maxspeed.png" width="70px"/>
          </div>
          <h4>Max Speed</h4>
        </b-card>
      </b-col>
      <b-col>
        <b-card bg-variant="light">
          <div class="circle container">
          <img src="../assets/range.png" width="70px"/>
          </div>
          <h4>Range</h4>
        </b-card>
      </b-col>
      <b-col>
        <b-card bg-variant="light">
          <div class="circle container">
          <img src="../assets/safety.png" width="70px"/>
          </div>
          <h4>Safety</h4>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.informatics{
  margin-bottom: 30px;
}
.circle{
  padding: 15px;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: grey;
  margin-bottom: 20px;
}
</style>