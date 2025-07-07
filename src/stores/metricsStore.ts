import { MetricsSchema } from "@/schemas/metricsSchema";
import { create } from "zustand";

type MetricsState = {
  metrics: MetricsSchema[];
  addMetrics: (newMetrics: MetricsSchema) => void;
};

export const useMetricsStore = create<MetricsState>((set) => ({
  metrics: [],
  addMetrics: (newMetrics) =>
    set((state) => ({
      metrics: [...state.metrics, newMetrics],
    })),
}));
