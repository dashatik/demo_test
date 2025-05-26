import Topbar from '../components/Topbar';
import Map from '../components/Map';
import { useMemo } from 'react';
import dayjs from 'dayjs';
import { ShieldCheck, XCircle, Clock } from 'lucide-react';


const REGION_DATA = [
  {
    name: '🇫🇮 Finland',
    status: '🟢 Active',
    latency: '45ms',
    dataCenter: 'Equinix HEL1',
    failover: true,
    drTestDate: '2025-06-01',
  },
  {
    name: '🇸🇪 Sweden',
    status: '🟠 DR-Standby',
    latency: '78ms',
    dataCenter: 'Interxion STO2',
    failover: true,
    drTestDate: '2025-06-01',
  },
  {
    name: '🇩🇰 Denmark',
    status: '⚫ Disabled',
    latency: '—',
    dataCenter: '—',
    failover: false,
    drTestDate: '—',
  },
];

export default function Regions() {
  const rows = useMemo(() => {
    return REGION_DATA.map(region => {
      const daysUntil = region.drTestDate !== '—' ? dayjs(region.drTestDate).diff(dayjs(), 'day') : null;
      return {
        ...region,
        drCountdown: daysUntil !== null && daysUntil <= 7 ?  daysUntil : null,
      };
    });
  }, []);

  return (
    <div className="min-h-screen bg-white px-[40px] py-[32px] space-y-[40px] text-[#000]">
      <Topbar page="Regions" />

      {/* Region Overview Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-[24px] w-full max-w-[1140px] mx-auto ">
        {/* Region Summary Table */}
        <div>
          <h2 className="text-[16px] font-semibold mb-[20px]">Deployment Regions Summary</h2>
          <div className="grid grid-cols-6 bg-[#F0F0F0] py-[6px] px-[10px] font-semibold text-[13px] ">
            <div>Region</div>
            <div>Status</div>
            <div>Latency</div>
            <div>Data Center</div>
            <div>Failover Ready</div>
            <div>Next DR Test</div>
          </div>
          {rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-6 items-center px-[10px] py-[6px] text-[13px] ${
                i % 2 === 0 ? 'bg-[#fff]' : 'bg-[#FAFAFA]'
              } hover:bg-[#F5F5F5]`}
            >
              <div>{row.name}</div>
              <div>{row.status}</div>
              <div>{row.latency}</div>
              <div>{row.dataCenter}</div>
              <div>
                {row.failover ? (
                  <ShieldCheck size={16} className="text-[#4CAF50]" />
                ) : (
                  <XCircle size={16} className="text-[#F44336]" />
                )}
              </div>
              <div>
                {row.drTestDate}
                {row.drCountdown !== null && (
                  <span className="block text-[11px] text-[#666] flex items-center gap-[4px] mt-[2px]">
                    <Clock size={12} className="text-[#999]" />
                    in {row.drCountdown} days
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Map Container */}
        <div className=" overflow-hidden border-[1px] border-[#E0E0E0] rounded-[8px] max-h-[320px] max-w-[560px] w-full">
          <Map />
        </div>
      </section>

      {/* Global Region Actions Panel */}
      <section className="w-full max-w-[1140px] mx-auto mt-[32px]">
        <div className="flex items-center gap-[90px]">
          <h3 className="text-[15px] font-medium">Region Actions</h3>
          <div className="flex gap-[10px]">
            <button className="btn btn-primary">Enable Region</button>
            <button className="btn btn-primary">Run DR Test</button>
            <button className="btn btn-primary">Sync Config</button>
          </div>
        </div>
      </section>
    </div>
  );
}