import {
  Footer,
  MovieCard,
  nav_default
} from "/build/_shared/chunk-Q4AQA7Z3.js";
import "/build/_shared/chunk-LWKOUYGI.js";
import {
  Star
} from "/build/_shared/chunk-K362QQA7.js";
import {
  createHotContext
} from "/build/_shared/chunk-VWTBLPOP.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.jsx"
  );
  import.meta.hot.lastModified = "1742603834647.8315";
}
var meta = () => [{
  title: "CMBD"
}, {
  name: "description",
  content: "Welcome to CMBD!"
}];
function Index() {
  const featuredMovies = [{
    id: "1",
    title: "Inception",
    imageUrl: "https://via.placeholder.com/300x450",
    releaseDate: "2010-07-16",
    rating: 8.8
  }, {
    id: "2",
    title: "Interstellar",
    imageUrl: "https://via.placeholder.com/300x450",
    releaseDate: "2014-11-07",
    rating: 8.6
  }, {
    id: "3",
    title: "The Dark Knight",
    imageUrl: "https://via.placeholder.com/300x450",
    releaseDate: "2008-07-18",
    rating: 9
  }, {
    id: "4",
    title: "The Matrix",
    imageUrl: "https://via.placeholder.com/300x450",
    releaseDate: "1999-03-31",
    rating: 8.7
  }];
  const recommendedMovies = [{
    id: "2",
    title: "Interstellar",
    imageUrl: "https://via.placeholder.com/300x450",
    releaseDate: "2014-11-07",
    rating: 8.6
  }, {
    id: "3",
    title: "The Dark Knight",
    imageUrl: "https://via.placeholder.com/300x450",
    releaseDate: "2008-07-18",
    rating: 9
  }, {
    id: "12",
    title: "Titanic",
    imageUrl: "https://via.placeholder.com/300x450",
    releaseDate: "1997-12-19",
    rating: 7.8
  }, {
    id: "13",
    title: "Jurassic Park",
    imageUrl: "https://via.placeholder.com/300x450",
    releaseDate: "1993-06-11",
    rating: 8.1
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen w-full flex flex-col justify-center items-center bg-[#121212]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(nav_default, {}, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 84,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-[95%] h-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-screen flex flex-col justify-center items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-[95%] h-[500px] flex justify-between z-10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-[50%] h-full  flex flex-col justify-center items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "./moana.jpeg", className: " absol inset-0 h-[300px] w-[500px] rounded-lg object-cover ", alt: "" }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 89,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 88,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-[50%] h-full  flex flex-col justify-center text-white text-left", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-4xl py-5 font-bold", children: "Moana" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 92,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-x-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, {}, void 0, false, {
              fileName: "app/routes/_index.jsx",
              lineNumber: 94,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, {}, void 0, false, {
              fileName: "app/routes/_index.jsx",
              lineNumber: 95,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, {}, void 0, false, {
              fileName: "app/routes/_index.jsx",
              lineNumber: 96,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, {}, void 0, false, {
              fileName: "app/routes/_index.jsx",
              lineNumber: 97,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, {}, void 0, false, {
              fileName: "app/routes/_index.jsx",
              lineNumber: 98,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 93,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm py-5 font-light", children: "Eddie and venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into  a devastating decision that will bring the curtains down on... " }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 100,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "text-[#CC9A1A] bg-[#FFE38C] w-[150px] rounded-3xl h-[50px]", children: "Watch now" }, void 0, false, {
            fileName: "app/routes/_index.jsx",
            lineNumber: 101,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.jsx",
          lineNumber: 91,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 87,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "./moana.jpeg", className: "blur-xs z-0 absolute inset-0 h-full w-full object-cover ", alt: "" }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 106,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 86,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 85,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-black bg-opacity-70 w-full flex flex-col gap-8 p-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl py-5 text-white font-bold", children: "Featured Today" }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 113,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", children: featuredMovies.map((movie) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MovieCard, { ...movie }, movie.id, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 115,
        columnNumber: 40
      }, this)) }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 114,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 112,
      columnNumber: 6
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-[95%] py-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl py-5 text-white font-bold", children: "Recommended Movies" }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 123,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", children: recommendedMovies.map((movie) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MovieCard, { ...movie }, movie.id, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 125,
        columnNumber: 43
      }, this)) }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 124,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 122,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 129,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 83,
    columnNumber: 10
  }, this);
}
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-ZWHTOLSZ.js.map
