import {
  useLoaderData
} from "/build/_shared/chunk-LWKOUYGI.js";
import {
  Button,
  Input,
  Label
} from "/build/_shared/chunk-7JHAVDAV.js";
import "/build/_shared/chunk-B43JI2TA.js";
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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// app/components/Navbar.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Navbar.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Navbar.jsx"
  );
  import.meta.hot.lastModified = "1742583656108.8267";
}
var Navbar = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-[95%] h-[90px] flex justify-between items-center rounded-xl opacity-[70%] z-10 bg-[#272727] fixed top-5 px-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-[30%] h-[90%] flex flex-col justify-center  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center  w-full h-[100px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-semibold text-white text-xl ml-5", children: "CMBD" }, void 0, false, {
      fileName: "app/components/Navbar.jsx",
      lineNumber: 30,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/Navbar.jsx",
      lineNumber: 28,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/Navbar.jsx",
      lineNumber: 26,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-[30%] h-[90%] flex flex-row justify-center items-center text-white font-medium font-sm " }, void 0, false, {
      fileName: "app/components/Navbar.jsx",
      lineNumber: 32,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-[30%] h-[90%] flex  justify-end items-center  " }, void 0, false, {
      fileName: "app/components/Navbar.jsx",
      lineNumber: 35,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Navbar.jsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
};
_c = Navbar;
var Navbar_default = Navbar;
var _c;
$RefreshReg$(_c, "Navbar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/dashboard.jsx
var import_node = __toESM(require_node(), 1);

// app/components/movie-form.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/movie-form.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/movie-form.jsx"
  );
  import.meta.hot.lastModified = "1742615356772.053";
}
function MovieForm() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "max-w-md mx-auto p-6 bg-[#272727] shadow-md rounded-lg", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-2xl font-bold mb-6", children: "Add a New Movie" }, void 0, false, {
      fileName: "app/components/movie-form.jsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { htmlFor: "movieName", children: "Movie Name" }, void 0, false, {
          fileName: "app/components/movie-form.jsx",
          lineNumber: 30,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { id: "movieName", type: "text", placeholder: "Enter movie name" }, void 0, false, {
          fileName: "app/components/movie-form.jsx",
          lineNumber: 31,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/movie-form.jsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { htmlFor: "posterUrl", children: "Poster URL" }, void 0, false, {
          fileName: "app/components/movie-form.jsx",
          lineNumber: 34,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { id: "posterUrl", type: "text", placeholder: "Enter poster URL" }, void 0, false, {
          fileName: "app/components/movie-form.jsx",
          lineNumber: 35,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/movie-form.jsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { htmlFor: "description", children: "Description" }, void 0, false, {
          fileName: "app/components/movie-form.jsx",
          lineNumber: 38,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { id: "description", type: "text", placeholder: "Enter movie description" }, void 0, false, {
          fileName: "app/components/movie-form.jsx",
          lineNumber: 39,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/movie-form.jsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { htmlFor: "releaseDate", children: "Release Date" }, void 0, false, {
          fileName: "app/components/movie-form.jsx",
          lineNumber: 42,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { id: "releaseDate", type: "date" }, void 0, false, {
          fileName: "app/components/movie-form.jsx",
          lineNumber: 43,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/movie-form.jsx",
        lineNumber: 41,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Label, { htmlFor: "rating", children: "Rating" }, void 0, false, {
          fileName: "app/components/movie-form.jsx",
          lineNumber: 46,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { id: "rating", type: "number", placeholder: "Enter movie rating" }, void 0, false, {
          fileName: "app/components/movie-form.jsx",
          lineNumber: 47,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/movie-form.jsx",
        lineNumber: 45,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { type: "submit", className: "w-full text-[#CC9A1A] border-none bg-[#FFE38C]", children: "Add Movie" }, void 0, false, {
        fileName: "app/components/movie-form.jsx",
        lineNumber: 49,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/movie-form.jsx",
      lineNumber: 28,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/movie-form.jsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/movie-form.jsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c2 = MovieForm;
var _c2;
$RefreshReg$(_c2, "MovieForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/dashboard.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/dashboard.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/dashboard.jsx"
  );
  import.meta.hot.lastModified = "1742583656115.5356";
}
var Dashboard = () => {
  _s();
  const movieList = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-[#121212] py-24 flex flex-col justify-center items-center h-[100%] w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Navbar_default, {}, void 0, false, {
      fileName: "app/routes/dashboard.jsx",
      lineNumber: 68,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-[95%] h-auto mt-10 text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-xl font-semibold mb-4", children: "Add a New Movie" }, void 0, false, {
          fileName: "app/routes/dashboard.jsx",
          lineNumber: 72,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MovieForm, {}, void 0, false, {
          fileName: "app/routes/dashboard.jsx",
          lineNumber: 73,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.jsx",
        lineNumber: 71,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-xl font-semibold mb-4", children: "Movie List" }, void 0, false, {
          fileName: "app/routes/dashboard.jsx",
          lineNumber: 76,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "space-y-4", children: movieList.map((movie) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "p-4 bg-[#272727] rounded-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center space-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: movie.posterUrl, alt: movie.name, className: "w-20 h-30 object-cover rounded" }, void 0, false, {
            fileName: "app/routes/dashboard.jsx",
            lineNumber: 80,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-lg font-semibold", children: movie.name }, void 0, false, {
              fileName: "app/routes/dashboard.jsx",
              lineNumber: 82,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-sm text-gray-600", children: movie.description }, void 0, false, {
              fileName: "app/routes/dashboard.jsx",
              lineNumber: 83,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-sm text-gray-600", children: [
              "Release Date: ",
              movie.releaseDate
            ] }, void 0, true, {
              fileName: "app/routes/dashboard.jsx",
              lineNumber: 84,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-sm text-gray-600", children: [
              "Rating: ",
              movie.rating
            ] }, void 0, true, {
              fileName: "app/routes/dashboard.jsx",
              lineNumber: 85,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/dashboard.jsx",
            lineNumber: 81,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.jsx",
          lineNumber: 79,
          columnNumber: 37
        }, this) }, movie.id, false, {
          fileName: "app/routes/dashboard.jsx",
          lineNumber: 78,
          columnNumber: 53
        }, this)) }, void 0, false, {
          fileName: "app/routes/dashboard.jsx",
          lineNumber: 77,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.jsx",
        lineNumber: 75,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.jsx",
      lineNumber: 70,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard.jsx",
      lineNumber: 69,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard.jsx",
    lineNumber: 67,
    columnNumber: 10
  }, this);
};
_s(Dashboard, "JkK+BZSYq3i+yc73vjlJT3Rzyu4=", false, function() {
  return [useLoaderData];
});
_c3 = Dashboard;
var dashboard_default = Dashboard;
var _c3;
$RefreshReg$(_c3, "Dashboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  dashboard_default as default
};
//# sourceMappingURL=/build/routes/dashboard-5DX34EJ7.js.map
