import { cn } from "@/lib/utils";

export function TypographyH2({
  children,
  className,
  ...props
}: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn("text-4xl font-semibold tracking-tight", className)}
      {...props}
    >
      {children}
    </h2>
  );
}
