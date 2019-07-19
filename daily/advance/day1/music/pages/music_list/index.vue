<template>
    <div>
      music list
      <ul>
        <li v-for="music of musices" :key="music.id">

          <a :href="'/music_list/' + music.id">
            {{ music.name}}
          </a>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
          return {
            musices: [
              {id: '1001', name: 'aaaaa'},
              {id: '1002', name: 'bbbbb'},

            ]
          }
        }
    }
</script>

<style scoped>

</style>
