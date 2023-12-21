import axios from "axios";
import { computed, onMounted, ref, watch } from "vue";

export function usePosts(limit) {
  const posts = ref([]);
  const totalPages = ref(0);
  const isFetching = ref(true);

  const fetching = async () => {
    try{
      const responce = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        // params: {
        //   _page: this.page,
        //   _limit: this.limit
        // }
        params: {
          _page: 1,
          _limit: limit
        }
      });
      totalPages.value = Math.ceil(responce.headers['x-total-count'] / limit);
      posts.value = responce.data;
    } catch(e) {
      alert('Error')
    } finally {
      isFetching.value = false;
    }
  }
  onMounted(fetching);

  // here we can use lifecircles, but you have to import them
  // onMounted()
  // onCreated()
  // computed()
  // watch()
  
  return {
    posts,
    isFetching,
    totalPages
  }
}