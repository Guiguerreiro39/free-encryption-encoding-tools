import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { TOOL_INFO } from "@/constants";
import Link from "next/link";
import Image from "next/image";

export const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/" className="flex items-center gap-2 ml-2 mt-4">
          <Image
            src="/icon.svg"
            width={35}
            height={35}
            alt="ciphertoolbox logo"
          />
          <h4 className="font-semibold text-primary/90">
            <span className="text-xl font-bold">Cipher</span> Toolbox
          </h4>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {TOOL_INFO.map((category) => (
          <SidebarGroup key={category.title}>
            <SidebarGroupLabel>{category.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {category.tools.map((tool) => (
                  <SidebarMenuItem key={tool.name}>
                    <SidebarMenuButton asChild>
                      <Link href={tool.url}>
                        <span>{tool.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/faq">
                <span>FAQs</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/about">
                <span>About</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
