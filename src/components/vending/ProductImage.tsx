import { useState } from "react";
import { cn } from "@/lib/utils";
import type { Product } from "@/data/products";

export function ProductImage({
  product,
  className,
  imgClassName,
}: {
  product: Product;
  className?: string;
  imgClassName?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "flex items-center justify-center rounded-2xl bg-muted px-3 text-center",
          className,
        )}
      >
        <span className="text-xs font-semibold text-muted-foreground">{product.name}</span>
      </div>
    );
  }

  return (
    <img
      src={product.image}
      alt={`${product.name} ${product.categoryLabel.toLowerCase()} pack`}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={cn("h-full w-full object-contain", imgClassName, className)}
    />
  );
}
