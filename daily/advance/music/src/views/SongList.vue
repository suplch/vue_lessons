<template>
    <div>

        <template v-if="!loaded"> <!-- 先显示 加载中..  等待后端的数据 -->
            加载中 ...
        </template>
        <template v-else-if="loaded && song_list.length === 0"> <!-- 如果 加载过了 且没有数据, 就表示 没有查到数据 -->
            还为发布歌曲
        </template>
        <template v-else>  <!-- 否则就显示返回的数据 -->
            <ul>
                <li v-for="song of song_list">
                    {{ song.name }}
                </li>
            </ul>
        </template>

    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "SongList",
        data() {
            return {
                loaded: false,  //  loaded 为 false 表示 数据还没有加载
                song_list: []   //  歌曲列表数据
            }
        },
        mounted() {
            // 通过 查询字符串 参数singer_id 获取后台的 数据
            axios.get('/music/get_songlist_by_singerid?singer_id=' + this.$route.params.singer_id).then((result) => {
                this.song_list = result.data.data.song_list;  // 后台 返回 对应歌手 的歌曲 列表
                this.loaded = true; // loaded 为 true 表示 已经加载完了,
            })
        }
    }
</script>

<style scoped>

</style>
