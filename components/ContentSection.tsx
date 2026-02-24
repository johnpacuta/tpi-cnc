interface ContentSectionProps {
  title: string | React.ReactNode;
  children: React.ReactNode;
  className?: string;
  subtitle?: string | React.ReactNode;
}

export default function ContentSection({ 
  title, 
  children, 
  className = "",
  subtitle
}: ContentSectionProps) {
  return (
    <section className={`pt-4 pb-4 ${className}`}>
      <div className="container mx-auto px-6 w-[100%]">
        <div className="text-center p-8 md:p-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 relative inline-block">
            {title}
            <div className="absolute -bottom-2 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-accent/90 to-transparent"></div>
          </h2>
          <div className="flex items-center justify-center mb-4">
            <div className="h-[2px] w-24 bg-brand-blue"></div>
          </div>
          {subtitle && (
            <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
              {subtitle}
            </p>
          )}
        </div>
        <div className="p-4 bg-white/50">
          {children}
        </div>
      </div>
    </section>
  );
} 