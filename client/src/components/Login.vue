<template lang="pug">
#login
  .level
    .level-item
      .box.login-box
        article.login-form
          h1.title Researcher Login
          .notification.is-danger(v-if='loginError') Login failed.
          b-field(label='Email')
            b-input(v-model='email'
                    @keyup.enter.native='login'
                    type='email'
                    placeholder='pete@purdue.edu')
          b-field(label='Password')
            b-input(v-model='password'
                    @keyup.enter.native='login'
                    type='password'
                    placeholder='something secret')
          .level
            .level-left
              button.button.is-medium.is-primary(@click='login' :class='{ "is-loading": pending }') Login
              ul.small-links
                li
                  a.is-size-6 Participant?
                li
                  a.is-size-6 Forgot password?
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password,
      })
      .then((successful) => {
        if (successful) {
          this.$router.push('/home');
        }
      });
    },
  },
  computed: {
    ...mapState(['pending', 'loginError']),
  },
};
</script>

<style lang="sass" scoped>
.login-box
  margin-top: 30px
  width: 30vw

.title
  margin-bottom: 15px

.small-links
  margin-left: 15px
</style>
