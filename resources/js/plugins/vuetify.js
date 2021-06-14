import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify);
const theme = {
    primary: 'unset',
    secondary: 'unset',
    accent: 'unset',
    info: 'unset',
    success: 'unset',
    danger: 'unset'
}
const opt = {
    icons: {
        iconfont: 'mdi'
    },
    theme: {
        themes: {
            dark: theme,
            light: theme
        }
    }
}

const vuetify = new Vuetify(opt);

export default vuetify;
