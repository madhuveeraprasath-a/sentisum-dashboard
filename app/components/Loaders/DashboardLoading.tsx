"use client";

const DashboardLoading = () => {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[...Array(4)].map((_, i) => (
          <div
            key={`loading-${i}`}
            className="skeleton min-h-[300px] animate-pulse rounded-[10px] bg-neutral-300"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default DashboardLoading;
