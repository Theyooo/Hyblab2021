<template>
  <button   @click="click" :class=color class="button">
    {{ text }}
  </button>
</template>

<script lang="js">
import Vue from "vue";
export default Vue.component("buttonCustom", {
  name: "buttonCustom",
  props: {
    color: String,
    text: String
  },
  methods: {
    click() {
      this.$emit("click")
    }
  }
});
</script>

<style scoped lang="scss">
$darkBlue: #1e6aff;
$blue:  #0ec0ec;
$yellow: #ffdb27;
  .button {
    margin: 10px;
    max-width: 400px;
    width: 50%;
    display: block;
    border: none;
    border-radius: 20px;
    position: relative;
    color: white;
    font-weight: bold;
    font-size: 1.2em;
    padding: min(20px, 3%);
    cursor: pointer;
    text-align: center;
  }

  .dark-blue {
    background-color: $darkBlue;
  }
  .dark-blue:hover {
    background-color: darken($darkBlue, 20%);
  }

  .yellow {
    background-color: $yellow;
  }
  .yellow:hover {
    background-color: darken($yellow, 20%);
  }
  .blue:hover {
    background-color: darken($blue,20%);
  }

  .blue {
    background-color: $blue;
  }

</style>