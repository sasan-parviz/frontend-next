"use client";

import { MouseEvent, useState } from "react";
import styles from "./ripple.module.css";

export default function RippleEffect() {
  const [ripples, setRipples] = useState<JSX.Element[]>([]);

  const createRipple = (event: MouseEvent<HTMLDivElement>) => {
    const container = event.currentTarget;
    const rect = container.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple = (
      <span
        key={Date.now()}
        className={styles.ripple}
        style={{ width: size, height: size, left: x, top: y }}
        onAnimationEnd={() => setRipples((prev) => prev.slice(1))}
      />
    );

    setRipples((prev) => [...prev, newRipple]);
  };

  return (
    <div className={styles.container} onClick={createRipple}>
      {ripples}
    </div>
  );
}
