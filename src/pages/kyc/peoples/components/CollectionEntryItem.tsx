function CollectionEntryItem() {
  return (
    <div className="flex gap-4 items-center justify-end">
      <div className="flex w-full justify-end gap-2 items-center border border-gray-800 pl-2 rounded-r bg-sky-950/40">
        <span className="w-1/2">
          {`Saving Account | Jone Doe (50725) | Loan | Personal`}
        </span>
        <div className="w-1/2">
          <input
            type="text"
            className="rounded-sm w-full py-1 border-gray-700 bg-zinc-900 shadow-sm focus:border-gray-800 focus:ring focus:ring-gray-800 focus:ring-opacity-50 text-gray-300"
          />
        </div>
      </div>
      <div className="w-8 hover:text-yellow-100 hover:cursor-pointer hover:scale-110 transition-all">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </div>
    </div>
  );
}

export default CollectionEntryItem;
