"use client";

import CardContainer from "../components/Cards/CardContainer";
import EmptyCard from "../components/Cards/EmptyCard";
import CreateButton from "../components/CreateButton";
import CustomModal from "../components/CustomModal";
import FilterComponent from "../components/FilterComponent";
import DashboardLoading from "../components/Loaders/DashboardLoading";
import { CloseIcon } from "../components/svgs/CloseIcon";
import dashboardInitialData from "../JSON/dashboardData.json";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [rawData, setRawData] = useState(dashboardInitialData.data); // holds all data
  const [dashboardData, setDashboardData] = useState(dashboardInitialData); // used for filtered view
  const [activeFilter, setActiveFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [showTextModal, setShowTextModal] = useState(false);
  const [textForm, setTextForm] = useState({
    title: "",
    description: "",
    content: "",
  });

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  const filterHandler = (filter: string) => {
    setLoading(true);
    setActiveFilter(filter);

    let filteredData;

    if (!filter || filter.toLowerCase() === "all") {
      filteredData = rawData;
    } else {
      filteredData = rawData.filter(
        (item) => item.type === filter.toLowerCase()
      );
    }

    setTimeout(() => {
      setDashboardData({ ...dashboardData, data: filteredData });
      setLoading(false);
    }, 500);
  };

  const onCreateClickHandler = (type: string) => {
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
    } else if (type === "text") {
      setShowTextModal(true);
      return;
    }

    // Add to raw data
    const updatedRaw = [...rawData, data];
    setRawData(updatedRaw);

    // Filter if current filter matches or is 'all'
    if (activeFilter === "all" || data.type === activeFilter) {
      setDashboardData((prev) => ({
        ...prev,
        data: [...prev.data, data],
      }));
    }

    // Scroll to bottom
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }, 500);
  };

  const handleTextAdd = () => {
    if (!textForm.title || !textForm.content) {
      return;
    }

    const newTextCard = {
      type: "text",
      title: textForm.title || "My Text",
      description: textForm.description || "This is a description of my text",
      stats: {},
      metrics: [],
      text: textForm.content,
    };

    const updatedRaw = [...rawData, newTextCard];
    setRawData(updatedRaw); // ✅ update rawData

    if (activeFilter === "all" || activeFilter === "text") {
      setDashboardData((prev) => ({
        ...prev,
        data: [...prev.data, newTextCard],
      }));
    }

    // Reset form and close modal
    setTextForm({ title: "", description: "", content: "" });
    setShowTextModal(false);

    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }, 500);
  };

  return (
    <div className="container flex flex-col gap-5 mx-auto mt-5 p-4">
      <div className="flex justify-between items-center border-b border-neutral-300 pb-5">
        <div>
          <p className="text-xl font-semibold">{dashboardData?.title}</p>
          <p>{dashboardData?.description}</p>
        </div>
        <div>
          <CreateButton
            onCreateClickHandler={(type) => onCreateClickHandler(type)}
          />
        </div>
      </div>

      <FilterComponent
        onFilterClick={(filter) => filterHandler(filter)}
        activeFilter={activeFilter}
      />

      {loading ? (
        <DashboardLoading />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {dashboardData?.data?.map((item, index) => (
            <div key={`${item.title}+${index}`}>
              <CardContainer data={item} />
            </div>
          ))}
          <EmptyCard
            onCreateClickHandler={(type) => onCreateClickHandler(type)}
          />
        </div>
      )}

      {showTextModal && (
        <CustomModal isOpen={showTextModal} modalClass="w-[600px] h-auto">
          <div
            onClick={() => setShowTextModal(false)}
            className="absolute top-2 right-2 cursor-pointer"
          >
            <CloseIcon />
          </div>
          <div className="flex flex-col gap-4 p-4 mt-5">
            <input
              type="text"
              placeholder="Enter title"
              value={textForm.title}
              onChange={(e) =>
                setTextForm((prev) => ({ ...prev, title: e.target.value }))
              }
              className="border border-neutral-200 rounded px-3 py-2"
            />
            <input
              type="text"
              placeholder="Enter description"
              value={textForm.description}
              onChange={(e) =>
                setTextForm((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              className="border border-neutral-200 rounded px-3 py-2"
            />
            <textarea
              placeholder="Enter content"
              value={textForm.content}
              onChange={(e) =>
                setTextForm((prev) => ({
                  ...prev,
                  content: e.target.value,
                }))
              }
              className="border border-neutral-200 rounded px-3 py-2 h-[300px]"
            />

            <button
              onClick={handleTextAdd}
              className="mt-2 w-full font-semibold bg-primary-500 text-white px-4 py-2 rounded self-start"
            >
              ADD TEXT
            </button>
          </div>
        </CustomModal>
      )}
    </div>
  );
};

export default Dashboard;
