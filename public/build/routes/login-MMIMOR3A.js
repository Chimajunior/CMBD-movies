import {
  useNavigate
} from "/build/_shared/chunk-LWKOUYGI.js";
import {
  Button,
  Input,
  Label,
  cn
} from "/build/_shared/chunk-7JHAVDAV.js";
import "/build/_shared/chunk-B43JI2TA.js";
import {
  GalleryVerticalEnd
} from "/build/_shared/chunk-K362QQA7.js";
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

// app/components/login-form.jsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/login-form.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/login-form.jsx"
  );
  import.meta.hot.lastModified = "1742596466907.8452";
}
function LoginForm({
  className,
  ...props
}) {
  _s();
  const [identifier, setIdentifier] = (0, import_react.useState)("");
  const [password, setPassword] = (0, import_react.useState)("");
  const [message, setMessage] = (0, import_react.useState)("");
  const navigate = useNavigate();
  async function handleLogin(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        identifier,
        password
      })
    });
    const data = await response.json();
    if (response.ok) {
      setMessage("Login successful!");
      localStorage.setItem("token", data.token);
      navigate("/");
    } else {
      setMessage(data.error || "Login failed. Please try again.");
    }
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { onSubmit: handleLogin, className: cn("flex flex-col gap-6", className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center gap-2 text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold", children: "Login to your account" }, void 0, false, {
      fileName: "app/components/login-form.jsx",
      lineNumber: 60,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/login-form.jsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { htmlFor: "identifier", children: "Username or Email" }, void 0, false, {
          fileName: "app/components/login-form.jsx",
          lineNumber: 64,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "identifier", type: "text", placeholder: "Username or email", value: identifier, onChange: (e) => setIdentifier(e.target.value), required: true }, void 0, false, {
          fileName: "app/components/login-form.jsx",
          lineNumber: 65,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/login-form.jsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { htmlFor: "password", children: "Password" }, void 0, false, {
          fileName: "app/components/login-form.jsx",
          lineNumber: 68,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "password", type: "password", placeholder: "Password", value: password, onChange: (e) => setPassword(e.target.value), required: true }, void 0, false, {
          fileName: "app/components/login-form.jsx",
          lineNumber: 69,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/login-form.jsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", className: "w-full bg-[#B8860B]", children: "Login" }, void 0, false, {
        fileName: "app/components/login-form.jsx",
        lineNumber: 71,
        columnNumber: 9
      }, this),
      message && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center mt-2", children: message }, void 0, false, {
        fileName: "app/components/login-form.jsx",
        lineNumber: 74,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/login-form.jsx",
      lineNumber: 62,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/login-form.jsx",
    lineNumber: 58,
    columnNumber: 10
  }, this);
}
_s(LoginForm, "jxcq7fw88Y4IBR/IPhc5zp3Q1yM=", false, function() {
  return [useNavigate];
});
_c = LoginForm;
var _c;
$RefreshReg$(_c, "LoginForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/login.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/login.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/login.jsx"
  );
  import.meta.hot.lastModified = "1742583656115.8972";
}
function LoginPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid min-h-svh lg:grid-cols-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col gap-4 p-6 md:p-10 bg-[#121212] text-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-center gap-2 md:justify-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/", className: "flex items-center gap-2 font-medium", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GalleryVerticalEnd, { className: "size-4" }, void 0, false, {
          fileName: "app/routes/login.jsx",
          lineNumber: 29,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/login.jsx",
          lineNumber: 28,
          columnNumber: 13
        }, this),
        "CMBD"
      ] }, void 0, true, {
        fileName: "app/routes/login.jsx",
        lineNumber: 27,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/login.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-1 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full max-w-xs", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LoginForm, {}, void 0, false, {
        fileName: "app/routes/login.jsx",
        lineNumber: 36,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/login.jsx",
        lineNumber: 35,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/login.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-center text-sm", children: [
        "Don't have an account?",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/signup", className: "underline underline-offset-4", children: "Sign up" }, void 0, false, {
          fileName: "app/routes/login.jsx",
          lineNumber: 41,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.jsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative hidden bg-muted lg:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "/godzilla.jpeg", alt: "Image", className: "absolute inset-0 h-full w-full object-cover " }, void 0, false, {
      fileName: "app/routes/login.jsx",
      lineNumber: 48,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/login.jsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login.jsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c2 = LoginPage;
var _c2;
$RefreshReg$(_c2, "LoginPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  LoginPage as default
};
//# sourceMappingURL=/build/routes/login-MMIMOR3A.js.map
