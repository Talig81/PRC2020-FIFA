<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="8" lg="6">
        <v-card class="elevation-12">
          <v-toolbar color="purple" dark flat>
            <v-toolbar-title>Sign Up</v-toolbar-title>
          </v-toolbar>
          <v-card-text font="arial">
            <div>Welcome to ClassBin!</div>
            <div>To register just submit a file with the following structure:</div>
            <div>[----------- not included]</div>
            <div>--------------------------------------------------------------------------------</div>
            <div>[YourStudentID]</div>
            <div>Nome: "YourFirstName"</div>
            <div>Apelido: "YourLastName"</div>
            <div>DataNascimento: DD-MM-YYYY</div>
            <div>Morada: "YourAddress"</div>
            <div>Email: "YourEmail"</div>
            <div>Curso: "YourCourse"</div>
            <div>Cadeiras: "Class1Initials"[;"Class2Initials";...].</div>
            <div>Password: "YourPassword"</div>
            <div>--------------------------------------------------------------------------------</div>
            <div>It is required to disclose at least one class, preferably insert all of them. Every field is required.</div>
            
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn @click="submit()">Sign Up</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
 
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
      lazy: false,
    }),

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
    },
  }

</script>