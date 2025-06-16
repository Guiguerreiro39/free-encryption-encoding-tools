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
} from "@/components/ui/sidebar";
import { TOOL_INFO } from "@/constants";
import Link from "next/link";

export const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/">
          <h4 className="font-semibold text-primary/90 ml-2 mt-4">
            Free Online Encryption & Encoding Tools
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
    </Sidebar>
  );
};
