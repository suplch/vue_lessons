<template>
    <fieldset>
        <legend>艺术家</legend>
        <el-table
                :data="singers"
                height="250"
                border
                style="width: 100%">
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="type"
                    label="角色"
                    width="180">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            type="warning"
                            @click="editSinger(scope.row)"
                    >编辑</el-button>
                    <el-button
                            size="mini"
                            type="info"
                            @click="viewSinger(scope.row)"
                    >查看详情</el-button>
                </template>
            </el-table-column>
        </el-table>
        <EditSingerDialog ref="editDialog"/>
        <ViewSingerDialog ref="viewDialog" />
    </fieldset>

</template>

<script>
    import EditSingerDialog from './EditSingerDialog';
    import ViewSingerDialog from './ViewSingerDialog';
    export default {
        name: "index",
        mounted() {
            this.$store.dispatch('singer/get_singer');
        },
        computed: {
            singers() {
                return this.$store.state.singer.singer_list;
            }
        },
        methods: {
            editSinger(singer) {
                this.$refs.editDialog.showDialog(singer)
            },
            viewSinger(singer) {
                this.$refs.viewDialog.showDialog(singer);
            }
        },
        components: {
            EditSingerDialog,
            ViewSingerDialog
        }

    }
</script>

<style scoped>

</style>
