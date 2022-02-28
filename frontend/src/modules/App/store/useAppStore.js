import { defineStore } from "pinia";
import { APIRequest } from "@/utils/axios";
export const useAppStore = defineStore("useAppStore", {
  state: () => ({
    settingNamespace: "URL_SHORTENER",
    URLs: [],
    tableHeaders: ["URL", "Short URL", "Created At", "Action"],
  }),
  getters: {
    tableDatas(state) {
      return state.URLs;
    },
  },
  actions: {
    /**
     * @function clearURLs Clears the URLs in localStorage
     */
    clearURLs() {
      localStorage.removeItem(this.settingNamespace);
      location.href = "/";
    },
    /**
     * @function getURLs Gets the URLs from localStorage
     * @returns {[URLs]} Returns URLs array
     */
    getURLs() {
      const data = localStorage.getItem(this.settingNamespace);
      if (!data) return;
      this.URLs = JSON.parse(data);
      return this.URLs;
    },
    /**
     * @function setURLs Sets the URLs in localStorage
     * @returns {[URLs]} Returns URLs array
     */
    setURLs() {
      const data = JSON.stringify(this.URLs);
      localStorage.setItem(this.settingNamespace, data);
      return this.URLs;
    },

    /**
     * @async
     * @param {string} url link
     * @returns {(Promise<Object>)} Push to URLs array & returns an URL object
     */
    async createURL(url) {
      if (!url) return;
      const options = {
        method: "POST",
        url: "/create",
        headers: {
          "Content-Type": "application/json",
        },
        data: { url },
      };
      return APIRequest(options);
    },
  },
});
