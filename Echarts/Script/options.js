var setOption= {
    //患者来院理由分析
    setReasonAnaly: function (title, totalReason, outsider) {
        var option = {
            color: ['#1379a9', '#c57d1b'],//bar颜色？
            title: {
                show: true,
                text: title,
                textStyle: {
                    color: '#f66d11',
                    fontWeight: '600',
                    fontSize: 12,
                },
            },
            textStyle: {
                color: '#f66d11',
                fontWeight: '600',
                fontSize: 12,
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            toolbox: {
                show: true,
                right: 10,
                top: 5,
                feature: {
                    magicType: {type: ['line', 'bar']},//设置图形切换
                    //saveAsImage: {},
                    //dataView: {}
                },
                iconStyle: {
                    // normal: {borderColor:'#FFF'},
                    emphasis: {},
                }
            },
            legend: {
                data: ['总体患者来院理由', '外埠患者来院理由'],
                // textStyle: {color:' #FFF'},
                left: 140,
                top: 5,
            },
            dataZoom: [
                {
                    type: 'inside'
                }
            ],
            grid: {
                left: '1%',
                right: 20,
                top: '10%',
                bottom: '10%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ["医院名气大", "专家多", "技术高", "就近方便", "服务态度好", "设备先进", "就诊环境好", "收费合理", "经他人介绍", "院内有熟人", "其它"],
                    // data : xAxisKey,
                    // nameTextStyle: {color:'#FFF'},
                    splitLine: {show: false,},
                    axisLine: {
                        lineStyle: {
                            // color: '#FFF',
                            width: 2
                        }
                    },
                    axisTick: {
                        show: true,
                    },
                    axisLabel: {
                        show: true,
                        interval: 0,
                        rotate: -30,
                        textStyle: {
                            // color: '#fff',
                        }
                    },
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisTick: {
                        inside: true,
                        length: 5,
                        lineStyle: {width: 1},
                    },
                    axisLine: {
                        lineStyle: {
                            // color: '#FFF',
                            width: 2,
                            type: 'solid',
                        }
                    },
                    splitLine: {
                        lineStyle: {type: 'dotted', color: '#062a4e'},
                    },
                    axisLabel: {
                        textStyle: {
                            // color: '#fff',
                        },
                        formatter: '{value}%',
                    }
                }
            ],
            series: [
                {
                    name: "总体患者来院理由",
                    type: 'bar',
                    barWidth: '30%',
                    data: totalReason,
                    symbol:'none',//去掉折线图的连接小圆点
                    label: {
                        normal:
                            {
                                show: false,
                                position: 'inside',
                                textStyle: {color: '#000'},
                            },
                    },
                },
                {
                    name: "外埠患者来院理由",
                    type: 'bar',
                    barWidth: '20%',
                    data: outsider,
                    label: {
                        normal:
                            {
                                show: false,
                                position: 'inside',
                                textStyle: {color: '#000'},
                            },
                    },
                }
            ]
        };
        return option;
    }
}
