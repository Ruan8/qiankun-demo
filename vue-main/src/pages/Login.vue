<template>
    <div>
        Login页面
        <hr />
        <button @click="changeToken">获取token</button>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    computed: {},
    methods: {
        changeToken() {
            this.$store.commit("SET_TOKEN", Date.now());
            this.$router.push(this.$route.query.p || "/");
        },
    },
};
</script>
<style lang="scss" scoped></style>
