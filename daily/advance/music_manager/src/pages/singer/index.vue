<template>
    <div>
        <SingerSearch />

        <SingerTable/>
    </div>
</template>

<script>
    import SingerSearch from '../../components/SingerSearch';
    import SingerTable from '../../components/SingerTable';
    export default {
        components: {
            SingerSearch,
            SingerTable
        }
    }
</script>

<style scoped>

</style>
