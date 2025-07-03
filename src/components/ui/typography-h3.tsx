import { cn } from "@/lib/utils";

export function TypographyH3({
  children,
  className,
  ...props
}: React.ComponentProps<"h3">) {
  return (
    <h3
      className={cn("text-3xl font-semibold tracking-tight", className)}
      {...props}
    >
      {children}
    </h3>
  );
}
