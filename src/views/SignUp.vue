<template>
<v-app>
  <div class="login-box">
    <v-card class="login-form">
      <v-card-title class="login-title">SignUp</v-card-title> 
      <v-card-subtitle>ユーザー情報をご入力ください</v-card-subtitle> 
      <v-btn  text color="light-blue" to="login">ログイン画面はこちら</v-btn> 
      <v-form 
          ref="form"
          v-model="valid"
          lazy-validation
        >

          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="UserName"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            type="password"
            label="Password"
            class="Password"
          ></v-text-field>

          <v-btn
            color="success"
            class="login-btn"
            @click="submit"
            :disabled="isValid">
            SING UP
          </v-btn>

          <v-btn>
            CLEAR
          </v-btn>

          <v-alert 
            dense
            outlined
            type="error"
            class="error-message"
            v-if="errorMessage"
          >
            {{ errorMessage }}
          </v-alert>
    </v-form>


    </v-card>
  </div>
 
  </v-app>
</template>

<script>
  import firebase from "@/firebase/firebase"  //firebase.js 読み込み

  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || '名前を入力してください',
        v => (v && v.length <= 10) || '名前は１０文字以内で入力してください',
      ],
      email: '',
      emailRules: [
        v => !!v || 'メールアドレスを入力してください',
        v => /.+@.+\..+/.test(v) || 'メールアドレスが不正です',
      ],
      password: '',
      errorMessage: ""
    }),
    computed: {
      isValid() {
        console.log("isValid", this.valid);
        return !this.valid;
      }
    },
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      submit() {
        console.log("submit call")
        firebase.auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(async (result) => {
          console.log("success", result)
          await result.user.updateProfile({
          displayName: this.name}
          );
          console.log("update user", result.user)

          localStorage.message = "新規作成に成功しました"

          //ログイン画面にリダイアル処理
          this.$router.push('/login')

        })
        .catch((error) => {
          console.log("fail", error)
          //エラーメッセージを表示
          this.errorMessage = " ユーザーの新規作成に失敗しました。";
        })
      }
    },
  }
</script>

<style scoped>

.login-form {
  margin: 150px;
  padding: 30px;
  height: 70%;
  background-color:lightcyan;
}
.login-box {
  width: 50%;
  margin: 0px auto;
  padding: 25px;
}
.login-title {
  display: inline-block;
  font-size: 25px;
}

.login-btn {
  margin-top: 10px;
  margin-right: 80px;
}

.error-message {
  margin-top: 20px;
}

.Password {
  font-size: 50px;
}

</style>