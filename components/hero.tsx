import NextLogo from "./next-logo";
import PowerBi from "./powerbi-logo";
import SupabaseLogo from "./supabase-logo";
import { createClient } from "@/utils/supabase/server";
import { Button } from "./ui/button";
export default async function Header() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="flex gap-8 justify-center items-center  ">
        <a
          href="https://www.microsoft.com/en-us/power-platform/products/power-bi"
          target="_blank"
          rel="noreferrer"
          className=" -mt-2"
        >
          <PowerBi />
        </a>
        <span className="border-l rotate-45 h-6" />
        <a
          href="https://nextjs.org/"
          target="_blank"
          rel="noreferrer"
          className=" mt-1"
        >
          <NextLogo />
        </a>{" "}
        <span className="border-l rotate-45 h-6" />
        <a
          href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          rel="noreferrer"
          className=" mt-1"
        >
          <SupabaseLogo />
        </a>
      </div>
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-2xl text-center">
        Faster way to share your Dashboard to your non-Power BI users
      </p>
      {user && (
        <Button asChild className="!text-lg" variant="link">
          <a href="/dashboard">Go to Dashboard &rarr;</a>
        </Button>
      )}
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
