<template>
    <table tabindex="-1" border="0" cellspacing="0" @keydown="move">
        <tbody>
        <tr v-for="row, rowIndex in map">
            <td v-for="cell, cellIndex in row"
                :style="{backgroundColor: (rowIndex === win.top && cellIndex === win.left) ? 'green' : bgcolor[cell] }">

            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "Game",
        data: function () {
            return {
                bgcolor: {
                    '-1': 'black',
                    '0': 'grey',
                    '1': 'orange'
                },
                boy: {
                    left: 0,
                    top: 0
                },
                win: {
                    left: 6,
                    top: 0
                },
                map: [  //  -1 表示 墙   0 表示路    1 表示小人
                    [1,   0,   0,   -1,  0,   0,   0],
                    [-1,  -1,  0,   -1,  0,   -1,   -1],
                    [0,   0,   0,   -1,  0,   0,   0],
                    [0,   -1,  -1,  -1,  -1,   -1,  0],
                    [0,   0,   0,   0,   -1,  0,   0],
                    [-1,  -1,  -1,  0,   -1,  0,   -1],
                    [0,   0,   0,   0,   -1,  0,   0],
                    [0,  -1,   -1,  -1,  -1,  -1,   0],
                    [0,   0,   0,   0,   0,   0,   0],
                ]
            }
        },
        mounted() {
            this._startTime = Date.now();
        },
        methods: {
            move(event) {
                if (event.keyCode === 37) {  // left

                    if (this.boy.left - 1 >= 0) {
                        let left = this.boy.left;
                        let top = this.boy.top;
                        if (this.map[top][left - 1] === 0) {
                            this.boy.left--;
                            this.map[top][left - 1] = 1;
                            this.map[top][left] = 0;
                        }
                    }


                } else if (event.keyCode === 38) {   // up

                    if (this.boy.top - 1 >= 0) {
                        let left = this.boy.left;
                        let top = this.boy.top;
                        if (this.map[top - 1][left] === 0) {
                            this.boy.top--;
                            this.map[top - 1][left] = 1;
                            this.map[top][left] = 0;
                        }
                    }


                } else if (event.keyCode === 39) {  // right
                    if (this.boy.left + 1 < this.map[this.boy.top].length) {
                        let left = this.boy.left;
                        let top = this.boy.top;
                        if (this.map[top][left + 1] === 0) {
                            this.boy.left++;
                            this.map[top][left + 1] = 1;
                            this.map[top][left] = 0;
                        }
                    }

                } else if (event.keyCode === 40) {  /// down
                    if (this.boy.top + 1 < this.map.length) {
                        let left = this.boy.left;
                        let top = this.boy.top;
                        if (this.map[top + 1][left] === 0) {
                            this.boy.top++;
                            this.map[top + 1][left] = 1;
                            this.map[top][left] = 0;
                        }
                    }
                }

                this.map = [...this.map];

                setTimeout(() => {
                    if (this.boy.left === this.win.left && this.boy.top === this.win.top) {
                        this.$emit('win', (Date.now() - this._startTime) / 1000);

                    }
                });
            }
        }
    }
</script>

<style scoped>
    td {
        width: 20px;
        height: 20px;
    }
</style>
