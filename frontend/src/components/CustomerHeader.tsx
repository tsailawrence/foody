import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShoppingCart } from "lucide-react";

const Header = () => {
  const routes = [
    // {
    //   href: "/",
    //   label: "Restauarants",
    // },
    {
      href: "/",
      label: "Order",
    },
    {
      href: "/",
      label: "Monthly Payment",
    },
    {
      href: "/",
      label: "Settings",
    },
  ];
  return (
    <header className="sm:flex sm:justify-between px-10 border-b">
      <div className="relative  flex h-20 items-center justify-between w-full">
        <div className="flex items-center gap-8">
          <Sheet>
            <SheetTrigger>
              <Menu className="h-6 w-6" color="#E60012"></Menu>
            </SheetTrigger>
            <SheetContent side="left" className="w-[250px] sm:w-[300px]">
              <nav className="flex flex-col gap-4">
                {routes.map((route, i) => (
                  <Link
                    key={i}
                    href={route.href}
                    className="block  py-1 text-lg"
                  >
                    {route.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="">
            <Image src="/logo.png" alt="logo" width={90} height={30} />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <SignedIn>
            <Button
              variant="ghost"
              size="icon"
              className=""
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="h-6 w-6" color="#E60012" />
            </Button>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;