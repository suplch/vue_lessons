<template>
    <el-dialog title="修改艺术家" :visible.sync="show">
        <el-form >
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="姓名">
                        {{ name }}
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="角色">
                        {{ type | typeDesc }}
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="24">
                    <el-form-item label="详细信息">
                        <br/>
                        <div style="width: 100%; height: 200px; overflow: auto; border: solid 1px grey;">
                            {{ detail }}
                        </div>

                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="confirm">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
                _id: '',
                name: '',
                type: '',
                detail: ''
            }
        },
        methods: {
            hideDialog() {
                this.show = false;
            },
            showDialog(singer) {
                this.show = true;
                this._id = singer._id,
                    this.name = singer.name;
                this.type = singer.type;
                this.detail = singer.detail;
            },
            async confirm() {
                this.hideDialog();
            }
        }
    }
</script>

<style scoped>

</style>
