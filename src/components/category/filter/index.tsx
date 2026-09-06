"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { activeCategories } from "@/data";

import styles from "./filter.module.scss";

export function CategoryFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeCategory = searchParams.get("category") ?? "all";
  const activeSubcategory = searchParams.get("sub") ?? "all";

  const activeCategoryData = activeCategories.find(
    c => c.slug === activeCategory
  );
  const subcategories = activeCategoryData?.subcategories ?? [];

  function updateParams(next: { category?: string; sub?: string }) {
    const params = new URLSearchParams(searchParams.toString());

    if (next.category !== undefined) {
      if (next.category === "all") params.delete("category");
      else params.set("category", next.category);
      params.delete("sub"); // reset subcategory whenever the main category changes
    }

    if (next.sub !== undefined) {
      if (next.sub === "all") params.delete("sub");
      else params.set("sub", next.sub);
    }

    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  return (
    <div className={styles.filters}>
      <div className={styles.row}>
        <Pill
          label="All"
          active={activeCategory === "all"}
          onClick={() => updateParams({ category: "all" })}
        />
        {activeCategories.map(category => (
          <Pill
            key={category.slug}
            label={category.name}
            active={activeCategory === category.slug}
            onClick={() => updateParams({ category: category.slug })}
          />
        ))}
      </div>

      {subcategories.length > 1 && (
        <div className={`${styles.row} ${styles.subRow}`}>
          <Pill
            label="All"
            small
            active={activeSubcategory === "all"}
            onClick={() => updateParams({ sub: "all" })}
          />
          {subcategories.map(sub => (
            <Pill
              key={sub.slug}
              label={sub.name}
              small
              active={activeSubcategory === sub.slug}
              onClick={() => updateParams({ sub: sub.slug })}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function Pill({
  label,
  active,
  small,
  onClick,
}: {
  label: string;
  active: boolean;
  small?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.pill} ${small ? styles.small : ""}`}
      aria-pressed={active}>
      {active && (
        <motion.span
          layoutId={small ? "activeSubPill" : "activePill"}
          className={styles.activeBg}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
      <span className={styles.label}>{label}</span>
    </button>
  );
}
