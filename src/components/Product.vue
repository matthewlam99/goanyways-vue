<template>
  <div>
    <div class="alt">
      <h1>Goals</h1>
      <div class="align" v-for="goal in goals" :key="goal.id">
        <b-row>
          <b-col>
          </b-col>
          <b-col>
            <li> {{ goal }} </li>
          </b-col>
          <b-col>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product',
  data () {
    return {
      goals: ["100km of range", "Under 300kg of weight (entire vehicle)", "1 person capacity", "Trunk space big enough for day to day errands", "Affordable in today's economy (sub $8,000 USD)", "Under (5ft height x 6ft length x 3ft width)"]
    }
  }
}
</script>
<style scoped>
.alt{
  background-color: #eee;
  padding: 20px;
}
.align{
  text-align: justify;
}
</style>