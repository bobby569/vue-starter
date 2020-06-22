<template>
  <div>
    <h3>Sign Up</h3>

    <form>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Email" v-model="email" />
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="Password" v-model="password" />
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          placeholder="Confirm Password"
          v-model="confirm"
        />
      </div>
      <button class="btn btn-primary" @click.prevent="signUp">Sign Up</button>
      <button class="btn btn-danger" @click.prevent="reset">Reset</button>
    </form>

    <p>{{ error.message }}</p>

    <div>
      Already a user?
      <router-link to="/signin">Sign In</router-link>
    </div>
  </div>
</template>

<script>
import { firebaseApp } from "../firebase";

export default {
  data() {
    return {
      email: "",
      password: "",
      confirm: "",
      error: {
        message: ""
      }
    };
  },
  methods: {
    signUp() {
      if (this.password !== this.confirm) {
        this.error.message = "Password does not match!";
        return;
      }
      firebaseApp
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .catch(err => (this.error = err));
    },
    reset() {
      this.email = "";
      this.password = "";
      this.confirm = "";
      this.error.message = "";
    }
  }
};
</script>

<style scoped>
form {
  width: 60%;
  margin: auto;
}
</style>
