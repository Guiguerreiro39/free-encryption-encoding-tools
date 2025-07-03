import { cn } from "@/lib/utils";

export function TypographyP({
  children,
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "leading-relaxed text-muted-foreground max-w-3xl mx-auto",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
