<template>
    <div>
        我是vue-main页面
        <hr />
        token: {{ token }}
        <hr />
        <div class="chart-box" ref="chart"></div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    data() {
        return {};
    },
    computed: {
        ...mapState(["token", "theme"]),
    },
    mounted() {
        this.initChart();
    },
    methods: {
        async initChart() {
            $echarts.dispose(this.$refs.chart);
            let chart = $echarts.init(this.$refs.chart, this.theme);
            let option = {
                xAxis: {
                    type: "category",
                    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                },
                yAxis: {
                    type: "value",
                },
                series: [
                    {
                        data: [150, 230, 224, 218, 135, 147, 260],
                        type: "line",
                    },
                ],
            };
            chart.setOption(option);
        },
    },
    watch: {
        theme: "initChart",
    },
};
</script>
<style scoped>
.chart-box {
    width: 500px;
    height: 400px;
}
</style>
