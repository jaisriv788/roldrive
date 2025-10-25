import Image from "next/image";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { RiMenuFill } from "react-icons/ri";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="bg-[#223544] fixed z-50 w-screen text-white py-5 px-5 sm:px-14 flex justify-between items-center">
      <div className="flex items-center gap-5">
        <Link href="/">
          {/* <Image
            src="/navbar/Frame.svg"
            alt="Navbar frame"
            width={155}
            height={50}
            className="w-[120px] sm:w-[155px] h-auto"
            unoptimized
          /> */}1
        </Link>

        <div className="hidden lg:flex gap-3">
          <Link
            className="hover:text-gray-300 transition ease-in-out duration-300"
            href="/services"
          >
            Services
          </Link>
          <Link
            className="hover:text-gray-300 transition ease-in-out duration-300"
            href="/fleet"
          >
            Fleet
          </Link>
          <Link
            className="hover:text-gray-300 transition ease-in-out duration-300"
            href="/businesssolutions"
          >
            Business Solutions
          </Link>
          <Link
            className="hover:text-gray-300 transition ease-in-out duration-300"
            href="/cities"
          >
            Cities
          </Link>
          <Link
            className="hover:text-gray-300 transition ease-in-out duration-300"
            href="/airporttransfers"
          >
            Airport Transfers
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-3">
        <div className="flex gap-2 cursor-pointer hover:text-gray-300 transition ease-in-out duration-300">
          <Image
            src="/navbar/whatsapp.svg"
            alt="Navbar frame"
            width={20}
            height={20}
          />
          Contact Us
        </div>
        <Select defaultValue="english">
          <SelectTrigger className="w-[70px] border border-gray-500">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="english">En</SelectItem>
            <SelectItem value="hindi">Hn</SelectItem>
          </SelectContent>
        </Select>
        <button className="bg-white text-black px-5 py-1.5 rounded-lg hover:bg-gray-300 cursor-pointer font-semibold transition ease-in-out duration-300">
          Sign In
        </button>
      </div>
      <div className="flex lg:hidden gap-5 items-center">
        <Select defaultValue="english">
          <SelectTrigger className="w-[65px] border border-gray-500">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="english">En</SelectItem>
            <SelectItem value="hindi">Hn</SelectItem>
          </SelectContent>
        </Select>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <RiMenuFill size={20} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-60" align="start">
            <DropdownMenuLabel>Navigation</DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link href="/services">Services</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/fleet">Fleet</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/businesssolutions">Business Solutions</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/cities">Cities</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/airporttransfers">Airport Transfers</Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Others</DropdownMenuLabel>

            <DropdownMenuGroup>
              <DropdownMenuItem className="cursor-pointer">
                Contact Us
                <DropdownMenuShortcut>
                  <Image
                    src="/navbar/whatsapp.svg"
                    alt="Navbar frame"
                    width={18}
                    height={18}
                  />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Sign In
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
