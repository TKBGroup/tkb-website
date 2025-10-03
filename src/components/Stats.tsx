"use client";

import React, { useEffect, useState, useRef } from "react";
import { animate } from "framer-motion";

const statsData = [
  {
    value: 100,
    label: "RESPONSIBILITY",
    title: "SUSTAINABLE",
    description: "and high-quality raw materials used from the USA and Canada",
    end: "140deg",
    dur: "3s",
  },
  {
    value: 99,
    label: "CONTENTEDNESS",
    title: "SATISFACTION",
    description: "Customer satisfaction rate for over a decade is our pride",
    end: "135deg",
    dur: "4s",
  },
  {
    value: 83,
    label: "LOYALTY",
    title: "REPEAT CUSTOMERS",
    description:
      "Three-fourths of our revenue is generated from loyal, returning clients",
    end: "130deg",
    dur: "5s",
  },
];

type AnimatedNumberProps = {
  target: number;
  duration?: number;
};
export function AnimatedNumber({ target, duration = 2 }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(1, target, {
      duration,
      ease: "easeOut",
      onUpdate(value) {
        if (ref.current) {
          ref.current.textContent = `${Math.round(value)}%`;
        }
      },
    });

    return () => controls.stop(); // очистка
  }, [target, duration]);

  return <span ref={ref}>1%</span>;
}
type AnimatedCircleProps = {
  start?: boolean;
  end: string;
  dur?: string;
  className?: string;
  children?: React.ReactNode;
};

const AnimatedCircle: React.FC<AnimatedCircleProps> = ({
  start = false,
  end,
  dur = "2s",
  className,
  children,
}) => {
  const style: React.CSSProperties & { [key: string]: string } = {
    "--end-angle": end,
    "--dur": dur,
  };

  return (
    <div
      className={`reveal-circle ${start ? "revealActive" : ""} ${
        className ?? ""
      }`}
      style={style}
    >
      {children}
    </div>
  );
};

export default function Stats() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#111827] py-20 sm:py-24 text-white"
    >
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 text-center md:grid-cols-3">
          {statsData.map((stat) => (
            <div key={stat.title} className="flex flex-col items-center">
              <span className="relative flex  items-center justify-center">
                <AnimatedCircle
                  start={visible}
                  end={stat.end}
                  dur={stat.dur}
                ></AnimatedCircle>
                <span className="stats-text text-4xl font-bold absolute z-10">
                  <AnimatedNumber
                    target={stat.value}
                    duration={Number(stat.dur.replace("s", ""))}
                  />
                </span>
              </span>
              <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-gray-400">
                {stat.label}
              </p>
              <h3 className="mt-2 text-xl font-bold">{stat.title}</h3>
              <p className="mt-4 max-w-xs text-gray-300">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
