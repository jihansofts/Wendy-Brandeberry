"use client";
import { useEffect } from "react";
import Image from "next/image";
export default function ZocdocWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://offsiteschedule.zocdoc.com/plugin/embed";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="zd-plugin-container fixed bottom-4 right-4 z-50 w-48">
      <a
        style={{ display: "block" }}
        href="https://www.zocdoc.com/practice/a-quiet-mind-llc-141302?lock=true&isNewPatient=false&referrerType=widget"
        className="zd-plugin "
        data-type="book-button"
        data-practice-id="141302"
        title="A Quiet Mind, llc">
        <Image
          src="https://offsiteschedule.zocdoc.com/images/remote/rb_BookOnline_Blue_162x71.png?type=bobjs&monolith_provider_id=141302&practice_id=pt_mIVyCYUWDUC5-sSJtw3cDQ"
          alt="A Quiet Mind, llc"
          title="A Quiet Mind, llc"
          width={162}
          height={71}
          style={{ border: 0 }}
        />
      </a>
    </div>
  );
}
