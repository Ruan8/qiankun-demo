<template>
    <div>
        这是vue3-sub页面
        <hr />
        token: {{ user.token }}
        <hr />
        <div class="chart-box" ref="chartRef"></div>
    </div>
</template>

<script setup>
import { useUser } from "@/store";
import { useChart } from "@/hooks/chart";
const user = useUser();
const { chartRef } = useChart({
    xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
        type: "value",
    },
    series: [
        {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
        },
    ],
});
</script>

<style>
.chart-box {
    width: 500px;
    height: 400px;
}
</style>
