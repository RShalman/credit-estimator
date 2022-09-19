(function () {
  'use strict';
  try {
    var t = document.createElement('style');
    t.appendChild(
      document.createTextNode(
        '#ce-app .mx-auto{margin-left:auto;margin-right:auto}#ce-app .my-2{margin-top:.5rem;margin-bottom:.5rem}#ce-app .mt-10{margin-top:2.5rem}#ce-app .mt-12{margin-top:3rem}#ce-app .flex{display:flex}#ce-app .table{display:table}#ce-app .hidden{display:none}#ce-app .h-full{height:100%}#ce-app .h-screen{height:100vh}#ce-app .h-10{height:2.5rem}#ce-app .min-h-screen{min-height:100vh}#ce-app .w-full{width:100%}#ce-app .w-11\\/12{width:91.666667%}#ce-app .w-10{width:2.5rem}#ce-app .max-w-screen-md{max-width:768px}#ce-app .max-w-full{max-width:100%}#ce-app .flex-auto{flex:1 1 auto}#ce-app .flex-row{flex-direction:row}#ce-app .flex-wrap{flex-wrap:wrap}#ce-app .items-center{align-items:center}#ce-app .justify-center{justify-content:center}#ce-app .self-start{align-self:flex-start}#ce-app .overflow-auto{overflow:auto}#ce-app .overflow-x-auto{overflow-x:auto}#ce-app .overflow-x-hidden{overflow-x:hidden}#ce-app .bg-green-200{--tw-bg-opacity: 1;background-color:rgb(187 247 208 / var(--tw-bg-opacity))}#ce-app .fill-current{fill:currentColor}#ce-app .p-10{padding:2.5rem}#ce-app .text-black{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.container{width:100%;margin-right:auto;margin-left:auto}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.avatar.placeholder>div{display:flex;align-items:center;justify-content:center}.btn{display:inline-flex;flex-shrink:0;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;flex-wrap:wrap;align-items:center;justify-content:center;border-color:transparent;border-color:hsl(var(--n) / var(--tw-border-opacity));text-align:center;transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);border-radius:var(--rounded-btn, .5rem);height:3rem;padding-left:1rem;padding-right:1rem;font-size:.875rem;line-height:1.25rem;line-height:1em;min-height:3rem;font-weight:600;text-transform:uppercase;text-transform:var(--btn-text-case, uppercase);-webkit-text-decoration-line:none;text-decoration-line:none;border-width:var(--border-btn, 1px);-webkit-animation:button-pop var(--animation-btn, .25s) ease-out;animation:button-pop var(--animation-btn, .25s) ease-out;--tw-border-opacity: 1;--tw-bg-opacity: 1;background-color:hsl(var(--n) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--nc) / var(--tw-text-opacity))}.btn-disabled,.btn[disabled],.btn.loading,.btn.loading:hover{pointer-events:none}.btn.loading:before{margin-right:.5rem;height:1rem;width:1rem;border-radius:9999px;border-width:2px;-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite;content:"";border-top-color:transparent;border-left-color:transparent;border-bottom-color:currentColor;border-right-color:currentColor}@media (prefers-reduced-motion: reduce){.btn.loading:before{-webkit-animation:spin 10s linear infinite;animation:spin 10s linear infinite}}@-webkit-keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.btn-group>input[type=radio].btn{-webkit-appearance:none;-moz-appearance:none;appearance:none}.btn-group>input[type=radio].btn:before{content:attr(data-title)}.checkbox{flex-shrink:0;--chkbg: var(--bc);--chkfg: var(--b1);height:1.5rem;width:1.5rem;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-width:1px;border-color:hsl(var(--bc) / var(--tw-border-opacity));--tw-border-opacity: .2;border-radius:var(--rounded-btn, .5rem)}.form-control{display:flex;flex-direction:column}.label{display:flex;-webkit-user-select:none;-moz-user-select:none;user-select:none;align-items:center;justify-content:space-between;padding:.5rem .25rem}.input{flex-shrink:1;transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);height:3rem;padding-left:1rem;padding-right:1rem;font-size:.875rem;line-height:1.25rem;line-height:2;border-width:1px;border-color:hsl(var(--bc) / var(--tw-border-opacity));--tw-border-opacity: 0;--tw-bg-opacity: 1;background-color:hsl(var(--b1) / var(--tw-bg-opacity));border-radius:var(--rounded-btn, .5rem)}.input-group>.input{isolation:isolate}.input-group>*,.input-group>.input{border-radius:0}.menu>:where(li.disabled > *:not(ul):focus){cursor:auto}.radio{flex-shrink:0;--chkbg: var(--bc);height:1.5rem;width:1.5rem;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:9999px;border-width:1px;border-color:hsl(var(--bc) / var(--tw-border-opacity));--tw-border-opacity: .2;transition:background,box-shadow var(--animation-input, .2s) ease-in-out}.range{height:1.5rem;width:100%;cursor:pointer;-webkit-appearance:none;--range-shdw: var(--bc);overflow:hidden;background-color:transparent;border-radius:var(--rounded-box, 1rem)}.range:focus{outline:none}.swap{position:relative;display:inline-grid;-webkit-user-select:none;-moz-user-select:none;user-select:none;place-content:center;cursor:pointer}.swap>*{grid-column-start:1;grid-row-start:1;transition-duration:.3s;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-property:transform,opacity}.swap input{-webkit-appearance:none;-moz-appearance:none;appearance:none}.swap .swap-on,.swap .swap-indeterminate,.swap input:indeterminate~.swap-on{opacity:0}.swap input:checked~.swap-off,.swap.swap-active .swap-off,.swap input:indeterminate~.swap-off{opacity:0}.swap input:checked~.swap-on,.swap-active .swap-on,.swap input:indeterminate~.swap-indeterminate{opacity:1}.table{position:relative;text-align:left}.table th:first-child{position:sticky;position:-webkit-sticky;left:0px;z-index:11}.btn-outline.btn-primary .badge{--tw-border-opacity: 1;border-color:hsl(var(--p) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--p) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--pc) / var(--tw-text-opacity))}.btn-outline.btn-primary .badge-outline{--tw-border-opacity: 1;border-color:hsl(var(--p) / var(--tw-border-opacity));background-color:transparent;--tw-text-opacity: 1;color:hsl(var(--p) / var(--tw-text-opacity))}.btn-outline.btn-success .badge-outline{--tw-border-opacity: 1;border-color:hsl(var(--su) / var(--tw-border-opacity));background-color:transparent;--tw-text-opacity: 1;color:hsl(var(--su) / var(--tw-text-opacity))}.btn-outline.btn-error .badge-outline{--tw-border-opacity: 1;border-color:hsl(var(--er) / var(--tw-border-opacity));background-color:transparent;--tw-text-opacity: 1;color:hsl(var(--er) / var(--tw-text-opacity))}.btn-outline.btn-primary:hover .badge{--tw-border-opacity: 1;border-color:hsl(var(--pc) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--pc) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--p) / var(--tw-text-opacity))}.btn-outline.btn-primary:hover .badge.outline{--tw-border-opacity: 1;border-color:hsl(var(--pc) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--pf, var(--p)) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--pc) / var(--tw-text-opacity))}.btm-nav>*.disabled,.btm-nav>*.disabled:hover,.btm-nav>*[disabled],.btm-nav>*[disabled]:hover{pointer-events:none;--tw-border-opacity: 0;background-color:hsl(var(--n) / var(--tw-bg-opacity));--tw-bg-opacity: .1;color:hsl(var(--bc) / var(--tw-text-opacity));--tw-text-opacity: .2 }.btm-nav>* .label{font-size:1rem;line-height:1.5rem}.btn:active:hover,.btn:active:focus{-webkit-animation:none;animation:none;transform:scale(var(--btn-focus-scale, .95))}.btn:hover,.btn-active{--tw-border-opacity: 1;border-color:hsl(var(--nf, var(--n)) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--nf, var(--n)) / var(--tw-bg-opacity))}.btn:focus-visible{outline:2px solid hsl(var(--nf));outline-offset:2px}.btn-primary{--tw-border-opacity: 1;border-color:hsl(var(--p) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--p) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--pc) / var(--tw-text-opacity))}.btn-primary:hover,.btn-primary.btn-active{--tw-border-opacity: 1;border-color:hsl(var(--pf, var(--p)) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--pf, var(--p)) / var(--tw-bg-opacity))}.btn-primary:focus-visible{outline:2px solid hsl(var(--p))}.btn-success{--tw-border-opacity: 1;border-color:hsl(var(--su) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--su) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--suc, var(--nc)) / var(--tw-text-opacity))}.btn-success:hover,.btn-success.btn-active{--tw-border-opacity: 1;border-color:hsl(var(--su) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--su) / var(--tw-bg-opacity))}.btn-success:focus-visible{outline:2px solid hsl(var(--su))}.btn-error{--tw-border-opacity: 1;border-color:hsl(var(--er) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--er) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--erc, var(--nc)) / var(--tw-text-opacity))}.btn-error:hover,.btn-error.btn-active{--tw-border-opacity: 1;border-color:hsl(var(--er) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--er) / var(--tw-bg-opacity))}.btn-error:focus-visible{outline:2px solid hsl(var(--er))}.btn.glass:hover,.btn.glass.btn-active{--glass-opacity: 25%;--glass-border-opacity: 15% }.btn.glass:focus-visible{outline:2px solid 0 0 2px currentColor}.btn-outline.btn-primary{--tw-text-opacity: 1;color:hsl(var(--p) / var(--tw-text-opacity))}.btn-outline.btn-primary:hover{--tw-border-opacity: 1;border-color:hsl(var(--pf, var(--p)) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--pf, var(--p)) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--pc) / var(--tw-text-opacity))}.btn-outline.btn-success{--tw-text-opacity: 1;color:hsl(var(--su) / var(--tw-text-opacity))}.btn-outline.btn-success:hover{--tw-border-opacity: 1;border-color:hsl(var(--su) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--su) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--suc, var(--nc)) / var(--tw-text-opacity))}.btn-outline.btn-error{--tw-text-opacity: 1;color:hsl(var(--er) / var(--tw-text-opacity))}.btn-outline.btn-error:hover{--tw-border-opacity: 1;border-color:hsl(var(--er) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--er) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--erc, var(--nc)) / var(--tw-text-opacity))}.btn-disabled,.btn-disabled:hover,.btn[disabled],.btn[disabled]:hover{--tw-border-opacity: 0;background-color:hsl(var(--n) / var(--tw-bg-opacity));--tw-bg-opacity: .2;color:hsl(var(--bc) / var(--tw-text-opacity));--tw-text-opacity: .2 }.btn.loading.btn-square:before,.btn.loading.btn-circle:before{margin-right:0}.btn.loading.btn-xl:before,.btn.loading.btn-lg:before{height:1.25rem;width:1.25rem}.btn.loading.btn-sm:before,.btn.loading.btn-xs:before{height:.75rem;width:.75rem}.btn-group>input[type=radio]:checked.btn,.btn-group>.btn-active{--tw-border-opacity: 1;border-color:hsl(var(--p) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--p) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--pc) / var(--tw-text-opacity))}.btn-group>input[type=radio]:checked.btn:focus-visible,.btn-group>.btn-active:focus-visible{outline:2px solid hsl(var(--p))}.btn-group:not(.btn-group-vertical)>.btn:not(:first-of-type){margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}.btn-group:not(.btn-group-vertical)>.btn:not(:last-of-type){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group-vertical>.btn:not(:first-of-type){margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.btn-group-vertical>.btn:not(:last-of-type){border-bottom-right-radius:0;border-bottom-left-radius:0}@-webkit-keyframes button-pop{0%{transform:scale(var(--btn-focus-scale, .95))}40%{transform:scale(1.02)}to{transform:scale(1)}}@keyframes button-pop{0%{transform:scale(var(--btn-focus-scale, .95))}40%{transform:scale(1.02)}to{transform:scale(1)}}.checkbox:focus-visible{outline:2px solid hsl(var(--bc));outline-offset:2px}.checkbox:checked,.checkbox[checked=true],.checkbox[aria-checked=true]{--tw-bg-opacity: 1;background-color:hsl(var(--bc) / var(--tw-bg-opacity));background-repeat:no-repeat;-webkit-animation:checkmark var(--animation-input, .2s) ease-in-out;animation:checkmark var(--animation-input, .2s) ease-in-out;background-image:linear-gradient(-45deg,transparent 65%,hsl(var(--chkbg)) 65.99%),linear-gradient(45deg,transparent 75%,hsl(var(--chkbg)) 75.99%),linear-gradient(-45deg,hsl(var(--chkbg)) 40%,transparent 40.99%),linear-gradient(45deg,hsl(var(--chkbg)) 30%,hsl(var(--chkfg)) 30.99%,hsl(var(--chkfg)) 40%,transparent 40.99%),linear-gradient(-45deg,hsl(var(--chkfg)) 50%,hsl(var(--chkbg)) 50.99%)}.checkbox:indeterminate{--tw-bg-opacity: 1;background-color:hsl(var(--bc) / var(--tw-bg-opacity));background-repeat:no-repeat;-webkit-animation:checkmark var(--animation-input, .2s) ease-in-out;animation:checkmark var(--animation-input, .2s) ease-in-out;background-image:linear-gradient(90deg,transparent 80%,hsl(var(--chkbg)) 80%),linear-gradient(-90deg,transparent 80%,hsl(var(--chkbg)) 80%),linear-gradient(0deg,hsl(var(--chkbg)) 43%,hsl(var(--chkfg)) 43%,hsl(var(--chkfg)) 57%,hsl(var(--chkbg)) 57%)}.checkbox:disabled{cursor:not-allowed;border-color:transparent;--tw-bg-opacity: 1;background-color:hsl(var(--bc) / var(--tw-bg-opacity));opacity:.2}@-webkit-keyframes checkmark{0%{background-position-y:5px}50%{background-position-y:-2px}to{background-position-y:0}}@keyframes checkmark{0%{background-position-y:5px}50%{background-position-y:-2px}to{background-position-y:0}}body[dir=rtl] .checkbox{--chkbg: var(--bc);--chkfg: var(--b1) }body[dir=rtl] .checkbox:checked,body[dir=rtl] .checkbox[checked=true],body[dir=rtl] .checkbox[aria-checked=true]{background-image:linear-gradient(45deg,transparent 65%,hsl(var(--chkbg)) 65.99%),linear-gradient(-45deg,transparent 75%,hsl(var(--chkbg)) 75.99%),linear-gradient(45deg,hsl(var(--chkbg)) 40%,transparent 40.99%),linear-gradient(-45deg,hsl(var(--chkbg)) 30%,hsl(var(--chkfg)) 30.99%,hsl(var(--chkfg)) 40%,transparent 40.99%),linear-gradient(45deg,hsl(var(--chkfg)) 50%,hsl(var(--chkbg)) 50.99%)}.drawer-toggle:focus-visible~.drawer-content .drawer-button.btn-primary{outline:2px solid hsl(var(--p))}.drawer-toggle:focus-visible~.drawer-content .drawer-button.btn-success{outline:2px solid hsl(var(--su))}.drawer-toggle:focus-visible~.drawer-content .drawer-button.btn-error{outline:2px solid hsl(var(--er))}.label a:hover{--tw-text-opacity: 1;color:hsl(var(--bc) / var(--tw-text-opacity))}.input[list]::-webkit-calendar-picker-indicator{line-height:1em}.input-bordered{--tw-border-opacity: .2 }.input:focus{outline:2px solid hsla(var(--bc) / .2);outline-offset:2px}.input-primary{--tw-border-opacity: 1;border-color:hsl(var(--p) / var(--tw-border-opacity))}.input-primary:focus{outline:2px solid hsl(var(--p))}.input-disabled,.input[disabled]{cursor:not-allowed;--tw-border-opacity: 1;border-color:hsl(var(--b2, var(--b1)) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));--tw-text-opacity: .2 }.input-disabled::-moz-placeholder,.input[disabled]::-moz-placeholder{color:hsl(var(--bc) / var(--tw-placeholder-opacity));--tw-placeholder-opacity: .2 }.input-disabled::placeholder,.input[disabled]::placeholder{color:hsl(var(--bc) / var(--tw-placeholder-opacity));--tw-placeholder-opacity: .2 }.menu li.disabled>*{-webkit-user-select:none;-moz-user-select:none;user-select:none;color:hsl(var(--bc) / var(--tw-text-opacity));--tw-text-opacity: .2 }.menu li.disabled>*:hover{background-color:transparent}@-webkit-keyframes progress-loading{50%{left:107%}}@keyframes progress-loading{50%{left:107%}}.radio:focus-visible{outline:2px solid hsl(var(--bc));outline-offset:2px}.radio:checked,.radio[aria-checked=true]{--tw-bg-opacity: 1;background-color:hsl(var(--bc) / var(--tw-bg-opacity));-webkit-animation:radiomark var(--animation-input, .2s) ease-in-out;animation:radiomark var(--animation-input, .2s) ease-in-out;box-shadow:0 0 0 4px hsl(var(--b1)) inset,0 0 0 4px hsl(var(--b1)) inset}.radio:disabled{cursor:not-allowed;opacity:.2}@-webkit-keyframes radiomark{0%{box-shadow:0 0 0 12px hsl(var(--b1)) inset,0 0 0 12px hsl(var(--b1)) inset}50%{box-shadow:0 0 0 3px hsl(var(--b1)) inset,0 0 0 3px hsl(var(--b1)) inset}to{box-shadow:0 0 0 4px hsl(var(--b1)) inset,0 0 0 4px hsl(var(--b1)) inset}}@keyframes radiomark{0%{box-shadow:0 0 0 12px hsl(var(--b1)) inset,0 0 0 12px hsl(var(--b1)) inset}50%{box-shadow:0 0 0 3px hsl(var(--b1)) inset,0 0 0 3px hsl(var(--b1)) inset}to{box-shadow:0 0 0 4px hsl(var(--b1)) inset,0 0 0 4px hsl(var(--b1)) inset}}.range:focus-visible::-webkit-slider-thumb{--focus-shadow: 0 0 0 6px hsl(var(--b1)) inset, 0 0 0 2rem hsl(var(--range-shdw)) inset }.range:focus-visible::-moz-range-thumb{--focus-shadow: 0 0 0 6px hsl(var(--b1)) inset, 0 0 0 2rem hsl(var(--range-shdw)) inset }.range::-webkit-slider-runnable-track{height:.5rem;width:100%;border-radius:var(--rounded-box, 1rem);background-color:hsla(var(--bc) / .1)}.range::-moz-range-track{height:.5rem;width:100%;border-radius:var(--rounded-box, 1rem);background-color:hsla(var(--bc) / .1)}.range::-webkit-slider-thumb{background-color:hsl(var(--b1));position:relative;height:1.5rem;width:1.5rem;border-style:none;border-radius:var(--rounded-box, 1rem);-webkit-appearance:none;top:50%;color:hsl(var(--range-shdw));transform:translateY(-50%);--filler-size: 100rem;--filler-offset: .6rem;box-shadow:0 0 0 3px hsl(var(--range-shdw)) inset,var(--focus-shadow, 0 0),calc(var(--filler-size) * -1 - var(--filler-offset)) 0 0 var(--filler-size)}.range::-moz-range-thumb{background-color:hsl(var(--b1));position:relative;height:1.5rem;width:1.5rem;border-style:none;border-radius:var(--rounded-box, 1rem);top:50%;color:hsl(var(--range-shdw));--filler-size: 100rem;--filler-offset: .5rem;box-shadow:0 0 0 3px hsl(var(--range-shdw)) inset,var(--focus-shadow, 0 0),calc(var(--filler-size) * -1 - var(--filler-offset)) 0 0 var(--filler-size)}@-webkit-keyframes rating-pop{0%{transform:translateY(-.125em)}40%{transform:translateY(-.125em)}to{transform:translateY(0)}}@keyframes rating-pop{0%{transform:translateY(-.125em)}40%{transform:translateY(-.125em)}to{transform:translateY(0)}}.swap-rotate .swap-on,.swap-rotate .swap-indeterminate,.swap-rotate input:indeterminate~.swap-on{--tw-rotate: 45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.swap-rotate input:checked~.swap-off,.swap-rotate.swap-active .swap-off,.swap-rotate input:indeterminate~.swap-off{--tw-rotate: -45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.swap-rotate input:checked~.swap-on,.swap-rotate.swap-active .swap-on,.swap-rotate input:indeterminate~.swap-indeterminate{--tw-rotate: 0deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.swap-flip .swap-on,.swap-flip .swap-indeterminate,.swap-flip input:indeterminate~.swap-on{transform:rotateY(180deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;opacity:1}.swap-flip input:checked~.swap-off,.swap-flip.swap-active .swap-off,.swap-flip input:indeterminate~.swap-off{transform:rotateY(-180deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;opacity:1}.swap-flip input:checked~.swap-on,.swap-flip.swap-active .swap-on,.swap-flip input:indeterminate~.swap-indeterminate{transform:rotateY(0)}.table :where(th,td){white-space:nowrap;padding:1rem;vertical-align:middle}.table tr.active th,.table tr.active td,.table tr.active:nth-child(even) th,.table tr.active:nth-child(even) td{--tw-bg-opacity: 1;background-color:hsl(var(--b3, var(--b2)) / var(--tw-bg-opacity))}.table tr.hover:hover th,.table tr.hover:hover td,.table tr.hover:nth-child(even):hover th,.table tr.hover:nth-child(even):hover td{--tw-bg-opacity: 1;background-color:hsl(var(--b3, var(--b2)) / var(--tw-bg-opacity))}.table:where(:not(.table-zebra)) :where(thead,tbody,tfoot) :where(tr:not(:last-child) :where(th,td)){border-bottom-width:1px;--tw-border-opacity: 1;border-color:hsl(var(--b2, var(--b1)) / var(--tw-border-opacity))}.table :where(thead,tfoot) :where(th,td){--tw-bg-opacity: 1;background-color:hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));font-size:.75rem;line-height:1rem;font-weight:700;text-transform:uppercase}.table :where(:first-child) :where(:first-child) :where(th,td):first-child{border-top-left-radius:.5rem}.table :where(:first-child) :where(:first-child) :where(th,td):last-child{border-top-right-radius:.5rem}.table :where(:last-child) :where(:last-child) :where(th,td):first-child{border-bottom-left-radius:.5rem}.table :where(:last-child) :where(:last-child) :where(th,td):last-child{border-bottom-right-radius:.5rem}.table :where(tbody th,tbody td){--tw-bg-opacity: 1;background-color:hsl(var(--b1) / var(--tw-bg-opacity))}@-webkit-keyframes toast-pop{0%{transform:scale(.9);opacity:0}to{transform:scale(1);opacity:1}}@keyframes toast-pop{0%{transform:scale(.9);opacity:0}to{transform:scale(1);opacity:1}}.btn-md{height:3rem;padding-left:1rem;padding-right:1rem;min-height:3rem;font-size:.875rem}.btn-square:where(.btn-md){height:3rem;width:3rem;padding:0}.btn-circle:where(.btn-md){height:3rem;width:3rem;border-radius:9999px;padding:0}.table-normal :where(th,td){padding:1rem;font-size:1rem;line-height:1.5rem}:root,[data-theme]{background-color:hsla(var(--b1) / var(--tw-bg-opacity, 1));color:hsla(var(--bc) / var(--tw-text-opacity, 1))}html{-webkit-tap-highlight-color:transparent}:root{--p: 259 94% 51%;--pf: 259 94% 41%;--sf: 314 100% 38%;--af: 174 60% 41%;--nf: 219 14% 22%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--pc: 0 0% 100%;--s: 314 100% 47%;--sc: 0 0% 100%;--a: 174 60% 51%;--ac: 175 44% 15%;--n: 219 14% 28%;--nc: 0 0% 100%;--b1: 0 0% 100%;--b2: 0 0% 95%;--b3: 180 2% 90%;--bc: 215 28% 17% }@media (prefers-color-scheme: dark){:root{--p: 262 80% 50%;--pf: 262 80% 40%;--sf: 316 70% 40%;--af: 175 70% 33%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--pc: 0 0% 100%;--s: 316 70% 50%;--sc: 0 0% 100%;--a: 175 70% 41%;--ac: 0 0% 100%;--n: 218 18% 12%;--nf: 223 17% 8%;--nc: 220 13% 69%;--b1: 220 18% 20%;--b2: 220 17% 17%;--b3: 219 18% 15%;--bc: 220 13% 69% }}[data-theme=light]{--p: 259 94% 51%;--pf: 259 94% 41%;--sf: 314 100% 38%;--af: 174 60% 41%;--nf: 219 14% 22%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--pc: 0 0% 100%;--s: 314 100% 47%;--sc: 0 0% 100%;--a: 174 60% 51%;--ac: 175 44% 15%;--n: 219 14% 28%;--nc: 0 0% 100%;--b1: 0 0% 100%;--b2: 0 0% 95%;--b3: 180 2% 90%;--bc: 215 28% 17% }[data-theme=dark]{--p: 262 80% 50%;--pf: 262 80% 40%;--sf: 316 70% 40%;--af: 175 70% 33%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--pc: 0 0% 100%;--s: 316 70% 50%;--sc: 0 0% 100%;--a: 175 70% 41%;--ac: 0 0% 100%;--n: 218 18% 12%;--nf: 223 17% 8%;--nc: 220 13% 69%;--b1: 220 18% 20%;--b2: 220 17% 17%;--b3: 219 18% 15%;--bc: 220 13% 69% }[data-theme=cupcake]{--p: 183 47% 59%;--pf: 183 47% 47%;--sf: 338 71% 62%;--af: 39 84% 46%;--nf: 280 46% 11%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--pc: 183 100% 12%;--sc: 338 100% 16%;--ac: 39 100% 12%;--nc: 280 83% 83%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--s: 338 71% 78%;--a: 39 84% 58%;--n: 280 46% 14%;--b1: 24 33% 97%;--b2: 27 22% 92%;--b3: 22 14% 89%;--bc: 280 46% 14%;--rounded-btn: 1.9rem;--tab-border: 2px;--tab-radius: .5rem }[data-theme=bumblebee]{--p: 41 74% 53%;--pf: 41 74% 42%;--sf: 50 94% 46%;--af: 240 33% 11%;--nf: 240 33% 11%;--b2: 0 0% 90%;--b3: 0 0% 81%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--bc: 0 0% 20%;--ac: 240 60% 83%;--nc: 240 60% 83%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--pc: 240 33% 14%;--s: 50 94% 58%;--sc: 240 33% 14%;--a: 240 33% 14%;--n: 240 33% 14%;--b1: 0 0% 100% }[data-theme=emerald]{--p: 141 50% 60%;--pf: 141 50% 48%;--sf: 219 96% 48%;--af: 10 81% 45%;--nf: 219 20% 20%;--b2: 0 0% 90%;--b3: 0 0% 81%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--btn-text-case: uppercase;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--pc: 151 28% 19%;--s: 219 96% 60%;--sc: 210 20% 98%;--a: 10 81% 56%;--ac: 210 20% 98%;--n: 219 20% 25%;--nc: 210 20% 98%;--b1: 0 0% 100%;--bc: 219 20% 25%;--animation-btn: 0;--animation-input: 0;--btn-focus-scale: 1 }[data-theme=corporate]{--p: 229 96% 64%;--pf: 229 96% 51%;--sf: 215 26% 47%;--af: 154 49% 48%;--nf: 233 27% 10%;--b2: 0 0% 90%;--b3: 0 0% 81%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--pc: 229 100% 93%;--sc: 215 100% 12%;--ac: 154 100% 12%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--btn-text-case: uppercase;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--s: 215 26% 59%;--a: 154 49% 60%;--n: 233 27% 13%;--nc: 210 38% 95%;--b1: 0 0% 100%;--bc: 233 27% 13%;--rounded-box: .25rem;--rounded-btn: .125rem;--rounded-badge: .125rem;--animation-btn: 0;--animation-input: 0;--btn-focus-scale: 1 }[data-theme=synthwave]{--p: 321 70% 69%;--pf: 321 70% 55%;--sf: 197 87% 52%;--af: 48 89% 46%;--nf: 253 61% 15%;--b2: 254 59% 23%;--b3: 254 59% 21%;--pc: 321 100% 14%;--sc: 197 100% 13%;--ac: 48 100% 11%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--s: 197 87% 65%;--a: 48 89% 57%;--n: 253 61% 19%;--nc: 260 60% 98%;--b1: 254 59% 26%;--bc: 260 60% 98%;--in: 199 87% 64%;--inc: 257 63% 17%;--su: 168 74% 68%;--suc: 257 63% 17%;--wa: 48 89% 57%;--wac: 257 63% 17%;--er: 352 74% 57%;--erc: 260 60% 98% }[data-theme=retro]{--p: 3 74% 76%;--pf: 3 74% 61%;--sf: 145 27% 58%;--af: 49 67% 61%;--nf: 42 17% 34%;--inc: 221 100% 91%;--suc: 142 100% 87%;--wac: 32 100% 9%;--erc: 0 100% 90%;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--pc: 345 5% 15%;--s: 145 27% 72%;--sc: 345 5% 15%;--a: 49 67% 76%;--ac: 345 5% 15%;--n: 42 17% 42%;--nc: 45 47% 80%;--b1: 45 47% 80%;--b2: 45 37% 72%;--b3: 42 36% 65%;--bc: 345 5% 15%;--in: 221 83% 53%;--su: 142 76% 36%;--wa: 32 95% 44%;--er: 0 72% 51%;--rounded-box: .4rem;--rounded-btn: .4rem;--rounded-badge: .4rem }[data-theme=cyberpunk]{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;--pf: 345 100% 58%;--sf: 195 80% 56%;--af: 276 74% 57%;--nf: 57 100% 10%;--b2: 56 100% 45%;--b3: 56 100% 41%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--bc: 56 100% 10%;--pc: 345 100% 15%;--sc: 195 100% 14%;--ac: 276 100% 14%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--p: 345 100% 73%;--s: 195 80% 70%;--a: 276 74% 71%;--n: 57 100% 13%;--nc: 56 100% 50%;--b1: 56 100% 50%;--rounded-box: 0;--rounded-btn: 0;--rounded-badge: 0;--tab-radius: 0 }[data-theme=valentine]{--p: 353 74% 67%;--pf: 353 74% 54%;--sf: 254 86% 61%;--af: 181 56% 56%;--nf: 336 43% 38%;--b2: 318 46% 80%;--b3: 318 46% 72%;--pc: 353 100% 13%;--sc: 254 100% 15%;--ac: 181 100% 14%;--inc: 221 100% 91%;--suc: 142 100% 87%;--wac: 32 100% 9%;--erc: 0 100% 90%;--rounded-box: 1rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--s: 254 86% 77%;--a: 181 56% 70%;--n: 336 43% 48%;--nc: 318 46% 89%;--b1: 318 46% 89%;--bc: 344 38% 28%;--in: 221 83% 53%;--su: 142 76% 36%;--wa: 32 95% 44%;--er: 0 72% 51%;--rounded-btn: 1.9rem }[data-theme=halloween]{--p: 32 89% 52%;--pf: 32 89% 42%;--sf: 271 46% 34%;--af: 91 100% 26%;--nf: 180 4% 9%;--b2: 0 0% 12%;--b3: 0 0% 10%;--bc: 0 0% 83%;--sc: 271 100% 88%;--ac: 91 100% 7%;--nc: 180 5% 82%;--inc: 221 100% 91%;--suc: 142 100% 87%;--wac: 32 100% 9%;--erc: 0 100% 90%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--pc: 180 7% 8%;--s: 271 46% 42%;--a: 91 100% 33%;--n: 180 4% 11%;--b1: 0 0% 13%;--in: 221 83% 53%;--su: 142 76% 36%;--wa: 32 95% 44%;--er: 0 72% 51% }[data-theme=garden]{--p: 139 16% 43%;--pf: 139 16% 34%;--sf: 97 37% 75%;--af: 0 68% 75%;--nf: 0 4% 28%;--b2: 0 4% 82%;--b3: 0 4% 74%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--pc: 139 100% 89%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--s: 97 37% 93%;--sc: 96 32% 15%;--a: 0 68% 94%;--ac: 0 22% 16%;--n: 0 4% 35%;--nc: 0 4% 91%;--b1: 0 4% 91%;--bc: 0 3% 6% }[data-theme=forest]{--p: 141 72% 42%;--pf: 141 72% 34%;--sf: 141 75% 38%;--af: 35 69% 42%;--nf: 0 10% 5%;--b2: 0 12% 7%;--b3: 0 12% 7%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--bc: 0 12% 82%;--pc: 141 100% 8%;--sc: 141 100% 10%;--ac: 35 100% 10%;--nc: 0 7% 81%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--s: 141 75% 48%;--a: 35 69% 52%;--n: 0 10% 6%;--b1: 0 12% 8%;--rounded-btn: 1.9rem }[data-theme=aqua]{--p: 182 93% 49%;--pf: 182 93% 40%;--sf: 274 31% 45%;--af: 47 100% 64%;--nf: 205 54% 40%;--b2: 219 53% 39%;--b3: 219 53% 35%;--bc: 219 100% 89%;--sc: 274 100% 91%;--ac: 47 100% 16%;--nc: 205 100% 90%;--inc: 221 100% 91%;--suc: 142 100% 87%;--wac: 32 100% 9%;--erc: 0 100% 90%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--pc: 181 100% 17%;--s: 274 31% 57%;--a: 47 100% 80%;--n: 205 54% 50%;--b1: 219 53% 43%;--in: 221 83% 53%;--su: 142 76% 36%;--wa: 32 95% 44%;--er: 0 72% 51% }[data-theme=lofi]{--p: 0 0% 5%;--pf: 0 0% 4%;--sf: 0 2% 8%;--af: 0 0% 12%;--nf: 0 0% 0%;--btn-text-case: uppercase;--border-btn: 1px;--tab-border: 1px;--pc: 0 0% 100%;--s: 0 2% 10%;--sc: 0 0% 100%;--a: 0 0% 15%;--ac: 0 0% 100%;--n: 0 0% 0%;--nc: 0 0% 100%;--b1: 0 0% 100%;--b2: 0 0% 95%;--b3: 0 2% 90%;--bc: 0 0% 0%;--in: 212 100% 48%;--inc: 0 0% 100%;--su: 137 72% 46%;--suc: 0 0% 100%;--wa: 5 100% 66%;--wac: 0 0% 100%;--er: 325 78% 49%;--erc: 0 0% 100%;--rounded-box: .25rem;--rounded-btn: .125rem;--rounded-badge: .125rem;--animation-btn: 0;--animation-input: 0;--btn-focus-scale: 1;--tab-radius: 0 }[data-theme=pastel]{--p: 284 22% 80%;--pf: 284 22% 64%;--sf: 352 70% 70%;--af: 158 55% 65%;--nf: 199 44% 49%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--bc: 0 0% 20%;--pc: 284 59% 16%;--sc: 352 100% 18%;--ac: 158 100% 16%;--nc: 199 100% 12%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--s: 352 70% 88%;--a: 158 55% 81%;--n: 199 44% 61%;--b1: 0 0% 100%;--b2: 210 20% 98%;--b3: 216 12% 84%;--rounded-btn: 1.9rem }[data-theme=fantasy]{--p: 296 83% 25%;--pf: 296 83% 20%;--sf: 200 100% 30%;--af: 31 94% 41%;--nf: 215 28% 13%;--b2: 0 0% 90%;--b3: 0 0% 81%;--in: 198 93% 60%;--su: 158 64% 52%;--wa: 43 96% 56%;--er: 0 91% 71%;--pc: 296 100% 85%;--sc: 200 100% 87%;--ac: 31 100% 10%;--nc: 215 62% 83%;--inc: 198 100% 12%;--suc: 158 100% 10%;--wac: 43 100% 11%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--s: 200 100% 37%;--a: 31 94% 51%;--n: 215 28% 17%;--b1: 0 0% 100%;--bc: 215 28% 17% }[data-theme=wireframe]{font-family:Chalkboard,comic sans ms,sanssecondaryerif;--pf: 0 0% 58%;--sf: 0 0% 58%;--af: 0 0% 58%;--nf: 0 0% 74%;--bc: 0 0% 20%;--pc: 0 0% 14%;--sc: 0 0% 14%;--ac: 0 0% 14%;--nc: 0 0% 18%;--inc: 240 100% 90%;--suc: 120 100% 85%;--wac: 60 100% 10%;--erc: 0 100% 90%;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--p: 0 0% 72%;--s: 0 0% 72%;--a: 0 0% 72%;--n: 0 0% 92%;--b1: 0 0% 100%;--b2: 0 0% 93%;--b3: 0 0% 87%;--in: 240 100% 50%;--su: 120 100% 25%;--wa: 60 30% 50%;--er: 0 100% 50%;--rounded-box: .2rem;--rounded-btn: .2rem;--rounded-badge: .2rem;--tab-radius: .2rem }[data-theme=black]{--p: 0 2% 20%;--pf: 0 2% 16%;--sf: 0 2% 16%;--af: 0 2% 16%;--bc: 0 0% 80%;--pc: 0 5% 84%;--sc: 0 5% 84%;--ac: 0 5% 84%;--nc: 0 3% 83%;--inc: 240 100% 90%;--suc: 120 100% 85%;--wac: 60 100% 10%;--erc: 0 100% 90%;--border-btn: 1px;--tab-border: 1px;--s: 0 2% 20%;--a: 0 2% 20%;--b1: 0 0% 0%;--b2: 0 0% 5%;--b3: 0 2% 10%;--n: 0 1% 15%;--nf: 0 2% 20%;--in: 240 100% 50%;--su: 120 100% 25%;--wa: 60 100% 50%;--er: 0 100% 50%;--rounded-box: 0;--rounded-btn: 0;--rounded-badge: 0;--animation-btn: 0;--animation-input: 0;--btn-text-case: lowercase;--btn-focus-scale: 1;--tab-radius: 0 }[data-theme=luxury]{--p: 0 0% 100%;--pf: 0 0% 80%;--sf: 218 54% 14%;--af: 319 22% 21%;--nf: 270 4% 7%;--pc: 0 0% 20%;--sc: 218 100% 84%;--ac: 319 85% 85%;--inc: 202 100% 14%;--suc: 89 100% 10%;--wac: 54 100% 13%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--s: 218 54% 18%;--a: 319 22% 26%;--n: 270 4% 9%;--nc: 37 67% 58%;--b1: 240 10% 4%;--b2: 270 4% 9%;--b3: 270 2% 18%;--bc: 37 67% 58%;--in: 202 100% 70%;--su: 89 62% 52%;--wa: 54 69% 64%;--er: 0 100% 72% }[data-theme=dracula]{--p: 326 100% 74%;--pf: 326 100% 59%;--sf: 265 89% 62%;--af: 31 100% 57%;--nf: 230 15% 24%;--b2: 231 15% 17%;--b3: 231 15% 15%;--pc: 326 100% 15%;--sc: 265 100% 16%;--ac: 31 100% 14%;--nc: 230 71% 86%;--inc: 191 100% 15%;--suc: 135 100% 13%;--wac: 65 100% 15%;--erc: 0 100% 93%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--s: 265 89% 78%;--a: 31 100% 71%;--n: 230 15% 30%;--b1: 231 15% 18%;--bc: 60 30% 96%;--in: 191 97% 77%;--su: 135 94% 65%;--wa: 65 92% 76%;--er: 0 100% 67% }[data-theme=cmyk]{--p: 203 83% 60%;--pf: 203 83% 48%;--sf: 335 78% 48%;--af: 56 100% 48%;--nf: 0 0% 8%;--b2: 0 0% 90%;--b3: 0 0% 81%;--bc: 0 0% 20%;--pc: 203 100% 12%;--sc: 335 100% 92%;--ac: 56 100% 12%;--nc: 0 0% 82%;--inc: 192 100% 10%;--suc: 291 100% 88%;--wac: 25 100% 11%;--erc: 4 100% 91%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--s: 335 78% 60%;--a: 56 100% 60%;--n: 0 0% 10%;--b1: 0 0% 100%;--in: 192 48% 52%;--su: 291 48% 38%;--wa: 25 85% 57%;--er: 4 81% 56% }[data-theme=autumn]{--p: 344 96% 28%;--pf: 344 96% 22%;--sf: 0 63% 47%;--af: 27 56% 50%;--nf: 22 17% 35%;--b2: 0 0% 85%;--b3: 0 0% 77%;--bc: 0 0% 19%;--pc: 344 100% 86%;--sc: 0 100% 92%;--ac: 27 100% 13%;--nc: 22 100% 89%;--inc: 187 100% 10%;--suc: 165 100% 9%;--wac: 30 100% 10%;--erc: 354 100% 90%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--s: 0 63% 58%;--a: 27 56% 63%;--n: 22 17% 44%;--b1: 0 0% 95%;--in: 187 48% 50%;--su: 165 34% 43%;--wa: 30 84% 50%;--er: 354 79% 49% }[data-theme=business]{--p: 210 64% 31%;--pf: 210 64% 24%;--sf: 200 13% 44%;--af: 13 80% 48%;--nf: 213 14% 13%;--b2: 0 0% 11%;--b3: 0 0% 10%;--bc: 0 0% 83%;--pc: 210 100% 86%;--sc: 200 100% 11%;--ac: 13 100% 12%;--nc: 213 28% 83%;--inc: 199 100% 88%;--suc: 144 100% 11%;--wac: 39 100% 12%;--erc: 6 100% 89%;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--s: 200 13% 55%;--a: 13 80% 60%;--n: 213 14% 16%;--b1: 0 0% 13%;--in: 199 100% 42%;--su: 144 31% 56%;--wa: 39 64% 60%;--er: 6 56% 43%;--rounded-box: .25rem;--rounded-btn: .125rem;--rounded-badge: .125rem }[data-theme=acid]{--p: 303 100% 50%;--pf: 303 100% 40%;--sf: 27 100% 40%;--af: 72 98% 40%;--nf: 238 43% 14%;--b2: 0 0% 88%;--b3: 0 0% 79%;--bc: 0 0% 20%;--pc: 303 100% 90%;--sc: 27 100% 10%;--ac: 72 100% 10%;--nc: 238 99% 83%;--inc: 210 100% 12%;--suc: 149 100% 12%;--wac: 53 100% 11%;--erc: 1 100% 89%;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--s: 27 100% 50%;--a: 72 98% 50%;--n: 238 43% 17%;--b1: 0 0% 98%;--in: 210 92% 58%;--su: 149 50% 58%;--wa: 53 93% 57%;--er: 1 100% 45%;--rounded-box: 1.25rem;--rounded-btn: 1rem;--rounded-badge: 1rem }[data-theme=lemonade]{--p: 89 96% 31%;--pf: 89 96% 24%;--sf: 60 81% 44%;--af: 63 80% 71%;--nf: 238 43% 14%;--b2: 0 0% 90%;--b3: 0 0% 81%;--bc: 0 0% 20%;--pc: 89 100% 86%;--sc: 60 100% 11%;--ac: 63 100% 18%;--nc: 238 99% 83%;--inc: 192 79% 17%;--suc: 74 100% 16%;--wac: 50 100% 15%;--erc: 1 100% 17%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--s: 60 81% 55%;--a: 63 80% 88%;--n: 238 43% 17%;--b1: 0 0% 100%;--in: 192 39% 85%;--su: 74 76% 79%;--wa: 50 87% 75%;--er: 1 70% 83% }[data-theme=night]{--p: 198 93% 60%;--pf: 198 93% 48%;--sf: 234 89% 59%;--af: 329 86% 56%;--b2: 222 47% 10%;--b3: 222 47% 9%;--bc: 222 66% 82%;--pc: 198 100% 12%;--sc: 234 100% 15%;--ac: 329 100% 14%;--nc: 217 76% 83%;--inc: 198 100% 10%;--suc: 172 100% 10%;--wac: 41 100% 13%;--erc: 351 100% 14%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--s: 234 89% 74%;--a: 329 86% 70%;--n: 217 33% 17%;--nf: 217 30% 22%;--b1: 222 47% 11%;--in: 198 90% 48%;--su: 172 66% 50%;--wa: 41 88% 64%;--er: 351 95% 71% }[data-theme=coffee]{--p: 30 67% 58%;--pf: 30 67% 46%;--sf: 182 25% 16%;--af: 194 74% 20%;--nf: 300 20% 5%;--b2: 306 19% 10%;--b3: 306 19% 9%;--pc: 30 100% 12%;--sc: 182 67% 84%;--ac: 194 100% 85%;--nc: 300 14% 81%;--inc: 171 100% 13%;--suc: 93 100% 12%;--wac: 43 100% 14%;--erc: 10 100% 15%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--s: 182 25% 20%;--a: 194 74% 25%;--n: 300 20% 6%;--b1: 306 19% 11%;--bc: 37 8% 42%;--in: 171 37% 67%;--su: 93 25% 62%;--wa: 43 100% 69%;--er: 10 95% 75% }[data-theme=winter]{--p: 212 100% 51%;--pf: 212 100% 41%;--sf: 247 47% 35%;--af: 310 49% 42%;--nf: 217 92% 8%;--pc: 212 100% 90%;--sc: 247 100% 89%;--ac: 310 100% 90%;--nc: 217 100% 82%;--inc: 192 100% 16%;--suc: 182 100% 13%;--wac: 32 100% 17%;--erc: 0 100% 14%;--rounded-box: 1rem;--rounded-btn: .5rem;--rounded-badge: 1.9rem;--animation-btn: .25s;--animation-input: .2s;--btn-text-case: uppercase;--btn-focus-scale: .95;--border-btn: 1px;--tab-border: 1px;--tab-radius: .5rem;--s: 247 47% 43%;--a: 310 49% 52%;--n: 217 92% 10%;--b1: 0 0% 100%;--b2: 217 100% 97%;--b3: 219 44% 92%;--bc: 214 30% 32%;--in: 192 93% 78%;--su: 182 47% 66%;--wa: 32 62% 84%;--er: 0 63% 72% }*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::-webkit-backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }[data-theme=dark] .dark\\:btn-outline .badge{--tw-border-opacity: 1;border-color:hsl(var(--nf, var(--n)) / var(--tw-border-opacity));--tw-text-opacity: 1;color:hsl(var(--nc) / var(--tw-text-opacity))}[data-theme=dark] .dark\\:btn-outline.btn-primary .badge{--tw-border-opacity: 1;border-color:hsl(var(--p) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--p) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--pc) / var(--tw-text-opacity))}[data-theme=dark] .dark\\:btn-outline.btn-secondary .badge{--tw-border-opacity: 1;border-color:hsl(var(--s) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--s) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--sc) / var(--tw-text-opacity))}[data-theme=dark] .dark\\:btn-outline.btn-accent .badge{--tw-border-opacity: 1;border-color:hsl(var(--a) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--a) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--ac) / var(--tw-text-opacity))}[data-theme=dark] .dark\\:btn-outline .badge.outline{--tw-border-opacity: 1;border-color:hsl(var(--nf, var(--n)) / var(--tw-border-opacity));background-color:transparent}[data-theme=dark] .dark\\:btn-outline.btn-primary .badge-outline{--tw-border-opacity: 1;border-color:hsl(var(--p) / var(--tw-border-opacity));background-color:transparent;--tw-text-opacity: 1;color:hsl(var(--p) / var(--tw-text-opacity))}[data-theme=dark] .dark\\:btn-outline.btn-secondary .badge-outline{--tw-border-opacity: 1;border-color:hsl(var(--s) / var(--tw-border-opacity));background-color:transparent;--tw-text-opacity: 1;color:hsl(var(--s) / var(--tw-text-opacity))}[data-theme=dark] .dark\\:btn-outline.btn-accent .badge-outline{--tw-border-opacity: 1;border-color:hsl(var(--a) / var(--tw-border-opacity));background-color:transparent;--tw-text-opacity: 1;color:hsl(var(--a) / var(--tw-text-opacity))}[data-theme=dark] .dark\\:btn-outline.btn-info .badge-outline{--tw-border-opacity: 1;border-color:hsl(var(--in) / var(--tw-border-opacity));background-color:transparent;--tw-text-opacity: 1;color:hsl(var(--in) / var(--tw-text-opacity))}[data-theme=dark] .dark\\:btn-outline.btn-success .badge-outline{--tw-border-opacity: 1;border-color:hsl(var(--su) / var(--tw-border-opacity));background-color:transparent;--tw-text-opacity: 1;color:hsl(var(--su) / var(--tw-text-opacity))}[data-theme=dark] .dark\\:btn-outline.btn-warning .badge-outline{--tw-border-opacity: 1;border-color:hsl(var(--wa) / var(--tw-border-opacity));background-color:transparent;--tw-text-opacity: 1;color:hsl(var(--wa) / var(--tw-text-opacity))}[data-theme=dark] .dark\\:btn-outline.btn-error .badge-outline{--tw-border-opacity: 1;border-color:hsl(var(--er) / var(--tw-border-opacity));background-color:transparent;--tw-text-opacity: 1;color:hsl(var(--er) / var(--tw-text-opacity))}[data-theme=dark] .dark\\:btn-outline:hover .badge{--tw-border-opacity: 1;border-color:hsl(var(--b2, var(--b1)) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--bc) / var(--tw-text-opacity))}[data-theme=dark] .dark\\:btn-outline:hover .badge.outline{--tw-border-opacity: 1;border-color:hsl(var(--b2, var(--b1)) / var(--tw-border-opacity));--tw-text-opacity: 1;color:hsl(var(--nc) / var(--tw-text-opacity))}[data-theme=dark] .dark\\:btn-outline.btn-primary:hover .badge{--tw-border-opacity: 1;border-color:hsl(var(--pc) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--pc) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--p) / var(--tw-text-opacity))}[data-theme=dark] .dark\\:btn-outline.btn-primary:hover .badge.outline{--tw-border-opacity: 1;border-color:hsl(var(--pc) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--pf, var(--p)) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--pc) / var(--tw-text-opacity))}[data-theme=dark] .dark\\:btn-outline.btn-secondary:hover .badge{--tw-border-opacity: 1;border-color:hsl(var(--sc) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--sc) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--s) / var(--tw-text-opacity))}[data-theme=dark] .dark\\:btn-outline.btn-secondary:hover .badge.outline{--tw-border-opacity: 1;border-color:hsl(var(--sc) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--sf, var(--s)) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--sc) / var(--tw-text-opacity))}[data-theme=dark] .dark\\:btn-outline.btn-accent:hover .badge{--tw-border-opacity: 1;border-color:hsl(var(--ac) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--ac) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--a) / var(--tw-text-opacity))}[data-theme=dark] .dark\\:btn-outline.btn-accent:hover .badge.outline{--tw-border-opacity: 1;border-color:hsl(var(--ac) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--af, var(--a)) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--ac) / var(--tw-text-opacity))}[data-theme=dark] .dark\\:btn-outline{border-color:currentColor;background-color:transparent;--tw-text-opacity: 1;color:hsl(var(--bc) / var(--tw-text-opacity))}[data-theme=dark] .dark\\:btn-outline:hover{--tw-border-opacity: 1;border-color:hsl(var(--bc) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--bc) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--b1) / var(--tw-text-opacity))}[data-theme=dark] .dark\\:btn-outline.btn-primary{--tw-text-opacity: 1;color:hsl(var(--p) / var(--tw-text-opacity))}[data-theme=dark] .dark\\:btn-outline.btn-primary:hover{--tw-border-opacity: 1;border-color:hsl(var(--pf, var(--p)) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--pf, var(--p)) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--pc) / var(--tw-text-opacity))}[data-theme=dark] .dark\\:btn-outline.btn-secondary{--tw-text-opacity: 1;color:hsl(var(--s) / var(--tw-text-opacity))}[data-theme=dark] .dark\\:btn-outline.btn-secondary:hover{--tw-border-opacity: 1;border-color:hsl(var(--sf, var(--s)) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--sf, var(--s)) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--sc) / var(--tw-text-opacity))}[data-theme=dark] .dark\\:btn-outline.btn-accent{--tw-text-opacity: 1;color:hsl(var(--a) / var(--tw-text-opacity))}[data-theme=dark] .dark\\:btn-outline.btn-accent:hover{--tw-border-opacity: 1;border-color:hsl(var(--af, var(--a)) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--af, var(--a)) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--ac) / var(--tw-text-opacity))}[data-theme=dark] .dark\\:btn-outline.btn-success{--tw-text-opacity: 1;color:hsl(var(--su) / var(--tw-text-opacity))}[data-theme=dark] .dark\\:btn-outline.btn-success:hover{--tw-border-opacity: 1;border-color:hsl(var(--su) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--su) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--suc, var(--nc)) / var(--tw-text-opacity))}[data-theme=dark] .dark\\:btn-outline.btn-info{--tw-text-opacity: 1;color:hsl(var(--in) / var(--tw-text-opacity))}[data-theme=dark] .dark\\:btn-outline.btn-info:hover{--tw-border-opacity: 1;border-color:hsl(var(--in) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--in) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--inc, var(--nc)) / var(--tw-text-opacity))}[data-theme=dark] .dark\\:btn-outline.btn-warning{--tw-text-opacity: 1;color:hsl(var(--wa) / var(--tw-text-opacity))}[data-theme=dark] .dark\\:btn-outline.btn-warning:hover{--tw-border-opacity: 1;border-color:hsl(var(--wa) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--wa) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--wac, var(--nc)) / var(--tw-text-opacity))}[data-theme=dark] .dark\\:btn-outline.btn-error{--tw-text-opacity: 1;color:hsl(var(--er) / var(--tw-text-opacity))}[data-theme=dark] .dark\\:btn-outline.btn-error:hover{--tw-border-opacity: 1;border-color:hsl(var(--er) / var(--tw-border-opacity));--tw-bg-opacity: 1;background-color:hsl(var(--er) / var(--tw-bg-opacity));--tw-text-opacity: 1;color:hsl(var(--erc, var(--nc)) / var(--tw-text-opacity))}#ce-app [data-theme=dark] .dark\\:bg-teal-600{--tw-bg-opacity: 1;background-color:rgb(13 148 136 / var(--tw-bg-opacity))}@media (min-width: 640px){.sm\\:btn-md{height:3rem;padding-left:1rem;padding-right:1rem;min-height:3rem;font-size:.875rem}{height:3rem;width:3rem;border-radius:9999px;padding:0}#ce-app .sm\\:w-6\\/12{width:50%}}@media (min-width: 768px){.md\\:btn-md{height:3rem;padding-left:1rem;padding-right:1rem;min-height:3rem;font-size:.875rem}{height:3rem;width:3rem;border-radius:9999px;padding:0}#ce-app .md\\:w-5\\/12{width:41.666667%}}@media (min-width: 1024px){.lg\\:btn-md{height:3rem;padding-left:1rem;padding-right:1rem;min-height:3rem;font-size:.875rem}{height:3rem;width:3rem;border-radius:9999px;padding:0}}#ce-app .\\[\\&\\>div\\]\\:items-center>div{align-items:center}#ce-app .\\[\\&\\>div\\]\\:justify-center>div{justify-content:center}#ce-app .\\[\\&\\>button\\]\\:mx-5>button{margin-left:1.25rem;margin-right:1.25rem}',
      ),
    ),
      document.head.appendChild(t);
  } catch (r) {
    console.error('vite-plugin-css-injected-by-js', r);
  }
})();
(function (k, H) {
  typeof exports == 'object' && typeof module < 'u'
    ? (module.exports = H())
    : typeof define == 'function' && define.amd
    ? define(H)
    : ((k = typeof globalThis < 'u' ? globalThis : k || self), (k.CreditEstimator = H()));
})(this, function () {
  'use strict';
  function k() {}
  function H(e, t) {
    for (const n in t) e[n] = t[n];
    return e;
  }
  function be(e) {
    return e();
  }
  function we() {
    return Object.create(null);
  }
  function Y(e) {
    e.forEach(be);
  }
  function ke(e) {
    return typeof e == 'function';
  }
  function N(e, t) {
    return e != e ? t == t : e !== t || (e && typeof e == 'object') || typeof e == 'function';
  }
  function xe(e) {
    return Object.keys(e).length === 0;
  }
  function et(e, ...t) {
    if (e == null) return k;
    const n = e.subscribe(...t);
    return n.unsubscribe ? () => n.unsubscribe() : n;
  }
  function B(e, t, n) {
    e.$$.on_destroy.push(et(t, n));
  }
  function ve(e, t, n, l) {
    if (e) {
      const r = ye(e, t, n, l);
      return e[0](r);
    }
  }
  function ye(e, t, n, l) {
    return e[1] && l ? H(n.ctx.slice(), e[1](l(t))) : n.ctx;
  }
  function $e(e, t, n, l) {
    if (e[2] && l) {
      const r = e[2](l(n));
      if (t.dirty === void 0) return r;
      if (typeof r == 'object') {
        const s = [],
          o = Math.max(t.dirty.length, r.length);
        for (let i = 0; i < o; i += 1) s[i] = t.dirty[i] | r[i];
        return s;
      }
      return t.dirty | r;
    }
    return t.dirty;
  }
  function Ae(e, t, n, l, r, s) {
    if (r) {
      const o = ye(t, n, l, s);
      e.p(o, r);
    }
  }
  function Ee(e) {
    if (e.ctx.length > 32) {
      const t = [],
        n = e.ctx.length / 32;
      for (let l = 0; l < n; l++) t[l] = -1;
      return t;
    }
    return -1;
  }
  const tt = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
  function h(e, t) {
    e.appendChild(t);
  }
  function $(e, t, n) {
    e.insertBefore(t, n || null);
  }
  function v(e) {
    e.parentNode.removeChild(e);
  }
  function G(e, t) {
    for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t);
  }
  function b(e) {
    return document.createElement(e);
  }
  function nt(e, t) {
    const n = {};
    for (const l in e) tt(e, l) && t.indexOf(l) === -1 && (n[l] = e[l]);
    return n;
  }
  function x(e) {
    return document.createElementNS('http://www.w3.org/2000/svg', e);
  }
  function j(e) {
    return document.createTextNode(e);
  }
  function T() {
    return j(' ');
  }
  function se() {
    return j('');
  }
  function J(e, t, n, l) {
    return e.addEventListener(t, n, l), () => e.removeEventListener(t, n, l);
  }
  function p(e, t, n) {
    n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
  }
  function Te(e) {
    return e === '' ? null : +e;
  }
  function lt(e) {
    return Array.from(e.childNodes);
  }
  function Q(e, t) {
    (t = '' + t), e.wholeText !== t && (e.data = t);
  }
  function Se(e, t) {
    e.value = t == null ? '' : t;
  }
  let fe;
  function U(e) {
    fe = e;
  }
  const W = [],
    X = [],
    ee = [],
    ce = [],
    rt = Promise.resolve();
  let ae = !1;
  function ot() {
    ae || ((ae = !0), rt.then(Fe));
  }
  function me(e) {
    ee.push(e);
  }
  function Ce(e) {
    ce.push(e);
  }
  const de = new Set();
  let te = 0;
  function Fe() {
    const e = fe;
    do {
      for (; te < W.length; ) {
        const t = W[te];
        te++, U(t), it(t.$$);
      }
      for (U(null), W.length = 0, te = 0; X.length; ) X.pop()();
      for (let t = 0; t < ee.length; t += 1) {
        const n = ee[t];
        de.has(n) || (de.add(n), n());
      }
      ee.length = 0;
    } while (W.length);
    for (; ce.length; ) ce.pop()();
    (ae = !1), de.clear(), U(e);
  }
  function it(e) {
    if (e.fragment !== null) {
      e.update(), Y(e.before_update);
      const t = e.dirty;
      (e.dirty = [-1]), e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(me);
    }
  }
  const ne = new Set();
  let O;
  function le() {
    O = { r: 0, c: [], p: O };
  }
  function re() {
    O.r || Y(O.c), (O = O.p);
  }
  function w(e, t) {
    e && e.i && (ne.delete(e), e.i(t));
  }
  function y(e, t, n, l) {
    if (e && e.o) {
      if (ne.has(e)) return;
      ne.add(e),
        O.c.push(() => {
          ne.delete(e), l && (n && e.d(1), l());
        }),
        e.o(t);
    } else l && l();
  }
  function ut(e, t) {
    const n = {},
      l = {},
      r = { $$scope: 1 };
    let s = e.length;
    for (; s--; ) {
      const o = e[s],
        i = t[s];
      if (i) {
        for (const u in o) u in i || (l[u] = 1);
        for (const u in i) r[u] || ((n[u] = i[u]), (r[u] = 1));
        e[s] = i;
      } else for (const u in o) r[u] = 1;
    }
    for (const o in l) o in n || (n[o] = void 0);
    return n;
  }
  function st(e) {
    return typeof e == 'object' && e !== null ? e : {};
  }
  function Ne(e, t, n) {
    const l = e.$$.props[t];
    l !== void 0 && ((e.$$.bound[l] = n), n(e.$$.ctx[l]));
  }
  function D(e) {
    e && e.c();
  }
  function V(e, t, n, l) {
    const { fragment: r, on_mount: s, on_destroy: o, after_update: i } = e.$$;
    r && r.m(t, n),
      l ||
        me(() => {
          const u = s.map(be).filter(ke);
          o ? o.push(...u) : Y(u), (e.$$.on_mount = []);
        }),
      i.forEach(me);
  }
  function Z(e, t) {
    const n = e.$$;
    n.fragment !== null &&
      (Y(n.on_destroy), n.fragment && n.fragment.d(t), (n.on_destroy = n.fragment = null), (n.ctx = []));
  }
  function ft(e, t) {
    e.$$.dirty[0] === -1 && (W.push(e), ot(), e.$$.dirty.fill(0)), (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
  }
  function M(e, t, n, l, r, s, o, i = [-1]) {
    const u = fe;
    U(e);
    const f = (e.$$ = {
      fragment: null,
      ctx: null,
      props: s,
      update: k,
      not_equal: r,
      bound: we(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(t.context || (u ? u.$$.context : [])),
      callbacks: we(),
      dirty: i,
      skip_bound: !1,
      root: t.target || u.$$.root,
    });
    o && o(f.root);
    let c = !1;
    if (
      ((f.ctx = n
        ? n(e, t.props || {}, (a, m, ...g) => {
            const A = g.length ? g[0] : m;
            return (
              f.ctx && r(f.ctx[a], (f.ctx[a] = A)) && (!f.skip_bound && f.bound[a] && f.bound[a](A), c && ft(e, a)), m
            );
          })
        : []),
      f.update(),
      (c = !0),
      Y(f.before_update),
      (f.fragment = l ? l(f.ctx) : !1),
      t.target)
    ) {
      if (t.hydrate) {
        const a = lt(t.target);
        f.fragment && f.fragment.l(a), a.forEach(v);
      } else f.fragment && f.fragment.c();
      t.intro && w(e.$$.fragment), V(e, t.target, t.anchor, t.customElement), Fe();
    }
    U(u);
  }
  class R {
    $destroy() {
      Z(this, 1), (this.$destroy = k);
    }
    $on(t, n) {
      const l = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
      return (
        l.push(n),
        () => {
          const r = l.indexOf(n);
          r !== -1 && l.splice(r, 1);
        }
      );
    }
    $set(t) {
      this.$$set && !xe(t) && ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
    }
  }
  const z = [];
  function oe(e, t = k) {
    let n;
    const l = new Set();
    function r(i) {
      if (N(e, i) && ((e = i), n)) {
        const u = !z.length;
        for (const f of l) f[1](), z.push(f, e);
        if (u) {
          for (let f = 0; f < z.length; f += 2) z[f][0](z[f + 1]);
          z.length = 0;
        }
      }
    }
    function s(i) {
      r(i(e));
    }
    function o(i, u = k) {
      const f = [i, u];
      return (
        l.add(f),
        l.size === 1 && (n = t(r) || k),
        i(e),
        () => {
          l.delete(f), l.size === 0 && (n(), (n = null));
        }
      );
    }
    return { set: r, update: s, subscribe: o };
  }
  const ct = ['creditSum', 'amountToRepay', 'generalPayment'],
    P = oe(null);
  function at(e, t, n, l) {
    const r = dt(e, n, t),
      s = Ve({ creditSum: e, creditTimeInMonths: t, interestRate: n, annuityPayment: r, minManualPayment: l });
    P.set(s);
  }
  function mt() {
    P.set(null);
  }
  function dt(e, t, n) {
    const l = t / 100 / 12;
    return +(e * ((l * Math.pow(1 + l, n)) / (Math.pow(1 + l, n) - 1))).toFixed(2);
  }
  function ht(e, t) {
    return ((e / 100) * t) / 12;
  }
  function Ve({
    table: e = { items: [], headers: ct },
    creditSum: t,
    creditTimeInMonths: n,
    interestRate: l,
    minManualPayment: r,
    annuityPayment: s,
  }) {
    if ((typeof r == 'number' && t > r) || t > s) {
      const o = !!r && r >= s ? r : s,
        i = t + ht(t, l) - (r != null ? r : o),
        u = +(i > 0 ? i : 0).toFixed(2);
      return u === 0
        ? e
        : (e.items.push({ creditSum: u, amountToRepay: u < o ? u : o, generalPayment: u < o ? u : s }),
          Ve({
            table: e,
            creditSum: u,
            creditTimeInMonths: n - 1,
            interestRate: l,
            minManualPayment: r,
            annuityPayment: s,
          }));
    } else return e;
  }
  const Ze = () => [
      { name: 'creditSum', value: null, type: 'number', label: 'Credit sum', placeholder: 'Enter credit sum' },
      {
        name: 'creditTimeInMonths',
        value: null,
        type: 'number',
        label: 'Amount of months',
        placeholder: 'Enter num of months',
      },
      { name: 'interestRate', value: null, type: 'number', label: 'Interest rate', placeholder: 'Enter %' },
      {
        name: 'minManualPayment',
        value: null,
        type: 'number',
        label: 'Minimal repayment',
        placeholder: 'Enter min sum of repayment / month',
      },
    ],
    ie = oe(Ze()),
    he = oe(!1);
  ie.subscribe((e) => {
    he.set(e.every(({ name: t, value: n }) => (t === 'minManualPayment' ? !0 : !!n)));
  });
  function _t() {
    ie.set(Ze());
  }
  function pt(e) {
    let t, n, l;
    const r = e[3].default,
      s = ve(r, e, e[2], null);
    return {
      c() {
        (t = b('section')), s && s.c(), p(t, 'class', (n = `h-screen overflow-auto w-full${e[1] ? '' : ' hidden'}`));
      },
      m(o, i) {
        $(o, t, i), s && s.m(t, null), e[4](t), (l = !0);
      },
      p(o, [i]) {
        s && s.p && (!l || i & 4) && Ae(s, r, o, o[2], l ? $e(r, o[2], i, null) : Ee(o[2]), null),
          (!l || (i & 2 && n !== (n = `h-screen overflow-auto w-full${o[1] ? '' : ' hidden'}`))) && p(t, 'class', n);
      },
      i(o) {
        l || (w(s, o), (l = !0));
      },
      o(o) {
        y(s, o), (l = !1);
      },
      d(o) {
        o && v(t), s && s.d(o), e[4](null);
      },
    };
  }
  function gt(e, t, n) {
    let l, r;
    B(e, he, (f) => n(5, (l = f))), B(e, P, (f) => n(1, (r = f)));
    let { $$slots: s = {}, $$scope: o } = t,
      i;
    P.subscribe((f) => {
      l && !!f && !!i && setTimeout(() => i.scrollIntoView({ behavior: 'smooth' }), 0);
    });
    function u(f) {
      X[f ? 'unshift' : 'push'](() => {
        (i = f), n(0, i);
      });
    }
    return (
      (e.$$set = (f) => {
        '$$scope' in f && n(2, (o = f.$$scope));
      }),
      [i, r, o, s, u]
    );
  }
  class bt extends R {
    constructor(t) {
      super(), M(this, t, gt, pt, N, {});
    }
  }
  function wt(e) {
    let t, n, l, r, s;
    return {
      c() {
        (t = b('button')),
          (n = j(e[1])),
          p(
            t,
            'class',
            (l = `btn${e[0] ? ' ' + e[0] : ''} w-full btn-md sm:btn-md md:btn-md lg:btn-md ${
              e[3] ? 'btn-disabled' : ''
            }`),
          ),
          p(t, 'aria-disabled', e[3]),
          (t.disabled = e[3]);
      },
      m(o, i) {
        $(o, t, i),
          h(t, n),
          r ||
            ((s = J(t, 'click', function () {
              ke(e[2]) && e[2].apply(this, arguments);
            })),
            (r = !0));
      },
      p(o, [i]) {
        (e = o),
          i & 2 && Q(n, e[1]),
          i & 9 &&
            l !==
              (l = `btn${e[0] ? ' ' + e[0] : ''} w-full btn-md sm:btn-md md:btn-md lg:btn-md ${
                e[3] ? 'btn-disabled' : ''
              }`) &&
            p(t, 'class', l),
          i & 8 && p(t, 'aria-disabled', e[3]),
          i & 8 && (t.disabled = e[3]);
      },
      i: k,
      o: k,
      d(o) {
        o && v(t), (r = !1), s();
      },
    };
  }
  function kt(e, t, n) {
    let { className: l } = t,
      { text: r = 'Button' } = t,
      { onClick: s = () => {} } = t,
      { isDisabled: o = !1 } = t;
    return (
      (e.$$set = (i) => {
        'className' in i && n(0, (l = i.className)),
          'text' in i && n(1, (r = i.text)),
          'onClick' in i && n(2, (s = i.onClick)),
          'isDisabled' in i && n(3, (o = i.isDisabled));
      }),
      [l, r, s, o]
    );
  }
  class je extends R {
    constructor(t) {
      super(), M(this, t, kt, wt, N, { className: 0, text: 1, onClick: 2, isDisabled: 3 });
    }
  }
  function vt(e) {
    let t, n, l, r, s, o, i, u;
    return {
      c() {
        (t = b('div')),
          (n = b('label')),
          (l = b('span')),
          (r = j(e[1])),
          (s = T()),
          (o = b('input')),
          p(l, 'class', 'text-black'),
          p(n, 'for', e[1]),
          p(n, 'class', 'label self-start'),
          p(o, 'id', e[1]),
          p(o, 'type', 'number'),
          p(o, 'placeholder', e[2]),
          p(o, 'class', 'input input-primary input-bordered w-full'),
          p(t, 'class', 'form-control');
      },
      m(f, c) {
        $(f, t, c),
          h(t, n),
          h(n, l),
          h(l, r),
          h(t, s),
          h(t, o),
          Se(o, e[0]),
          i || ((u = J(o, 'input', e[4])), (i = !0));
      },
      p(f, [c]) {
        c & 2 && Q(r, f[1]),
          c & 2 && p(n, 'for', f[1]),
          c & 2 && p(o, 'id', f[1]),
          c & 4 && p(o, 'placeholder', f[2]),
          c & 1 && Te(o.value) !== f[0] && Se(o, f[0]);
      },
      i: k,
      o: k,
      d(f) {
        f && v(t), (i = !1), u();
      },
    };
  }
  function yt(e, t, n) {
    let { value: l, label: r = 'Your label', placeholder: s = 'Your placeholder' } = t;
    const o = 'text';
    function i() {
      (l = Te(this.value)), n(0, l);
    }
    return (
      (e.$$set = (u) => {
        'value' in u && n(0, (l = u.value)),
          'label' in u && n(1, (r = u.label)),
          'placeholder' in u && n(2, (s = u.placeholder));
      }),
      [l, r, s, o, i]
    );
  }
  class $t extends R {
    constructor(t) {
      super(), M(this, t, yt, vt, N, { value: 0, label: 1, placeholder: 2, type: 3 });
    }
    get type() {
      return this.$$.ctx[3];
    }
  }
  const ue = 'data-theme',
    _e = () => {
      var n, l;
      const e = localStorage == null ? void 0 : localStorage.getItem(ue),
        t = (n = document == null ? void 0 : document.documentElement) == null ? void 0 : n.getAttribute(ue);
      return e && e !== t && pe(e), (l = e != null ? e : t) != null ? l : !1;
    },
    pe = (e) => {
      var t;
      (t = document == null ? void 0 : document.documentElement) == null || t.setAttribute(ue, e),
        localStorage == null || localStorage.setItem(ue, e);
    },
    At = () => {
      let e = _e();
      pe(e && e === 'light' ? 'dark' : 'light');
    },
    ge = oe(_e());
  function Et() {
    At(), ge.set(_e());
  }
  function De(e, t, n) {
    const l = e.slice();
    return (l[9] = t[n].value), (l[10] = nt(t[n], ['value'])), (l[11] = t), (l[12] = n), l;
  }
  function Me(e) {
    let t,
      n,
      l = e[0],
      r = [];
    for (let o = 0; o < l.length; o += 1) r[o] = Re(De(e, l, o));
    const s = (o) =>
      y(r[o], 1, 1, () => {
        r[o] = null;
      });
    return {
      c() {
        for (let o = 0; o < r.length; o += 1) r[o].c();
        t = se();
      },
      m(o, i) {
        for (let u = 0; u < r.length; u += 1) r[u].m(o, i);
        $(o, t, i), (n = !0);
      },
      p(o, i) {
        if (i & 1) {
          l = o[0];
          let u;
          for (u = 0; u < l.length; u += 1) {
            const f = De(o, l, u);
            r[u] ? (r[u].p(f, i), w(r[u], 1)) : ((r[u] = Re(f)), r[u].c(), w(r[u], 1), r[u].m(t.parentNode, t));
          }
          for (le(), u = l.length; u < r.length; u += 1) s(u);
          re();
        }
      },
      i(o) {
        if (!n) {
          for (let i = 0; i < l.length; i += 1) w(r[i]);
          n = !0;
        }
      },
      o(o) {
        r = r.filter(Boolean);
        for (let i = 0; i < r.length; i += 1) y(r[i]);
        n = !1;
      },
      d(o) {
        G(r, o), o && v(t);
      },
    };
  }
  function Re(e) {
    let t, n, l, r, s;
    const o = [e[10]];
    function i(f) {
      e[6](f, e[9], e[11], e[12]);
    }
    let u = {};
    for (let f = 0; f < o.length; f += 1) u = H(u, o[f]);
    return (
      e[9] !== void 0 && (u.value = e[9]),
      (n = new $t({ props: u })),
      X.push(() => Ne(n, 'value', i)),
      {
        c() {
          (t = b('div')),
            D(n.$$.fragment),
            (r = T()),
            p(t, 'class', 'flex-auto w-full mx-auto my-2 [&>div]:justify-center [&>div]:items-center');
        },
        m(f, c) {
          $(f, t, c), V(n, t, null), h(t, r), (s = !0);
        },
        p(f, c) {
          e = f;
          const a = c & 1 ? ut(o, [st(e[10])]) : {};
          !l && c & 1 && ((l = !0), (a.value = e[9]), Ce(() => (l = !1))), n.$set(a);
        },
        i(f) {
          s || (w(n.$$.fragment, f), (s = !0));
        },
        o(f) {
          y(n.$$.fragment, f), (s = !1);
        },
        d(f) {
          f && v(t), Z(n);
        },
      }
    );
  }
  function Ie(e) {
    let t, n;
    return (
      (t = new je({ props: { text: 'Reset', className: 'btn-error dark:btn-outline mt-12', onClick: e[7] } })),
      {
        c() {
          D(t.$$.fragment);
        },
        m(l, r) {
          V(t, l, r), (n = !0);
        },
        p: k,
        i(l) {
          n || (w(t.$$.fragment, l), (n = !0));
        },
        o(l) {
          y(t.$$.fragment, l), (n = !1);
        },
        d(l) {
          Z(t, l);
        },
      }
    );
  }
  function Tt(e) {
    let t,
      n,
      l,
      r,
      s,
      o,
      i,
      u,
      f = e[0] && Me(e);
    r = new je({
      props: {
        text: 'Submit',
        className: `${e[4] ? 'btn-primary' : 'btn-success'} dark:btn-outline mt-10`,
        onClick: e[2],
        isDisabled: !e[3],
      },
    });
    let c = e[1] && Ie(e);
    return {
      c() {
        (t = b('form')),
          f && f.c(),
          (n = T()),
          (l = b('div')),
          D(r.$$.fragment),
          (s = T()),
          c && c.c(),
          p(l, 'class', 'max-w-full flex flex-wrap flex-row [&>button]:mx-5 justify-center align-center'),
          p(t, 'class', 'container mx-auto flex items-center justify-center flex-wrap flex-row ');
      },
      m(a, m) {
        $(a, t, m),
          f && f.m(t, null),
          h(t, n),
          h(t, l),
          V(r, l, null),
          h(l, s),
          c && c.m(l, null),
          (o = !0),
          i || ((u = J(t, 'submit', e[8])), (i = !0));
      },
      p(a, [m]) {
        a[0]
          ? f
            ? (f.p(a, m), m & 1 && w(f, 1))
            : ((f = Me(a)), f.c(), w(f, 1), f.m(t, n))
          : f &&
            (le(),
            y(f, 1, 1, () => {
              f = null;
            }),
            re());
        const g = {};
        m & 16 && (g.className = `${a[4] ? 'btn-primary' : 'btn-success'} dark:btn-outline mt-10`),
          m & 4 && (g.onClick = a[2]),
          m & 8 && (g.isDisabled = !a[3]),
          r.$set(g),
          a[1]
            ? c
              ? (c.p(a, m), m & 2 && w(c, 1))
              : ((c = Ie(a)), c.c(), w(c, 1), c.m(l, null))
            : c &&
              (le(),
              y(c, 1, 1, () => {
                c = null;
              }),
              re());
      },
      i(a) {
        o || (w(f), w(r.$$.fragment, a), w(c), (o = !0));
      },
      o(a) {
        y(f), y(r.$$.fragment, a), y(c), (o = !1);
      },
      d(a) {
        a && v(t), f && f.d(), Z(r), c && c.d(), (i = !1), u();
      },
    };
  }
  function St(e, t, n) {
    let l, r;
    B(e, ge, (m) => n(5, (r = m)));
    let { form: s } = t,
      { withReset: o = !1 } = t,
      { onSubmit: i = () => {} } = t,
      { isValidForm: u = !1 } = t;
    function f(m, g, A, E) {
      (A[E].value = m), n(0, s);
    }
    const c = () => {
        _t(), mt();
      },
      a = (m) => {
        m.preventDefault(), m.key === 'Enter' && i();
      };
    return (
      (e.$$set = (m) => {
        'form' in m && n(0, (s = m.form)),
          'withReset' in m && n(1, (o = m.withReset)),
          'onSubmit' in m && n(2, (i = m.onSubmit)),
          'isValidForm' in m && n(3, (u = m.isValidForm));
      }),
      (e.$$.update = () => {
        e.$$.dirty & 32 && n(4, (l = r === 'light'));
      }),
      [s, o, i, u, l, r, f, c, a]
    );
  }
  class Ct extends R {
    constructor(t) {
      super(), M(this, t, St, Tt, N, { form: 0, withReset: 1, onSubmit: 2, isValidForm: 3 });
    }
  }
  function Ft(e) {
    let t, n, l, r;
    const s = e[1].default,
      o = ve(s, e, e[0], null);
    return {
      c() {
        (t = b('section')),
          (n = b('div')),
          (l = b('div')),
          o && o.c(),
          p(l, 'class', 'w-11/12 sm:w-6/12 md:w-5/12 max-w-screen-md mx-auto'),
          p(n, 'class', 'container mx-auto w-full h-full p-10'),
          p(t, 'class', 'bg-green-200 dark:bg-teal-600 min-h-screen w-full');
      },
      m(i, u) {
        $(i, t, u), h(t, n), h(n, l), o && o.m(l, null), (r = !0);
      },
      p(i, [u]) {
        o && o.p && (!r || u & 1) && Ae(o, s, i, i[0], r ? $e(s, i[0], u, null) : Ee(i[0]), null);
      },
      i(i) {
        r || (w(o, i), (r = !0));
      },
      o(i) {
        y(o, i), (r = !1);
      },
      d(i) {
        i && v(t), o && o.d(i);
      },
    };
  }
  function Nt(e, t, n) {
    let { $$slots: l = {}, $$scope: r } = t;
    return (
      (e.$$set = (s) => {
        '$$scope' in s && n(0, (r = s.$$scope));
      }),
      [r, l]
    );
  }
  class Vt extends R {
    constructor(t) {
      super(), M(this, t, Nt, Ft, N, {});
    }
  }
  function Le(e, t, n) {
    const l = e.slice();
    return (l[1] = t[n]), l;
  }
  function Be(e, t, n) {
    const l = e.slice();
    return (l[4] = t[n]), (l[6] = n), l;
  }
  function Oe(e, t, n) {
    const l = e.slice();
    return (l[1] = t[n]), l;
  }
  function He(e, t, n) {
    const l = e.slice();
    return (l[1] = t[n]), l;
  }
  function Ye(e) {
    var Qe, Ue, We;
    let t,
      n,
      l,
      r,
      s,
      o,
      i,
      u,
      f,
      c,
      a,
      m,
      g,
      A = (Qe = e[0]) == null ? void 0 : Qe.headers,
      E = [];
    for (let d = 0; d < A.length; d += 1) E[d] = ze(He(e, A, d));
    let q = (Ue = e[0]) == null ? void 0 : Ue.items,
      S = [];
    for (let d = 0; d < q.length; d += 1) S[d] = Ke(Be(e, q, d));
    let K = (We = e[0]) == null ? void 0 : We.headers,
      C = [];
    for (let d = 0; d < K.length; d += 1) C[d] = Ge(Le(e, K, d));
    return {
      c() {
        (t = b('div')), (n = b('table')), (l = b('thead')), (r = b('tr')), (s = b('th')), (o = T());
        for (let d = 0; d < E.length; d += 1) E[d].c();
        (i = T()), (u = b('tbody'));
        for (let d = 0; d < S.length; d += 1) S[d].c();
        (f = T()), (c = b('tfoot')), (a = b('tr')), (m = b('th')), (g = T());
        for (let d = 0; d < C.length; d += 1) C[d].c();
        p(n, 'class', 'table table-normal w-full'), p(t, 'class', 'overflow-x-auto');
      },
      m(d, I) {
        $(d, t, I), h(t, n), h(n, l), h(l, r), h(r, s), h(r, o);
        for (let F = 0; F < E.length; F += 1) E[F].m(r, null);
        h(n, i), h(n, u);
        for (let F = 0; F < S.length; F += 1) S[F].m(u, null);
        h(n, f), h(n, c), h(c, a), h(a, m), h(a, g);
        for (let F = 0; F < C.length; F += 1) C[F].m(a, null);
      },
      p(d, I) {
        var F, Xe, Pe;
        if (I & 1) {
          A = (F = d[0]) == null ? void 0 : F.headers;
          let _;
          for (_ = 0; _ < A.length; _ += 1) {
            const L = He(d, A, _);
            E[_] ? E[_].p(L, I) : ((E[_] = ze(L)), E[_].c(), E[_].m(r, null));
          }
          for (; _ < E.length; _ += 1) E[_].d(1);
          E.length = A.length;
        }
        if (I & 1) {
          q = (Xe = d[0]) == null ? void 0 : Xe.items;
          let _;
          for (_ = 0; _ < q.length; _ += 1) {
            const L = Be(d, q, _);
            S[_] ? S[_].p(L, I) : ((S[_] = Ke(L)), S[_].c(), S[_].m(u, null));
          }
          for (; _ < S.length; _ += 1) S[_].d(1);
          S.length = q.length;
        }
        if (I & 1) {
          K = (Pe = d[0]) == null ? void 0 : Pe.headers;
          let _;
          for (_ = 0; _ < K.length; _ += 1) {
            const L = Le(d, K, _);
            C[_] ? C[_].p(L, I) : ((C[_] = Ge(L)), C[_].c(), C[_].m(a, null));
          }
          for (; _ < C.length; _ += 1) C[_].d(1);
          C.length = K.length;
        }
      },
      d(d) {
        d && v(t), G(E, d), G(S, d), G(C, d);
      },
    };
  }
  function ze(e) {
    let t,
      n = e[1] + '',
      l;
    return {
      c() {
        (t = b('th')), (l = j(n));
      },
      m(r, s) {
        $(r, t, s), h(t, l);
      },
      p(r, s) {
        s & 1 && n !== (n = r[1] + '') && Q(l, n);
      },
      d(r) {
        r && v(t);
      },
    };
  }
  function qe(e) {
    let t,
      n = e[4][e[1]] + '',
      l;
    return {
      c() {
        (t = b('td')), (l = j(n));
      },
      m(r, s) {
        $(r, t, s), h(t, l);
      },
      p(r, s) {
        s & 1 && n !== (n = r[4][r[1]] + '') && Q(l, n);
      },
      d(r) {
        r && v(t);
      },
    };
  }
  function Ke(e) {
    var f;
    let t,
      n,
      l = e[6] + 1 + '',
      r,
      s,
      o,
      i = (f = e[0]) == null ? void 0 : f.headers,
      u = [];
    for (let c = 0; c < i.length; c += 1) u[c] = qe(Oe(e, i, c));
    return {
      c() {
        (t = b('tr')), (n = b('th')), (r = j(l)), (s = T());
        for (let c = 0; c < u.length; c += 1) u[c].c();
        o = T();
      },
      m(c, a) {
        $(c, t, a), h(t, n), h(n, r), h(t, s);
        for (let m = 0; m < u.length; m += 1) u[m].m(t, null);
        h(t, o);
      },
      p(c, a) {
        var m;
        if (a & 1) {
          i = (m = c[0]) == null ? void 0 : m.headers;
          let g;
          for (g = 0; g < i.length; g += 1) {
            const A = Oe(c, i, g);
            u[g] ? u[g].p(A, a) : ((u[g] = qe(A)), u[g].c(), u[g].m(t, o));
          }
          for (; g < u.length; g += 1) u[g].d(1);
          u.length = i.length;
        }
      },
      d(c) {
        c && v(t), G(u, c);
      },
    };
  }
  function Ge(e) {
    let t,
      n = e[1] + '',
      l;
    return {
      c() {
        (t = b('th')), (l = j(n));
      },
      m(r, s) {
        $(r, t, s), h(t, l);
      },
      p(r, s) {
        s & 1 && n !== (n = r[1] + '') && Q(l, n);
      },
      d(r) {
        r && v(t);
      },
    };
  }
  function Zt(e) {
    let t,
      n = e[0] && Ye(e);
    return {
      c() {
        n && n.c(), (t = se());
      },
      m(l, r) {
        n && n.m(l, r), $(l, t, r);
      },
      p(l, [r]) {
        l[0] ? (n ? n.p(l, r) : ((n = Ye(l)), n.c(), n.m(t.parentNode, t))) : n && (n.d(1), (n = null));
      },
      i: k,
      o: k,
      d(l) {
        n && n.d(l), l && v(t);
      },
    };
  }
  function jt(e, t, n) {
    let { table: l } = t;
    return (
      (e.$$set = (r) => {
        'table' in r && n(0, (l = r.table));
      }),
      [l]
    );
  }
  class Dt extends R {
    constructor(t) {
      super(), M(this, t, jt, Zt, N, { table: 0 });
    }
  }
  function Mt(e) {
    let t, n, l, r, s, o, i, u, f, c;
    return {
      c() {
        (t = b('label')),
          (n = b('input')),
          (l = T()),
          (r = x('svg')),
          (s = x('path')),
          (o = T()),
          (i = x('svg')),
          (u = x('path')),
          p(n, 'type', 'checkbox'),
          p(
            s,
            'd',
            'M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z',
          ),
          p(r, 'class', ' swap-on fill-current w-10 h-10'),
          p(r, 'xmlns', 'http://www.w3.org/2000/svg'),
          p(r, 'viewBox', '0 0 24 24'),
          p(
            u,
            'd',
            'M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z',
          ),
          p(i, 'class', ' swap-off fill-current w-10 h-10'),
          p(i, 'xmlns', 'http://www.w3.org/2000/svg'),
          p(i, 'viewBox', '0 0 24 24'),
          p(t, 'class', 'swap swap-rotate');
      },
      m(a, m) {
        $(a, t, m),
          h(t, n),
          (n.checked = e[0]),
          h(t, l),
          h(t, r),
          h(r, s),
          h(t, o),
          h(t, i),
          h(i, u),
          f || ((c = [J(n, 'change', e[2]), J(n, 'click', Et)]), (f = !0));
      },
      p(a, [m]) {
        m & 1 && (n.checked = a[0]);
      },
      i: k,
      o: k,
      d(a) {
        a && v(t), (f = !1), Y(c);
      },
    };
  }
  function Rt(e, t, n) {
    let l, r;
    B(e, ge, (o) => n(1, (r = o)));
    function s() {
      (l = this.checked), n(0, l), n(1, r);
    }
    return (
      (e.$$.update = () => {
        e.$$.dirty & 2 && n(0, (l = r === 'light'));
      }),
      [l, r, s]
    );
  }
  class It extends R {
    constructor(t) {
      super(), M(this, t, Rt, Mt, N, {});
    }
  }
  const zt = '';
  function Lt(e) {
    let t, n, l, r, s;
    t = new It({});
    function o(u) {
      e[5](u);
    }
    let i = { onSubmit: e[3], isValidForm: e[1], withReset: !0 };
    return (
      e[0] !== void 0 && (i.form = e[0]),
      (l = new Ct({ props: i })),
      X.push(() => Ne(l, 'form', o)),
      {
        c() {
          D(t.$$.fragment), (n = T()), D(l.$$.fragment);
        },
        m(u, f) {
          V(t, u, f), $(u, n, f), V(l, u, f), (s = !0);
        },
        p(u, f) {
          const c = {};
          f & 2 && (c.isValidForm = u[1]), !r && f & 1 && ((r = !0), (c.form = u[0]), Ce(() => (r = !1))), l.$set(c);
        },
        i(u) {
          s || (w(t.$$.fragment, u), w(l.$$.fragment, u), (s = !0));
        },
        o(u) {
          y(t.$$.fragment, u), y(l.$$.fragment, u), (s = !1);
        },
        d(u) {
          Z(t, u), u && v(n), Z(l, u);
        },
      }
    );
  }
  function Je(e) {
    let t, n;
    return (
      (t = new Dt({ props: { table: e[2] } })),
      {
        c() {
          D(t.$$.fragment);
        },
        m(l, r) {
          V(t, l, r), (n = !0);
        },
        p(l, r) {
          const s = {};
          r & 4 && (s.table = l[2]), t.$set(s);
        },
        i(l) {
          n || (w(t.$$.fragment, l), (n = !0));
        },
        o(l) {
          y(t.$$.fragment, l), (n = !1);
        },
        d(l) {
          Z(t, l);
        },
      }
    );
  }
  function Bt(e) {
    let t,
      n,
      l = e[2] && Je(e);
    return {
      c() {
        l && l.c(), (t = se());
      },
      m(r, s) {
        l && l.m(r, s), $(r, t, s), (n = !0);
      },
      p(r, s) {
        r[2]
          ? l
            ? (l.p(r, s), s & 4 && w(l, 1))
            : ((l = Je(r)), l.c(), w(l, 1), l.m(t.parentNode, t))
          : l &&
            (le(),
            y(l, 1, 1, () => {
              l = null;
            }),
            re());
      },
      i(r) {
        n || (w(l), (n = !0));
      },
      o(r) {
        y(l), (n = !1);
      },
      d(r) {
        l && l.d(r), r && v(t);
      },
    };
  }
  function Ot(e) {
    let t, n, l, r, s;
    return (
      (n = new Vt({ props: { $$slots: { default: [Lt] }, $$scope: { ctx: e } } })),
      (r = new bt({ props: { $$slots: { default: [Bt] }, $$scope: { ctx: e } } })),
      {
        c() {
          (t = b('main')),
            D(n.$$.fragment),
            (l = T()),
            D(r.$$.fragment),
            p(t, 'id', 'ce-app'),
            p(t, 'class', 'overflow-x-hidden w-full h-full');
        },
        m(o, i) {
          $(o, t, i), V(n, t, null), h(t, l), V(r, t, null), (s = !0);
        },
        p(o, [i]) {
          const u = {};
          i & 1027 && (u.$$scope = { dirty: i, ctx: o }), n.$set(u);
          const f = {};
          i & 1028 && (f.$$scope = { dirty: i, ctx: o }), r.$set(f);
        },
        i(o) {
          s || (w(n.$$.fragment, o), w(r.$$.fragment, o), (s = !0));
        },
        o(o) {
          y(n.$$.fragment, o), y(r.$$.fragment, o), (s = !1);
        },
        d(o) {
          o && v(t), Z(n), Z(r);
        },
      }
    );
  }
  function Ht(e, t, n) {
    let l, r, s, o;
    B(e, ie, (g) => n(0, (r = g))), B(e, he, (g) => n(1, (s = g))), B(e, P, (g) => n(2, (o = g)));
    let i, u, f, c;
    function a() {
      at(i, u, f, c);
    }
    function m(g) {
      (r = g), ie.set(r);
    }
    return (
      (e.$$.update = () => {
        e.$$.dirty & 1 && n(4, (l = r.reduce((g, A) => ({ ...g, [A.name]: A.value }), {}))),
          e.$$.dirty & 16 && ({ creditSum: i, creditTimeInMonths: u, interestRate: f, minManualPayment: c } = l);
      }),
      [r, s, o, a, l, m]
    );
  }
  class Yt extends R {
    constructor(t) {
      super(), M(this, t, Ht, Ot, N, {});
    }
  }
  return (e) => new Yt({ target: document.getElementById(e) });
});
//# sourceMappingURL=credit-estimator.umd.cjs.map
