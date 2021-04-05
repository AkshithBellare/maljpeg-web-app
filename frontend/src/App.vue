<template>
  <div id="app">
    <h1>MALJPEG</h1>
    <br><br>
    <picture-input
      ref="pictureInput"
      @change="onChange"
      width="300"
      height="300"
      margin="16"
      accept="image/jpeg,image/jpg"
      size="10"
      :removable="true"
      :customStrings = "{
        upload: '<h1>Bummer!</h1>',
        drag: 'Drag a JPEG image'
      }">
    </picture-input>

    <button @click="attemptUpload" v-bind:class="{disabled: !this.image}">
      Upload
    </button>
  </div>
</template>

<script>
import axios from 'axios'
import PictureInput from 'vue-picture-input'

export default {
  name: 'App',
  components: {
    PictureInput
  },
  data() {
    return {
    'checkimage': null,
    };
  },
  methods: {
    onChange () {
      console.log('New picture selected')
      if (this.$refs.pictureInput.image) {
        console.log('Picture loaded.')
        //console.log(this.$refs.pictureInput.image.slice(23))
        this.checkimage = this.$refs.pictureInput.image.slice(23) 
      } else {
        console.log('FileReader API not supported')
      }
    },
    attemptUpload() {
      const path = 'http://localhost:5000/predict'
      axios.post(path, {"image": this.checkimage})
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
