import { ListCard } from "@/components/list-card";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
export default async function Home() {
  const res = await fetch(process.env.URL + "/api/list", {
    method: "GET",
    cache: "no-store",
  });
  const data = await res.json();
  const results = await fetch(process.env.URL + "/api/tag", {
    method: "GET",
    cache: "no-store",
  });
  const tags = await results.json();
  return (
    <div className="w-full p-5">
      <div className="hidden gap-1 md:flex">
        {tags.map((tag: string, index: number) => (
          <HoverBorderGradient
            key={index}
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 "
          >
            <span>{tag}</span>
          </HoverBorderGradient>
        ))}
      </div>

      <div className="w-full p-5 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5">
        {data.map((item: string, index: number) => (
          <ListCard list={item} key={index} />
        ))}
      </div>
    </div>
  );
}
