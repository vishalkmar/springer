export function SectionHeader({ title, subtitle, centered = false }) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-[#1eb2fc] relative inline-block">
        {title}

        <span className="absolute -bottom-3 left-0 w-1/3 h-1 bg-[hsl(var(--accent))] rounded-full"></span>

        {centered && (
          <span className="absolute -bottom-3 right-0 w-1/3 h-1 bg-[hsl(var(--accent))] rounded-full"></span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
