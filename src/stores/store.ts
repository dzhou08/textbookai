import {defineStore} from 'pinia'
import { useLocalStorage } from "@vueuse/core"


export const useStore = defineStore('main', {
  state: () => ({
    user_name: useLocalStorage('user_name', ''),
    user_avatar: useLocalStorage('user_avatar', ''),
    loggedIn: useLocalStorage('loggedIn', false),
    current_nav: useLocalStorage('current_nav', ''),
    current_section_id: useLocalStorage('current_section_id', '')
  })
})