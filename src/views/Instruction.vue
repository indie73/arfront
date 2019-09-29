<template>
  <div class="home">
    <Instruction :id="$route.params.id" />
  </div>
</template>

<script>
// @ is an alias to /src
import Instruction from '@/components/Instruction.vue'

export default {
  name: 'home',
  components: {
    Instruction,
  },
  data() {
    return {
    }
  },
}
</script>
