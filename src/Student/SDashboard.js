import React from 'react'
import { Card, Space, Statistic } from "antd";
import {   BsBookFill,BsDatabaseAdd ,BsBookHalf } from 'react-icons/bs'
import Typography from "antd/es/typography/Typography";
const SDashboard = () => {
  return (
    <div>
      <div>
            <Typography.Title level={4}>Dashboard</Typography.Title>

            <Space direction="horizontal">
                <DashboardCard 
                    icon={
                        <BsBookFill
                            style={{
                                color: "green",
                                backgroundColor: "rgba(0,255,0,0.25)",
                                borderRadius: 20,
                                fontSize: 70,
                                padding: 8,
                            }}
                        />
                    }
                    title={"Book"}
                    value={1234}
                />
                <DashboardCard
                    icon={
                        <BsBookHalf
                            style={{
                                color: "green",
                                backgroundColor: "rgba(0,255,0,0.25)",
                                borderRadius: 20,
                                fontSize: 70,
                                padding: 8,
                            }}
                        />
                    }
                    title={"Issue Book"}
                    value={1234}
                />
                <DashboardCard
                    icon={
                        <BsDatabaseAdd
                            style={{
                                color: "green",
                                backgroundColor: "rgba(0,255,0,0.25)",
                                borderRadius: 20,
                                fontSize: 70,
                                padding: 8,
                            }}
                        />
                    }
                    title={"Cart"}
                    value={1234}
                />
                {/* <DashboardCard icon={<BsDatabaseAdd />} title={"Request"} value={12345} /> */}
                {/* <DashboardCard icon={<BsBookFill />} title={"Borrowed"} value={12345} />
                <DashboardCard icon={<BsBookHalf />} title={"Return"} value={12345} /> */}
                {/* <DashboardCard title={"Orders"} value={12345}/> */}

            </Space>

        </div>
    </div>
  )
}
function DashboardCard({ title, value, icon }) {
    return (
        <Card style={{width: 300}}>
            <Space direction="horizontal">
                {icon }
                
                <Statistic title={title} value={value} />
            </Space>
        </Card>
    )
}

export default SDashboard
