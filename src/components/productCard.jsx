import StarRating from "./starRating";

export default function ProductCard({ product }) {
  // Calculate the price before the discount
  const originalPrice =
    product.discountPercentage > 0
      ? product.price / (1 - product.discountPercentage / 100)
      : product.price;

  // count of reviews
  const reviewsCount = product.reviews?.length || 0;

  return (
    <div className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden bg-slate-50 aspect-square">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.discountPercentage > 0 && (
            <span className="px-2 py-0.5 bg-rose-500 text-white text-xs font-semibold rounded-lg">
              -{Math.round(product.discountPercentage)}%
            </span>
          )}

          {product.stock <= 5 && (
            <span className="px-2 py-0.5 bg-amber-500 text-white text-xs font-semibold rounded-lg">
              Low stock
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:scale-110 transition-transform">
          <svg
            className="w-4 h-4"
            fill="#ef4444"
            stroke="#94a3b8"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>

        {/* Quick Add */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-3">
          <button className="w-full py-2.5 bg-[#0f172a] text-white text-sm font-medium rounded-xl hover:bg-primary transition-colors">
            Quick Add
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Category */}
        <p className="text-xs text-primary font-medium uppercase tracking-wider mb-1">
          {product.category}
        </p>

        {/* Title */}
        <button className="text-sm font-semibold text-[#0f172a] hover:text-primary-hover text-left transition-colors line-clamp-2 mb-2 leading-snug">
          {product.title}
        </button>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <StarRating rating={product.rating} size="sm" />

          <span className="text-xs text-slate-400">({reviewsCount})</span>
        </div>

        {/* Price */}
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            {/* Current Price */}
            <span className="text-base font-bold text-[#0f172a]">
              ${product.price.toFixed(2)}
            </span>

            {/* Original Price */}
            {product.discountPercentage > 0 && (
              <span className="text-xs text-slate-400 line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Add */}
          <button className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-primary transition-colors shrink-0">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
