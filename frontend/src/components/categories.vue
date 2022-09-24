<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-3 scrolable" >
        <v-list>
          <v-list-item>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-group :value="true" prepend-icon="mdi-account-circle">
            <template v-slot:activator>
              <v-list-item-title>course1</v-list-item-title>
            </template>

            <v-list-group :value="true" no-action sub-group>
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>videos</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="([title, icon], i) in admins"
                :key="i"
                link
                @click="lecture = 'v'"
              >
                <v-list-item-title v-text="title"></v-list-item-title>

                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>

            <v-list-group no-action sub-group>
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>lectures</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="([title], i) in cruds"
                :key="i"
                link
                @click="lecture = 'b'"
              >
                <v-list-item-title v-text="title"></v-list-item-title>
              </v-list-item>
            </v-list-group>
            <v-list-group no-action sub-group>
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title> quizs </v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item
                v-for="([quiz], index1) in cuiz"
                :key="index1"
                link
                @click="lecture = 'quiz'"
              >
                <v-list-item-title v-text="quiz"></v-list-item-title>
              </v-list-item>
            </v-list-group>
          </v-list-group>
        </v-list>
      </div>

      <div class="col">
        <slot v-if="lecture == 'a'">
          <h3>lecture1</h3>
          <br />
          <p class="ml-6">
            An IFrame (Inline Frame) is an HTML document embedded inside another
            HTML document on a website. The IFrame HTML element is often used to
            insert content from another source, such as an advertisement, into a
            Web page. An IFrame (Inline Frame) is an HTML document embedded
            inside another HTML document on a website. The IFrame HTML element
            is often used to insert content from another source, such as an
            advertisement, into a Web page. An IFrame (Inline Frame) is an HTML
            document embedded inside another HTML document on a website. The
            IFrame HTML element is often used to insert content from another
            source, such as an advertisement, into a Web page. An IFrame (Inline
            Frame) is an HTML document embedded inside another HTML document on
            a website. The IFrame HTML element is often used to insert content
            from another source, such as an advertisement, into a Web
            page.fdsfsdbds nbsqbd fdbsqjnf hsqbf snqbfn bsqndbf lsbdfqnlbsdnbf
            djslh
          </p>
          <p class="ml-6">
            An IFrame (Inline Frame) is an HTML document embedded inside another
            HTML document on a website. The IFrame HTML element is often used to
            insert content from another source, such as an advertisement, into a
            Web page. An IFrame (Inline Frame) is an HTML document embedded
            inside another HTML document on a website. The IFrame HTML element
            is often used to insert content from another source, such as an
            advertisement, into a Web page. An IFrame (Inline Frame) is an HTML
            document embedded inside another HTML document on a website. The
            IFrame HTML element is often used to insert content from another
            source, such as an advertisement, into a Web page. An IFrame (Inline
            Frame) is an HTML document embedded inside another HTML document on
            a website. The IFrame HTML element is often used to insert content
            from another source, such as an advertisement, into a Web
            page.fdsfsdbds nbsqbd fdbsqjnf hsqbf snqbfn bsqndbf lsbdfqnlbsdnbf
            djslh
          </p>
          <p class="ml-6">
            An IFrame (Inline Frame) is an HTML document embedded inside another
            HTML document on a website. The IFrame HTML element is often used to
            insert content from another source, such as an advertisement, into a
            Web page. An IFrame (Inline Frame) is an HTML document embedded
            inside another HTML document on a website. The IFrame HTML element
            is often used to insert content from another source, such as an
            advertisement, into a Web page. An IFrame (Inline Frame) is an HTML
            document embedded inside another HTML document on a website. The
            IFrame HTML element is often used to insert content from another
            source, such as an advertisement, into a Web page. An IFrame (Inline
            Frame) is an HTML document embedded inside another HTML document on
            a website. The IFrame HTML element is often used to insert content
            from another source, such as an advertisement, into a Web
            page.fdsfsdbds nbsqbd fdbsqjnf hsqbf snqbfn bsqndbf lsbdfqnlbsdnbf
            djslh
          </p>
          <br />
          <v-divider></v-divider>

          <p>
            This course uses a third-party tool, Hands-On Lab: Your First
            Program, Types, Expressions, and Variables, to enhance your learning
            experience. The tool will reference basic information like your
            name, email, and Coursera ID.
          </p>

          <br />
          <br />
          <v-btn text color="blue" class="mx-3"
            >like<v-icon>mdi-emoticon-happy </v-icon></v-btn
          >
          <v-btn text color="blue" class="mx-2"
            >dislike<v-icon>mdi-emoticon-sad</v-icon></v-btn
          >
          <v-btn text color="blue" class="mx-2"
            >report an issue<v-icon>mdi-bell-ring</v-icon></v-btn
          >
          <v-btn text color="blue" class="mx-2"
            >dislike<v-icon>mdi-like</v-icon></v-btn
          >
        </slot>
        <slot v-if="lecture == 'b'">
          <h2 class="ml-5">lecture2</h2>
          <v-btn text color="blue" class="mr-5">
            <v-icon>mdi-chevron-left</v-icon> previous</v-btn
          >
          <v-btn text color="blue"
            >next <v-icon>mdi-chevron-right</v-icon>
          </v-btn>

          <br />

          <br />
          <p class="ml-6">
            An IFrame (Inline Frame) is an HTML document embedded inside another
            HTML document on a website. The IFrame HTML element is often used to
            insert content from another source, such as an advertisement, into a
            Web page. An IFrame (Inline Frame) is an HTML document embedded
            inside another HTML document on a website. The IFrame HTML element
            is often used to insert content from another source, such as an
            advertisement, into a Web page. An IFrame (Inline Frame) is an HTML
            document embedded inside another HTML document on a website. The
            IFrame HTML element is often used to insert content from another
            source, such as an advertisement, into a Web page. An IFrame (Inline
            Frame) is an HTML document embedded inside another HTML document on
            a website. The IFrame HTML element is often used to insert content
            from another source, such as an advertisement, into a Web
            page.fdsfsdbds nbsqbd fdbsqjnf hsqbf snqbfn bsqndbf lsbdfqnlbsdnbf
            djslh
          </p>
          <p class="ml-6">
            An IFrame (Inline Frame) is an HTML document embedded inside another
            HTML document on a website. The IFrame HTML element is often used to
            insert content from another source, such as an advertisement, into a
            Web page. An IFrame (Inline Frame) is an HTML document embedded
            inside another HTML document on a website. The IFrame HTML element
            is often used to insert content from another source, such as an
            advertisement, into a Web page. An IFrame (Inline Frame) is an HTML
            document embedded inside another HTML document on a website. The
            IFrame HTML element is often used to insert content from another
            source, such as an advertisement, into a Web page. An IFrame (Inline
            Frame) is an HTML document embedded inside another HTML document on
            a website. The IFrame HTML element is often used to insert content
            from another source, such as an advertisement, into a Web
            page.fdsfsdbds nbsqbd fdbsqjnf hsqbf snqbfn bsqndbf lsbdfqnlbsdnbf
            djslh
          </p>
          <p class="ml-6">
            An IFrame (Inline Frame) is an HTML document embedded inside another
            HTML document on a website. The IFrame HTML element is often used to
            insert content from another source, such as an advertisement, into a
            Web page. An IFrame (Inline Frame) is an HTML document embedded
            inside another HTML document on a website. The IFrame HTML element
            is often used to insert content from another source, such as an
            advertisement, into a Web page. An IFrame (Inline Frame) is an HTML
            document embedded inside another HTML document on a website. The
            IFrame HTML element is often used to insert content from another
            source, such as an advertisement, into a Web page. An IFrame (Inline
            Frame) is an HTML document embedded inside another HTML document on
            a website. The IFrame HTML element is often used to insert content
            from another source, such as an advertisement, into a Web
            page.fdsfsdbds nbsqbd fdbsqjnf hsqbf snqbfn bsqndbf lsbdfqnlbsdnbf
            djslh
          </p>
          <br />
          <v-divider></v-divider>

          <p>
            This course uses a third-party tool, Hands-On Lab: Your First
            Program, Types, Expressions, and Variables, to enhance your learning
            experience. The tool will reference basic information like your
            name, email, and Coursera ID.
          </p>

          <br />
          <br />
          <v-btn text color="indigo" class="mx-3"
            >like<v-icon>mdi-emoticon-happy </v-icon></v-btn
          >
          <v-btn text color="indigo" class="mx-2"
            >dislike<v-icon>mdi-emoticon-sad</v-icon></v-btn
          >
          <v-btn text color="indigo" class="mx-2"
            >report an issue<v-icon>mdi-bell-ring</v-icon></v-btn
          >
          <v-btn text color="indigo" class="mx-2"
            >share<v-icon>mdi-like</v-icon></v-btn
          >
          <v-divider></v-divider>

          <h3 class="ml-5">=> comment sections:</h3>

          <v-text-field label="leave your comment here"></v-text-field>


       <v-col
            v-for="card in cards"
            :key="card"
            cols="12"
          >
            <v-card>
              <v-subheader>{{ card }}</v-subheader>

              <v-list two-line>
                <template v-for="n in 6">
                  <v-list-item

                    :key="n"
                  >
                    <v-list-item-avatar color="grey darken-1">
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>Message {{ n }}</v-list-item-title>

                      <v-list-item-subtitle>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider
                    v-if="n !== 6"
                    :key="`divider-${n}`"
                    inset
                  ></v-divider>
                </template>
              </v-list>
            </v-card>
          </v-col>




        </slot>

        <slot v-if="lecture == 'v'">
          <h3>video name</h3>

          <v-btn text class="mr-3" color="blue">notes</v-btn>
          <v-btn text class="mr-3" color="blue">discuss</v-btn>
          <v-spacer></v-spacer>

          <div class="ml1">
            <video controls class="mt-5 ml-5 mr-5 mb-5">
              <source type="video/mp4" src="@/assets/er.mp4" />
            </video>
          </div>

          <v-btn text color="blue">save notes</v-btn>
          <v-btn text color="blue">doanload</v-btn>
          <v-divider></v-divider>
          <h3>Transcript</h3>
          <p>AI part</p>
        </slot>

        <slot v-if="lecture == 'quiz'">
          <v-row class="roow" justify="center">
            <h3 class="mt-10">Quiz1</h3>
            <p>Practice Quiz1 minutes • 6 min</p>
          </v-row>
          <v-row>
            <v-col lg="6">
              <v-dialog
                v-model="dialog"
                fullscreen
                hide-overlay
                transition="dialog-bottom-transition"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="primary" dark v-bind="attrs" v-on="on">
                    Open Quiz
                  </v-btn>
                </template>
                <v-card>
                  <v-toolbar white>
                    <v-btn icon color="blue" @click="dialog = false">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title color="black"
                      >practice Quiz</v-toolbar-title
                    >
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                      <v-btn color="blue" text @click="dialog = false">
                        Save
                      </v-btn>
                    </v-toolbar-items>
                  </v-toolbar>
                  <v-row class="mt-10 ml-5">
                    <h3 class="mb-10">Practice Quiz</h3>
                    <p>Total points 2</p>

                    <p>
                      1 .What is the result of the following operation: 11//2
                    </p>
                    <v-radio-group v-model="column" column>
                      <v-radio
                        class="mb-10"
                        label="Option 1"
                        value="radio-1"
                      ></v-radio>
                      <v-radio label="Option 2" value="radio-2"></v-radio>
                    </v-radio-group>
                    <p>
                      2 .What is the result of the following operation: 11//2
                    </p>
                    <v-radio-group v-model="column" column>
                      <v-radio
                        class="mb-10"
                        label="Option 1"
                        value="radio-1"
                      ></v-radio>
                      <v-radio label="Option 2" value="radio-2"></v-radio>
                    </v-radio-group>
                    <p>
                      3 .What is the result of the following operation: 11//2
                    </p>
                    <v-radio-group v-model="column" column>
                      <v-radio
                        class="mb-10"
                        label="Option 1"
                        value="radio-1"
                      ></v-radio>
                      <v-radio label="Option 2" value="radio-2"></v-radio>
                    </v-radio-group>
       
                
                    <v-checkbox   v-model="checkbox" >
                      <template v-slot:label>
                        <div>
                          I agree that
                          <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                              <a
                                target="_blank"
                                href="https://vuetifyjs.com"
                                @click.stop
                                v-on="on"
                              >
                                Vuetify
                              </a>
                            </template>
                            Opens in new window
                          </v-tooltip>
                          is awesome
                        </div>
                      </template>
                    </v-checkbox>

