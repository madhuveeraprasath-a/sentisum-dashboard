"use client";
import { ConfigProvider, Layout } from "antd";
import { Suspense } from "react";
import StyledComponentsRegistry from "../lib/AntdRegistry";
import themeConfig from "../lib/themeConfig";
import Header from "./Navbar/Header";
import BottomNav from "./Navbar/BottomNav";

const RootLayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <ConfigProvider theme={themeConfig}>
        <Layout style={{ backgroundColor: "#FFF" }}>
          <Suspense>
            <Header />
          </Suspense>
          <BottomNav />
          <Suspense fallback={<div className=""></div>}>{children}</Suspense>
        </Layout>
      </ConfigProvider>
    </StyledComponentsRegistry>
  );
};

export default RootLayoutWrapper;
