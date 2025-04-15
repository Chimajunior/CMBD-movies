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

// app/components/signup-form.jsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/signup-form.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/signup-form.jsx"
  );
  import.meta.hot.lastModified = "1742596789508.7358";
}
function SignupForm({
  className,
  ...props
}) {
  _s();
  const [username, setUsername] = (0, import_react.useState)("");
  const [email, setEmail] = (0, import_react.useState)("");
  const [password, setPassword] = (0, import_react.useState)("");
  const [confirmPassword, setConfirmPassword] = (0, import_react.useState)("");
  const [message, setMessage] = (0, import_react.useState)("");
  const validateEmail = (email2) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email2);
  };
  const validatePassword = (password2) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    return passwordRegex.test(password2);
  };
  async function handleSignup(e) {
    e.preventDefault();
    if (!validateEmail(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }
    if (!validatePassword(password)) {
      setMessage("Password must be at least 8 characters, including uppercase, lowercase, number, and special character.");
      return;
    }
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        email,
        password
      })
    });
    const data = await response.json();
    if (response.ok) {
      setMessage("Signup successful! You can now log in.");
    } else {
      setMessage(data.error || "Signup failed. Please try again.");
    }
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { onSubmit: handleSignup, className: cn("flex flex-col gap-6", className), ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center gap-2 text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold", children: "Create an account" }, void 0, false, {
      fileName: "app/components/signup-form.jsx",
      lineNumber: 79,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/signup-form.jsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { htmlFor: "username", children: "Username" }, void 0, false, {
          fileName: "app/components/signup-form.jsx",
          lineNumber: 83,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "username", type: "text", placeholder: "Your username", value: username, onChange: (e) => setUsername(e.target.value), required: true }, void 0, false, {
          fileName: "app/components/signup-form.jsx",
          lineNumber: 84,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/signup-form.jsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { htmlFor: "email", children: "Email" }, void 0, false, {
          fileName: "app/components/signup-form.jsx",
          lineNumber: 87,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "email", type: "email", placeholder: "m@example.com", value: email, onChange: (e) => setEmail(e.target.value), required: true }, void 0, false, {
          fileName: "app/components/signup-form.jsx",
          lineNumber: 88,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/signup-form.jsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { htmlFor: "password", children: "Password" }, void 0, false, {
          fileName: "app/components/signup-form.jsx",
          lineNumber: 91,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "password", type: "password", placeholder: "Password", value: password, onChange: (e) => setPassword(e.target.value), required: true }, void 0, false, {
          fileName: "app/components/signup-form.jsx",
          lineNumber: 92,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/signup-form.jsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, { htmlFor: "confirm-password", children: "Confirm Password" }, void 0, false, {
          fileName: "app/components/signup-form.jsx",
          lineNumber: 95,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { id: "confirm-password", type: "password", placeholder: "Confirm password", value: confirmPassword, onChange: (e) => setConfirmPassword(e.target.value), required: true }, void 0, false, {
          fileName: "app/components/signup-form.jsx",
          lineNumber: 96,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/signup-form.jsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", className: "w-full bg-[#B8860B]", children: "Signup" }, void 0, false, {
        fileName: "app/components/signup-form.jsx",
        lineNumber: 98,
        columnNumber: 9
      }, this),
      message && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-center mt-2 text-red-500", children: message }, void 0, false, {
        fileName: "app/components/signup-form.jsx",
        lineNumber: 101,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/signup-form.jsx",
      lineNumber: 81,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/signup-form.jsx",
    lineNumber: 77,
    columnNumber: 10
  }, this);
}
_s(SignupForm, "q6at0A3WPu7W6O7/1eVCeCRwL/M=");
_c = SignupForm;
var _c;
$RefreshReg$(_c, "SignupForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/signup.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/signup.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/signup.jsx"
  );
  import.meta.hot.lastModified = "1742590767881.7437";
}
function SignupPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid min-h-svh lg:grid-cols-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col gap-4 p-6 md:p-10 bg-[#121212] text-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-center gap-2 md:justify-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/", className: "flex items-center gap-2 font-medium", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(GalleryVerticalEnd, { className: "size-4" }, void 0, false, {
          fileName: "app/routes/signup.jsx",
          lineNumber: 29,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/signup.jsx",
          lineNumber: 28,
          columnNumber: 13
        }, this),
        "CMBD"
      ] }, void 0, true, {
        fileName: "app/routes/signup.jsx",
        lineNumber: 27,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/signup.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-1 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full max-w-xs", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SignupForm, {}, void 0, false, {
        fileName: "app/routes/signup.jsx",
        lineNumber: 36,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/signup.jsx",
        lineNumber: 35,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/signup.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-center text-sm", children: [
        "Already have an account?",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "/login", className: "underline underline-offset-4", children: "Log in" }, void 0, false, {
          fileName: "app/routes/signup.jsx",
          lineNumber: 41,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/signup.jsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/signup.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative hidden bg-muted lg:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "/jinx.jpeg", alt: "Image", className: "absolute inset-0 h-full w-full object-cover " }, void 0, false, {
      fileName: "app/routes/signup.jsx",
      lineNumber: 47,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/signup.jsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/signup.jsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c2 = SignupPage;
var _c2;
$RefreshReg$(_c2, "SignupPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SignupPage as default
};
//# sourceMappingURL=/build/routes/signup-EJRRHPX2.js.map
