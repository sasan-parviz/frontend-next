import { ReactNode } from "react";
import dynamic from "next/dynamic";

import styles from "./button.module.css";

const RippleEffect = dynamic(() => import("./ripple-effect.component"), {
  ssr: false,
});

type Props = {
  theme: "bordered" | "filled" | "highlight" | "smallCircle" | "tag";
  text: string;
  action: () => void;
  icon?: string;
  bold?: boolean;
  arrowDown?: boolean;
  className?: string;
  textSize?: "small" | "medium" | "large";
  IconSize?: "small" | "big";
  rippleEffect?: boolean;
};

export default function Button({
  theme = "highlight",
  icon,
  text,
  bold = false,
  arrowDown = false,
  className,
  textSize = "medium",
  IconSize = "small",
  rippleEffect = true,
}: Props) {
  if (theme === "smallCircle") {
    return (
      <button className={styles.smallCircle}>
        <i className={`${styles.smallCircleIcon} ${icon}`}></i>
      </button>
    );
  }

  let buttonTheme = "";
  switch (theme) {
    case "tag":
      buttonTheme = styles.containerTag;
      break;
    case "filled":
      buttonTheme = styles.containerFilled;
      break;
    case "bordered":
      buttonTheme = styles.containerBordered;
      break;
    default:
      buttonTheme = styles.containerHighlight;
      break;
  }

  const textSizeClassName =
    textSize === "small"
      ? styles.textSizeSmall
      : textSize === "medium"
      ? styles.textSizeMedium
      : styles.textSizeLarge;

  return (
    <button className={`${buttonTheme} ${bold && styles.bold} ${className}`}>
      {icon && icon !== "" && (
        <i
          className={`${styles.buttonIcon} ${
            IconSize === "big" && styles.buttonIconBig
          } ${icon}`}
        ></i>
      )}
      <span className={textSizeClassName}>{text}</span>
      {arrowDown && <i className={`${styles.arrowDown} icon-arrow-down`}></i>}
      {rippleEffect && <RippleEffect />}
    </button>
  );
}
