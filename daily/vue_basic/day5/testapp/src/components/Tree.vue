<template>
    <div class="tree">
        {{ tree_node.name }}
        <button @click="addSubNode(tree_node)">添加</button>
        <button v-if="parent_node" @click="delNode(parent_node, tree_node)">删除</button>
        <ul>
            <li v-for="node, index in tree_node.children" :key="index">
                <TreeNode :tree_node="node" :parent_node="tree_node"></TreeNode>
            </li>
        </ul>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: 'TreeNode',
        props: ['tree_node', 'parent_node'],
        methods: {
            addSubNode(parentNode) {
                let name = window.prompt('名称');
                let node = {
                    name: name
                };
                if (!parentNode.children) {
                    // 注意这是一个坑 对象上 新属性的设置 不要使用 Vue.set
                    // 看 https://cn.vuejs.org/v2/api/#search-query-sidebar
                    Vue.set(parentNode, 'children', [])
                }
                parentNode.children.push(node);
                // Vue.set(parentNode.children, parentNode.children.length, node);
            },
            delNode(parent_node, tree_node){
                if (parent_node) {
                    if (tree_node.children.length > 0) {
                        if (window.confirm('你确定要删除吗')) {
                            let position = parent_node.children.indexOf(tree_node);
                            parent_node.children.splice(position, 1);
                        }
                    } else {
                        let position = parent_node.children.indexOf(tree_node);
                        parent_node.children.splice(position, 1);
                    }
                } else {
                    alert('根节点不许删除')
                }
            }
        }
    }
</script>

<style scoped>
    .tree {
        border: solid 1px green
    }
</style>
