import { Aside } from "./Aside";
import { Header } from "./Header";
export function AppGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[auto_1fr] h-full w-full bg-primary-500">
      <Aside />
      <div className="grid grid-rows-[auto_1fr] h-full w-full overflow-hidden">
        <Header />
        <main className="h-full w-full overflow-auto p-10 rounded-tl-3xl bg-white">
          {children}
        </main>
      </div>
    </div>
  );
}
