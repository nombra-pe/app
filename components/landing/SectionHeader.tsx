export interface Props {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function TitleBlock({
  badge,
  title,
  description,
  align = "center",
}: Props) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-16 ${alignClass}`}>
      {badge && (
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-sm ring-1 ring-black/5 text-xs font-medium text-gray-700 uppercase tracking-wide mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3.5 h-3.5 text-gray-800"
          >
            <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
            <path d="M20 2v4" />
            <path d="M22 4h-4" />
            <circle cx="4" cy="20" r="2" />
          </svg>
          {badge}
        </span>
      )}

      <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-4 font-nunito">
        {title}
      </h2>

      {description && (
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-nunito">
          {description}
        </p>
      )}
    </div>
  );
}
