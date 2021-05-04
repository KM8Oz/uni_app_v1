<template>
   <q-mobile v-if="$q.platform.is.mobile"/> 
   <q-desktop v-else/>
</template>

<script>
import mobile from "./mobile/programma";
import desktop from "./desktop/programma";
export default {
  components:{
   "q-mobile": mobile,
    "q-desktop": desktop 
  },
  name: 'PageIndex'
}
</script>