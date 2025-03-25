import { ArrowUp } from "lucide-react";

export default function SessionsByLandingPage({ data, title }) {
  return (
    <div className="w-full max-w-2xl rounded-lg border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-lg font-semibold">{title}</h2>

      <div className="space-y-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded-md"
          >
            <div className="pr-4">
              <div className="text-sm font-medium text-gray-700">
                {item.page} · {item.path}
              </div>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <div className="text-right font-medium">{item.sessions}</div>
              <div className="flex items-center text-green-500">
                <ArrowUp className="mr-0.5 h-3 w-3" />
                <span>{item.change}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
