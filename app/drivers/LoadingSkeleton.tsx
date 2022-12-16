export default function LoadingSkeleton() {
  return (
    <>
      <section className="bg-transparent min-h-[calc(100vh-90px)] max-w-[1280px] mx-auto px-12 mt-[100px]">
        <div className="w-2/4 h-10 rounded-lg bg-slate-100"></div>
        <div className="w-1/3 h-10 rounded-lg bg-slate-100 mt-[20px]"></div>
        <div className="w-3/4 h-10 rounded-lg bg-slate-100 mt-[20px]"></div>
        <div className="w-2/3 h-10 rounded-lg bg-slate-100 mt-[20px]"></div>
        <div className="w-4/5 h-10 rounded-lg bg-slate-100 mt-[20px]"></div>
        <div className="w-5/6 h-10 rounded-lg bg-slate-100 mt-[20px]"></div>
        <div className="w-1/6 h-10 rounded-lg bg-slate-100 mt-[20px]"></div>
        <div className="w-2/3 h-10 rounded-lg bg-slate-100 mt-[20px]"></div>
        <div className="w-4/6 h-10 rounded-lg bg-slate-100 mt-[20px]"></div>
        <div className="w-1/4 h-10 rounded-lg bg-slate-100 mt-[20px]"></div>
      </section>
    </>
  );
}
