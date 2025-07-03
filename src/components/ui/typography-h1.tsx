import { cn } from "@/lib/utils";

export function TypographyH1({
  children,
  className,
  ...props
}: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn("text-5xl font-bold tracking-tight", className)}
      {...props}
    >
      {children}
    </h1>
  );
}