<input type="radio" id="one" value="One" v-model="picked">
<label for="one">One</label>
<br>
<input type="radio" id="two" value="Two" v-model="picked">
<label for="two">Two</label>
<br>
<span>Picked: {{ picked }}</span>

                    <slot  v-if="checkbox"
                      ><v-btn   color="blue" class="bouton1">submit</v-btn></slot
                    >
                    <v-btn class="bouton1">save draft</v-btn>
                  </v-row>
                </v-card>
              </v-dialog>
            </v-col>

            <v-row class="mt-0 ml-0">
              <v-divider></v-divider>
              <v-col lg="12">
                <v-btn text color="blue" class="mx-3"
                  >like<v-icon>mdi-emoticon-happy </v-icon></v-btn
                >
                <v-btn text color="blue" class="mx-2"
                  >dislike<v-icon>mdi-emoticon-sad</v-icon></v-btn
                >
                <v-btn text color="blue" class="mx-2"
                  >report an issue<v-icon>mdi-bell-ring</v-icon></v-btn
                >
                <v-btn text color="blue" class="mx-2"
                  >share<v-icon>mdi-like</v-icon></v-btn
                ></v-col
              >
            </v-row>
          </v-row>
        </slot>
      </div>
    </div>
  </div>
</template>
        
<script>
import "vue-custom-scrollbar/dist/vueScrollbar.css";

