<script>
import Page from "@/components/Page.vue";
import FormInput from "@/components/FormInput.vue";
import Button from "@/components/Button.vue";
import TableCard from "@/components/TableCard.vue";
import TableHeader from "@/components/TableHeader.vue";
import TableData from "@/components/TableData.vue";
import Notification from "@/components/Notification.vue";
import { useAppStore } from "../store/useAppStore";
import { storeToRefs } from "pinia";
import { ref } from "vue-demi";
export default {
  components: {
    Page,
    FormInput,
    Button,
    TableCard,
    TableHeader,
    TableData,
    Notification,
  },
  setup() {
    const store = useAppStore();
    const { createURL, setURLs, clearURLs } = store;
    const { tableHeaders, tableDatas, URLs } = storeToRefs(store);

    const loading = ref(false);
    const url = ref("");
    const showCopiedNotification = ref(false);

    function copyShortURL(short_url) {
      const text = document.createElement("input");
      text.value = short_url;
      document.body.appendChild(text);

      text.select();
      document.execCommand("copy");

      document.body.removeChild(text);

      showCopiedNotification.value = true;
    }

    const submitURL = async () => {
      if (!url.value) {
        alert("Please fill the form.");
        return;
      }
      loading.value = true;
      try {
        const { data } = await createURL(url.value);
        URLs.value.push(data);
        setURLs();
        url.value = "";
      } catch (e) {
        console.error(e);
      } finally {
        loading.value = false;
      }
    };

    return {
      tableHeaders,
      tableDatas,
      loading,
      url,
      showCopiedNotification,
      copyShortURL,
      submitURL,
      clearURLs,
    };
  },
};
</script>
<template>
  <Notification v-model="showCopiedNotification" title="Copied!" />
  <Page>
    <h1 class="content-title">Shorten your link</h1>
    <form @submit.prevent="submitURL">
      <div class="flex justify-between items-center">
        <FormInput v-model="url" placeholder="Shorten your link" />
        <Button
          :loading="loading"
          type="submit"
          class="bg-indigo-700 text-white text-xs h-min"
        >
          Shorten
        </Button>
      </div>
    </form>
    <Button @click="clearURLs" class="mt-4 bg-red-700 text-white text-xs h-min">
      Clear All
    </Button>
    <TableCard>
      <thead class="bg-gray-50">
        <tr>
          <TableHeader
            v-for="(tableHeader, index) in tableHeaders"
            :key="index"
          >
            <div class="w-[120px]">{{ tableHeader }}</div>
          </TableHeader>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr :key="index" v-for="(tableData, index) in tableDatas">
          <TableData>
            {{ tableData.url || "-" }}
          </TableData>
          <TableData>
            <a
              class="link text-indigo-600"
              :href="tableData.short_url"
              target="blank"
              >{{ tableData.short_url || "-" }}</a
            >
          </TableData>
          <TableData>
            {{ tableData.created_at || "-" }}
          </TableData>
          <TableData>
            <Button
              @click="copyShortURL(tableData.short_url)"
              class="bg-indigo-700 text-white text-xs h-min"
            >
              Copy
            </Button>
          </TableData>
        </tr>
      </tbody>
    </TableCard>
  </Page>
</template>
