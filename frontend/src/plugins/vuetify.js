// src/plugins/vuetify.js

import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

const opts = {
  theme: {
    themes: {
      light: {
        primary: colors.green, // #E53935
        secondary: colors.green.lighten4, // #FFCDD2
        accent: colors.white // #3F51B5
      }
    }
  }
};

export default new Vuetify(opts);
