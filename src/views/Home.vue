<template>
  <div class="home">
    <Instructions />
  </div>
</template>

<script>
// @ is an alias to /src
import Instructions from '@/components/Instructions.vue'

export default {
  name: 'home',
  components: {
    Instructions,
  },
  data() {
    return {
    }
  },
}
</script>
