<template>

    <fieldset>
        <legend>查询条件</legend>
        <el-form ref="form" label-width="80px">


            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="姓名">
                        <el-input v-model="name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="角色">
                        <el-input v-model="type"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="24">
                    <el-form-item label="简介">
                        <el-input v-model="detail"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="24">
                    <div style="text-align: right; padding-right: 50px;">
                        <el-button type="primary" @click="query">查 询</el-button>
                        <el-button type="primary" plain @click="createSinger">创 建</el-button>
                    </div>
                </el-col>
            </el-row>
        </el-form>

        <NewSingerDialog ref="dialog" />

    </fieldset>

</template>

<script>
    import NewSingerDialog from './NewSingerDialog';
    export default {
        name: "SingerSearch",
        data() {
            return {
                name: '',
                type: '',
                detail: ''
            }
        },
        methods: {
            confirm() {

            },
            query() {
                return this.$store.dispatch('singer/query_singers', {
                    singer: {
                        name: this.name,
                        type: this.type,
                        detail: this.detail
                    }
                }).then((result) => {

                })
            },
            createSinger() {
                this.$refs.dialog.showDialog();
            }
        },
        components: {
            NewSingerDialog
        }
    }
</script>

<style scoped>

</style>
