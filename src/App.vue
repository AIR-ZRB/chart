<template>
    <div class="chart">
        <div class="show-chart"></div>

        <div class="edit-chart">
            <div>
                <span>图表类型</span>
                <select name="" id="">
                    <option value="">柱形图</option>
                    <option value="">饼形图</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            chart: {
                type: "",
            },
        };
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

.chart {
    height: 100%;
    position: relative;
}

.show-chart {
    width: 100%;
    height: 100%;
    background: red;
    padding-right: 300px;
}

.edit-chart {
    width: 300px;
    height: 100%;
    background: skyblue;
    position: absolute;
    top: 0;
    // right: 0;
    left: 0;
}
</style>
