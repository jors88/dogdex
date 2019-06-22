<template>
  <div class="q-pa-sm">
    <q-card
      class="bg-light"
      style="border-radius: 10px;"
    >
      <q-card-main class="no-padding">
        <img
          style="border-top-left-radius: 10px; border-top-right-radius: 10px;"
          :src="dog.image"
          width="100%"
          height="180"
        >
      </q-card-main>
      <q-card-title
        class="text-center no-padding bg-light text-dark cursor-pointer"
        @click.native="$emit('detail', dog.name)"
      >
        {{ dog.name.substring(0,1).toUpperCase() + dog.name.substring(1)}}
      </q-card-title>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'Dogs',
  props: ['dog']
}
</script>
