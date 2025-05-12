"use client";
import { StyleProvider, createCache, extractStyle } from "@ant-design/cssinjs";
import { useServerInsertedHTML } from "next/navigation";
import React from "react";

const StyledComponentsRegistry = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const cache = createCache();
  const render = <>{children}</>;

  useServerInsertedHTML(() => (
    <style
      id="antd"
      dangerouslySetInnerHTML={{ __html: extractStyle(cache) }}
    />
  ));
  if (typeof window !== "undefined") {
    return render;
  }
  return (
    <StyleProvider cache={cache} hashPriority="high">
      {render}
    </StyleProvider>
  );
};

export default StyledComponentsRegistry;
