<template>
    <div class="chart-box">
        <div class="show-chart">
            <div ref="charts" class="charts">
                123123
            </div>
        </div>

        <div class="edit-chart">
            <h2>图表数据区域</h2>

            <div>
                <span>图表类型</span>
                <select v-model="chart.type">
                    <option
                        :value="item.ENName"
                        v-for="item in chartType"
                        :key="item.ENName"
                        >{{ item.CNName }}</option
                    >
                </select>
            </div>
            <div>
                <span>数据类型</span>
            </div>
            <div>
                <span>图表标题</span>
                <input type="text" v-model="chart.title" />
            </div>

            <div>
                <span>横坐标</span>
            </div>

            <div>
                <span>纵坐标</span>
            </div>
        </div>
    </div>
</template>

<script>
import echarts from "echarts";
export default {
    data() {
        return {
            chartType: [
                { CNName: "折线图", ENName: "line" },
                { CNName: "柱形图", ENName: "bar" },
                { CNName: "饼形图", ENName: "pie" },
                { CNName: "散点图", ENName: "scatter" },
                { CNName: "关系图", ENName: "graph" },
                { CNName: "树图", ENName: "tree" },
            ],
            chart: {
                myCharts: "",
                type: "line",
                title: "ECharts入门",
                currentCharts: {},
            },
        };
    },
    methods: {
        chartsInit() {
            this.myCharts = echarts.init(this.$refs.charts);
            this.updateCharts();
        },
        updateCharts() {
            let newData = {};
            switch (this.chart.type) {
                case "line":
                    newData = this.lineCharts();
                    break;
                case "bar":
                    newData = this.barCharts();
                    break;
                case "pie":
                    newData = this.pieCharts();
            }

            this.myCharts.setOption(newData);
        },
        // 柱形图
        lineCharts() {
            return {
                title: {
                    text: this.chart.title,
                },
                tooltip: {},
                legend: {
                    data: ["销量"],
                },
                xAxis: {
                    data: [
                        "衬衫",
                        "羊毛衫",
                        "雪纺衫",
                        "裤子",
                        "高跟鞋",
                        "袜子",
                    ],
                },
                yAxis: {},
                series: [
                    {
                        name: "销量",
                        type: "bar",
                        data: [5, 20, 36, 10, 10, 20],
                    },
                ],
            };
        },
        // 饼图
        pieCharts() {
           
        },
        barCharts() {
            
        },
    },
    mounted() {
        this.chartsInit();
    },
    updated() {
        this.updateCharts();
    },
};
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    width: 100%;
    height: 100%;
}

.chart-box {
    height: 100%;
    position: relative;
}

.show-chart {
    width: 100%;
    height: 100%;
    // background: red;
    padding-right: 300px;
    display: flex;
    justify-content: center;
    align-items: center;

    .charts {
        width: 80%;
        height: 500px;
        // background: orange;
    }
}

.edit-chart {
    width: 300px;
    height: 100%;
    position: absolute;
    background: lightblue;
    top: 0;
    right: 0;
    // left: 0;
    padding: 20px;
    h2 {
        margin-bottom: 30px;
    }
    div {
        height: 50px;
        span:first-child {
            margin-right: 20px;
        }
    }
}
</style>
