<template lang="pug">
#home
  .level
    .level-item
      .box.home-box
        button.button(@click='logout') Logout
</template>

<script>
export default {
  name: 'Home',
  methods: {
    logout() {
      this.$store.dispatch('logout')
        .then(() => { this.$router.push('/'); });
    },
  },
};
</script>
