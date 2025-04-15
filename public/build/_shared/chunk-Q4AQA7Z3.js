import {
  Link
} from "/build/_shared/chunk-LWKOUYGI.js";
import {
  Search
} from "/build/_shared/chunk-K362QQA7.js";
import {
  createHotContext
} from "/build/_shared/chunk-VWTBLPOP.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/movie-card.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/movie-card.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/movie-card.jsx"
  );
  import.meta.hot.lastModified = "1742617320346.476";
}
function MovieCard({
  id,
  title,
  imageUrl,
  releaseDate,
  rating
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/movies/${id}`, className: "block group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#272727] w-[300px] h-[400px]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: imageUrl || "/godzilla.jpeg", alt: title, className: "w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300", onError: (e) => {
      e.target.onerror = null;
      e.target.src = "/godzilla.jpeg";
    } }, void 0, false, {
      fileName: "app/components/movie-card.jsx",
      lineNumber: 32,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-white text-xl font-semibold truncate", children: title }, void 0, false, {
        fileName: "app/components/movie-card.jsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-300 text-sm", children: [
        "Release: ",
        new Date(releaseDate).toLocaleDateString()
      ] }, void 0, true, {
        fileName: "app/components/movie-card.jsx",
        lineNumber: 40,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-yellow-400 text-sm", children: [
        "\u2B50 ",
        typeof rating === "number" ? rating.toFixed(1) : "N/A"
      ] }, void 0, true, {
        fileName: "app/components/movie-card.jsx",
        lineNumber: 44,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/movie-card.jsx",
        lineNumber: 43,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/movie-card.jsx",
      lineNumber: 38,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/movie-card.jsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/movie-card.jsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c = MovieCard;
var _c;
$RefreshReg$(_c, "MovieCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/nav.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/nav.jsx"
  );
  import.meta.hot.lastModified = "1742615770087.5898";
}
var nav = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-[80px] w-full flex flex-col justify-center items-center absolute top-0 z-10 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-[95%] h-[95%] flex justify-between items-center ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-[19%] ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-white font-bold text-3xl", children: "CMBD" }, void 0, false, {
      fileName: "app/components/nav.jsx",
      lineNumber: 21,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/nav.jsx",
      lineNumber: 20,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-[60%] flex justify-between ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Search, {}, void 0, false, {
        fileName: "app/components/nav.jsx",
        lineNumber: 24,
        columnNumber: 17
      }, this),
      "  ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { className: "text-[#CC9A1A] border-none bg-[#FFE38C]  w-[350px] h-[40px] rounded-xl ", placeholder: "Search for movies or tv series", type: "Search" }, void 0, false, {
        fileName: "app/components/nav.jsx",
        lineNumber: 24,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "gap-x-3 flex text-white justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/moviesPage", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: "Movies" }, void 0, false, {
          fileName: "app/components/nav.jsx",
          lineNumber: 27,
          columnNumber: 46
        }, this),
        " "
      ] }, void 0, true, {
        fileName: "app/components/nav.jsx",
        lineNumber: 27,
        columnNumber: 24
      }, this) }, void 0, false, {
        fileName: "app/components/nav.jsx",
        lineNumber: 25,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/nav.jsx",
      lineNumber: 23,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-[19%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "submit", className: " bg-black w-[100px] h-[50px]  text-white relative left-[180px] rounded-2xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/login", children: "  Login" }, void 0, false, {
      fileName: "app/components/nav.jsx",
      lineNumber: 33,
      columnNumber: 23
    }, this) }, void 0, false, {
      fileName: "app/components/nav.jsx",
      lineNumber: 32,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/nav.jsx",
      lineNumber: 31,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/nav.jsx",
    lineNumber: 19,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/nav.jsx",
    lineNumber: 18,
    columnNumber: 9
  }, this);
};
var nav_default = nav;

// app/components/footer.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/footer.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/footer.jsx"
  );
  import.meta.hot.lastModified = "1742615724658.1782";
}
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("footer", { className: "bg-gray-900 text-white py-8 mt-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mb-6 md:mb-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-xl font-bold mb-4", children: "About Us" }, void 0, false, {
          fileName: "app/components/footer.jsx",
          lineNumber: 29,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-gray-400", children: "We are a movie enthusiast platform dedicated to bringing you the latest and greatest in cinema. Explore, discover, and enjoy!" }, void 0, false, {
          fileName: "app/components/footer.jsx",
          lineNumber: 30,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/footer.jsx",
        lineNumber: 28,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mb-6 md:mb-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-xl font-bold mb-4", children: "Quick Links" }, void 0, false, {
          fileName: "app/components/footer.jsx",
          lineNumber: 37,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/", className: "text-gray-400 hover:text-white transition-colors duration-300", children: "Home" }, void 0, false, {
            fileName: "app/components/footer.jsx",
            lineNumber: 40,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/footer.jsx",
            lineNumber: 39,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/movies", className: "text-gray-400 hover:text-white transition-colors duration-300", children: "Movies" }, void 0, false, {
            fileName: "app/components/footer.jsx",
            lineNumber: 45,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/footer.jsx",
            lineNumber: 44,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/contact", className: "text-gray-400 hover:text-white transition-colors duration-300", children: "Contact" }, void 0, false, {
            fileName: "app/components/footer.jsx",
            lineNumber: 55,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/footer.jsx",
            lineNumber: 54,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/footer.jsx",
          lineNumber: 38,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/footer.jsx",
        lineNumber: 36,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mb-6 md:mb-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-xl font-bold mb-4", children: "Follow Us" }, void 0, false, {
          fileName: "app/components/footer.jsx",
          lineNumber: 64,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex space-x-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://twitter.com", target: "_blank", rel: "noopener noreferrer", className: "text-gray-400 hover:text-white transition-colors duration-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z" }, void 0, false, {
            fileName: "app/components/footer.jsx",
            lineNumber: 68,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/footer.jsx",
            lineNumber: 67,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/footer.jsx",
            lineNumber: 66,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://facebook.com", target: "_blank", rel: "noopener noreferrer", className: "text-gray-400 hover:text-white transition-colors duration-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.733 0 1.325-.592 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" }, void 0, false, {
            fileName: "app/components/footer.jsx",
            lineNumber: 73,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/footer.jsx",
            lineNumber: 72,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/footer.jsx",
            lineNumber: 71,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://instagram.com", target: "_blank", rel: "noopener noreferrer", className: "text-gray-400 hover:text-white transition-colors duration-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z" }, void 0, false, {
            fileName: "app/components/footer.jsx",
            lineNumber: 78,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/footer.jsx",
            lineNumber: 77,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/components/footer.jsx",
            lineNumber: 76,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/footer.jsx",
          lineNumber: 65,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/footer.jsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-xl font-bold mb-4", children: "Newsletter" }, void 0, false, {
          fileName: "app/components/footer.jsx",
          lineNumber: 86,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-gray-400 mb-4", children: "Subscribe to our newsletter to get the latest updates on movies and more." }, void 0, false, {
          fileName: "app/components/footer.jsx",
          lineNumber: 87,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("form", { className: "flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "email", placeholder: "Your email", className: "w-full px-4 py-2 rounded-l-lg focus:outline-none text-gray-900" }, void 0, false, {
            fileName: "app/components/footer.jsx",
            lineNumber: 91,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "submit", className: "bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors duration-300", children: "Subscribe" }, void 0, false, {
            fileName: "app/components/footer.jsx",
            lineNumber: 92,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/footer.jsx",
          lineNumber: 90,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/footer.jsx",
        lineNumber: 85,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/footer.jsx",
      lineNumber: 26,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "border-t border-gray-800 mt-8 pt-8 text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-gray-400", children: [
      "\xA9 ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " CMBD. All rights reserved."
    ] }, void 0, true, {
      fileName: "app/components/footer.jsx",
      lineNumber: 101,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/footer.jsx",
      lineNumber: 100,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/footer.jsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/footer.jsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c2 = Footer;
var _c2;
$RefreshReg$(_c2, "Footer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  MovieCard,
  nav_default,
  Footer
};
//# sourceMappingURL=/build/_shared/chunk-Q4AQA7Z3.js.map
