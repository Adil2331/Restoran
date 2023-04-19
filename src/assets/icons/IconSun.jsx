// icon:sun | Feathericons https://feathericons.com/ | Cole Bemis
import * as React from "react";
import "./icon.css";

function IconSun(props) {
  return (
    <svg
      className="icon"
      fill="none"
      stroke="#b59571"
      strokeLinecap="#b59571"
      strokeLinejoin="#b59571"
      strokeWidth={2}
      viewBox="0 0 24 24"
      // max-height="40"
      // max-width="40"
      // min-width="20"
      // height="20"
      // max-width="100%"
      {...props}
    >
      <path d="M17 12 A5 5 0 0 1 12 17 A5 5 0 0 1 7 12 A5 5 0 0 1 17 12 z" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

export default IconSun;
