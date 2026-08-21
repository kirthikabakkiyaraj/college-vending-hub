import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "@/data/products";

export type TrolleyLine = {
  product: Product;
  qty: number;
};

type TrolleyContextValue = {
  lines: TrolleyLine[];
  count: number;
  total: number;
  add: (product: Product, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
};

const TrolleyContext = createContext<TrolleyContextValue | null>(null);

const STORAGE_KEY = "vending.trolley.v1";

export function TrolleyProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<TrolleyLine[]>([]);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw) as TrolleyLine[]);
    } catch {
      /* ignore corrupted storage */
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* storage unavailable */
    }
  }, [lines]);

  const add = useCallback((product: Product, qty = 1) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.product.id === product.id);
      if (existing) {
        return prev.map((l) =>
          l.product.id === product.id
            ? { ...l, qty: Math.min(product.stock, l.qty + qty) }
            : l,
        );
      }
      return [...prev, { product, qty: Math.min(product.stock, qty) }];
    });
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setLines((prev) =>
      prev
        .map((l) =>
          l.product.id === id
            ? { ...l, qty: Math.max(0, Math.min(l.product.stock, qty)) }
            : l,
        )
        .filter((l) => l.qty > 0),
    );
  }, []);

  const remove = useCallback((id: string) => {
    setLines((prev) => prev.filter((l) => l.product.id !== id));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const value = useMemo<TrolleyContextValue>(() => {
    const count = lines.reduce((n, l) => n + l.qty, 0);
    const total = lines.reduce((n, l) => n + l.qty * l.product.price, 0);
    return { lines, count, total, add, setQty, remove, clear };
  }, [lines, add, setQty, remove, clear]);

  return <TrolleyContext.Provider value={value}>{children}</TrolleyContext.Provider>;
}

export function useTrolley() {
  const ctx = useContext(TrolleyContext);
  if (!ctx) throw new Error("useTrolley must be used inside <TrolleyProvider>");
  return ctx;
}
