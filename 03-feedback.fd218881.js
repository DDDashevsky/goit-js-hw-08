var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},l=e.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in o){var l=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,l.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},e.parcelRequired7c6=l);var a=l("kEUo3");const n=document.querySelector(".feedback-form"),r=n.elements.email,s=n.elements.message;var i;n.addEventListener("submit",(function(e){e.preventDefault(),n.reset(),localStorage.removeItem("feedback-form-state"),console.log(d)})),n.addEventListener("input",(0,a.throttle)((function(e){e.preventDefault();const t={email:r.value,message:s.value};localStorage.setItem("feedback-form-state",JSON.stringify(t)),console.log(localStorage.getItem("feedback-form-state"))}),1e3));const d=null!==(i=JSON.parse(localStorage.getItem("feedback-form-state")))&&void 0!==i?i:[];var f,u;r.value=null!==(f=d.email)&&void 0!==f?f:"",s.value=null!==(u=d.message)&&void 0!==u?u:"";
//# sourceMappingURL=03-feedback.fd218881.js.map
