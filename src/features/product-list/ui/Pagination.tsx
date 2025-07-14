interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}
export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <div className="mt-4 flex justify-center">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="mx-1 cursor-pointer rounded-md bg-gray-200 px-4 py-2 disabled:bg-gray-400"
      >
        &lt;
      </button>

      <span className={`mx-1 cursor-pointer rounded-md px-4 py-2`}>{currentPage}</span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="mx-1 cursor-pointer rounded-md bg-gray-200 px-4 py-2 disabled:bg-gray-400"
      >
        &gt;
      </button>
    </div>
  );
}
