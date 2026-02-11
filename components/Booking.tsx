import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function BookCall() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"meeting"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return <button data-cal-namespace="meeting"
    data-cal-link="aayush-tirmanwar-9cbcx9/meeting"
    
    data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
  >
    <div className="flex flex-col items-start gap-0.5">
        <span className="text-gray-100 text-base font-medium group-hover:text-white transition-colors">Book a call</span>
        <span className="text-gray-500 text-xs group-hover:text-gray-400 transition-colors">30 min meeting</span>
    </div>
  </button>;
};