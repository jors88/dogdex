<template>
  <q-page
    class="row bg-grey-4 q-pa-md"
    :class="dogs.length ? 'content-start' : 'justify-center items-center'"
  >
    <q-modal
      v-model="modalOpen"
      content-classes="bg-light"
      maximized
    >
      <q-btn
        class="q-ma-sm"
        icon="fas fa-arrow-left"
        color="primary"
        size="20px"
        dense
        round
        flat
        @click="modalOpen = false"
      />
      <div class="q-pa-lg">
        {{ dogDetail }}
      </div>
    </q-modal>
    <div
      class="col-3"
      v-for="(dog, index) in dogs"
      :key="index"
    >
      <dogs
        :dog="dog"
        @detail="detail"
      />
    </div>
    <div v-if="empty">
      <img
        src="~assets/sad.svg"
        style="width: 30vw; max-width: 200px;"
      >
    </div>
  </q-page>
</template>

<script>
import dogs from '../components/dogs'
export default {
  name: 'Index',
  components: { dogs },
  props: ['search', 'filterSize'],
  data () {
    return {
      dogs: [],
      modalOpen: false,
      dogDetail: {},
      empty: false
    }
  },
  watch: {
    search (search) {
      let filter = search ? { params: { filter: { where: { name: { like: `%${search}%` } } } } } : ''
      this.getDogs(filter)
    },
    filterSize (filterSize) {
      let filter = filterSize ? { params: { filter: { where: { size: filterSize } } } } : ''
      this.getDogs(filter)
    }
  },
  mounted () {
    this.getDogs('')
  },
  methods: {
    getDogs (filter) {
      this.$q.loading.show()
      this.dogs = []
      this.empty = false
      this.$axios.get('/api/dogs', filter)
        .then(res => {
          if (res.data.length) {
            this.dogs = res.data
          } else {
            this.empty = true
          }
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          setTimeout(() => {
            this.$q.loading.hide()
          }, 200)
        })
    },
    detail (term) {
      this.$q.loading.show()
      this.dogDetail = {}
      this.$axios.get('/api/Wiki/search', { params: { term } })
        .then(res => {
          this.dogDetail = res.data.searchResult
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          this.modalOpen = true
          this.$q.loading.hide()
        })
    }
  }
}
</script>
