import { HoveredLink, MenuItem } from "../../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../../ui/sheet";
import { Button } from "../../ui/button";
import { Link } from 'next-view-transitions'
import { LucideIcon, MenuIcon } from "lucide-react";
import { items, menuItems } from "@/lib/links";
import { NavItems } from "./nav-items";
import { Fragment } from "react";
import { auth } from "@/auth";
import { SignInOutButton } from "@/app/login/sign-button";


export interface MenuItem {
  id?: string;
  title: string;
  url: string;
  icon?: LucideIcon;
  children?: MenuItem[];
}

export async function Navbar ({ className }: { className?: string }) {
  const session = await auth()
  console.log("Session in Navbar: ", session)
  return (
    <div
      className={cn("fixed flex flex-row items-center justify-center space-x-5 px-5 z-50 self-end bg-transparent text-sm text-white", className)}
    >
      <NavItems />

      {/* VERSION MOVIL */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="secondary" size="icon" className="bg-dorado lg:hidden">
            <MenuIcon className="customsvg h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="overflow-y-auto">
          <SheetTitle>Casino</SheetTitle>
          <div className="grid gap-6 p-6">

            {menuItems.map((item, index) =>
              <Fragment key={index}>
                <Link
                  href={item.url}
                  className="text-sm font-bold"
                >
                  {item.title}
                </Link>

                {item.children?.map((child, index) => (
                  <div key={index} className="flex flex-col space-y-2">
                    <HoveredLink href={child.url}>
                      • {child.title}
                    </HoveredLink>
                  </div>
                ))}

              </Fragment>
            )}
            <div className="border bg-yellow-400" />
            {items.map((item, index) =>
              <Fragment key={index}>
                <Link
                  href={item.url}
                  className="text-sm font-bold"
                >
                  {item.title}
                </Link>

                {item.children?.map((child, index) => (
                  <div key={index} className="flex flex-col space-y-2">
                    <HoveredLink href={child.url}>
                      • {child.title}
                    </HoveredLink>
                  </div>
                ))}

              </Fragment>
            )}
          </div>
        </SheetContent>
      </Sheet>

      <SignInOutButton session={session} />
    </div>
  );
}