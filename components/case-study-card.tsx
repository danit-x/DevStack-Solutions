"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Activity, Lightbulb } from "lucide-react";

import { cn } from "@/lib/utils";

type CaseStudyCardProps = {
  title: string;
  category: string;
  description: string;
  features: string[];
  problem: string;
  solution: string;
  impact: string;
  tone: "warm" | "cool" | "blush";
  href?: string;
};

const previewThemes: Record<CaseStudyCardProps["tone"], string> = {
  warm: "from-orange-100/80 via-amber-50/80 to-slate-50",
  cool: "from-cyan-100/80 via-sky-50/80 to-slate-50",
  blush: "from-emerald-50/80 via-orange-50/80 to-slate-50"
};

const iconThemes: Record<CaseStudyCardProps["tone"], string> = {
  warm: "text-orange-500",
  cool: "text-[var(--brand-trust)]",
  blush: "text-[var(--brand-growth)]"
};

export function CaseStudyCard({
  title,
  category,
  description,
  features,
  problem,
  solution,
  impact,
  tone,
  href
}: CaseStudyCardProps) {
  const [activeTab, setActiveTab] = useState<"problem" | "solution" | "impact">("problem");

  const card = (
    <article className="panel flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(11,95,165,0.14)] hover:shadow-[0_30px_68px_-42px_rgba(11,95,165,0.32)]">
      <div className={cn("relative border-b border-slate-900/5 bg-gradient-to-br p-6 sm:p-8", previewThemes[tone])}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.9),transparent_60%)]" />
        <div className="relative z-10 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-trust)]">
              {category}
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-950">{title}</h3>
          </div>
          <ArrowUpRight className="h-6 w-6 shrink-0 text-slate-400 transition-colors group-hover:text-slate-700" />
        </div>
        <p className="relative z-10 mt-4 text-sm leading-6 text-slate-700 max-w-sm">{description}</p>
        
        <div className="relative z-10 mt-6 flex flex-wrap gap-2">
          {features.map((feature) => (
            <span
              key={feature}
              className="rounded-full border border-[rgba(11,95,165,0.06)] bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 backdrop-blur-sm shadow-sm"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex flex-1 flex-col bg-white p-6 sm:p-8">
        <div className="flex bg-slate-50/80 p-1.5 rounded-2xl mb-8 border border-slate-100 shadow-inner">
          {[
            { id: "problem", label: "Problem", icon: Activity },
            { id: "solution", label: "Solution", icon: Lightbulb },
            { id: "impact", label: "Impact", icon: CheckCircle2 }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab(tab.id as any);
                }}
                className={cn(
                  "flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2 px-2 sm:px-3 text-xs sm:text-sm font-medium rounded-xl transition-all duration-200",
                  isActive 
                    ? "bg-white text-slate-900 shadow-sm border border-slate-200/50" 
                    : "text-slate-500 hover:text-slate-700 hover:bg-slate-100"
                )}
              >
                <Icon className={cn("h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 transition-colors", isActive ? iconThemes[tone] : "text-slate-400")} />
                {tab.label}
              </button>
            )
          })}
        </div>

        <div className="relative flex-1 min-h-[140px]">
          <div className={cn("absolute inset-0 transition-all duration-300", activeTab === "problem" ? "opacity-100 z-10 translate-y-0" : "opacity-0 z-0 pointer-events-none translate-y-1")}>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              The Challenge
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">{problem}</p>
          </div>
          
          <div className={cn("absolute inset-0 transition-all duration-300", activeTab === "solution" ? "opacity-100 z-10 translate-y-0" : "opacity-0 z-0 pointer-events-none translate-y-1")}>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-trust)]" />
              Engineering Solution
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">{solution}</p>
          </div>
          
          <div className={cn("absolute inset-0 transition-all duration-300", activeTab === "impact" ? "opacity-100 z-10 translate-y-0" : "opacity-0 z-0 pointer-events-none translate-y-1")}>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-growth)]" />
              Client Impact
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">{impact}</p>
          </div>
        </div>
      </div>
    </article>
  );

  if (href) {
    return (
      <Link href={href} className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(11,95,165,0.45)] focus-visible:ring-offset-4 rounded-[28px]">
        {card}
      </Link>
    );
  }

  return <div className="group h-full">{card}</div>;
}
