<template>
   <q-mobile v-if="$q.platform.is.mobile"/> 
   <q-desktop v-else/>
</template>

<script>
import mobile from "./mobile/support";
import desktop from "./desktop/support";
export default {
  components:{
   "q-mobile": mobile,
    "q-desktop": desktop 
  },
  name: 'PageIndex'
}
</script>