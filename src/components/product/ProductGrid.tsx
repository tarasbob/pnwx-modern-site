import CategoryCard from "./CategoryCard";

interface ProductGridItem {
  name: string;
  description: string;
  href: string;
  itemCount?: number;
  image?: string;
  accentColor?: string;
}

interface ProductGridProps {
  items: ProductGridItem[];
}

export default function ProductGrid({ items }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <CategoryCard
          key={item.href}
          name={item.name}
          description={item.description}
          href={item.href}
          itemCount={item.itemCount}
          image={item.image}
          accentColor={item.accentColor}
        />
      ))}
    </div>
  );
}
