import { ref, onMounted, watch } from "vue";
import { storeToRefs } from "pinia";
import { useTheme } from "@/store";

export const useChart = (option) => {
    const chartRef = ref(null);
    const chart = ref(null);
    const { theme } = storeToRefs(useTheme());

    const initChart = () => {
        chart.value = $echarts.init(chartRef.value, theme.value);
        chart.value.setOption(option);
    };

    onMounted(() => {
        initChart();
    });

    watch(theme, () => {
        $echarts.dispose(chartRef.value);
        initChart();
    });

    return {
        chartRef,
        chart,
    };
};
