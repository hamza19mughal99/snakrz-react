// chart config
import React, { useEffect } from "react";
import axios from 'axios'
import ChartConfig from 'Constants/chart-config';


// visitors data
// export const visitorsData = {
//    chartData: {
//       labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
//       data: [600, 500, 650, 470, 520, 700, 500, 650, 580, 500, 650, 700]
//    },
//    monthly: 7233,
//    weekly: 5529
// }

// sales data
export const dailySalesData = {
   chartData: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      data: [600, 500, 650, 470, 520, 700, 500, 650, 580, 500, 650, 700]
   },
   today: 100,
}

export const weeklySalesData = {
   chartData: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      data: [600, 500, 650, 470, 520, 700, 500, 650, 580, 500, 650, 700]
   },
   weekly: 200,

}

export const monthlySalesData = {
   chartData: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      data: [600, 500, 650, 470, 520, 700, 500, 650, 580, 500, 650, 700]
   },
   monthly: 300,
}

// orders data
export const TodayOrdersData = {
   chartData: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      data: [600, 500, 650, 470, 520, 700, 500, 650, 580, 500, 650, 700]
   },
   today: 25,
}
export const WeeklyOrdersData = {
   chartData: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      data: [600, 500, 650, 470, 520, 700, 500, 650, 580, 500, 650, 700]
   },
   weekly: 50,
}
export const MonthlyOrdersData = {
   chartData: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      data: [600, 500, 650, 470, 520, 700, 500, 650, 580, 500, 650, 700]
   },
   monthly: 75,
}

// top selling products
// export const topSellingProducts = {
//    totalSales: '12,550',
//    earning: '$35,000',
//    products: [
//       {
//          id: 1,
//          productName: 'HD Classic Gold Headphone',
//          price: '300',
//          productImage: `${process.env.PUBLIC_URL}/assets/images/img/device-1.jpg`
//       },
//       {
//          id: 2,
//          productName: 'HD Classic Gold Headphone',
//          price: '300',
//          productImage: `${process.env.PUBLIC_URL}/assets/images/img/device-2.jpg`
//       },
//       {
//          id: 3,
//          productName: 'HD Classic Gold Headphone',
//          price: '300',
//          productImage: `${process.env.PUBLIC_URL}/assets/images/img/device-3.jpg`
//       }
//    ]
// }

// traffic Status
// export const trafficStatus = {
//    chartLabels: ['0.00', '1.0', '2.0', '3.0', '4.0', '5.0', '6.0'],
//    chartDatasets: [
//       {
//          label: 'Series A',
//          backgroundColor: ChartConfig.color.primary,
//          borderColor: ChartConfig.color.primary,
//          borderWidth: 1,
//          hoverBackgroundColor: ChartConfig.color.primary,
//          hoverBorderColor: ChartConfig.color.primary,
// 			data: [65, 59, 80, 81, 56, 55, 40]
//       },
//       {
//          label: 'Series B',
//          backgroundColor: ChartConfig.color.default,
//          borderColor: ChartConfig.color.default,
//          borderWidth: 1,
//          hoverBackgroundColor: ChartConfig.color.default,
//          hoverBorderColor: ChartConfig.color.default,
// 			data: [45, 39, 40, 60, 35, 25, 60]
//       }
//    ],
//    onlineSources: '3500',
//    today: '17,020',
//    lastMonth: '20.30%'
// }
