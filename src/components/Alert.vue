<template>
<div class="kintoneplugin-alert">
 <p>{{ message }}</p>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default {
    props: {
        message: {
            type: String,
            required: true,
        }
    }
}
</script>

<style scoped>
div {
  position: relative;
  display: block;
  margin: 8px 0;
  padding: 4px 18px;
  background: #e74c3c;
  color: #f6f6f6;
}
</style>
