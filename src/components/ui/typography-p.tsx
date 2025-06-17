export function TypographyP({ children }: { children: React.ReactNode }) {
  return (
    <p className="leading-7 text-muted-foreground max-w-4xl mx-auto">
      {children}
    </p>
  );
}
