<template>
    <el-dialog title="新建艺术家" :visible.sync="show">
        <el-form >
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="姓名">
                        <el-input autocomplete="off" v-model="name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="角色">
                        <el-input  autocomplete="off" v-model="type"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="24">
                    <el-form-item label="详细信息">
                        <el-input type="textarea" v-model="detail" :autosize="{ minRows: 6, maxRows: 6}"  autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="hideDialog">取 消</el-button>
            <el-button type="primary" @click="confirm">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
    export default {
        name: "NewSingerDialog",
        data() {
            return {
                show: false,
                name: '',
                type: '',
                detail: ''
            }
        },
        methods: {
            showDialog() {
                this.show = true;
            },
            hideDialog() {
                this.show = false;
            },
            async confirm(event) {
                const singer = {
                    name: this.name,
                    type: this.type,
                    detail: this.detail
                };
                const result = await this.$store.dispatch('singer/new_singer', {singer});
                if (result.isOk) {
                    this.hideDialog();
                } else {
                    alert(result.msg)
                }
            }
        }
    }
</script>

<style scoped>

</style>
