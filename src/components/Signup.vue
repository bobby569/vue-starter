<template>
  <div>
    <h3>Sign Up</h3>

    <div>
      Already a user? <router-link to="/signin">Sign In</router-link>
    </div>
  </div>
</template>

<script>
import { app } from '../firebase';

export default {
  data() {
    return {
      email: '',
      password: '',
      confirm: '',
      error: {
        message: ''
      }
    };
  },
  methods: {
    signUp() {
      if (this.password !== this.confirm) {
        this.error.message = 'Password does not match!';
        return;
      }
      app
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .catch(err => (this.error = err));
    }
  }
};
</script>
