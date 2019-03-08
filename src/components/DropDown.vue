<template>
  <div class="kintoneplugin-dropdown-outer">
    <div class="kintoneplugin-dropdown">
      <div class="kintoneplugin-dropdown-selected">
        <span class="kintoneplugin-dropdown-selected-name">{{Dropdown}}</span>
      </div>
    </div>
    <div class="kintoneplugin-dropdown-list">
      <div class="kintoneplugin-dropdown-list-item kintoneplugin-dropdown-list-item-selected">
        <span class="kintoneplugin-dropdown-list-item-name">Option A</span>
      </div>
      <div class="kintoneplugin-dropdown-list-item">
        <span class="kintoneplugin-dropdown-list-item-name">Option B</span>
      </div>
      <div class="kintoneplugin-dropdown-list-item">
        <span class="kintoneplugin-dropdown-list-item-name">Option C</span>
      </div>
    </div>
  </div>
</template>

  <script lang="ts">
import Vue from "vue";
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>
  

<style lang="scss" scoped>
.c-kintone-dropdown {
  position: relative;
  display: inline-block;
  overflow: hidden;
  box-sizing: border-box;
  margin-right: 8px;
  margin-bottom: 0;
  padding: 0 16px;
  min-width: 80px;
  max-width: 280px;
  height: 48px;
  border: 1px solid #e3e7e8;
  background-color: #f7f9fa;
  box-shadow: 1px 1px 1px #fff inset;
  color: #3498db;
  text-overflow: ellipsis;
  &:hover {
    background-color: #f4f7f8;
    cursor: pointer;
  }

  &-selected {
    padding-right: 48px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAYAAADN5B7xAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjUwM0JEQzc5RUZENzExRTNBRjRFQ0I1NjlCRDUzOTA5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjUwM0JEQzdBRUZENzExRTNBRjRFQ0I1NjlCRDUzOTA5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTAzQkRDNzdFRkQ3MTFFM0FGNEVDQjU2OUJENTM5MDkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTAzQkRDNzhFRkQ3MTFFM0FGNEVDQjU2OUJENTM5MDkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7KovlSAAAAhElEQVR42mI0mX7LjoGB4RADccCWCUjsB2ILIhSD1BwAadAB4qNAbIxHsTFUjQ5Iw3UgNgTiU1AaHRggyV1nggpegppyBoj1kBTrAvFZIDaBqmFgQZK8AMRmQHwe6kyYmAVUjAFdAwPUNGsgvgLl2wDxaWQFLFjcfAKIHaHs4+iSAAEGABHGF74RDCRaAAAAAElFTkSuQmCC)
      no-repeat right center;
  }

  &-selected-name {
    color: #3498db;
    font-size: 14px;
    line-height: 48px;
  }
}
</style>
