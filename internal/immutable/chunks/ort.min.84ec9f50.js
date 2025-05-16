import{_ as cc}from"./preload-helper.a4192956.js";import{g as hc}from"./2.620dc1b0.js";function fc(Me,Kt){for(var rt=0;rt<Kt.length;rt++){const ze=Kt[rt];if(typeof ze!="string"&&!Array.isArray(ze)){for(const Pe in ze)if(Pe!=="default"&&!(Pe in Me)){const at=Object.getOwnPropertyDescriptor(ze,Pe);at&&Object.defineProperty(Me,Pe,at.get?at:{enumerable:!0,get:()=>ze[Pe]})}}}return Object.freeze(Object.defineProperty(Me,Symbol.toStringTag,{value:"Module"}))}function it(Me){throw new Error('Could not dynamically require "'+Me+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ld={exports:{}};(function(Me,Kt){var rt=(()=>{var ze=Object.defineProperty,Pe=Object.getOwnPropertyDescriptor,at=Object.getOwnPropertyNames,Fd=Object.prototype.hasOwnProperty,Kd=(e=>typeof it<"u"?it:typeof Proxy<"u"?new Proxy(e,{get:(t,i)=>(typeof it<"u"?it:t)[i]}):e)(function(e){if(typeof it<"u")return it.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),T=(e,t)=>()=>(e&&(t=e(e=0)),t),nt=(e,t)=>{for(var i in t)ze(e,i,{get:t[i],enumerable:!0})},jd=(e,t,i,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of at(t))!Fd.call(e,a)&&a!==i&&ze(e,a,{get:()=>t[a],enumerable:!(r=Pe(t,a))||r.enumerable});return e},kt=e=>jd(ze({},"__esModule",{value:!0}),e),st,Be,Ue,Br,Ar,Or=T(()=>{st=new Map,Be=[],Ue=(e,t,i)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=st.get(e);if(r===void 0)st.set(e,{backend:t,priority:i});else{if(r.priority>i)return;if(r.priority===i&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${i}`)}if(i>=0){let a=Be.indexOf(e);a!==-1&&Be.splice(a,1);for(let s=0;s<Be.length;s++)if(st.get(Be[s]).priority<=i){Be.splice(s,0,e);return}Be.push(e)}return}throw new TypeError("not a valid backend")},Br=async e=>{let t=st.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let i=!!t.initPromise;try{return i||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return i||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Ar=async e=>{let t=e.executionProviders||[],i=t.map(u=>typeof u=="string"?u:u.name),r=i.length===0?Be:i,a,s=[],n=new Set;for(let u of r){let l=await Br(u);typeof l=="string"?s.push({name:u,err:l}):(a||(a=l),a===l&&n.add(u))}if(!a)throw new Error(`no available backend found. ERR: ${s.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:l}of s)i.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${l}`);let o=t.filter(u=>n.has(typeof u=="string"?u:u.name));return[a,new Proxy(e,{get:(u,l)=>l==="executionProviders"?o:Reflect.get(u,l)})]}}),Qd=T(()=>{Or()}),Rr,Zd=T(()=>{Rr="1.21.0-dev.20250206-d981b153d3"}),jt,me,Dr=T(()=>{Zd(),jt="warning",me={wasm:{},webgl:{},webgpu:{},versions:{common:Rr},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);jt=e}},get logLevel(){return jt}},Object.defineProperty(me,"logLevel",{enumerable:!0})}),J,Xd=T(()=>{Dr(),J=me}),Mr,Pr,Yd=T(()=>{Mr=(e,t)=>{let i=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);i.width=e.dims[3],i.height=e.dims[2];let r=i.getContext("2d");if(r!=null){let a,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],s=e.dims[3]):(a=e.dims[3],s=e.dims[2]);let n=(t==null?void 0:t.format)!==void 0?t.format:"RGB",o=t==null?void 0:t.norm,u,l;o===void 0||o.mean===void 0?u=[255,255,255,255]:typeof o.mean=="number"?u=[o.mean,o.mean,o.mean,o.mean]:(u=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(u[3]=o.mean[3])),o===void 0||o.bias===void 0?l=[0,0,0,0]:typeof o.bias=="number"?l=[o.bias,o.bias,o.bias,o.bias]:(l=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(l[3]=o.bias[3]));let d=s*a,p=0,c=d,h=d*2,f=-1;n==="RGBA"?(p=0,c=d,h=d*2,f=d*3):n==="RGB"?(p=0,c=d,h=d*2):n==="RBG"&&(p=0,h=d,c=d*2);for(let m=0;m<s;m++)for(let y=0;y<a;y++){let _=(e.data[p++]-l[0])*u[0],g=(e.data[c++]-l[1])*u[1],w=(e.data[h++]-l[2])*u[2],$=f===-1?255:(e.data[f++]-l[3])*u[3];r.fillStyle="rgba("+_+","+g+","+w+","+$+")",r.fillRect(y,m,1,1)}if("toDataURL"in i)return i.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Pr=(e,t)=>{let i=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(i!=null){let a,s,n;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],s=e.dims[1],n=e.dims[3]):(a=e.dims[3],s=e.dims[2],n=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,l,d;u===void 0||u.mean===void 0?l=[255,255,255,255]:typeof u.mean=="number"?l=[u.mean,u.mean,u.mean,u.mean]:(l=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(l[3]=u.mean[3])),u===void 0||u.bias===void 0?d=[0,0,0,0]:typeof u.bias=="number"?d=[u.bias,u.bias,u.bias,u.bias]:(d=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(d[3]=u.bias[3]));let p=s*a;if(t!==void 0&&(t.format!==void 0&&n===4&&t.format!=="RGBA"||n===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let c=4,h=0,f=1,m=2,y=3,_=0,g=p,w=p*2,$=-1;o==="RGBA"?(_=0,g=p,w=p*2,$=p*3):o==="RGB"?(_=0,g=p,w=p*2):o==="RBG"&&(_=0,w=p,g=p*2),r=i.createImageData(a,s);for(let b=0;b<s*a;h+=c,f+=c,m+=c,y+=c,b++)r.data[h]=(e.data[_++]-d[0])*l[0],r.data[f]=(e.data[g++]-d[1])*l[1],r.data[m]=(e.data[w++]-d[2])*l[2],r.data[y]=$===-1?255:(e.data[$++]-d[3])*l[3]}else throw new Error("Can not access image data");return r}}),St,Ur,qr,Nr,Vr,Lr,Jd=T(()=>{Zt(),St=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:i,width:r}=t,a=t.norm??{mean:255,bias:0},s,n;typeof a.mean=="number"?s=[a.mean,a.mean,a.mean,a.mean]:s=[a.mean[0],a.mean[1],a.mean[2],a.mean[3]??255],typeof a.bias=="number"?n=[a.bias,a.bias,a.bias,a.bias]:n=[a.bias[0],a.bias[1],a.bias[2],a.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",l=i*r,d=u==="RGBA"?new Float32Array(l*4):new Float32Array(l*3),p=4,c=0,h=1,f=2,m=3,y=0,_=l,g=l*2,w=-1;o==="RGB"&&(p=3,c=0,h=1,f=2,m=-1),u==="RGBA"?w=l*3:u==="RBG"?(y=0,g=l,_=l*2):u==="BGR"&&(g=0,_=l,y=l*2);for(let $=0;$<l;$++,c+=p,f+=p,h+=p,m+=p)d[y++]=(e[c]+n[0])/s[0],d[_++]=(e[h]+n[1])/s[1],d[g++]=(e[f]+n[2])/s[2],w!==-1&&m!==-1&&(d[w++]=(e[m]+n[3])/s[3]);return u==="RGBA"?new ce("float32",d,[1,4,i,r]):new ce("float32",d,[1,3,i,r])},Ur=async(e,t)=>{let i=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,a=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,s=typeof e=="string",n,o=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},l=d=>typeof HTMLCanvasElement<"u"&&d instanceof HTMLCanvasElement||d instanceof OffscreenCanvas?d.getContext("2d"):null;if(i){let d=u();d.width=e.width,d.height=e.height;let p=l(d);if(p!=null){let c=e.height,h=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(c=t.resizedHeight,h=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=c,o.width=h}else o.tensorFormat="RGBA",o.height=c,o.width=h;p.drawImage(e,0,0),n=p.getImageData(0,0,h,c).data}else throw new Error("Can not access image data")}else if(r){let d,p;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(d=t.resizedHeight,p=t.resizedWidth):(d=e.height,p=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=d,o.width=p,t!==void 0){let c=u();c.width=p,c.height=d;let h=l(c);if(h!=null)h.putImageData(e,0,0),n=h.getImageData(0,0,p,d).data;else throw new Error("Can not access image data")}else n=e.data}else if(a){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let d=u();d.width=e.width,d.height=e.height;let p=l(d);if(p!=null){let c=e.height,h=e.width;return p.drawImage(e,0,0,h,c),n=p.getImageData(0,0,h,c).data,o.height=c,o.width=h,St(n,o)}else throw new Error("Can not access image data")}else{if(s)return new Promise((d,p)=>{let c=u(),h=l(c);if(!e||!h)return p();let f=new Image;f.crossOrigin="Anonymous",f.src=e,f.onload=()=>{c.width=f.width,c.height=f.height,h.drawImage(f,0,0,c.width,c.height);let m=h.getImageData(0,0,c.width,c.height);o.height=c.height,o.width=c.width,d(St(m.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(n!==void 0)return St(n,o);throw new Error("Input data provided is not supported - aborted tensor creation")},qr=(e,t)=>{let{width:i,height:r,download:a,dispose:s}=t,n=[1,r,i,4];return new ce({location:"texture",type:"float32",texture:e,dims:n,download:a,dispose:s})},Nr=(e,t)=>{let{dataType:i,dims:r,download:a,dispose:s}=t;return new ce({location:"gpu-buffer",type:i??"float32",gpuBuffer:e,dims:r,download:a,dispose:s})},Vr=(e,t)=>{let{dataType:i,dims:r,download:a,dispose:s}=t;return new ce({location:"ml-tensor",type:i??"float32",mlTensor:e,dims:r,download:a,dispose:s})},Lr=(e,t,i)=>new ce({location:"cpu-pinned",type:e,data:t,dims:i??[t.length]})}),qe,ot,Qt,Gr,ep=T(()=>{qe=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),ot=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Qt=!1,Gr=()=>{if(!Qt){Qt=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,i=typeof Float16Array<"u"&&Float16Array.from;e&&(qe.set("int64",BigInt64Array),ot.set(BigInt64Array,"int64")),t&&(qe.set("uint64",BigUint64Array),ot.set(BigUint64Array,"uint64")),i?(qe.set("float16",Float16Array),ot.set(Float16Array,"float16")):qe.set("float16",Uint16Array)}}}),Wr,Hr,tp=T(()=>{Zt(),Wr=e=>{let t=1;for(let i=0;i<e.length;i++){let r=e[i];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${i}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${i}] must be a non-negative integer, got: ${r}`);t*=r}return t},Hr=(e,t)=>{switch(e.location){case"cpu":return new ce(e.type,e.data,t);case"cpu-pinned":return new ce({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new ce({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new ce({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new ce({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),ce,Zt=T(()=>{Yd(),Jd(),ep(),tp(),ce=class{constructor(e,t,i){Gr();let r,a;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,r=e.type,a=e.dims,e.location){case"cpu-pinned":{let n=qe.get(r);if(!n)throw new TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof n))throw new TypeError(`buffer should be of type ${n.name}`);this.cpuData=e.data;break}case"texture":{if(r!=="float32")throw new TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint64"&&r!=="int8"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let n,o;if(typeof e=="string")if(r=e,o=i,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");n=t}else{let u=qe.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?n=u.from(t,BigInt):n=u.from(t)}else if(t instanceof u)n=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")n=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else throw new TypeError(`A ${r} tensor's data must be type of ${u}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")r="string",n=e;else if(u==="boolean")r="bool",n=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)r="uint8",n=Uint8Array.from(e);else{let u=ot.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=u,n=e}if(o===void 0)o=[n.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");a=o,this.cpuData=n,this.dataLocation="cpu"}let s=Wr(a);if(this.cpuData&&s!==this.cpuData.length&&!((r==="uint4"||r==="int4")&&Math.ceil(s/2)===this.cpuData.length))throw new Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=a,this.size=s}static async fromImage(e,t){return Ur(e,t)}static fromTexture(e,t){return qr(e,t)}static fromGpuBuffer(e,t){return Nr(e,t)}static fromMLTensor(e,t){return Vr(e,t)}static fromPinnedBuffer(e,t,i){return Lr(e,t,i)}toDataURL(e){return Mr(this,e)}toImageData(e){return Pr(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Hr(this,e)}}}),_e,Fr=T(()=>{Zt(),_e=ce}),ut,Xt,ye,ge,Kr=T(()=>{Dr(),ut=(e,t)=>{(typeof me.trace>"u"?!me.wasm.trace:!me.trace)||console.timeStamp(`${e}::ORT::${t}`)},Xt=(e,t)=>{var a;let i=((a=new Error().stack)==null?void 0:a.split(/\r\n|\r|\n/g))||[],r=!1;for(let s=0;s<i.length;s++){if(r&&!i[s].includes("TRACE_FUNC")){let n=`FUNC_${e}::${i[s].trim().split(" ")[1]}`;t&&(n+=`::${t}`),ut("CPU",n);return}i[s].includes("TRACE_FUNC")&&(r=!0)}},ye=e=>{(typeof me.trace>"u"?!me.wasm.trace:!me.trace)||Xt("BEGIN",e)},ge=e=>{(typeof me.trace>"u"?!me.wasm.trace:!me.trace)||Xt("END",e)}}),jr,ip=T(()=>{Or(),Fr(),Kr(),jr=class Gd{constructor(t){this.handler=t}async run(t,i,r){ye();let a={},s={};if(typeof t!="object"||t===null||t instanceof _e||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let n=!0;if(typeof i=="object"){if(i===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(i instanceof _e)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(i)){if(i.length===0)throw new TypeError("'fetches' cannot be an empty array.");n=!1;for(let l of i){if(typeof l!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(l)===-1)throw new RangeError(`'fetches' contains invalid output name: ${l}.`);a[l]=null}if(typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let l=!1,d=Object.getOwnPropertyNames(i);for(let p of this.outputNames)if(d.indexOf(p)!==-1){let c=i[p];(c===null||c instanceof _e)&&(l=!0,n=!1,a[p]=c)}if(l){if(typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else s=i}}else if(typeof i<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let l of this.inputNames)if(typeof t[l]>"u")throw new Error(`input '${l}' is missing in 'feeds'.`);if(n)for(let l of this.outputNames)a[l]=null;let o=await this.handler.run(t,a,s),u={};for(let l in o)if(Object.hasOwnProperty.call(o,l)){let d=o[l];d instanceof _e?u[l]=d:u[l]=new _e(d.type,d.data,d.dims)}return ge(),u}async release(){return this.handler.dispose()}static async create(t,i,r,a){ye();let s,n={};if(typeof t=="string"){if(s=t,typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(s=t,typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let d=t,p=0,c=t.byteLength;if(typeof i=="object"&&i!==null)n=i;else if(typeof i=="number"){if(p=i,!Number.isSafeInteger(p))throw new RangeError("'byteOffset' must be an integer.");if(p<0||p>=d.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${d.byteLength}).`);if(c=t.byteLength-p,typeof r=="number"){if(c=r,!Number.isSafeInteger(c))throw new RangeError("'byteLength' must be an integer.");if(c<=0||p+c>d.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${d.byteLength-p}].`);if(typeof a=="object"&&a!==null)n=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof i<"u")throw new TypeError("'options' must be an object.");s=new Uint8Array(d,p,c)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,u]=await Ar(n),l=await o.createInferenceSessionHandler(s,u);return ge(),new Gd(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),Yt,rp=T(()=>{ip(),Yt=jr}),ap=T(()=>{}),np=T(()=>{}),sp=T(()=>{}),op=T(()=>{}),Qr={};nt(Qr,{InferenceSession:()=>Yt,TRACE:()=>ut,TRACE_FUNC_BEGIN:()=>ye,TRACE_FUNC_END:()=>ge,Tensor:()=>_e,env:()=>J,registerBackend:()=>Ue});var $e=T(()=>{Qd(),Xd(),rp(),Fr(),ap(),np(),Kr(),sp(),op()}),Jt=T(()=>{}),Zr={};nt(Zr,{default:()=>Xr});var ei,ti,Xr,up=T(()=>{var e;zd(),Ne(),si(),ei="ort-wasm-proxy-worker",ti=((e=globalThis.self)==null?void 0:e.name)===ei,ti&&(self.onmessage=t=>{let{type:i,in:r}=t.data;try{switch(i){case"init-wasm":li(r.wasm).then(()=>{$r(r).then(()=>{postMessage({type:i})},a=>{postMessage({type:i,err:a})})},a=>{postMessage({type:i,err:a})});break;case"init-ep":{let{epName:a,env:s}=r;wr(s,a).then(()=>{postMessage({type:i})},n=>{postMessage({type:i,err:n})});break}case"copy-from":{let{buffer:a}=r,s=Lt(a);postMessage({type:i,out:s});break}case"create":{let{model:a,options:s}=r;br(a,s).then(n=>{postMessage({type:i,out:n})},n=>{postMessage({type:i,err:n})});break}case"release":vr(r),postMessage({type:i});break;case"run":{let{sessionId:a,inputIndices:s,inputs:n,outputIndices:o,options:u}=r;kr(a,s,n,o,new Array(o.length).fill(null),u).then(l=>{l.some(d=>d[3]!=="cpu")?postMessage({type:i,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:i,out:l},Ir([...n,...l]))},l=>{postMessage({type:i,err:l})});break}case"end-profiling":Sr(r),postMessage({type:i});break;default:}}catch(a){postMessage({type:i,err:a})}}),Xr=ti?null:t=>new Worker(t??he,{type:"classic",name:ei})}),Yr,Jr,he,ii,It,ea,ta,ri,ia,ai,ra,ni,aa,si=T(()=>{Jt(),Yr=typeof location>"u"?void 0:location.origin,Jr=()=>{var e,t;return typeof document<"u"?(e=document.currentScript)==null?void 0:e.src:typeof self<"u"?(t=self.location)==null?void 0:t.href:void 0},he=Jr(),ii=()=>{if(he&&!he.startsWith("blob:"))return he.substring(0,he.lastIndexOf("/")+1)},It=(e,t)=>{try{let i=t??he;return(i?new URL(e,i):new URL(e)).origin===Yr}catch{return!1}},ea=(e,t)=>{let i=t??he;try{return(i?new URL(e,i):new URL(e)).href}catch{return}},ta=(e,t)=>`${t??"./"}${e}`,ri=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},ia=async e=>(await cc(()=>import(e),[],import.meta.url)).default,ai=(up(),kt(Zr)).default,ra=async()=>{if(!he)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(It(he))return[void 0,ai()];let e=await ri(he);return[e,ai(e)]},ni=void 0,aa=async(e,t,i)=>{if(!e&&!t&&ni&&he&&It(he))return[void 0,ni];{let r="ort-wasm-simd-threaded.jsep.mjs",a=e??ea(r,t),s=i&&a&&!It(a,t),n=s?await ri(a):a??ta(r,t);return[s?n:void 0,await ia(n)]}}}),oi,zt,lt,ui,na,sa,li,re,Ne=T(()=>{si(),zt=!1,lt=!1,ui=!1,na=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},sa=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},li=async e=>{if(zt)return Promise.resolve();if(lt)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(ui)throw new Error("previous call to 'initializeWebAssembly()' failed.");lt=!0;let t=e.initTimeout,i=e.numThreads;if(!sa())throw new Error("WebAssembly SIMD is not supported in the current environment.");let r=na();i>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+i+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=i=1);let a=e.wasmPaths,s=typeof a=="string"?a:void 0,n=a==null?void 0:a.mjs,o=(n==null?void 0:n.href)??n,u=a==null?void 0:a.wasm,l=(u==null?void 0:u.href)??u,d=e.wasmBinary,[p,c]=await aa(o,s,i>1),h=!1,f=[];if(t>0&&f.push(new Promise(m=>{setTimeout(()=>{h=!0,m()},t)})),f.push(new Promise((m,y)=>{let _={numThreads:i};if(d)_.wasmBinary=d;else if(l||s)_.locateFile=g=>l??s+g;else if(o&&o.indexOf("blob:")!==0)_.locateFile=g=>new URL(g,o).href;else if(p){let g=ii();g&&(_.locateFile=w=>g+w)}c(_).then(g=>{lt=!1,zt=!0,oi=g,m(),p&&URL.revokeObjectURL(p)},g=>{lt=!1,ui=!0,y(g)})})),await Promise.race(f),h)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},re=()=>{if(zt&&oi)return oi;throw new Error("WebAssembly is not initialized yet.")}}),oe,Tt,j,di=T(()=>{Ne(),oe=(e,t)=>{let i=re(),r=i.lengthBytesUTF8(e)+1,a=i._malloc(r);return i.stringToUTF8(e,a,r),t.push(a),a},Tt=(e,t,i,r)=>{if(typeof e=="object"&&e!==null){if(i.has(e))throw new Error("Circular reference in options");i.add(e)}Object.entries(e).forEach(([a,s])=>{let n=t?t+a:a;if(typeof s=="object")Tt(s,n+".",i,r);else if(typeof s=="string"||typeof s=="number")r(n,s.toString());else if(typeof s=="boolean")r(n,s?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof s}`)})},j=e=>{let t=re(),i=t.stackSave();try{let r=t.PTR_SIZE,a=t.stackAlloc(2*r);t._OrtGetLastError(a,a+r);let s=Number(t.getValue(a,r===4?"i32":"i64")),n=t.getValue(a+r,"*"),o=n?t.UTF8ToString(n):"";throw new Error(`${e} ERROR_CODE: ${s}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(i)}}}),oa,lp=T(()=>{Ne(),di(),oa=e=>{let t=re(),i=0,r=[],a=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)a.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)a.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(a.terminate=!1);let s=0;return(e==null?void 0:e.tag)!==void 0&&(s=oe(e.tag,r)),i=t._OrtCreateRunOptions(a.logSeverityLevel,a.logVerbosityLevel,!!a.terminate,s),i===0&&j("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Tt(e.extra,"",new WeakSet,(n,o)=>{let u=oe(n,r),l=oe(o,r);t._OrtAddRunConfigEntry(i,u,l)!==0&&j(`Can't set a run config entry: ${n} - ${o}.`)}),[i,r]}catch(s){throw i!==0&&t._OrtReleaseRunOptions(i),r.forEach(n=>t._free(n)),s}}}),ua,la,da,pa,ca,dp=T(()=>{Ne(),di(),ua=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},la=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},da=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(i=>(typeof i=="string"?i:i.name)==="webgpu")&&(e.enableMemPattern=!1)},pa=(e,t,i)=>{for(let r of t){let a=typeof r=="string"?r:r.name;switch(a){case"webnn":if(a="WEBNN",typeof r!="string"){let n=r==null?void 0:r.deviceType;if(n){let o=oe("deviceType",i),u=oe(n,i);re()._OrtAddSessionConfigEntry(e,o,u)!==0&&j(`Can't set a session config entry: 'deviceType' - ${n}.`)}}break;case"webgpu":if(a="JS",typeof r!="string"){let n=r;if(n!=null&&n.preferredLayout){if(n.preferredLayout!=="NCHW"&&n.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${n.preferredLayout}`);let o=oe("preferredLayout",i),u=oe(n.preferredLayout,i);re()._OrtAddSessionConfigEntry(e,o,u)!==0&&j(`Can't set a session config entry: 'preferredLayout' - ${n.preferredLayout}.`)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let s=oe(a,i);re()._OrtAppendExecutionProvider(e,s)!==0&&j(`Can't append execution provider: ${a}.`)}},ca=e=>{let t=re(),i=0,r=[],a=e||{};da(a);try{let s=ua(a.graphOptimizationLevel??"all"),n=la(a.executionMode??"sequential"),o=typeof a.logId=="string"?oe(a.logId,r):0,u=a.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log serverity level is not valid: ${u}`);let l=a.logVerbosityLevel??0;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log verbosity level is not valid: ${l}`);let d=typeof a.optimizedModelFilePath=="string"?oe(a.optimizedModelFilePath,r):0;if(i=t._OrtCreateSessionOptions(s,!!a.enableCpuMemArena,!!a.enableMemPattern,n,!!a.enableProfiling,0,o,u,l,d),i===0&&j("Can't create session options."),a.executionProviders&&pa(i,a.executionProviders,r),a.enableGraphCapture!==void 0){if(typeof a.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${a.enableGraphCapture}`);let p=oe("enableGraphCapture",r),c=oe(a.enableGraphCapture.toString(),r);t._OrtAddSessionConfigEntry(i,p,c)!==0&&j(`Can't set a session config entry: 'enableGraphCapture' - ${a.enableGraphCapture}.`)}if(a.freeDimensionOverrides)for(let[p,c]of Object.entries(a.freeDimensionOverrides)){if(typeof p!="string")throw new Error(`free dimension override name must be a string: ${p}`);if(typeof c!="number"||!Number.isInteger(c)||c<0)throw new Error(`free dimension override value must be a non-negative integer: ${c}`);let h=oe(p,r);t._OrtAddFreeDimensionOverride(i,h,c)!==0&&j(`Can't set a free dimension override: ${p} - ${c}.`)}return a.extra!==void 0&&Tt(a.extra,"",new WeakSet,(p,c)=>{let h=oe(p,r),f=oe(c,r);t._OrtAddSessionConfigEntry(i,h,f)!==0&&j(`Can't set a session config entry: ${p} - ${c}.`)}),[i,r]}catch(s){throw i!==0&&t._OrtReleaseSessionOptions(i)!==0&&j("Can't release session options."),r.forEach(n=>t._free(n)),s}}}),dt,Ve,Xe,pi,Et,ci,hi,fi,P=T(()=>{dt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Ve=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Xe=(e,t)=>{let i=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((a,s)=>a*s,1);return i>0?Math.ceil(r*i):void 0},pi=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Et=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},ci=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",hi=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",fi=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),mi,ha=T(()=>{Jt(),mi=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let i=t.headers.get("Content-Length"),r=i?parseInt(i,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let a=t.body.getReader(),s;try{s=new ArrayBuffer(r)}catch(o){if(o instanceof RangeError){let u=Math.ceil(r/65536);s=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw o}let n=0;for(;;){let{done:o,value:u}=await a.read();if(o)break;let l=u.byteLength;new Uint8Array(s,n,l).set(u),n+=l}return new Uint8Array(s,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),fa,ma,ga,_a,gi,ya,Z,Te=T(()=>{P(),fa=["V","I","W","E","F"],ma=(e,t)=>{console.log(`[${fa[e]},${new Date().toISOString()}]${t}`)},gi=(e,t)=>{ga=e,_a=t},ya=(e,t)=>{let i=Et(e),r=Et(ga);i>=r&&ma(i,typeof t=="function"?t():t)},Z=(...e)=>{_a&&ya(...e)}}),_i,$a=T(()=>{P(),_i=(e,t)=>new(pi(t))(e)}),yi=T(()=>{}),$i,Ct,Bt,wa,ba,wi,bi,va,xa,pp=T(()=>{Te(),yi(),$i=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Ct=[],Bt=e=>Math.ceil(Number(e)/16)*16,wa=e=>{for(let t=0;t<Ct.length;t++){let i=Ct[t];if(e<=i)return i}return Math.ceil(e/16)*16},ba=1,wi=()=>ba++,bi=async(e,t,i,r)=>{let a=Bt(i),s=e.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let n=e.getCommandEncoder();e.endComputePass(),n.copyBufferToBuffer(t,0,s,0,a),e.flush(),await s.mapAsync(GPUMapMode.READ);let o=s.getMappedRange();if(r){let u=r();return u.set(new Uint8Array(o,0,i)),u}else return new Uint8Array(o.slice(0,i))}finally{s.destroy()}},va=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of $i)Ct.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let i=t.buffer,r=t.byteOffset,a=t.byteLength,s=Bt(a),n=this.storageCache.get(e);if(!n)throw new Error("gpu data for uploading does not exist");if(Number(n.originalSize)!==a)throw new Error(`inconsistent data size. gpu data size=${n.originalSize}, data size=${a}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:s,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=o.getMappedRange();new Uint8Array(u).set(new Uint8Array(i,r,a)),o.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(o,0,n.gpuData.buffer,0,s),this.backend.device.queue.submit([l.finish()]),o.destroy(),Z("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let i=this.storageCache.get(e);if(!i)throw new Error("source gpu data for memcpy does not exist");let r=this.storageCache.get(t);if(!r)throw new Error("destination gpu data for memcpy does not exist");if(i.originalSize!==r.originalSize)throw new Error("inconsistent source and destination gpu data size");let a=Bt(i.originalSize),s=this.backend.getCommandEncoder();this.backend.endComputePass(),s.copyBufferToBuffer(i.gpuData.buffer,0,r.gpuData.buffer,0,a)}registerExternalBuffer(e,t,i){let r;if(i){if(r=i[0],e===i[1])return Z("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=wi();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),Z("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Z("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let i=wa(e),r,a=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,s=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(a||s){let o=(a?this.freeBuffers:this.freeUniformBuffers).get(i);o?o.length>0?r=o.pop():r=this.backend.device.createBuffer({size:i,usage:t}):r=this.backend.device.createBuffer({size:i,usage:t})}else r=this.backend.device.createBuffer({size:i,usage:t});let n={id:wi(),type:0,buffer:r};return this.storageCache.set(n.id,{gpuData:n,originalSize:Number(e)}),Z("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${n.id}`),n}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,i=this.storageCache.get(t);if(!i){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return Z("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${i.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(i.gpuData.buffer),i.originalSize}async download(e,t){let i=this.storageCache.get(Number(e));if(!i)throw new Error("data does not exist");await bi(this.backend,i.gpuData.buffer,i.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=$i.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let i=this.freeBuffers.get(e.size)||[];t===void 0||i.length>=t?e.destroy():i.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let i=this.freeUniformBuffers.get(e.size)||[];t===void 0||i.length>=t?e.destroy():i.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(i=>{i.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(Z("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(i=>{i.gpuData.buffer.destroy()}),this.storageCache=new Map)}},xa=(...e)=>new va(...e)}),ka,X,te=T(()=>{ka=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},X=e=>new ka(e)}),Sa,Ye,k,At,Ia,za,Ta,V=T(()=>{Sa=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Ye=class{static calcShape(e,t,i=!1){let r=e.length,a=t.length;if(r===0)return t;if(a===0)return e;let s=Math.max(e.length,t.length),n=new Array(s);if(i){if(r<2||a<2)return;let o=Sa.calcMatMulShape([e[r-2],e[r-1]],[t[a-2],t[a-1]]);if(o===void 0)return;[n[s-2],n[s-1]]=o}for(let o=i?3:1;o<=s;o++){let u=r-o<0?1:e[r-o],l=a-o<0?1:t[a-o];if(u!==l&&u>1&&l>1)return;let d=Math.max(u,l);if(u&&l)n[s-o]=Math.max(u,l);else{if(d>1)return;n[s-o]=0}}return n}static isValidBroadcast(e,t){let i=e.length,r=t.length;if(i>r)return!1;for(let a=1;a<=i;a++)if(e[i-a]!==1&&e[i-a]!==t[r-a])return!1;return!0}},k=class Ft{static size(t){return Ft.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,i=4){let r=t.length;if(r===0)return[];let a=new Array(r),s=r-1;for(;s>=0;){if(t[s]%i===0){a[s]=t[s]/i;break}if(i%t[s]!==0)throw new Error("cannot convert shape");a[s]=1,i/=t[s],s--}for(s--;s>=0;s--)a[s]=t[s];return a}static sizeFromDimension(t,i){if(i<0||i>t.length)throw new Error(`invalid dimension of ${i} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Ft.getSizeFromDimensionRange(t,i,t.length)}static sizeToDimension(t,i){if(i<0||i>t.length)throw new Error(`invalid dimension of ${i} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Ft.getSizeFromDimensionRange(t,0,i)}static getSizeFromDimensionRange(t,i,r){let a=1;for(let s=i;s<r;s++){if(t[s]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");a*=Number(t[s])}return a}static computeStrides(t){let i=t.length;if(i===0)return[];if(i===1)return[1];let r=new Array(i);r[i-1]=1,r[i-2]=t[i-1];for(let a=i-3;a>=0;--a)r[a]=r[a+1]*t[a+1];return r}static normalizeAxis(t,i){if(t<-i&&t>=i)throw new Error("unsupported axis for this operation.");return t<0?t+i:t}static normalizeAxes(t,i){return t.map(r=>this.normalizeAxis(r,i??t.length))}static sortBasedOnPerm(t,i){return i?i.map(r=>t[r]):t.slice().reverse()}static padShape(t,i){let r=t.length;return t.map((a,s)=>a+i[s]+i[s+r])}static areEqual(t,i){return t.length!==i.length?!1:t.every((r,a)=>r===i[a])}},At=class xt{static adjustPoolAttributes(t,i,r,a,s,n){if(!t&&r.length!==i.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<i.length-2;o++)o>=r.length?r.push(i[o+2]):r[o]=i[o+2];for(let o=0;o<r.length;o++)if(o<a.length){if(a[o]<0)throw new Error("strides should be greater than or equal to 1")}else a.push(1);for(let o=0;o<r.length;o++)if(o<s.length){if(s[o]<0)throw new Error("dilations should be greater than or equal to 1")}else s.push(1);for(let o=0;o<r.length*2;o++)if(o<n.length){if(n[o]<0)throw new Error("pad should be greater than or equal to 1")}else n.push(0);for(let o=0;o<r.length;o++){if(r[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(n[o]>=r[o]||n[o+r.length]>=r[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,i,r,a,s,n,o){if(o){if(s.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(a.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)xt.adjustPadAndReturnShape(t[u+(n?1:2)],i[u],r[u],a[u],s,u,u+t.length-2,o)}}static computePoolOutputShape(t,i,r,a,s,n,o){if(i.length<=0)throw new Error("input shape must be of size greater than 0");let u=[i[0],i[1]];return xt.computeShapeHelper(t,i,u,r,a,s,n,o),u}static computeConvOutputShape(t,i,r,a,s,n,o){if(t.length<=0||i.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],i[0]];return xt.computeShapeHelper(!1,t,u,r,a,s,n,o),u}static computeShapeHelper(t,i,r,a,s,n,o,u){if(t)for(let l=0;l<i.length-2;l++)r.push(1);else for(let l=0;l<i.length-2;l++)r.push(xt.adjustPadAndReturnShape(i[l+2],a[l],s[l],n[l],o,l,l+i.length-2,u))}static adjustPadAndReturnShape(t,i,r,a,s,n,o,u){let l=r*(a-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return s[n]=0,s[o]=0,Math.floor((t-l)/i+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let d=((t+i-1)/i-1)*i+a-t;return s[n]=Math.floor(u==="SAME_LOWER"?(d+1)/2:d/2),s[o]=d-s[n],Math.floor((t+d-a)/i+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+s[n]+s[o]-l)/i+1)}},Ia=class{static getShapeOfGemmResult(e,t,i,r,a){if(e.length!==2||i.length!==2)throw new Error("shape need to be of size 2");let s,n,o;t?(s=e[1],n=e[0]):(s=e[0],n=e[1]);let u=-1;if(r?(o=i[0],u=1):(o=i[1],u=0),i[u]!==n)throw new Error("dimension mismatch");if(s<=0||o<=0||n<=0)throw new Error("invalid shape specified");if(a&&!Ye.isValidBroadcast(a,[s,o]))throw new Error("gemm: invalid bias shape for broadcast");return[s,o,n]}},za=-34028234663852886e22,Ta=34028234663852886e22}),Je,Ot,ae,ue,M,ee,vi,et,Ae,R,pt,S,O,Ea,xi,Ca,Ba,G=T(()=>{P(),V(),Je=64,Ot=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},ae=(e,t=1)=>{let i=Ot(e,t);return typeof i=="string"?i:i[0]},ue=(e,t=1)=>{let i=Ot(e,t);return typeof i=="string"?i:i[1]},M=(...e)=>{let t=[];return e.forEach(i=>{i.length!==0&&t.push({type:12,data:i},{type:12,data:k.computeStrides(i)})}),t},ee=e=>e%4===0?4:e%2===0?2:1,vi=(e="f32",t,i="0")=>!t||t===1?`${e}(${i})`:`vec${t}<${e}>(${i})`,et=(e,t,i)=>e==="f32"?i:t===1?`f32(${i})`:`vec${t}<f32>(${i})`,Ae=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,R=(e,t,i,r)=>e.startsWith("uniforms.")&&i>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:i>1?`${e}[${t}]`:e,pt=(e,t,i,r,a)=>{let s=typeof i=="number",n=s?i:i.length,o=[...new Array(n).keys()],u=n<2?"u32":n<=4?`vec${n}<u32>`:`array<u32, ${n}>`,l=Ot(t,a),d=typeof l=="string"?l:l[1],p=typeof l=="string"?l:l[0],c={indices:u,value:d,storage:p,tensor:t},h=z=>typeof z=="string"?z:`${z}u`,f={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},m=s?"uniforms.":"",y=`${m}${e}_shape`,_=`${m}${e}_strides`,g="";for(let z=0;z<n-1;z++)g+=`
    let dim${z} = current / ${R(_,z,n)};
    let rest${z} = current % ${R(_,z,n)};
    indices[${z}] = dim${z};
    current = rest${z};
    `;g+=`indices[${n-1}] = current;`;let w=n<2?"":`
  fn o2i_${e}(offset: u32) -> ${c.indices} {
    var indices: ${c.indices};
    var current = offset;
    ${g}
    return indices;
  }`,$=z=>(f.offsetToIndices=!0,n<2?z:`o2i_${e}(${z})`),b=[];if(n>=2)for(let z=n-1;z>=0;z--)b.push(`${R(_,z,n)} * (indices[${z}])`);let v=n<2?"":`
  fn i2o_${e}(indices: ${c.indices}) -> u32 {
    return ${b.join("+")};
  }`,x=z=>(f.indicesToOffset=!0,n<2?z:`i2o_${e}(${z})`),I=(...z)=>n===0?"0u":`${c.indices}(${z.map(h).join(",")})`,E=(z,B)=>n<2?`${z}`:`${R(z,B,n)}`,C=(z,B,K)=>n<2?`${z}=${K};`:`${R(z,B,n)}=${K};`,q={},W=(z,B)=>{f.broadcastedIndicesToOffset=!0;let K=`${B.name}broadcastedIndicesTo${e}Offset`;if(K in q)return`${K}(${z})`;let ie=[];for(let Se=n-1;Se>=0;Se--){let Ce=B.indicesGet("outputIndices",Se+B.rank-n);ie.push(`${E(_,Se)} * (${Ce} % ${E(y,Se)})`)}return q[K]=`fn ${K}(outputIndices: ${B.type.indices}) -> u32 {
             return ${ie.length>0?ie.join("+"):"0u"};
           }`,`${K}(${z})`},D=(z,B)=>(()=>{if(c.storage===c.value)return`${e}[${z}]=${B};`;if(c.storage==="vec2<u32>"&&c.value==="i32")return`${e}[${z}]=vec2<u32>(u32(${B}), select(0u, 0xFFFFFFFFu, ${B} < 0));`;if(c.storage==="vec2<u32>"&&c.value==="u32")return`${e}[${z}]=vec2<u32>(u32(${B}), 0u);`;if(c.storage==="u32"&&c.value==="vec4<bool>")return`${e}[${z}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${B}));`;throw new Error(`not supported combination of storage type ${c.storage} and value type ${c.value} yet`)})(),H=z=>(()=>{if(c.storage===c.value)return`${e}[${z}]`;if(c.storage==="vec2<u32>"&&c.value==="i32")return`i32(${e}[${z}].x)`;if(c.storage==="vec2<u32>"&&c.value==="u32")return`u32(${e}[${z}].x)`;if(c.storage==="u32"&&c.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${z}] & 0xFFu), bool(${e}[${z}] & 0xFF00u), bool(${e}[${z}] & 0xFF0000u), bool(${e}[${z}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${c.storage} and value type ${c.value} yet`)})(),A=n<2?"":`
  fn get_${e}ByIndices(indices: ${c.indices}) -> ${d} {
    return ${H(`i2o_${e}(indices)`)};
  }`,U=n<2?"":(()=>{let z=o.map(K=>`d${K}: u32`).join(", "),B=o.map(K=>`d${K}`).join(", ");return`
  fn get_${e}(${z}) -> ${d} {
    return get_${e}ByIndices(${I(B)});
  }`})(),Y=(...z)=>{if(z.length!==n)throw new Error(`indices length must be ${n}`);let B=z.map(h).join(",");return n===0?H("0u"):n===1?H(B[0]):(f.get=!0,f.getByIndices=!0,f.indicesToOffset=!0,`get_${e}(${B})`)},L=z=>n<2?H(z):(f.getByIndices=!0,f.indicesToOffset=!0,`get_${e}ByIndices(${z})`),N=n<2?"":`
  fn set_${e}ByIndices(indices: ${c.indices}, value: ${d}) {
    ${D(`i2o_${e}(indices)`,"value")}
  }`,Q=n<2?"":(()=>{let z=o.map(K=>`d${K}: u32`).join(", "),B=o.map(K=>`d${K}`).join(", ");return`
  fn set_${e}(${z}, value: ${d}) {
    set_${e}ByIndices(${I(B)}, value);
  }`})();return{impl:()=>{let z=[],B=!1;return f.offsetToIndices&&(z.push(w),B=!0),f.indicesToOffset&&(z.push(v),B=!0),f.broadcastedIndicesToOffset&&(Object.values(q).forEach(K=>z.push(K)),B=!0),f.set&&(z.push(Q),B=!0),f.setByIndices&&(z.push(N),B=!0),f.get&&(z.push(U),B=!0),f.getByIndices&&(z.push(A),B=!0),!s&&B&&z.unshift(`const ${y} = ${c.indices}(${i.join(",")});`,`const ${_} = ${c.indices}(${k.computeStrides(i).join(",")});`),z.join(`
`)},type:c,offsetToIndices:$,indicesToOffset:x,broadcastedIndicesToOffset:W,indices:I,indicesGet:E,indicesSet:C,set:(...z)=>{if(z.length!==n+1)throw new Error(`indices length must be ${n}`);let B=z[n];if(typeof B!="string")throw new Error("value must be string");let K=z.slice(0,n).map(h).join(",");return n===0?D("0u",B):n===1?D(K[0],B):(f.set=!0,f.setByIndices=!0,f.indicesToOffset=!0,`set_${e}(${K}, ${B})`)},setByOffset:D,setByIndices:(z,B)=>n<2?D(z,B):(f.setByIndices=!0,f.indicesToOffset=!0,`set_${e}ByIndices(${z}, ${B});`),get:Y,getByOffset:H,getByIndices:L,usage:r,name:e,strides:_,shape:y,rank:n}},S=(e,t,i,r=1)=>pt(e,t,i,"input",r),O=(e,t,i,r=1)=>pt(e,t,i,"output",r),Ea=(e,t,i)=>pt(e,t,i,"atomicOutput",1),xi=(e,t,i,r=1)=>pt(e,t,i,"internal",r),Ca=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Je){let t=typeof e=="number"?e:e[0],i=typeof e=="number"?1:e[1],r=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||i>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${i}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*i*r>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${i}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let a=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,s=a?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,n=a?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*i*r}u + local_idx;`;return`@compute @workgroup_size(${t}, ${i}, ${r})
  fn main(${s}) {
    ${n}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let i=e.usage==="input"?"read":"read_write",r=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${i}> ${e.name}: array<${r}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,i=1){return this.uniforms.push({name:e,type:t,length:i}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:i,length:r}of this.uniforms)if(r&&r>4)i==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${i}>, ${Math.ceil(r/8)}>`):e.push(`${t}:array<vec4<${i}>, ${Math.ceil(r/4)}>`);else{let a=r==null||r===1?i:`vec${r}<${i}>`;e.push(`${t}:${a}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Ba=(e,t)=>new Ca(e,t)}),Aa,ki,Oa,Ra,Da,Ma,fe,Pa,Ua,Oe=T(()=>{P(),V(),te(),G(),Aa=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},ki=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Oa=(e,t)=>k.sortBasedOnPerm(e,ki(e.length,t)),Ra=(e,t,i,r)=>{let a=`fn perm(i: ${r.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`;for(let s=0;s<t;++s)a+=`a[${e[s]}]=i[${s}];`;return a+="return a;}"},Da=(e,t)=>{let i=[],r=[];for(let a=0;a<e.length;++a)e[a]!==1&&i.push(e[a]),e[t[a]]!==1&&r.push(t[a]);return{newShape:i,newPerm:r}},Ma=(e,t)=>{let i=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<i)return!1;i=e[r]}return!0},fe=(e,t)=>{let i=e.dataType,r=e.dims.length,a=ki(r,t),s=Oa(e.dims,a),n=e.dims,o=s,u=r<2||Ma(a,e.dims),l;if(u)return l=f=>{let m=S("input",i,n,4),y=O("output",i,o,4);return`
  ${f.registerUniform("output_size","u32").declareVariables(m,y)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let f=k.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64/4)},programUniforms:[{type:12,data:Math.ceil(f/4)}]}},getShaderSource:l};let{newShape:d,newPerm:p}=Da(e.dims,a),c=k.areEqual(p,[2,3,1]),h=k.areEqual(p,[3,1,2]);if(d.length===2||c||h){n=c?[d[0],d[1]*d[2]]:h?[d[0]*d[1],d[2]]:d,o=[n[1],n[0]];let f=16;return l=m=>{let y=S("a",i,n.length),_=O("output",i,o.length);return`
  ${m.registerUniform("output_size","u32").declareVariables(y,_)}
  var<workgroup> tile : array<array<${_.type.value}, ${f+1}>, ${f}>;
  ${m.mainStart([f,f,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${f} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${f}u + local_id.x;
    let input_row = workgroup_id_x * ${f}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${y.getByIndices(`${y.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${f}u + local_id.x;
    let output_row = workgroup_id_y * ${f}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${_.setByIndices(`${_.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let m=k.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/f),y:Math.ceil(o[0]/f)},programUniforms:[{type:12,data:m},...M(n,o)]}},getShaderSource:l}}return l=f=>{let m=S("a",i,n.length),y=O("output",i,o.length);return`
  ${f.registerUniform("output_size","u32").declareVariables(m,y)}

  ${Ra(a,r,m,y)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",m.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let f=k.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},...M(n,o)]}},getShaderSource:l}},Pa=(e,t)=>{Aa(e.inputs,t.perm),e.compute(fe(e.inputs[0],t.perm))},Ua=e=>X({perm:e.perm})}),qa,Na,Va,La,Ga,Wa,Ha,Fa,Ka,ja,we,Qa,Za,Xa,Ya,Ja,en,tn,rn,an,nn,cp=T(()=>{P(),V(),G(),Ii(),Oe(),qa={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Na={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Va={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},La={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Ga=(e,t)=>{let i=[];for(let r=t-e;r<t;++r)i.push(r);return i},Wa=(e,t)=>{let i=[],r=e.length;for(let s=0;s<r;s++)t.indexOf(s)===-1&&i.push(e[s]);let a=t.map(s=>e[s]);return[i,a]},Ha=(e,t)=>{let i=e.length+t.length,r=[],a=0;for(let s=0;s<i;s++)t.indexOf(s)===-1?r.push(e[a++]):r.push(1);return r},Fa=(e,t)=>{for(let i=0;i<e.length;++i)if(e[e.length-i-1]!==t-1-i)return!1;return!0},Ka=(e,t)=>{let i=[];if(!Fa(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&i.push(r);e.forEach(r=>i.push(r))}return i},ja=(e,t,i,r,a,s,n)=>{let o=i[0].dims,u=k.size(s),l=k.size(n),d=S("_A",i[0].dataType,o),p=O("output",a,s),c=64;u===1&&(c=256);let h=`
          var<workgroup> aBestValues : array<f32, ${c}>;
       `,f=m=>`
        ${m.registerUniform("reduceSize","u32").declareVariables(d,p)}
        ${h}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${m.mainStart(c)}

          let outputIndex = global_idx / ${c};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Va[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${c}) {
           let candidate = f32(${d.getByOffset("offset + k")});
           bestValue = ${qa[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${c}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Na[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${p.setByOffset("outputIndex",`${r==="mean"?`${p.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${p.type.storage}(${La[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${c}`,inputDependencies:["type"]},getShaderSource:f,getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:u},programUniforms:[{type:12,data:l}]})}},we=(e,t,i,r)=>{let a=e.inputs.length===1?i:Si(e.inputs,i),s=a.axes;s.length===0&&!a.noopWithEmptyAxes&&(s=e.inputs[0].dims.map((h,f)=>f));let n=k.normalizeAxes(s,e.inputs[0].dims.length),o=n,u=e.inputs[0],l=Ka(o,e.inputs[0].dims.length);l.length>0&&(u=e.compute(fe(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],o=Ga(o.length,u.dims.length));let[d,p]=Wa(u.dims,o),c=d;a.keepDims&&(c=Ha(d,n)),e.compute(ja(t,a.cacheKey,[u],r,e.inputs[0].dataType,c,p),{inputs:[u]})},Qa=(e,t)=>{we(e,"ReduceMeanShared",t,"mean")},Za=(e,t)=>{we(e,"ReduceL1Shared",t,"l1")},Xa=(e,t)=>{we(e,"ReduceL2Shared",t,"l2")},Ya=(e,t)=>{we(e,"ReduceLogSumExpShared",t,"logSumExp")},Ja=(e,t)=>{we(e,"ReduceMaxShared",t,"max")},en=(e,t)=>{we(e,"ReduceMinShared",t,"min")},tn=(e,t)=>{we(e,"ReduceProdShared",t,"prod")},rn=(e,t)=>{we(e,"ReduceSumShared",t,"sum")},an=(e,t)=>{we(e,"ReduceSumSquareShared",t,"sumSquare")},nn=(e,t)=>{we(e,"ReduceLogSumShared",t,"logSum")}}),be,sn,Rt,Si,ve,on,un,ln,dn,pn,cn,hn,fn,mn,gn,xe,_n,yn,$n,wn,bn,vn,xn,kn,Sn,In,Ii=T(()=>{P(),V(),te(),G(),cp(),be=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},sn=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Rt=(e,t,i,r,a,s,n=!1,o=!1)=>{let u=[],l=i[0].dims,d=l.length,p=k.normalizeAxes(a,d),c=!o&&p.length===0;l.forEach((m,y)=>{c||p.indexOf(y)>=0?n&&u.push(1):u.push(m)});let h=u.length,f=k.size(u);return{name:e,shaderCache:t,getShaderSource:m=>{let y=[],_=S("_A",i[0].dataType,d),g=O("output",s,h),w=r(_,g,p),$=w[2];for(let b=0,v=0;b<d;b++)c||p.indexOf(b)>=0?(n&&v++,$=`for(var j${b}: u32 = 0; j${b} < ${l[b]}; j${b}++) {
                  ${w[2].includes("last_index")?`let last_index = j${b};`:""}
                  ${_.indicesSet("input_indices",b,`j${b}`)}
                  ${$}
                }`):(y.push(`${_.indicesSet("input_indices",b,g.indicesGet("output_indices",v))};`),v++);return`

        ${m.registerUniform("output_size","u32").declareVariables(_,g)}

        ${m.mainStart()}
          ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${_.type.indices};
          let output_indices = ${g.offsetToIndices("global_idx")};

          ${y.join(`
`)}
          ${w[0]}       // init ops for reduce max/min
          ${w[1]}
          ${$}
          ${w[3]}
          ${w.length===4?g.setByOffset("global_idx","value"):w.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:s}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},...M(l,u)]})}},Si=(e,t)=>{let i=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>i.push(Number(r))),X({axes:i,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},ve=(e,t,i,r)=>{let a=e.inputs,s=a.length===1?i:Si(a,i);e.compute(Rt(t,{hint:s.cacheKey,inputDependencies:["rank"]},[a[0]],s.noopWithEmptyAxes&&s.axes.length===0?sn:r,s.axes,a[0].dataType,s.keepDims,s.noopWithEmptyAxes),{inputs:[0]})},on=(e,t)=>{be(e.inputs),ve(e,"ReduceLogSum",t,(i,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${i.getByIndices("input_indices")};`,"value = log(value);"])},un=(e,t)=>{be(e.inputs),ve(e,"ReduceL1",t,(i,r)=>[`var value = ${r.type.storage}(0);`,"",`value += abs(${i.getByIndices("input_indices")});`,""])},ln=(e,t)=>{be(e.inputs),ve(e,"ReduceL2",t,(i,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${i.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},dn=(e,t)=>{be(e.inputs),ve(e,"ReduceLogSumExp",t,(i,r)=>[`var value = ${r.type.storage}(0);`,"",`value += exp(${i.getByIndices("input_indices")});`,"value = log(value);"])},pn=(e,t)=>{be(e.inputs),ve(e,"ReduceMax",t,(i,r,a)=>{let s=[];for(let n=0;n<i.rank;n++)(a.indexOf(n)>=0||a.length===0)&&s.push(i.indicesSet("input_indices",n,0));return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};`,`value = max(value, ${i.getByIndices("input_indices")});`,""]})},cn=(e,t)=>{be(e.inputs),ve(e,"ReduceMean",t,(i,r,a)=>{let s=1;for(let n=0;n<i.rank;n++)(a.indexOf(n)>=0||a.length===0)&&(s*=e.inputs[0].dims[n]);return["var sum = f32(0);","",`sum += f32(${i.getByIndices("input_indices")});`,`let value = ${r.type.value}(sum / ${s});`]})},hn=(e,t)=>{be(e.inputs),ve(e,"ReduceMin",t,(i,r,a)=>{let s=[];for(let n=0;n<i.rank;n++)(a.indexOf(n)>=0||a.length===0)&&s.push(`input_indices[${n}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};`,`value = min(value, ${i.getByIndices("input_indices")});`,""]})},fn=(e,t)=>{be(e.inputs),ve(e,"ReduceProd",t,(i,r)=>[`var value = ${r.type.storage}(1);`,"",`value *= ${i.getByIndices("input_indices")};`,""])},mn=(e,t)=>{be(e.inputs),ve(e,"ReduceSum",t,(i,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${i.getByIndices("input_indices")};`,""])},gn=(e,t)=>{be(e.inputs),ve(e,"ReduceSumSquare",t,(i,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${i.getByIndices("input_indices")}; value += t * t;`,""])},xe=(e,t,i)=>{if(t.length===0)return i;let r=1,a=1;for(let s=0;s<t.length;s++)t.indexOf(s)===-1?r*=e[s]:a*=e[s];return a<32&&r>1024},_n=(e,t)=>{xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?cn(e,t):Qa(e,t)},yn=(e,t)=>{xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?un(e,t):Za(e,t)},$n=(e,t)=>{xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ln(e,t):Xa(e,t)},wn=(e,t)=>{xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?dn(e,t):Ya(e,t)},bn=(e,t)=>{xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?pn(e,t):Ja(e,t)},vn=(e,t)=>{xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?hn(e,t):en(e,t)},xn=(e,t)=>{xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?fn(e,t):tn(e,t)},kn=(e,t)=>{xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?mn(e,t):rn(e,t)},Sn=(e,t)=>{xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?gn(e,t):an(e,t)},In=(e,t)=>{xe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?on(e,t):nn(e,t)}}),zi,zn,Tn,Ti,hp=T(()=>{P(),te(),Ii(),zi=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},zn=(e,t)=>{zi(e.inputs);let i=(r,a,s)=>{let n=[];for(let o=0;o<r.rank;o++)(s.indexOf(o)>=0||s.length===0)&&n.push(`input_indices[${o}] = 0;`);return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(Rt("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],i,[t.axis],7,t.keepDims),{inputs:[0]})},Tn=(e,t)=>{zi(e.inputs);let i=(r,a,s)=>{let n=[];for(let o=0;o<r.rank;o++)(s.indexOf(o)>=0||s.length===0)&&n.push(`input_indices[${o}] = 0;`);return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(Rt("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],i,[t.axis],7,t.keepDims),{inputs:[0]})},Ti=e=>X(e)}),En,Dt,Cn,Bn,An,ct,On,Rn,Ei=T(()=>{P(),V(),yi(),G(),En=(e,t)=>{let i=e[0],r=e[1],a=e[2],s=e[3],n=e[4],o=e[5];if(n&&o)throw new Error("Attention cannot have both past and attention_bias");if(i.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=i.dims[0],l=i.dims[1],d=i.dims[2];if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==d)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(a.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let p=a.dims[0]/3,c=p,h=c;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let w of t.qkvHiddenSizes)if(w%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");p=t.qkvHiddenSizes[0],c=t.qkvHiddenSizes[1],h=t.qkvHiddenSizes[2]}let f=l;if(p!==c)throw new Error("qkv_hidden_sizes first element should be same as the second");if(a.dims[0]!==p+c+h)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let m=0;if(n){if(c!==h)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(n.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(n.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(n.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(n.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(n.dims[4]!==c/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(m=n.dims[3])}let y=f+m,_=-1,g=0;if(s)throw new Error("Mask not supported");if(n)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==u||o.dims[1]!==t.numHeads||o.dims[2]!==l||o.dims[3]!==y)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:l,pastSequenceLength:m,kvSequenceLength:f,totalSequenceLength:y,maxSequenceLength:_,inputHiddenSize:d,hiddenSize:p,vHiddenSize:h,headSize:Math.floor(p/t.numHeads),vHeadSize:Math.floor(h/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:g,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Dt=(e,t,i)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e==null?void 0:e.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${i?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,Cn=(e,t,i,r,a,s,n,o)=>{let u=ee(n?1:s),l=64,d=s/u;d<l&&(l=32);let p=Math.ceil(s/u/l),c=[{type:12,data:t},{type:12,data:i},{type:12,data:r},{type:12,data:a},{type:12,data:d},{type:12,data:p}],h=ae(e.dataType,u),f=ue(1,u),m=["type"];n&&m.push("type"),o&&m.push("type");let y=_=>{let g=O("x",e.dataType,e.dims,u),w=[g],$=n?S("seq_lens",n.dataType,n.dims):void 0;$&&w.push($);let b=o?S("total_sequence_length_input",o.dataType,o.dims):void 0;b&&w.push(b);let v=ue(e.dataType),x=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${_.registerUniforms(x).declareVariables(...w)}
  ${_.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Dt($,b,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${l}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${n?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${f}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${f}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(u){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${l}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${f}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${f}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(u){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${l}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${g.type.value}(${v}(1.0) / ${v}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${f}(x[offset + i]);
        x[offset + i] = ${g.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${n?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${g.type.value}(${v}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${l};${h};${u}`,inputDependencies:m},getShaderSource:y,getRunData:()=>({outputs:[],dispatchGroup:{x:Math.ceil(s/l),y:a,z:t*i},programUniforms:c})}},Bn=(e,t,i,r,a,s,n,o,u)=>{let l=n+s.kvSequenceLength,d=[s.batchSize,s.numHeads,s.sequenceLength,l],p=e>1&&r,c=s.kvNumHeads?s.kvNumHeads:s.numHeads,h=p?[s.batchSize,c,l,s.headSize]:void 0,f=s.nReps?s.nReps:1,m=s.scale===0?1/Math.sqrt(s.headSize):s.scale,y=ee(s.headSize),_=s.headSize/y,g=12,w={x:Math.ceil(l/g),y:Math.ceil(s.sequenceLength/g),z:s.batchSize*s.numHeads},$=[{type:12,data:s.sequenceLength},{type:12,data:_},{type:12,data:l},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:1,data:m},{type:12,data:n},{type:12,data:s.kvSequenceLength},{type:12,data:f}],b=p&&r&&k.size(r.dims)>0,v=["type","type"];b&&v.push("type"),a&&v.push("type"),o&&v.push("type"),u&&v.push("type");let x=[{dims:d,dataType:t.dataType,gpuDataType:0}];p&&x.push({dims:h,dataType:t.dataType,gpuDataType:0});let I=E=>{let C=S("q",t.dataType,t.dims,y),q=S("key",i.dataType,i.dims,y),W=[C,q];if(b){let N=S("past_key",r.dataType,r.dims,y);W.push(N)}a&&W.push(S("attention_bias",a.dataType,a.dims));let D=o?S("seq_lens",o.dataType,o.dims):void 0;D&&W.push(D);let H=u?S("total_sequence_length_input",u.dataType,u.dims):void 0;H&&W.push(H);let A=O("output",t.dataType,d),U=[A];p&&U.push(O("present_key",t.dataType,h,y));let Y=ue(1,y),L=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${g}u;

  var<workgroup> tileQ: array<${C.type.storage}, ${g*g}>;
  var<workgroup> tileK: array<${C.type.storage}, ${g*g}>;
  ${E.registerUniforms(L).declareVariables(...W,...U)}
  ${E.mainStart([g,g,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${f===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${f===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Dt(D,H,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${b&&p?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${p?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${Y}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${(()=>b&&p?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`)()}
      ${p?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${Y}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(y){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${y}`)}})()};
        output[outputIdx] = ${A.type.value} (sum * uniforms.alpha) + ${a?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${y};${a!==void 0};${r!==void 0};${e}`,inputDependencies:v},getRunData:()=>({outputs:x,dispatchGroup:w,programUniforms:$}),getShaderSource:I}},An=(e,t,i,r,a,s,n=void 0,o=void 0)=>{let u=s+a.kvSequenceLength,l=a.nReps?a.nReps:1,d=a.vHiddenSize*l,p=e>1&&r,c=a.kvNumHeads?a.kvNumHeads:a.numHeads,h=p?[a.batchSize,c,u,a.headSize]:void 0,f=[a.batchSize,a.sequenceLength,d],m=12,y={x:Math.ceil(a.vHeadSize/m),y:Math.ceil(a.sequenceLength/m),z:a.batchSize*a.numHeads},_=[{type:12,data:a.sequenceLength},{type:12,data:u},{type:12,data:a.vHeadSize},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:12,data:d},{type:12,data:s},{type:12,data:a.kvSequenceLength},{type:12,data:l}],g=p&&r&&k.size(r.dims)>0,w=["type","type"];g&&w.push("type"),n&&w.push("type"),o&&w.push("type");let $=[{dims:f,dataType:t.dataType,gpuDataType:0}];p&&$.push({dims:h,dataType:t.dataType,gpuDataType:0});let b=v=>{let x=S("probs",t.dataType,t.dims),I=S("v",i.dataType,i.dims),E=[x,I];g&&E.push(S("past_value",r.dataType,r.dims));let C=n?S("seq_lens",n.dataType,n.dims):void 0;n&&E.push(C);let q=o?S("total_sequence_length_input",o.dataType,o.dims):void 0;o&&E.push(q);let W=[O("output",t.dataType,f)];p&&W.push(O("present_value",t.dataType,h));let D=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${m}u;
  var<workgroup> tileQ: array<${x.type.value}, ${m*m}>;
  var<workgroup> tileV: array<${x.type.value}, ${m*m}>;
  ${v.registerUniforms(D).declareVariables(...E,...W)}
  ${v.mainStart([m,m,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${l===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Dt(C,q,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${g&&p?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${p?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${x.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${(()=>g&&p?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`)()}
        ${p?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:w},getRunData:()=>({outputs:$,dispatchGroup:y,programUniforms:_}),getShaderSource:b}},ct=(e,t,i,r,a,s,n,o,u,l,d=void 0,p=void 0)=>{let c=Math.min(e.outputCount,1+(n?1:0)+(o?1:0)),h=c>1?l.pastSequenceLength:0,f=h+l.kvSequenceLength,m=u&&k.size(u.dims)>0?u:void 0,y=[t,i];c>1&&n&&k.size(n.dims)>0&&y.push(n),m&&y.push(m),d&&y.push(d),p&&y.push(p);let _=e.compute(Bn(c,t,i,n,m,l,h,d,p),{inputs:y,outputs:c>1?[-1,1]:[-1]})[0];e.compute(Cn(_,l.batchSize,l.numHeads,h,l.sequenceLength,f,d,p),{inputs:d&&p?[_,d,p]:[_],outputs:[]});let g=[_,r];c>1&&o&&k.size(o.dims)>0&&g.push(o),d&&g.push(d),p&&g.push(p),e.compute(An(c,_,r,o,l,h,d,p),{inputs:g,outputs:c>1?[0,2]:[0]})},On=(e,t)=>{let i=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,a=t.inputHiddenSize,s=t.headSize,n=12,o={x:Math.ceil(t.headSize/n),y:Math.ceil(t.sequenceLength/n),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],l=[{type:12,data:r},{type:12,data:a},{type:12,data:s},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],d=p=>{let c=O("output_q",u[0].dataType,i),h=O("output_k",u[0].dataType,i),f=O("output_v",u[0].dataType,i),m=S("input",u[0].dataType,u[0].dims),y=S("weight",u[1].dataType,u[1].dims),_=S("bias",u[2].dataType,u[2].dims),g=m.type.storage,w=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${n}u;
  var<workgroup> tileInput: array<${g}, ${n*n}>;
  var<workgroup> tileWeightQ: array<${g}, ${n*n}>;
  var<workgroup> tileWeightK: array<${g}, ${n*n}>;
  var<workgroup> tileWeightV: array<${g}, ${n*n}>;
  ${p.registerUniforms(w).declareVariables(m,y,_,c,h,f)}
  ${p.mainStart([n,n,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${g}(0);
    var valueK = ${g}(0);
    var valueV = ${g}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:l}),getShaderSource:d},{inputs:u,outputs:[-1,-1,-1]})},Rn=(e,t)=>{let i=En(e.inputs,t),[r,a,s]=On(e,i);return ct(e,r,a,s,e.inputs[4],void 0,void 0,void 0,e.inputs[5],i)}}),Dn,Mn,Pn,Un,fp=T(()=>{$e(),P(),V(),te(),G(),Dn=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let i=(r,a,s)=>{let n=a.length;if(n!==r.length)throw new Error(`${s}: num dimensions != ${n}`);a.forEach((o,u)=>{if(o!==r[u])throw new Error(`${s}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);i(e[1].dims,r,"Invalid input scale"),i(e[2].dims,r,"Invalid input B"),i(e[3].dims,r,"Invalid input mean"),i(e[4].dims,r,"Invalid input var")}else i(e[1].dims,[1],"Invalid input scale"),i(e[2].dims,[1],"Invalid input B"),i(e[3].dims,[1],"Invalid input mean"),i(e[4].dims,[1],"Invalid input var")},Mn=(e,t)=>{let{epsilon:i,spatial:r,format:a}=t,s=e[0].dims,n=r?ee(s[s.length-1]):1,o=a==="NHWC"&&s.length>1?n:1,u=k.size(s)/n,l=r,d=l?s.length:s,p=S("x",e[0].dataType,e[0].dims,n),c=S("scale",e[1].dataType,e[1].dims,o),h=S("bias",e[2].dataType,e[2].dims,o),f=S("inputMean",e[3].dataType,e[3].dims,o),m=S("inputVar",e[4].dataType,e[4].dims,o),y=O("y",e[0].dataType,d,n),_=()=>{let w="";if(r)w=`let cOffset = ${s.length===1?"0u":a==="NHWC"?`outputIndices[${s.length-1}] / ${n}`:"outputIndices[1]"};`;else if(a==="NCHW")w=`
            ${y.indicesSet("outputIndices","0","0")}
            let cOffset = ${y.indicesToOffset("outputIndices")};`;else{w=`var cIndices = ${c.type.indices}(0);
                       cIndices[0] = outputIndices[${s.length-1}];`;for(let $=1;$<c.rank;$++)w+=`cIndices[${$}] = outputIndices[${$}];`;w+=`let cOffset = ${c.indicesToOffset("cIndices")};`}return w},g=w=>`
  const epsilon = ${i};
  ${w.registerUniform("outputSize","u32").declareVariables(p,c,h,f,m,y)}
  ${w.mainStart()}
  ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${y.offsetToIndices(`global_idx * ${n}`)};
    ${_()}
    let scale = ${c.getByOffset("cOffset")};
    let bias = ${h.getByOffset("cOffset")};
    let inputMean = ${f.getByOffset("cOffset")};
    let inputVar = ${m.getByOffset("cOffset")};
    let x = ${p.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${y.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${n}`,inputDependencies:l?["rank","type","type","type","type"]:void 0},getShaderSource:g,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l?[{type:12,data:u},...M(s)]:[{type:12,data:u}]})}},Pn=e=>X(e),Un=(e,t)=>{let{inputs:i,outputCount:r}=e,a=Pn({...t,outputCount:r});if(J.webgpu.validateInputContent&&Dn(i,a),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Mn(i,a))}}),qn,Nn,Vn,mp=T(()=>{V(),G(),qn=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Nn=e=>{let t=e[0].dims,i=e[0].dims[2],r=k.size(t)/4,a=e[0].dataType,s=S("input",a,t,4),n=S("bias",a,[i],4),o=S("residual",a,t,4),u=O("output",a,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:l=>`
  const channels = ${i}u / 4;
  ${l.declareVariables(s,n,o,u)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${s.getByOffset("global_idx")}
      + ${n.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},Vn=e=>{qn(e.inputs),e.compute(Nn(e.inputs))}}),Ln,F,Gn,Wn,Hn,Fn,Kn,jn,Qn,Zn,Xn,Yn,Jn,es,ts,is,ht,rs,Mt,as,ns,ss,os,us,ls,ds,ps,cs,hs,fs,ms,gs,_s,ys,$s,Ci,ws,Bi,Ai,bs,vs,xs,ks,Ss,Is,Oi=T(()=>{P(),V(),te(),G(),Ln=(e,t,i,r,a,s,n)=>{let o=Math.ceil(t/4),u="";typeof a=="string"?u=`${a}(a)`:u=a("a");let l=S("inputData",i,[o],4),d=O("outputData",r,[o],4),p=[{name:"vec_size",type:"u32"}];return n&&p.push(...n),`
      ${e.registerUniforms(p).declareVariables(l,d)}

  ${s??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${l.getByOffset("global_idx")};
    ${d.setByOffset("global_idx",u)}
  }`},F=(e,t,i,r,a,s=e.dataType,n,o)=>{let u=[{type:12,data:Math.ceil(k.size(e.dims)/4)}];return n&&u.push(...n),{name:t,shaderCache:{hint:a,inputDependencies:["type"]},getShaderSource:l=>Ln(l,k.size(e.dims),e.dataType,s,i,r,o),getRunData:l=>({outputs:[{dims:e.dims,dataType:s}],dispatchGroup:{x:Math.ceil(k.size(l[0].dims)/64/4)},programUniforms:u})}},Gn=e=>{e.compute(F(e.inputs[0],"Abs","abs"))},Wn=e=>{e.compute(F(e.inputs[0],"Acos","acos"))},Hn=e=>{e.compute(F(e.inputs[0],"Acosh","acosh"))},Fn=e=>{e.compute(F(e.inputs[0],"Asin","asin"))},Kn=e=>{e.compute(F(e.inputs[0],"Asinh","asinh"))},jn=e=>{e.compute(F(e.inputs[0],"Atan","atan"))},Qn=e=>{e.compute(F(e.inputs[0],"Atanh","atanh"))},Zn=e=>X(e),Xn=(e,t)=>{let i;switch(t.to){case 10:i="vec4<f16>";break;case 1:i="vec4<f32>";break;case 12:i="vec4<u32>";break;case 6:i="vec4<i32>";break;case 9:i="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(F(e.inputs[0],"Cast",i,void 0,t.cacheKey,t.to))},Yn=e=>{let t,i,r=e.length>=2&&e[1].data!==0,a=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,i=a?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,i=a?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return X({min:t,max:i})},Jn=(e,t)=>{let i=t||Yn(e.inputs),r=ue(e.inputs[0].dataType);e.compute(F(e.inputs[0],"Clip",a=>`clamp(${a}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,i.cacheKey,void 0,[{type:e.inputs[0].dataType,data:i.min},{type:e.inputs[0].dataType,data:i.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},es=e=>{e.compute(F(e.inputs[0],"Ceil","ceil"))},ts=e=>{e.compute(F(e.inputs[0],"Cos","cos"))},is=e=>{e.compute(F(e.inputs[0],"Cosh","cosh"))},ht=e=>X(e),rs=(e,t)=>{let i=ue(e.inputs[0].dataType);e.compute(F(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
  const elu_alpha_ = ${i}(${t.alpha});

  fn elu_f32(a: ${i}) -> ${i} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${i}>) -> vec4<${i}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Mt=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,as=e=>{let t=ue(e.inputs[0].dataType);e.compute(F(e.inputs[0],"Erf",i=>`erf_vf32(${i})`,Mt(t)))},ns=e=>{e.compute(F(e.inputs[0],"Exp","exp"))},ss=e=>{e.compute(F(e.inputs[0],"Floor","floor"))},os=e=>{let t=ue(e.inputs[0].dataType);e.compute(F(e.inputs[0],"Gelu",i=>`0.5 * ${i} * (1.0 + erf_vf32(${i} * 0.7071067811865475))`,Mt(t)))},us=(e,t)=>{let i=ue(e.inputs[0].dataType);e.compute(F(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${i}>(0.0))`,`const leaky_relu_alpha_ = ${i}(${t.alpha});`,t.cacheKey))},ls=e=>{e.compute(F(e.inputs[0],"Not",t=>`!${t}`))},ds=e=>{e.compute(F(e.inputs[0],"Neg",t=>`-${t}`))},ps=e=>{e.compute(F(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},cs=e=>{let t=ue(e.inputs[0].dataType);e.compute(F(e.inputs[0],"Relu",i=>`select(vec4<${t}>(0.0), ${i}, ${i} > vec4<${t}>(0.0))`))},hs=e=>{e.compute(F(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},fs=e=>X(e),ms=(e,t)=>{let i=ue(e.inputs[0].dataType);e.compute(F(e.inputs[0],"HardSigmoid",r=>`max(vec4<${i}>(0.0), min(vec4<${i}>(1.0), ${t.alpha} * ${r} + vec4<${i}>(${t.beta})))`,void 0,t.cacheKey))},gs=e=>{e.compute(F(e.inputs[0],"Sin","sin"))},_s=e=>{e.compute(F(e.inputs[0],"Sinh","sinh"))},ys=e=>{e.compute(F(e.inputs[0],"Sqrt","sqrt"))},$s=e=>{e.compute(F(e.inputs[0],"Tan","tan"))},Ci=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,ws=e=>{e.compute(F(e.inputs[0],"Tanh",Ci))},Bi=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Ci("v")};
}
`,Ai=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,bs=e=>{let t=ue(e.inputs[0].dataType);e.compute(F(e.inputs[0],"FastGelu",Ai,Bi(t),void 0,e.inputs[0].dataType))},vs=(e,t)=>{let i=ue(e.inputs[0].dataType);return e.compute(F(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${i}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${i}>(${t.alpha});`,t.cacheKey)),0},xs=e=>{e.compute(F(e.inputs[0],"Log","log"))},ks=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,Ss=e=>`quick_gelu_impl(${e})`,Is=(e,t)=>{let i=ue(e.inputs[0].dataType);e.compute(F(e.inputs[0],"QuickGelu",Ss,ks(i,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),zs,Ts,Es,gp=T(()=>{V(),G(),Oi(),zs=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Ts=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let i=S("input",e[0].dataType,e[0].dims,4),r=S("bias",e[0].dataType,[e[0].dims[2]],4),a=O("output",e[0].dataType,t,4),s=k.size(t)/4,n=ae(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(i,r,a)}

  ${Mt(n)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${a.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Es=e=>{zs(e.inputs),e.compute(Ts(e.inputs))}}),Cs,Bs,ke,As,Os,Rs,Ds,Ms,Ps,Us,qs,Ns,Vs,_p=T(()=>{P(),V(),G(),Cs=(e,t,i,r,a,s,n,o,u,l,d,p)=>{let c,h;typeof o=="string"?c=h=(g,w)=>`${o}((${g}),(${w}))`:typeof o=="function"?c=h=o:(c=o.scalar,h=o.vector);let f=O("outputData",d,r.length,4),m=S("aData",u,t.length,4),y=S("bData",l,i.length,4),_;if(a)if(s){let g=k.size(t)===1,w=k.size(i)===1,$=t.length>0&&t[t.length-1]%4===0,b=i.length>0&&i[i.length-1]%4===0;g||w?_=f.setByOffset("global_idx",h(g?`${m.type.value}(${m.getByOffset("0")}.x)`:m.getByOffset("global_idx"),w?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"))):_=`
            let outputIndices = ${f.offsetToIndices("global_idx * 4u")};
            let offsetA = ${m.broadcastedIndicesToOffset("outputIndices",f)};
            let offsetB = ${y.broadcastedIndicesToOffset("outputIndices",f)};
            ${f.setByOffset("global_idx",h(n||$?m.getByOffset("offsetA / 4u"):`${m.type.value}(${m.getByOffset("offsetA / 4u")}[offsetA % 4u])`,n||b?y.getByOffset("offsetB / 4u"):`${y.type.value}(${y.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else _=f.setByOffset("global_idx",h(m.getByOffset("global_idx"),y.getByOffset("global_idx")));else{if(!s)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let g=(w,$,b="")=>{let v=`aData[indexA${$}][componentA${$}]`,x=`bData[indexB${$}][componentB${$}]`;return`
            let outputIndices${$} = ${f.offsetToIndices(`global_idx * 4u + ${$}u`)};
            let offsetA${$} = ${m.broadcastedIndicesToOffset(`outputIndices${$}`,f)};
            let offsetB${$} = ${y.broadcastedIndicesToOffset(`outputIndices${$}`,f)};
            let indexA${$} = offsetA${$} / 4u;
            let indexB${$} = offsetB${$} / 4u;
            let componentA${$} = offsetA${$} % 4u;
            let componentB${$} = offsetB${$} % 4u;
            ${w}[${$}] = ${b}(${c(v,x)});
          `};d===9?_=`
            var data = vec4<u32>(0);
            ${g("data",0,"u32")}
            ${g("data",1,"u32")}
            ${g("data",2,"u32")}
            ${g("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:_=`
            ${g("outputData[global_idx]",0)}
            ${g("outputData[global_idx]",1)}
            ${g("outputData[global_idx]",2)}
            ${g("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(m,y,f)}

        ${p??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${_}
      }`},Bs=(e,t,i,r,a,s,n=i.dataType)=>{let o=i.dims.map(m=>Number(m)??1),u=r.dims.map(m=>Number(m)??1),l=!k.areEqual(o,u),d=o,p=k.size(o),c=!1,h=!1,f=[l];if(l){let m=Ye.calcShape(o,u,!1);if(!m)throw new Error("Can't perform binary op on the given tensors");d=m.slice(),p=k.size(d);let y=k.size(o)===1,_=k.size(u)===1,g=o.length>0&&o[o.length-1]%4===0,w=u.length>0&&u[u.length-1]%4===0;f.push(y),f.push(_),f.push(g),f.push(w);let $=1;for(let b=1;b<d.length;b++){let v=o[o.length-b],x=u[u.length-b];if(v===x)$*=v;else break}$%4===0?(h=!0,c=!0):(y||_||g||w)&&(c=!0)}else c=!0;return f.push(c),{name:e,shaderCache:{hint:t+f.map(m=>m.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:m=>Cs(m,o,u,d,c,l,h,a,i.dataType,r.dataType,n,s),getRunData:()=>({outputs:[{dims:d,dataType:n}],dispatchGroup:{x:Math.ceil(p/64/4)},programUniforms:[{type:12,data:Math.ceil(k.size(d)/4)},...M(o,u,d)]})}},ke=(e,t,i,r,a,s)=>{e.compute(Bs(t,a??"",e.inputs[0],e.inputs[1],i,r,s))},As=e=>{ke(e,"Add",(t,i)=>`${t}+${i}`)},Os=e=>{ke(e,"Div",(t,i)=>`${t}/${i}`)},Rs=e=>{ke(e,"Equal",{scalar:(t,i)=>`u32(${t}==${i})`,vector:(t,i)=>`vec4<u32>(${t}==${i})`},void 0,void 0,9)},Ds=e=>{ke(e,"Mul",(t,i)=>`${t}*${i}`)},Ms=e=>{let t=S("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;ke(e,"Pow",{scalar:(i,r)=>`pow_custom(${i},${r})`,vector:(i,r)=>`pow_vector_custom(${i},${r})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},Ps=e=>{ke(e,"Sub",(t,i)=>`${t}-${i}`)},Us=e=>{ke(e,"Greater",{scalar:(t,i)=>`u32(${t}>${i})`,vector:(t,i)=>`vec4<u32>(${t}>${i})`},void 0,void 0,9)},qs=e=>{ke(e,"Less",{scalar:(t,i)=>`u32(${t}<${i})`,vector:(t,i)=>`vec4<u32>(${t}<${i})`},void 0,void 0,9)},Ns=e=>{ke(e,"GreaterOrEqual",{scalar:(t,i)=>`u32(${t}>=${i})`,vector:(t,i)=>`vec4<u32>(${t}>=${i})`},void 0,void 0,9)},Vs=e=>{ke(e,"LessOrEqual",{scalar:(t,i)=>`u32(${t}<=${i})`,vector:(t,i)=>`vec4<u32>(${t}<=${i})`},void 0,void 0,9)}}),Ls,Gs,Ws,Hs,Fs,Ks,yp=T(()=>{P(),V(),te(),G(),Ls=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let i=0,r=e[i],a=r.dataType,s=r.dims.length;e.forEach((n,o)=>{if(o!==i){if(n.dataType!==a)throw new Error("input tensors should be one type");if(n.dims.length!==s)throw new Error("input tensors should have the same shape");n.dims.forEach((u,l)=>{if(l!==t&&u!==r.dims[l])throw new Error("non concat dimensions must match")})}})},Gs=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Ws=(e,t)=>{let i=e.length,r=[];for(let a=0;a<i;++a){let s=t.setByOffset("global_idx",e[a].getByIndices("indices"));i===1?r.push(s):a===0?r.push(`if (inputIndex == ${a}u) { ${s} }`):a===i-1?r.push(`else { ${s} }`):r.push(`else if (inputIndex == ${a}) { ${s} }`)}return r.join(`
`)},Hs=(e,t,i,r)=>{let a=k.size(i),s=new Array(e.length),n=new Array(e.length),o=0,u=[],l=[],d=[{type:12,data:a}];for(let m=0;m<e.length;++m)o+=e[m].dims[t],s[m]=o,l.push(e[m].dims.length),n[m]=S(`input${m}`,r,l[m]),u.push("rank"),d.push({type:12,data:s[m]});for(let m=0;m<e.length;++m)d.push(...M(e[m].dims));d.push(...M(i));let p=O("output",r,i.length),c=p.indicesGet("indices",t),h=Array.from(Array(s.length).keys()).map(m=>`uniforms.sizeInConcatAxis${m}`).join(","),f=m=>`

  ${(()=>{m.registerUniform("outputSize","u32");for(let y=0;y<e.length;y++)m.registerUniform(`sizeInConcatAxis${y}`,"u32");return m.declareVariables(...n,p)})()}

  ${Gs(s.length,h)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${p.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${c});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${s.length}u>(${h});
      ${c} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Ws(n,p)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:i,dataType:r}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:f}},Fs=(e,t)=>{let i=e.inputs,r=i[0].dims,a=k.normalizeAxis(t.axis,r.length);Ls(i,a);let s=r.slice();s[a]=i.reduce((o,u)=>o+(u.dims.length>a?u.dims[a]:0),0);let n=i.filter(o=>k.size(o.dims)>0);e.compute(Hs(n,a,s,i[0].dataType),{inputs:n})},Ks=e=>X({axis:e.axis})}),Le,Ge,We,Ri,He=T(()=>{P(),V(),Le=(e,t,i="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${i}(uniforms.clip_min)), ${t}(${i}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${i}(uniforms.alpha) * value + ${i}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${i}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Ge=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},We=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Ri=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[i,r]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:i,beta:r}}else if(t==="Clip"){let[i,r]=(e==null?void 0:e.activation_params)||[za,Ta];return{activation:t,clipMax:r,clipMin:i}}else if(t==="LeakyRelu"){let[i]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:i}}return{activation:t}}}),ne,js,Di=T(()=>{ne=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},js=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Qs,$p=T(()=>{Qs=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),ft,Mi,Pi=T(()=>{P(),V(),G(),He(),ft=(e,t,i,r,a)=>{let s=r-i;return`
      ${Array.from({length:i}).map((n,o)=>`
      if (${R(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,R(a,o+s,r))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},Mi=(e,t,i,r,a=!1,s)=>{let n=e[0].dims,o=e[1].dims,u=n[n.length-2],l=o[o.length-1],d=n[n.length-1],p=ee(l),c=ee(d),h=ee(u),f=k.size(i)/p/h,m=e.length>2,y=r?r.slice(0,-2):i.slice(0,-2),_=[k.size(y),u,l],g=[{type:12,data:f},{type:12,data:u},{type:12,data:l},{type:12,data:d}];Ge(t,g),g.push(...M(y,n,o)),m&&g.push(...M(e[2].dims)),g.push(...M(_));let w=$=>{let b=xi("batch_dims",e[0].dataType,y.length),v=S("a",e[0].dataType,n.length,c),x=S("b",e[1].dataType,o.length,p),I=O("output",e[0].dataType,_.length,p),E=ae(I.type.tensor),C=Le(t,I.type.value,E),q=[v,x],W="";if(m){let A=a?p:1;q.push(S("bias",e[2].dataType,e[2].dims.length,A)),W=`${a?`value += bias[col / ${A}];`:`value += ${I.type.value}(bias[row + i]);`}`}let D=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];We(t,D);let H=()=>{let A=`var a_data: ${v.type.value};`;for(let U=0;U<c;U++)A+=`
              let b_data${U} = b[(b_offset + (k + ${U}) * uniforms.N + col) / ${p}];`;for(let U=0;U<h;U++){A+=`a_data = a[(a_offset + (row + ${U}) * uniforms.K + k) / ${c}];`;for(let Y=0;Y<c;Y++)A+=`
            values[${U}] = fma(${x.type.value}(a_data${c===1?"":`[${Y}]`}), b_data${Y}, values[${U}]);
`}return A};return`
  ${$.registerUniforms(D).registerInternalVariables(b).declareVariables(...q,I)}
  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${p})) * ${p};
    var index1 = global_idx / (uniforms.N / ${p});
    let stride1 = uniforms.M / ${h};
    let row = (index1 % stride1) * ${h};
    let batch = index1 / stride1;

    ${i.length===2?"":`let batch_indices = ${b.offsetToIndices("batch")};`}

    var a_indices: ${v.type.indices};
    ${ft("a_indices",v,v.rank-2,b.rank,"batch_indices")}
    ${v.indicesSet("a_indices",v.rank-2,0)}
    ${v.indicesSet("a_indices",v.rank-1,0)}
    let a_offset = ${v.indicesToOffset("a_indices")};

    var b_indices: ${x.type.indices};
    ${ft("b_indices",x,x.rank-2,b.rank,"batch_indices")}
    ${x.indicesSet("b_indices",x.rank-2,0)}
    ${x.indicesSet("b_indices",x.rank-1,0)}
    let b_offset = ${x.indicesToOffset("b_indices")};
    var values: array<${I.type.value}, ${h}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${c}) {
      ${H()}
    }
    for (var i = 0u; i < ${h}u; i++) {
      var value = values[i];
      ${W}
      ${C}
      let cur_indices = ${I.type.indices}(batch, row + i, col);
      let offset = ${I.indicesToOffset("cur_indices")};
      ${I.setByOffset(`offset / ${p}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${p};${c};${h};${a}`,inputDependencies:m?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:g}),getShaderSource:w}}}),Zs,Xs,Ui,qi,Ys,Ni,Js,Pt,Vi=T(()=>{P(),V(),G(),He(),Pi(),Di(),Zs=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Xs=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,Ui=(e,t,i="f32",r,a=!1,s=32,n=!1,o=32)=>{let u=t[1]*e[1],l=t[0]*e[0],d=a?u:s,p=a?s:u,c=d/t[0],h=s/t[1];if(!((a&&c===4&&e[1]===4||!a&&(c===3||c===4))&&d%t[0]===0&&s%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${a} is true, innerElementSize ${c} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${c} must be 3 or 4.
  tileAWidth ${d} must be divisible by workgroupSize[0]${t[0]}. tileInner ${s} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${c}<${i}>, ${d/c}>, ${p}>;
var<workgroup> mm_Bsub: array<array<vec4<${i}>, ${l/e[0]}>, ${s}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${c};
const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${n?"0":"i32(globalId.z)"};
  ${r?`let batchIndices = ${r.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${u};

  let num_tiles = ${n?`${Math.ceil(o/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${n?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${i}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${h};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Zs(a,r)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${h}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${r?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${c===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Xs(a,c)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},qi=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Ys=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Ni=(e,t,i="f32",r,a=!1,s=32,n=!1,o=32,u=!1)=>{let l=e[1]*t[1],d=e[0]*t[0],p=a?l:s,c=a?s:l;if(!(c%t[1]===0&&p%t[0]===0&&s%t[1]===0))throw new Error(`tileAHight ${c} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}, tileInner ${s} must be divisible by workgroupSize[1]${t[1]}`);let h=c/t[1],f=p/t[0],m=s/t[1],y=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${d};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${c}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
          ${qi(a,r)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${s}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${r?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${i}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${a?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${l};

let tileRowA = i32(localId.y) * ${h};
let tileColA = i32(localId.x) * ${f};
let tileRowB = i32(localId.y) * ${m};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${h}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${f}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${qi(a,r)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${m}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${r?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${i}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Ys(a)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${i}, ${p}>, ${c}>;
  var<workgroup> mm_Bsub : array<array<${i}, ${d}>, ${s}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${n?"0":"i32(globalId.z)"};
    ${r?`let batchIndices = ${r.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${n?`${Math.ceil(o/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${n?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${i}, colPerThread>, rowPerThread>;
    ${y}
  }
`},Js=(e,t,i,r,a=!1)=>{let[s,n,o,u]=r,l=ae(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${ne(e,l)} {
      var value = ${ne(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${n.type.indices};
        ${ft("aIndices",n,n.rank-2,s.rank,"batchIndices")}
        ${n.indicesSet("aIndices",n.rank-2,"u32(row)")}
        ${n.indicesSet("aIndices",n.rank-1,"u32(colIn)")}
        value = ${n.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${ne(e,l)} {
      var value = ${ne(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${ft("bIndices",o,o.rank-2,s.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${ne(e,l)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${a?"bias[colIn]":`${ne(e,l)}(bias[row])`};`:""}
        ${i}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Pt=(e,t,i,r,a=!1,s)=>{let n=e[0].dims,o=e[1].dims,u=n.slice(0,-2),l=o.slice(0,-2),d=r?r.slice(0,-2):i.slice(0,-2),p=k.size(d),c=n[n.length-2],h=n[n.length-1],f=o[o.length-1],m=h%4===0&&f%4===0,y=c<=8?[4,1,1]:[4,4,1],_=[8,8,1],g=[Math.ceil(f/_[0]/y[0]),Math.ceil(c/_[1]/y[1]),Math.ceil(p/_[2]/y[2])],w=m?4:1,$=[...u,c,h/w],b=$.length,v=[...l,h,f/w],x=v.length,I=[p,c,f/w],E=[{type:6,data:c},{type:6,data:f},{type:6,data:h}];Ge(t,E),E.push(...M(d,$,v));let C=["rank","rank"],q=e.length>2;q&&(E.push(...M(e[2].dims)),C.push("rank")),E.push(...M(I));let W=D=>{let H=d.length,A=xi("batchDims",e[0].dataType,H,1),U=ae(e[0].dataType),Y=S("a",e[0].dataType,b,w),L=S("b",e[1].dataType,x,w),N=O("result",e[0].dataType,I.length,w),Q=[Y,L];if(q){let Se=a?w:1;Q.push(S("bias",e[2].dataType,e[2].dims.length,Se))}let z=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];We(t,z);let B=ae(N.type.tensor),K=Le(t,N.type.value,B),ie=Js(w,q,K,[A,Y,L,N],a);return`
  ${D.registerUniforms(z).registerInternalVariables(A).declareVariables(...Q,N)}
  ${ie}
  ${m?Ui(y,_,U,A):Ni(y,_,U,A)}
                   `};return{name:"MatMul",shaderCache:{hint:`${y};${t.activation};${m};${a}`,inputDependencies:C},getRunData:()=>({outputs:[{dims:s?s(i):i,dataType:e[0].dataType}],dispatchGroup:{x:g[0],y:g[1],z:g[2]},programUniforms:E}),getShaderSource:W}}}),eo,to,wp=T(()=>{P(),Te(),G(),He(),Di(),$p(),Vi(),eo=(e,t,i,r,a=!1,s,n=4,o=4,u=4,l="f32")=>{let d=E=>{switch(E){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${E} is not supported.`)}},p=E=>{switch(E){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${E} is not supported.`)}},c=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,h=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,f=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",m=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",y=e?"row":"col",_=e?"col":"row",g=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${y} / outWidth;
    let outCol = ${y} % outWidth;

    let WRow = ${_} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${_} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${_} % inChannels;
    var resData = ${ne(n,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${f} && xCol >= 0 && xCol < ${m}) {
      ${c}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${d(n)}
    }
    return resData;`,w=e?t&&r?`
    let col = colIn * ${n};
    ${g}`:`
    let col = colIn * ${n};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${g}
    }
    return ${ne(n,l)}(0.0);`:r&&i?`
    let col = colIn * ${n};
    ${g}`:`
    let col = colIn * ${n};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${g}
    }
    return ${ne(n,l)}(0.0);`,$=e?r&&i?p(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${p(o)}
    }
    return ${ne(o,l)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${p(o)}
    }
    return ${ne(o,l)}(0.0);`,b=ne(u,l),v=ne(e?n:o,l),x=ne(e?o:n,l),I=Le(s,b,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${v} {
      ${e?w:$}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${x} {
      ${e?$:w}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${b}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${h}
      ${js(a)}
      ${I}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},to=(e,t,i,r,a,s,n,o,u)=>{let l=t.format==="NHWC",d=l?e[0].dims[3]:e[0].dims[1],p=i[0],c=l?i[2]:i[3],h=l?i[1]:i[2],f=l?i[3]:i[1],m=l&&(d%4===0||d%3===0)&&f%4===0,y=l?f:c*h,_=l?c*h:f,g=[8,8,1],w=r<=8?[4,1,1]:[4,4,1],$=[Math.ceil(y/g[0]/w[0]),Math.ceil(_/g[1]/w[1]),Math.ceil(p/g[2]/w[2])];Z("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${$}`);let b=m?l&&d%4!==0?3:4:1,v=g[1]*w[1],x=g[0]*w[0],I=Math.max(g[0]*b,g[1]),E=r%v===0,C=a%x===0,q=s%I===0,W=m?[b,4,4]:[1,1,1],D=[{type:6,data:r},{type:6,data:a},{type:6,data:s},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Ge(t,D),D.push(...M(e[0].dims,e[1].dims));let H=["rank","rank"];n&&(D.push(...M(e[2].dims)),H.push("rank")),D.push(...M(i));let A=U=>{let Y=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];We(t,Y);let L=m?4:1,N=ae(e[0].dataType),Q=`
      fn setOutputAtIndex(flatIndex : i32, value : ${m?`vec4<${N}>`:N}) {
        result[flatIndex] = ${m?`vec4<${N}>`:N}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${m?`vec4<${N}>`:N}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${m?"/ 4":""}, value);
      }`,z=S("x",e[0].dataType,e[0].dims.length,b===3?1:b),B=S("w",e[1].dataType,e[1].dims.length,L),K=[z,B],ie=O("result",e[0].dataType,i.length,L);if(n){let Se=S("bias",e[2].dataType,e[2].dims.length,L);K.push(Se),Q+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${m?`vec4<${N}>`:N} {
          return bias[coords.${l?"w":"y"}${m?"/ 4":""}];
        }`}return`
        ${Qs("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${U.registerUniforms(Y).declareVariables(...K,ie)}
        ${Q}
        ${eo(l,E,C,q,n,t,W[0],W[1],W[2],N)}
        ${m?Ui(w,g,N,void 0,!l,I):Ni(w,g,N,void 0,!l,I,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${b};${m};${E};${C};${q};${v};${x};${I}`,inputDependencies:H},getRunData:()=>({outputs:[{dims:u?u(i):i,dataType:e[0].dataType}],dispatchGroup:{x:$[0],y:$[1],z:$[2]},programUniforms:D}),getShaderSource:A}}}),io,Li,mt,ro,Gi,ao,no,so,bp=T(()=>{P(),Te(),V(),G(),He(),Di(),io=e=>{let t=1;for(let i=0;i<e.length;i++)t*=e[i];return t},Li=e=>typeof e=="number"?[e,e,e]:e,mt=(e,t)=>t<=1?e:e+(e-1)*(t-1),ro=(e,t,i,r=1)=>{let a=mt(t,r);return Math.floor((e[0]*(i-1)-i+a)/2)},Gi=(e,t,i,r,a)=>{a==null&&(a=ro(e,t[0],r[0]));let s=[0,0,0,i];for(let n=0;n<3;n++)e[n]+2*a>=t[n]&&(s[n]=Math.trunc((e[n]-t[n]+2*a)/r[n]+1));return s},ao=(e,t,i,r,a,s,n,o,u,l)=>{let d,p,c,h;if(e==="VALID"&&(e=0),typeof e=="number"){d={top:e,bottom:e,left:e,right:e,front:e,back:e};let f=Gi([t,i,r,1],[o,u,l],1,[a,s,n],e);p=f[0],c=f[1],h=f[2]}else if(Array.isArray(e)){if(!e.every((m,y,_)=>m===_[0]))throw Error(`Unsupported padding parameter: ${e}`);d={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let f=Gi([t,i,r,1],[o,u,l],1,[a,s,n],e[0]);p=f[0],c=f[1],h=f[2]}else if(e==="SAME_UPPER"){p=Math.ceil(t/a),c=Math.ceil(i/s),h=Math.ceil(r/n);let f=(p-1)*a+o-t,m=(c-1)*s+u-i,y=(h-1)*n+l-r,_=Math.floor(f/2),g=f-_,w=Math.floor(m/2),$=m-w,b=Math.floor(y/2),v=y-b;d={top:w,bottom:$,left:b,right:v,front:_,back:g}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:d,outDepth:p,outHeight:c,outWidth:h}},no=(e,t,i,r,a,s=!1,n="channelsLast")=>{let o,u,l,d,p;if(n==="channelsLast")[o,u,l,d,p]=e;else if(n==="channelsFirst")[o,p,u,l,d]=e;else throw new Error(`Unknown dataFormat ${n}`);let[c,,h,f,m]=t,[y,_,g]=Li(i),[w,$,b]=Li(r),v=mt(h,w),x=mt(f,$),I=mt(m,b),{padInfo:E,outDepth:C,outHeight:q,outWidth:W}=ao(a,u,l,d,y,_,g,v,x,I),D=s?c*p:c,H=[0,0,0,0,0];return n==="channelsFirst"?H=[o,D,C,q,W]:n==="channelsLast"&&(H=[o,C,q,W,D]),{batchSize:o,dataFormat:n,inDepth:u,inHeight:l,inWidth:d,inChannels:p,outDepth:C,outHeight:q,outWidth:W,outChannels:D,padInfo:E,strideDepth:y,strideHeight:_,strideWidth:g,filterDepth:h,filterHeight:f,filterWidth:m,effectiveFilterDepth:v,effectiveFilterHeight:x,effectiveFilterWidth:I,dilationDepth:w,dilationHeight:$,dilationWidth:b,inShape:e,outShape:H,filterShape:t}},so=(e,t,i,r,a,s)=>{let n=s==="channelsLast";n?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],u={x:i.map((y,_)=>_)},l=[Math.ceil(io(u.x.map(y=>i[y]))/o[0]),1,1];Z("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let d=1,p=k.size(i),c=[{type:12,data:p},{type:12,data:r},{type:12,data:a},{type:12,data:t.strides},{type:12,data:t.dilations}];Ge(t,c),c.push(...M(e[0].dims,e[1].dims));let h=["rank","rank"],f=e.length===3;f&&(c.push(...M(e[2].dims)),h.push("rank")),c.push(...M(i));let m=y=>{let _=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:a.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];We(t,_);let g=1,w=ae(e[0].dataType),$=S("x",e[0].dataType,e[0].dims.length,d),b=S("W",e[1].dataType,e[1].dims.length,g),v=[$,b],x=O("result",e[0].dataType,i.length,g),I="";if(f){let q=S("bias",e[2].dataType,e[2].dims.length,g);v.push(q),I+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${w} {
          return bias[${n?R("coords",4,5):R("coords",1,5)}];
        }`}let E=ne(d,w),C=Le(t,E,w);return`
            ${I}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${$.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${b.getByIndices("aIndices")};
            }
          ${y.registerUniforms(_).declareVariables(...v,x)}
          ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${x.offsetToIndices("global_idx")};
              let batch = ${R("coords",0,$.rank)};
              let d2 = ${n?R("coords",$.rank-1,$.rank):R("coords",1,$.rank)};
              let xFRCCorner = vec3<u32>(${n?R("coords",1,$.rank):R("coords",2,$.rank)},
              ${n?R("coords",2,$.rank):R("coords",3,$.rank)},
              ${n?R("coords",3,$.rank):R("coords",4,$.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${n?R("uniforms.x_shape",1,$.rank):R("uniforms.x_shape",2,$.rank)};
              let xShapeZ = ${n?R("uniforms.x_shape",2,$.rank):R("uniforms.x_shape",3,$.rank)};
              let xShapeW = ${n?R("uniforms.x_shape",3,$.rank):R("uniforms.x_shape",4,$.rank)};
              let xShapeU = ${n?R("uniforms.x_shape",4,$.rank):R("uniforms.x_shape",1,$.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${n?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${n?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${n?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${n?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${f?"value = value + getBiasByOutputCoords(coords)":""};
              ${C}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${n};${d};${f}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:c}),getShaderSource:m}}}),oo,uo,vp=T(()=>{P(),V(),G(),He(),oo=(e,t,i,r)=>{let a=e.length>2,s=a?"value += b[output_channel];":"",n=e[0].dims,o=e[1].dims,u=t.format==="NHWC",l=u?i[3]:i[1],d=l/t.group,p=u&&d>=4?ee(l):1,c=k.size(i)/p,h=[{type:12,data:c},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:d}];Ge(t,h),h.push(...M(n,[o[0],o[1],o[2],o[3]/p]));let f=a?["rank","rank","rank"]:["rank","rank"];h.push(...M([i[0],i[1],i[2],i[3]/p]));let m=y=>{let _=O("output",e[0].dataType,i.length,p),g=ae(_.type.tensor),w=Le(t,_.type.value,g),$=S("x",e[0].dataType,n.length),b=S("w",e[1].dataType,o.length,p),v=[$,b];a&&v.push(S("b",e[2].dataType,e[2].dims,p));let x=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];We(t,x);let I=u?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${$.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${b.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${$.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${b.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${y.registerUniforms(x).declareVariables(...v,_)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${_.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${u?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${u?1:2}], outputIndices[${u?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${p} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${_.type.value} = ${_.type.value}(0);
    ${I}
    ${s}
    ${w}
    ${_.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${p}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:h}),getShaderSource:m}},uo=(e,t,i,r)=>{let a=e.length>2,s=ee(i[3]),n=ee(i[2]),o=k.size(i)/s/n,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/s],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/s],d=[i[0],i[1],i[2],i[3]/s],p=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Ge(t,p),p.push(...M(u,l,d));let c=(n-1)*t.strides[1]+l[1],h=f=>{let m=O("output",e[0].dataType,d.length,s),y=ae(m.type.tensor),_=Le(t,m.type.value,y),g=S("x",e[0].dataType,u.length,s),w=S("w",e[1].dataType,l.length,s),$=[g,w];a&&$.push(S("b",e[2].dataType,e[2].dims,s));let b=a?"value += b[output_channel];":"",v=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return We(t,v),`
  ${f.registerUniforms(v).declareVariables(...$,m)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${n}u;
    let col = (index1 % width1) * ${n}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${g.type.value}, ${c}>;
    var values: array<${m.type.value}, ${n}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${l[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${c}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${g.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${g.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${l[1]}; w_width++) {
          let w_val = ${w.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${n}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${n}u; i++) {
      var value = values[i];
      ${b}
      ${_}
      ${m.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${s};${n};${c};${l[0]};${l[1]}`,inputDependencies:a?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:p}),getShaderSource:h}}}),lo,Ut,po,qt,Wi,Hi,co,ho,Fi,xp=T(()=>{V(),wp(),bp(),Vi(),vp(),He(),Pi(),Oe(),lo=(e,t,i,r,a,s)=>{let n=e[0],o=e.slice(s?1:2,s?3:4),u=o.length,l=t[0],d=t.slice(2).map((c,h)=>c+(c-1)*(i[h]-1)),p=o.map((c,h)=>c+r[h]+r[h+u]).map((c,h)=>Math.floor((c-d[h]+a[h])/a[h]));return p.splice(0,0,n),p.splice(s?3:1,0,l),p},Ut=[2,3,1,0],po=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let i=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(i!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},qt=(e,t)=>{let i=e.kernelShape.slice();i.length<t[1].dims.length-2&&i.push(...Array(t[1].dims.length-2-i.length).fill(0));for(let s=2;s<t[1].dims.length;++s)i[s-2]===0&&(i[s-2]=t[1].dims[s]);let r=e.pads.slice();At.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,i,r,e.format==="NHWC",e.autoPad);let a=Object.assign({},e);return Object.assign(a,{kernelShape:i,pads:r}),a},Wi=e=>{let t=Ri(e),i=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],a=e.dilations,s=e.group,n=e.kernel_shape,o=e.pads,u=e.strides,l=e.w_is_const();return{autoPad:r,format:i,dilations:a,group:s,kernelShape:n,pads:o,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Hi=(e,t,i,r)=>{let a=i.format==="NHWC",s=lo(t[0].dims,t[1].dims,i.dilations,i.pads,i.strides,a);if(i.group!==1){let v=[t[0]];if(a){let x=e.kernelCustomData.wT??e.compute(fe(t[1],Ut),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=x),v.push(x)}else v.push(t[1]);t.length===3&&v.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&a&&t[1].dims[0]===i.group&&t[1].dims[1]===1&&i.dilations[0]===1&&i.dilations[1]===1?e.compute(uo(v,i,s,r),{inputs:v}):e.compute(oo(v,i,s,r),{inputs:v});return}let n=t.length===3,o=t[0].dims[a?1:2],u=t[0].dims[a?2:3],l=t[0].dims[a?3:1],d=t[1].dims[2],p=t[1].dims[3],c=s[a?1:2],h=s[a?2:3],f=s[a?3:1],m=a&&d===o&&p===u&&i.pads[0]===0&&i.pads[1]===0;if(m||d===1&&p===1&&i.dilations[0]===1&&i.dilations[1]===1&&i.strides[0]===1&&i.strides[1]===1&&i.pads[0]===0&&i.pads[1]===0){let v=s[0],x,I,E,C=[];if(a){let D=e.kernelCustomData.wT??e.compute(fe(t[1],Ut),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];if(i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=D),m){let H=o*u*l;x=t[0].reshape([1,v,H]),I=D.reshape([1,H,f]),E=[1,v,f]}else x=t[0].reshape([v,o*u,l]),I=D.reshape([1,l,f]),E=[v,c*h,f];C.push(x),C.push(I)}else x=t[0].reshape([v,l,o*u]),I=t[1].reshape([1,f,l]),E=[v,f,c*h],C.push(I),C.push(x);n&&C.push(t[2]);let q=E[2],W=C[0].dims[C[0].dims.length-1];q<8&&W<8?e.compute(Mi(C,i,s,E,a,r),{inputs:C}):e.compute(Pt(C,i,s,E,a,r),{inputs:C});return}let y=!0,_=e.kernelCustomData.wT??e.compute(fe(t[1],Ut),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=_);let g=[t[0],_];n&&g.push(t[2]);let w=a?c*h:f,$=a?f:c*h,b=d*p*l;e.compute(to(g,i,s,w,$,b,n,y,r),{inputs:g})},co=(e,t)=>{let i=t.format==="NHWC",r=[e.inputs[0].reshape(i?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let a=[0,t.pads[0],0,t.pads[1]],s=[1].concat(t.strides),n=[1].concat(t.dilations),o=[1].concat(t.kernelShape),u=qt({...t,pads:a,strides:s,dilations:n,kernelShape:o},r);Hi(e,r,u,l=>i?[l[0],l[2],l[3]]:[l[0],l[1],l[3]])},ho=(e,t,i)=>{let r=i.format==="NHWC"?"channelsLast":"channelsFirst",a=qt(i,t),s=i.autoPad==="NOTSET"?i.pads:i.autoPad,n=no(t[0].dims,t[1].dims,i.strides,i.dilations,s,!1,r);e.compute(so(t,a,n.outShape,[n.filterDepth,n.filterHeight,n.filterWidth],[n.padInfo.front,n.padInfo.top,n.padInfo.left],r))},Fi=(e,t)=>{if(po(e.inputs,t),e.inputs[0].dims.length===3)co(e,t);else if(e.inputs[0].dims.length===5)ho(e,e.inputs,t);else{let i=qt(t,e.inputs);Hi(e,e.inputs,i)}}}),fo,kp=T(()=>{P(),Te(),V(),G(),fo=(e,t,i)=>{let r=e.length>2,a=t.outputShape,s=t.format==="NHWC",n=t.group,o=e[1].dims,u=o[2]/n,l=o[3],d=s?ee(u):1,p=s?ee(l):1,c=s?l===1?d:p:1,h=k.size(a)/p,f=[Math.ceil(h/64),1,1];Z("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${f}`);let m=["rank","rank"],y=[t.strides[0],t.strides[1]],_=[t.kernelShape[s?1:2],t.kernelShape[s?2:3]],g=[t.dilations[0],t.dilations[1]],w=[_[0]+(t.dilations[0]<=1?0:(t.kernelShape[s?1:2]-1)*(t.dilations[0]-1)),_[1]+(t.dilations[1]<=1?0:(t.kernelShape[s?2:3]-1)*(t.dilations[1]-1))],$=[w[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),w[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],b=[{type:12,data:h},{type:12,data:y},{type:12,data:_},{type:12,data:g},{type:12,data:w},{type:6,data:$},{type:12,data:u},{type:12,data:l},...M(e[0].dims,e[1].dims)];r&&(b.push(...M(e[2].dims)),m.push("rank")),b.push(...M(a));let v=x=>{let I=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:y.length},{name:"filter_dims",type:"u32",length:_.length},{name:"dilations",type:"u32",length:_.length},{name:"effective_filter_dims",type:"u32",length:w.length},{name:"pads",type:"i32",length:$.length},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],E=ae(e[0].dataType),C=s?1:2,q=s?2:3,W=s?3:1,D=S("W",e[1].dataType,e[1].dims.length,c),H=S("Dy",e[0].dataType,e[0].dims.length,d),A=[H,D];r&&A.push(S("bias",e[2].dataType,[a[W]].length,p));let U=O("result",e[0].dataType,a.length,p),Y=()=>{let N="";if(d===1)N+=`
        let w_offset = ${D.indicesToOffset(`${D.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
        let wValue = ${D.getByOffset(`w_offset / ${c}`)};
        dotProd = dotProd + xValue * wValue;`;else if(l===1)N+=`
          let wValue = ${D.getByOffset(`${D.indicesToOffset(`${D.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)} / ${c}`)};
          dotProd = dotProd + dot(xValue, wValue);`;else for(let Q=0;Q<d;Q++)N+=`
            let wValue${Q} = ${D.getByOffset(`${D.indicesToOffset(`${D.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${Q}, wOutChannel)`)} / ${c}`)};
            dotProd = dotProd + xValue[${Q}] * wValue${Q};`;return N},L=`
            let outputIndices = ${U.offsetToIndices(`global_idx * ${p}`)};
            let batch = ${U.indicesGet("outputIndices",0)};
            let d1 = ${U.indicesGet("outputIndices",W)};
            let r = ${U.indicesGet("outputIndices",C)};
            let c = ${U.indicesGet("outputIndices",q)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${U.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${E}(dyRCorner) + ${E}(wR)) / ${E}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${E}(uniforms.Dy_shape[${C}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }

              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${E}(dyCCorner) + ${E}(wC)) / ${E}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${E}(uniforms.Dy_shape[${q}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + ${d}) {
                  let xValue = ${s?H.getByOffset(`${H.indicesToOffset(`${H.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${d}`):H.get("batch","inputChannel","idyR","idyC")};
                  ${Y()}
                  inputChannel = inputChannel + ${d};
                }
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${p}]`:""};
            ${U.setByOffset("global_idx","value")};
          `;return`
    ${x.registerUniforms(I).declareVariables(...A,U)}
      ${x.mainStart()}
      ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${L}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${d}${c}${p}${l===1}`,inputDependencies:m},getRunData:()=>({dispatchGroup:{x:f[0],y:f[1],z:f[2]},outputs:[{dims:i?i(a):a,dataType:e[0].dataType}],programUniforms:b}),getShaderSource:v}}}),mo,go,_o,Ki,yo,$o,ji,wo,bo,Sp=T(()=>{kp(),He(),Oe(),mo=(e,t,i,r,a,s)=>(e-1)*t+i+(r-1)*a+1-s,go=(e,t,i,r,a)=>{let s=Math.floor(e/2);t==="SAME_UPPER"?(i[r]=s,i[a]=e-s):t==="SAME_LOWER"&&(i[r]=e-s,i[a]=s)},_o=(e,t,i,r,a,s,n,o,u,l)=>{let d=e.length-2,p=l.length===0;u.length<d&&u.push(...Array(d-u.length).fill(0));let c=e[0],h=t[o?3:1]*a;for(let f=0,m=e.length-d-(o?1:0);f<d;++f,++m){let y=e[m],_=p?y*n[f]:l[f],g=mo(y,n[f],s[f],t[m],i[f],_);go(g,r,s,f,f+d),p&&l.push(n[f]*(y-1)+u[f]+(t[m]-1)*i[f]+1-s[f]-s[f+d])}l.splice(0,0,c),l.splice(o?3:1,0,h)},Ki=(e,t)=>{let i=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((p,c)=>p*c,1)===0){i.length=0;for(let p=2;p<t[1].dims.length;++p)i.push(t[1].dims[p])}let r=e.format==="NHWC";i.splice(0,0,t[1].dims[0]),i.splice(r?3:1,0,t[1].dims[1]);let a=e.pads.slice(),s=e.outputShape.slice(),n=e.outputPadding.slice(),o=t[0].dims,u=e.dilations.slice();if(u.reduce((p,c)=>p+c,0)===0){let p=t[0].dims.length-2;u=new Array(p).fill(1)}let l=e.strides.slice();if(l.reduce((p,c)=>p+c,0)===0){let p=t[0].dims.length-2;l=new Array(p).fill(1)}_o(o,i,u,e.autoPad,e.group,a,l,r,n,s);let d=Object.assign({},e);return Object.assign(d,{kernelShape:i,pads:a,outputPadding:n,outputShape:s,dilations:u,strides:l}),d},yo=e=>{let t=Ri(e),i=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],a=e.dilations,s=e.group,n=e.kernelShape,o=e.pads,u=e.strides,l=e.wIsConst(),d=e.outputPadding,p=e.outputShape;return{autoPad:r,format:i,dilations:a,group:s,kernelShape:n,outputPadding:d,outputShape:p,pads:o,strides:u,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},$o=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let i=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(i!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let a=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==a))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.reduce((n,o)=>n+o,0)>0&&t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.reduce((n,o)=>n+o,0)>0&&t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.reduce((n,o)=>n+o,0)>0&&t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.outputPadding.length!==s&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${s}D`);if(t.kernelShape.reduce((n,o)=>n+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},ji=(e,t,i,r)=>{let a=e.kernelCustomData.wT??e.compute(fe(t[1],[2,3,0,1]),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=a);let s=[t[0],a];t.length===3&&s.push(t[2]),e.compute(fo(s,i,r),{inputs:s})},wo=(e,t)=>{let i=t.format==="NHWC",r=[e.inputs[0].reshape(i?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let a=t.kernelShape;(a.length===0||a[0]===0)&&(a=[e.inputs[1].dims[2]]);let s=t.dilations;(s.length===0||s[0]===0)&&(s=[1]);let n=t.strides;(n.length===0||n[0]===0)&&(n=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],n=[1].concat(n),s=[1].concat(s),a=[1].concat(a);let u=t.outputPadding;u=[0].concat(u);let l=Ki({...t,pads:o,strides:n,dilations:s,kernelShape:a,outputPadding:u},r);ji(e,r,l,d=>i?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},bo=(e,t)=>{if($o(e.inputs,t),e.inputs[0].dims.length===3)wo(e,t);else{let i=Ki(t,e.inputs);ji(e,e.inputs,i)}}}),vo,xo,ko,Ip=T(()=>{P(),V(),te(),G(),vo=(e,t,i,r)=>{let a=k.size(t),s=t.length,n=S("input",e,s),o=O("output",e,s),u=i.dataType===6?i.getInt32Array()[0]:Number(i.getBigInt64Array()[0]),l=k.normalizeAxis(u,s),d=p=>{let c=` i32(${n.indicesGet("inputIndices","uniforms.axis")}) `,h=R("uniforms.input_shape","uniforms.axis",s),f=r.reverse?c+(r.exclusive?" + 1":""):"0",m=r.reverse?h:c+(r.exclusive?"":" + 1");return`
                ${p.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(n,o)}
                ${p.mainStart()}
                  ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${f};
                  let last : i32 = ${m};
                  for (var i : i32 = first; i < last; i++) {
                    ${n.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${n.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},{type:12,data:l},...M(t,t)]}),getShaderSource:d}},xo=(e,t)=>{let i=e.inputs[0].dims,r=e.inputs[0].dataType,a=e.inputs[1];e.compute(vo(r,i,a,t),{inputs:[0]})},ko=e=>{let t=e.exclusive===1,i=e.reverse===1;return X({exclusive:t,reverse:i})}}),So,Io,zo,To,Eo,zp=T(()=>{P(),V(),te(),G(),So=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Io=(e,t,i,r)=>{let a=[];a.push(`fn perm(i: ${r.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`);for(let s=0;s<t;++s)a.push(i.indicesSet("a",e[s],`i[${s}]`));return a.push("return a;}"),a.join(`
`)},zo=(e,t)=>{let i,r,a,s,n,o,u=t.format==="NHWC",l=t.blocksize,d=t.mode==="DCR";u?([i,r,a,s]=e.dims,n=d?[i,r,a,l,l,s/l**2]:[i,r,a,s/l**2,l,l],o=d?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([i,r,a,s]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],n=d?[i,l,l,s/l**2,r,a]:[i,s/l**2,l,l,r,a],o=d?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let p=e.reshape(n),c=p.dims.length,h=e.dataType,f=S("a",h,c),m=O("output",h,c),y=_=>`
  ${_.registerUniform("output_size","u32").declareVariables(f,m)}

  ${Io(o,c,f,m)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${m.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${m.setByOffset("global_idx",f.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:_=>{let g=u?[i,r*l,a*l,s/l**2]:[i,s/l**2,r*l,a*l],w=k.size(g),$=p.dims,b=k.sortBasedOnPerm($,o);return{outputs:[{dims:g,dataType:_[0].dataType}],dispatchGroup:{x:Math.ceil(w/64)},programUniforms:[{type:12,data:w},...M($,b)]}},getShaderSource:y}},To=(e,t)=>{So(e.inputs),e.compute(zo(e.inputs[0],t))},Eo=e=>X({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Nt,gt,Qi,Co,Bo,Ao,Oo,Zi,Ro,Do,Mo,Tp=T(()=>{P(),V(),te(),G(),Nt="[a-zA-Z]|\\.\\.\\.",gt="("+Nt+")+",Qi="^"+gt+"$",Co="("+gt+",)*"+gt,Bo="^"+Co+"$",Ao=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let i=this.symbolToIndices.get(e);i===void 0?i=[t]:i.push(t),this.symbolToIndices.set(e,i)}},Oo=class{constructor(e,t){var a;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[i,r]=t.includes("->")?t.split("->",2):[t,""];if(!i.match(RegExp(Bo)))throw new Error("Invalid LHS term");if(i.split(",").forEach((s,n)=>{let o=e[n].dims.slice();if(!s.match(RegExp(Qi)))throw new Error("Invalid LHS term");let u=this.processTerm(s,!0,o,n);this.lhs.push(u)}),r==="")r+=[...this.symbolToInfo.entries()].filter(([s,n])=>n.count===1||s==="...").map(([s])=>s).join("");else if(!r.match(RegExp(gt)))throw new Error("Invalid RHS");(a=r.match(RegExp(Nt,"g")))==null||a.forEach(s=>{if(s==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let n=this.symbolToInfo.get(s);if(n===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(n.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,i){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw new Error("Dimension mismatch");r.count++,r.inputIndices.push(i)}else r={count:1,dimValue:t,inputIndices:[i]};this.symbolToInfo.set(e,r)}processTerm(e,t,i,r=-1){let a=i.length,s=!1,n=[],o=0;if(!e.match(RegExp(Qi))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(Nt,"g")),l=new Ao(r);return u==null||u.forEach((d,p)=>{if(d==="..."){if(s)throw new Error("Only one ellipsis is allowed per input term");s=!0;let c=a-u.length+1;if(c<0)throw new Error("Ellipsis out of bounds");if(n=i.slice(o,o+c),this.hasEllipsis){if(this.ellipsisDims.length!==n.length||this.ellipsisDims.toString()!==n.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=n;else throw new Error("Ellipsis must be specified in the LHS");for(let h=0;h<n.length;h++){let f=String.fromCharCode("0".charCodeAt(0)+h);l.addSymbol(f,p+h),this.addSymbol(f,i[o++],r)}}else l.addSymbol(d,p+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(d,i[o++],r)}),l}},Zi=e=>e+"_max",Ro=(e,t,i,r)=>{let a=e.map(l=>l.length).map((l,d)=>S(`input${d}`,t,l)),s=k.size(r),n=O("output",t,r.length),o=[...i.symbolToInfo.keys()].filter(l=>!i.rhs.symbolToIndices.has(l)),u=l=>{let d=[],p="var prod = 1.0;",c="var sum = 0.0;",h="sum += prod;",f=[],m=[],y=[],_=[],g=i.symbolToInfo.size===i.rhs.symbolToIndices.size;i.symbolToInfo.forEach(($,b)=>{var v;if(i.rhs.symbolToIndices.has(b)){let x=(v=i.rhs.symbolToIndices.get(b))==null?void 0:v[0];x!==void 0&&i.lhs.forEach((I,E)=>{if($.inputIndices.includes(E)){let C=I.symbolToIndices.get(b);if(C===void 0)throw new Error("Invalid symbol error");C.forEach(q=>{d.push(`${a[E].indicesSet(`input${E}Indices`,q,n.indicesGet("outputIndices",x))}`)})}})}else i.lhs.forEach((x,I)=>{if($.inputIndices.includes(I)){let E=x.symbolToIndices.get(b);if(E===void 0)throw new Error("Invalid symbol error");E.forEach(C=>{f.push(`${a[I].indicesSet(`input${I}Indices`,C,`${b}`)}`)}),_.push(`prod *= ${a[I].getByIndices(`input${I}Indices`)};`)}}),m.push(`for(var ${b}: u32 = 0; ${b} < uniforms.${Zi(b)}; ${b}++) {`),y.push("}")});let w=g?[...d,`let sum = ${a.map(($,b)=>$.getByIndices(`input${b}Indices`)).join(" * ")};`]:[...d,c,...m,...f,p,..._,h,...y];return`
            ${l.registerUniforms(o.map($=>({name:`${Zi($)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...a,n)}

            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${n.offsetToIndices("global_idx")};
            ${a.map(($,b)=>`var input${b}Indices: ${a[b].type.indices};`).join(`
`)}
            ${w.join(`
`)};
            ${n.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:i.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let l=o.filter(p=>i.symbolToInfo.has(p)).map(p=>{var c;return{type:12,data:((c=i.symbolToInfo.get(p))==null?void 0:c.dimValue)||0}});l.push({type:12,data:s});let d=e.map((p,c)=>[...M(p)]).reduce((p,c)=>p.concat(c),l);return d.push(...M(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}},getShaderSource:u}},Do=(e,t)=>{let i=new Oo(e.inputs,t.equation),r=i.outputDims,a=e.inputs.map((s,n)=>s.dims);e.compute(Ro(a,e.inputs[0].dataType,i,r))},Mo=e=>{let t=e.equation.replace(/\s+/g,"");return X({equation:t})}}),Po,Xi,Uo,qo,No,Ep=T(()=>{P(),V(),G(),Po=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,i=Array.from(e[1].getBigInt64Array(),Number),r=i.length<t.length?0:i.length-t.length,a=t.length<i.length?0:t.length-i.length;for(;r<i.length&&a<t.length;++r,++a)if(i[r]!==t[a]&&i[r]!==1&&t[a]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Xi=(e,t)=>{let i=e.length-t.length,r=[];for(let a=0;a<i;++a)r.push(e[a]);for(let a=0;a<t.length;++a)r.push(t[a]===1?e[a+i]:t[a]);return r},Uo=(e,t)=>e.length>t.length?Xi(e,t):Xi(t,e),qo=e=>{let t=e[0].dims,i=Array.from(e[1].getBigInt64Array(),Number),r=Uo(t,i),a=e[0].dataType,s=a===9||k.size(t)===1,n=a===9||t.length>0&&t[t.length-1]%4===0?4:1,o=s||r.length>0&&r[r.length-1]%4===0?4:1,u=Math.ceil(k.size(r)/o),l=p=>{let c=S("input",a,t.length,n),h=O("output",a,r.length,o),f;if(a===9){let m=(y,_,g="")=>`
          let outputIndices${_} = ${h.offsetToIndices(`outputOffset + ${_}u`)};
          let offset${_} = ${c.broadcastedIndicesToOffset(`outputIndices${_}`,h)};
          let index${_} = offset${_} / 4u;
          let component${_} = offset${_} % 4u;
          ${y}[${_}] = ${g}(${c.getByOffset(`index${_}`)}[component${_}]);
        `;f=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${m("data",0,"u32")}
        ${m("data",1,"u32")}
        ${m("data",2,"u32")}
        ${m("data",3,"u32")}
        ${h.setByOffset("global_idx","data")}
      }`}else f=`
        let outputIndices = ${h.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${c.broadcastedIndicesToOffset("outputIndices",h)};
        let data = ${h.type.value}(${c.getByOffset(`inputOffset / ${n}`)});
        ${h.setByOffset("global_idx","data")}
      }`;return`
    ${p.registerUniform("vec_size","u32").declareVariables(c,h)}
    ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${f}`},d=[{type:12,data:u},...M(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${n}${o}`,inputDependencies:["rank"]},getShaderSource:l,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d})}},No=e=>{Po(e.inputs),e.compute(qo(e.inputs),{inputs:[0]})}}),Vo,Lo,Cp=T(()=>{P(),V(),G(),Oi(),Vo=e=>{let t=e[0].dataType,i=k.size(e[0].dims),r=k.size(e[1].dims),a=r%4===0,s=n=>{let o=S("x",t,[1],4),u=S("bias",t,[1],4),l=O("y",t,[1],4),d=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],p=h=>`
      let bias${h}_offset: u32 = (global_idx * 4 + ${h}) % uniforms.bias_size;
      let bias${h} = ${u.getByOffset(`bias${h}_offset / 4`)}[bias${h}_offset % 4];`,c=a?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${p(0)}${p(1)}${p(2)}${p(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${n.registerUniforms(d).declareVariables(o,u,l)}

    ${Bi(ue(t))}

    ${n.mainStart(Je)}
      ${n.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${c}
      let x_in = x + bias;
      ${l.setByOffset("global_idx",Ai("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${a}`,inputDependencies:["type","type"]},getShaderSource:s,getRunData:n=>({outputs:[{dims:n[0].dims,dataType:n[0].dataType}],programUniforms:[{type:12,data:Math.ceil(i/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(i/Je/4)}})}},Lo=e=>{e.inputs.length<2||k.size(e.inputs[1].dims)===0?bs(e):e.compute(Vo(e.inputs))}}),Go,Wo,Ho,Fo,Bp=T(()=>{P(),V(),te(),G(),Go=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Wo=(e,t)=>{let i=e[0].dims,r=e[1].dims,a=i.length,s=k.normalizeAxis(t.axis,a),n=i.slice(0);n.splice(s,1,...r);let o=i[s],u=e[0].dataType===9?4:1,l=Math.ceil(k.size(n)/u),d=[{type:12,data:l},{type:6,data:o},{type:12,data:s},...M(e[0].dims,e[1].dims,n)],p=c=>{let h=S("data",e[0].dataType,e[0].dims.length,u),f=S("inputIndices",e[1].dataType,e[1].dims.length),m=O("output",e[0].dataType,n.length,u),y=g=>{let w=r.length,$=`var indicesIndices${g}  = ${f.type.indices}(0);`;for(let b=0;b<w;b++)$+=`${w>1?`indicesIndices${g}[${b}]`:`indicesIndices${g}`} = ${n.length>1?`outputIndices${g}[uniforms.axis + ${b}]`:`outputIndices${g}`};`;$+=`
          var idx${g} = ${f.getByIndices(`indicesIndices${g}`)};
          if (idx${g} < 0) {
            idx${g} = idx${g} + uniforms.axisDimLimit;
          }
          var dataIndices${g} : ${h.type.indices};
        `;for(let b=0,v=0;b<a;b++)b===s?($+=`${a>1?`dataIndices${g}[${b}]`:`dataIndices${g}`} = u32(idx${g});`,v+=w):($+=`${a>1?`dataIndices${g}[${b}]`:`dataIndices${g}`} = ${n.length>1?`outputIndices${g}[${v}]`:`outputIndices${g}`};`,v++);return $},_;if(e[0].dataType===9){let g=(w,$,b="")=>`
          let outputIndices${$} = ${m.offsetToIndices(`outputOffset + ${$}u`)};
          ${y($)};
          let offset${$} = ${h.indicesToOffset(`dataIndices${$}`)};
          let index${$} = offset${$} / 4u;
          let component${$} = offset${$} % 4u;
          ${w}[${$}] = ${b}(${h.getByOffset(`index${$}`)}[component${$}]);
        `;_=`
        let outputOffset = global_idx * ${u};
        var value = vec4<u32>(0);
        ${g("value",0,"u32")}
        ${g("value",1,"u32")}
        ${g("value",2,"u32")}
        ${g("value",3,"u32")}
        ${m.setByOffset("global_idx","value")}
      `}else _=`
      let outputIndices = ${m.offsetToIndices("global_idx")};
      ${y("")};
      let value = ${h.getByIndices("dataIndices")};
      ${m.setByOffset("global_idx","value")};
      `;return`
      ${c.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(h,f,m)}
      ${c.mainStart()}
        ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${_}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:p}},Ho=e=>X({axis:e.axis}),Fo=(e,t)=>{let i=e.inputs;Go(i),e.compute(Wo(e.inputs,t))}}),Ko,jo,Qo,Ap=T(()=>{P(),V(),G(),Ko=(e,t,i,r,a,s,n,o,u)=>{let l=[{type:12,data:s},{type:12,data:r},{type:12,data:a},{type:12,data:i},{type:12,data:n},{type:12,data:o},{type:12,data:u}],d=[s];l.push(...M(t.dims,d));let p=c=>{let h=S("indices_data",t.dataType,t.dims.length),f=O("input_slice_offsets_data",12,1,1),m=[h,f],y=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:a.length},{name:"sizes_from_slice_dims_data",type:"u32",length:i.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${c.registerUniforms(y).declareVariables(...m)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${a.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${i.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${a.length}_${i.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:l}),getShaderSource:p},{inputs:[t],outputs:[-1]})[0]},jo=(e,t)=>{let i=e.inputs,r=i[0].dims,a=i[0].dataType,s=i[1].dims,n=s[s.length-1],o=k.sizeToDimension(s,s.length-1),u=k.sizeFromDimension(r,t.batchDims+n),l=k.sizeToDimension(r,t.batchDims),d=k.sizeFromDimension(r,t.batchDims),p=o/l,c=new Array(n),h=u;for(let $=0;$<n;++$)c[n-1-$]=h,h*=r[t.batchDims+n-1-$];let f=Ko(e,i[1],c,t.batchDims,r,o,p,d,n),m=t.batchDims+n;if(m>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let y=s.slice(0,-1).concat(r.slice(m)),_=k.size(y),g=[{type:12,data:_},{type:12,data:u},...M(i[0].dims,f.dims,y)],w=$=>{let b=S("data",i[0].dataType,i[0].dims.length),v=S("slice_offsets",12,f.dims.length),x=O("output",i[0].dataType,y.length);return`
          ${$.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(b,v,x)}
            ${$.mainStart()}
            ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:y,dataType:a}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:g}),getShaderSource:w},{inputs:[i[0],f]})},Qo=e=>({batchDims:e.batch_dims,cacheKey:""})}),Zo,Xo,Yo,Jo,Op=T(()=>{P(),V(),te(),G(),Zo=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let i=k.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,a=e[0],s=e[2],n=e.length===4?e[3]:void 0;if(s.dims.length!==a.dims.length||!a.dims.map((o,u)=>u===i?Math.ceil(o/r)===s.dims[u]:o===s.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(n){if(n.dataType!==a.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(n.dims.length!==s.dims.length||!n.dims.map((o,u)=>o===s.dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Xo=(e,t)=>{let i=e[0].dims,r=e[1].dims,a=i.length,s=k.normalizeAxis(t.gatherAxis,a),n=k.normalizeAxis(t.quantizeAxis,a),o=i.slice(0);o.splice(s,1,...r);let u=k.size(o),l=e[2].dataType,d=e[0].dataType===22,p=[{type:12,data:u},{type:12,data:n},{type:12,data:s},{type:12,data:t.blockSize},...M(...e.map((h,f)=>h.dims),o)],c=h=>{let f=S("data",e[0].dataType,e[0].dims.length),m=S("inputIndices",e[1].dataType,e[1].dims.length),y=S("scales",e[2].dataType,e[2].dims.length),_=e.length>3?S("zeroPoint",e[3].dataType,e[3].dims.length):void 0,g=O("output",l,o.length),w=[f,m,y];_&&w.push(_);let $=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${h.registerUniforms($).declareVariables(...w,g)}
        ${h.mainStart()}
        let output_indices = ${g.offsetToIndices("global_idx")};
        var indices_indices = ${m.type.indices}(0);
        ${(()=>r.length>1?`
          for (var i: u32 = 0; i < ${r.length}; i++) {
            let index = ${g.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${m.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${g.indicesGet("output_indices","uniforms.gather_axis")};`)()};
        var data_indices = ${f.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${g.indicesGet("output_indices","i")};
          ${f.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${m.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${i[s]};
        }
        ${f.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${g.indicesGet("output_indices",`i + ${r.length} - 1`)};
          ${f.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${f.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${f.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${d?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${y.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${y.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${y.getByIndices("scale_indices")};
        ${(()=>_?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${_.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${_.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${d?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0")()};
        let dequantized_data = ${ue(l)}(quantized_data - zero_point) * scale;
        ${g.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((h,f)=>f!==1).map(h=>h.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(h,f)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:l}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:p}),getShaderSource:c}},Yo=(e,t)=>{let i=e.inputs;Zo(i,t),e.compute(Xo(e.inputs,t))},Jo=e=>X({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),eu,tu,iu,ru,Rp=T(()=>{P(),V(),te(),G(),eu=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},tu=(e,t)=>{let i=e[0].dims,r=e[0].dataType,a=i.length,s=e[1].dims,n=e[1].dataType,o=k.normalizeAxis(t.axis,a),u=i[o],l=s.slice(0),d=k.size(l),p=S("input",r,a),c=S("indicesInput",n,s.length),h=O("output",r,l.length),f=[{type:12,data:d},{type:6,data:u},{type:12,data:o}];return f.push(...M(i,s,l)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:f}),getShaderSource:m=>`
      ${m.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(p,c,h)}
      ${m.mainStart()}
      ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${h.offsetToIndices("global_idx")};

      var idx = ${c.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${p.type.indices}(outputIndices);
      ${p.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${p.getByIndices("inputIndices")};

      ${h.setByOffset("global_idx","value")};
  }`}},iu=e=>X({axis:e.axis}),ru=(e,t)=>{let i=e.inputs;eu(i),e.compute(tu(e.inputs,t))}}),au,nu,su,ou,Dp=T(()=>{P(),V(),G(),au=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},nu=(e,t)=>{let i=e[0].dims.slice(),r=e[1].dims.slice(),[a,s,n]=Ia.getShapeOfGemmResult(i,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),o=[a,s];if(!o)throw new Error("Can't use gemm on the given tensors");let u=16,l=Math.ceil(s/u),d=Math.ceil(a/u),p=!0,c=k.size(o),h=[{type:12,data:p?l:c},{type:12,data:a},{type:12,data:s},{type:12,data:n},{type:1,data:t.alpha},{type:1,data:t.beta}],f=["type","type"];e.length===3&&(h.push(...M(e[2].dims)),f.push("rank")),h.push(...M(o));let m=_=>{let g="";t.transA&&t.transB?g="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?g="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?g="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(g="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let w=t.alpha===1?"":"value *= uniforms.alpha;",$=S("a",e[0].dataType,e[0].dims),b=S("b",e[1].dataType,e[1].dims),v=$.type.value,x=null,I=[$,b];e.length===3&&(x=S("c",e[2].dataType,e[2].dims.length),I.push(x));let E=O("output",e[0].dataType,o.length);I.push(E);let C=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${_.registerUniforms(C).declareVariables(...I)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${v}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${g}
    }

    ${w}
    ${(()=>x!=null?`let cOffset = ${x.broadcastedIndicesToOffset("vec2(m, n)",E)}; value += ${v}(uniforms.beta) * ${x.getByOffset("cOffset")};`:"")()}
    output[global_idx] = value;
  }`},y=_=>{let g=S("a",e[0].dataType,e[0].dims),w=S("b",e[1].dataType,e[1].dims),$=null,b=[g,w];e.length===3&&($=S("c",e[2].dataType,e[2].dims.length),b.push($));let v=O("output",e[0].dataType,o.length);b.push(v);let x=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],I="",E="";t.transA&&t.transB?(E=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${g.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${w.type.value}(0);
      }
      `,I="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(E=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${g.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${w.type.value}(0);
      }
      `,I="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(E=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${g.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${w.type.value}(0);
      }
      `,I="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(E=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${g.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${w.type.value}(0);
      }
      `,I="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let C=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${_.registerUniforms(x).declareVariables(...b)}
  var<workgroup> tile_a: array<array<${g.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${w.type.storage}, ${u}>, ${u}>;
  ${_.mainStart([u,u,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${u};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${u};
    let num_tiles = (uniforms.K - 1) / ${u} + 1;
    var k_start = 0u;
    var value = ${v.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${E}
      k_start = k_start + ${u};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${u}; k++) {
        ${I}
      }
      workgroupBarrier();
    }

    ${C}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${(()=>$!=null?`let cOffset = ${$.broadcastedIndicesToOffset("vec2(m, n)",v)}; value += ${v.type.value}(uniforms.beta) * ${$.getByOffset("cOffset")};`:"")()}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return p?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:l*d},programUniforms:h}),getShaderSource:y}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:h}),getShaderSource:m}},su=e=>{let t=e.transA,i=e.transB,r=e.alpha,a=e.beta;return{transA:t,transB:i,alpha:r,beta:a,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},ou=(e,t)=>{au(e.inputs),e.compute(nu(e.inputs,t))}}),Ie,Ee,Fe,Ke,uu,lu,du,pu,cu,hu,fu,mu,gu,_u,Mp=T(()=>{P(),V(),te(),G(),[Ie,Ee,Fe,Ke]=[0,1,2,3],uu=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},lu=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,du=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,pu=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,cu=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,hu=(e,t,i)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Ie}] = batch;
     indices[${Ee}] = channel;`+(()=>{switch(i.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Fe}] = u32(r);
            indices[${Ke}] = u32(c);
          }
        `;case"border":return`
          indices[${Fe}] = u32(clamp(r, 0, H - 1));
          indices[${Ke}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Fe}] = gs_reflect(r, border[1], border[3]);
          indices[${Ke}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${i.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,fu=(e,t,i)=>(()=>{switch(i.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Ie}], indices[${Ee}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Ie}], indices[${Ee}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Ie}], indices[${Ee}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Ie}], indices[${Ee}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Ie}], indices[${Ee}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Ie}], indices[${Ee}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${i.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,mu=(e,t)=>{let i=S("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],a=S("grid",e[1].dataType,r.length,2),s=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(s=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Ie,Ee,Fe,Ke]=[0,3,1,2]);let n=O("output",e[0].dataType,s.length),o=i.type.value,u=k.size(s),l=[{type:12,data:u},...M(e[0].dims,r,s)],d=p=>`
  ${p.registerUniform("output_size","u32").declareVariables(i,a,n)}
  ${lu}
  ${du(o)}
  ${pu(t)}
  ${cu(t)}
  ${hu(i,o,t)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Fe}]);
      let W_in = i32(uniforms.x_shape[${Ke}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${n.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${Ie}], indices[${Fe}], indices[${Ke}]);
      let nxy = ${a.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${fu(n,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:p=>{let c=k.size(s);return{outputs:[{dims:s,dataType:p[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:l}},getShaderSource:d}},gu=(e,t)=>{uu(e.inputs),e.compute(mu(e.inputs,t))},_u=e=>X({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),de,yu,$u,Yi,wu,_t,bu,vu=T(()=>{P(),V(),te(),yi(),Ei(),G(),Oe(),de=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,yu=(e,t)=>{let i=e[0],r=de(e,1),a=de(e,2),s=de(e,3),n=de(e,4),o=de(e,5),u=de(e,6),l=de(e,7);if(i.dims.length!==3&&i.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let d=i.dims[0],p=i.dims[1],c=i.dims.length===3?i.dims[2]:t.numHeads*i.dims[4],h=p,f=0,m=0,y=Math.floor(c/t.numHeads);if(u&&l&&k.size(u.dims)&&k.size(l.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==d||u.dims[1]!==t.numHeads||u.dims[3]!==y)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[0]!==d||l.dims[1]!==t.numHeads||l.dims[3]!==y)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==l.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(l.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');f=u.dims[2],m=u.dims[2]}else if(u&&k.size(u.dims)||l&&k.size(l.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let _;if(r&&k.size(r.dims)>0){if(i.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==i.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');_=2,h=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==y)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');_=5,h=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==y)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');_=0,h=r.dims[2]}}else{if(i.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(i.dims[2]!==t.numHeads||i.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');_=3}if(s&&k.size(s.dims)>0){if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let g=f+h,w=0;if(n&&k.size(n.dims)>0){w=8;let x=n.dims;throw x.length===1?x[0]===d?w=1:x[0]===3*d+2&&(w=3):x.length===2&&x[0]===d&&x[1]===g&&(w=5),w===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let $=!1,b=c;if(a&&k.size(a.dims)>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(h!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');b=a.dims[2]}else{if(h!==a.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');b=a.dims[1]*a.dims[3],$=!0}}let v=!1;if(n&&k.size(n.dims)>0)throw new Error("Key padding mask is not supported");if(o&&k.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==d||o.dims[1]!==t.numHeads||o.dims[2]!==p||o.dims[3]!==g)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:d,sequenceLength:p,pastSequenceLength:f,kvSequenceLength:h,totalSequenceLength:g,maxSequenceLength:m,inputHiddenSize:0,hiddenSize:c,vHiddenSize:b,headSize:y,vHeadSize:Math.floor(b/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:w,scale:t.scale,broadcastResPosBias:v,passPastInKv:$,qkvFormat:_}},$u=e=>X({...e}),Yi=X({perm:[0,2,1,3]}),wu=(e,t,i,r,a,s,n)=>{let o=[r,a,s],u=k.size(o),l=[{type:12,data:u},{type:12,data:n},{type:12,data:s}],d=p=>{let c=O("qkv_with_bias",t.dataType,o),h=S("qkv",t.dataType,o),f=S("bias",i.dataType,o),m=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${p.registerUniforms(m).declareVariables(h,f,c)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:l}),getShaderSource:d},{inputs:[t,i],outputs:[-1]})[0]},_t=(e,t,i,r,a,s,n,o)=>{let u=s;if(n&&k.size(n.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=wu(e,s,n,t,r,i*a,o),u=u.reshape([t,r,i,a]),i===1||r===1?u:e.compute(fe(u,Yi.perm),{inputs:[u],outputs:[-1]})[0]}else return s.dims.length===3&&(u=s.reshape([t,r,i,a])),i===1||r===1?u:e.compute(fe(u,Yi.perm),{inputs:[u],outputs:[-1]})[0]},bu=(e,t)=>{let i=yu(e.inputs,t),r=e.inputs[0],a=de(e.inputs,1),s=de(e.inputs,2),n=de(e.inputs,3),o=de(e.inputs,4),u=de(e.inputs,5),l=de(e.inputs,6),d=de(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if((a==null?void 0:a.dims.length)===5)throw new Error("Packed KV is not implemented");let p=a&&s&&a.dims.length===4&&s.dims.length===4,c=_t(e,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,r,n,0);if(p)return ct(e,c,a,s,o,void 0,l,d,u,i);if(!a||!s)throw new Error("key and value must be provided");let h=_t(e,i.batchSize,i.numHeads,i.kvSequenceLength,i.headSize,a,n,i.hiddenSize),f=_t(e,i.batchSize,i.numHeads,i.kvSequenceLength,i.vHeadSize,s,n,2*i.hiddenSize);ct(e,c,h,f,o,void 0,l,d,u,i)}}),xu,ku,Su,Iu,Ji,zu,Tu,Eu=T(()=>{P(),V(),te(),G(),xu=e=>{if(!e||e.length<1)throw new Error("too few inputs")},ku=(e,t)=>{let i=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(a=>i.push(Number(a))),r=i.length),X({numOutputs:r,axis:t.axis,splitSizes:i})},Su=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${R("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Iu=e=>{let t=e.length,i=[];for(let r=0;r<t;++r){let a=e[r].setByIndices("indices","input[global_idx]");t===1?i.push(a):r===0?i.push(`if (output_number == ${r}u) { ${a} }`):r===t-1?i.push(`else { ${a} }`):i.push(`else if (output_number == ${r}) { ${a} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${i.join(`
`)}
      }`},Ji=(e,t)=>{let i=e[0].dims,r=k.size(i),a=e[0].dataType,s=k.normalizeAxis(t.axis,i.length),n=new Array(t.numOutputs),o=S("input",a,i.length),u=new Array(t.numOutputs),l=[],d=[],p=0,c=[{type:12,data:r}];for(let f=0;f<t.numOutputs;f++){p+=t.splitSizes[f],u[f]=p;let m=i.slice();m[s]=t.splitSizes[f],d.push(m),n[f]=O(`output${f}`,a,m.length),l.push({dims:d[f],dataType:e[0].dataType})}c.push({type:12,data:u},...M(i,...d));let h=f=>`
  ${f.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(o,...n)}
  ${Su(u.length)}
  ${Iu(n)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",s)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${R("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${o.indicesSet("indices",s,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:h,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:c})}},zu=(e,t)=>{xu(e.inputs);let i=e.inputs.length===1?t:ku(e.inputs,t);e.compute(Ji(e.inputs,i),{inputs:[0]})},Tu=e=>{let t=e.axis,i=e.splitSizes,r=e.numOutputs<0?i.length:e.numOutputs;if(r!==i.length)throw new Error("numOutputs and splitSizes lengh must be equal");return X({axis:t,numOutputs:r,splitSizes:i})}}),Cu,Bu,er,Au,Pp=T(()=>{te(),Ei(),vu(),Eu(),Oe(),Cu=(e,t)=>{if(t.doRotary)throw new Error("GroupQuerryAttention do_rotary attribute is not supported");if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let i=e[0],r=e[1],a=e[2],s=e[3],n=e[4];if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(i.dims.length!==3&&i.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,u=i.dims[0],l=i.dims[1],d=i.dims.length===3?o?i.dims[2]/3:i.dims[2]:t.numHeads*i.dims[4],p=l,c=0,h=!r||r.dims.length===0,f=Math.floor(h?d/(t.numHeads+2*t.kvNumHeads):d/t.numHeads);h&&(d=f*t.numHeads);let m=s&&s.dims.length!==0,y=n&&n.dims.length!==0;if(m&&s.dims.length===4&&s.dims[0]===u&&s.dims[1]!==t.kvNumHeads&&s.dims[2]===t.kvNumHeads&&s.dims[3]===f)throw new Error("BSNH pastKey/pastValue is not supported");if(m&&y){if(s.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(n.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');c=s.dims[2]}else if(m||y)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let _=1;if(r&&r.dims.length>0){if(i.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(i.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');p=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==f)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');p=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==f)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');p=r.dims[2]}}else{if(i.dims.length!==3&&i.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(i.dims.length===5&&(i.dims[2]!==t.numHeads||i.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');_=3}let g=0,w=!1,$=t.kvNumHeads?f*t.kvNumHeads:d;if(a&&a.dims.length>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(p!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');$=a.dims[2]}else{if(p!==a.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');$=a.dims[1]*a.dims[3],w=!0}}let b=e.length>4?e[5]:void 0;if(b&&b.dims.length!==1&&b.dims[0]!==u)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');let v=-1,x=-1,I=!1;return{batchSize:u,sequenceLength:l,pastSequenceLength:c,kvSequenceLength:p,totalSequenceLength:v,maxSequenceLength:x,inputHiddenSize:0,hiddenSize:d,vHiddenSize:$,headSize:f,vHeadSize:Math.floor($/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:g,scale:t.scale,broadcastResPosBias:I,passPastInKv:w,qkvFormat:_}},Bu=X({perm:[0,2,1,3]}),er=(e,t,i)=>{let r=t,a=i.kvNumHeads;return t.dims.length===3&&i.kvSequenceLength!==0&&(r=t.reshape([i.batchSize,i.kvSequenceLength,a,i.headSize]),r=e.compute(fe(r,Bu.perm),{inputs:[r],outputs:[-1]})[0]),r},Au=(e,t)=>{var y;let i=Cu(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((y=e.inputs[1])==null?void 0:y.dims.length)===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],a=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,s=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,n=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,d=i.kvNumHeads?i.kvNumHeads:i.numHeads,p=X({axis:2,numOutputs:3,splitSizes:[i.numHeads*i.headSize,d*i.headSize,d*i.headSize]}),[c,h,f]=!a&&!s?e.compute(Ji([r],p),{inputs:[r],outputs:[-1,-1,-1]}):[r,a,s],m=_t(e,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,c,void 0,0);ct(e,m,er(e,h,i),er(e,f,i),void 0,void 0,n,o,void 0,i,u,l)}}),tr,Ou,Ru,Du,Up=T(()=>{P(),V(),Oe(),G(),tr=(e,t,i,r,a,s,n,o)=>{let u=ee(s),l=u===1?"f32":`vec${u}f`,d=u===1?"vec2f":`mat2x${u}f`,p=a*n,c=64;p===1&&(c=256);let h=[a,n,s/u],f=[a,n,2],m=["rank","type","type"],y=[];y.push(...M(h,f));let _=g=>{let w=S("x",t.dataType,3,u),$=S("scale",i.dataType,i.dims),b=S("bias",r.dataType,r.dims),v=O("output",1,3,2),x=[w,$,b,v];return`
  var<workgroup> workgroup_shared : array<${d}, ${c}>;
  const workgroup_size = ${c}u;
  ${g.declareVariables(...x)}
  ${g.mainStart(c)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${l}(0);
    var squared_sum = ${l}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${l}(${w.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${d}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Ae("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${Ae("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${o};${c}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:f,dataType:1}],dispatchGroup:{x:p},programUniforms:y}),getShaderSource:_},{inputs:[t,i,r],outputs:[-1]})[0]},Ou=(e,t,i)=>{let r=t[0].dims,a=r,s=2,n=r[0],o=r[1],u=k.sizeFromDimension(r,s),l=ee(u),d=k.size(a)/l,p=tr(e,t[0],t[1],t[2],n,u,o,i.epsilon),c=[n,o,u/l],h=[n,o],f=["type","none"],m=y=>{let _=S("x",t[0].dataType,c.length,l),g=S("scale_shift",1,h.length,2),w=O("output",t[0].dataType,c.length,l),$=[_,g,w];return`
  ${y.registerUniform("output_size","u32").declareVariables(...$)}
  ${y.mainStart()}
  ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${w.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${g.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${_.getByOffset("global_idx")} * ${w.type.value}(scale_shift.x) + ${w.type.value}(scale_shift.y);
      ${w.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${l}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:[{type:12,data:d},...M(c,h,c)]}),getShaderSource:m},{inputs:[t[0],p]})},Ru=(e,t,i)=>{let r=t[0].dims,a=r,s=r[0],n=r[r.length-1],o=k.sizeFromDimension(r,1)/n,u=ee(n),l=k.size(a)/u,d=[{type:12,data:o},{type:12,data:Math.floor(n/u)}],p=["type","type"],c=!1,h=[0,r.length-1];for(let _=0;_<r.length-2;_++)c=c||r[_+1]!==1,h.push(_+1);c=c&&r[r.length-1]!==1;let f=c?e.compute(fe(e.inputs[0],h),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(_,g)=>r[h[g]])),m=tr(e,f,t[1],t[2],s,o,n,i.epsilon),y=_=>{let g=ae(t[0].dataType),w=u===1?"vec2f":`mat${u}x2f`,$=x=>{let I=x===0?"x":"y",E=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${g}(${E}(scale.${I}))`;case 2:return`vec2<${g}>(${E}(scale[0].${I}, scale[1].${I}))`;case 4:return`vec4<${g}>(${E}(scale[0].${I}, scale[1].${I}, scale[2].${I}, scale[3].${I}))`;default:throw new Error(`Not supported compoents ${u}`)}},b=S("input",t[0].dataType,t[0].dims,u),v=O("output",t[0].dataType,a,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${b.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${w}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${v.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${_.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${$(0)}, ${$(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:y},{inputs:[t[0],m]})},Du=(e,t)=>{t.format==="NHWC"?Ru(e,e.inputs,t):Ou(e,e.inputs,t)}}),Mu,Pu,Uu,qp=T(()=>{P(),V(),G(),Mu=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Pu=(e,t,i)=>{let r=t.simplified,a=e[0].dims,s=e[1],n=!r&&e[2],o=a,u=k.normalizeAxis(t.axis,a.length),l=k.sizeToDimension(a,u),d=k.sizeFromDimension(a,u),p=k.size(s.dims),c=n?k.size(n.dims):0;if(p!==d||n&&c!==d)throw new Error(`Size of X.shape()[axis:] == ${d}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${p} and bias size of ${c}`);let h=[];for(let b=0;b<a.length;++b)b<u?h.push(a[b]):h.push(1);let f=ee(d),m=["type","type"],y=[{type:12,data:l},{type:1,data:d},{type:12,data:Math.floor(d/f)},{type:1,data:t.epsilon}];n&&m.push("type");let _=i>1,g=i>2,w=b=>{let v=ae(e[0].dataType),x=[S("x",e[0].dataType,e[0].dims,f),S("scale",s.dataType,s.dims,f)];n&&x.push(S("bias",n.dataType,n.dims,f)),x.push(O("output",e[0].dataType,o,f)),_&&x.push(O("mean_data_output",1,h)),g&&x.push(O("inv_std_output",1,h));let I=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${b.registerUniforms(I).declareVariables(...x)}
  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${vi("f32",f)};
    var mean_square_vector = ${vi("f32",f)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${et(v,f,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Ae("mean_vector",f)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Ae("mean_square_vector",f)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${et(v,f,"x[j + offset]")};
      let f32scale = ${et(v,f,"scale[j]")};
      output[j + offset] = ${x[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${n?`+ ${et(v,f,"bias[j]")}`:""}
      );
    }

    ${_?"mean_data_output[global_idx] = mean":""};
    ${g?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},$=[{dims:o,dataType:e[0].dataType}];return _&&$.push({dims:h,dataType:1}),g&&$.push({dims:h,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${f};${i};${r}`,inputDependencies:m},getRunData:()=>({outputs:$,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:y}),getShaderSource:w}},Uu=(e,t)=>{Mu(e.inputs),e.compute(Pu(e.inputs,t,e.outputCount))}}),qu,Nu,Np=T(()=>{V(),Pi(),Vi(),qu=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Nu=e=>{qu(e.inputs);let t=Ye.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let i=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(i<8&&r<8)e.compute(Mi(e.inputs,{activation:""},t));else{let a=t[t.length-2],s=k.size(e.inputs[0].dims.slice(0,-2)),n=k.size(e.inputs[1].dims.slice(0,-2));if(s!==1&&a===1&&n===1){let o=e.inputs[0].reshape([1,s,r]),u=e.inputs[1].reshape([1,r,i]),l=[1,s,i],d=[o,u];e.compute(Pt(d,{activation:""},t,l),{inputs:d})}else e.compute(Pt(e.inputs,{activation:""},t))}}}),Vu,Lu,Gu,Wu,Hu,Vp=T(()=>{P(),V(),te(),G(),Vu=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let i=e[0],r=i.dims.length;if(i.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let a=Math.floor((t.k+t.blockSize-1)/t.blockSize),s=t.blockSize/8*t.bits,n=e[1];if(!k.areEqual(n.dims,[t.n,a,s]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(k.size(o)!==t.n*a)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,l=t.bits>4?t.n*a:t.n*Math.floor((a+1)/2);if(k.size(u)!==l)throw new Error("zeroPoints input size error.")}},Lu=(e,t)=>{let i=e[0].dims,r=i.length,a=i[r-2],s=t.k,n=t.n,o=i.slice(0,r-2),u=k.size(o),l=e[1].dims[2]/4,d=e[0].dataType,p=ee(t.k),c=ee(l),h=ee(n),f=o.concat([a,n]),m=a>1&&n/h%2===0?2:1,y=k.size(f)/h/m,_=64,g=[],w=[u,a,s/p],$=k.convertShape(e[1].dims).slice();$.splice(-1,1,l/c),g.push(...M(w)),g.push(...M($)),g.push(...M(e[2].dims)),e.length===4&&g.push(...M(k.convertShape(e[3].dims)));let b=[u,a,n/h];g.push(...M(b));let v=x=>{let I=w.length,E=S("a",e[0].dataType,I,p),C=S("b",12,$.length,c),q=S("scales",e[2].dataType,e[2].dims.length),W=[E,C,q],D=e.length===4?S("zero_points",12,e[3].dims.length):void 0;D&&W.push(D);let H=b.length,A=O("output",e[0].dataType,H,h),U=ae(e[0].dataType),Y=(()=>{switch(p){case 1:return`array<${U}, 8>`;case 2:return`mat4x2<${U}>`;case 4:return`mat2x4<${U}>`;default:throw new Error(`${p}-component is not supported.`)}})(),L=()=>{let z=`
          // reuse a data
            var input_offset = ${E.indicesToOffset(`${E.type.indices}(batch, row, word_offset)`)};
            var a_data: ${Y};
            for (var j: u32 = 0; j < ${8/p}; j++) {
              a_data[j] = ${E.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let B=0;B<h*m;B++)z+=`
            b_value = ${c===1?`b${B}_data`:`b${B}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${Y}(${Array.from({length:4},(K,ie)=>`${U}(b_value_lower[${ie}]), ${U}(b_value_upper[${ie}])`).join(", ")});
            b_dequantized_values = ${(()=>p===1?`${Y}(${Array.from({length:8},(K,ie)=>`(b_quantized_values[${ie}] - ${D?`zero_point${B}`:"zero_point"}) * scale${B}`).join(", ")});`:`(b_quantized_values - ${Y}(${Array(8).fill(`${D?`zero_point${B}`:"zero_point"}`).join(",")})) * scale${B};`)()};
            workgroup_shared[local_id.x * ${m} + ${Math.floor(B/h)}]${h>1?`[${B%h}]`:""} += ${Array.from({length:8/p},(K,ie)=>`${p===1?`a_data[${ie}] * b_dequantized_values[${ie}]`:`dot(a_data[${ie}], b_dequantized_values[${ie}])`}`).join(" + ")};
          `;return z},N=()=>{let z=`
            var col_index = col * ${h};
            ${D?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${U}(8);`}
            `;for(let B=0;B<h*m;B++)z+=`
            let scale${B} = ${q.getByOffset("col_index * nBlocksPerCol + block")};
            ${D?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${D.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${B} = ${U}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return z},Q=()=>{let z=`col_index = col * ${h};`;for(let B=0;B<h*m;B++)z+=`
            let b${B}_data = ${C.getByIndices(`${C.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return z+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${Y};
            var b_dequantized_values: ${Y};`,z};return`
        var<workgroup> workgroup_shared: array<${A.type.value}, ${m*_}>;
        ${x.declareVariables(...W,A)}
        ${x.mainStart([_,1,1])}
          let output_indices = ${A.offsetToIndices(`(global_idx / ${_}) * ${m}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${_}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/p};
            ${N()}
            for (var word: u32 = 0; word < ${l}; word += ${c}) {
              ${Q()}
              for (var i: u32 = 0; i < ${c}; i++) {
                ${L()}
                word_offset += ${8/p};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${m}) {
            var output_value: ${A.type.value} = ${A.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${_}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${m};
            }
            ${A.setByIndices(`${A.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${p};${c};${h};${m};${_}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:f,dataType:d}],dispatchGroup:{x:y},programUniforms:g}),getShaderSource:v}},Gu=(e,t)=>{let i=e[0].dims,r=i.length,a=i[r-2],s=t.k,n=t.n,o=i.slice(0,r-2),u=k.size(o),l=e[1].dims[2]/4,d=e[0].dataType,p=ee(t.k),c=ee(l),h=o.concat([a,n]),f=128,m=n%8===0?8:n%4===0?4:1,y=f/m,_=y*c*8,g=_/p,w=_/t.blockSize,$=k.size(h)/m,b=[],v=[u,a,s/p],x=k.convertShape(e[1].dims).slice();x.splice(-1,1,l/c),b.push(...M(v)),b.push(...M(x)),b.push(...M(e[2].dims)),e.length===4&&b.push(...M(k.convertShape(e[3].dims)));let I=[u,a,n];b.push(...M(I));let E=C=>{let q=v.length,W=S("a",e[0].dataType,q,p),D=S("b",12,x.length,c),H=S("scales",e[2].dataType,e[2].dims.length),A=[W,D,H],U=e.length===4?S("zero_points",12,e[3].dims.length):void 0;U&&A.push(U);let Y=I.length,L=O("output",e[0].dataType,Y),N=ae(e[0].dataType),Q=()=>{switch(p){case 1:return`
          let a_data0 = vec4<${N}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${N}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${N}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${N}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${p}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${W.type.value}, ${g}>;
        var<workgroup> inter_results: array<array<${L.type.value}, ${y}>, ${m}>;
        ${C.declareVariables(...A,L)}
        ${C.mainStart([y,m,1])}
          let output_indices = ${L.offsetToIndices(`workgroup_index * ${m}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${w} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${g};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${g}; a_offset += ${f})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${W.getByIndices(`${W.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${W.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${w} + local_id.x;
            ${U?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${U.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${N}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${N}(8);`}
            let scale = ${H.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${D.getByIndices(`${D.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/p};
            for (var i: u32 = 0; i < ${c}; i++) {
              ${Q()}
              let b_value = ${c===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${N}>(${Array.from({length:4},(z,B)=>`${N}(b_value_lower[${B}]), ${N}(b_value_upper[${B}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${N}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(z,B)=>`${`dot(a_data${B}, b_dequantized_values[${B}])`}`).join(" + ")};
              word_offset += ${8/p};
            }
            workgroupBarrier();
          }

          if (local_idx < ${m}) {
            var output_value: ${L.type.value} = ${L.type.value}(0);
            for (var b = 0u; b < ${y}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${L.setByIndices(`${L.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${p};${c};${y};${m}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:h,dataType:d}],dispatchGroup:{x:$},programUniforms:b}),getShaderSource:E}},Wu=(e,t)=>{Vu(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Gu(e.inputs,t)):e.compute(Lu(e.inputs,t))},Hu=e=>X(e)}),Fu,Ku,ju,Qu,Zu,Xu,Yu,Ju,el,Lp=T(()=>{P(),V(),G(),Fu=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Ku=(e,t,i)=>{let r="";for(let a=t-1;a>=0;--a)r+=`
            k = i32(${e.indicesGet("indices",a)}) - ${R("uniforms.pads",a,i)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${R("uniforms.x_shape",a,t)})) {
              break;
            }
            offset += k * i32(${R("uniforms.x_strides",a,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},ju=(e,t,i)=>{let r="";for(let a=t-1;a>=0;--a)r+=`
                k = i32(${e.indicesGet("indices",a)}) - ${R("uniforms.pads",a,i)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${R("uniforms.x_shape",a,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${R("uniforms.x_shape",a,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${R("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Qu=(e,t,i)=>{let r="";for(let a=t-1;a>=0;--a)r+=`
                k = i32(${e.indicesGet("indices",a)}) - ${R("uniforms.pads",a,i)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${R("uniforms.x_shape",a,t)})) {
                  k = i32(${R("uniforms.x_shape",a,t)}) - 1;
                }
                offset += k * i32(${R("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Zu=(e,t,i)=>{let r="";for(let a=t-1;a>=0;--a)r+=`
                k = i32(${e.indicesGet("indices",a)}) - ${R("uniforms.pads",a,i)};
                if (k < 0)  {
                  k += i32(${R("uniforms.x_shape",a,t)}]);
                }
                if (k >= i32(${R("uniforms.x_shape",a,t)})) {
                  k -= i32(${R("uniforms.x_shape",a,t)});
                }
                offset += k * i32(${R("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Xu=(e,t,i)=>{switch(i.mode){case 0:return Ku(e,t,i.pads.length);case 1:return ju(e,t,i.pads.length);case 2:return Qu(e,t,i.pads.length);case 3:return Zu(e,t,i.pads.length);default:throw new Error("Invalid mode")}},Yu=(e,t)=>{let i=k.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,a=k.size(i),s=[{type:12,data:a},{type:6,data:t.pads}],n=e.length>=3&&e[2].data;t.mode===0&&s.push({type:n?e[2].dataType:1,data:t.value}),s.push(...M(e[0].dims,i));let o=["rank"],u=l=>{let d=O("output",e[0].dataType,i.length),p=S("x",e[0].dataType,r.length),c=p.type.value,h=Xu(d,r.length,t),f=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&f.push({name:"constant_value",type:n?c:"f32"}),`
            ${l.registerUniforms(f).declareVariables(p,d)}
            ${l.mainStart()}
            ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${d.offsetToIndices("global_idx")};

            var value = ${c}(0);
            ${h}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${n}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(k.size(i)/64)},programUniforms:s}),getShaderSource:u}},Ju=(e,t)=>{if(e.length>1){let i=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,a=e[0].dims.length,s=new Int32Array(2*a).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let u=0;u<o.length;u++)s[Number(o[u])]=Number(i[u]),s[Number(o[u])+a]=Number(i[u+o.length])}else i.forEach((o,u)=>s[Number(u)]=Number(o));let n=[];return s.forEach(o=>n.push(o)),{mode:t.mode,value:r,pads:n}}else return t},el=(e,t)=>{Fu(e.inputs);let i=Ju(e.inputs,t);e.compute(Yu(e.inputs,i),{inputs:[0]})}}),yt,ir,rr,ar,nr,tl,il,sr,or,rl,al,ur,nl,sl,lr,ol,ul,ll,dl,Gp=T(()=>{$e(),P(),V(),G(),yt=e=>{if(J.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},ir=(e,t,i)=>{let r=t.format==="NHWC",a=e.dims.slice();r&&a.splice(1,0,a.pop());let s=Object.hasOwnProperty.call(t,"dilations"),n=t.kernelShape.slice(),o=t.strides.slice(),u=s?t.dilations.slice():[],l=t.pads.slice();At.adjustPoolAttributes(i,a,n,o,u,l);let d=At.computePoolOutputShape(i,a,o,u,n,l,t.autoPad),p=Object.assign({},t);s?Object.assign(p,{kernelShape:n,strides:o,pads:l,dilations:u,cacheKey:t.cacheKey}):Object.assign(p,{kernelShape:n,strides:o,pads:l,cacheKey:t.cacheKey});let c=d.slice();return c.push(c.splice(1,1)[0]),[p,r?c:d]},rr=(e,t)=>{let i=t.format==="NHWC",r=k.size(e),a=k.size(t.kernelShape),s=[{type:12,data:r},{type:12,data:a}],n=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],l=t.pads[t.pads.length/2-1],d=t.pads[t.pads.length-1],p=!!(l+d);s.push({type:12,data:o},{type:12,data:u},{type:12,data:l},{type:12,data:d}),n.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let c=!1;if(t.kernelShape.length===2){let h=t.kernelShape[t.kernelShape.length-2],f=t.strides[t.strides.length-2],m=t.pads[t.pads.length/2-2],y=t.pads[t.pads.length-2];c=!!(m+y),s.push({type:12,data:h},{type:12,data:f},{type:12,data:m},{type:12,data:y}),n.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[s,n,!0,p,c]}else{if(i)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=k.computeStrides(t.kernelShape);s.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),n.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((l,d)=>l+d);return[s,n,!!u,!1,!1]}},ar=(e,t,i,r,a,s,n,o,u,l,d,p)=>{let c=a.format==="NHWC",h=t.type.value,f=O("output",t.type.tensor,r);if(a.kernelShape.length<=2){let m="",y="",_="",g=i-(c?2:1);if(d?m=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${g}] = indices[${g}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${g}] < 0 || xIndices[${g}]
                      >= uniforms.x_shape[${g}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`:m=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${g}] = indices[${g}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`,a.kernelShape.length===2){let w=i-(c?3:2);p?y=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${w}] < 0 || xIndices[${w}] >= uniforms.x_shape[${w}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:y=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sh - uniforms.phStart + j;
                `,_=`
              }
            `}return`
            ${e.registerUniforms(u).declareVariables(t,f)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${f.offsetToIndices("global_idx")};
              var xIndices = ${f.offsetToIndices("global_idx")};

              var value = ${h}(${o});
              var pad = 0;
              ${y}
              ${m}
              ${_}
              ${n}

              output[global_idx] = value;
            }`}else{if(c)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let m=a.kernelShape.length,y=a.pads.length,_="";return l?_=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${s}
              }`:_=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${s}
            `,`
            ${e.registerUniforms(u).declareVariables(t,f)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${f.offsetToIndices("global_idx")};
              var xIndices = ${f.offsetToIndices("global_idx")};

              var offsets: array<u32, ${m}>;

              var value = ${h}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${m-1}u; j++) {
                  offsets[j] = offset / ${R("uniforms.kernelStrides","j",m)};
                  offset -= offsets[j] * ${R("uniforms.kernelStrides","j",m)};
                }
                offsets[${m-1}] = offset;

                isPad = false;
                for (var j = ${i-m}u; j < ${i}u; j++) {
                  xIndices[j] = indices[j] * ${R("uniforms.strides",`j - ${i-m}u`,m)}
                    + offsets[j - ${i-m}u] - ${R("uniforms.pads","j - 2u",y)};
                  ${_}
              }
              ${n}

              output[global_idx] = value;
            }`}},nr=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,tl=e=>`${nr(e)};${e.countIncludePad}`,il=e=>`${nr(e)};${e.storageOrder};${e.dilations}`,sr=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),or=(e,t,i,r)=>{let[a,s]=ir(t,r,i),n=S("x",t.dataType,t.dims.length),o=n.type.value,u="value += x_val;",l="";a.countIncludePad?l+=`value /= ${o}(uniforms.kernelSize);`:l+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[d,p,c,h,f]=rr(s,a);d.push(...M(t.dims,s));let m=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${c};${h};${f}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(k.size(s)/64)},programUniforms:d}),getShaderSource:y=>ar(y,n,t.dims.length,s.length,a,u,l,0,p,c,h,f)}},rl=e=>{let t=e.count_include_pad!==0,i=sr(e);if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let r={countIncludePad:t,...i,cacheKey:""};return{...r,cacheKey:tl(r)}},al=(e,t)=>{yt(e.inputs),e.compute(or("AveragePool",e.inputs[0],!1,t))},ur={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},nl=e=>{let t=e.format;return{format:t,...ur,cacheKey:t}},sl=(e,t)=>{yt(e.inputs),e.compute(or("GlobalAveragePool",e.inputs[0],!0,t))},lr=(e,t,i,r)=>{let[a,s]=ir(t,r,i),n=`
      value = max(x_val, value);
    `,o="",u=S("x",t.dataType,t.dims.length),l=["rank"],[d,p,c,h,f]=rr(s,a);return d.push(...M(t.dims,s)),{name:e,shaderCache:{hint:`${r.cacheKey};${c};${h};${f}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(k.size(s)/64)},programUniforms:d}),getShaderSource:m=>ar(m,u,t.dims.length,s.length,a,n,o,t.dataType===10?-65504:-1e5,p,c,h,f)}},ol=(e,t)=>{yt(e.inputs),e.compute(lr("MaxPool",e.inputs[0],!1,t))},ul=e=>{let t=e.storage_order,i=e.dilations,r=sr(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let a={storageOrder:t,dilations:i,...r,cacheKey:""};return{...a,cacheKey:il(a)}},ll=e=>{let t=e.format;return{format:t,...ur,cacheKey:t}},dl=(e,t)=>{yt(e.inputs),e.compute(lr("GlobalMaxPool",e.inputs[0],!0,t))}}),pl,cl,hl,fl,Wp=T(()=>{P(),V(),te(),G(),pl=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((i,r)=>i===e[2].dims[r]).reduce((i,r)=>i&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((a,s)=>s===t.axis||a===e[0].dims[s]).reduce((a,s)=>a&&s,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let i=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(i/r)||t.blockSize>Math.ceil(i/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},cl=(e,t)=>{let i=k.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,a=r===3,s=e[0].dims,n=e[1].dataType,o=k.size(s),u=r===3||r===2,l=u?[Math.ceil(k.size(e[0].dims)/4)]:e[0].dims,d=e[1].dims,p=e.length>2?e[2]:void 0,c=p?u?[Math.ceil(k.size(p.dims)/4)]:p.dims:void 0,h=d.length===0||d.length===1&&d[0]===1,f=h===!1&&d.length===1,m=ee(o),y=h&&(!u||m===4),_=y?m:1,g=y&&!u?m:1,w=S("input",u?12:r,l.length,g),$=S("scale",n,d.length),b=p?S("zero_point",u?12:r,c.length):void 0,v=O("output",n,s.length,_),x=[w,$];b&&x.push(b);let I=[l,d];p&&I.push(c);let E=[{type:12,data:o/_},{type:12,data:i},{type:12,data:t.blockSize},...M(...I,s)],C=q=>{let W=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${q.registerUniforms(W).declareVariables(...x,v)}
      ${q.mainStart()}
          ${q.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${v.offsetToIndices("global_idx")};

          // Set input x
          ${(()=>u?`
            let input = ${w.getByOffset("global_idx / 4")};
            let x_vec = ${a?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${_===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${w.getByOffset("global_idx")};`)()};

          // Set scale input
          ${(()=>h?`let scale_value= ${$.getByOffset("0")}`:f?`
            let scale_index = ${v.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${$.getByOffset("scale_index")};`:`
            var scale_indices: ${$.type.indices} = output_indices;
            let index = ${$.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${$.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${$.getByIndices("scale_indices")};`)()};

          // Set zero-point input
          ${(()=>b?h?u?`
                let zero_point_input = ${b.getByOffset("0")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${b.getByOffset("0")}`:f?u?`
                let zero_point_index = ${v.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${b.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${v.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${b.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${$.indicesToOffset("scale_indices")};
                let zero_point_input = ${b.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${b.getByIndices("scale_indices")};`:`let zero_point_value = ${u?a?"i32":"u32":w.type.value}(0);`)()};
      // Compute and write output
      ${v.setByOffset("global_idx",`${v.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:b?["rank","rank","rank"]:["rank","rank"]},getShaderSource:C,getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(o/_/64),y:1,z:1},programUniforms:E})}},hl=(e,t)=>{pl(e.inputs,t),e.compute(cl(e.inputs,t))},fl=e=>X({axis:e.axis,blockSize:e.blockSize})}),ml,gl,_l,Hp=T(()=>{$e(),P(),G(),ml=(e,t,i)=>{let r=e===t,a=e<t&&i<0,s=e>t&&i>0;if(r||a||s)throw new Error("Range these inputs' contents are invalid.")},gl=(e,t,i,r)=>{let a=Math.abs(Math.ceil((t-e)/i)),s=[a],n=a,o=[{type:12,data:n},{type:r,data:e},{type:r,data:i},...M(s)],u=l=>{let d=O("output",r,s.length),p=d.type.value,c=[{name:"outputSize",type:"u32"},{name:"start",type:p},{name:"delta",type:p}];return`
        ${l.registerUniforms(c).declareVariables(d)}
        ${l.mainStart()}
        ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${p}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:s,dataType:r}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:o})}},_l=e=>{let t=0,i=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],i=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],i=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),J.webgpu.validateInputContent&&ml(t,i,r),e.compute(gl(t,i,r,e.inputs[0].dataType),{inputs:[]})}}),yl,$l,wl,bl,Fp=T(()=>{P(),V(),te(),G(),yl=(e,t,i,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let a=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,s=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${i};`;case"add":return r==="i32"||r==="u32"?`atomicAdd(&${t}, bitcast<${r}>(${i}));`:`
              ${a}bitcast<${r}>(oldValue) + (${i})${s}`;case"max":return r==="i32"||r==="u32"?`atomicMax(&${t}, bitcast<${r}>(${i}));`:`
                ${a}max(bitcast<f32>(oldValue), (${i}))${s}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${i}));`:`${a}min(bitcast<${r}>(oldValue), (${i}))${s}`;case"mul":return`${a}(bitcast<${r}>(oldValue) * (${i}))${s}`;default:throw new Error(`Reduction ${e} is not supported.`)}},$l=(e,t)=>{let i=e[0].dims,r=e[1].dims,a=i,s=1,n=Math.ceil(k.size(r)/s),o=r[r.length-1],u=k.sizeFromDimension(i,o),l=[{type:12,data:n},{type:12,data:o},{type:12,data:u},...M(e[1].dims,e[2].dims,a)],d=p=>{let c=S("indices",e[1].dataType,e[1].dims.length),h=S("updates",e[2].dataType,e[2].dims.length,s),f=t.reduction!=="none"&&t.reduction!==""?Ea("output",e[0].dataType,a.length):O("output",e[0].dataType,a.length,s);return`
      ${p.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(c,h,f)}
      ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start + uniforms.last_index_dimension];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${yl(t.reduction,"output[data_offset + i]","value",f.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:l}),getShaderSource:d}},wl=e=>X({reduction:e.reduction}),bl=(e,t)=>{e.compute($l(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),vl,xl,kl,dr,Sl,Il,zl,Tl,El,Cl,Bl,Al,pr,Ol,Rl,Dl,Ml,Pl,Ul,ql,Kp=T(()=>{P(),V(),te(),G(),vl=(e,t)=>{if(e.every(i=>i>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},xl=(e,t,i)=>{t.every(a=>a>=0&&a<i||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(i).fill(1);return t.forEach((a,s)=>r[a]=e[s]),r},kl=(e,t,i,r,a,s)=>{let[n,o,u]=i>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(n>0&&e.length>n&&e[n].dims.length>0)e[n].getFloat32Array().forEach(d=>s.push(d));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(d=>r.push(d)),r.length!==0&&r.length!==l&&i>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");vl(r,t),t.axes.length>0&&xl(r,t.axes,l).forEach((d,p)=>r[p]=d)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(d=>a.push(Number(d))),a.length!==0&&a.length!==l&&i>=18&&a.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof a<"u"&&r.length>0&&a.length>l)throw new Error("Resize requires only of scales or sizes to be specified")},dr=(e,t,i,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${i}));
  let fract = ${r}(big % (${i})) / ${r}(${i});
  return whole + fract;
`,Sl=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${dr("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${dr("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Il=(e,t,i)=>`fn getNearestPixelFromOriginal(xOriginal: ${i}, isDownSample: bool) -> ${i} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",zl=(e,t,i)=>{let r=new Array(i).fill(0).concat(new Array(i).fill(1)),a=e.length===0?r:e.slice();return t.length>0?(t.forEach((s,n)=>{r[s]=a[n],r[n+i]=a[t.length+n]}),r):a},Tl=(e,t,i,r)=>{let a=[];if(i.length>0)if(r.length>0){if(e.forEach(s=>a.push(s)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((s,n)=>a[s]=i[n])}else i.forEach(s=>a.push(s));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");a=e.map((s,n)=>Math.round(s*t[n]))}return a},El=(e,t,i)=>{let r=(()=>{switch(i.keepAspectRatioPolicy){case"not_larger":return i.axes.length>0?Math.min(...i.axes.map(s=>t[s]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return i.axes.length>0?Math.max(...i.axes.map(s=>t[s]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${i.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let a=e.slice();return i.axes.length>0?(i.axes.forEach(s=>t[s]=r),i.axes.forEach(s=>a[s]=Math.round(e[s]*t[s]))):(t.fill(r,0,t.length),a.forEach((s,n)=>a[n]=Math.round(s*t[n]))),a},Cl=(e,t,i,r,a)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${i.length}> {
      var original_indices: array<${e.type.value}, ${i.length}>;
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${R("uniforms.scales","i",r)};
        var roi_low = ${R("uniforms.roi","i",a)};
        var roi_hi = ${R("uniforms.roi",`i + ${t.length}`,a)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${R("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${R("uniforms.output_shape","i",i.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Bl=(e,t,i,r,a,s,n)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${R("uniforms.scales","i",a)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${R("uniforms.roi","i",s)};
          var roi_hi = ${R("uniforms.roi",`i + ${i.length}`,s)};
          var input_shape_i = ${R("uniforms.input_shape","i",i.length)};
          var output_shape_i = ${R("uniforms.output_shape","i",r.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${n} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,Al=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${R("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,pr=(e,t,i,r)=>e.rank>r?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",i,"batch")};
`:"",Ol=(e,t,i,r,a)=>{let[s,n,o,u]=i.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",n,`max(0, min(row, ${i[n]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${i[o]} - 1))`)};
      ${pr(e,u,s,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${l} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${l} = originalIndices[${n}];
      var col:${l} = originalIndices[${o}];
      ${r?`if (row < 0 || row > (${i[n]} - 1) || col < 0 || col > (${i[o]} - 1)) {
        return ${a};
      }`:""};
      row = max(0, min(row, ${i[n]} - 1));
      col = max(0, min(col, ${i[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${i.length>2?`u32(originalIndices[${u}])`:"0"};
      var batch: u32 =  ${i.length>2?`u32(originalIndices[${s}])`:"0"};
      var x11: ${l} = getInputValue(batch, channel, row1, col1);
      var x12: ${l} = getInputValue(batch, channel, row1, col2);
      var x21: ${l} = getInputValue(batch, channel, row2, col1);
      var x22: ${l} = getInputValue(batch, channel, row2, col2);
      var dx1: ${l} = abs(row - ${l}(row1));
      var dx2: ${l} = abs(${l}(row2) - row);
      var dy1: ${l} = abs(col - ${l}(col1));
      var dy2: ${l} = abs(${l}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},Rl=(e,t,i,r,a,s,n,o,u,l)=>{let d=i.length===2,[p,c]=d?[0,1]:[2,3],h=e.type.value,f=m=>{let y=m===p?"row":"col";return`
      fn ${y}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${h} {
        var output_index = ${t.indicesGet("output_indices",m)};
        var originalIdx: ${h} = getOriginalCoordinateFromResizedCoordinate(output_index, ${a[m]},
        ${r[m]}, ${i[m]}, ${s[m]}, ${s[m]} + ${i.length});
        var fractOriginalIdx: ${h} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${i[m]} - 1))) {
          return ${u};
        }
        var data: array<${h}, 4> = array<${h}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${y}: ${h} = originalIdx + ${h}(i);
          if (${y} < 0 || ${y} >= ${i[m]}) {
            ${(()=>l?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${u};`:`${y} = max(0, min(${y}, ${i[m]} - 1));`)()};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",m,`u32(${y})`)};
          data[i + 1] = ${m===p?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${f(p)};
    ${f(c)};
  fn getCubicInterpolationCoefs(s: ${h}) -> array<${h}, 4> {
    var absS = abs(s);
    var coeffs: array<${h}, 4> = array<${h}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${h} = 1.0 - absS;
    var twoMinusAbsS: ${h} = 2.0 - absS;
    var onePlusAbsS: ${h} = 1.0 + absS;
    coeffs[0] = ((${n} * onePlusAbsS - 5 * ${n}) * onePlusAbsS + 8 * ${n}) * onePlusAbsS - 4 * ${n};
    coeffs[1] = ((${n} + 2) * absS - (${n} + 3)) * absS * absS + 1;
    coeffs[2] = ((${n} + 2) * oneMinusAbsS - (${n} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${n} * twoMinusAbsS - 5 * ${n}) * twoMinusAbsS + 8 * ${n}) * twoMinusAbsS - 4 * ${n};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${h}, 4>, coefs: array<${h}, 4>) -> ${h} {
    var coefsSum: ${h} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${h} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Dl=(e,t,i,r,a)=>{let[s,n,o,u,l]=i.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",n,`max(0, min(depth, ${i[n]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${i[o]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${i[u]} - 1))`)};
      ${pr(e,l,s,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${d} = originalIndices[${n}];
      var height:${d} = originalIndices[${o}];
      var width:${d} = originalIndices[${u}];
      ${r?`if (depth < 0 || depth > (${i[n]} - 1) || height < 0 || height > (${i[o]} - 1) || width < 0 || (width > ${i[u]} - 1)) {
      return ${a};
        }`:""};

    depth = max(0, min(depth, ${i[n]} - 1));
      height = max(0, min(height, ${i[o]} - 1));
      width = max(0, min(width, ${i[u]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${i.length>3?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${i.length>3?`u32(originalIndices[${s}])`:"0"};

      var x111: ${d} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${d} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${d} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${d} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${d} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${d} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${d} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${d} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${d} = abs(depth - ${d}(depth1));
      var dx2: ${d} = abs(${d}(depth2) - depth);
      var dy1: ${d} = abs(height - ${d}(height1));
      var dy2: ${d} = abs(${d}(height2) - height);
      var dz1: ${d} = abs(width - ${d}(width1));
      var dz2: ${d} = abs(${d}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},Ml=(e,t,i,r,a,s)=>{let n=e.dims,o=zl(s,t.axes,n.length),u=Tl(n,r,a,t.axes),l=r.slice();r.length===0&&(l=n.map((g,w)=>g===0?1:u[w]/g),t.keepAspectRatioPolicy!=="stretch"&&(u=El(n,l,t)));let d=O("output",e.dataType,u.length),p=S("input",e.dataType,n.length),c=k.size(u),h=n.length===u.length&&n.every((g,w)=>g===u[w]),f=t.coordinateTransformMode==="tf_crop_and_resize",m=t.extrapolationValue,y=p.type.value,_=g=>`
      ${h?"":`
      ${Sl(t.coordinateTransformMode,y)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Al(p,n)};
              ${Il(t.nearestMode,i,y)};
              ${Bl(p,d,n,u,l.length,o.length,f)};
              `;case"linear":return`
              ${Cl(d,n,u,l.length,o.length)};
              ${(()=>{if(n.length===2||n.length===4)return`${Ol(p,d,n,f,m)}`;if(n.length===3||n.length===5)return`${Dl(p,d,n,f,m)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(n.length===2||n.length===4)return`${Rl(p,d,n,u,l,o,t.cubicCoeffA,f,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${g.registerUniform("output_size","u32").registerUniform("scales","f32",l.length).registerUniform("roi","f32",o.length).declareVariables(p,d)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${h?"output[global_idx] = input[global_idx];":`
        let output_indices = ${d.offsetToIndices("global_idx")};
        var input_indices: ${p.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${p.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${n.length===2||n.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${i}|${l.length>0?t.mode==="cubic"?l:l.length:""}|${a.length>0?a:""}|${o.length>0?o:""}|${h}|${t.mode==="nearest"?n.length:n}`,inputDependencies:["rank"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},{type:1,data:l},{type:1,data:o},...M(n,u)]})}},Pl=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},Ul=(e,t)=>{let i=[],r=[],a=[],s=Pl(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");kl(e.inputs,t,s,i,r,a),e.compute(Ml(e.inputs[0],t,s,i,r,a),{inputs:[0]})},ql=e=>{let t=e.antialias,i=e.axes,r=e.coordinateTransformMode,a=e.cubicCoeffA,s=e.excludeOutside!==0,n=e.extrapolationValue,o=e.keepAspectRatioPolicy,u=e.mode,l=e.nearestMode===""?"simple":e.nearestMode;return X({antialias:t,axes:i,coordinateTransformMode:r,cubicCoeffA:a,excludeOutside:s,extrapolationValue:n,keepAspectRatioPolicy:o,mode:u,nearestMode:l})}}),Nl,Vl,Ll,jp=T(()=>{P(),V(),te(),G(),Nl=(e,t)=>{let[i,r,a,s]=e,{numHeads:n,rotaryEmbeddingDim:o}=t;if(i.dims.length!==3&&i.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${i.dims.length}`);if(!k.areEqual(r.dims,[])&&!k.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(!k.areEqual(a.dims,s.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&n===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=i.dims[0],l=i.dims[i.dims.length-2],d=a.dims[0],p=k.sizeFromDimension(i.dims,1)/l,c=o===0?a.dims[1]*2:p/n;if(o>c)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(u!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(l!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(c/2!==a.dims[1]&&o/2!==a.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${a.dims[1]}`);if(l>d)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},Vl=(e,t)=>{let{interleaved:i,numHeads:r,rotaryEmbeddingDim:a,scale:s}=t,n=e[0].dims[0],o=k.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],l=o/u,d=e[2].dims[1],p=a===0?d*2:l/r,c=new Array(n,u,l/p,p-d),h=k.computeStrides(c),f=[{type:1,data:s},{type:12,data:c},{type:12,data:h},...e[0].dims.length===3?new Array({type:12,data:[o,l,p,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,p,u*p,1]}):[],...M(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],m=y=>{let _=S("input",e[0].dataType,e[0].dims.length),g=S("position_ids",e[1].dataType,e[1].dims.length),w=S("cos_cache",e[2].dataType,e[2].dims.length),$=S("sin_cache",e[3].dataType,e[3].dims.length),b=O("output",e[0].dataType,e[0].dims.length);return y.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:c.length},{name:"global_strides",type:"u32",length:h.length},{name:"input_output_strides",type:"u32",length:h.length}]),`
        ${y.declareVariables(_,g,w,$,b)}

        ${y.mainStart(Je)}
          let half_rotary_emb_dim = uniforms.${w.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${g.broadcastedIndicesToOffset("bsnh.xy",O("",g.type.tensor,2))};
            let position_id =
                u32(${g.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${i});
            let j = i + select(half_rotary_emb_dim, 1, ${i});
            let re = ${_.getByOffset("i")} * ${w.get("position_id","bsnh[3]")} -
                ${_.getByOffset("j")} * ${$.get("position_id","bsnh[3]")};
            ${b.setByOffset("i","re")}
            let im = ${_.getByOffset("i")} * ${$.get("position_id","bsnh[3]")} +
                ${_.getByOffset("j")} * ${w.get("position_id","bsnh[3]")};
            ${b.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${b.setByOffset("k",_.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:X({interleaved:i}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:m,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(k.size(c)/Je)},programUniforms:f})}},Ll=(e,t)=>{Nl(e.inputs,t),e.compute(Vl(e.inputs,t))}}),Gl,Wl,Hl,Qp=T(()=>{P(),V(),G(),Gl=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],i=e[1],r=e[2];if(t.dataType!==i.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(i.dims.length!==3&&i.dims.length!==2)throw new Error("Skip must be 2D or 3D");let a=t.dims[t.dims.length-1],s=t.dims[t.dims.length-2];if(i.dims[i.dims.length-1]!==a)throw new Error("Skip must have the same hidden size as input");if(i.dims[i.dims.length-2]!==s)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==a)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let n=e[3];if(n.dims.length!==1)throw new Error("Beta must be 1D");if(n.dims[n.dims.length-1]!==a)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let n=e[4];if(n.dims.length!==1)throw new Error("Bias must be 1D");if(n.dims[n.dims.length-1]!==a)throw new Error("Bias must have the same hidden size as input")}},Wl=(e,t,i,r)=>{let a=t.simplified,s=e[0].dims,n=k.size(s),o=s,u=n,l=s.slice(-1)[0],d=r?s.slice(0,-1).concat(1):[],p=!a&&e.length>3,c=e.length>4,h=r&&i>1,f=r&&i>2,m=i>3,y=64,_=ee(l),g=[{type:12,data:u},{type:12,data:_},{type:12,data:l},{type:1,data:t.epsilon}],w=b=>{let v=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],x=[S("x",e[0].dataType,e[0].dims,_),S("skip",e[1].dataType,e[1].dims,_),S("gamma",e[2].dataType,e[2].dims,_)];p&&x.push(S("beta",e[3].dataType,e[3].dims,_)),c&&x.push(S("bias",e[4].dataType,e[4].dims,_)),x.push(O("output",e[0].dataType,o,_)),h&&x.push(O("mean_output",1,d)),f&&x.push(O("inv_std_output",1,d)),m&&x.push(O("input_skip_bias_sum",e[0].dataType,o,_));let I=ae(e[0].dataType),E=ae(1,_);return`

      ${b.registerUniforms(v).declareVariables(...x)}
      var<workgroup> sum_shared : array<${E}, ${y}>;
      var<workgroup> sum_squared_shared : array<${E}, ${y}>;

      ${b.mainStart([y,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${y};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${y};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${y-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${c?"bias[offset1d + i]":I+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${m?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${et(I,_,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${y};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${Ae("sum",_)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Ae("square_sum",_)} / f32(uniforms.hidden_size) ${a?"":"- mean * mean"} + uniforms.epsilon);
        ${h?"mean_output[global_idx] = mean;":""}
        ${f?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${a?"":`- ${I}(mean)`}) *
            ${I}(inv_std_dev) * gamma[offset1d + i]
            ${p?"+ beta[offset1d + i]":""};
        }
      }`},$=[{dims:o,dataType:e[0].dataType}];return i>1&&$.push({dims:d,dataType:1}),i>2&&$.push({dims:d,dataType:1}),i>3&&$.push({dims:s,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${_};${h};${f};${m}`,inputDependencies:e.map((b,v)=>"type")},getShaderSource:w,getRunData:()=>({outputs:$,dispatchGroup:{x:Math.ceil(u/l)},programUniforms:g})}},Hl=(e,t)=>{Gl(e.inputs);let i=[0];e.outputCount>1&&i.push(-3),e.outputCount>2&&i.push(-3),e.outputCount>3&&i.push(3),e.compute(Wl(e.inputs,t,e.outputCount,!1),{outputs:i})}}),Fl,$t,Kl,cr,jl,Ql,Zl,Xl,Zp=T(()=>{P(),V(),te(),G(),Fl=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((i,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},$t=(e,t)=>{let i=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>i.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>i.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return i},Kl=(e,t)=>{if(e.length>1){let i=$t(e,1),r=$t(e,2),a=$t(e,3);return a.length===0&&(a=[...Array(e[0].dims.length).keys()]),X({starts:i,ends:r,axes:a})}else return t},cr=(e,t,i,r,a)=>{let s=e;return e<0&&(s+=i[r[t]]),a[t]<0?Math.max(0,Math.min(s,i[r[t]]-1)):Math.max(0,Math.min(s,i[r[t]]))},jl=(e,t,i)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${i.length}; i >= 0; i--) {
            let input_shape_i = ${R("uniforms.input_shape","i",i.length)};
            let steps_i = ${R("uniforms.steps","i",i.length)};
            let signs_i = ${R("uniforms.signs","i",i.length)};
            let starts_i = ${R("uniforms.starts","i",i.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,Ql=(e,t)=>{let i=e[0].dims,r=k.size(i),a=t.axes.length>0?k.normalizeAxes(t.axes,i.length):[...Array(i.length).keys()],s=$t(e,4);s.forEach(_=>_!==0||(()=>{throw new Error("step cannot be 0")})),s.length===0&&(s=Array(a.length).fill(1));let n=t.starts.map((_,g)=>cr(_,g,i,a,s)),o=t.ends.map((_,g)=>cr(_,g,i,a,s));if(a.length!==n.length||a.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(a.length!==i.length)for(let _=0;_<i.length;++_)a.includes(_)||(n.splice(_,0,0),o.splice(_,0,i[_]),s.splice(_,0,1));let u=s.map(_=>Math.sign(_));s.forEach((_,g,w)=>{if(_<0){let $=(o[g]-n[g])/_,b=n[g],v=b+$*s[g];n[g]=v,o[g]=b,w[g]=-_}});let l=i.slice(0);a.forEach((_,g)=>{l[_]=Math.ceil((o[_]-n[_])/s[_])});let d={dims:l,dataType:e[0].dataType},p=O("output",e[0].dataType,l.length),c=S("input",e[0].dataType,e[0].dims.length),h=k.size(l),f=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:n.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:s.length}],m=[{type:12,data:h},{type:12,data:n},{type:6,data:u},{type:12,data:s},...M(e[0].dims,l)],y=_=>`
      ${_.registerUniforms(f).declareVariables(c,p)}
        ${jl(c,p,i)}
        ${_.mainStart()}
          ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${p.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${p.setByOffset("global_idx",c.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${n.length}_${s.length}`,inputDependencies:["rank"]},getShaderSource:y,getRunData:()=>({outputs:[d],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:m})}},Zl=(e,t)=>{Fl(e.inputs,t);let i=Kl(e.inputs,t);e.compute(Ql(e.inputs,i),{inputs:[0]})},Xl=e=>{let t=e.starts,i=e.ends,r=e.axes;return X({starts:t,ends:i,axes:r})}}),Yl,Jl,ed,td,Xp=T(()=>{P(),V(),te(),Oe(),G(),Yl=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Jl=(e,t)=>{let i=e.inputs[0],r=i.dims,a=k.size(r),s=r.length,n=k.normalizeAxis(t.axis,s),o=n<r.length-1,u,l=[];o?(l=Array.from({length:s},(x,I)=>I),l[n]=s-1,l[s-1]=n,u=e.compute(fe(i,l),{inputs:[i],outputs:[-1]})[0]):u=i;let d=u.dims,p=d[s-1],c=a/p,h=ee(p),f=p/h,m=64;c===1&&(m=256);let y=(x,I)=>I===4?`max(max(${x}.x, ${x}.y), max(${x}.z, ${x}.w))`:I===2?`max(${x}.x, ${x}.y)`:I===3?`max(max(${x}.x, ${x}.y), ${x}.z)`:x,_=S("x",u.dataType,u.dims,h),g=O("result",u.dataType,u.dims,h),w=_.type.value,$=ae(u.dataType)==="f32"?`var threadMax = ${w}(-3.402823e+38f);`:`var threadMax = ${w}(-65504.0h);`,b=x=>`
      var<workgroup> rowMaxShared : ${w};
      var<workgroup> rowSumShared : ${w};
      var<workgroup> threadShared : array<${w}, ${m}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${w} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${w}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${x.registerUniform("packedCols","i32").declareVariables(_,g)}
      ${x.mainStart(m)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${m};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${$}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${w}(${y("threadShared[0]",h)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${w}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${w}(${Ae("threadShared[0]",h)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,v=e.compute({name:"Softmax",shaderCache:{hint:`${h};${m}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:d,dataType:u.dataType}],dispatchGroup:{x:c},programUniforms:[{type:6,data:f}]}),getShaderSource:b},{inputs:[u],outputs:[o?-1:0]})[0];o&&e.compute(fe(v,l),{inputs:[v]})},ed=(e,t)=>{Yl(e.inputs),Jl(e,t)},td=e=>X({axis:e.axis})}),hr,id,rd,ad,nd,Yp=T(()=>{P(),V(),G(),hr=e=>Array.from(e.getBigInt64Array(),Number),id=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(hr(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},rd=(e,t)=>{let i=[];for(let r=0;r<e.length;++r)i.push(e[r]*t[r]);return i},ad=(e,t)=>{let i=e[0].dims,r=t??hr(e[1]),a=rd(i,r),s=k.size(a),n=e[0].dataType,o=S("input",n,i.length),u=O("output",n,a.length),l=d=>`
      const inputShape = ${o.indices(...i)};
      ${d.registerUniform("output_size","u32").declareVariables(o,u)}
      ${d.mainStart()}
      ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${u.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${i.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${u.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${u.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},...M(e[0].dims,a)]}),getShaderSource:l}},nd=e=>{id(e.inputs),e.compute(ad(e.inputs),{inputs:[0]})}}),sd,od,ud,Jp=T(()=>{P(),V(),G(),sd=(e,t,i,r,a)=>{let s=O("output_data",a,i.length,4),n=S("a_data",t[1].dataType,t[1].dims.length,4),o=S("b_data",t[2].dataType,t[2].dims.length,4),u=S("c_data",t[0].dataType,t[0].dims.length,4),l,d=(p,c,h)=>`select(${c}, ${p}, ${h})`;if(!r)l=s.setByOffset("global_idx",d(n.getByOffset("global_idx"),o.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let p=(c,h,f="")=>{let m=`a_data[index_a${h}][component_a${h}]`,y=`b_data[index_b${h}][component_b${h}]`,_=`bool(c_data[index_c${h}] & (0xffu << (component_c${h} * 8)))`;return`
            let output_indices${h} = ${s.offsetToIndices(`global_idx * 4u + ${h}u`)};
            let offset_a${h} = ${n.broadcastedIndicesToOffset(`output_indices${h}`,s)};
            let offset_b${h} = ${o.broadcastedIndicesToOffset(`output_indices${h}`,s)};
            let offset_c${h} = ${u.broadcastedIndicesToOffset(`output_indices${h}`,s)};
            let index_a${h} = offset_a${h} / 4u;
            let index_b${h} = offset_b${h} / 4u;
            let index_c${h} = offset_c${h} / 4u;
            let component_a${h} = offset_a${h} % 4u;
            let component_b${h} = offset_b${h} % 4u;
            let component_c${h} = offset_c${h} % 4u;
            ${c}[${h}] = ${f}(${d(m,y,_)});
          `};a===9?l=`
            var data = vec4<u32>(0);
            ${p("data",0,"u32")}
            ${p("data",1,"u32")}
            ${p("data",2,"u32")}
            ${p("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:l=`
            ${p("output_data[global_idx]",0)}
            ${p("output_data[global_idx]",1)}
            ${p("output_data[global_idx]",2)}
            ${p("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(u,n,o,s)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${l}
      }`},od=e=>{let t=e[1].dims,i=e[2].dims,r=e[0].dims,a=e[1].dataType,s=!(k.areEqual(t,i)&&k.areEqual(i,r)),n=t,o=k.size(t);if(s){let l=Ye.calcShape(Ye.calcShape(t,i,!1),r,!1);if(!l)throw new Error("Can't perform where op on the given tensors");n=l,o=k.size(n)}let u=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:l=>sd(l,e,n,s,a),getRunData:()=>({outputs:[{dims:n,dataType:a}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:u},...M(r,t,i,n)]})}},ud=e=>{e.compute(od(e.inputs))}}),ld,ec=T(()=>{hp(),Ei(),fp(),mp(),gp(),_p(),yp(),xp(),Sp(),Ip(),zp(),Tp(),Ep(),Cp(),Bp(),Ap(),Op(),Rp(),Dp(),Mp(),Pp(),Up(),qp(),Np(),Vp(),vu(),Lp(),Gp(),Wp(),Hp(),Fp(),Ii(),Kp(),jp(),Qp(),Zp(),Xp(),Eu(),Yp(),Oe(),Oi(),Jp(),ld=new Map([["Abs",[Gn]],["Acos",[Wn]],["Acosh",[Hn]],["Add",[As]],["ArgMax",[Tn,Ti]],["ArgMin",[zn,Ti]],["Asin",[Fn]],["Asinh",[Kn]],["Atan",[jn]],["Atanh",[Qn]],["Attention",[Rn]],["AveragePool",[al,rl]],["BatchNormalization",[Un]],["BiasAdd",[Vn]],["BiasSplitGelu",[Es]],["Cast",[Xn,Zn]],["Ceil",[es]],["Clip",[Jn]],["Concat",[Fs,Ks]],["Conv",[Fi,Wi]],["ConvTranspose",[bo,yo]],["Cos",[ts]],["Cosh",[is]],["CumSum",[xo,ko]],["DepthToSpace",[To,Eo]],["DequantizeLinear",[hl,fl]],["Div",[Os]],["Einsum",[Do,Mo]],["Elu",[rs,ht]],["Equal",[Rs]],["Erf",[as]],["Exp",[ns]],["Expand",[No]],["FastGelu",[Lo]],["Floor",[ss]],["FusedConv",[Fi,Wi]],["Gather",[Fo,Ho]],["GatherElements",[ru,iu]],["GatherBlockQuantized",[Yo,Jo]],["GatherND",[jo,Qo]],["Gelu",[os]],["Gemm",[ou,su]],["GlobalAveragePool",[sl,nl]],["GlobalMaxPool",[dl,ll]],["Greater",[Us]],["GreaterOrEqual",[Ns]],["GridSample",[gu,_u]],["GroupQueryAttention",[Au]],["HardSigmoid",[ms,fs]],["InstanceNormalization",[Du]],["LayerNormalization",[Uu]],["LeakyRelu",[us,ht]],["Less",[qs]],["LessOrEqual",[Vs]],["Log",[xs]],["MatMul",[Nu]],["MatMulNBits",[Wu,Hu]],["MaxPool",[ol,ul]],["Mul",[Ds]],["MultiHeadAttention",[bu,$u]],["Neg",[ds]],["Not",[ls]],["Pad",[el]],["Pow",[Ms]],["QuickGelu",[Is,ht]],["Range",[_l]],["Reciprocal",[ps]],["ReduceMin",[vn]],["ReduceMean",[_n]],["ReduceMax",[bn]],["ReduceSum",[kn]],["ReduceProd",[xn]],["ReduceL1",[yn]],["ReduceL2",[$n]],["ReduceLogSum",[In]],["ReduceLogSumExp",[wn]],["ReduceSumSquare",[Sn]],["Relu",[cs]],["Resize",[Ul,ql]],["RotaryEmbedding",[Ll]],["ScatterND",[bl,wl]],["Sigmoid",[hs]],["Sin",[gs]],["Sinh",[_s]],["Slice",[Zl,Xl]],["SkipLayerNormalization",[Hl]],["Split",[zu,Tu]],["Sqrt",[ys]],["Softmax",[ed,td]],["Sub",[Ps]],["Tan",[$s]],["Tanh",[ws]],["ThresholdedRelu",[vs,ht]],["Tile",[nd]],["Transpose",[Pa,Ua]],["Where",[ud]]])}),dd,tc=T(()=>{$e(),Te(),G(),dd=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,i,r,a){ye(e.programInfo.name);let s=this.backend.device,n=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let l of t)o.push({binding:o.length,resource:{buffer:l.buffer}});for(let l of i)o.push({binding:o.length,resource:{buffer:l.buffer}});a&&o.push({binding:o.length,resource:a});let u=s.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let l={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(l)}n.setPipeline(e.computePipeline),n.setBindGroup(0,u),n.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),ge(e.programInfo.name)}dispose(){}build(e,t){ye(e.name);let i=this.backend.device,r=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"},{feature:"subgroups-f16",extension:"subgroups_f16"}].forEach(l=>{i.features.has(l.feature)&&r.push(`enable ${l.extension};`)});let a=Ba(t,this.backend.device.limits),s=e.getShaderSource(a),n=`${r.join(`
`)}
${a.additionalImplementations}
${s}`,o=i.createShaderModule({code:n,label:e.name});Z("verbose",()=>`[WebGPU] ${e.name} shader code: ${n}`);let u=i.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return ge(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:a.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,i=typeof e=="number"?1:e.y||1,r=typeof e=="number"?1:e.z||1,a=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=a&&i<=a&&r<=a)return[t,i,r];let s=t*i*r,n=Math.ceil(Math.sqrt(s));if(n>a){if(n=Math.ceil(Math.cbrt(s)),n>a)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[n,n,n]}else return[n,n,1]}}}),pd,cd,hd,fd,md,ic=T(()=>{$e(),P(),Te(),$a(),pp(),ec(),tc(),pd=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let i=[];for(let r=0;r<e.length;++r){let a=e[r].dataType;switch(t[r]){case"none":{i.push("");break}case"type":{i.push(`${a}`);break}case"rank":{let s=e[r].dims.length;i.push(`${a};${s}`);break}case"dims":{let s=e[r].dims.join(",");i.push(`${a};${s}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return i.join("|")},cd=(e,t,i)=>{var a,s;let r=e.name;return(a=e.shaderCache)!=null&&a.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+i+`:${pd(t,((s=e.shaderCache)==null?void 0:s.inputDependencies)??new Array(t.length).fill("dims"))}`,r},hd=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},fd=class{constructor(e){this.subgroupsSupported=e.features.has("subgroups"),this.subgroupsF16Supported=e.features.has("subgroups");let t=e.limits;!this.subgroupsSupported||!t.minSubgroupSize||!t.maxSubgroupSize?this.subgroupSizeRange=void 0:this.subgroupSizeRange=[t.minSubgroupSize,t.maxSubgroupSize]}},md=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let i=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:i},a=s=>t.features.has(s)&&i.push(s)&&!0;a("chromium-experimental-timestamp-query-inside-passes")||a("timestamp-query"),a("shader-f16"),a("subgroups")&&a("subgroups-f16"),this.device=await t.requestDevice(r),this.deviceInfo=new fd(this.device),this.adapterInfo=new hd(t.info||await t.requestAdapterInfo()),this.gpuDataManager=xa(this),this.programManager=new dd(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,gi(e.logLevel,!!e.debug),this.device.onuncapturederror=s=>{s.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${s.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;ye(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var r;let t=new BigUint64Array(e.getMappedRange()),i=this.pendingQueries.get(e);for(let a=0;a<t.length/2;a++){let s=i[a],n=s.kernelId,o=this.kernels.get(n),u=o.kernelType,l=o.kernelName,d=s.programName,p=s.inputTensorViews,c=s.outputTensorViews,h=t[a*2],f=t[a*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=h);let m=Number(h-this.queryTimeBase),y=Number(f-this.queryTimeBase);if(!Number.isSafeInteger(m)||!Number.isSafeInteger(y))throw new RangeError("incorrect timestamp range");if((r=this.env.webgpu.profiling)!=null&&r.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:p.map(_=>({dims:_.dims,dataType:Ve(_.dataType)})),outputsMetadata:c.map(_=>({dims:_.dims,dataType:Ve(_.dataType)})),kernelId:n,kernelType:u,kernelName:l,programName:d,startTime:m,endTime:y});else{let _="";p.forEach((w,$)=>{_+=`input[${$}]: [${w.dims}] | ${Ve(w.dataType)}, `});let g="";c.forEach((w,$)=>{g+=`output[${$}]: [${w.dims}] | ${Ve(w.dataType)}, `}),console.log(`[profiling] kernel "${n}|${u}|${l}|${d}" ${_}${g}execution time: ${y-m} ns`)}ut("GPU",`${d}::${h}::${f}`)}e.unmap(),this.pendingQueries.delete(e)}),ge()}run(e,t,i,r,a,s){ye(e.name);let n=[];for(let g=0;g<t.length;++g){let w=t[g].data;if(w===0)continue;let $=this.gpuDataManager.get(w);if(!$)throw new Error(`no GPU data for input: ${w}`);n.push($)}let{outputs:o,dispatchGroup:u,programUniforms:l}=e.getRunData(t),d=i.length===0?o.map((g,w)=>w):i;if(d.length!==o.length)throw new Error(`Output size ${d.length} must be equal to ${o.length}.`);let p=[],c=[];for(let g=0;g<o.length;++g){if(!Number.isInteger(d[g])||d[g]<-3||d[g]>=s)throw new Error(`Invalid output index: ${d[g]}`);if(d[g]===-3)continue;let w=d[g]===-1,$=d[g]===-2,b=w||$?a(o[g].dataType,o[g].dims):r(d[g],o[g].dataType,o[g].dims);if(p.push(b),b.data===0)continue;let v=this.gpuDataManager.get(b.data);if(!v)throw new Error(`no GPU data for output: ${b.data}`);if(w&&this.temporaryData.push(v),$){let x=this.kernelPersistentData.get(this.currentKernelId);x||(x=[],this.kernelPersistentData.set(this.currentKernelId,x)),x.push(v)}c.push(v)}if(n.length!==t.length||c.length!==p.length){if(c.length===0)return ge(e.name),p;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let h;if(l){let g=0,w=[];l.forEach(x=>{let I=typeof x.data=="number"?[x.data]:x.data;if(I.length===0)return;let E=x.type===10?2:4,C,q;x.type===10?(q=I.length>4?16:I.length>2?8:I.length*E,C=I.length>4?16:E*I.length):(q=I.length<=2?I.length*E:16,C=16),g=Math.ceil(g/q)*q,w.push(g);let W=x.type===10?8:4;g+=I.length>4?Math.ceil(I.length/W)*C:I.length*E});let $=16;g=Math.ceil(g/$)*$;let b=new ArrayBuffer(g);l.forEach((x,I)=>{let E=w[I],C=typeof x.data=="number"?[x.data]:x.data;if(x.type===6)new Int32Array(b,E,C.length).set(C);else if(x.type===12)new Uint32Array(b,E,C.length).set(C);else if(x.type===10)new Uint16Array(b,E,C.length).set(C);else if(x.type===1)new Float32Array(b,E,C.length).set(C);else throw new Error(`Unsupported uniform type: ${Ve(x.type)}`)});let v=this.gpuDataManager.create(g,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(v.buffer,0,b,0,g),this.gpuDataManager.release(v.id),h={offset:0,size:g,buffer:v.buffer}}let f=this.programManager.normalizeDispatchGroupSize(u),m=f[1]===1&&f[2]===1,y=cd(e,t,m),_=this.programManager.getArtifact(y);if(_||(_=this.programManager.build(e,f),this.programManager.setArtifact(y,_),Z("info",()=>`[artifact] key: ${y}, programName: ${e.name}`)),l&&_.uniformVariablesInfo){if(l.length!==_.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${_.uniformVariablesInfo.length}, got ${l.length} in program "${_.programInfo.name}".`);for(let g=0;g<l.length;g++){let w=l[g],$=w.type,b=typeof w.data=="number"?1:w.data.length,[v,x]=_.uniformVariablesInfo[g];if($!==v||b!==x)throw new Error(`Uniform variable ${g} mismatch: expect type ${v} with size ${x}, got type ${$} with size ${b} in program "${_.programInfo.name}".`)}}if(Z("info",()=>`[ProgramManager] run "${e.name}" (key=${y}) with ${f[0]}x${f[1]}x${f[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let g={kernelId:this.currentKernelId,programName:_.programInfo.name,inputTensorViews:t,outputTensorViews:p};this.pendingKernels.push(g),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(g)}return this.programManager.run(_,n,c,f,h),ge(e.name),p}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,i,r){let a=ld.get(e);if(!a)throw new Error(`kernel not implemented: ${e}`);let s={kernelType:e,kernelName:r,kernelEntry:a[0],attributes:[a[1],i]};this.kernels.set(t,s)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let i of t)this.gpuDataManager.release(i.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,i){let r=this.kernels.get(e);if(!r)throw new Error(`kernel not created: ${e}`);let a=r.kernelType,s=r.kernelName,n=r.kernelEntry,o=r.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${a}] ${s}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),Z("info",()=>`[WebGPU] Start to run kernel "[${a}] ${s}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),n(t,o[1]),0}catch(l){return i.push(Promise.resolve(`[WebGPU] Kernel "[${a}] ${s}" failed. ${l}`)),1}finally{u&&i.push(this.device.popErrorScope().then(l=>l?`GPU validation error for kernel "[${a}] ${s}": ${l.message}`:null));for(let l of this.temporaryData)this.gpuDataManager.release(l.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,i,r){let a=this.sessionExternalDataMapping.get(e);a||(a=new Map,this.sessionExternalDataMapping.set(e,a));let s=a.get(t),n=this.gpuDataManager.registerExternalBuffer(i,r,s);return a.set(t,[n,i]),n}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(i=>this.gpuDataManager.unregisterExternalBuffer(i[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,i){return async()=>{let r=await bi(this,e,t);return _i(r.buffer,i)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Z("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Z("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Z("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),i=e.length;this.pendingKernels=[];for(let r=0;r<i;r++){let a=this.getComputePassEncoder(),s=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),a.setPipeline(s.computePipeline),a.setBindGroup(0,s.bindGroup),a.dispatchWorkgroups(...s.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),gd,fr,_d,mr,gr,_r,yd,$d,rc=T(()=>{Te(),gd=1,fr=()=>gd++,_d=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),mr=(e,t)=>{let i=_d.get(e);if(!i)throw new Error("Unsupported data type.");return t.length>0?Math.ceil(t.reduce((r,a)=>r*a)*i/8):0},gr=class{constructor(e){this.sessionId=e.sessionId,this.mlContext=e.context,this.mlTensor=e.tensor,this.dataType=e.dataType,this.tensorShape=e.shape}get tensor(){return this.mlTensor}get type(){return this.dataType}get shape(){return this.tensorShape}get byteLength(){return mr(this.dataType,this.tensorShape)}destroy(){Z("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,i){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===i.length&&this.tensorShape.every((r,a)=>r===i[a])}},_r=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,i,r){if(this.wrapper){if(this.wrapper.canReuseTensor(e,t,i))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==mr(t,i))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let a=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(t,i,a,!0,!0),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){if(this.wrapper)if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(e);return}else Z("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor();this.activeUpload?this.activeUpload.set(e):this.activeUpload=new Uint8Array(e)}async download(e){if(this.activeUpload)if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(this.activeUpload):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(this.activeUpload);return}else return this.activeUpload.buffer;if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},yd=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}reserveTensorId(){let e=fr();return this.tensorTrackersById.set(e,new _r(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,i,r){Z("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${e}, dataType: ${t}, shape: ${i}, copyOld: ${r}}`);let a=this.tensorTrackersById.get(e);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(this.backend.currentContext,t,i,r)}upload(e,t){let i=this.tensorTrackersById.get(e);if(!i)throw new Error("Tensor not found.");i.upload(t)}async download(e,t){Z("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let i=this.tensorTrackersById.get(e);if(!i)throw new Error("Tensor not found.");return i.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,i,r){let a=fr(),s=new gr({sessionId:this.backend.currentSessionId,context:e,tensor:t,dataType:i,shape:r});return this.tensorTrackersById.set(a,new _r(this,s)),this.externalTensors.add(s),a}async getCachedTensor(e,t,i,r,a){let s=this.backend.currentSessionId,n=this.backend.currentContext;for(let[u,l]of this.freeTensors.entries())if(l.canReuseTensor(n,e,t)){Z("verbose",()=>`[WebNN] Reusing tensor {dataType: ${e}, shape: ${t}}`);let d=this.freeTensors.splice(u,1)[0];return d.sessionId=s,d}Z("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${e}, shape: ${t}}`);let o=await n.createTensor({dataType:e,shape:t,dimensions:t,usage:i,writable:r,readable:a});return new gr({sessionId:s,context:n,tensor:o,dataType:e,shape:t})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},$d=(...e)=>new yd(...e)}),yr,wd,bd,ac=T(()=>{P(),Ne(),$a(),rc(),Te(),yr=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),wd=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let i=Object.keys(e).sort(),r=Object.keys(t).sort();return i.length===r.length&&i.every((a,s)=>a===r[s]&&e[a]===t[a])},bd=class{constructor(e){this.tensorManager=$d(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],gi(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){this.activeSessionId=e}async createMLContext(e){if(e instanceof GPUDevice){let i=this.mlContextCache.findIndex(r=>r.gpuDevice===e);if(i!==-1)return this.mlContextCache[i].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:r}),r}}else if(e===void 0){let i=this.mlContextCache.findIndex(r=>r.options===void 0&&r.gpuDevice===void 0);if(i!==-1)return this.mlContextCache[i].mlContext;{let r=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:r}),r}}let t=this.mlContextCache.findIndex(i=>wd(i.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:i}),i}}get currentContext(){let e=this.getMLContext(this.currentSessionId);if(!e)throw new Error(`No MLContext found for session ${this.currentSessionId}`);return e}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let i=this.sessionIdsByMLContext.get(t);i||(i=new Set,this.sessionIdsByMLContext.set(t,i)),i.add(e)}onReleaseSession(e){let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let i=this.sessionIdsByMLContext.get(t);if(i.delete(e),i.size===0){this.sessionIdsByMLContext.delete(t);let r=this.mlContextCache.findIndex(a=>a.mlContext===t);r!==-1&&this.mlContextCache.splice(r,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Z("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,i,r){let a=yr.get(t);if(!a)throw new Error(`Unsupported ONNX data type: ${t}`);return this.tensorManager.ensureTensor(e,a,i,r)}uploadTensor(e,t){if(!re().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Z("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let i=await this.tensorManager.download(e);return _i(i,t)}}registerMLTensor(e,t,i){let r=yr.get(t);if(!r)throw new Error(`Unsupported ONNX data type: ${t}`);let a=this.tensorManager.registerTensor(this.currentContext,e,r,i);return Z("verbose",()=>`[WebNN] registerMLTensor {tensor: ${e}, dataType: ${r}, dimensions: ${i}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,i,r,a,s){if(!s)throw new Error("External mounted files are not available.");let n=e;e.startsWith("./")&&(n=e.substring(2));let o=s.get(n);if(!o)throw new Error(`File with name ${n} not found in preloaded files.`);if(t+i>o.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let u=o.slice(t,t+i).buffer,l;switch(a.dataType){case"float32":l=new Float32Array(u);break;case"float16":l=new Uint16Array(u);break;case"int32":l=new Int32Array(u);break;case"uint32":l=new Uint32Array(u);break;case"int64":l=new BigInt64Array(u);break;case"uint64":l=new BigUint64Array(u);break;case"int8":l=new Int8Array(u);break;case"int4":case"uint4":case"uint8":l=new Uint8Array(u);break;default:throw new Error(`Unsupported data type: ${a.dataType} in creating WebNN Constant from external data.`)}return Z("verbose",()=>`[WebNN] registerMLConstant {dataType: ${a.dataType}, shape: ${a.shape}}}`),r.constant(a,l)}flush(){}}}),vd={};nt(vd,{init:()=>kd});var Vt,xd,kd,nc=T(()=>{P(),ic(),Te(),V(),ac(),Vt=class Wd{constructor(t,i,r,a){this.module=t,this.dataType=i,this.data=r,this.dims=a}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=k.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=k.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=k.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=k.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(k.size(t)!==k.size(this.dims))throw new Error("Invalid new shape");return new Wd(this.module,this.dataType,this.data,t)}},xd=class{constructor(e,t,i){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo,this.deviceInfo=t.deviceInfo;let r=e.PTR_SIZE,a=i/e.PTR_SIZE,s=r===4?"i32":"i64";this.opKernelContext=Number(e.getValue(r*a++,s));let n=Number(e.getValue(r*a++,s));this.outputCount=Number(e.getValue(r*a++,s)),this.customDataOffset=Number(e.getValue(r*a++,"*")),this.customDataSize=Number(e.getValue(r*a++,s));let o=[];for(let u=0;u<n;u++){let l=Number(e.getValue(r*a++,s)),d=Number(e.getValue(r*a++,"*")),p=Number(e.getValue(r*a++,s)),c=[];for(let h=0;h<p;h++)c.push(Number(e.getValue(r*a++,s)));o.push(new Vt(e,l,d,c))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var n;let i=((n=t==null?void 0:t.inputs)==null?void 0:n.map(o=>typeof o=="number"?this.inputs[o]:o))??this.inputs,r=(t==null?void 0:t.outputs)??[],a=(o,u,l)=>new Vt(this.module,u,this.output(o,l),l),s=(o,u)=>{let l=Xe(o,u);if(!l)throw new Error(`Unsupported data type: ${o}`);let d=l>0?this.backend.gpuDataManager.create(l).id:0;return new Vt(this.module,o,d,u)};return this.backend.run(e,i,r,a,s,this.outputCount)}output(e,t){let i=this.module.stackSave();try{let r=this.module.PTR_SIZE,a=r===4?"i32":"i64",s=this.module.stackAlloc((1+t.length)*r);this.module.setValue(s,t.length,a);for(let n=0;n<t.length;n++)this.module.setValue(s+r*(n+1),t[n],a);return this.module._JsepOutput(this.opKernelContext,e,s)}catch(r){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${r}`)}finally{this.module.stackRestore(i)}}},kd=async(e,t,i,r)=>{let a=t.jsepInit;if(!a)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let s=new md;await s.initialize(i,r),a("webgpu",[s,n=>s.alloc(Number(n)),n=>s.free(n),(n,o,u,l=!1)=>{if(l)Z("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(n)}, dst=${Number(o)}, size=${Number(u)}`),s.memcpy(Number(n),Number(o));else{Z("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(n)}, gpuDataId=${Number(o)}, size=${Number(u)}`);let d=t.HEAPU8.subarray(Number(n>>>0),Number(n>>>0)+Number(u));s.upload(Number(o),d)}},async(n,o,u)=>{Z("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${n}, dataOffset=${o}, size=${u}`),await s.download(Number(n),()=>t.HEAPU8.subarray(Number(o)>>>0,Number(o+u)>>>0))},(n,o,u)=>s.createKernel(n,Number(o),u,t.UTF8ToString(t._JsepGetNodeName(Number(o)))),n=>s.releaseKernel(n),(n,o,u,l)=>{Z("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${u}, kernel=${n}, contextDataOffset=${o}`);let d=new xd(t,s,Number(o));return s.computeKernel(Number(n),d,l)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let s=new bd(i);a("webnn",[s,()=>s.reserveTensorId(),n=>s.releaseTensorId(n),async(n,o,u,l)=>s.ensureTensor(n,o,u,l),(n,o)=>{s.uploadTensor(n,o)},async(n,o)=>s.downloadTensor(n,o)])}}}),Sd,$r,wr,Re,Id,Lt,br,vr,xr,kr,Sr,Ir,zd=T(()=>{lp(),dp(),P(),Ne(),di(),ha(),Sd=(e,t)=>{re()._OrtInit(e,t)!==0&&j("Can't initialize onnxruntime.")},$r=async e=>{Sd(e.wasm.numThreads,Et(e.logLevel))},wr=async(e,t)=>{{let i=(nc(),kt(vd)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let r=e.webgpu.adapter;if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let s=e.webgpu.forceFallbackAdapter;if(s!==void 0&&typeof s!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${s}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:s}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await i("webgpu",re(),e,r)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await i("webnn",re(),e)}}},Re=new Map,Id=e=>{let t=re(),i=t.stackSave();try{let r=t.PTR_SIZE,a=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,a,a+r)!==0&&j("Can't get session input/output count.");let s=r===4?"i32":"i64";return[Number(t.getValue(a,s)),Number(t.getValue(a+r,s))]}finally{t.stackRestore(i)}},Lt=e=>{let t=re(),i=t._malloc(e.byteLength);if(i===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,i),[i,e.byteLength]},br=async(e,t)=>{var p,c,h;let i,r,a=re();Array.isArray(e)?[i,r]=e:e.buffer===a.HEAPU8.buffer?[i,r]=[e.byteOffset,e.byteLength]:[i,r]=Lt(e);let s=0,n=0,o=0,u=[],l=[],d=[];try{if([n,u]=ca(t),(t==null?void 0:t.externalData)&&a.mountExternalData){let b=[];for(let v of t.externalData){let x=typeof v=="string"?v:v.path;b.push(mi(typeof v=="string"?v:v.data).then(I=>{a.mountExternalData(x,I)}))}await Promise.all(b)}for(let b of(t==null?void 0:t.executionProviders)??[])if((typeof b=="string"?b:b.name)==="webnn"){if(a.shouldTransferToMLTensor=!1,typeof b!="string"){let v=b,x=v==null?void 0:v.context,I=v==null?void 0:v.gpuDevice,E=v==null?void 0:v.deviceType,C=v==null?void 0:v.powerPreference;x?a.currentContext=x:I?a.currentContext=await a.jsepCreateMLContext(I):a.currentContext=await a.jsepCreateMLContext({deviceType:E,powerPreference:C})}else a.currentContext=await a.jsepCreateMLContext();break}s=await a._OrtCreateSession(i,r,n),s===0&&j("Can't create a session."),(p=a.jsepOnCreateSession)==null||p.call(a),a.currentContext&&(a.jsepRegisterMLContext(s,a.currentContext),a.currentContext=void 0,a.shouldTransferToMLTensor=!0);let[f,m]=Id(s),y=!!(t!=null&&t.enableGraphCapture),_=[],g=[],w=[];for(let b=0;b<f;b++){let v=a._OrtGetInputName(s,b);v===0&&j("Can't get an input name."),l.push(v),_.push(a.UTF8ToString(v))}for(let b=0;b<m;b++){let v=a._OrtGetOutputName(s,b);v===0&&j("Can't get an output name."),d.push(v);let x=a.UTF8ToString(v);g.push(x);{if(y&&(t==null?void 0:t.preferredOutputLocation)===void 0){w.push("gpu-buffer");continue}let I=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((c=t==null?void 0:t.preferredOutputLocation)==null?void 0:c[x])??"cpu";if(I!=="cpu"&&I!=="cpu-pinned"&&I!=="gpu-buffer"&&I!=="ml-tensor")throw new Error(`Not supported preferred output location: ${I}.`);if(y&&I!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${I}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);w.push(I)}}let $=null;return w.some(b=>b==="gpu-buffer"||b==="ml-tensor")&&(o=a._OrtCreateBinding(s),o===0&&j("Can't create IO binding."),$={handle:o,outputPreferredLocations:w,outputPreferredLocationsEncoded:w.map(b=>fi(b))}),Re.set(s,[s,l,d,$,y,!1]),[s,_,g]}catch(f){throw l.forEach(m=>a._OrtFree(m)),d.forEach(m=>a._OrtFree(m)),o!==0&&a._OrtReleaseBinding(o)!==0&&j("Can't release IO binding."),s!==0&&a._OrtReleaseSession(s)!==0&&j("Can't release session."),f}finally{a._free(i),n!==0&&a._OrtReleaseSessionOptions(n)!==0&&j("Can't release session options."),u.forEach(f=>a._free(f)),(h=a.unmountExternalData)==null||h.call(a)}},vr=e=>{var u;let t=re(),i=Re.get(e);if(!i)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,a,s,n,o]=i;n&&(o&&t._OrtClearBoundOutputs(n.handle)!==0&&j("Can't clear bound outputs."),t._OrtReleaseBinding(n.handle)!==0&&j("Can't release IO binding.")),(u=t.jsepOnReleaseSession)==null||u.call(t,e),a.forEach(l=>t._OrtFree(l)),s.forEach(l=>t._OrtFree(l)),t._OrtReleaseSession(r)!==0&&j("Can't release session."),Re.delete(e)},xr=(e,t,i,r,a,s=!1)=>{if(!e){t.push(0);return}let n=re(),o=n.PTR_SIZE,u=e[0],l=e[1],d=e[3],p,c;if(u==="string"&&(d==="gpu-buffer"||d==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&d!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(d==="gpu-buffer"){let m=e[2].gpuBuffer;c=Xe(dt(u),l);let y=n.jsepRegisterBuffer;if(!y)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');p=y(r,a,m,c)}else if(d==="ml-tensor"){let m=e[2].mlTensor;c=Xe(dt(u),l);let y=n.jsepRegisterMLTensor;if(!y)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');p=y(m,dt(u),l)}else{let m=e[2];if(Array.isArray(m)){c=o*m.length,p=n._malloc(c),i.push(p);for(let y=0;y<m.length;y++){if(typeof m[y]!="string")throw new TypeError(`tensor data at index ${y} is not a string`);n.setValue(p+y*o,oe(m[y],i),"*")}}else c=m.byteLength,p=n._malloc(c),i.push(p),n.HEAPU8.set(new Uint8Array(m.buffer,m.byteOffset,c),p)}let h=n.stackSave(),f=n.stackAlloc(4*l.length);try{l.forEach((y,_)=>n.setValue(f+_*o,y,o===4?"i32":"i64"));let m=n._OrtCreateTensor(dt(u),p,c,f,l.length,fi(d));m===0&&j(`Can't create tensor for input/output. session=${r}, index=${a}.`),t.push(m)}finally{n.stackRestore(h)}},kr=async(e,t,i,r,a,s)=>{var q,W;let n=re(),o=n.PTR_SIZE,u=Re.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let l=u[0],d=u[1],p=u[2],c=u[3],h=u[4],f=u[5],m=t.length,y=r.length,_=0,g=[],w=[],$=[],b=[],v=n.stackSave(),x=n.stackAlloc(m*o),I=n.stackAlloc(m*o),E=n.stackAlloc(y*o),C=n.stackAlloc(y*o);try{(q=n.jsepOnRunStart)==null||q.call(n,l),[_,g]=oa(s);for(let A=0;A<m;A++)xr(i[A],w,b,e,t[A],h);for(let A=0;A<y;A++)xr(a[A],$,b,e,m+r[A],h);for(let A=0;A<m;A++)n.setValue(x+A*o,w[A],"*"),n.setValue(I+A*o,d[t[A]],"*");for(let A=0;A<y;A++)n.setValue(E+A*o,$[A],"*"),n.setValue(C+A*o,p[r[A]],"*");if(c&&!f){let{handle:A,outputPreferredLocations:U,outputPreferredLocationsEncoded:Y}=c;if(d.length!==m)throw new Error(`input count from feeds (${m}) is expected to be always equal to model's input count (${d.length}).`);for(let L=0;L<m;L++){let N=t[L];await n._OrtBindInput(A,d[N],w[L])!==0&&j(`Can't bind input[${L}] for session=${e}.`)}for(let L=0;L<y;L++){let N=r[L];(W=a[L])!=null&&W[3]?n._OrtBindOutput(A,p[N],$[L],0)!==0&&j(`Can't bind pre-allocated output[${L}] for session=${e}.`):n._OrtBindOutput(A,p[N],0,Y[N])!==0&&j(`Can't bind output[${L}] to ${U[L]} for session=${e}.`)}Re.set(e,[l,d,p,c,h,!0])}let D;c?D=await n._OrtRunWithBinding(l,c.handle,y,E,_):D=await n._OrtRun(l,I,x,m,C,y,E,_),D!==0&&j("failed to call OrtRun().");let H=[];for(let A=0;A<y;A++){let U=Number(n.getValue(E+A*o,"*"));if(U===$[A]){H.push(a[A]);continue}let Y=n.stackSave(),L=n.stackAlloc(4*o),N=!1,Q,z=0;try{n._OrtGetTensorData(U,L,L+o,L+2*o,L+3*o)!==0&&j(`Can't access output tensor data on index ${A}.`);let B=o===4?"i32":"i64",K=Number(n.getValue(L,B));z=n.getValue(L+o,"*");let ie=n.getValue(L+o*2,"*"),Se=Number(n.getValue(L+o*3,B)),Ce=[];for(let le=0;le<Se;le++)Ce.push(Number(n.getValue(ie+le*o,B)));n._OrtFree(ie)!==0&&j("Can't free memory for tensor dims.");let Ze=Ce.reduce((le,se)=>le*se,1);Q=Ve(K);let Ht=c==null?void 0:c.outputPreferredLocations[r[A]];if(Q==="string"){if(Ht==="gpu-buffer"||Ht==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let le=[];for(let se=0;se<Ze;se++){let vt=n.getValue(z+se*o,"*"),dc=n.getValue(z+(se+1)*o,"*"),pc=se===Ze-1?void 0:dc-vt;le.push(n.UTF8ToString(vt,pc))}H.push([Q,Ce,le,"cpu"])}else if(Ht==="gpu-buffer"&&Ze>0){let le=n.jsepGetBuffer;if(!le)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let se=le(z),vt=Xe(K,Ze);if(vt===void 0||!ci(Q))throw new Error(`Unsupported data type: ${Q}`);N=!0,H.push([Q,Ce,{gpuBuffer:se,download:n.jsepCreateDownloader(se,vt,Q),dispose:()=>{n._OrtReleaseTensor(U)!==0&&j("Can't release tensor.")}},"gpu-buffer"])}else if(Ht==="ml-tensor"&&Ze>0){let le=n.jsepEnsureTensor;if(!le)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Xe(K,Ze)===void 0||!hi(Q))throw new Error(`Unsupported data type: ${Q}`);let se=await le(z,K,Ce,!1);N=!0,H.push([Q,Ce,{mlTensor:se,download:n.jsepCreateMLTensorDownloader(z,Q),dispose:()=>{n.jsepReleaseTensorId(z),n._OrtReleaseTensor(U)}},"ml-tensor"])}else{let le=pi(Q),se=new le(Ze);new Uint8Array(se.buffer,se.byteOffset,se.byteLength).set(n.HEAPU8.subarray(z,z+se.byteLength)),H.push([Q,Ce,se,"cpu"])}}finally{n.stackRestore(Y),Q==="string"&&z&&n._free(z),N||n._OrtReleaseTensor(U)}}return c&&!h&&(n._OrtClearBoundOutputs(c.handle)!==0&&j("Can't clear bound outputs."),Re.set(e,[l,d,p,c,h,!1])),H}finally{n.stackRestore(v),w.forEach(D=>n._OrtReleaseTensor(D)),$.forEach(D=>n._OrtReleaseTensor(D)),b.forEach(D=>n._free(D)),_!==0&&n._OrtReleaseRunOptions(_),g.forEach(D=>n._free(D))}},Sr=e=>{let t=re(),i=Re.get(e);if(!i)throw new Error("invalid session id");let r=i[0],a=t._OrtEndProfiling(r);a===0&&j("Can't get an profile file name."),t._OrtFree(a)},Ir=e=>{let t=[];for(let i of e){let r=i[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}}),De,pe,tt,wt,bt,Gt,zr,Wt,je,Qe,Td,Ed,Cd,Bd,Ad,Od,Rd,Dd,Md=T(()=>{$e(),zd(),Ne(),si(),De=()=>!!J.wasm.proxy&&typeof document<"u",tt=!1,wt=!1,bt=!1,Wt=new Map,je=(e,t)=>{let i=Wt.get(e);i?i.push(t):Wt.set(e,[t])},Qe=()=>{if(tt||!wt||bt||!pe)throw new Error("worker not ready")},Td=e=>{switch(e.data.type){case"init-wasm":tt=!1,e.data.err?(bt=!0,zr[1](e.data.err)):(wt=!0,zr[0]()),Gt&&(URL.revokeObjectURL(Gt),Gt=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Wt.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Ed=async()=>{if(!wt){if(tt)throw new Error("multiple calls to 'initWasm()' detected.");if(bt)throw new Error("previous call to 'initWasm()' failed.");if(tt=!0,De())return new Promise((e,t)=>{pe==null||pe.terminate(),ra().then(([i,r])=>{try{pe=r,pe.onerror=s=>t(s),pe.onmessage=Td,zr=[e,t];let a={type:"init-wasm",in:J};if(!a.in.wasm.wasmPaths&&i){let s=ii();s&&(a.in.wasm.wasmPaths=s)}pe.postMessage(a),Gt=i}catch(a){t(a)}},t)});try{await li(J.wasm),await $r(J),wt=!0}catch(e){throw bt=!0,e}finally{tt=!1}}},Cd=async e=>{if(De())return Qe(),new Promise((t,i)=>{je("init-ep",[t,i]);let r={type:"init-ep",in:{epName:e,env:J}};pe.postMessage(r)});await wr(J,e)},Bd=async e=>De()?(Qe(),new Promise((t,i)=>{je("copy-from",[t,i]);let r={type:"copy-from",in:{buffer:e}};pe.postMessage(r,[e.buffer])})):Lt(e),Ad=async(e,t)=>{if(De()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Qe(),new Promise((i,r)=>{je("create",[i,r]);let a={type:"create",in:{model:e,options:{...t}}},s=[];e instanceof Uint8Array&&s.push(e.buffer),pe.postMessage(a,s)})}else return br(e,t)},Od=async e=>{if(De())return Qe(),new Promise((t,i)=>{je("release",[t,i]);let r={type:"release",in:e};pe.postMessage(r)});vr(e)},Rd=async(e,t,i,r,a,s)=>{if(De()){if(i.some(n=>n[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(a.some(n=>n))throw new Error("pre-allocated output tensor is not supported for proxy.");return Qe(),new Promise((n,o)=>{je("run",[n,o]);let u=i,l={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:r,options:s}};pe.postMessage(l,Ir(u))})}else return kr(e,t,i,r,a,s)},Dd=async e=>{if(De())return Qe(),new Promise((t,i)=>{je("end-profiling",[t,i]);let r={type:"end-profiling",in:e};pe.postMessage(r)});Sr(e)}}),Tr,Pd,Ud,sc=T(()=>{$e(),Md(),P(),Jt(),ha(),Tr=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Pd=e=>{switch(e[3]){case"cpu":return new _e(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!ci(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:i,download:r,dispose:a}=e[2];return _e.fromGpuBuffer(i,{dataType:t,dims:e[1],download:r,dispose:a})}case"ml-tensor":{let t=e[0];if(!hi(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:i,download:r,dispose:a}=e[2];return _e.fromMLTensor(i,{dataType:t,dims:e[1],download:r,dispose:a})}default:throw new Error(`invalid data location: ${e[3]}`)}},Ud=class{async fetchModelAndCopyToWasmMemory(e){return Bd(await mi(e))}async loadModel(e,t){ye();let i;typeof e=="string"?i=await this.fetchModelAndCopyToWasmMemory(e):i=e,[this.sessionId,this.inputNames,this.outputNames]=await Ad(i,t),ge()}async dispose(){return Od(this.sessionId)}async run(e,t,i){ye();let r=[],a=[];Object.entries(e).forEach(p=>{let c=p[0],h=p[1],f=this.inputNames.indexOf(c);if(f===-1)throw new Error(`invalid input '${c}'`);r.push(h),a.push(f)});let s=[],n=[];Object.entries(t).forEach(p=>{let c=p[0],h=p[1],f=this.outputNames.indexOf(c);if(f===-1)throw new Error(`invalid output '${c}'`);s.push(h),n.push(f)});let o=r.map((p,c)=>Tr(p,()=>`input "${this.inputNames[a[c]]}"`)),u=s.map((p,c)=>p?Tr(p,()=>`output "${this.outputNames[n[c]]}"`):null),l=await Rd(this.sessionId,a,o,n,u,i),d={};for(let p=0;p<l.length;p++)d[this.outputNames[n[p]]]=s[p]??Pd(l[p]);return ge(),d}startProfiling(){}endProfiling(){Dd(this.sessionId)}}}),qd={};nt(qd,{OnnxruntimeWebAssemblyBackend:()=>Cr,initializeFlags:()=>Er,wasmBackend:()=>Nd});var Er,Cr,Nd,oc=T(()=>{$e(),Md(),sc(),Er=()=>{if((typeof J.wasm.initTimeout!="number"||J.wasm.initTimeout<0)&&(J.wasm.initTimeout=0),J.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof J.wasm.proxy!="boolean"&&(J.wasm.proxy=!1),typeof J.wasm.trace!="boolean"&&(J.wasm.trace=!1),typeof J.wasm.numThreads!="number"||!Number.isInteger(J.wasm.numThreads)||J.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)J.wasm.numThreads=1;else{let e=typeof navigator>"u"?Kd("node:os").cpus().length:navigator.hardwareConcurrency;J.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},Cr=class{async init(e){Er(),await Ed(),await Cd(e)}async createInferenceSessionHandler(e,t){let i=new Ud;return await i.loadModel(e,t),Promise.resolve(i)}},Nd=new Cr}),Vd={};nt(Vd,{InferenceSession:()=>Yt,TRACE:()=>ut,TRACE_FUNC_BEGIN:()=>ye,TRACE_FUNC_END:()=>ge,Tensor:()=>_e,default:()=>lc,env:()=>J,registerBackend:()=>Ue}),$e(),$e(),$e();var uc="1.21.0-dev.20250206-d981b153d3",lc=Qr;{let e=(oc(),kt(qd)).wasmBackend;Ue("webgpu",e,5),Ue("webnn",e,5),Ue("cpu",e,10),Ue("wasm",e,10)}return Object.defineProperty(J.versions,"web",{value:uc,enumerable:!0}),kt(Vd)})();/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Me.exports=rt})(Ld);var Hd=Ld.exports;const mc=hc(Hd),yc=fc({__proto__:null,default:mc},[Hd]);export{yc as o};
