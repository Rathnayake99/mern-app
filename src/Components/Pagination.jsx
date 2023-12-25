import _ from "lodash";

const Pagination = (props) => {
  const { itemCount, pageSize } = props;
  const pagesCount = Math.ceil(itemCount / pageSize);

  const pages = _.range(1, pagesCount + 1);

  return (
    <nav aria-label="Page navigation example  ">
      <ul className="inline-flex -space-x-px text-sm">
        {pages.map((page) => (
          <li key={page}>
            <button
              onClick={() => props.onPageChange(page)}
              className="rounded-lg flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-
          gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
