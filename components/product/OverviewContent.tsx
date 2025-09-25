export default function OverviewContent() {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg">
      <p className="text-gray-600 mb-4">
        A brightening, hydrating under-eye serum with a stainless-steel cooling roller for clean, targeted application. 
        The lightweight gel-serum absorbs quickly without pilling and is fragrance-free, suitable for all skin types.
      </p>
      
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
        <div>
          <span className="font-medium">Size:</span> 10ml / 0.35 fl oz
        </div>
        <div>
          <span className="font-medium">Texture:</span> Lightweight gel-serum
        </div>
        <div>
          <span className="font-medium">Skin Types:</span> All skin types
        </div>
        <div>
          <span className="font-medium">Packaging:</span> Recyclable glass
        </div>
      </div>
    </div>
  );
}
