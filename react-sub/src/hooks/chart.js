import { useEffect, useRef } from "react";

export const useChart = (option, theme) => {
    const ref = useRef(null);
    useEffect(() => {
        window.$echarts.dispose(ref?.current);
        const chart = window.$echarts.init(ref?.current, theme);
        chart.setOption(option);
    }, [option, theme]);
    return {
        ref,
    };
};
