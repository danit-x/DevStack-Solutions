"use client";

import { useState } from "react";
import { ArrowRight, Check, RefreshCcw } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { cn } from "@/lib/utils";
import { leadFilterSteps, whatsappHref } from "@/lib/site";

export function SolutionFinder() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const handleOptionSelect = (stepId: string, value: string) => {
    const newAnswers = { ...answers, [stepId]: value };
    setAnswers(newAnswers);

    if (currentStepIndex < leadFilterSteps.length - 1) {
      setTimeout(() => {
        setCurrentStepIndex(currentStepIndex + 1);
      }, 350);
    } else {
      setTimeout(() => {
        setShowResult(true);
      }, 450);
    }
  };

  const currentStep = leadFilterSteps[currentStepIndex];

  const getRecommendedPackage = () => {
    if (answers.budget === "starter") return { name: "Starter", price: "30,000 LKR", color: "from-orange-50 via-rose-50/50 to-white", badge: "Fast Launch", border: "border-orange-100" };
    if (answers.budget === "pro") return { name: "Pro", price: "99,000 LKR", color: "from-sky-50 via-indigo-50/50 to-white", badge: "Custom Build", border: "border-sky-100" };
    return { name: "Standard", price: "50,000 LKR", color: "from-emerald-50 via-teal-50/50 to-white", badge: "Most Popular", border: "border-emerald-100" };
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStepIndex(0);
    setShowResult(false);
  };

  const recommendation = getRecommendedPackage();

  return (
    <div className="panel mx-auto max-w-2xl overflow-hidden p-6 sm:p-10 relative">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-100/50">
        {!showResult && (
          <div 
            className="h-full bg-gradient-to-r from-[var(--brand-trust)] to-[var(--brand-growth)] transition-all duration-700 ease-out" 
            style={{ width: `${((currentStepIndex + 1) / leadFilterSteps.length) * 100}%` }}
          />
        )}
      </div>

      {!showResult && currentStep ? (
        <div key={currentStep.id} className="animate-in fade-in slide-in-from-right-8 duration-500 fill-mode-forwards">
          <p className="text-xs font-bold text-[var(--brand-trust)] mb-3 uppercase tracking-[0.2em]">
            Step {currentStepIndex + 1} of {leadFilterSteps.length}
          </p>
          <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-8 tracking-tight">
            {currentStep.question}
          </h3>
          <div className="grid gap-3 sm:gap-4">
            {currentStep.options.map((opt) => {
              const isSelected = answers[currentStep.id] === opt.value;
              return (
                <button
                  key={opt.value}
                  onClick={() => handleOptionSelect(currentStep.id, opt.value)}
                  className={cn(
                    "group flex w-full items-center justify-between p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300",
                    isSelected 
                      ? "border-[var(--brand-trust)] bg-[rgba(11,95,165,0.03)] shadow-sm shadow-[rgba(11,95,165,0.08)] ring-1 ring-[var(--brand-trust)]" 
                      : "border-slate-200 bg-white hover:border-[rgba(11,95,165,0.3)] hover:bg-slate-50 hover:shadow-sm"
                  )}
                >
                  <span className={cn("text-base sm:text-lg font-medium transition-colors", isSelected ? "text-[var(--brand-trust)]" : "text-slate-700 group-hover:text-slate-900")}>
                    {opt.label}
                  </span>
                  <div className={cn(
                    "h-6 w-6 rounded-full border flex items-center justify-center transition-all duration-300 transform",
                    isSelected 
                      ? "border-[var(--brand-trust)] bg-[var(--brand-trust)] text-white scale-110" 
                      : "border-slate-300 bg-transparent group-hover:border-[var(--brand-trust)] group-hover:bg-[rgba(11,95,165,0.05)]"
                  )}>
                    {isSelected ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : null}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ) : showResult ? (
        <div className="animate-in zoom-in-95 fade-in duration-700 fill-mode-forwards text-center py-4">
          <div className="mx-auto h-20 w-20 bg-[linear-gradient(135deg,rgba(15,159,118,0.15),rgba(15,159,118,0.05))] text-[var(--brand-growth)] rounded-full flex items-center justify-center mb-8 shadow-sm">
            <Check className="h-10 w-10 animate-in zoom-in delay-200 duration-500" strokeWidth={2.5} />
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">Our Recommendation</p>
          
          <div className={cn(
            "relative rounded-3xl border bg-gradient-to-br p-8 shadow-sm mb-8 max-w-md mx-auto transition-all hover:shadow-md",
            recommendation.color,
            recommendation.border
          )}>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.8),transparent_80%)] rounded-3xl" />
            <div className="relative">
              <div className="inline-block rounded-full border border-white/50 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-800 mb-5 backdrop-blur-sm shadow-sm">
                {recommendation.badge}
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight">{recommendation.name}</h2>
              <p className="text-xl font-medium text-slate-700">{recommendation.price}</p>
            </div>
          </div>

          <p className="text-base text-slate-600 mb-8 max-w-md mx-auto leading-relaxed">
            Based on your answers, this package gives you the features you need right now to achieve your goal.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ButtonLink href={whatsappHref} external size="large" className="w-full sm:w-auto overflow-hidden relative group">
              <span className="relative z-10 flex items-center">
                Discuss this package
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </ButtonLink>
            <button 
              onClick={handleReset}
              className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors py-2.5 px-5 rounded-xl hover:bg-slate-100"
            >
              <RefreshCcw className="h-4 w-4" /> Start Over
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
