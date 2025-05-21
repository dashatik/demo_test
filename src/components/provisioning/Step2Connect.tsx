import { useState } from "react";

const providers = ["AWS", "GKE", "Azure"];
const regions = {
  AWS: ["Finland", "Ireland", "Germany"],
  GKE: ["Finland", "Sweden", "Denmark", "Germany"],
  Azure: ["Sweden", "Germany", "France"],
};

function validateCIDR(cidr: string) {
  return /^(\d{1,3}\.){3}\d{1,3}\/\d{1,2}$/.test(cidr);
}

export default function Step2Connect({
  onContinue,
  onBack,
}: {
  onContinue: (config: any) => void;
  onBack: () => void;
}) {
  const [form, setForm] = useState({
    provider: "",
    region: "",
    vpc: "",
    cidr: "",
    accessKey: "",
    secretKey: "",
    clusterName: "",
    monitoringURL: "",
    enableDR: false,
    drRegion: "",
    autoScale: false,
  });

  const [connected, setConnected] = useState(false);
  const [banner, setBanner] = useState("");

  const handleChange = (field: string, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const allRequiredFieldsFilled = () => {
    const required = [
      "provider",
      "region",
      "vpc",
      "cidr",
      "accessKey",
      "secretKey",
      "clusterName",
      "monitoringURL",
    ];
    return required.every((field) => !!form[field as keyof typeof form]);
  };

  const handleConnect = () => {
    if (!allRequiredFieldsFilled()) return;

    setConnected(true);
    setBanner("✅ Cloud link & VPC saved. Config is now read-only.");
  };

  const isValid = connected;

  return (
    <div className="flex flex-col items-center justify-center px-[40px] py-[40px]">
      {/* Progress bar */}
      <div className="flex justify-between w-[400px] mb-[32px] text-[14px]">
        {["Select", "Connect", "Deploy", "Manage"].map((step, index) => (
          <div key={step} className="flex flex-col items-center">
            <div
              className={`w-[24px] h-[24px] rounded-full flex items-center justify-center border text-white ${
                index === 1
                  ? "bg-[#424242] text-[#fff]"
                  : index < 1
                  ? "bg-[#BDBDBD]"
                  : "border-[#E0E0E0] text-[#BDBDBD]"
              }`}
            >
              {index < 1 ? "✓" : index === 1 ? "2" : "•"}
            </div>
            <span className="mt-[4px] text-[#757575]">{step}</span>
          </div>
        ))}
      </div>

      {/* Form Box */}
      <div className="bg-[#F9FAFC] w-[880px] min-h-full rounded-[12px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] p-[32px]">
        <h2 className="text-[18px] font-semibold mb-[24px]">Connect Cloud Infrastructure</h2>

        {banner && (
          <div className="mb-[24px] p-[12px] bg-[#E8F5E9] text-[#2E7D32] rounded-[6px] text-[14px]">
            {banner}
          </div>
        )}

        <div className="grid grid-cols-2 gap-[24px] text-[14px]">
          {/* Provider */}
          <div>
            <label className="block mb-[6px] font-medium">Cloud Provider*</label>
            <select
              disabled={connected}
              className="w-full border border-[#CCC] p-[10px] rounded-[6px]"
              value={form.provider}
              onChange={(e) => handleChange("provider", e.target.value)}
            >
              <option value="">Select Provider</option>
              {providers.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          </div>

          {/* Region */}
          <div>
            <label className="block mb-[6px] font-medium">Region*</label>
            <select
              disabled={connected || !form.provider}
              className="w-full border border-[#CCC] p-[10px] rounded-[6px]"
              value={form.region}
              onChange={(e) => handleChange("region", e.target.value)}
            >
              <option value="">Select Region</option>
              {form.provider &&
                regions[form.provider as keyof typeof regions].map((r) => (
                  <option key={r}>{r}</option>
                ))}
            </select>
          </div>

          {/* VPC */}
          <div>
            <label className="block mb-[6px] font-medium">VPC ID</label>
            <input
              type="text"
              placeholder="vpc-273a1df"
              disabled={connected}
              className="w-full border border-[#CCC] p-[10px] rounded-[6px]"
              value={form.vpc}
              onChange={(e) => handleChange("vpc", e.target.value)}
            />
          </div>

          {/* CIDR */}
          <div>
            <label className="block mb-[6px] font-medium">CIDR Block</label>
            <input
              type="text"
              placeholder="10.0.0.0/16"
              disabled={connected}
              className="w-full border border-[#CCC] p-[10px] rounded-[6px]"
              value={form.cidr}
              onChange={(e) => handleChange("cidr", e.target.value)}
            />
            <p className={`mt-[4px] text-[12px] ${validateCIDR(form.cidr) ? "text-green-600" : "text-red-500"}`}>
              {form.cidr
                ? validateCIDR(form.cidr)
                  ? "✔ Valid CIDR"
                  : "❌ Invalid CIDR format"
                : ""}
            </p>
          </div>

          {/* Access Key + Security Label */}
          <div>
            <label className="block mb-[6px] font-medium">Access Key</label>
            <input
              type="password"
              placeholder="AKIA****"
              disabled={connected}
              className="w-full border border-[#CCC] p-[10px] rounded-[6px]"
              value={form.accessKey}
              onChange={(e) => handleChange("accessKey", e.target.value)}
            />
            <p className="text-[12px] text-[#888] mt-[4px]">🔒 Stored securely (demo only)</p>
          </div>

          {/* Secret Key */}
          <div>
            <label className="block mb-[6px] font-medium">Secret Key</label>
            <input
              type="password"
              placeholder="************"
              disabled={connected}
              className="w-full border border-[#CCC] p-[10px] rounded-[6px]"
              value={form.secretKey}
              onChange={(e) => handleChange("secretKey", e.target.value)}
            />
          </div>

          {/* Cluster Name */}
          <div>
            <label className="block mb-[6px] font-medium">Kubernetes Cluster Name</label>
            <input
              type="text"
              placeholder="dewa-prod"
              disabled={connected}
              className="w-full border border-[#CCC] p-[10px] rounded-[6px]"
              value={form.clusterName}
              onChange={(e) => handleChange("clusterName", e.target.value)}
            />
          </div>

          {/* Monitoring URL */}
          <div>
            <label className="block mb-[6px] font-medium">Monitoring Endpoint URL</label>
            <input
              type="text"
              placeholder="https://obs.transtar.eu/metrics"
              disabled={connected}
              className="w-full border border-[#CCC] p-[10px] rounded-[6px]"
              value={form.monitoringURL}
              onChange={(e) => handleChange("monitoringURL", e.target.value)}
            />
          </div>

          {/* DR Checkbox + Region 2 */}
          <div className="col-span-2 mt-[16px]">
            <label className="flex items-center gap-[8px] text-[14px]">
              <input
                type="checkbox"
                checked={form.enableDR}
                onChange={(e) => handleChange("enableDR", e.target.checked)}
                disabled={connected}
              />
              Enable DR region
            </label>
            {form.enableDR && (
              <div className="mt-[8px]">
                <label className="block mb-[6px] font-medium">DR Region</label>
                <select
                  className="w-full border border-[#CCC] p-[10px] rounded-[6px]"
                  disabled={connected}
                  value={form.drRegion}
                  onChange={(e) => handleChange("drRegion", e.target.value)}
                >
                  <option value="">Select DR Region</option>
                  {["Germany", "Finland", "Sweden"].map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-[40px]">
          <button onClick={onBack} className="btn text-[14px]">Back</button>

          <div className="flex gap-[16px]">
            <button
              onClick={handleConnect}
              disabled={!allRequiredFieldsFilled()}
              className={`text-[14px] px-[20px] py-[10px] rounded-[6px] transition ${
                allRequiredFieldsFilled()
                  ? "btn btn-primary"
                  : "btn btn-disabled cursor-not-allowed"
              }`}
            >
              Connect
            </button>

            <button
              disabled={!isValid}
              onClick={() => onContinue(form)}
              className={`text-[14px] px-[20px] py-[10px] rounded-[6px] transition ${
                isValid
                  ? "btn btn-primary"
                  : "btn btn-disabled cursor-not-allowed"
              }`}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
