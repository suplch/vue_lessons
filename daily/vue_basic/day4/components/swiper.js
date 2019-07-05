(function () {
    // 定义组件 swiper
    Vue.component('swiper1', {
        props: ['slots'],
        template: `
            <div ref="container" class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="slot in slots">
                        <!-- 循环输出 slot 插槽 -->
                        <slot :name="slot"></slot>
                    </div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-scrollbar"></div>
            </div>
        `,
        mounted() {
            // 调用 Swiper 组件
            new Swiper (this.$refs.container, {
                direction: 'vertical', // 垂直切换选项
                loop: true, // 循环模式选项

                // 如果需要前进后退按钮
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                // 如果需要滚动条
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
            })
        }
    });
})();
