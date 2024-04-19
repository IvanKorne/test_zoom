import MeetingTypeList from "@/components/MeetingTypeList";

export default function Home() {
  const now = new Date();

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );

  return (
    <main className="flex flex-col gap-8 py-12 px-16 size-full text-white ">
      <div className="rounded-lg flex w-full h-[280px] bg-hero">
        <div className="h-full py-8 px-12 flex flex-col gap-12">
          <div className="py-2 px-4 bg-white/30 rounded max-w-[273px]">
            <h1 className="text-base ">Upcoming meeting at 12:30pm</h1>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl md:text-5xl font-bold">{time}</h1>
            <h2 className="text-lg md:text-xl font-semibold text-gray-400">
              {date}
            </h2>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </main>
  );
}
