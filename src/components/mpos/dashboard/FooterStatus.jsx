import {
  CheckCircle2,
  Wifi,
  ShieldCheck,
  Clock3,
} from "lucide-react";

function FooterStatus() {
  return (
    <div className="mt-6 rounded-2xl border border-white/10 bg-[#0B1220] px-6 py-5">

      <div className="flex flex-wrap items-center justify-between gap-5">

        {/* Left */}

        <div className="flex flex-wrap items-center gap-6">

          <div className="flex items-center gap-2">

            <CheckCircle2
              size={18}
              className="text-green-400"
            />

            <span className="text-sm text-gray-300">
              All systems operational
            </span>

          </div>

          <div className="flex items-center gap-2">

            <Wifi
              size={18}
              className="text-cyan-400"
            />

            <span className="text-sm text-gray-300">
              Live Sync Enabled
            </span>

          </div>

        </div>

        {/* Right */}

        <div className="flex flex-wrap items-center gap-6">

          <div className="flex items-center gap-2">

            <ShieldCheck
              size={18}
              className="text-cyan-400"
            />

            <span className="text-sm text-gray-300">
              Secure Cloud Backup
            </span>

          </div>

          <div className="flex items-center gap-2">

            <Clock3
              size={18}
              className="text-yellow-400"
            />

            <span className="text-sm text-gray-300">
              Updated just now
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default FooterStatus;