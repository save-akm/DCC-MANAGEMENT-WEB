"use client";

import { MenuItem } from "@/lib/types/interface";
import { CommandItem } from "../ui/command";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function MenuLink({ item }: any) {
  const pathname = usePathname();

  return (
    <>
      {item.submenu ? (
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="pl-4 hover:no-underline">
                <div
                  className={`${
                    item.link === pathname ? "font-bold text-blueHot-500" : ""
                  } flex gap-4 cursor-pointer group`}
                >
                  <span className="group-hover:text-blueHot-500 group-hover:animate-bounce">
                    {item.icon}
                  </span>
                  <span className="group-hover:text-blueHot-500 group-hover:font-medium tracking-wide">
                    {item.text}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                {item.subMenuItems?.map((subItem: any, idx: number) => {
                  return (
                    <CommandItem key={idx} className="pl-14 group">
                      <Link
                        href={subItem.path}
                        className={`${
                          subItem.path === pathname
                            ? "font-bold text-blueHot-500"
                            : ""
                        } cursor-pointer group flex gap-2`}
                      >
                        <div
                          className={`h-[8px] w-[8px] rounded-full my-1 bg-blueHot-400`}
                        ></div>
                        <span className="group-hover:text-blueHot-500 group-hover:font-medium tracking-wide">
                          {subItem.title}
                        </span>
                      </Link>
                    </CommandItem>
                  );
                })}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
      ) : (
        <CommandItem key={item.link} className="pl-4 group">
          <Link
            href={item.link}
            className={`${
              item.link === pathname ? "font-bold text-blueHot-500" : ""
            } flex gap-4 cursor-pointer`}
          >
            <span className="group-hover:text-blueHot-500 group-hover:animate-bounce">
              {item.icon}
            </span>
            <span className="group-hover:text-blueHot-500 group-hover:font-medium tracking-wide">
              {item.text}
            </span>
          </Link>
        </CommandItem>
      )}
    </>
  );
}
