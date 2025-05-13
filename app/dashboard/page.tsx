"use client";

import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useMemo, useState } from "react";
import CardContainer from "../components/Cards/CardContainer";
import EmptyCard from "../components/Cards/EmptyCard";
import CreateButton from "../components/CreateButton";
import CustomModal from "../components/CustomModal";
import FilterComponent from "../components/FilterComponent";
import DashboardLoading from "../components/Loaders/DashboardLoading";
import { CloseIcon } from "../components/svgs/CloseIcon";
import dashboardInitialData from "../JSON/dashboardData.json";
import { useAuthRedirect } from "../utills/useAuthRedirect";

const Dashboard = () => {
  useAuthRedirect();
  const [rawData, setRawData] = useState(dashboardInitialData.data);
  const [activeFilter, setActiveFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [showTextModal, setShowTextModal] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  const filteredData = useMemo(() => {
    if (activeFilter === "all") return rawData;
    return rawData.filter((item) => item.type === activeFilter.toLowerCase());
  }, [rawData, activeFilter]);

  const filterHandler = (filter: string) => {
    setLoading(true);
    setActiveFilter(filter);

    // Simulate loading delay
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const onCreateClickHandler = (type: string) => {
    if (type === "text") {
      setShowTextModal(true);
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let data: any;
    if (type === "report") {
      data = {
        type: "report",
        title: "My Report",
        description: "This is a description of my report",
        category: "Gaming Support",
        stats: {
          title: "Sentisum Tags",
          description: "Volume and % Change of tags",
          tableHeaders: [
            { label: "Sentisum Tags", value: "label" },
            { label: "Volume", value: "volume" },
            { label: "% Change", value: "percentChange" },
          ],
          tags: [
            {
              label: "game crashed",
              volume: 8102,
              percentChange: 6,
              increased: true,
            },
            {
              label: "game aborted",
              volume: 6259,
              percentChange: 4,
              increased: true,
            },
            {
              label: "request refund",
              volume: 6015,
              percentChange: 3,
              increased: false,
            },
            {
              label: "i didn't abort",
              volume: 3409,
              percentChange: 7,
              increased: false,
            },
            {
              label: "app crashed",
              volume: 3248,
              percentChange: 1,
              increased: true,
            },
          ],
        },
        metrics: [],
        text: "",
      };
    } else if (type === "metric") {
      data = {
        type: "metric",
        title: "My Card",
        description: "This is a description of my card",
        category: "Gaming Support",
        stats: {},
        metrics: [
          {
            title: "Volume",
            volume: 10000,
            category: "Gaming Support",
            increased: true,
            percentChange: 25,
          },
          {
            title: "% Of Tickets",
            volume: 10000,
            category: "Gaming Support",
            increased: false,
            percentChange: "100%",
          },
          {
            title: "CSAT",
            volume: "90%",
            category: "Gaming Support",
            increased: true,
            percentChange: 5,
          },
          {
            title: "Sentiment",
            volume: "10%",
            category: "Gaming Support",
            increased: false,
            percentChange: 5,
          },
        ],
        text: "",
      };
    }

    const updatedRaw = [...rawData, data];
    setRawData(updatedRaw);

    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }, 500);
  };

  const onFinish = (values: {
    title: string;
    description: string;
    content: string;
  }) => {
    const newTextCard = {
      type: "text",
      title: values.title,
      description: values.description,
      stats: {},
      metrics: [],
      text: values.content,
      category: "Gaming Support",
    };

    const updatedRaw = [...rawData, newTextCard];
    setRawData(updatedRaw);

    form.resetFields();
    setShowTextModal(false);

    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }, 500);
  };

  return (
    <div>
      <div className="px-4 md:px-10 py-5 sticky top-0 md:top-[80px] z-40 bg-white pb-5 flex flex-col gap-5 overflow-visible">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-neutral-300 pb-5 gap-3">
          <div>
            <p className="text-lg md:text-xl font-semibold">
              {dashboardInitialData.title}
            </p>
            <p className="text-sm md:text-base text-neutral-600">
              {dashboardInitialData.description}
            </p>
          </div>
          <div className="w-full md:w-auto">
            <CreateButton onCreateClickHandler={onCreateClickHandler} />
          </div>
        </div>

        <FilterComponent
          onFilterClick={filterHandler}
          activeFilter={activeFilter}
        />
      </div>

      <div className="container flex flex-col gap-5 mx-auto mt-5 px-4 md:px-10">
        {loading ? (
          <DashboardLoading />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {filteredData.map((item, index) => (
              <div key={`${item.title}+${index}`}>
                <CardContainer data={item} />
              </div>
            ))}
            <EmptyCard
              activeFilter={activeFilter}
              onCreateClickHandler={onCreateClickHandler}
            />
          </div>
        )}

        {showTextModal && (
          <CustomModal
            isOpen={showTextModal}
            modalClass="w-[95%] md:w-[600px] h-auto rounded"
          >
            <div
              onClick={() => setShowTextModal(false)}
              className="absolute top-2 right-2 cursor-pointer"
            >
              <CloseIcon />
            </div>
            <div className="flex flex-col gap-4 p-4 mt-5">
              <p className="font-semibold text-lg">Add Text</p>
              <Form
                layout="vertical"
                scrollToFirstError
                form={form}
                onFinish={onFinish}
                className="mt-4"
              >
                <Form.Item
                  label="Title"
                  name="title"
                  rules={[{ required: true, message: "Please enter title" }]}
                >
                  <Input
                    placeholder="Please enter title"
                    className="border border-neutral-200 rounded px-3 py-2"
                  />
                </Form.Item>

                <Form.Item
                  label="Description"
                  name="description"
                  rules={[
                    { required: true, message: "Please enter description" },
                  ]}
                >
                  <Input
                    placeholder="Please enter description"
                    className="border border-neutral-200 rounded px-3 py-2"
                  />
                </Form.Item>

                <Form.Item
                  label="Content"
                  name="content"
                  rules={[{ required: true, message: "Please enter content" }]}
                >
                  <TextArea
                    rows={4}
                    className="border border-neutral-200 rounded px-3 py-2"
                  />
                </Form.Item>

                <Form.Item className="text-center">
                  <button className="w-full bg-primary-500 h-11 text-white text-center justify-center px-4 py-2 flex gap-1 rounded items-center font-semibold hover:bg-primary-600 transition-all duration-300">
                    ADD TEXT
                  </button>
                </Form.Item>
              </Form>
            </div>
          </CustomModal>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
