import {
  Footer,
  MovieCard,
  nav_default
} from "/build/_shared/chunk-Q4AQA7Z3.js";
import "/build/_shared/chunk-LWKOUYGI.js";
import "/build/_shared/chunk-K362QQA7.js";
import {
  createHotContext
} from "/build/_shared/chunk-VWTBLPOP.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/moviesPage.jsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/moviesPage.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/moviesPage.jsx"
  );
  import.meta.hot.lastModified = "1742614890383.4385";
}
function MoviesPage() {
  _s();
  const [movies, setMovies] = (0, import_react.useState)([]);
  const [page, setPage] = (0, import_react.useState)(1);
  const [hasMore, setHasMore] = (0, import_react.useState)(true);
  const limit = 8;
  (0, import_react.useEffect)(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/movies?page=${page}&limit=${limit}&sortBy=avg_rating&order=DESC`);
        const data = await res.json();
        setMovies((prev) => {
          const newMovieIds = new Set(prev.map((m) => m.id));
          const filtered = data.movies.filter((m) => !newMovieIds.has(m.id));
          return [...prev, ...filtered];
        });
        if (data.movies.length < limit || page >= data.totalPages) {
          setHasMore(false);
        }
      } catch (err) {
        console.error("Failed to fetch movies:", err);
      }
    };
    fetchMovies();
  }, [page]);
  const handleLoadMore = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen w-full flex flex-col items-center bg-[#121212] text-white", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(nav_default, {}, void 0, false, {
      fileName: "app/routes/moviesPage.jsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-[95%] py-10 mt-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl py-5 font-bold", children: "All Movies" }, void 0, false, {
        fileName: "app/routes/moviesPage.jsx",
        lineNumber: 63,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", children: movies.map((movie) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MovieCard, { id: movie.id, title: movie.title, imageUrl: movie.poster_url, releaseDate: movie.release_date, rating: movie.avg_rating }, movie.id, false, {
        fileName: "app/routes/moviesPage.jsx",
        lineNumber: 65,
        columnNumber: 32
      }, this)) }, void 0, false, {
        fileName: "app/routes/moviesPage.jsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      hasMore && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center mt-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: handleLoadMore, className: "px-6 py-2 bg-[#B8860B] text-white rounded-md hover:bg-yellow-700", children: "Load More" }, void 0, false, {
        fileName: "app/routes/moviesPage.jsx",
        lineNumber: 69,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/moviesPage.jsx",
        lineNumber: 68,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/moviesPage.jsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
      fileName: "app/routes/moviesPage.jsx",
      lineNumber: 75,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/moviesPage.jsx",
    lineNumber: 59,
    columnNumber: 10
  }, this);
}
_s(MoviesPage, "MRBCy2EgEifo7kSIG+ZAVCQXWxQ=");
_c = MoviesPage;
var _c;
$RefreshReg$(_c, "MoviesPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  MoviesPage as default
};
//# sourceMappingURL=/build/routes/moviesPage-ZNI7TWNA.js.map
