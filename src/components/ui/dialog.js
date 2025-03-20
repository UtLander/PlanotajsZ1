export function Dialog({ open, onOpenChange, children }) {
    return open ? (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-4 rounded-md shadow-md">{children}</div>
        <button onClick={() => onOpenChange(false)} className="absolute top-2 right-2 text-gray-600">
          ✖
        </button>
      </div>
    ) : null;
  }
  
  export function DialogContent({ children }) {
    return <div>{children}</div>;
  }
  
  export function DialogTitle({ children }) {
    return <h2 className="text-lg font-bold">{children}</h2>;
  }
  