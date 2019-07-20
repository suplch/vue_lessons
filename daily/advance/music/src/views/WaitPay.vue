<template>
    <div>
        正在等待支付结果

        <div v-if="pay">
            收到 {{ amount }}
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "WaitPay",

        data() {
            return {
                pay: false,
                amount: 0
            }
        },

        mounted() {
            this.__tid = setInterval(() => {
                axios.get('/music/get_pay_result').then((result) => {
                    if (result.data.data.pay) {
                        this.pay = true;
                        this.amount = result.data.data.amount;
                        clearInterval(this.__tid);
                    }
                });
            }, 1000);
        },

        beforeDestroy() {
            clearInterval(this.__tid);
        }
    }
</script>

<style scoped>

</style>
