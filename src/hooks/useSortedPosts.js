import {computed, ref} from 'vue'

export function useSortedPosts(posts) {
  const selectedSort = ref('');
  const searchQuery = ref('')
  const searchAndSortedPosts = computed(() => {
    return [...posts.value].sort((post1, post2) =>  post1[selectedSort.value]?.localeCompare(post2[selectedSort.value]))
    .filter(post => post.title.includes(searchQuery.value))
  })
  return {
    searchAndSortedPosts,
    selectedSort,
    searchQuery
  };
}