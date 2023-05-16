<template>
    <div>
        error
        <button @click="goBack">Go back</button>
    </div>
</template>
<script>

export default {
  data(){
    return{
    }
  },
  methods:{
      goBack() {
        this.$router.go(-1)
      }
  }
}
</script>
