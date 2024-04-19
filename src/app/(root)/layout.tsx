import StreamClientProvider from "@/components/StreamClientProvider";
import { ChildrenProps } from "@/lib/types";

const StreamLayout = ({ children }: ChildrenProps) => {
  return (
    <main>
      <StreamClientProvider>{children}</StreamClientProvider>
    </main>
  );
};

export default StreamLayout;
