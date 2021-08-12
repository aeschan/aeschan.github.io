<template></template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  created() {
    if (process.browser) {
      window.onload = function () {
        location.href = "/projects";
      };
    }
  },
});
</script>