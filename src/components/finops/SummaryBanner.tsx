import { Download } from "lucide-react";

type Props = {
  savings: number;
  savingsPct: number;
  regions: number;
};

export default function SummaryBanner({ savings, savingsPct, regions }: Props) {
  const handleDownload = (): void => {
    console.log("PDF requested");
    // Add logic here later for actual export
  };  return (
    <div className="w-full max-w-[1140px] mx-auto bg-[#F9FAFB] px-[24px] py-[16px] rounded-xl shadow-md flex items-center justify-between text-[14px]">
      <div className="space-y-1">
        <h3 className="font-semibold text-[#111827]">You are saving €{savings.toLocaleString()}/month with Transtar vs Hyperscaler</h3>
        <p className="text-[#6B7280]">
          Your current deployment with {regions} regions is{" "}
          <span className="font-medium text-[#10B981]">{savingsPct}%</span> more cost-efficient.
        </p>
      </div>
      <div className="flex items-center gap-[20px]">
        <span className="text-[20px]">🇫🇮 🇸🇪 🇩🇪</span>
        <button
          className="flex items-center gap-[10px] btn btn-primary"
            onClick={handleDownload}        >
          <Download size={16} />
          Download Report
        </button>
      </div>
    </div>
  );
}