<template>
  <div
    class="navbarsButton"
    :class="[
      color ? 'navbarsButton-000' : 'navbarsButton-fff',
      click ? 'navbarsButton-' + (color ? '000' : 'fff') + '-click' : '',
    ]"
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
    click: {
      type: Boolean,
    },
    color: {
      type: Boolean,
    },
  },
};
</script>

<style scoped>
.navbarsButton-000,
.navbarsButton-fff {
  padding: 0 20px;
  height: 80px;
  line-height: 80px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease;
}

.navbarsButton-000 {
  color: rgba(0, 0, 0, 0.4);
}

.navbarsButton-fff {
  color: rgba(255, 255, 255, 0.6);
}

.navbarsButton-000:hover,
.navbarsButton-000-click {
  padding: 0 16px;
  font-size: 20px;
  color: rgba(0, 0, 0);
}

.navbarsButton-fff:hover,
.navbarsButton-fff-click {
  padding: 0 16px;
  font-size: 20px;
  color: rgba(255, 255, 255);
}
</style>