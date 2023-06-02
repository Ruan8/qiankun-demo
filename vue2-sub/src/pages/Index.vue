<template>
    <div>
        这是vue2-sub页面
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
        initChart() {
            $echarts.dispose(this.$refs.chart);
            let chart = $echarts.init(this.$refs.chart, this.theme);
            let option = {
                title: {
                    text: "Referer of a Website",
                    subtext: "Fake Data",
                    left: "center",
                },
                tooltip: {
                    trigger: "item",
                },
                legend: {
                    orient: "vertical",
                    left: "left",
                },
                series: [
                    {
                        name: "Access From",
                        type: "pie",
                        radius: "50%",
                        data: [
                            { value: 1048, name: "Search Engine" },
                            { value: 735, name: "Direct" },
                            { value: 580, name: "Email" },
                            { value: 484, name: "Union Ads" },
                            { value: 300, name: "Video Ads" },
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: "rgba(0, 0, 0, 0.5)",
                            },
                        },
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
