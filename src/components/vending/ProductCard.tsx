import { useState } from "react";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductImage } from "./ProductImage";
import type { Product } from "@/data/products";

export function ProductCard({
  product,
  onOpen,
  onAdd,
}: {
  product: Product;
  onOpen: (product: Product) => void;
  onAdd: (product: Product, qty: number) => void;
}) {
  const [qty, setQty] = useState(1);
  const soldOut = product.stock <= 0;
  const lowStock = !soldOut && product.stock <= 3;

  return (
    <article className="slot-card group flex flex-col rounded-3xl p-3 hover:-translate-y-1">
      <div className="flex items-center justify-between px-1 pb-2">
        <span className="rounded-full bg-machine px-2.5 py-1 font-display text-[11px] font-semibold tracking-widest text-machine-foreground">
          {product.slot}
        </span>
        {soldOut ? (
          <span className="rounded-full bg-destructive px-2.5 py-1 text-[11px] font-semibold text-destructive-foreground">
            SOLD OUT
          </span>
        ) : lowStock ? (
          <span className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold text-accent-foreground">
            LOW STOCK · {product.stock}
          </span>
        ) : (
          <span className="text-[11px] font-medium text-muted-foreground">
            {product.stock} left
          </span>
        )}
      </div>

      <button
        type="button"
        onClick={() => onOpen(product)}
        aria-label={`View details for ${product.name}`}
        className="product-frame flex h-40 items-center justify-center rounded-3xl p-3 sm:h-44"
      >
        <ProductImage
          product={product}
          imgClassName="transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-[1.03]"
        />
      </button>

      <div className="flex flex-1 flex-col px-1 pt-3">
        <h3 className="line-clamp-2 font-display text-sm font-semibold leading-snug text-card-foreground">
          {product.name}
        </h3>
        <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">
          {product.brand} · {product.flavour}
        </p>

        <div className="mt-3 flex items-center justify-between">
          <span className="font-display text-xl font-bold text-primary">₹{product.price}</span>
          <div className="flex items-center gap-1 rounded-full bg-secondary p-1">
            <Button
              type="button"
              size="icon"
              variant="ghost"
              aria-label={`Decrease quantity of ${product.name}`}
              disabled={soldOut || qty <= 1}
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="size-9 rounded-full"
            >
              <Minus className="size-4" />
            </Button>
            <span aria-live="polite" className="w-6 text-center text-sm font-semibold">
              {qty}
            </span>
            <Button
              type="button"
              size="icon"
              variant="ghost"
              aria-label={`Increase quantity of ${product.name}`}
              disabled={soldOut || qty >= product.stock}
              onClick={() => setQty((q) => Math.min(product.stock, q + 1))}
              className="size-9 rounded-full"
            >
              <Plus className="size-4" />
            </Button>
          </div>
        </div>

        <Button
          type="button"
          disabled={soldOut}
          onClick={() => onAdd(product, qty)}
          className="mt-3 h-12 w-full rounded-2xl cta-gradient font-display text-sm font-semibold tracking-wide shadow-sm hover:opacity-95"
        >
          <ShoppingCart className="size-4" />
          {soldOut ? "SOLD OUT" : "ADD TO TROLLEY"}
        </Button>
      </div>
    </article>
  );
}
