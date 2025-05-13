const ConversationLoading = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-end gap-2">
        <div className="skeleton min-h-[60px] max-w-[70%] w-[300px] animate-pulse rounded-[10px] bg-neutral-300" />
        <div className="skeleton min-h-[60px] w-[60px] rounded-full animate-pulse bg-neutral-300"></div>
      </div>
      <div className="flex justify-start gap-2">
        <div className="skeleton min-h-[60px] w-[60px] rounded-full animate-pulse bg-neutral-300"></div>
        <div className="skeleton min-h-[60px] max-w-[70%] w-[300px] animate-pulse rounded-[10px] bg-neutral-300" />
      </div>
      <div className="flex justify-end gap-2">
        <div className="skeleton min-h-[60px] max-w-[70%] w-[300px] animate-pulse rounded-[10px] bg-neutral-300" />
        <div className="skeleton min-h-[60px] w-[60px] rounded-full animate-pulse bg-neutral-300"></div>
      </div>
      <div className="flex justify-start gap-2">
        <div className="skeleton min-h-[60px] w-[60px] rounded-full animate-pulse bg-neutral-300"></div>
        <div className="skeleton min-h-[60px] max-w-[70%] w-[300px] animate-pulse rounded-[10px] bg-neutral-300" />
      </div>
      <div className="flex justify-end gap-2">
        <div className="skeleton min-h-[60px] max-w-[70%] w-[300px] animate-pulse rounded-[10px] bg-neutral-300" />
        <div className="skeleton min-h-[60px] w-[60px] rounded-full animate-pulse bg-neutral-300"></div>
      </div>
      <div className="flex justify-start gap-2">
        <div className="skeleton min-h-[60px] w-[60px] rounded-full animate-pulse bg-neutral-300"></div>
        <div className="skeleton min-h-[60px] max-w-[70%] w-[300px] animate-pulse rounded-[10px] bg-neutral-300" />
      </div>
      <div className="flex justify-end gap-2">
        <div className="skeleton min-h-[60px] max-w-[70%] w-[300px] animate-pulse rounded-[10px] bg-neutral-300" />
        <div className="skeleton min-h-[60px] w-[60px] rounded-full animate-pulse bg-neutral-300"></div>
      </div>
    </div>
  );
};

export default ConversationLoading;