export default {
  components: {},

  data: () => ({
    admins: [["video1"], ["video2"]],
    cruds: [["lecture1"], ["lecture2"], ["lecture3"], ["lecture4"]],
    cuiz: [["quiz1"], ["quiz2"]],
    settings: {
      suppressScrollY: false,
      suppressScrollX: true,
      wheelPropagation: false,
      
    },
    lecture: "a",
    dialog: false,
    notifications: false,
    sound: true,
    widgets: false,
    s: false,
    checkbox: false,
    column: null,
    picked:'',
    cards: ['Today', 'Yesterday'],
    
  }),
  methods: {
    scrollHanle(evt) {
      console.log(evt);
    },
    lecture1() {
      console.log("yeees");
    },
    se(){
       this.checkbox = !this.checkbox;
    }
  },
};
</script>
<style >
.bouton1 {
  margin: 50px;
  width: 100px;
  height: 40px;
}
.roow {
  height: 200px;
  width: 300px;
}
.ml1 {
  align-content: center;
  display: flex;
}
.ml {
  margin-left: 70%;
}
.scrolable1 {
  height: 700px;
  overflow: scroll;
}
.ae {
  border: black;
  table-layout: auto;
}

.container {
  margin-left: 0%;
}
.scrolable {
  height: auto;
  overflow: scroll;
}
.scroll-area {
  position: relative;
  margin-right: 0%;
  margin-left: 0%;
  width: 300px;
  height: 0%;
}
.new1 {
  columns: 700px;
}
.new2 {
  columns: 700px;
}
</style>

