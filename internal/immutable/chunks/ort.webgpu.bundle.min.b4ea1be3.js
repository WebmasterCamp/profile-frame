import{_ as Kf}from"./preload-helper.a4192956.js";var $a=Object.defineProperty,Qf=Object.getOwnPropertyDescriptor,Yf=Object.getOwnPropertyNames,Zf=Object.prototype.hasOwnProperty,Xf=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),P=(e,t)=>()=>(e&&(t=e(e=0)),t),ar=(e,t)=>{for(var r in t)$a(e,r,{get:t[r],enumerable:!0})},Jf=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Yf(t))!Zf.call(e,a)&&a!==r&&$a(e,a,{get:()=>t[a],enumerable:!(i=Qf(t,a))||i.enumerable});return e},Rr=e=>Jf($a({},"__esModule",{value:!0}),e),Lt,pt,Dt,ms,jl,Kl=P(()=>{Lt=new Map,pt=[],Dt=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=Lt.get(e);if(i===void 0)Lt.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let a=pt.indexOf(e);a!==-1&&pt.splice(a,1);for(let s=0;s<pt.length;s++)if(Lt.get(pt[s]).priority<=r){pt.splice(s,0,e);return}pt.push(e)}return}throw new TypeError("not a valid backend")},ms=async e=>{let t=Lt.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},jl=async e=>{let t=e.executionProviders||[],r=t.map(d=>typeof d=="string"?d:d.name),i=r.length===0?pt:r,a,s=[],n=new Set;for(let d of i){let p=await ms(d);typeof p=="string"?s.push({name:d,err:p}):(a||(a=p),a===p&&n.add(d))}if(!a)throw new Error(`no available backend found. ERR: ${s.map(d=>`[${d.name}] ${d.err}`).join(", ")}`);for(let{name:d,err:p}of s)r.includes(d)&&console.warn(`removing requested execution provider "${d}" from session options because it is not available: ${p}`);let u=t.filter(d=>n.has(typeof d=="string"?d:d.name));return[a,new Proxy(e,{get:(d,p)=>p==="executionProviders"?u:Reflect.get(d,p)})]}}),em=P(()=>{Kl()}),Ql,tm=P(()=>{Ql="1.21.0-dev.20250206-d981b153d3"}),di,Ue,Yl=P(()=>{tm(),di="warning",Ue={wasm:{},webgl:{},webgpu:{},versions:{common:Ql},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);di=e}},get logLevel(){return di}},Object.defineProperty(Ue,"logLevel",{enumerable:!0})}),ge,rm=P(()=>{Yl(),ge=Ue}),Zl,Xl,im=P(()=>{Zl=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let a,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],s=e.dims[3]):(a=e.dims[3],s=e.dims[2]);let n=(t==null?void 0:t.format)!==void 0?t.format:"RGB",u=t==null?void 0:t.norm,d,p;u===void 0||u.mean===void 0?d=[255,255,255,255]:typeof u.mean=="number"?d=[u.mean,u.mean,u.mean,u.mean]:(d=[u.mean[0],u.mean[1],u.mean[2],0],u.mean[3]!==void 0&&(d[3]=u.mean[3])),u===void 0||u.bias===void 0?p=[0,0,0,0]:typeof u.bias=="number"?p=[u.bias,u.bias,u.bias,u.bias]:(p=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(p[3]=u.bias[3]));let f=s*a,m=0,l=f,y=f*2,_=-1;n==="RGBA"?(m=0,l=f,y=f*2,_=f*3):n==="RGB"?(m=0,l=f,y=f*2):n==="RBG"&&(m=0,y=f,l=f*2);for(let b=0;b<s;b++)for(let v=0;v<a;v++){let x=(e.data[m++]-p[0])*d[0],w=(e.data[l++]-p[1])*d[1],S=(e.data[y++]-p[2])*d[2],k=_===-1?255:(e.data[_++]-p[3])*d[3];i.fillStyle="rgba("+x+","+w+","+S+","+k+")",i.fillRect(v,b,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Xl=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let a,s,n;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],s=e.dims[1],n=e.dims[3]):(a=e.dims[3],s=e.dims[2],n=e.dims[1]);let u=t!==void 0&&t.format!==void 0?t.format:"RGB",d=t==null?void 0:t.norm,p,f;d===void 0||d.mean===void 0?p=[255,255,255,255]:typeof d.mean=="number"?p=[d.mean,d.mean,d.mean,d.mean]:(p=[d.mean[0],d.mean[1],d.mean[2],255],d.mean[3]!==void 0&&(p[3]=d.mean[3])),d===void 0||d.bias===void 0?f=[0,0,0,0]:typeof d.bias=="number"?f=[d.bias,d.bias,d.bias,d.bias]:(f=[d.bias[0],d.bias[1],d.bias[2],0],d.bias[3]!==void 0&&(f[3]=d.bias[3]));let m=s*a;if(t!==void 0&&(t.format!==void 0&&n===4&&t.format!=="RGBA"||n===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let l=4,y=0,_=1,b=2,v=3,x=0,w=m,S=m*2,k=-1;u==="RGBA"?(x=0,w=m,S=m*2,k=m*3):u==="RGB"?(x=0,w=m,S=m*2):u==="RBG"&&(x=0,S=m,w=m*2),i=r.createImageData(a,s);for(let I=0;I<s*a;y+=l,_+=l,b+=l,v+=l,I++)i.data[y]=(e.data[x++]-f[0])*p[0],i.data[_]=(e.data[w++]-f[1])*p[1],i.data[b]=(e.data[S++]-f[2])*p[2],i.data[v]=k===-1?255:(e.data[k++]-f[3])*p[3]}else throw new Error("Can not access image data");return i}}),_r,Jl,ed,td,rd,id,am=P(()=>{wa(),_r=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,a=t.norm??{mean:255,bias:0},s,n;typeof a.mean=="number"?s=[a.mean,a.mean,a.mean,a.mean]:s=[a.mean[0],a.mean[1],a.mean[2],a.mean[3]??255],typeof a.bias=="number"?n=[a.bias,a.bias,a.bias,a.bias]:n=[a.bias[0],a.bias[1],a.bias[2],a.bias[3]??0];let u=t.format!==void 0?t.format:"RGBA",d=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",p=r*i,f=d==="RGBA"?new Float32Array(p*4):new Float32Array(p*3),m=4,l=0,y=1,_=2,b=3,v=0,x=p,w=p*2,S=-1;u==="RGB"&&(m=3,l=0,y=1,_=2,b=-1),d==="RGBA"?S=p*3:d==="RBG"?(v=0,w=p,x=p*2):d==="BGR"&&(w=0,x=p,v=p*2);for(let k=0;k<p;k++,l+=m,_+=m,y+=m,b+=m)f[v++]=(e[l]+n[0])/s[0],f[x++]=(e[y]+n[1])/s[1],f[w++]=(e[_]+n[2])/s[2],S!==-1&&b!==-1&&(f[S++]=(e[b]+n[3])/s[3]);return d==="RGBA"?new Be("float32",f,[1,4,r,i]):new Be("float32",f,[1,3,r,i])},Jl=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,a=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,s=typeof e=="string",n,u=t??{},d=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},p=f=>typeof HTMLCanvasElement<"u"&&f instanceof HTMLCanvasElement||f instanceof OffscreenCanvas?f.getContext("2d"):null;if(r){let f=d();f.width=e.width,f.height=e.height;let m=p(f);if(m!=null){let l=e.height,y=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(l=t.resizedHeight,y=t.resizedWidth),t!==void 0){if(u=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");u.tensorFormat="RGBA",u.height=l,u.width=y}else u.tensorFormat="RGBA",u.height=l,u.width=y;m.drawImage(e,0,0),n=m.getImageData(0,0,y,l).data}else throw new Error("Can not access image data")}else if(i){let f,m;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(f=t.resizedHeight,m=t.resizedWidth):(f=e.height,m=e.width),t!==void 0&&(u=t),u.format="RGBA",u.height=f,u.width=m,t!==void 0){let l=d();l.width=m,l.height=f;let y=p(l);if(y!=null)y.putImageData(e,0,0),n=y.getImageData(0,0,m,f).data;else throw new Error("Can not access image data")}else n=e.data}else if(a){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let f=d();f.width=e.width,f.height=e.height;let m=p(f);if(m!=null){let l=e.height,y=e.width;return m.drawImage(e,0,0,y,l),n=m.getImageData(0,0,y,l).data,u.height=l,u.width=y,_r(n,u)}else throw new Error("Can not access image data")}else{if(s)return new Promise((f,m)=>{let l=d(),y=p(l);if(!e||!y)return m();let _=new Image;_.crossOrigin="Anonymous",_.src=e,_.onload=()=>{l.width=_.width,l.height=_.height,y.drawImage(_,0,0,l.width,l.height);let b=y.getImageData(0,0,l.width,l.height);u.height=l.height,u.width=l.width,f(_r(b.data,u))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(n!==void 0)return _r(n,u);throw new Error("Input data provided is not supported - aborted tensor creation")},ed=(e,t)=>{let{width:r,height:i,download:a,dispose:s}=t,n=[1,i,r,4];return new Be({location:"texture",type:"float32",texture:e,dims:n,download:a,dispose:s})},td=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:s}=t;return new Be({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:a,dispose:s})},rd=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:s}=t;return new Be({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:a,dispose:s})},id=(e,t,r)=>new Be({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),kt,Zt,pi,ad,nm=P(()=>{kt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Zt=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),pi=!1,ad=()=>{if(!pi){pi=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=typeof Float16Array<"u"&&Float16Array.from;e&&(kt.set("int64",BigInt64Array),Zt.set(BigInt64Array,"int64")),t&&(kt.set("uint64",BigUint64Array),Zt.set(BigUint64Array,"uint64")),r?(kt.set("float16",Float16Array),Zt.set(Float16Array,"float16")):kt.set("float16",Uint16Array)}}}),nd,sd,sm=P(()=>{wa(),nd=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},sd=(e,t)=>{switch(e.location){case"cpu":return new Be(e.type,e.data,t);case"cpu-pinned":return new Be({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Be({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Be({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Be({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Be,wa=P(()=>{im(),am(),nm(),sm(),Be=class{constructor(e,t,r){ad();let i,a;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,a=e.dims,e.location){case"cpu-pinned":{let n=kt.get(i);if(!n)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof n))throw new TypeError(`buffer should be of type ${n.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let n,u;if(typeof e=="string")if(i=e,u=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");n=t}else{let d=kt.get(e);if(d===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&d===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${d.name} as data.`);e==="uint64"||e==="int64"?n=d.from(t,BigInt):n=d.from(t)}else if(t instanceof d)n=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")n=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else throw new TypeError(`A ${i} tensor's data must be type of ${d}`)}else if(u=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let d=typeof e[0];if(d==="string")i="string",n=e;else if(d==="boolean")i="bool",n=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${d}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",n=Uint8Array.from(e);else{let d=Zt.get(e.constructor);if(d===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=d,n=e}if(u===void 0)u=[n.length];else if(!Array.isArray(u))throw new TypeError("A tensor's dims must be a number array");a=u,this.cpuData=n,this.dataLocation="cpu"}let s=nd(a);if(this.cpuData&&s!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(s/2)===this.cpuData.length))throw new Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=a,this.size=s}static async fromImage(e,t){return Jl(e,t)}static fromTexture(e,t){return ed(e,t)}static fromGpuBuffer(e,t){return td(e,t)}static fromMLTensor(e,t){return rd(e,t)}static fromPinnedBuffer(e,t,r){return id(e,t,r)}toDataURL(e){return Zl(this,e)}toImageData(e){return Xl(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return sd(this,e)}}}),Je,od=P(()=>{wa(),Je=Be}),Br,hi,et,Ge,ud=P(()=>{Yl(),Br=(e,t)=>{(typeof Ue.trace>"u"?!Ue.wasm.trace:!Ue.trace)||console.timeStamp(`${e}::ORT::${t}`)},hi=(e,t)=>{var a;let r=((a=new Error().stack)==null?void 0:a.split(/\r\n|\r|\n/g))||[],i=!1;for(let s=0;s<r.length;s++){if(i&&!r[s].includes("TRACE_FUNC")){let n=`FUNC_${e}::${r[s].trim().split(" ")[1]}`;t&&(n+=`::${t}`),Br("CPU",n);return}r[s].includes("TRACE_FUNC")&&(i=!0)}},et=e=>{(typeof Ue.trace>"u"?!Ue.wasm.trace:!Ue.trace)||hi("BEGIN",e)},Ge=e=>{(typeof Ue.trace>"u"?!Ue.wasm.trace:!Ue.trace)||hi("END",e)}}),ld,om=P(()=>{Kl(),od(),ud(),ld=class dd{constructor(t){this.handler=t}async run(t,r,i){et();let a={},s={};if(typeof t!="object"||t===null||t instanceof Je||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let n=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Je)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");n=!1;for(let p of r){if(typeof p!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(p)===-1)throw new RangeError(`'fetches' contains invalid output name: ${p}.`);a[p]=null}if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let p=!1,f=Object.getOwnPropertyNames(r);for(let m of this.outputNames)if(f.indexOf(m)!==-1){let l=r[m];(l===null||l instanceof Je)&&(p=!0,n=!1,a[m]=l)}if(p){if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else s=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let p of this.inputNames)if(typeof t[p]>"u")throw new Error(`input '${p}' is missing in 'feeds'.`);if(n)for(let p of this.outputNames)a[p]=null;let u=await this.handler.run(t,a,s),d={};for(let p in u)if(Object.hasOwnProperty.call(u,p)){let f=u[p];f instanceof Je?d[p]=f:d[p]=new Je(f.type,f.data,f.dims)}return Ge(),d}async release(){return this.handler.dispose()}static async create(t,r,i,a){et();let s,n={};if(typeof t=="string"){if(s=t,typeof r=="object"&&r!==null)n=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(s=t,typeof r=="object"&&r!==null)n=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let f=t,m=0,l=t.byteLength;if(typeof r=="object"&&r!==null)n=r;else if(typeof r=="number"){if(m=r,!Number.isSafeInteger(m))throw new RangeError("'byteOffset' must be an integer.");if(m<0||m>=f.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${f.byteLength}).`);if(l=t.byteLength-m,typeof i=="number"){if(l=i,!Number.isSafeInteger(l))throw new RangeError("'byteLength' must be an integer.");if(l<=0||m+l>f.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${f.byteLength-m}].`);if(typeof a=="object"&&a!==null)n=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");s=new Uint8Array(f,m,l)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[u,d]=await jl(n),p=await u.createInferenceSessionHandler(s,d);return Ge(),new dd(p)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),pd,um=P(()=>{om(),pd=ld}),lm=P(()=>{}),dm=P(()=>{}),pm=P(()=>{}),hm=P(()=>{}),hd={};ar(hd,{InferenceSession:()=>pd,TRACE:()=>Br,TRACE_FUNC_BEGIN:()=>et,TRACE_FUNC_END:()=>Ge,Tensor:()=>Je,env:()=>ge,registerBackend:()=>Dt});var Fe=P(()=>{em(),rm(),um(),od(),lm(),dm(),ud(),pm(),hm()}),va=P(()=>{}),cd={};ar(cd,{default:()=>fd});var ci,fi,fd,cm=P(()=>{var e;yc(),Ct(),xa(),ci="ort-wasm-proxy-worker",fi=((e=globalThis.self)==null?void 0:e.name)===ci,fi&&(self.onmessage=t=>{let{type:r,in:i}=t.data;try{switch(r){case"init-wasm":ka(i.wasm).then(()=>{La(i).then(()=>{postMessage({type:r})},a=>{postMessage({type:r,err:a})})},a=>{postMessage({type:r,err:a})});break;case"init-ep":{let{epName:a,env:s}=i;Va(s,a).then(()=>{postMessage({type:r})},n=>{postMessage({type:r,err:n})});break}case"copy-from":{let{buffer:a}=i,s=Wr(a);postMessage({type:r,out:s});break}case"create":{let{model:a,options:s}=i;Ha(a,s).then(n=>{postMessage({type:r,out:n})},n=>{postMessage({type:r,err:n})});break}case"release":Ga(i),postMessage({type:r});break;case"run":{let{sessionId:a,inputIndices:s,inputs:n,outputIndices:u,options:d}=i;Fa(a,s,n,u,new Array(u.length).fill(null),d).then(p=>{p.some(f=>f[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:p},Ka([...n,...p]))},p=>{postMessage({type:r,err:p})});break}case"end-profiling":ja(i),postMessage({type:r});break;default:}}catch(a){postMessage({type:r,err:a})}}),fd=fi?null:t=>new Worker(t??Re,{type:"module",name:ci})}),md={};ar(md,{default:()=>gd});var mi,gi,gd,fm=P(()=>{var e;gi=(mi=import.meta.url,async function(t={}){function r(){return U.buffer!=Y.buffer&&me(),Y}function i(){return U.buffer!=Y.buffer&&me(),te}function a(){return U.buffer!=Y.buffer&&me(),le}function s(){return U.buffer!=Y.buffer&&me(),M}function n(){return U.buffer!=Y.buffer&&me(),L}function u(){return U.buffer!=Y.buffer&&me(),oe}function d(){return U.buffer!=Y.buffer&&me(),be}function p(){return U.buffer!=Y.buffer&&me(),je}var f,m,l=Object.assign({},t),y=new Promise((o,h)=>{f=o,m=h}),_=typeof window=="object",b=typeof importScripts=="function",v=b&&self.name=="em-pthread";l.mountExternalData=(o,h)=>{o.startsWith("./")&&(o=o.substring(2)),(l.Fb||(l.Fb=new Map)).set(o,h)},l.unmountExternalData=()=>{delete l.Fb};var x=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let w=()=>{let o=(c,g,$)=>(...T)=>{let O=Ye,D=g==null?void 0:g();T=c(...T);let W=g==null?void 0:g();return D!==W&&(c=W,$(D),g=$=null),Ye!=O?new Promise((V,Z)=>{ri={resolve:V,reject:Z}}):T},h=c=>async(...g)=>{var $;try{if(l.Gb)throw Error("Session already started");let T=l.Gb={hc:g[0],errors:[]},O=await c(...g);if(l.Gb!==T)throw Error("Session mismatch");($=l.Hb)==null||$.flush();let D=T.errors;if(0<D.length){let W=await Promise.all(D);if(W=W.filter(V=>V),0<W.length)throw Error(W.join(`
`))}return O}finally{l.Gb=null}};l._OrtCreateSession=o(l._OrtCreateSession,()=>l._OrtCreateSession,c=>l._OrtCreateSession=c),l._OrtRun=h(o(l._OrtRun,()=>l._OrtRun,c=>l._OrtRun=c)),l._OrtRunWithBinding=h(o(l._OrtRunWithBinding,()=>l._OrtRunWithBinding,c=>l._OrtRunWithBinding=c)),l._OrtBindInput=o(l._OrtBindInput,()=>l._OrtBindInput,c=>l._OrtBindInput=c),w=void 0};l.jsepInit=(o,h)=>{if(w==null||w(),o==="webgpu"){[l.Hb,l.Vb,l.Zb,l.Ob,l.Yb,l.kb,l.$b,l.cc,l.Wb,l.Xb,l.ac]=h;let c=l.Hb;l.jsepRegisterBuffer=(g,$,T,O)=>c.registerBuffer(g,$,T,O),l.jsepGetBuffer=g=>c.getBuffer(g),l.jsepCreateDownloader=(g,$,T)=>c.createDownloader(g,$,T),l.jsepOnCreateSession=g=>{c.onCreateSession(g)},l.jsepOnReleaseSession=g=>{c.onReleaseSession(g)},l.jsepOnRunStart=g=>c.onRunStart(g),l.dc=(g,$)=>{c.upload(g,$)}}else if(o==="webnn"){[l.Hb,l.bc,l.Pb,l.jsepEnsureTensor,l.ec,l.jsepDownloadTensor]=h,l.jsepReleaseTensorId=l.Pb;let c=l.Hb;l.jsepOnRunStart=g=>c.onRunStart(g),l.jsepRegisterMLContext=(g,$)=>{c.registerMLContext(g,$)},l.jsepOnReleaseSession=g=>{c.onReleaseSession(g)},l.jsepCreateMLTensorDownloader=(g,$)=>c.createMLTensorDownloader(g,$),l.jsepRegisterMLTensor=(g,$,T)=>c.registerMLTensor(g,$,T),l.jsepCreateMLContext=g=>c.createMLContext(g),l.jsepRegisterMLConstant=(g,$,T,O,D)=>c.registerMLConstant(g,$,T,O,D,l.Fb)}};var S,k,I=Object.assign({},l),E=(o,h)=>{throw h},C="";(_||b)&&(b?C=self.location.href:typeof document<"u"&&document.currentScript&&(C=document.currentScript.src),mi&&(C=mi),C=C.startsWith("blob:")?"":C.substr(0,C.replace(/[?#].*/,"").lastIndexOf("/")+1),b&&(k=o=>{var h=new XMLHttpRequest;return h.open("GET",o,!1),h.responseType="arraybuffer",h.send(null),new Uint8Array(h.response)}),S=(o,h,c)=>{var g=new XMLHttpRequest;g.open("GET",o,!0),g.responseType="arraybuffer",g.onload=()=>{g.status==200||g.status==0&&g.response?h(g.response):c()},g.onerror=c,g.send(null)});var R,N=console.log.bind(console),q=console.error.bind(console),ee=N,K=q;if(Object.assign(l,I),I=null,v){let o=function(h){try{var c=h.data,g=c.cmd;if(g==="load"){let $=[];self.onmessage=T=>$.push(T),self.startWorker=()=>{postMessage({cmd:"loaded"});for(let T of $)o(T);self.onmessage=o};for(let T of c.handlers)l[T]&&!l[T].proxy||(l[T]=(...O)=>{postMessage({Nb:"callHandler",pc:T,args:O})},T=="print"&&(ee=l[T]),T=="printErr"&&(K=l[T]));U=c.wasmMemory,me(),H(c.wasmModule)}else if(g==="run"){si(c.pthread_ptr,0,0,1,0,0),ei(c.pthread_ptr),Ac(),sn(),ie||(is(),ie=!0);try{Oc(c.start_routine,c.arg)}catch($){if($!="unwind")throw $}}else g==="cancel"?Rt()&&gr(-1):c.target!=="setimmediate"&&(g==="checkMailbox"?ie&&sr():g&&(K(`worker: received unknown command ${g}`),K(c)))}catch($){throw as(),$}};var H,ie=!1;K=function(...h){h=h.join(" "),console.error(h)},self.alert=function(...h){postMessage({Nb:"alert",text:h.join(" "),rc:Rt()})},l.instantiateWasm=(h,c)=>new Promise(g=>{H=$=>{$=new WebAssembly.Instance($,en()),c($),g()}}),self.onunhandledrejection=h=>{throw h.reason||h},self.onmessage=o}l.wasmBinary&&(R=l.wasmBinary);var U,X,se,Y,te,le,M,L,oe,be,ve,Me,je,Ne=!1;function me(){var o=U.buffer;l.HEAP8=Y=new Int8Array(o),l.HEAP16=le=new Int16Array(o),l.HEAPU8=te=new Uint8Array(o),l.HEAPU16=M=new Uint16Array(o),l.HEAP32=L=new Int32Array(o),l.HEAPU32=oe=new Uint32Array(o),l.HEAPF32=be=new Float32Array(o),l.HEAPF64=je=new Float64Array(o),l.HEAP64=ve=new BigInt64Array(o),l.HEAPU64=Me=new BigUint64Array(o)}if(!v){if(!((U=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0})).buffer instanceof x))throw K("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),Error("bad memory");me()}var ke=[],tt=[],qr=[],gt=0,Wt=null;function Qa(){if(--gt==0&&Wt){var o=Wt;Wt=null,o()}}function st(o){throw K(o="Aborted("+o+")"),Ne=!0,se=1,o=new WebAssembly.RuntimeError(o+". Build with -sASSERTIONS for more info."),m(o),o}var Lr,Ya=o=>o.startsWith("data:application/octet-stream;base64,"),Za=o=>o.startsWith("file://");function Xa(o){if(o==Lr&&R)return new Uint8Array(R);if(k)return k(o);throw"both async and sync fetching of the wasm failed"}function Ja(o,h,c){return function(g){if(!R&&(_||b)){if(typeof fetch=="function"&&!Za(g))return fetch(g,{credentials:"same-origin"}).then($=>{if(!$.ok)throw`failed to load wasm binary file at '${g}'`;return $.arrayBuffer()}).catch(()=>Xa(g));if(S)return new Promise(($,T)=>{S(g,O=>$(new Uint8Array(O)),T)})}return Promise.resolve().then(()=>Xa(g))}(o).then(g=>WebAssembly.instantiate(g,h)).then(c,g=>{K(`failed to asynchronously prepare wasm: ${g}`),st(g)})}function en(){return{a:{O:zc,Aa:Cc,b:Bc,aa:dn,B:cn,qa:fn,Y:gn,_:yn,ra:_n,oa:bn,ha:$n,na:wn,L:vn,Z:xn,W:kn,pa:Sn,X:Tn,va:Dc,F:Mc,Q:Nc,P:Uc,E:qc,u:Lc,q:Vc,G:Hc,A:Zc,R:Xc,ua:Jc,ka:ef,U:tf,ba:rf,H:af,ja:ei,ta:nf,t:sf,Ba:of,x:df,o:pf,m:cf,c:Xr,n:ff,k:yf,w:_f,p:bf,f:$f,s:wf,l:vf,e:xf,j:kf,i:Sf,g:Tf,d:If,ea:Ef,fa:Cf,ga:zf,ca:Wn,da:qn,T:Af,h:Of,D:Rf,I:Bf,M:Df,y:Mf,sa:Nf,V:Pf,v:Vn,z:Uf,N:Wf,S:qf,za:Lf,ya:Vf,la:Fn,ma:jn,$:jr,C:Kn,K:Qn,ia:Yn,J:Zn,a:U,xa:Fr,wa:es,r:Ff}}}var Vr={916868:(o,h,c,g,$)=>{if(l===void 0||!l.Fb)return 1;if((o=xe(Number(o>>>0))).startsWith("./")&&(o=o.substring(2)),!(o=l.Fb.get(o)))return 2;if(h=Number(h>>>0),c=Number(c>>>0),g=Number(g>>>0),h+c>o.byteLength)return 3;try{let T=o.subarray(h,h+c);switch($){case 0:i().set(T,g>>>0);break;case 1:l.dc(g,T);break;default:return 4}return 0}catch{return 4}},917583:(o,h,c)=>{l.ec(o,i().subarray(h>>>0,h+c>>>0))},917646:()=>l.bc(),917687:o=>{l.Pb(o)},917723:()=>{l.Wb()},917754:()=>{l.Xb()},917783:()=>{l.ac()},917808:o=>l.Vb(o),917841:o=>l.Zb(o),917873:(o,h,c)=>{l.Ob(Number(o),Number(h),Number(c),!0)},917936:(o,h,c)=>{l.Ob(Number(o),Number(h),Number(c))},917993:()=>typeof wasmOffsetConverter<"u",918050:o=>{l.kb("Abs",o,void 0)},918101:o=>{l.kb("Neg",o,void 0)},918152:o=>{l.kb("Floor",o,void 0)},918205:o=>{l.kb("Ceil",o,void 0)},918257:o=>{l.kb("Reciprocal",o,void 0)},918315:o=>{l.kb("Sqrt",o,void 0)},918367:o=>{l.kb("Exp",o,void 0)},918418:o=>{l.kb("Erf",o,void 0)},918469:o=>{l.kb("Sigmoid",o,void 0)},918524:(o,h,c)=>{l.kb("HardSigmoid",o,{alpha:h,beta:c})},918603:o=>{l.kb("Log",o,void 0)},918654:o=>{l.kb("Sin",o,void 0)},918705:o=>{l.kb("Cos",o,void 0)},918756:o=>{l.kb("Tan",o,void 0)},918807:o=>{l.kb("Asin",o,void 0)},918859:o=>{l.kb("Acos",o,void 0)},918911:o=>{l.kb("Atan",o,void 0)},918963:o=>{l.kb("Sinh",o,void 0)},919015:o=>{l.kb("Cosh",o,void 0)},919067:o=>{l.kb("Asinh",o,void 0)},919120:o=>{l.kb("Acosh",o,void 0)},919173:o=>{l.kb("Atanh",o,void 0)},919226:o=>{l.kb("Tanh",o,void 0)},919278:o=>{l.kb("Not",o,void 0)},919329:(o,h,c)=>{l.kb("Clip",o,{min:h,max:c})},919398:o=>{l.kb("Clip",o,void 0)},919450:(o,h)=>{l.kb("Elu",o,{alpha:h})},919508:o=>{l.kb("Gelu",o,void 0)},919560:o=>{l.kb("Relu",o,void 0)},919612:(o,h)=>{l.kb("LeakyRelu",o,{alpha:h})},919676:(o,h)=>{l.kb("ThresholdedRelu",o,{alpha:h})},919746:(o,h)=>{l.kb("Cast",o,{to:h})},919804:o=>{l.kb("Add",o,void 0)},919855:o=>{l.kb("Sub",o,void 0)},919906:o=>{l.kb("Mul",o,void 0)},919957:o=>{l.kb("Div",o,void 0)},920008:o=>{l.kb("Pow",o,void 0)},920059:o=>{l.kb("Equal",o,void 0)},920112:o=>{l.kb("Greater",o,void 0)},920167:o=>{l.kb("GreaterOrEqual",o,void 0)},920229:o=>{l.kb("Less",o,void 0)},920281:o=>{l.kb("LessOrEqual",o,void 0)},920340:(o,h,c,g,$)=>{l.kb("ReduceMean",o,{keepDims:!!h,noopWithEmptyAxes:!!c,axes:g?Array.from(n().subarray(Number(g)>>>0,Number($)>>>0)):[]})},920515:(o,h,c,g,$)=>{l.kb("ReduceMax",o,{keepDims:!!h,noopWithEmptyAxes:!!c,axes:g?Array.from(n().subarray(Number(g)>>>0,Number($)>>>0)):[]})},920689:(o,h,c,g,$)=>{l.kb("ReduceMin",o,{keepDims:!!h,noopWithEmptyAxes:!!c,axes:g?Array.from(n().subarray(Number(g)>>>0,Number($)>>>0)):[]})},920863:(o,h,c,g,$)=>{l.kb("ReduceProd",o,{keepDims:!!h,noopWithEmptyAxes:!!c,axes:g?Array.from(n().subarray(Number(g)>>>0,Number($)>>>0)):[]})},921038:(o,h,c,g,$)=>{l.kb("ReduceSum",o,{keepDims:!!h,noopWithEmptyAxes:!!c,axes:g?Array.from(n().subarray(Number(g)>>>0,Number($)>>>0)):[]})},921212:(o,h,c,g,$)=>{l.kb("ReduceL1",o,{keepDims:!!h,noopWithEmptyAxes:!!c,axes:g?Array.from(n().subarray(Number(g)>>>0,Number($)>>>0)):[]})},921385:(o,h,c,g,$)=>{l.kb("ReduceL2",o,{keepDims:!!h,noopWithEmptyAxes:!!c,axes:g?Array.from(n().subarray(Number(g)>>>0,Number($)>>>0)):[]})},921558:(o,h,c,g,$)=>{l.kb("ReduceLogSum",o,{keepDims:!!h,noopWithEmptyAxes:!!c,axes:g?Array.from(n().subarray(Number(g)>>>0,Number($)>>>0)):[]})},921735:(o,h,c,g,$)=>{l.kb("ReduceSumSquare",o,{keepDims:!!h,noopWithEmptyAxes:!!c,axes:g?Array.from(n().subarray(Number(g)>>>0,Number($)>>>0)):[]})},921915:(o,h,c,g,$)=>{l.kb("ReduceLogSumExp",o,{keepDims:!!h,noopWithEmptyAxes:!!c,axes:g?Array.from(n().subarray(Number(g)>>>0,Number($)>>>0)):[]})},922095:o=>{l.kb("Where",o,void 0)},922148:(o,h,c)=>{l.kb("Transpose",o,{perm:h?Array.from(n().subarray(Number(h)>>>0,Number(c)>>>0)):[]})},922272:(o,h,c,g)=>{l.kb("DepthToSpace",o,{blocksize:h,mode:xe(c),format:g?"NHWC":"NCHW"})},922405:(o,h,c,g)=>{l.kb("DepthToSpace",o,{blocksize:h,mode:xe(c),format:g?"NHWC":"NCHW"})},922538:(o,h,c,g,$,T,O,D,W,V,Z,ue,he,A,ne)=>{l.kb("ConvTranspose",o,{format:W?"NHWC":"NCHW",autoPad:h,dilations:[c],group:g,kernelShape:[$],pads:[T,O],strides:[D],wIsConst:()=>!!r()[V>>>0],outputPadding:Z?Array.from(n().subarray(Number(Z)>>>0,Number(ue)>>>0)):[],outputShape:he?Array.from(n().subarray(Number(he)>>>0,Number(A)>>>0)):[],activation:xe(ne)})},922971:(o,h,c,g,$,T,O,D,W,V,Z,ue,he,A)=>{l.kb("ConvTranspose",o,{format:D?"NHWC":"NCHW",autoPad:h,dilations:Array.from(n().subarray(Number(c)>>>0,2+(Number(c)>>>0)>>>0)),group:g,kernelShape:Array.from(n().subarray(Number($)>>>0,2+(Number($)>>>0)>>>0)),pads:Array.from(n().subarray(Number(T)>>>0,4+(Number(T)>>>0)>>>0)),strides:Array.from(n().subarray(Number(O)>>>0,2+(Number(O)>>>0)>>>0)),wIsConst:()=>!!r()[W>>>0],outputPadding:V?Array.from(n().subarray(Number(V)>>>0,Number(Z)>>>0)):[],outputShape:ue?Array.from(n().subarray(Number(ue)>>>0,Number(he)>>>0)):[],activation:xe(A)})},923632:(o,h,c,g,$,T,O,D,W,V,Z,ue,he,A,ne)=>{l.kb("ConvTranspose",o,{format:W?"NHWC":"NCHW",autoPad:h,dilations:[c],group:g,kernelShape:[$],pads:[T,O],strides:[D],wIsConst:()=>!!r()[V>>>0],outputPadding:Z?Array.from(n().subarray(Number(Z)>>>0,Number(ue)>>>0)):[],outputShape:he?Array.from(n().subarray(Number(he)>>>0,Number(A)>>>0)):[],activation:xe(ne)})},924065:(o,h,c,g,$,T,O,D,W,V,Z,ue,he,A)=>{l.kb("ConvTranspose",o,{format:D?"NHWC":"NCHW",autoPad:h,dilations:Array.from(n().subarray(Number(c)>>>0,2+(Number(c)>>>0)>>>0)),group:g,kernelShape:Array.from(n().subarray(Number($)>>>0,2+(Number($)>>>0)>>>0)),pads:Array.from(n().subarray(Number(T)>>>0,4+(Number(T)>>>0)>>>0)),strides:Array.from(n().subarray(Number(O)>>>0,2+(Number(O)>>>0)>>>0)),wIsConst:()=>!!r()[W>>>0],outputPadding:V?Array.from(n().subarray(Number(V)>>>0,Number(Z)>>>0)):[],outputShape:ue?Array.from(n().subarray(Number(ue)>>>0,Number(he)>>>0)):[],activation:xe(A)})},924726:(o,h)=>{l.kb("GlobalAveragePool",o,{format:h?"NHWC":"NCHW"})},924817:(o,h,c,g,$,T,O,D,W,V,Z,ue,he,A)=>{l.kb("AveragePool",o,{format:A?"NHWC":"NCHW",auto_pad:h,ceil_mode:c,count_include_pad:g,storage_order:$,dilations:T?Array.from(n().subarray(Number(T)>>>0,Number(O)>>>0)):[],kernel_shape:D?Array.from(n().subarray(Number(D)>>>0,Number(W)>>>0)):[],pads:V?Array.from(n().subarray(Number(V)>>>0,Number(Z)>>>0)):[],strides:ue?Array.from(n().subarray(Number(ue)>>>0,Number(he)>>>0)):[]})},925296:(o,h)=>{l.kb("GlobalAveragePool",o,{format:h?"NHWC":"NCHW"})},925387:(o,h,c,g,$,T,O,D,W,V,Z,ue,he,A)=>{l.kb("AveragePool",o,{format:A?"NHWC":"NCHW",auto_pad:h,ceil_mode:c,count_include_pad:g,storage_order:$,dilations:T?Array.from(n().subarray(Number(T)>>>0,Number(O)>>>0)):[],kernel_shape:D?Array.from(n().subarray(Number(D)>>>0,Number(W)>>>0)):[],pads:V?Array.from(n().subarray(Number(V)>>>0,Number(Z)>>>0)):[],strides:ue?Array.from(n().subarray(Number(ue)>>>0,Number(he)>>>0)):[]})},925866:(o,h)=>{l.kb("GlobalMaxPool",o,{format:h?"NHWC":"NCHW"})},925953:(o,h,c,g,$,T,O,D,W,V,Z,ue,he,A)=>{l.kb("MaxPool",o,{format:A?"NHWC":"NCHW",auto_pad:h,ceil_mode:c,count_include_pad:g,storage_order:$,dilations:T?Array.from(n().subarray(Number(T)>>>0,Number(O)>>>0)):[],kernel_shape:D?Array.from(n().subarray(Number(D)>>>0,Number(W)>>>0)):[],pads:V?Array.from(n().subarray(Number(V)>>>0,Number(Z)>>>0)):[],strides:ue?Array.from(n().subarray(Number(ue)>>>0,Number(he)>>>0)):[]})},926428:(o,h)=>{l.kb("GlobalMaxPool",o,{format:h?"NHWC":"NCHW"})},926515:(o,h,c,g,$,T,O,D,W,V,Z,ue,he,A)=>{l.kb("MaxPool",o,{format:A?"NHWC":"NCHW",auto_pad:h,ceil_mode:c,count_include_pad:g,storage_order:$,dilations:T?Array.from(n().subarray(Number(T)>>>0,Number(O)>>>0)):[],kernel_shape:D?Array.from(n().subarray(Number(D)>>>0,Number(W)>>>0)):[],pads:V?Array.from(n().subarray(Number(V)>>>0,Number(Z)>>>0)):[],strides:ue?Array.from(n().subarray(Number(ue)>>>0,Number(he)>>>0)):[]})},926990:(o,h,c,g,$)=>{l.kb("Gemm",o,{alpha:h,beta:c,transA:g,transB:$})},927094:o=>{l.kb("MatMul",o,void 0)},927148:(o,h,c,g)=>{l.kb("ArgMax",o,{keepDims:!!h,selectLastIndex:!!c,axis:g})},927256:(o,h,c,g)=>{l.kb("ArgMin",o,{keepDims:!!h,selectLastIndex:!!c,axis:g})},927364:(o,h)=>{l.kb("Softmax",o,{axis:h})},927427:(o,h)=>{l.kb("Concat",o,{axis:h})},927487:(o,h,c,g,$)=>{l.kb("Split",o,{axis:h,numOutputs:c,splitSizes:g?Array.from(n().subarray(Number(g)>>>0,Number($)>>>0)):[]})},927643:o=>{l.kb("Expand",o,void 0)},927697:(o,h)=>{l.kb("Gather",o,{axis:Number(h)})},927768:(o,h)=>{l.kb("GatherElements",o,{axis:Number(h)})},927847:(o,h)=>{l.kb("GatherND",o,{batch_dims:Number(h)})},927926:(o,h,c,g,$,T,O,D,W,V,Z)=>{l.kb("Resize",o,{antialias:h,axes:c?Array.from(n().subarray(Number(c)>>>0,Number(g)>>>0)):[],coordinateTransformMode:xe($),cubicCoeffA:T,excludeOutside:O,extrapolationValue:D,keepAspectRatioPolicy:xe(W),mode:xe(V),nearestMode:xe(Z)})},928288:(o,h,c,g,$,T,O)=>{l.kb("Slice",o,{starts:h?Array.from(n().subarray(Number(h)>>>0,Number(c)>>>0)):[],ends:g?Array.from(n().subarray(Number(g)>>>0,Number($)>>>0)):[],axes:T?Array.from(n().subarray(Number(T)>>>0,Number(O)>>>0)):[]})},928552:o=>{l.kb("Tile",o,void 0)},928604:(o,h,c)=>{l.kb("InstanceNormalization",o,{epsilon:h,format:c?"NHWC":"NCHW"})},928718:(o,h,c)=>{l.kb("InstanceNormalization",o,{epsilon:h,format:c?"NHWC":"NCHW"})},928832:o=>{l.kb("Range",o,void 0)},928885:(o,h)=>{l.kb("Einsum",o,{equation:xe(h)})},928966:(o,h,c,g,$)=>{l.kb("Pad",o,{mode:h,value:c,pads:g?Array.from(n().subarray(Number(g)>>>0,Number($)>>>0)):[]})},929109:(o,h,c,g,$,T)=>{l.kb("BatchNormalization",o,{epsilon:h,momentum:c,spatial:!!$,trainingMode:!!g,format:T?"NHWC":"NCHW"})},929278:(o,h,c,g,$,T)=>{l.kb("BatchNormalization",o,{epsilon:h,momentum:c,spatial:!!$,trainingMode:!!g,format:T?"NHWC":"NCHW"})},929447:(o,h,c)=>{l.kb("CumSum",o,{exclusive:Number(h),reverse:Number(c)})},929544:(o,h,c)=>{l.kb("DequantizeLinear",o,{axis:h,blockSize:c})},929634:(o,h,c,g,$)=>{l.kb("GridSample",o,{align_corners:h,mode:xe(c),padding_mode:xe(g),format:$?"NHWC":"NCHW"})},929804:(o,h,c,g,$)=>{l.kb("GridSample",o,{align_corners:h,mode:xe(c),padding_mode:xe(g),format:$?"NHWC":"NCHW"})},929974:(o,h,c,g,$,T,O,D,W)=>{l.kb("Attention",o,{numHeads:h,isUnidirectional:c,maskFilterValue:g,scale:$,doRotary:T,qkvHiddenSizes:O?Array.from(n().subarray(Number(D)>>>0,Number(D)+O>>>0)):[],pastPresentShareBuffer:!!W})},930246:o=>{l.kb("BiasAdd",o,void 0)},930301:o=>{l.kb("BiasSplitGelu",o,void 0)},930362:o=>{l.kb("FastGelu",o,void 0)},930418:(o,h,c,g,$,T,O,D,W,V,Z,ue,he,A,ne,$e)=>{l.kb("Conv",o,{format:ue?"NHWC":"NCHW",auto_pad:h,dilations:c?Array.from(n().subarray(Number(c)>>>0,Number(g)>>>0)):[],group:$,kernel_shape:T?Array.from(n().subarray(Number(T)>>>0,Number(O)>>>0)):[],pads:D?Array.from(n().subarray(Number(D)>>>0,Number(W)>>>0)):[],strides:V?Array.from(n().subarray(Number(V)>>>0,Number(Z)>>>0)):[],w_is_const:()=>!!r()[Number(he)>>>0],activation:xe(A),activation_params:ne?Array.from(d().subarray(Number(ne)>>>0,Number($e)>>>0)):[]})},931002:o=>{l.kb("Gelu",o,void 0)},931054:(o,h,c,g,$,T,O,D,W)=>{l.kb("GroupQueryAttention",o,{numHeads:h,kvNumHeads:c,scale:g,softcap:$,doRotary:T,rotaryInterleaved:O,smoothSoftmax:D,localWindowSize:W})},931271:(o,h,c,g)=>{l.kb("LayerNormalization",o,{axis:h,epsilon:c,simplified:!!g})},931382:(o,h,c,g)=>{l.kb("LayerNormalization",o,{axis:h,epsilon:c,simplified:!!g})},931493:(o,h,c,g,$,T)=>{l.kb("MatMulNBits",o,{k:h,n:c,accuracyLevel:g,bits:$,blockSize:T})},931620:(o,h,c,g,$,T)=>{l.kb("MultiHeadAttention",o,{numHeads:h,isUnidirectional:c,maskFilterValue:g,scale:$,doRotary:T})},931779:(o,h)=>{l.kb("QuickGelu",o,{alpha:h})},931843:(o,h,c,g,$)=>{l.kb("RotaryEmbedding",o,{interleaved:!!h,numHeads:c,rotaryEmbeddingDim:g,scale:$})},931982:(o,h,c)=>{l.kb("SkipLayerNormalization",o,{epsilon:h,simplified:!!c})},932084:(o,h,c)=>{l.kb("SkipLayerNormalization",o,{epsilon:h,simplified:!!c})},932186:(o,h,c,g)=>{l.kb("GatherBlockQuantized",o,{gatherAxis:h,quantizeAxis:c,blockSize:g})},932307:o=>{l.$b(o)},932341:(o,h)=>l.cc(Number(o),Number(h),l.Gb.hc,l.Gb.errors)};function Cc(o,h,c){return Dn(async()=>{await l.Yb(Number(o),Number(h),Number(c))})}function zc(){return typeof wasmOffsetConverter<"u"}function Hr(o){this.name="ExitStatus",this.message=`Program terminated with exit(${o})`,this.status=o}var Gr=o=>{o.terminate(),o.onmessage=()=>{}},tn=o=>{ot.length==0&&(un(),on(ot[0]));var h=ot.pop();if(!h)return 6;_t.push(h),Ke[o.Bb]=h,h.Bb=o.Bb;var c={cmd:"run",start_routine:o.ic,arg:o.Rb,pthread_ptr:o.Bb};return h.postMessage(c,o.nc),0},yt=0,ye=(o,h,...c)=>{for(var g=2*c.length,$=li(),T=ui(8*g),O=T>>>3,D=0;D<c.length;D++){var W=c[D];typeof W=="bigint"?(ve[O+2*D]=1n,ve[O+2*D+1]=W):(ve[O+2*D]=0n,p()[O+2*D+1>>>0]=W)}return o=ns(o,0,g,T,h),yr($),o};function Fr(o){if(v)return ye(0,1,o);if(se=o,!(0<yt)){for(var h of _t)Gr(h);for(h of ot)Gr(h);ot=[],_t=[],Ke=[],Ne=!0}E(0,new Hr(o))}function rn(o){if(v)return ye(1,0,o);jr(o)}var jr=o=>{if(se=o,v)throw rn(o),"unwind";Fr(o)},ot=[],_t=[],an=[],Ke={},nn=o=>{var h=o.Bb;delete Ke[h],ot.push(o),_t.splice(_t.indexOf(o),1),o.Bb=0,oi(h)};function sn(){an.forEach(o=>o())}var on=o=>new Promise(h=>{o.onmessage=$=>{var T=($=$.data).cmd;if($.targetThread&&$.targetThread!=Rt()){var O=Ke[$.targetThread];O?O.postMessage($,$.transferList):K(`Internal error! Worker sent a message "${T}" to target pthread ${$.targetThread}, but that thread no longer exists!`)}else T==="checkMailbox"?sr():T==="spawnThread"?tn($):T==="cleanupThread"?nn(Ke[$.thread]):T==="killThread"?($=$.thread,T=Ke[$],delete Ke[$],Gr(T),oi($),_t.splice(_t.indexOf(T),1),T.Bb=0):T==="cancelThread"?Ke[$.thread].postMessage({cmd:"cancel"}):T==="loaded"?(o.loaded=!0,h(o)):T==="alert"?alert(`Thread ${$.threadId}: ${$.text}`):$.target==="setimmediate"?o.postMessage($):T==="callHandler"?l[$.handler](...$.args):T&&K(`worker sent an unknown command ${T}`)},o.onerror=$=>{throw K(`worker sent an error! ${$.filename}:${$.lineno}: ${$.message}`),$};var c,g=[];for(c of[])l.hasOwnProperty(c)&&g.push(c);o.postMessage({cmd:"load",handlers:g,wasmMemory:U,wasmModule:X})});function un(){var o=new Worker(import.meta.url.startsWith("file:")?new URL(""+new URL("../assets/ort.webgpu.bundle.min.75215d94.mjs",import.meta.url).href,self.location):new URL(import.meta.url),{type:"module",workerData:"em-pthread",name:"em-pthread"});ot.push(o)}var nr=o=>{for(;0<o.length;)o.shift()(l)},Ac=()=>{var o=Rt(),h=u()[o+52>>>2>>>0];o=u()[o+56>>>2>>>0],os(h,h-o),yr(h)},Oc=(o,h)=>{yt=0,o=us(o,h),0<yt?se=o:gr(o)};class Rc{constructor(h){this.Kb=h-24}}function Bc(o,h,c){var g=new Rc(o>>>=0);throw h>>>=0,c>>>=0,u()[g.Kb+16>>>2>>>0]=0,u()[g.Kb+4>>>2>>>0]=h,u()[g.Kb+8>>>2>>>0]=c,o}function ln(o,h,c,g){return v?ye(2,1,o,h,c,g):dn(o,h,c,g)}function dn(o,h,c,g){if(o>>>=0,h>>>=0,c>>>=0,g>>>=0,x===void 0)return K("Current environment does not support SharedArrayBuffer, pthreads are not available!"),6;var $=[];return v&&$.length===0?ln(o,h,c,g):(o={ic:c,Bb:o,Rb:g,nc:$},v?(o.Nb="spawnThread",postMessage(o,$),0):tn(o))}var pn=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,hn=(o,h,c)=>{var g=(h>>>=0)+c;for(c=h;o[c]&&!(c>=g);)++c;if(16<c-h&&o.buffer&&pn)return pn.decode(o.buffer instanceof x?o.slice(h,c):o.subarray(h,c));for(g="";h<c;){var $=o[h++];if(128&$){var T=63&o[h++];if((224&$)==192)g+=String.fromCharCode((31&$)<<6|T);else{var O=63&o[h++];65536>($=(240&$)==224?(15&$)<<12|T<<6|O:(7&$)<<18|T<<12|O<<6|63&o[h++])?g+=String.fromCharCode($):($-=65536,g+=String.fromCharCode(55296|$>>10,56320|1023&$))}}else g+=String.fromCharCode($)}return g},xe=(o,h)=>(o>>>=0)?hn(i(),o,h):"";function cn(o,h,c){return v?ye(3,1,o,h,c):0}function fn(o,h){if(v)return ye(4,1,o,h)}var Kr=o=>{for(var h=0,c=0;c<o.length;++c){var g=o.charCodeAt(c);127>=g?h++:2047>=g?h+=2:55296<=g&&57343>=g?(h+=4,++c):h+=3}return h},mn=(o,h,c,g)=>{if(!(0<g))return 0;var $=c>>>=0;g=c+g-1;for(var T=0;T<o.length;++T){var O=o.charCodeAt(T);if(55296<=O&&57343>=O&&(O=65536+((1023&O)<<10)|1023&o.charCodeAt(++T)),127>=O){if(c>=g)break;h[c++>>>0]=O}else{if(2047>=O){if(c+1>=g)break;h[c++>>>0]=192|O>>6}else{if(65535>=O){if(c+2>=g)break;h[c++>>>0]=224|O>>12}else{if(c+3>=g)break;h[c++>>>0]=240|O>>18,h[c++>>>0]=128|O>>12&63}h[c++>>>0]=128|O>>6&63}h[c++>>>0]=128|63&O}}return h[c>>>0]=0,c-$},At=(o,h,c)=>mn(o,i(),h,c);function gn(o,h){if(v)return ye(5,1,o,h)}function yn(o,h,c){if(v)return ye(6,1,o,h,c)}function _n(o,h,c){return v?ye(7,1,o,h,c):0}function bn(o,h){if(v)return ye(8,1,o,h)}function $n(o,h,c){if(v)return ye(9,1,o,h,c)}function wn(o,h,c,g){if(v)return ye(10,1,o,h,c,g)}function vn(o,h,c,g){if(v)return ye(11,1,o,h,c,g)}function xn(o,h,c,g){if(v)return ye(12,1,o,h,c,g)}function kn(o){if(v)return ye(13,1,o)}function Sn(o,h){if(v)return ye(14,1,o,h)}function Tn(o,h,c){if(v)return ye(15,1,o,h,c)}var In,ut,Dc=()=>{st("")},Qe=o=>{for(var h="";i()[o>>>0];)h+=In[i()[o++>>>0]];return h},Qr={},Yr={};function rt(o,h,c={}){if(!("argPackAdvance"in h))throw new TypeError("registerType registeredInstance requires argPackAdvance");return function(g,$,T={}){var O=$.name;if(!g)throw new ut(`type "${O}" must have a positive integer typeid pointer`);if(Yr.hasOwnProperty(g)){if(T.Tb)return;throw new ut(`Cannot register type '${O}' twice`)}Yr[g]=$,Qr.hasOwnProperty(g)&&($=Qr[g],delete Qr[g],$.forEach(D=>D()))}(o,h,c)}var En=(o,h,c)=>{switch(h){case 1:return c?g=>r()[g>>>0]:g=>i()[g>>>0];case 2:return c?g=>a()[g>>>1>>>0]:g=>s()[g>>>1>>>0];case 4:return c?g=>n()[g>>>2>>>0]:g=>u()[g>>>2>>>0];case 8:return c?g=>ve[g>>>3]:g=>Me[g>>>3];default:throw new TypeError(`invalid integer width (${h}): ${o}`)}};function Mc(o,h,c){c>>>=0,rt(o>>>=0,{name:h=Qe(h>>>0),fromWireType:g=>g,toWireType:function(g,$){if(typeof $!="bigint"&&typeof $!="number")throw $=$===null?"null":(g=typeof $)=="object"||g==="array"||g==="function"?$.toString():""+$,new TypeError(`Cannot convert "${$}" to ${this.name}`);return typeof $=="number"&&($=BigInt($)),$},argPackAdvance:lt,readValueFromPointer:En(h,c,h.indexOf("u")==-1),Eb:null})}var lt=8;function Nc(o,h,c,g){rt(o>>>=0,{name:h=Qe(h>>>0),fromWireType:function($){return!!$},toWireType:function($,T){return T?c:g},argPackAdvance:lt,readValueFromPointer:function($){return this.fromWireType(i()[$>>>0])},Eb:null})}var Zr=[],it=[];function Xr(o){9<(o>>>=0)&&--it[o+1]==0&&(it[o]=void 0,Zr.push(o))}var Oe=o=>{if(!o)throw new ut("Cannot use deleted val. handle = "+o);return it[o]},Pe=o=>{switch(o){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let h=Zr.pop()||it.length;return it[h]=o,it[h+1]=1,h}};function Jr(o){return this.fromWireType(u()[o>>>2>>>0])}var Pc={name:"emscripten::val",fromWireType:o=>{var h=Oe(o);return Xr(o),h},toWireType:(o,h)=>Pe(h),argPackAdvance:lt,readValueFromPointer:Jr,Eb:null};function Uc(o){return rt(o>>>0,Pc)}var Wc=(o,h)=>{switch(h){case 4:return function(c){return this.fromWireType(d()[c>>>2>>>0])};case 8:return function(c){return this.fromWireType(p()[c>>>3>>>0])};default:throw new TypeError(`invalid float width (${h}): ${o}`)}};function qc(o,h,c){c>>>=0,rt(o>>>=0,{name:h=Qe(h>>>0),fromWireType:g=>g,toWireType:(g,$)=>$,argPackAdvance:lt,readValueFromPointer:Wc(h,c),Eb:null})}function Lc(o,h,c,g,$){if(o>>>=0,c>>>=0,h=Qe(h>>>0),$===-1&&($=4294967295),$=D=>D,g===0){var T=32-8*c;$=D=>D<<T>>>T}var O=h.includes("unsigned")?function(D,W){return W>>>0}:function(D,W){return W};rt(o,{name:h,fromWireType:$,toWireType:O,argPackAdvance:lt,readValueFromPointer:En(h,c,g!==0),Eb:null})}function Vc(o,h,c){function g(T){var O=u()[T>>>2>>>0];return T=u()[T+4>>>2>>>0],new $(r().buffer,T,O)}var $=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][h];rt(o>>>=0,{name:c=Qe(c>>>0),fromWireType:g,argPackAdvance:lt,readValueFromPointer:g},{Tb:!0})}function Hc(o,h){o>>>=0;var c=(h=Qe(h>>>0))==="std::string";rt(o,{name:h,fromWireType:function(g){var $=u()[g>>>2>>>0],T=g+4;if(c)for(var O=T,D=0;D<=$;++D){var W=T+D;if(D==$||i()[W>>>0]==0){if(O=xe(O,W-O),V===void 0)var V=O;else V+=String.fromCharCode(0),V+=O;O=W+1}}else{for(V=Array($),D=0;D<$;++D)V[D]=String.fromCharCode(i()[T+D>>>0]);V=V.join("")}return Ze(g),V},toWireType:function(g,$){$ instanceof ArrayBuffer&&($=new Uint8Array($));var T=typeof $=="string";if(!(T||$ instanceof Uint8Array||$ instanceof Uint8ClampedArray||$ instanceof Int8Array))throw new ut("Cannot pass non-string to std::string");var O=c&&T?Kr($):$.length,D=mr(4+O+1),W=D+4;if(u()[D>>>2>>>0]=O,c&&T)At($,W,O+1);else if(T)for(T=0;T<O;++T){var V=$.charCodeAt(T);if(255<V)throw Ze(W),new ut("String has UTF-16 code units that do not fit in 8 bits");i()[W+T>>>0]=V}else for(T=0;T<O;++T)i()[W+T>>>0]=$[T];return g!==null&&g.push(Ze,D),D},argPackAdvance:lt,readValueFromPointer:Jr,Eb(g){Ze(g)}})}var Cn=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Gc=(o,h)=>{for(var c=o>>1,g=c+h/2;!(c>=g)&&s()[c>>>0];)++c;if(32<(c<<=1)-o&&Cn)return Cn.decode(i().slice(o,c));for(c="",g=0;!(g>=h/2);++g){var $=a()[o+2*g>>>1>>>0];if($==0)break;c+=String.fromCharCode($)}return c},Fc=(o,h,c)=>{if(c??(c=2147483647),2>c)return 0;var g=h;c=(c-=2)<2*o.length?c/2:o.length;for(var $=0;$<c;++$){var T=o.charCodeAt($);a()[h>>>1>>>0]=T,h+=2}return a()[h>>>1>>>0]=0,h-g},jc=o=>2*o.length,Kc=(o,h)=>{for(var c=0,g="";!(c>=h/4);){var $=n()[o+4*c>>>2>>>0];if($==0)break;++c,65536<=$?($-=65536,g+=String.fromCharCode(55296|$>>10,56320|1023&$)):g+=String.fromCharCode($)}return g},Qc=(o,h,c)=>{if(h>>>=0,c??(c=2147483647),4>c)return 0;var g=h;c=g+c-4;for(var $=0;$<o.length;++$){var T=o.charCodeAt($);if(55296<=T&&57343>=T&&(T=65536+((1023&T)<<10)|1023&o.charCodeAt(++$)),n()[h>>>2>>>0]=T,(h+=4)+4>c)break}return n()[h>>>2>>>0]=0,h-g},Yc=o=>{for(var h=0,c=0;c<o.length;++c){var g=o.charCodeAt(c);55296<=g&&57343>=g&&++c,h+=4}return h};function Zc(o,h,c){if(o>>>=0,h>>>=0,c=Qe(c>>>=0),h===2)var g=Gc,$=Fc,T=jc,O=D=>s()[D>>>1>>>0];else h===4&&(g=Kc,$=Qc,T=Yc,O=D=>u()[D>>>2>>>0]);rt(o,{name:c,fromWireType:D=>{for(var W,V=u()[D>>>2>>>0],Z=D+4,ue=0;ue<=V;++ue){var he=D+4+ue*h;ue!=V&&O(he)!=0||(Z=g(Z,he-Z),W===void 0?W=Z:(W+=String.fromCharCode(0),W+=Z),Z=he+h)}return Ze(D),W},toWireType:(D,W)=>{if(typeof W!="string")throw new ut(`Cannot pass non-string to C++ string type ${c}`);var V=T(W),Z=mr(4+V+h);return u()[Z>>>2>>>0]=V/h,$(W,Z+4,V+h),D!==null&&D.push(Ze,Z),Z},argPackAdvance:lt,readValueFromPointer:Jr,Eb(D){Ze(D)}})}function Xc(o,h){rt(o>>>=0,{Ub:!0,name:h=Qe(h>>>0),argPackAdvance:0,fromWireType:()=>{},toWireType:()=>{}})}var Jc=()=>1;function ef(o){si(o>>>0,!b,1,!_,131072,!1),sn()}var zn=o=>{if(!Ne)try{if(o(),!(0<yt))try{v?gr(se):jr(se)}catch(h){h instanceof Hr||h=="unwind"||E(0,h)}}catch(h){h instanceof Hr||h=="unwind"||E(0,h)}};function ei(o){o>>>=0,typeof Atomics.oc=="function"&&(Atomics.oc(n(),o>>>2,o).value.then(sr),o+=128,Atomics.store(n(),o>>>2,1))}var sr=()=>{var o=Rt();o&&(ei(o),zn(ss))};function tf(o,h){(o>>>=0)==h>>>0?setTimeout(sr):v?postMessage({targetThread:o,cmd:"checkMailbox"}):(o=Ke[o])&&o.postMessage({cmd:"checkMailbox"})}var ti=[];function rf(o,h,c,g,$){for(h>>>=0,g/=2,ti.length=g,c=$>>>0>>>3,$=0;$<g;$++)ti[$]=ve[c+2*$]?ve[c+2*$+1]:p()[c+2*$+1>>>0];return(h?Vr[h]:jf[o])(...ti)}function af(o){o>>>=0,v?postMessage({cmd:"cleanupThread",thread:o}):nn(Ke[o])}function nf(o){}var or=(o,h)=>{var c=Yr[o];if(c===void 0)throw o=rs(o),c=Qe(o),Ze(o),new ut(`${h} has unknown type ${c}`);return c},An=(o,h,c)=>{var g=[];return o=o.toWireType(g,c),g.length&&(u()[h>>>2>>>0]=Pe(g)),o};function sf(o,h,c){return h>>>=0,c>>>=0,o=Oe(o>>>0),h=or(h,"emval::as"),An(h,c,o)}function of(o,h){return h>>>=0,o=Oe(o>>>0),(h=or(h,"emval::as")).toWireType(null,o)}var ur=o=>{try{o()}catch(h){st(h)}},dt=0,Ye=null,On=0,lr=[],Rn={},Bn={},uf=0,ri=null,lf=[];function Dn(o){return function(h){if(!Ne){if(dt===0){var c=!1,g=!1;h(($=0)=>{if(!Ne&&(On=$,c=!0,g)){dt=2,ur(()=>ps(Ye)),typeof Browser<"u"&&Browser.Lb.Sb&&Browser.Lb.resume(),$=!1;try{var T=function(){var W=n()[Ye+8>>>2>>>0];return W=Q[Bn[W]],--yt,W()}()}catch(W){T=W,$=!0}var O=!1;if(!Ye){var D=ri;D&&(ri=null,($?D.reject:D.resolve)(T),O=!0)}if($&&!O)throw T}}),g=!0,c||(dt=1,Ye=function(){var $=mr(65548),T=$+12;u()[$>>>2>>>0]=T,u()[$+4>>>2>>>0]=T+65536,T=lr[0];var O=Rn[T];return O===void 0&&(O=uf++,Rn[T]=O,Bn[O]=T),T=O,n()[$+8>>>2>>>0]=T,$}(),typeof Browser<"u"&&Browser.Lb.Sb&&Browser.Lb.pause(),ur(()=>ls(Ye)))}else dt===2?(dt=0,ur(hs),Ze(Ye),Ye=null,lf.forEach(zn)):st(`invalid state: ${dt}`);return On}}(h=>{o().then(h)})}function df(o){return o>>>=0,Dn(()=>(o=Oe(o)).then(Pe))}var dr=[];function pf(o,h,c,g){return c>>>=0,g>>>=0,(o=dr[o>>>0])(null,h=Oe(h>>>0),c,g)}var hf={},pr=o=>{var h=hf[o];return h===void 0?Qe(o):h};function cf(o,h,c,g,$){return c>>>=0,g>>>=0,$>>>=0,(o=dr[o>>>0])(h=Oe(h>>>0),h[c=pr(c)],g,$)}var Mn=()=>typeof globalThis=="object"?globalThis:Function("return this")();function ff(o){return(o>>>=0)==0?Pe(Mn()):(o=pr(o),Pe(Mn()[o]))}var mf=o=>{var h=dr.length;return dr.push(o),h},gf=(o,h)=>{for(var c=Array(o),g=0;g<o;++g)c[g]=or(u()[h+4*g>>>2>>>0],"parameter "+g);return c},Nn=(o,h)=>Object.defineProperty(h,"name",{value:o});function yf(o,h,c){var g=(h=gf(o,h>>>0)).shift();o--;var $=`return function (obj, func, destructorsRef, args) {
`,T=0,O=[];c===0&&O.push("obj");for(var D=["retType"],W=[g],V=0;V<o;++V)O.push("arg"+V),D.push("argType"+V),W.push(h[V]),$+=`  var arg${V} = argType${V}.readValueFromPointer(args${T?"+"+T:""});
`,T+=h[V].argPackAdvance;return $+=`  var rv = ${c===1?"new func":"func.call"}(${O.join(", ")});
`,g.Ub||(D.push("emval_returnValue"),W.push(An),$+=`  return emval_returnValue(retType, destructorsRef, rv);
`),D.push($+`};
`),o=function(Z){var ue=Function;if(!(ue instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof ue} which is not a function`);var he=Nn(ue.name||"unknownFunctionName",function(){});return he.prototype=ue.prototype,he=new he,(Z=ue.apply(he,Z))instanceof Object?Z:he}(D)(...W),c=`methodCaller<(${h.map(Z=>Z.name).join(", ")}) => ${g.name}>`,mf(Nn(c,o))}function _f(o){return o=pr(o>>>0),Pe(l[o])}function bf(o,h){return h>>>=0,o=Oe(o>>>0),h=Oe(h),Pe(o[h])}function $f(o){9<(o>>>=0)&&(it[o+1]+=1)}function wf(){return Pe([])}function vf(o){o=Oe(o>>>0);for(var h=Array(o.length),c=0;c<o.length;c++)h[c]=o[c];return Pe(h)}function xf(o){return Pe(pr(o>>>0))}function kf(){return Pe({})}function Sf(o){for(var h=Oe(o>>>=0);h.length;){var c=h.pop();h.pop()(c)}Xr(o)}function Tf(o,h,c){h>>>=0,c>>>=0,o=Oe(o>>>0),h=Oe(h),c=Oe(c),o[h]=c}function If(o,h){return h>>>=0,o=(o=or(o>>>0,"_emval_take_value")).readValueFromPointer(h),Pe(o)}function Ef(o,h){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),h>>>=0,o=new Date(1e3*o),n()[h>>>2>>>0]=o.getUTCSeconds(),n()[h+4>>>2>>>0]=o.getUTCMinutes(),n()[h+8>>>2>>>0]=o.getUTCHours(),n()[h+12>>>2>>>0]=o.getUTCDate(),n()[h+16>>>2>>>0]=o.getUTCMonth(),n()[h+20>>>2>>>0]=o.getUTCFullYear()-1900,n()[h+24>>>2>>>0]=o.getUTCDay(),o=(o.getTime()-Date.UTC(o.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,n()[h+28>>>2>>>0]=o}var Ot=o=>o%4==0&&(o%100!=0||o%400==0),Pn=[0,31,60,91,121,152,182,213,244,274,305,335],Un=[0,31,59,90,120,151,181,212,243,273,304,334];function Cf(o,h){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),h>>>=0,o=new Date(1e3*o),n()[h>>>2>>>0]=o.getSeconds(),n()[h+4>>>2>>>0]=o.getMinutes(),n()[h+8>>>2>>>0]=o.getHours(),n()[h+12>>>2>>>0]=o.getDate(),n()[h+16>>>2>>>0]=o.getMonth(),n()[h+20>>>2>>>0]=o.getFullYear()-1900,n()[h+24>>>2>>>0]=o.getDay();var c=(Ot(o.getFullYear())?Pn:Un)[o.getMonth()]+o.getDate()-1|0;n()[h+28>>>2>>>0]=c,n()[h+36>>>2>>>0]=-60*o.getTimezoneOffset(),c=new Date(o.getFullYear(),6,1).getTimezoneOffset();var g=new Date(o.getFullYear(),0,1).getTimezoneOffset();o=0|(c!=g&&o.getTimezoneOffset()==Math.min(g,c)),n()[h+32>>>2>>>0]=o}function zf(o){o>>>=0;var h=new Date(n()[o+20>>>2>>>0]+1900,n()[o+16>>>2>>>0],n()[o+12>>>2>>>0],n()[o+8>>>2>>>0],n()[o+4>>>2>>>0],n()[o>>>2>>>0],0),c=n()[o+32>>>2>>>0],g=h.getTimezoneOffset(),$=new Date(h.getFullYear(),6,1).getTimezoneOffset(),T=new Date(h.getFullYear(),0,1).getTimezoneOffset(),O=Math.min(T,$);return 0>c?n()[o+32>>>2>>>0]=+($!=T&&O==g):0<c!=(O==g)&&($=Math.max(T,$),h.setTime(h.getTime()+6e4*((0<c?O:$)-g))),n()[o+24>>>2>>>0]=h.getDay(),c=(Ot(h.getFullYear())?Pn:Un)[h.getMonth()]+h.getDate()-1|0,n()[o+28>>>2>>>0]=c,n()[o>>>2>>>0]=h.getSeconds(),n()[o+4>>>2>>>0]=h.getMinutes(),n()[o+8>>>2>>>0]=h.getHours(),n()[o+12>>>2>>>0]=h.getDate(),n()[o+16>>>2>>>0]=h.getMonth(),n()[o+20>>>2>>>0]=h.getYear(),o=h.getTime(),BigInt(isNaN(o)?-1:o/1e3)}function Wn(o,h,c,g,$,T,O){return v?ye(16,1,o,h,c,g,$,T,O):-52}function qn(o,h,c,g,$,T){if(v)return ye(17,1,o,h,c,g,$,T)}function Af(o,h,c,g){o>>>=0,h>>>=0,c>>>=0,g>>>=0;var $=new Date().getFullYear(),T=new Date($,0,1),O=new Date($,6,1);$=T.getTimezoneOffset();var D=O.getTimezoneOffset(),W=Math.max($,D);u()[o>>>2>>>0]=60*W,n()[h>>>2>>>0]=+($!=D),T=(o=V=>V.toLocaleTimeString(void 0,{hour12:!1,timeZoneName:"short"}).split(" ")[1])(T),O=o(O),D<$?(At(T,c,17),At(O,g,17)):(At(T,g,17),At(O,c,17))}var ii=[],Ln=(o,h)=>{ii.length=0;for(var c;c=i()[o++>>>0];){var g=c!=105;h+=(g&=c!=112)&&h%8?4:0,ii.push(c==112?u()[h>>>2>>>0]:c==106?ve[h>>>3]:c==105?n()[h>>>2>>>0]:p()[h>>>3>>>0]),h+=g?8:4}return ii};function Of(o,h,c){return o>>>=0,h=Ln(h>>>0,c>>>0),Vr[o](...h)}function Rf(o,h,c){return o>>>=0,h=Ln(h>>>0,c>>>0),Vr[o](...h)}var Bf=()=>{},Df=()=>Date.now();function Mf(o,h){return K(xe(o>>>0,h>>>0))}var Vn,Nf=()=>{throw yt+=1,"unwind"};function Pf(){return 4294901760}Vn=()=>performance.timeOrigin+performance.now();var Uf=()=>navigator.hardwareConcurrency;function Wf(){return st("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function qf(o){o>>>=0;var h=i().length;if(o<=h||4294901760<o)return!1;for(var c=1;4>=c;c*=2){var g=h*(1+.2/c);g=Math.min(g,o+100663296);var $=Math;g=Math.max(o,g);e:{$=($.min.call($,4294901760,g+(65536-g%65536)%65536)-U.buffer.byteLength+65535)/65536;try{U.grow($),me();var T=1;break e}catch{}T=void 0}if(T)return!0}return!1}var hr=()=>(st("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),qt={},Hn=o=>{o.forEach(h=>{hr()})};function Lf(){var o=Error().stack.toString().split(`
`);return o[0]=="Error"&&o.shift(),Hn(o),qt.Qb=hr(),qt.fc=o,qt.Qb}function Vf(o,h,c){if(o>>>=0,h>>>=0,qt.Qb==o)var g=qt.fc;else(g=Error().stack.toString().split(`
`))[0]=="Error"&&g.shift(),Hn(g);for(var $=3;g[$]&&hr()!=o;)++$;for(o=0;o<c&&g[o+$];++o)n()[h+4*o>>>2>>>0]=hr();return o}var ai,ni={},Gn=()=>{if(!ai){var o,h={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(o in ni)ni[o]===void 0?delete h[o]:h[o]=ni[o];var c=[];for(o in h)c.push(`${o}=${h[o]}`);ai=c}return ai};function Fn(o,h){if(v)return ye(18,1,o,h);o>>>=0,h>>>=0;var c=0;return Gn().forEach((g,$)=>{var T=h+c;for($=u()[o+4*$>>>2>>>0]=T,T=0;T<g.length;++T)r()[$++>>>0]=g.charCodeAt(T);r()[$>>>0]=0,c+=g.length+1}),0}function jn(o,h){if(v)return ye(19,1,o,h);o>>>=0,h>>>=0;var c=Gn();u()[o>>>2>>>0]=c.length;var g=0;return c.forEach($=>g+=$.length+1),u()[h>>>2>>>0]=g,0}function Kn(o){return v?ye(20,1,o):52}function Qn(o,h,c,g){return v?ye(21,1,o,h,c,g):52}function Yn(o,h,c,g){return v?ye(22,1,o,h,c,g):70}var Hf=[null,[],[]];function Zn(o,h,c,g){if(v)return ye(23,1,o,h,c,g);h>>>=0,c>>>=0,g>>>=0;for(var $=0,T=0;T<c;T++){var O=u()[h>>>2>>>0],D=u()[h+4>>>2>>>0];h+=8;for(var W=0;W<D;W++){var V=i()[O+W>>>0],Z=Hf[o];V===0||V===10?((o===1?ee:K)(hn(Z,0)),Z.length=0):Z.push(V)}$+=D}return u()[g>>>2>>>0]=$,0}var Xn=[31,29,31,30,31,30,31,31,30,31,30,31],Jn=[31,28,31,30,31,30,31,31,30,31,30,31],Gf=(o,h)=>{r().set(o,h>>>0)};function es(o,h,c,g){function $(A,ne,$e){for(A=typeof A=="number"?A.toString():A||"";A.length<ne;)A=$e[0]+A;return A}function T(A,ne){return $(A,ne,"0")}function O(A,ne){function $e(fs){return 0>fs?-1:0<fs?1:0}var bt;return(bt=$e(A.getFullYear()-ne.getFullYear()))===0&&(bt=$e(A.getMonth()-ne.getMonth()))===0&&(bt=$e(A.getDate()-ne.getDate())),bt}function D(A){switch(A.getDay()){case 0:return new Date(A.getFullYear()-1,11,29);case 1:return A;case 2:return new Date(A.getFullYear(),0,3);case 3:return new Date(A.getFullYear(),0,2);case 4:return new Date(A.getFullYear(),0,1);case 5:return new Date(A.getFullYear()-1,11,31);case 6:return new Date(A.getFullYear()-1,11,30)}}function W(A){var ne=A.Cb;for(A=new Date(new Date(A.Db+1900,0,1).getTime());0<ne;){var $e=A.getMonth(),bt=(Ot(A.getFullYear())?Xn:Jn)[$e];if(!(ne>bt-A.getDate())){A.setDate(A.getDate()+ne);break}ne-=bt-A.getDate()+1,A.setDate(1),11>$e?A.setMonth($e+1):(A.setMonth(0),A.setFullYear(A.getFullYear()+1))}return $e=new Date(A.getFullYear()+1,0,4),ne=D(new Date(A.getFullYear(),0,4)),$e=D($e),0>=O(ne,A)?0>=O($e,A)?A.getFullYear()+1:A.getFullYear():A.getFullYear()-1}o>>>=0,h>>>=0,c>>>=0,g>>>=0;var V=u()[g+40>>>2>>>0];for(var Z in g={lc:n()[g>>>2>>>0],kc:n()[g+4>>>2>>>0],Ib:n()[g+8>>>2>>>0],Mb:n()[g+12>>>2>>>0],Jb:n()[g+16>>>2>>>0],Db:n()[g+20>>>2>>>0],vb:n()[g+24>>>2>>>0],Cb:n()[g+28>>>2>>>0],sc:n()[g+32>>>2>>>0],jc:n()[g+36>>>2>>>0],mc:V?xe(V):""},c=xe(c),V={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"})c=c.replace(new RegExp(Z,"g"),V[Z]);var ue="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),he="January February March April May June July August September October November December".split(" ");for(Z in V={"%a":A=>ue[A.vb].substring(0,3),"%A":A=>ue[A.vb],"%b":A=>he[A.Jb].substring(0,3),"%B":A=>he[A.Jb],"%C":A=>T((A.Db+1900)/100|0,2),"%d":A=>T(A.Mb,2),"%e":A=>$(A.Mb,2," "),"%g":A=>W(A).toString().substring(2),"%G":W,"%H":A=>T(A.Ib,2),"%I":A=>((A=A.Ib)==0?A=12:12<A&&(A-=12),T(A,2)),"%j":A=>{for(var ne=0,$e=0;$e<=A.Jb-1;ne+=(Ot(A.Db+1900)?Xn:Jn)[$e++]);return T(A.Mb+ne,3)},"%m":A=>T(A.Jb+1,2),"%M":A=>T(A.kc,2),"%n":()=>`
`,"%p":A=>0<=A.Ib&&12>A.Ib?"AM":"PM","%S":A=>T(A.lc,2),"%t":()=>"	","%u":A=>A.vb||7,"%U":A=>T(Math.floor((A.Cb+7-A.vb)/7),2),"%V":A=>{var ne=Math.floor((A.Cb+7-(A.vb+6)%7)/7);if(2>=(A.vb+371-A.Cb-2)%7&&ne++,ne)ne==53&&(($e=(A.vb+371-A.Cb)%7)==4||$e==3&&Ot(A.Db)||(ne=1));else{ne=52;var $e=(A.vb+7-A.Cb-1)%7;($e==4||$e==5&&Ot(A.Db%400-1))&&ne++}return T(ne,2)},"%w":A=>A.vb,"%W":A=>T(Math.floor((A.Cb+7-(A.vb+6)%7)/7),2),"%y":A=>(A.Db+1900).toString().substring(2),"%Y":A=>A.Db+1900,"%z":A=>{var ne=0<=(A=A.jc);return A=Math.abs(A)/60,(ne?"+":"-")+("0000"+(A/60*100+A%60)).slice(-4)},"%Z":A=>A.mc,"%%":()=>"%"},c=c.replace(/%%/g,"\0\0"),V)c.includes(Z)&&(c=c.replace(new RegExp(Z,"g"),V[Z](g)));return Z=function(A){var ne=Array(Kr(A)+1);return mn(A,ne,0,ne.length),ne}(c=c.replace(/\0\0/g,"%")),Z.length>h?0:(Gf(Z,o),Z.length-1)}function Ff(o,h,c,g){return es(o>>>0,h>>>0,c>>>0,g>>>0)}v||function(){for(var o=l.numThreads-1;o--;)un();ke.unshift(()=>{gt++,function(h){v?h():Promise.all(ot.map(on)).then(h)}(()=>Qa())})}();for(var ts=Array(256),cr=0;256>cr;++cr)ts[cr]=String.fromCharCode(cr);In=ts,ut=l.BindingError=class extends Error{constructor(o){super(o),this.name="BindingError"}},l.InternalError=class extends Error{constructor(o){super(o),this.name="InternalError"}},it.push(0,1,void 0,1,null,1,!0,1,!1,1),l.count_emval_handles=()=>it.length/2-5-Zr.length;var jf=[Fr,rn,ln,cn,fn,gn,yn,_n,bn,$n,wn,vn,xn,kn,Sn,Tn,Wn,qn,Fn,jn,Kn,Qn,Yn,Zn],Q=function(){function o(c,g){return Q=c.exports,Q=function(){var $=Q,T={};for(let[O,D]of Object.entries($))T[O]=typeof D=="function"?(...W)=>{lr.push(O);try{return D(...W)}finally{Ne||(lr.pop(),Ye&&dt===1&&lr.length===0&&(dt=0,yt+=1,ur(ds),typeof Fibers<"u"&&Fibers.tc()))}}:D;return T}(),Q=function(){var $=Q,T=D=>W=>D(W)>>>0,O=D=>()=>D()>>>0;return($=Object.assign({},$)).Da=T($.Da),$.gb=O($.gb),$.ib=T($.ib),$.emscripten_main_runtime_thread_id=O($.emscripten_main_runtime_thread_id),$.tb=T($.tb),$.ub=O($.ub),$}(),an.push(Q.jb),tt.unshift(Q.Ca),X=g,Qa(),Q}var h=en();if(gt++,l.instantiateWasm)try{return l.instantiateWasm(h,o)}catch(c){K(`Module.instantiateWasm callback failed with error: ${c}`),m(c)}return Lr||(Lr=l.locateFile?Ya("ort-wasm-simd-threaded.jsep.wasm")?"ort-wasm-simd-threaded.jsep.wasm":l.locateFile?l.locateFile("ort-wasm-simd-threaded.jsep.wasm",C):C+"ort-wasm-simd-threaded.jsep.wasm":new URL(""+new URL("../assets/ort-wasm-simd-threaded.jsep.d7de0972.wasm",import.meta.url).href,self.location).href),function(c,g){var $=Lr;return R||typeof WebAssembly.instantiateStreaming!="function"||Ya($)||Za($)||typeof fetch!="function"?Ja($,c,g):fetch($,{credentials:"same-origin"}).then(T=>WebAssembly.instantiateStreaming(T,c).then(g,function(O){return K(`wasm streaming compile failed: ${O}`),K("falling back to ArrayBuffer instantiation"),Ja($,c,g)}))}(h,function(c){o(c.instance,c.module)}).catch(m),{}}(),rs=o=>(rs=Q.Da)(o),is=()=>(is=Q.Ea)();l._OrtInit=(o,h)=>(l._OrtInit=Q.Fa)(o,h),l._OrtGetLastError=(o,h)=>(l._OrtGetLastError=Q.Ga)(o,h),l._OrtCreateSessionOptions=(o,h,c,g,$,T,O,D,W,V)=>(l._OrtCreateSessionOptions=Q.Ha)(o,h,c,g,$,T,O,D,W,V),l._OrtAppendExecutionProvider=(o,h)=>(l._OrtAppendExecutionProvider=Q.Ia)(o,h),l._OrtAddFreeDimensionOverride=(o,h,c)=>(l._OrtAddFreeDimensionOverride=Q.Ja)(o,h,c),l._OrtAddSessionConfigEntry=(o,h,c)=>(l._OrtAddSessionConfigEntry=Q.Ka)(o,h,c),l._OrtReleaseSessionOptions=o=>(l._OrtReleaseSessionOptions=Q.La)(o),l._OrtCreateSession=(o,h,c)=>(l._OrtCreateSession=Q.Ma)(o,h,c),l._OrtReleaseSession=o=>(l._OrtReleaseSession=Q.Na)(o),l._OrtGetInputOutputCount=(o,h,c)=>(l._OrtGetInputOutputCount=Q.Oa)(o,h,c),l._OrtGetInputName=(o,h)=>(l._OrtGetInputName=Q.Pa)(o,h),l._OrtGetOutputName=(o,h)=>(l._OrtGetOutputName=Q.Qa)(o,h),l._OrtFree=o=>(l._OrtFree=Q.Ra)(o),l._OrtCreateTensor=(o,h,c,g,$,T)=>(l._OrtCreateTensor=Q.Sa)(o,h,c,g,$,T),l._OrtGetTensorData=(o,h,c,g,$)=>(l._OrtGetTensorData=Q.Ta)(o,h,c,g,$),l._OrtReleaseTensor=o=>(l._OrtReleaseTensor=Q.Ua)(o),l._OrtCreateRunOptions=(o,h,c,g)=>(l._OrtCreateRunOptions=Q.Va)(o,h,c,g),l._OrtAddRunConfigEntry=(o,h,c)=>(l._OrtAddRunConfigEntry=Q.Wa)(o,h,c),l._OrtReleaseRunOptions=o=>(l._OrtReleaseRunOptions=Q.Xa)(o),l._OrtCreateBinding=o=>(l._OrtCreateBinding=Q.Ya)(o),l._OrtBindInput=(o,h,c)=>(l._OrtBindInput=Q.Za)(o,h,c),l._OrtBindOutput=(o,h,c,g)=>(l._OrtBindOutput=Q._a)(o,h,c,g),l._OrtClearBoundOutputs=o=>(l._OrtClearBoundOutputs=Q.$a)(o),l._OrtReleaseBinding=o=>(l._OrtReleaseBinding=Q.ab)(o),l._OrtRunWithBinding=(o,h,c,g,$)=>(l._OrtRunWithBinding=Q.bb)(o,h,c,g,$),l._OrtRun=(o,h,c,g,$,T,O,D)=>(l._OrtRun=Q.cb)(o,h,c,g,$,T,O,D),l._OrtEndProfiling=o=>(l._OrtEndProfiling=Q.db)(o),l._JsepOutput=(o,h,c)=>(l._JsepOutput=Q.eb)(o,h,c),l._JsepGetNodeName=o=>(l._JsepGetNodeName=Q.fb)(o);var fr,Rt=()=>(Rt=Q.gb)(),Ze=l._free=o=>(Ze=l._free=Q.hb)(o),mr=l._malloc=o=>(mr=l._malloc=Q.ib)(o),si=(o,h,c,g,$,T)=>(si=Q.lb)(o,h,c,g,$,T),as=()=>(as=Q.mb)(),ns=(o,h,c,g,$)=>(ns=Q.nb)(o,h,c,g,$),oi=o=>(oi=Q.ob)(o),gr=o=>(gr=Q.pb)(o),ss=()=>(ss=Q.qb)(),os=(o,h)=>(os=Q.rb)(o,h),yr=o=>(yr=Q.sb)(o),ui=o=>(ui=Q.tb)(o),li=()=>(li=Q.ub)(),us=l.dynCall_ii=(o,h)=>(us=l.dynCall_ii=Q.wb)(o,h),ls=o=>(ls=Q.xb)(o),ds=()=>(ds=Q.yb)(),ps=o=>(ps=Q.zb)(o),hs=()=>(hs=Q.Ab)();function cs(){0<gt||(v?(f(l),v||nr(tt),startWorker(l)):(nr(ke),0<gt||fr||(fr=!0,l.calledRun=!0,Ne||(v||nr(tt),f(l),v||nr(qr)))))}return l.___start_em_js=932469,l.___stop_em_js=932715,l.stackSave=()=>li(),l.stackRestore=o=>yr(o),l.stackAlloc=o=>ui(o),l.setValue=function(o,h,c="i8"){switch(c.endsWith("*")&&(c="*"),c){case"i1":case"i8":r()[o>>>0]=h;break;case"i16":a()[o>>>1>>>0]=h;break;case"i32":n()[o>>>2>>>0]=h;break;case"i64":ve[o>>>3]=BigInt(h);break;case"float":d()[o>>>2>>>0]=h;break;case"double":p()[o>>>3>>>0]=h;break;case"*":u()[o>>>2>>>0]=h;break;default:st(`invalid type for setValue: ${c}`)}},l.getValue=function(o,h="i8"){switch(h.endsWith("*")&&(h="*"),h){case"i1":case"i8":return r()[o>>>0];case"i16":return a()[o>>>1>>>0];case"i32":return n()[o>>>2>>>0];case"i64":return ve[o>>>3];case"float":return d()[o>>>2>>>0];case"double":return p()[o>>>3>>>0];case"*":return u()[o>>>2>>>0];default:st(`invalid type for getValue: ${h}`)}},l.UTF8ToString=xe,l.stringToUTF8=At,l.lengthBytesUTF8=Kr,Wt=function o(){fr||cs(),fr||(Wt=o)},cs(),l.PTR_SIZE=4,y}),gd=gi,((e=globalThis.self)==null?void 0:e.name)==="em-pthread"&&gi()}),yi,gs,Re,yd,br,ys,_s,_i,bs,bi,_d,$i,bd,xa=P(()=>{va(),yi=typeof location>"u"?void 0:location.origin,gs=()=>{var e;return(e=import.meta.url)!=null&&e.startsWith("file:")?new URL(new URL(""+new URL("../assets/ort.webgpu.bundle.min.75215d94.mjs",import.meta.url).href,self.location).href,yi).href:import.meta.url},Re=gs(),yd=()=>{if(Re&&!Re.startsWith("blob:"))return Re.substring(0,Re.lastIndexOf("/")+1)},br=(e,t)=>{try{let r=t??Re;return(r?new URL(e,r):new URL(e)).origin===yi}catch{return!1}},ys=(e,t)=>{let r=t??Re;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},_s=(e,t)=>`${t??"./"}${e}`,_i=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},bs=async e=>(await Kf(()=>import(e),[],import.meta.url)).default,bi=(cm(),Rr(cd)).default,_d=async()=>{if(!Re)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(br(Re))return[void 0,bi()];let e=await _i(Re);return[e,bi(e)]},$i=(fm(),Rr(md)).default,bd=async(e,t,r)=>{if(!e&&!t&&$i&&Re&&br(Re))return[void 0,$i];{let i="ort-wasm-simd-threaded.jsep.mjs",a=e??ys(i,t),s=r&&a&&!br(a,t),n=s?await _i(a):a??_s(i,t);return[s?n:void 0,await bs(n)]}}}),wi,$r,Vt,vi,$s,ws,ka,Se,Ct=P(()=>{xa(),$r=!1,Vt=!1,vi=!1,$s=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},ws=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},ka=async e=>{if($r)return Promise.resolve();if(Vt)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(vi)throw new Error("previous call to 'initializeWebAssembly()' failed.");Vt=!0;let t=e.initTimeout,r=e.numThreads;if(!ws())throw new Error("WebAssembly SIMD is not supported in the current environment.");let i=$s();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let a=e.wasmPaths,s=typeof a=="string"?a:void 0,n=a==null?void 0:a.mjs,u=(n==null?void 0:n.href)??n,d=a==null?void 0:a.wasm,p=(d==null?void 0:d.href)??d,f=e.wasmBinary,[m,l]=await bd(u,s,r>1),y=!1,_=[];if(t>0&&_.push(new Promise(b=>{setTimeout(()=>{y=!0,b()},t)})),_.push(new Promise((b,v)=>{let x={numThreads:r};if(f)x.wasmBinary=f;else if(p||s)x.locateFile=w=>p??s+w;else if(u&&u.indexOf("blob:")!==0)x.locateFile=w=>new URL(w,u).href;else if(m){let w=yd();w&&(x.locateFile=S=>w+S)}l(x).then(w=>{Vt=!1,$r=!0,wi=w,b(),m&&URL.revokeObjectURL(m)},w=>{Vt=!1,vi=!0,v(w)})})),await Promise.race(_),y)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Se=()=>{if($r&&wi)return wi;throw new Error("WebAssembly is not initialized yet.")}}),Ee,Dr,pe,Sa=P(()=>{Ct(),Ee=(e,t)=>{let r=Se(),i=r.lengthBytesUTF8(e)+1,a=r._malloc(i);return r.stringToUTF8(e,a,i),t.push(a),a},Dr=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([a,s])=>{let n=t?t+a:a;if(typeof s=="object")Dr(s,n+".",r,i);else if(typeof s=="string"||typeof s=="number")i(n,s.toString());else if(typeof s=="boolean")i(n,s?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof s}`)})},pe=e=>{let t=Se(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetLastError(a,a+i);let s=Number(t.getValue(a,i===4?"i32":"i64")),n=t.getValue(a+i,"*"),u=n?t.UTF8ToString(n):"";throw new Error(`${e} ERROR_CODE: ${s}, ERROR_MESSAGE: ${u}`)}finally{t.stackRestore(r)}}}),$d,mm=P(()=>{Ct(),Sa(),$d=e=>{let t=Se(),r=0,i=[],a=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)a.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)a.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(a.terminate=!1);let s=0;return(e==null?void 0:e.tag)!==void 0&&(s=Ee(e.tag,i)),r=t._OrtCreateRunOptions(a.logSeverityLevel,a.logVerbosityLevel,!!a.terminate,s),r===0&&pe("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Dr(e.extra,"",new WeakSet,(n,u)=>{let d=Ee(n,i),p=Ee(u,i);t._OrtAddRunConfigEntry(r,d,p)!==0&&pe(`Can't set a run config entry: ${n} - ${u}.`)}),[r,i]}catch(s){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(n=>t._free(n)),s}}}),vs,xs,ks,Ss,wd,gm=P(()=>{Ct(),Sa(),vs=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},xs=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},ks=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},Ss=(e,t,r)=>{for(let i of t){let a=typeof i=="string"?i:i.name;switch(a){case"webnn":if(a="WEBNN",typeof i!="string"){let n=i==null?void 0:i.deviceType;if(n){let u=Ee("deviceType",r),d=Ee(n,r);Se()._OrtAddSessionConfigEntry(e,u,d)!==0&&pe(`Can't set a session config entry: 'deviceType' - ${n}.`)}}break;case"webgpu":if(a="JS",typeof i!="string"){let n=i;if(n!=null&&n.preferredLayout){if(n.preferredLayout!=="NCHW"&&n.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${n.preferredLayout}`);let u=Ee("preferredLayout",r),d=Ee(n.preferredLayout,r);Se()._OrtAddSessionConfigEntry(e,u,d)!==0&&pe(`Can't set a session config entry: 'preferredLayout' - ${n.preferredLayout}.`)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let s=Ee(a,r);Se()._OrtAppendExecutionProvider(e,s)!==0&&pe(`Can't append execution provider: ${a}.`)}},wd=e=>{let t=Se(),r=0,i=[],a=e||{};ks(a);try{let s=vs(a.graphOptimizationLevel??"all"),n=xs(a.executionMode??"sequential"),u=typeof a.logId=="string"?Ee(a.logId,i):0,d=a.logSeverityLevel??2;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log serverity level is not valid: ${d}`);let p=a.logVerbosityLevel??0;if(!Number.isInteger(p)||p<0||p>4)throw new Error(`log verbosity level is not valid: ${p}`);let f=typeof a.optimizedModelFilePath=="string"?Ee(a.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(s,!!a.enableCpuMemArena,!!a.enableMemPattern,n,!!a.enableProfiling,0,u,d,p,f),r===0&&pe("Can't create session options."),a.executionProviders&&Ss(r,a.executionProviders,i),a.enableGraphCapture!==void 0){if(typeof a.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${a.enableGraphCapture}`);let m=Ee("enableGraphCapture",i),l=Ee(a.enableGraphCapture.toString(),i);t._OrtAddSessionConfigEntry(r,m,l)!==0&&pe(`Can't set a session config entry: 'enableGraphCapture' - ${a.enableGraphCapture}.`)}if(a.freeDimensionOverrides)for(let[m,l]of Object.entries(a.freeDimensionOverrides)){if(typeof m!="string")throw new Error(`free dimension override name must be a string: ${m}`);if(typeof l!="number"||!Number.isInteger(l)||l<0)throw new Error(`free dimension override value must be a non-negative integer: ${l}`);let y=Ee(m,i);t._OrtAddFreeDimensionOverride(r,y,l)!==0&&pe(`Can't set a free dimension override: ${m} - ${l}.`)}return a.extra!==void 0&&Dr(a.extra,"",new WeakSet,(m,l)=>{let y=Ee(m,i),_=Ee(l,i);t._OrtAddSessionConfigEntry(r,y,_)!==0&&pe(`Can't set a session config entry: ${m} - ${l}.`)}),[r,i]}catch(s){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&pe("Can't release session options."),i.forEach(n=>t._free(n)),s}}}),Xt,St,Mt,Ta,Mr,Ia,Ea,sa,J=P(()=>{Xt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},St=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Mt=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((a,s)=>a*s,1);return r>0?Math.ceil(i*r):void 0},Ta=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Mr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Ia=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Ea=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",sa=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Ca,vd=P(()=>{va(),Ca=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let a=t.body.getReader(),s;try{s=new ArrayBuffer(i)}catch(u){if(u instanceof RangeError){let d=Math.ceil(i/65536);s=new WebAssembly.Memory({initial:d,maximum:d}).buffer}else throw u}let n=0;for(;;){let{done:u,value:d}=await a.read();if(u)break;let p=d.byteLength;new Uint8Array(s,n,p).set(d),n+=p}return new Uint8Array(s,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Ts,Is,Es,Cs,za,zs,ce,nt=P(()=>{J(),Ts=["V","I","W","E","F"],Is=(e,t)=>{console.log(`[${Ts[e]},${new Date().toISOString()}]${t}`)},za=(e,t)=>{Es=e,Cs=t},zs=(e,t)=>{let r=Mr(e),i=Mr(Es);r>=i&&Is(r,typeof t=="function"?t():t)},ce=(...e)=>{Cs&&zs(...e)}}),Aa,xd=P(()=>{J(),Aa=(e,t)=>new(Ta(t))(e)}),Oa=P(()=>{}),xi,wr,vr,As,Os,ki,oa,Rs,kd,ym=P(()=>{nt(),Oa(),xi=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),wr=[],vr=e=>Math.ceil(Number(e)/16)*16,As=e=>{for(let t=0;t<wr.length;t++){let r=wr[t];if(e<=r)return r}return Math.ceil(e/16)*16},Os=1,ki=()=>Os++,oa=async(e,t,r,i)=>{let a=vr(r),s=e.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let n=e.getCommandEncoder();e.endComputePass(),n.copyBufferToBuffer(t,0,s,0,a),e.flush(),await s.mapAsync(GPUMapMode.READ);let u=s.getMappedRange();if(i){let d=i();return d.set(new Uint8Array(u,0,r)),d}else return new Uint8Array(u.slice(0,r))}finally{s.destroy()}},Rs=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of xi)wr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,i=t.byteOffset,a=t.byteLength,s=vr(a),n=this.storageCache.get(e);if(!n)throw new Error("gpu data for uploading does not exist");if(Number(n.originalSize)!==a)throw new Error(`inconsistent data size. gpu data size=${n.originalSize}, data size=${a}`);let u=this.backend.device.createBuffer({mappedAtCreation:!0,size:s,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),d=u.getMappedRange();new Uint8Array(d).set(new Uint8Array(r,i,a)),u.unmap();let p=this.backend.device.createCommandEncoder();p.copyBufferToBuffer(u,0,n.gpuData.buffer,0,s),this.backend.device.queue.submit([p.finish()]),u.destroy(),ce("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let a=vr(r.originalSize),s=this.backend.getCommandEncoder();this.backend.endComputePass(),s.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,a)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return ce("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=ki();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),ce("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),ce("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=As(e),i,a=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,s=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(a||s){let u=(a?this.freeBuffers:this.freeUniformBuffers).get(r);u?u.length>0?i=u.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let n={id:ki(),type:0,buffer:i};return this.storageCache.set(n.id,{gpuData:n,originalSize:Number(e)}),ce("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${n.id}`),n}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return ce("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await oa(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=xi.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(ce("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},kd=(...e)=>new Rs(...e)}),Bs,fe,we=P(()=>{Bs=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},fe=e=>new Bs(e)}),Ds,Pt,z,Nr,Sd,Td,Id,re=P(()=>{Ds=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Pt=class{static calcShape(e,t,r=!1){let i=e.length,a=t.length;if(i===0)return t;if(a===0)return e;let s=Math.max(e.length,t.length),n=new Array(s);if(r){if(i<2||a<2)return;let u=Ds.calcMatMulShape([e[i-2],e[i-1]],[t[a-2],t[a-1]]);if(u===void 0)return;[n[s-2],n[s-1]]=u}for(let u=r?3:1;u<=s;u++){let d=i-u<0?1:e[i-u],p=a-u<0?1:t[a-u];if(d!==p&&d>1&&p>1)return;let f=Math.max(d,p);if(d&&p)n[s-u]=Math.max(d,p);else{if(f>1)return;n[s-u]=0}}return n}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let a=1;a<=r;a++)if(e[r-a]!==1&&e[r-a]!==t[i-a])return!1;return!0}},z=class Ar{static size(t){return Ar.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let a=new Array(i),s=i-1;for(;s>=0;){if(t[s]%r===0){a[s]=t[s]/r;break}if(r%t[s]!==0)throw new Error("cannot convert shape");a[s]=1,r/=t[s],s--}for(s--;s>=0;s--)a[s]=t[s];return a}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Ar.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Ar.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let a=1;for(let s=r;s<i;s++){if(t[s]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");a*=Number(t[s])}return a}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let a=r-3;a>=0;--a)i[a]=i[a+1]*t[a+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((a,s)=>a+r[s]+r[s+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,a)=>i===r[a])}},Nr=class Jt{static adjustPoolAttributes(t,r,i,a,s,n){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let u=0;u<r.length-2;u++)u>=i.length?i.push(r[u+2]):i[u]=r[u+2];for(let u=0;u<i.length;u++)if(u<a.length){if(a[u]<0)throw new Error("strides should be greater than or equal to 1")}else a.push(1);for(let u=0;u<i.length;u++)if(u<s.length){if(s[u]<0)throw new Error("dilations should be greater than or equal to 1")}else s.push(1);for(let u=0;u<i.length*2;u++)if(u<n.length){if(n[u]<0)throw new Error("pad should be greater than or equal to 1")}else n.push(0);for(let u=0;u<i.length;u++){if(i[u]<=0)throw new Error("kernel shapes need to be greater than 0");if(n[u]>=i[u]||n[u+i.length]>=i[u])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,a,s,n,u){if(u){if(s.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(a.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let d=0;d<t.length-2;d++)Jt.adjustPadAndReturnShape(t[d+(n?1:2)],r[d],i[d],a[d],s,d,d+t.length-2,u)}}static computePoolOutputShape(t,r,i,a,s,n,u){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let d=[r[0],r[1]];return Jt.computeShapeHelper(t,r,d,i,a,s,n,u),d}static computeConvOutputShape(t,r,i,a,s,n,u){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let d=[t[0],r[0]];return Jt.computeShapeHelper(!1,t,d,i,a,s,n,u),d}static computeShapeHelper(t,r,i,a,s,n,u,d){if(t)for(let p=0;p<r.length-2;p++)i.push(1);else for(let p=0;p<r.length-2;p++)i.push(Jt.adjustPadAndReturnShape(r[p+2],a[p],s[p],n[p],u,p,p+r.length-2,d))}static adjustPadAndReturnShape(t,r,i,a,s,n,u,d){let p=i*(a-1)+1;if(d&&d!=="NOTSET")switch(d){case"VALID":return s[n]=0,s[u]=0,Math.floor((t-p)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let f=((t+r-1)/r-1)*r+a-t;return s[n]=Math.floor(d==="SAME_LOWER"?(f+1)/2:f/2),s[u]=f-s[n],Math.floor((t+f-a)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+s[n]+s[u]-p)/r+1)}},Sd=class{static getShapeOfGemmResult(e,t,r,i,a){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let s,n,u;t?(s=e[1],n=e[0]):(s=e[0],n=e[1]);let d=-1;if(i?(u=r[0],d=1):(u=r[1],d=0),r[d]!==n)throw new Error("dimension mismatch");if(s<=0||u<=0||n<=0)throw new Error("invalid shape specified");if(a&&!Pt.isValidBroadcast(a,[s,u]))throw new Error("gemm: invalid bias shape for broadcast");return[s,u,n]}},Td=-34028234663852886e22,Id=34028234663852886e22}),Ut,xr,Te,Ce,j,_e,ua,Nt,ft,F,Ht,B,G,Ed,Ra,Ms,Cd,ae=P(()=>{J(),re(),Ut=64,xr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Te=(e,t=1)=>{let r=xr(e,t);return typeof r=="string"?r:r[0]},Ce=(e,t=1)=>{let r=xr(e,t);return typeof r=="string"?r:r[1]},j=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:z.computeStrides(r)})}),t},_e=e=>e%4===0?4:e%2===0?2:1,ua=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Nt=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,ft=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,F=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,Ht=(e,t,r,i,a)=>{let s=typeof r=="number",n=s?r:r.length,u=[...new Array(n).keys()],d=n<2?"u32":n<=4?`vec${n}<u32>`:`array<u32, ${n}>`,p=xr(t,a),f=typeof p=="string"?p:p[1],m=typeof p=="string"?p:p[0],l={indices:d,value:f,storage:m,tensor:t},y=M=>typeof M=="string"?M:`${M}u`,_={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},b=s?"uniforms.":"",v=`${b}${e}_shape`,x=`${b}${e}_strides`,w="";for(let M=0;M<n-1;M++)w+=`
    let dim${M} = current / ${F(x,M,n)};
    let rest${M} = current % ${F(x,M,n)};
    indices[${M}] = dim${M};
    current = rest${M};
    `;w+=`indices[${n-1}] = current;`;let S=n<2?"":`
  fn o2i_${e}(offset: u32) -> ${l.indices} {
    var indices: ${l.indices};
    var current = offset;
    ${w}
    return indices;
  }`,k=M=>(_.offsetToIndices=!0,n<2?M:`o2i_${e}(${M})`),I=[];if(n>=2)for(let M=n-1;M>=0;M--)I.push(`${F(x,M,n)} * (indices[${M}])`);let E=n<2?"":`
  fn i2o_${e}(indices: ${l.indices}) -> u32 {
    return ${I.join("+")};
  }`,C=M=>(_.indicesToOffset=!0,n<2?M:`i2o_${e}(${M})`),R=(...M)=>n===0?"0u":`${l.indices}(${M.map(y).join(",")})`,N=(M,L)=>n<2?`${M}`:`${F(M,L,n)}`,q=(M,L,oe)=>n<2?`${M}=${oe};`:`${F(M,L,n)}=${oe};`,ee={},K=(M,L)=>{_.broadcastedIndicesToOffset=!0;let oe=`${L.name}broadcastedIndicesTo${e}Offset`;if(oe in ee)return`${oe}(${M})`;let be=[];for(let ve=n-1;ve>=0;ve--){let Me=L.indicesGet("outputIndices",ve+L.rank-n);be.push(`${N(x,ve)} * (${Me} % ${N(v,ve)})`)}return ee[oe]=`fn ${oe}(outputIndices: ${L.type.indices}) -> u32 {
             return ${be.length>0?be.join("+"):"0u"};
           }`,`${oe}(${M})`},H=(M,L)=>(()=>{if(l.storage===l.value)return`${e}[${M}]=${L};`;if(l.storage==="vec2<u32>"&&l.value==="i32")return`${e}[${M}]=vec2<u32>(u32(${L}), select(0u, 0xFFFFFFFFu, ${L} < 0));`;if(l.storage==="vec2<u32>"&&l.value==="u32")return`${e}[${M}]=vec2<u32>(u32(${L}), 0u);`;if(l.storage==="u32"&&l.value==="vec4<bool>")return`${e}[${M}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${L}));`;throw new Error(`not supported combination of storage type ${l.storage} and value type ${l.value} yet`)})(),ie=M=>(()=>{if(l.storage===l.value)return`${e}[${M}]`;if(l.storage==="vec2<u32>"&&l.value==="i32")return`i32(${e}[${M}].x)`;if(l.storage==="vec2<u32>"&&l.value==="u32")return`u32(${e}[${M}].x)`;if(l.storage==="u32"&&l.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${M}] & 0xFFu), bool(${e}[${M}] & 0xFF00u), bool(${e}[${M}] & 0xFF0000u), bool(${e}[${M}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${l.storage} and value type ${l.value} yet`)})(),U=n<2?"":`
  fn get_${e}ByIndices(indices: ${l.indices}) -> ${f} {
    return ${ie(`i2o_${e}(indices)`)};
  }`,X=n<2?"":(()=>{let M=u.map(oe=>`d${oe}: u32`).join(", "),L=u.map(oe=>`d${oe}`).join(", ");return`
  fn get_${e}(${M}) -> ${f} {
    return get_${e}ByIndices(${R(L)});
  }`})(),se=(...M)=>{if(M.length!==n)throw new Error(`indices length must be ${n}`);let L=M.map(y).join(",");return n===0?ie("0u"):n===1?ie(L[0]):(_.get=!0,_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}(${L})`)},Y=M=>n<2?ie(M):(_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}ByIndices(${M})`),te=n<2?"":`
  fn set_${e}ByIndices(indices: ${l.indices}, value: ${f}) {
    ${H(`i2o_${e}(indices)`,"value")}
  }`,le=n<2?"":(()=>{let M=u.map(oe=>`d${oe}: u32`).join(", "),L=u.map(oe=>`d${oe}`).join(", ");return`
  fn set_${e}(${M}, value: ${f}) {
    set_${e}ByIndices(${R(L)}, value);
  }`})();return{impl:()=>{let M=[],L=!1;return _.offsetToIndices&&(M.push(S),L=!0),_.indicesToOffset&&(M.push(E),L=!0),_.broadcastedIndicesToOffset&&(Object.values(ee).forEach(oe=>M.push(oe)),L=!0),_.set&&(M.push(le),L=!0),_.setByIndices&&(M.push(te),L=!0),_.get&&(M.push(X),L=!0),_.getByIndices&&(M.push(U),L=!0),!s&&L&&M.unshift(`const ${v} = ${l.indices}(${r.join(",")});`,`const ${x} = ${l.indices}(${z.computeStrides(r).join(",")});`),M.join(`
`)},type:l,offsetToIndices:k,indicesToOffset:C,broadcastedIndicesToOffset:K,indices:R,indicesGet:N,indicesSet:q,set:(...M)=>{if(M.length!==n+1)throw new Error(`indices length must be ${n}`);let L=M[n];if(typeof L!="string")throw new Error("value must be string");let oe=M.slice(0,n).map(y).join(",");return n===0?H("0u",L):n===1?H(oe[0],L):(_.set=!0,_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}(${oe}, ${L})`)},setByOffset:H,setByIndices:(M,L)=>n<2?H(M,L):(_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}ByIndices(${M}, ${L});`),get:se,getByOffset:ie,getByIndices:Y,usage:i,name:e,strides:x,shape:v,rank:n}},B=(e,t,r,i=1)=>Ht(e,t,r,"input",i),G=(e,t,r,i=1)=>Ht(e,t,r,"output",i),Ed=(e,t,r)=>Ht(e,t,r,"atomicOutput",1),Ra=(e,t,r,i=1)=>Ht(e,t,r,"internal",i),Ms=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Ut){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let a=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,s=a?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,n=a?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${i})
  fn main(${s}) {
    ${n}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",i=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let a=i==null||i===1?r:`vec${i}<${r}>`;e.push(`${t}:${a}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Cd=(e,t)=>new Ms(e,t)}),Ns,Si,Ps,Us,Ws,qs,De,zd,Ad,mt=P(()=>{J(),re(),we(),ae(),Ns=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Si=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Ps=(e,t)=>z.sortBasedOnPerm(e,Si(e.length,t)),Us=(e,t,r,i)=>{let a=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let s=0;s<t;++s)a+=`a[${e[s]}]=i[${s}];`;return a+="return a;}"},Ws=(e,t)=>{let r=[],i=[];for(let a=0;a<e.length;++a)e[a]!==1&&r.push(e[a]),e[t[a]]!==1&&i.push(t[a]);return{newShape:r,newPerm:i}},qs=(e,t)=>{let r=0;for(let i=0;i<e.length;++i)if(t[e[i]]!==1){if(e[i]<r)return!1;r=e[i]}return!0},De=(e,t)=>{let r=e.dataType,i=e.dims.length,a=Si(i,t),s=Ps(e.dims,a),n=e.dims,u=s,d=i<2||qs(a,e.dims),p;if(d)return p=_=>{let b=B("input",r,n,4),v=G("output",r,u,4);return`
  ${_.registerUniform("output_size","u32").declareVariables(b,v)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let _=z.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64/4)},programUniforms:[{type:12,data:Math.ceil(_/4)}]}},getShaderSource:p};let{newShape:f,newPerm:m}=Ws(e.dims,a),l=z.areEqual(m,[2,3,1]),y=z.areEqual(m,[3,1,2]);if(f.length===2||l||y){n=l?[f[0],f[1]*f[2]]:y?[f[0]*f[1],f[2]]:f,u=[n[1],n[0]];let _=16;return p=b=>{let v=B("a",r,n.length),x=G("output",r,u.length);return`
  ${b.registerUniform("output_size","u32").declareVariables(v,x)}
  var<workgroup> tile : array<array<${x.type.value}, ${_+1}>, ${_}>;
  ${b.mainStart([_,_,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${_} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${_}u + local_id.x;
    let input_row = workgroup_id_x * ${_}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${v.getByIndices(`${v.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${_}u + local_id.x;
    let output_row = workgroup_id_y * ${_}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${x.setByIndices(`${x.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let b=z.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(u[1]/_),y:Math.ceil(u[0]/_)},programUniforms:[{type:12,data:b},...j(n,u)]}},getShaderSource:p}}return p=_=>{let b=B("a",r,n.length),v=G("output",r,u.length);return`
  ${_.registerUniform("output_size","u32").declareVariables(b,v)}

  ${Us(a,i,b,v)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${v.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${v.setByOffset("global_idx",b.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let _=z.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...j(n,u)]}},getShaderSource:p}},zd=(e,t)=>{Ns(e.inputs,t.perm),e.compute(De(e.inputs[0],t.perm))},Ad=e=>fe({perm:e.perm})}),Ls,Vs,Hs,Gs,Fs,js,Ks,Qs,Ys,Zs,We,Od,Rd,Bd,Dd,Md,Nd,Pd,Ud,Wd,qd,_m=P(()=>{J(),re(),ae(),Ba(),mt(),Ls={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Vs={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Hs={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Gs={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Fs=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},js=(e,t)=>{let r=[],i=e.length;for(let s=0;s<i;s++)t.indexOf(s)===-1&&r.push(e[s]);let a=t.map(s=>e[s]);return[r,a]},Ks=(e,t)=>{let r=e.length+t.length,i=[],a=0;for(let s=0;s<r;s++)t.indexOf(s)===-1?i.push(e[a++]):i.push(1);return i},Qs=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Ys=(e,t)=>{let r=[];if(!Qs(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},Zs=(e,t,r,i,a,s,n)=>{let u=r[0].dims,d=z.size(s),p=z.size(n),f=B("_A",r[0].dataType,u),m=G("output",a,s),l=64;d===1&&(l=256);let y=`
          var<workgroup> aBestValues : array<f32, ${l}>;
       `,_=b=>`
        ${b.registerUniform("reduceSize","u32").declareVariables(f,m)}
        ${y}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${b.mainStart(l)}

          let outputIndex = global_idx / ${l};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Hs[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${l}) {
           let candidate = f32(${f.getByOffset("offset + k")});
           bestValue = ${Ls[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${l}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Vs[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${m.setByOffset("outputIndex",`${i==="mean"?`${m.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${m.type.storage}(${Gs[i]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${l}`,inputDependencies:["type"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:d},programUniforms:[{type:12,data:p}]})}},We=(e,t,r,i)=>{let a=e.inputs.length===1?r:la(e.inputs,r),s=a.axes;s.length===0&&!a.noopWithEmptyAxes&&(s=e.inputs[0].dims.map((y,_)=>_));let n=z.normalizeAxes(s,e.inputs[0].dims.length),u=n,d=e.inputs[0],p=Ys(u,e.inputs[0].dims.length);p.length>0&&(d=e.compute(De(e.inputs[0],p),{inputs:[0],outputs:[-1]})[0],u=Fs(u.length,d.dims.length));let[f,m]=js(d.dims,u),l=f;a.keepDims&&(l=Ks(f,n)),e.compute(Zs(t,a.cacheKey,[d],i,e.inputs[0].dataType,l,m),{inputs:[d]})},Od=(e,t)=>{We(e,"ReduceMeanShared",t,"mean")},Rd=(e,t)=>{We(e,"ReduceL1Shared",t,"l1")},Bd=(e,t)=>{We(e,"ReduceL2Shared",t,"l2")},Dd=(e,t)=>{We(e,"ReduceLogSumExpShared",t,"logSumExp")},Md=(e,t)=>{We(e,"ReduceMaxShared",t,"max")},Nd=(e,t)=>{We(e,"ReduceMinShared",t,"min")},Pd=(e,t)=>{We(e,"ReduceProdShared",t,"prod")},Ud=(e,t)=>{We(e,"ReduceSumShared",t,"sum")},Wd=(e,t)=>{We(e,"ReduceSumSquareShared",t,"sumSquare")},qd=(e,t)=>{We(e,"ReduceLogSumShared",t,"logSum")}}),qe,Xs,Pr,la,Le,Js,eo,to,ro,io,ao,no,so,oo,uo,Ve,Ld,Vd,Hd,Gd,Fd,jd,Kd,Qd,Yd,Zd,Ba=P(()=>{J(),re(),we(),ae(),_m(),qe=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Xs=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Pr=(e,t,r,i,a,s,n=!1,u=!1)=>{let d=[],p=r[0].dims,f=p.length,m=z.normalizeAxes(a,f),l=!u&&m.length===0;p.forEach((b,v)=>{l||m.indexOf(v)>=0?n&&d.push(1):d.push(b)});let y=d.length,_=z.size(d);return{name:e,shaderCache:t,getShaderSource:b=>{let v=[],x=B("_A",r[0].dataType,f),w=G("output",s,y),S=i(x,w,m),k=S[2];for(let I=0,E=0;I<f;I++)l||m.indexOf(I)>=0?(n&&E++,k=`for(var j${I}: u32 = 0; j${I} < ${p[I]}; j${I}++) {
                  ${S[2].includes("last_index")?`let last_index = j${I};`:""}
                  ${x.indicesSet("input_indices",I,`j${I}`)}
                  ${k}
                }`):(v.push(`${x.indicesSet("input_indices",I,w.indicesGet("output_indices",E))};`),E++);return`

        ${b.registerUniform("output_size","u32").declareVariables(x,w)}

        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${x.type.indices};
          let output_indices = ${w.offsetToIndices("global_idx")};

          ${v.join(`
`)}
          ${S[0]}       // init ops for reduce max/min
          ${S[1]}
          ${k}
          ${S[3]}
          ${S.length===4?w.setByOffset("global_idx","value"):S.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:d,dataType:s}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...j(p,d)]})}},la=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),fe({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Le=(e,t,r,i)=>{let a=e.inputs,s=a.length===1?r:la(a,r);e.compute(Pr(t,{hint:s.cacheKey,inputDependencies:["rank"]},[a[0]],s.noopWithEmptyAxes&&s.axes.length===0?Xs:i,s.axes,a[0].dataType,s.keepDims,s.noopWithEmptyAxes),{inputs:[0]})},Js=(e,t)=>{qe(e.inputs),Le(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},eo=(e,t)=>{qe(e.inputs),Le(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},to=(e,t)=>{qe(e.inputs),Le(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},ro=(e,t)=>{qe(e.inputs),Le(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},io=(e,t)=>{qe(e.inputs),Le(e,"ReduceMax",t,(r,i,a)=>{let s=[];for(let n=0;n<r.rank;n++)(a.indexOf(n)>=0||a.length===0)&&s.push(r.indicesSet("input_indices",n,0));return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},ao=(e,t)=>{qe(e.inputs),Le(e,"ReduceMean",t,(r,i,a)=>{let s=1;for(let n=0;n<r.rank;n++)(a.indexOf(n)>=0||a.length===0)&&(s*=e.inputs[0].dims[n]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${s});`]})},no=(e,t)=>{qe(e.inputs),Le(e,"ReduceMin",t,(r,i,a)=>{let s=[];for(let n=0;n<r.rank;n++)(a.indexOf(n)>=0||a.length===0)&&s.push(`input_indices[${n}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},so=(e,t)=>{qe(e.inputs),Le(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},oo=(e,t)=>{qe(e.inputs),Le(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},uo=(e,t)=>{qe(e.inputs),Le(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Ve=(e,t,r)=>{if(t.length===0)return r;let i=1,a=1;for(let s=0;s<t.length;s++)t.indexOf(s)===-1?i*=e[s]:a*=e[s];return a<32&&i>1024},Ld=(e,t)=>{Ve(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ao(e,t):Od(e,t)},Vd=(e,t)=>{Ve(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?eo(e,t):Rd(e,t)},Hd=(e,t)=>{Ve(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?to(e,t):Bd(e,t)},Gd=(e,t)=>{Ve(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ro(e,t):Dd(e,t)},Fd=(e,t)=>{Ve(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?io(e,t):Md(e,t)},jd=(e,t)=>{Ve(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?no(e,t):Nd(e,t)},Kd=(e,t)=>{Ve(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?so(e,t):Pd(e,t)},Qd=(e,t)=>{Ve(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?oo(e,t):Ud(e,t)},Yd=(e,t)=>{Ve(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?uo(e,t):Wd(e,t)},Zd=(e,t)=>{Ve(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Js(e,t):qd(e,t)}}),Ti,Xd,Jd,da,bm=P(()=>{J(),we(),Ba(),Ti=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Xd=(e,t)=>{Ti(e.inputs);let r=(i,a,s)=>{let n=[];for(let u=0;u<i.rank;u++)(s.indexOf(u)>=0||s.length===0)&&n.push(`input_indices[${u}] = 0;`);return[`${n.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(Pr("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Jd=(e,t)=>{Ti(e.inputs);let r=(i,a,s)=>{let n=[];for(let u=0;u<i.rank;u++)(s.indexOf(u)>=0||s.length===0)&&n.push(`input_indices[${u}] = 0;`);return[`${n.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(Pr("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},da=e=>fe(e)}),lo,kr,po,ho,co,ir,fo,ep,Da=P(()=>{J(),re(),Oa(),ae(),lo=(e,t)=>{let r=e[0],i=e[1],a=e[2],s=e[3],n=e[4],u=e[5];if(n&&u)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let d=r.dims[0],p=r.dims[1],f=r.dims[2];if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==f)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(a.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let m=a.dims[0]/3,l=m,y=l;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let S of t.qkvHiddenSizes)if(S%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");m=t.qkvHiddenSizes[0],l=t.qkvHiddenSizes[1],y=t.qkvHiddenSizes[2]}let _=p;if(m!==l)throw new Error("qkv_hidden_sizes first element should be same as the second");if(a.dims[0]!==m+l+y)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let b=0;if(n){if(l!==y)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(n.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(n.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(n.dims[1]!==d)throw new Error('Input "past" second dimension must be batch_size');if(n.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(n.dims[4]!==l/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(b=n.dims[3])}let v=_+b,x=-1,w=0;if(s)throw new Error("Mask not supported");if(n)throw new Error("past is not supported");if(u){if(u.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(u.dims[0]!==d||u.dims[1]!==t.numHeads||u.dims[2]!==p||u.dims[3]!==v)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:d,sequenceLength:p,pastSequenceLength:b,kvSequenceLength:_,totalSequenceLength:v,maxSequenceLength:x,inputHiddenSize:f,hiddenSize:m,vHiddenSize:y,headSize:Math.floor(m/t.numHeads),vHeadSize:Math.floor(y/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},kr=(e,t,r)=>t&&e?`
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
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,po=(e,t,r,i,a,s,n,u)=>{let d=_e(n?1:s),p=64,f=s/d;f<p&&(p=32);let m=Math.ceil(s/d/p),l=[{type:12,data:t},{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:f},{type:12,data:m}],y=Te(e.dataType,d),_=Ce(1,d),b=["type"];n&&b.push("type"),u&&b.push("type");let v=x=>{let w=G("x",e.dataType,e.dims,d),S=[w],k=n?B("seq_lens",n.dataType,n.dims):void 0;k&&S.push(k);let I=u?B("total_sequence_length_input",u.dataType,u.dims):void 0;I&&S.push(I);let E=Ce(e.dataType),C=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${p}>;
  var<workgroup> thread_sum: array<f32, ${p}>;
  ${x.registerUniforms(C).declareVariables(...S)}
  ${x.mainStart([p,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${kr(k,I,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${p}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${n?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${_}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${_}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(d){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${d}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${p}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${_}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${_}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(d){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${d}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${p}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${w.type.value}(${E}(1.0) / ${E}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${_}(x[offset + i]);
        x[offset + i] = ${w.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${n?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${w.type.value}(${E}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${p};${y};${d}`,inputDependencies:b},getShaderSource:v,getRunData:()=>({outputs:[],dispatchGroup:{x:Math.ceil(s/p),y:a,z:t*r},programUniforms:l})}},ho=(e,t,r,i,a,s,n,u,d)=>{let p=n+s.kvSequenceLength,f=[s.batchSize,s.numHeads,s.sequenceLength,p],m=e>1&&i,l=s.kvNumHeads?s.kvNumHeads:s.numHeads,y=m?[s.batchSize,l,p,s.headSize]:void 0,_=s.nReps?s.nReps:1,b=s.scale===0?1/Math.sqrt(s.headSize):s.scale,v=_e(s.headSize),x=s.headSize/v,w=12,S={x:Math.ceil(p/w),y:Math.ceil(s.sequenceLength/w),z:s.batchSize*s.numHeads},k=[{type:12,data:s.sequenceLength},{type:12,data:x},{type:12,data:p},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:1,data:b},{type:12,data:n},{type:12,data:s.kvSequenceLength},{type:12,data:_}],I=m&&i&&z.size(i.dims)>0,E=["type","type"];I&&E.push("type"),a&&E.push("type"),u&&E.push("type"),d&&E.push("type");let C=[{dims:f,dataType:t.dataType,gpuDataType:0}];m&&C.push({dims:y,dataType:t.dataType,gpuDataType:0});let R=N=>{let q=B("q",t.dataType,t.dims,v),ee=B("key",r.dataType,r.dims,v),K=[q,ee];if(I){let te=B("past_key",i.dataType,i.dims,v);K.push(te)}a&&K.push(B("attention_bias",a.dataType,a.dims));let H=u?B("seq_lens",u.dataType,u.dims):void 0;H&&K.push(H);let ie=d?B("total_sequence_length_input",d.dataType,d.dims):void 0;ie&&K.push(ie);let U=G("output",t.dataType,f),X=[U];m&&X.push(G("present_key",t.dataType,y,v));let se=Ce(1,v),Y=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;

  var<workgroup> tileQ: array<${q.type.storage}, ${w*w}>;
  var<workgroup> tileK: array<${q.type.storage}, ${w*w}>;
  ${N.registerUniforms(Y).declareVariables(...K,...X)}
  ${N.mainStart([w,w,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${_===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${_===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${kr(H,ie,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${I&&m?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${m?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${se}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${(()=>I&&m?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`)()}
      ${m?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${se}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(v){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${v}`)}})()};
        output[outputIdx] = ${U.type.value} (sum * uniforms.alpha) + ${a?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${v};${a!==void 0};${i!==void 0};${e}`,inputDependencies:E},getRunData:()=>({outputs:C,dispatchGroup:S,programUniforms:k}),getShaderSource:R}},co=(e,t,r,i,a,s,n=void 0,u=void 0)=>{let d=s+a.kvSequenceLength,p=a.nReps?a.nReps:1,f=a.vHiddenSize*p,m=e>1&&i,l=a.kvNumHeads?a.kvNumHeads:a.numHeads,y=m?[a.batchSize,l,d,a.headSize]:void 0,_=[a.batchSize,a.sequenceLength,f],b=12,v={x:Math.ceil(a.vHeadSize/b),y:Math.ceil(a.sequenceLength/b),z:a.batchSize*a.numHeads},x=[{type:12,data:a.sequenceLength},{type:12,data:d},{type:12,data:a.vHeadSize},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:12,data:f},{type:12,data:s},{type:12,data:a.kvSequenceLength},{type:12,data:p}],w=m&&i&&z.size(i.dims)>0,S=["type","type"];w&&S.push("type"),n&&S.push("type"),u&&S.push("type");let k=[{dims:_,dataType:t.dataType,gpuDataType:0}];m&&k.push({dims:y,dataType:t.dataType,gpuDataType:0});let I=E=>{let C=B("probs",t.dataType,t.dims),R=B("v",r.dataType,r.dims),N=[C,R];w&&N.push(B("past_value",i.dataType,i.dims));let q=n?B("seq_lens",n.dataType,n.dims):void 0;n&&N.push(q);let ee=u?B("total_sequence_length_input",u.dataType,u.dims):void 0;u&&N.push(ee);let K=[G("output",t.dataType,_)];m&&K.push(G("present_value",t.dataType,y));let H=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;
  var<workgroup> tileQ: array<${C.type.value}, ${b*b}>;
  var<workgroup> tileV: array<${C.type.value}, ${b*b}>;
  ${E.registerUniforms(H).declareVariables(...N,...K)}
  ${E.mainStart([b,b,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${p===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${p===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${kr(q,ee,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${w&&m?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${m?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${C.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${(()=>w&&m?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`)()}
        ${m?`
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:S},getRunData:()=>({outputs:k,dispatchGroup:v,programUniforms:x}),getShaderSource:I}},ir=(e,t,r,i,a,s,n,u,d,p,f=void 0,m=void 0)=>{let l=Math.min(e.outputCount,1+(n?1:0)+(u?1:0)),y=l>1?p.pastSequenceLength:0,_=y+p.kvSequenceLength,b=d&&z.size(d.dims)>0?d:void 0,v=[t,r];l>1&&n&&z.size(n.dims)>0&&v.push(n),b&&v.push(b),f&&v.push(f),m&&v.push(m);let x=e.compute(ho(l,t,r,n,b,p,y,f,m),{inputs:v,outputs:l>1?[-1,1]:[-1]})[0];e.compute(po(x,p.batchSize,p.numHeads,y,p.sequenceLength,_,f,m),{inputs:f&&m?[x,f,m]:[x],outputs:[]});let w=[x,i];l>1&&u&&z.size(u.dims)>0&&w.push(u),f&&w.push(f),m&&w.push(m),e.compute(co(l,x,i,u,p,y,f,m),{inputs:w,outputs:l>1?[0,2]:[0]})},fo=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,a=t.inputHiddenSize,s=t.headSize,n=12,u={x:Math.ceil(t.headSize/n),y:Math.ceil(t.sequenceLength/n),z:t.batchSize*t.numHeads},d=[e.inputs[0],e.inputs[1],e.inputs[2]],p=[{type:12,data:i},{type:12,data:a},{type:12,data:s},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],f=m=>{let l=G("output_q",d[0].dataType,r),y=G("output_k",d[0].dataType,r),_=G("output_v",d[0].dataType,r),b=B("input",d[0].dataType,d[0].dims),v=B("weight",d[1].dataType,d[1].dims),x=B("bias",d[2].dataType,d[2].dims),w=b.type.storage,S=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${n}u;
  var<workgroup> tileInput: array<${w}, ${n*n}>;
  var<workgroup> tileWeightQ: array<${w}, ${n*n}>;
  var<workgroup> tileWeightK: array<${w}, ${n*n}>;
  var<workgroup> tileWeightV: array<${w}, ${n*n}>;
  ${m.registerUniforms(S).declareVariables(b,v,x,l,y,_)}
  ${m.mainStart([n,n,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${w}(0);
    var valueK = ${w}(0);
    var valueV = ${w}(0);
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:u,programUniforms:p}),getShaderSource:f},{inputs:d,outputs:[-1,-1,-1]})},ep=(e,t)=>{let r=lo(e.inputs,t),[i,a,s]=fo(e,r);return ir(e,i,a,s,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),mo,go,yo,tp,$m=P(()=>{Fe(),J(),re(),we(),ae(),mo=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,a,s)=>{let n=a.length;if(n!==i.length)throw new Error(`${s}: num dimensions != ${n}`);a.forEach((u,d)=>{if(u!==i[d])throw new Error(`${s}: dim[${d}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},go=(e,t)=>{let{epsilon:r,spatial:i,format:a}=t,s=e[0].dims,n=i?_e(s[s.length-1]):1,u=a==="NHWC"&&s.length>1?n:1,d=z.size(s)/n,p=i,f=p?s.length:s,m=B("x",e[0].dataType,e[0].dims,n),l=B("scale",e[1].dataType,e[1].dims,u),y=B("bias",e[2].dataType,e[2].dims,u),_=B("inputMean",e[3].dataType,e[3].dims,u),b=B("inputVar",e[4].dataType,e[4].dims,u),v=G("y",e[0].dataType,f,n),x=()=>{let S="";if(i)S=`let cOffset = ${s.length===1?"0u":a==="NHWC"?`outputIndices[${s.length-1}] / ${n}`:"outputIndices[1]"};`;else if(a==="NCHW")S=`
            ${v.indicesSet("outputIndices","0","0")}
            let cOffset = ${v.indicesToOffset("outputIndices")};`;else{S=`var cIndices = ${l.type.indices}(0);
                       cIndices[0] = outputIndices[${s.length-1}];`;for(let k=1;k<l.rank;k++)S+=`cIndices[${k}] = outputIndices[${k}];`;S+=`let cOffset = ${l.indicesToOffset("cIndices")};`}return S},w=S=>`
  const epsilon = ${r};
  ${S.registerUniform("outputSize","u32").declareVariables(m,l,y,_,b,v)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${v.offsetToIndices(`global_idx * ${n}`)};
    ${x()}
    let scale = ${l.getByOffset("cOffset")};
    let bias = ${y.getByOffset("cOffset")};
    let inputMean = ${_.getByOffset("cOffset")};
    let inputVar = ${b.getByOffset("cOffset")};
    let x = ${m.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${v.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${n}`,inputDependencies:p?["rank","type","type","type","type"]:void 0},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p?[{type:12,data:d},...j(s)]:[{type:12,data:d}]})}},yo=e=>fe(e),tp=(e,t)=>{let{inputs:r,outputCount:i}=e,a=yo({...t,outputCount:i});if(ge.webgpu.validateInputContent&&mo(r,a),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(go(r,a))}}),_o,bo,rp,wm=P(()=>{re(),ae(),_o=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},bo=e=>{let t=e[0].dims,r=e[0].dims[2],i=z.size(t)/4,a=e[0].dataType,s=B("input",a,t,4),n=B("bias",a,[r],4),u=B("residual",a,t,4),d=G("output",a,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:p=>`
  const channels = ${r}u / 4;
  ${p.declareVariables(s,n,u,d)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${s.getByOffset("global_idx")}
      + ${n.getByOffset("global_idx % channels")} + ${u.getByOffset("global_idx")};
    ${d.setByOffset("global_idx","value")}
  }`}},rp=e=>{_o(e.inputs),e.compute(bo(e.inputs))}}),$o,de,ip,ap,np,sp,op,up,lp,dp,pp,wo,hp,cp,fp,mp,er,gp,Or,yp,_p,bp,$p,wp,vp,xp,kp,Sp,Tp,Ip,Ep,Cp,zp,Ap,Op,Ii,Rp,pa,ha,Bp,Dp,Mp,vo,xo,Np,Ma=P(()=>{J(),re(),we(),ae(),$o=(e,t,r,i,a,s,n)=>{let u=Math.ceil(t/4),d="";typeof a=="string"?d=`${a}(a)`:d=a("a");let p=B("inputData",r,[u],4),f=G("outputData",i,[u],4),m=[{name:"vec_size",type:"u32"}];return n&&m.push(...n),`
      ${e.registerUniforms(m).declareVariables(p,f)}

  ${s??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${p.getByOffset("global_idx")};
    ${f.setByOffset("global_idx",d)}
  }`},de=(e,t,r,i,a,s=e.dataType,n,u)=>{let d=[{type:12,data:Math.ceil(z.size(e.dims)/4)}];return n&&d.push(...n),{name:t,shaderCache:{hint:a,inputDependencies:["type"]},getShaderSource:p=>$o(p,z.size(e.dims),e.dataType,s,r,i,u),getRunData:p=>({outputs:[{dims:e.dims,dataType:s}],dispatchGroup:{x:Math.ceil(z.size(p[0].dims)/64/4)},programUniforms:d})}},ip=e=>{e.compute(de(e.inputs[0],"Abs","abs"))},ap=e=>{e.compute(de(e.inputs[0],"Acos","acos"))},np=e=>{e.compute(de(e.inputs[0],"Acosh","acosh"))},sp=e=>{e.compute(de(e.inputs[0],"Asin","asin"))},op=e=>{e.compute(de(e.inputs[0],"Asinh","asinh"))},up=e=>{e.compute(de(e.inputs[0],"Atan","atan"))},lp=e=>{e.compute(de(e.inputs[0],"Atanh","atanh"))},dp=e=>fe(e),pp=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(de(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},wo=e=>{let t,r,i=e.length>=2&&e[1].data!==0,a=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=a?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=a?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return fe({min:t,max:r})},hp=(e,t)=>{let r=t||wo(e.inputs),i=Ce(e.inputs[0].dataType);e.compute(de(e.inputs[0],"Clip",a=>`clamp(${a}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},cp=e=>{e.compute(de(e.inputs[0],"Ceil","ceil"))},fp=e=>{e.compute(de(e.inputs[0],"Cos","cos"))},mp=e=>{e.compute(de(e.inputs[0],"Cosh","cosh"))},er=e=>fe(e),gp=(e,t)=>{let r=Ce(e.inputs[0].dataType);e.compute(de(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Or=(e="f32")=>`
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
}`,yp=e=>{let t=Ce(e.inputs[0].dataType);e.compute(de(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Or(t)))},_p=e=>{e.compute(de(e.inputs[0],"Exp","exp"))},bp=e=>{e.compute(de(e.inputs[0],"Floor","floor"))},$p=e=>{let t=Ce(e.inputs[0].dataType);e.compute(de(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Or(t)))},wp=(e,t)=>{let r=Ce(e.inputs[0].dataType);e.compute(de(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},vp=e=>{e.compute(de(e.inputs[0],"Not",t=>`!${t}`))},xp=e=>{e.compute(de(e.inputs[0],"Neg",t=>`-${t}`))},kp=e=>{e.compute(de(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Sp=e=>{let t=Ce(e.inputs[0].dataType);e.compute(de(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Tp=e=>{e.compute(de(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Ip=e=>fe(e),Ep=(e,t)=>{let r=Ce(e.inputs[0].dataType);e.compute(de(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},Cp=e=>{e.compute(de(e.inputs[0],"Sin","sin"))},zp=e=>{e.compute(de(e.inputs[0],"Sinh","sinh"))},Ap=e=>{e.compute(de(e.inputs[0],"Sqrt","sqrt"))},Op=e=>{e.compute(de(e.inputs[0],"Tan","tan"))},Ii=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Rp=e=>{e.compute(de(e.inputs[0],"Tanh",Ii))},pa=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Ii("v")};
}
`,ha=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Bp=e=>{let t=Ce(e.inputs[0].dataType);e.compute(de(e.inputs[0],"FastGelu",ha,pa(t),void 0,e.inputs[0].dataType))},Dp=(e,t)=>{let r=Ce(e.inputs[0].dataType);return e.compute(de(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},Mp=e=>{e.compute(de(e.inputs[0],"Log","log"))},vo=(e,t)=>`
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
`,xo=e=>`quick_gelu_impl(${e})`,Np=(e,t)=>{let r=Ce(e.inputs[0].dataType);e.compute(de(e.inputs[0],"QuickGelu",xo,vo(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),ko,So,Pp,vm=P(()=>{re(),ae(),Ma(),ko=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},So=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=B("input",e[0].dataType,e[0].dims,4),i=B("bias",e[0].dataType,[e[0].dims[2]],4),a=G("output",e[0].dataType,t,4),s=z.size(t)/4,n=Te(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:u=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${u.declareVariables(r,i,a)}

  ${Or(n)}

  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${a.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Pp=e=>{ko(e.inputs),e.compute(So(e.inputs))}}),To,Io,He,Up,Wp,qp,Lp,Vp,Hp,Gp,Fp,jp,Kp,xm=P(()=>{J(),re(),ae(),To=(e,t,r,i,a,s,n,u,d,p,f,m)=>{let l,y;typeof u=="string"?l=y=(w,S)=>`${u}((${w}),(${S}))`:typeof u=="function"?l=y=u:(l=u.scalar,y=u.vector);let _=G("outputData",f,i.length,4),b=B("aData",d,t.length,4),v=B("bData",p,r.length,4),x;if(a)if(s){let w=z.size(t)===1,S=z.size(r)===1,k=t.length>0&&t[t.length-1]%4===0,I=r.length>0&&r[r.length-1]%4===0;w||S?x=_.setByOffset("global_idx",y(w?`${b.type.value}(${b.getByOffset("0")}.x)`:b.getByOffset("global_idx"),S?`${v.type.value}(${v.getByOffset("0")}.x)`:v.getByOffset("global_idx"))):x=`
            let outputIndices = ${_.offsetToIndices("global_idx * 4u")};
            let offsetA = ${b.broadcastedIndicesToOffset("outputIndices",_)};
            let offsetB = ${v.broadcastedIndicesToOffset("outputIndices",_)};
            ${_.setByOffset("global_idx",y(n||k?b.getByOffset("offsetA / 4u"):`${b.type.value}(${b.getByOffset("offsetA / 4u")}[offsetA % 4u])`,n||I?v.getByOffset("offsetB / 4u"):`${v.type.value}(${v.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else x=_.setByOffset("global_idx",y(b.getByOffset("global_idx"),v.getByOffset("global_idx")));else{if(!s)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let w=(S,k,I="")=>{let E=`aData[indexA${k}][componentA${k}]`,C=`bData[indexB${k}][componentB${k}]`;return`
            let outputIndices${k} = ${_.offsetToIndices(`global_idx * 4u + ${k}u`)};
            let offsetA${k} = ${b.broadcastedIndicesToOffset(`outputIndices${k}`,_)};
            let offsetB${k} = ${v.broadcastedIndicesToOffset(`outputIndices${k}`,_)};
            let indexA${k} = offsetA${k} / 4u;
            let indexB${k} = offsetB${k} / 4u;
            let componentA${k} = offsetA${k} % 4u;
            let componentB${k} = offsetB${k} % 4u;
            ${S}[${k}] = ${I}(${l(E,C)});
          `};f===9?x=`
            var data = vec4<u32>(0);
            ${w("data",0,"u32")}
            ${w("data",1,"u32")}
            ${w("data",2,"u32")}
            ${w("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:x=`
            ${w("outputData[global_idx]",0)}
            ${w("outputData[global_idx]",1)}
            ${w("outputData[global_idx]",2)}
            ${w("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(b,v,_)}

        ${m??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${x}
      }`},Io=(e,t,r,i,a,s,n=r.dataType)=>{let u=r.dims.map(b=>Number(b)??1),d=i.dims.map(b=>Number(b)??1),p=!z.areEqual(u,d),f=u,m=z.size(u),l=!1,y=!1,_=[p];if(p){let b=Pt.calcShape(u,d,!1);if(!b)throw new Error("Can't perform binary op on the given tensors");f=b.slice(),m=z.size(f);let v=z.size(u)===1,x=z.size(d)===1,w=u.length>0&&u[u.length-1]%4===0,S=d.length>0&&d[d.length-1]%4===0;_.push(v),_.push(x),_.push(w),_.push(S);let k=1;for(let I=1;I<f.length;I++){let E=u[u.length-I],C=d[d.length-I];if(E===C)k*=E;else break}k%4===0?(y=!0,l=!0):(v||x||w||S)&&(l=!0)}else l=!0;return _.push(l),{name:e,shaderCache:{hint:t+_.map(b=>b.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:b=>To(b,u,d,f,l,p,y,a,r.dataType,i.dataType,n,s),getRunData:()=>({outputs:[{dims:f,dataType:n}],dispatchGroup:{x:Math.ceil(m/64/4)},programUniforms:[{type:12,data:Math.ceil(z.size(f)/4)},...j(u,d,f)]})}},He=(e,t,r,i,a,s)=>{e.compute(Io(t,a??"",e.inputs[0],e.inputs[1],r,i,s))},Up=e=>{He(e,"Add",(t,r)=>`${t}+${r}`)},Wp=e=>{He(e,"Div",(t,r)=>`${t}/${r}`)},qp=e=>{He(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},Lp=e=>{He(e,"Mul",(t,r)=>`${t}*${r}`)},Vp=e=>{let t=B("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;He(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
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
      `)},Hp=e=>{He(e,"Sub",(t,r)=>`${t}-${r}`)},Gp=e=>{He(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},Fp=e=>{He(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},jp=e=>{He(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},Kp=e=>{He(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Eo,Co,zo,Ao,Qp,Yp,km=P(()=>{J(),re(),we(),ae(),Eo=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],a=i.dataType,s=i.dims.length;e.forEach((n,u)=>{if(u!==r){if(n.dataType!==a)throw new Error("input tensors should be one type");if(n.dims.length!==s)throw new Error("input tensors should have the same shape");n.dims.forEach((d,p)=>{if(p!==t&&d!==i.dims[p])throw new Error("non concat dimensions must match")})}})},Co=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,zo=(e,t)=>{let r=e.length,i=[];for(let a=0;a<r;++a){let s=t.setByOffset("global_idx",e[a].getByIndices("indices"));r===1?i.push(s):a===0?i.push(`if (inputIndex == ${a}u) { ${s} }`):a===r-1?i.push(`else { ${s} }`):i.push(`else if (inputIndex == ${a}) { ${s} }`)}return i.join(`
`)},Ao=(e,t,r,i)=>{let a=z.size(r),s=new Array(e.length),n=new Array(e.length),u=0,d=[],p=[],f=[{type:12,data:a}];for(let b=0;b<e.length;++b)u+=e[b].dims[t],s[b]=u,p.push(e[b].dims.length),n[b]=B(`input${b}`,i,p[b]),d.push("rank"),f.push({type:12,data:s[b]});for(let b=0;b<e.length;++b)f.push(...j(e[b].dims));f.push(...j(r));let m=G("output",i,r.length),l=m.indicesGet("indices",t),y=Array.from(Array(s.length).keys()).map(b=>`uniforms.sizeInConcatAxis${b}`).join(","),_=b=>`

  ${(()=>{b.registerUniform("outputSize","u32");for(let v=0;v<e.length;v++)b.registerUniform(`sizeInConcatAxis${v}`,"u32");return b.declareVariables(...n,m)})()}

  ${Co(s.length,y)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${m.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${l});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${s.length}u>(${y});
      ${l} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${zo(n,m)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:f}),getShaderSource:_}},Qp=(e,t)=>{let r=e.inputs,i=r[0].dims,a=z.normalizeAxis(t.axis,i.length);Eo(r,a);let s=i.slice();s[a]=r.reduce((u,d)=>u+(d.dims.length>a?d.dims[a]:0),0);let n=r.filter(u=>z.size(u.dims)>0);e.compute(Ao(n,a,s,r[0].dataType),{inputs:n})},Yp=e=>fe({axis:e.axis})}),Tt,It,Et,Na,zt=P(()=>{J(),re(),Tt=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},It=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Et=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Na=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,i]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=(e==null?void 0:e.activation_params)||[Td,Id];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Ie,Zp,Pa=P(()=>{Ie=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Zp=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Xp,Sm=P(()=>{Xp=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),rr,Ua,Wa=P(()=>{J(),re(),ae(),zt(),rr=(e,t,r,i,a)=>{let s=i-r;return`
      ${Array.from({length:r}).map((n,u)=>`
      if (${F(t.shape,u,t.rank)} != 1) {
        ${t.indicesSet(e,u,F(a,u+s,i))}
      } else {
        ${t.indicesSet(e,u,0)}
      }`).join("")}
`},Ua=(e,t,r,i,a=!1,s)=>{let n=e[0].dims,u=e[1].dims,d=n[n.length-2],p=u[u.length-1],f=n[n.length-1],m=_e(p),l=_e(f),y=_e(d),_=z.size(r)/m/y,b=e.length>2,v=i?i.slice(0,-2):r.slice(0,-2),x=[z.size(v),d,p],w=[{type:12,data:_},{type:12,data:d},{type:12,data:p},{type:12,data:f}];It(t,w),w.push(...j(v,n,u)),b&&w.push(...j(e[2].dims)),w.push(...j(x));let S=k=>{let I=Ra("batch_dims",e[0].dataType,v.length),E=B("a",e[0].dataType,n.length,l),C=B("b",e[1].dataType,u.length,m),R=G("output",e[0].dataType,x.length,m),N=Te(R.type.tensor),q=Tt(t,R.type.value,N),ee=[E,C],K="";if(b){let U=a?m:1;ee.push(B("bias",e[2].dataType,e[2].dims.length,U)),K=`${a?`value += bias[col / ${U}];`:`value += ${R.type.value}(bias[row + i]);`}`}let H=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Et(t,H);let ie=()=>{let U=`var a_data: ${E.type.value};`;for(let X=0;X<l;X++)U+=`
              let b_data${X} = b[(b_offset + (k + ${X}) * uniforms.N + col) / ${m}];`;for(let X=0;X<y;X++){U+=`a_data = a[(a_offset + (row + ${X}) * uniforms.K + k) / ${l}];`;for(let se=0;se<l;se++)U+=`
            values[${X}] = fma(${C.type.value}(a_data${l===1?"":`[${se}]`}), b_data${se}, values[${X}]);
`}return U};return`
  ${k.registerUniforms(H).registerInternalVariables(I).declareVariables(...ee,R)}
  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${m})) * ${m};
    var index1 = global_idx / (uniforms.N / ${m});
    let stride1 = uniforms.M / ${y};
    let row = (index1 % stride1) * ${y};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${I.offsetToIndices("batch")};`}

    var a_indices: ${E.type.indices};
    ${rr("a_indices",E,E.rank-2,I.rank,"batch_indices")}
    ${E.indicesSet("a_indices",E.rank-2,0)}
    ${E.indicesSet("a_indices",E.rank-1,0)}
    let a_offset = ${E.indicesToOffset("a_indices")};

    var b_indices: ${C.type.indices};
    ${rr("b_indices",C,C.rank-2,I.rank,"batch_indices")}
    ${C.indicesSet("b_indices",C.rank-2,0)}
    ${C.indicesSet("b_indices",C.rank-1,0)}
    let b_offset = ${C.indicesToOffset("b_indices")};
    var values: array<${R.type.value}, ${y}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${l}) {
      ${ie()}
    }
    for (var i = 0u; i < ${y}u; i++) {
      var value = values[i];
      ${K}
      ${q}
      let cur_indices = ${R.type.indices}(batch, row + i, col);
      let offset = ${R.indicesToOffset("cur_indices")};
      ${R.setByOffset(`offset / ${m}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${m};${l};${y};${a}`,inputDependencies:b?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:w}),getShaderSource:S}}}),Oo,Ro,ca,Ei,Bo,fa,Do,Ur,qa=P(()=>{J(),re(),ae(),zt(),Wa(),Pa(),Oo=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Ro=(e,t)=>e?`
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
        }`,ca=(e,t,r="f32",i,a=!1,s=32,n=!1,u=32)=>{let d=t[1]*e[1],p=t[0]*e[0],f=a?d:s,m=a?s:d,l=f/t[0],y=s/t[1];if(!((a&&l===4&&e[1]===4||!a&&(l===3||l===4))&&f%t[0]===0&&s%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${a} is true, innerElementSize ${l} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${l} must be 3 or 4.
  tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}. tileInner ${s} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${l}<${r}>, ${f/l}>, ${m}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${p/e[0]}>, ${s}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${l};
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
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${d};

  let num_tiles = ${n?`${Math.ceil(u/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${n?`i32(globalId.z) * ${u}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${y};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Oo(a,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${l===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Ro(a,l)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Ei=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Bo=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",fa=(e,t,r="f32",i,a=!1,s=32,n=!1,u=32,d=!1)=>{let p=e[1]*t[1],f=e[0]*t[0],m=a?p:s,l=a?s:p;if(!(l%t[1]===0&&m%t[0]===0&&s%t[1]===0))throw new Error(`tileAHight ${l} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${m} must be divisible by workgroupSize[0]${t[0]}, tileInner ${s} must be divisible by workgroupSize[1]${t[1]}`);let y=l/t[1],_=m/t[0],b=s/t[1],v=d?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${p};
    let globalColStart = i32(workgroupId.x) * ${f};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${l}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${m}; inputCol = inputCol + ${t[0]}) {
          ${Ei(a,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${s}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
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
let globalRowStart = i32(workgroupId.y) * ${p};

let tileRowA = i32(localId.y) * ${y};
let tileColA = i32(localId.x) * ${_};
let tileRowB = i32(localId.y) * ${b};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${_}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Ei(a,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${b}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Bo(a)}
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
  var<workgroup> mm_Asub : array<array<${r}, ${m}>, ${l}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${f}>, ${s}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${n?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${n?`${Math.ceil(u/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${n?`i32(globalId.z) * ${u}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${v}
  }
`},Do=(e,t,r,i,a=!1)=>{let[s,n,u,d]=i,p=Te(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${Ie(e,p)} {
      var value = ${Ie(e,p)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${n.type.indices};
        ${rr("aIndices",n,n.rank-2,s.rank,"batchIndices")}
        ${n.indicesSet("aIndices",n.rank-2,"u32(row)")}
        ${n.indicesSet("aIndices",n.rank-1,"u32(colIn)")}
        value = ${n.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${Ie(e,p)} {
      var value = ${Ie(e,p)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${u.type.indices};
        ${rr("bIndices",u,u.rank-2,s.rank,"batchIndices")}
        ${u.indicesSet("bIndices",u.rank-2,"u32(row)")}
        ${u.indicesSet("bIndices",u.rank-1,"u32(colIn)")}
        value = ${u.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ie(e,p)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${a?"bias[colIn]":`${Ie(e,p)}(bias[row])`};`:""}
        ${r}
        ${d.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Ur=(e,t,r,i,a=!1,s)=>{let n=e[0].dims,u=e[1].dims,d=n.slice(0,-2),p=u.slice(0,-2),f=i?i.slice(0,-2):r.slice(0,-2),m=z.size(f),l=n[n.length-2],y=n[n.length-1],_=u[u.length-1],b=y%4===0&&_%4===0,v=l<=8?[4,1,1]:[4,4,1],x=[8,8,1],w=[Math.ceil(_/x[0]/v[0]),Math.ceil(l/x[1]/v[1]),Math.ceil(m/x[2]/v[2])],S=b?4:1,k=[...d,l,y/S],I=k.length,E=[...p,y,_/S],C=E.length,R=[m,l,_/S],N=[{type:6,data:l},{type:6,data:_},{type:6,data:y}];It(t,N),N.push(...j(f,k,E));let q=["rank","rank"],ee=e.length>2;ee&&(N.push(...j(e[2].dims)),q.push("rank")),N.push(...j(R));let K=H=>{let ie=f.length,U=Ra("batchDims",e[0].dataType,ie,1),X=Te(e[0].dataType),se=B("a",e[0].dataType,I,S),Y=B("b",e[1].dataType,C,S),te=G("result",e[0].dataType,R.length,S),le=[se,Y];if(ee){let ve=a?S:1;le.push(B("bias",e[2].dataType,e[2].dims.length,ve))}let M=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Et(t,M);let L=Te(te.type.tensor),oe=Tt(t,te.type.value,L),be=Do(S,ee,oe,[U,se,Y,te],a);return`
  ${H.registerUniforms(M).registerInternalVariables(U).declareVariables(...le,te)}
  ${be}
  ${b?ca(v,x,X,U):fa(v,x,X,U)}
                   `};return{name:"MatMul",shaderCache:{hint:`${v};${t.activation};${b};${a}`,inputDependencies:q},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:w[0],y:w[1],z:w[2]},programUniforms:N}),getShaderSource:K}}}),Mo,Jp,Tm=P(()=>{J(),nt(),ae(),zt(),Pa(),Sm(),qa(),Mo=(e,t,r,i,a=!1,s,n=4,u=4,d=4,p="f32")=>{let f=N=>{switch(N){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${p}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${N} is not supported.`)}},m=N=>{switch(N){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${N} is not supported.`)}},l=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,y=e?`
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
    `,_=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",b=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",v=e?"row":"col",x=e?"col":"row",w=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${v} / outWidth;
    let outCol = ${v} % outWidth;

    let WRow = ${x} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${x} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${x} % inChannels;
    var resData = ${Ie(n,p)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${_} && xCol >= 0 && xCol < ${b}) {
      ${l}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${f(n)}
    }
    return resData;`,S=e?t&&i?`
    let col = colIn * ${n};
    ${w}`:`
    let col = colIn * ${n};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${w}
    }
    return ${Ie(n,p)}(0.0);`:i&&r?`
    let col = colIn * ${n};
    ${w}`:`
    let col = colIn * ${n};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${w}
    }
    return ${Ie(n,p)}(0.0);`,k=e?i&&r?m(u):`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${m(u)}
    }
    return ${Ie(u,p)}(0.0);`:`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${m(u)}
    }
    return ${Ie(u,p)}(0.0);`,I=Ie(d,p),E=Ie(e?n:u,p),C=Ie(e?u:n,p),R=Tt(s,I,p);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${E} {
      ${e?S:k}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?k:S}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${I}) {
      let col = colIn * ${d};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${y}
      ${Zp(a)}
      ${R}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Jp=(e,t,r,i,a,s,n,u,d)=>{let p=t.format==="NHWC",f=p?e[0].dims[3]:e[0].dims[1],m=r[0],l=p?r[2]:r[3],y=p?r[1]:r[2],_=p?r[3]:r[1],b=p&&(f%4===0||f%3===0)&&_%4===0,v=p?_:l*y,x=p?l*y:_,w=[8,8,1],S=i<=8?[4,1,1]:[4,4,1],k=[Math.ceil(v/w[0]/S[0]),Math.ceil(x/w[1]/S[1]),Math.ceil(m/w[2]/S[2])];ce("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${k}`);let I=b?p&&f%4!==0?3:4:1,E=w[1]*S[1],C=w[0]*S[0],R=Math.max(w[0]*I,w[1]),N=i%E===0,q=a%C===0,ee=s%R===0,K=b?[I,4,4]:[1,1,1],H=[{type:6,data:i},{type:6,data:a},{type:6,data:s},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];It(t,H),H.push(...j(e[0].dims,e[1].dims));let ie=["rank","rank"];n&&(H.push(...j(e[2].dims)),ie.push("rank")),H.push(...j(r));let U=X=>{let se=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Et(t,se);let Y=b?4:1,te=Te(e[0].dataType),le=`
      fn setOutputAtIndex(flatIndex : i32, value : ${b?`vec4<${te}>`:te}) {
        result[flatIndex] = ${b?`vec4<${te}>`:te}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${b?`vec4<${te}>`:te}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${b?"/ 4":""}, value);
      }`,M=B("x",e[0].dataType,e[0].dims.length,I===3?1:I),L=B("w",e[1].dataType,e[1].dims.length,Y),oe=[M,L],be=G("result",e[0].dataType,r.length,Y);if(n){let ve=B("bias",e[2].dataType,e[2].dims.length,Y);oe.push(ve),le+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${b?`vec4<${te}>`:te} {
          return bias[coords.${p?"w":"y"}${b?"/ 4":""}];
        }`}return`
        ${Xp("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${X.registerUniforms(se).declareVariables(...oe,be)}
        ${le}
        ${Mo(p,N,q,ee,n,t,K[0],K[1],K[2],te)}
        ${b?ca(S,w,te,void 0,!p,R):fa(S,w,te,void 0,!p,R,!1,void 0,u)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${I};${b};${N};${q};${ee};${E};${C};${R}`,inputDependencies:ie},getRunData:()=>({outputs:[{dims:d?d(r):r,dataType:e[0].dataType}],dispatchGroup:{x:k[0],y:k[1],z:k[2]},programUniforms:H}),getShaderSource:U}}}),No,Ci,Gt,Po,zi,Uo,eh,th,Im=P(()=>{J(),nt(),re(),ae(),zt(),Pa(),No=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Ci=e=>typeof e=="number"?[e,e,e]:e,Gt=(e,t)=>t<=1?e:e+(e-1)*(t-1),Po=(e,t,r,i=1)=>{let a=Gt(t,i);return Math.floor((e[0]*(r-1)-r+a)/2)},zi=(e,t,r,i,a)=>{a==null&&(a=Po(e,t[0],i[0]));let s=[0,0,0,r];for(let n=0;n<3;n++)e[n]+2*a>=t[n]&&(s[n]=Math.trunc((e[n]-t[n]+2*a)/i[n]+1));return s},Uo=(e,t,r,i,a,s,n,u,d,p)=>{let f,m,l,y;if(e==="VALID"&&(e=0),typeof e=="number"){f={top:e,bottom:e,left:e,right:e,front:e,back:e};let _=zi([t,r,i,1],[u,d,p],1,[a,s,n],e);m=_[0],l=_[1],y=_[2]}else if(Array.isArray(e)){if(!e.every((b,v,x)=>b===x[0]))throw Error(`Unsupported padding parameter: ${e}`);f={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let _=zi([t,r,i,1],[u,d,p],1,[a,s,n],e[0]);m=_[0],l=_[1],y=_[2]}else if(e==="SAME_UPPER"){m=Math.ceil(t/a),l=Math.ceil(r/s),y=Math.ceil(i/n);let _=(m-1)*a+u-t,b=(l-1)*s+d-r,v=(y-1)*n+p-i,x=Math.floor(_/2),w=_-x,S=Math.floor(b/2),k=b-S,I=Math.floor(v/2),E=v-I;f={top:S,bottom:k,left:I,right:E,front:x,back:w}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:f,outDepth:m,outHeight:l,outWidth:y}},eh=(e,t,r,i,a,s=!1,n="channelsLast")=>{let u,d,p,f,m;if(n==="channelsLast")[u,d,p,f,m]=e;else if(n==="channelsFirst")[u,m,d,p,f]=e;else throw new Error(`Unknown dataFormat ${n}`);let[l,,y,_,b]=t,[v,x,w]=Ci(r),[S,k,I]=Ci(i),E=Gt(y,S),C=Gt(_,k),R=Gt(b,I),{padInfo:N,outDepth:q,outHeight:ee,outWidth:K}=Uo(a,d,p,f,v,x,w,E,C,R),H=s?l*m:l,ie=[0,0,0,0,0];return n==="channelsFirst"?ie=[u,H,q,ee,K]:n==="channelsLast"&&(ie=[u,q,ee,K,H]),{batchSize:u,dataFormat:n,inDepth:d,inHeight:p,inWidth:f,inChannels:m,outDepth:q,outHeight:ee,outWidth:K,outChannels:H,padInfo:N,strideDepth:v,strideHeight:x,strideWidth:w,filterDepth:y,filterHeight:_,filterWidth:b,effectiveFilterDepth:E,effectiveFilterHeight:C,effectiveFilterWidth:R,dilationDepth:S,dilationHeight:k,dilationWidth:I,inShape:e,outShape:ie,filterShape:t}},th=(e,t,r,i,a,s)=>{let n=s==="channelsLast";n?e[0].dims[3]:e[0].dims[1];let u=[64,1,1],d={x:r.map((v,x)=>x)},p=[Math.ceil(No(d.x.map(v=>r[v]))/u[0]),1,1];ce("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${p}`);let f=1,m=z.size(r),l=[{type:12,data:m},{type:12,data:i},{type:12,data:a},{type:12,data:t.strides},{type:12,data:t.dilations}];It(t,l),l.push(...j(e[0].dims,e[1].dims));let y=["rank","rank"],_=e.length===3;_&&(l.push(...j(e[2].dims)),y.push("rank")),l.push(...j(r));let b=v=>{let x=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:a.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Et(t,x);let w=1,S=Te(e[0].dataType),k=B("x",e[0].dataType,e[0].dims.length,f),I=B("W",e[1].dataType,e[1].dims.length,w),E=[k,I],C=G("result",e[0].dataType,r.length,w),R="";if(_){let ee=B("bias",e[2].dataType,e[2].dims.length,w);E.push(ee),R+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${S} {
          return bias[${n?F("coords",4,5):F("coords",1,5)}];
        }`}let N=Ie(f,S),q=Tt(t,N,S);return`
            ${R}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${k.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${I.getByIndices("aIndices")};
            }
          ${v.registerUniforms(x).declareVariables(...E,C)}
          ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${C.offsetToIndices("global_idx")};
              let batch = ${F("coords",0,k.rank)};
              let d2 = ${n?F("coords",k.rank-1,k.rank):F("coords",1,k.rank)};
              let xFRCCorner = vec3<u32>(${n?F("coords",1,k.rank):F("coords",2,k.rank)},
              ${n?F("coords",2,k.rank):F("coords",3,k.rank)},
              ${n?F("coords",3,k.rank):F("coords",4,k.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${n?F("uniforms.x_shape",1,k.rank):F("uniforms.x_shape",2,k.rank)};
              let xShapeZ = ${n?F("uniforms.x_shape",2,k.rank):F("uniforms.x_shape",3,k.rank)};
              let xShapeW = ${n?F("uniforms.x_shape",3,k.rank):F("uniforms.x_shape",4,k.rank)};
              let xShapeU = ${n?F("uniforms.x_shape",4,k.rank):F("uniforms.x_shape",1,k.rank)};
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
              ${_?"value = value + getBiasByOutputCoords(coords)":""};
              ${q}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${n};${f};${_}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:p[0],y:p[1],z:p[2]},programUniforms:l}),getShaderSource:b}}}),rh,ih,Em=P(()=>{J(),re(),ae(),zt(),rh=(e,t,r,i)=>{let a=e.length>2,s=a?"value += b[output_channel];":"",n=e[0].dims,u=e[1].dims,d=t.format==="NHWC",p=d?r[3]:r[1],f=p/t.group,m=d&&f>=4?_e(p):1,l=z.size(r)/m,y=[{type:12,data:l},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:f}];It(t,y),y.push(...j(n,[u[0],u[1],u[2],u[3]/m]));let _=a?["rank","rank","rank"]:["rank","rank"];y.push(...j([r[0],r[1],r[2],r[3]/m]));let b=v=>{let x=G("output",e[0].dataType,r.length,m),w=Te(x.type.tensor),S=Tt(t,x.type.value,w),k=B("x",e[0].dataType,n.length),I=B("w",e[1].dataType,u.length,m),E=[k,I];a&&E.push(B("b",e[2].dataType,e[2].dims,m));let C=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Et(t,C);let R=d?`
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
            let xVal = ${k.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${I.get("wHeight","wWidth","wInChannel","output_channel")};
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

            let xVal = ${k.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${I.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${v.registerUniforms(C).declareVariables(...E,x)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${x.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${d?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${d?1:2}], outputIndices[${d?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${m} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${d?2:1}];

    var value: ${x.type.value} = ${x.type.value}(0);
    ${R}
    ${s}
    ${S}
    ${x.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${m}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:y}),getShaderSource:b}},ih=(e,t,r,i)=>{let a=e.length>2,s=_e(r[3]),n=_e(r[2]),u=z.size(r)/s/n,d=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/s],p=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/s],f=[r[0],r[1],r[2],r[3]/s],m=[{type:12,data:u},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];It(t,m),m.push(...j(d,p,f));let l=(n-1)*t.strides[1]+p[1],y=_=>{let b=G("output",e[0].dataType,f.length,s),v=Te(b.type.tensor),x=Tt(t,b.type.value,v),w=B("x",e[0].dataType,d.length,s),S=B("w",e[1].dataType,p.length,s),k=[w,S];a&&k.push(B("b",e[2].dataType,e[2].dims,s));let I=a?"value += b[output_channel];":"",E=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Et(t,E),`
  ${_.registerUniforms(E).declareVariables(...k,b)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${n}u;
    let col = (index1 % width1) * ${n}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${w.type.value}, ${l}>;
    var values: array<${b.type.value}, ${n}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${p[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${l}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${w.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${w.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${p[1]}; w_width++) {
          let w_val = ${S.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${n}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${n}u; i++) {
      var value = values[i];
      ${I}
      ${x}
      ${b.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${s};${n};${l};${p[0]};${p[1]}`,inputDependencies:a?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:m}),getShaderSource:y}}}),Wo,Sr,qo,Tr,ma,Ai,Lo,Vo,ga,Cm=P(()=>{re(),Tm(),Im(),qa(),Em(),zt(),Wa(),mt(),Wo=(e,t,r,i,a,s)=>{let n=e[0],u=e.slice(s?1:2,s?3:4),d=u.length,p=t[0],f=t.slice(2).map((l,y)=>l+(l-1)*(r[y]-1)),m=u.map((l,y)=>l+i[y]+i[y+d]).map((l,y)=>Math.floor((l-f[y]+a[y])/a[y]));return m.splice(0,0,n),m.splice(s?3:1,0,p),m},Sr=[2,3,1,0],qo=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Tr=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let s=2;s<t[1].dims.length;++s)r[s-2]===0&&(r[s-2]=t[1].dims[s]);let i=e.pads.slice();Nr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let a=Object.assign({},e);return Object.assign(a,{kernelShape:r,pads:i}),a},ma=e=>{let t=Na(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],a=e.dilations,s=e.group,n=e.kernel_shape,u=e.pads,d=e.strides,p=e.w_is_const();return{autoPad:i,format:r,dilations:a,group:s,kernelShape:n,pads:u,strides:d,wIsConst:p,...t,cacheKey:`${e.format};${t.activation};`}},Ai=(e,t,r,i)=>{let a=r.format==="NHWC",s=Wo(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,a);if(r.group!==1){let E=[t[0]];if(a){let C=e.kernelCustomData.wT??e.compute(De(t[1],Sr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=C),E.push(C)}else E.push(t[1]);t.length===3&&E.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&a&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(ih(E,r,s,i),{inputs:E}):e.compute(rh(E,r,s,i),{inputs:E});return}let n=t.length===3,u=t[0].dims[a?1:2],d=t[0].dims[a?2:3],p=t[0].dims[a?3:1],f=t[1].dims[2],m=t[1].dims[3],l=s[a?1:2],y=s[a?2:3],_=s[a?3:1],b=a&&f===u&&m===d&&r.pads[0]===0&&r.pads[1]===0;if(b||f===1&&m===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let E=s[0],C,R,N,q=[];if(a){let H=e.kernelCustomData.wT??e.compute(De(t[1],Sr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=H),b){let ie=u*d*p;C=t[0].reshape([1,E,ie]),R=H.reshape([1,ie,_]),N=[1,E,_]}else C=t[0].reshape([E,u*d,p]),R=H.reshape([1,p,_]),N=[E,l*y,_];q.push(C),q.push(R)}else C=t[0].reshape([E,p,u*d]),R=t[1].reshape([1,_,p]),N=[E,_,l*y],q.push(R),q.push(C);n&&q.push(t[2]);let ee=N[2],K=q[0].dims[q[0].dims.length-1];ee<8&&K<8?e.compute(Ua(q,r,s,N,a,i),{inputs:q}):e.compute(Ur(q,r,s,N,a,i),{inputs:q});return}let v=!0,x=e.kernelCustomData.wT??e.compute(De(t[1],Sr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=x);let w=[t[0],x];n&&w.push(t[2]);let S=a?l*y:_,k=a?_:l*y,I=f*m*p;e.compute(Jp(w,r,s,S,k,I,n,v,i),{inputs:w})},Lo=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=[0,t.pads[0],0,t.pads[1]],s=[1].concat(t.strides),n=[1].concat(t.dilations),u=[1].concat(t.kernelShape),d=Tr({...t,pads:a,strides:s,dilations:n,kernelShape:u},i);Ai(e,i,d,p=>r?[p[0],p[2],p[3]]:[p[0],p[1],p[3]])},Vo=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",a=Tr(r,t),s=r.autoPad==="NOTSET"?r.pads:r.autoPad,n=eh(t[0].dims,t[1].dims,r.strides,r.dilations,s,!1,i);e.compute(th(t,a,n.outShape,[n.filterDepth,n.filterHeight,n.filterWidth],[n.padInfo.front,n.padInfo.top,n.padInfo.left],i))},ga=(e,t)=>{if(qo(e.inputs,t),e.inputs[0].dims.length===3)Lo(e,t);else if(e.inputs[0].dims.length===5)Vo(e,e.inputs,t);else{let r=Tr(t,e.inputs);Ai(e,e.inputs,r)}}}),ah,zm=P(()=>{J(),nt(),re(),ae(),ah=(e,t,r)=>{let i=e.length>2,a=t.outputShape,s=t.format==="NHWC",n=t.group,u=e[1].dims,d=u[2]/n,p=u[3],f=s?_e(d):1,m=s?_e(p):1,l=s?p===1?f:m:1,y=z.size(a)/m,_=[Math.ceil(y/64),1,1];ce("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${_}`);let b=["rank","rank"],v=[t.strides[0],t.strides[1]],x=[t.kernelShape[s?1:2],t.kernelShape[s?2:3]],w=[t.dilations[0],t.dilations[1]],S=[x[0]+(t.dilations[0]<=1?0:(t.kernelShape[s?1:2]-1)*(t.dilations[0]-1)),x[1]+(t.dilations[1]<=1?0:(t.kernelShape[s?2:3]-1)*(t.dilations[1]-1))],k=[S[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),S[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],I=[{type:12,data:y},{type:12,data:v},{type:12,data:x},{type:12,data:w},{type:12,data:S},{type:6,data:k},{type:12,data:d},{type:12,data:p},...j(e[0].dims,e[1].dims)];i&&(I.push(...j(e[2].dims)),b.push("rank")),I.push(...j(a));let E=C=>{let R=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:v.length},{name:"filter_dims",type:"u32",length:x.length},{name:"dilations",type:"u32",length:x.length},{name:"effective_filter_dims",type:"u32",length:S.length},{name:"pads",type:"i32",length:k.length},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],N=Te(e[0].dataType),q=s?1:2,ee=s?2:3,K=s?3:1,H=B("W",e[1].dataType,e[1].dims.length,l),ie=B("Dy",e[0].dataType,e[0].dims.length,f),U=[ie,H];i&&U.push(B("bias",e[2].dataType,[a[K]].length,m));let X=G("result",e[0].dataType,a.length,m),se=()=>{let te="";if(f===1)te+=`
        let w_offset = ${H.indicesToOffset(`${H.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
        let wValue = ${H.getByOffset(`w_offset / ${l}`)};
        dotProd = dotProd + xValue * wValue;`;else if(p===1)te+=`
          let wValue = ${H.getByOffset(`${H.indicesToOffset(`${H.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)} / ${l}`)};
          dotProd = dotProd + dot(xValue, wValue);`;else for(let le=0;le<f;le++)te+=`
            let wValue${le} = ${H.getByOffset(`${H.indicesToOffset(`${H.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${le}, wOutChannel)`)} / ${l}`)};
            dotProd = dotProd + xValue[${le}] * wValue${le};`;return te},Y=`
            let outputIndices = ${X.offsetToIndices(`global_idx * ${m}`)};
            let batch = ${X.indicesGet("outputIndices",0)};
            let d1 = ${X.indicesGet("outputIndices",K)};
            let r = ${X.indicesGet("outputIndices",q)};
            let c = ${X.indicesGet("outputIndices",ee)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${X.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${N}(dyRCorner) + ${N}(wR)) / ${N}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${N}(uniforms.Dy_shape[${q}]) || fract(dyR) > 0.0 ||
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
                let dyC = (${N}(dyCCorner) + ${N}(wC)) / ${N}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${N}(uniforms.Dy_shape[${ee}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + ${f}) {
                  let xValue = ${s?ie.getByOffset(`${ie.indicesToOffset(`${ie.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${f}`):ie.get("batch","inputChannel","idyR","idyC")};
                  ${se()}
                  inputChannel = inputChannel + ${f};
                }
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${m}]`:""};
            ${X.setByOffset("global_idx","value")};
          `;return`
    ${C.registerUniforms(R).declareVariables(...U,X)}
      ${C.mainStart()}
      ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${Y}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${f}${l}${m}${p===1}`,inputDependencies:b},getRunData:()=>({dispatchGroup:{x:_[0],y:_[1],z:_[2]},outputs:[{dims:r?r(a):a,dataType:e[0].dataType}],programUniforms:I}),getShaderSource:E}}}),Ho,Go,Fo,Oi,nh,jo,Ri,Ko,sh,Am=P(()=>{zm(),zt(),mt(),Ho=(e,t,r,i,a,s)=>(e-1)*t+r+(i-1)*a+1-s,Go=(e,t,r,i,a)=>{let s=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=s,r[a]=e-s):t==="SAME_LOWER"&&(r[i]=e-s,r[a]=s)},Fo=(e,t,r,i,a,s,n,u,d,p)=>{let f=e.length-2,m=p.length===0;d.length<f&&d.push(...Array(f-d.length).fill(0));let l=e[0],y=t[u?3:1]*a;for(let _=0,b=e.length-f-(u?1:0);_<f;++_,++b){let v=e[b],x=m?v*n[_]:p[_],w=Ho(v,n[_],s[_],t[b],r[_],x);Go(w,i,s,_,_+f),m&&p.push(n[_]*(v-1)+d[_]+(t[b]-1)*r[_]+1-s[_]-s[_+f])}p.splice(0,0,l),p.splice(u?3:1,0,y)},Oi=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((m,l)=>m*l,1)===0){r.length=0;for(let m=2;m<t[1].dims.length;++m)r.push(t[1].dims[m])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let a=e.pads.slice(),s=e.outputShape.slice(),n=e.outputPadding.slice(),u=t[0].dims,d=e.dilations.slice();if(d.reduce((m,l)=>m+l,0)===0){let m=t[0].dims.length-2;d=new Array(m).fill(1)}let p=e.strides.slice();if(p.reduce((m,l)=>m+l,0)===0){let m=t[0].dims.length-2;p=new Array(m).fill(1)}Fo(u,r,d,e.autoPad,e.group,a,p,i,n,s);let f=Object.assign({},e);return Object.assign(f,{kernelShape:r,pads:a,outputPadding:n,outputShape:s,dilations:d,strides:p}),f},nh=e=>{let t=Na(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],a=e.dilations,s=e.group,n=e.kernelShape,u=e.pads,d=e.strides,p=e.wIsConst(),f=e.outputPadding,m=e.outputShape;return{autoPad:i,format:r,dilations:a,group:s,kernelShape:n,outputPadding:f,outputShape:m,pads:u,strides:d,wIsConst:p,...t,cacheKey:`${e.format};${t.activation};`}},jo=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let a=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==a))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.reduce((n,u)=>n+u,0)>0&&t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.reduce((n,u)=>n+u,0)>0&&t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.reduce((n,u)=>n+u,0)>0&&t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.outputPadding.length!==s&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${s}D`);if(t.kernelShape.reduce((n,u)=>n+u,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Ri=(e,t,r,i)=>{let a=e.kernelCustomData.wT??e.compute(De(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=a);let s=[t[0],a];t.length===3&&s.push(t[2]),e.compute(ah(s,r,i),{inputs:s})},Ko=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=t.kernelShape;(a.length===0||a[0]===0)&&(a=[e.inputs[1].dims[2]]);let s=t.dilations;(s.length===0||s[0]===0)&&(s=[1]);let n=t.strides;(n.length===0||n[0]===0)&&(n=[1]);let u=t.pads;u.length===0&&(u=[0,0]),u=[0,u[0],0,u[1]],n=[1].concat(n),s=[1].concat(s),a=[1].concat(a);let d=t.outputPadding;d=[0].concat(d);let p=Oi({...t,pads:u,strides:n,dilations:s,kernelShape:a,outputPadding:d},i);Ri(e,i,p,f=>r?[f[0],f[2],f[3]]:[f[0],f[1],f[3]])},sh=(e,t)=>{if(jo(e.inputs,t),e.inputs[0].dims.length===3)Ko(e,t);else{let r=Oi(t,e.inputs);Ri(e,e.inputs,r)}}}),Qo,oh,uh,Om=P(()=>{J(),re(),we(),ae(),Qo=(e,t,r,i)=>{let a=z.size(t),s=t.length,n=B("input",e,s),u=G("output",e,s),d=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),p=z.normalizeAxis(d,s),f=m=>{let l=` i32(${n.indicesGet("inputIndices","uniforms.axis")}) `,y=F("uniforms.input_shape","uniforms.axis",s),_=i.reverse?l+(i.exclusive?" + 1":""):"0",b=i.reverse?y:l+(i.exclusive?"":" + 1");return`
                ${m.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(n,u)}
                ${m.mainStart()}
                  ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${u.offsetToIndices("global_idx")};
                  var sum = ${u.type.value}(0);
                  let first : i32 = ${_};
                  let last : i32 = ${b};
                  for (var i : i32 = first; i < last; i++) {
                    ${n.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${n.getByIndices("inputIndices")};
                  }
                  ${u.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},{type:12,data:p},...j(t,t)]}),getShaderSource:f}},oh=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,a=e.inputs[1];e.compute(Qo(i,r,a,t),{inputs:[0]})},uh=e=>{let t=e.exclusive===1,r=e.reverse===1;return fe({exclusive:t,reverse:r})}}),Yo,Zo,Xo,lh,dh,Rm=P(()=>{J(),re(),we(),ae(),Yo=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Zo=(e,t,r,i)=>{let a=[];a.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let s=0;s<t;++s)a.push(r.indicesSet("a",e[s],`i[${s}]`));return a.push("return a;}"),a.join(`
`)},Xo=(e,t)=>{let r,i,a,s,n,u,d=t.format==="NHWC",p=t.blocksize,f=t.mode==="DCR";d?([r,i,a,s]=e.dims,n=f?[r,i,a,p,p,s/p**2]:[r,i,a,s/p**2,p,p],u=f?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,a,s]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],n=f?[r,p,p,s/p**2,i,a]:[r,s/p**2,p,p,i,a],u=f?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let m=e.reshape(n),l=m.dims.length,y=e.dataType,_=B("a",y,l),b=G("output",y,l),v=x=>`
  ${x.registerUniform("output_size","u32").declareVariables(_,b)}

  ${Zo(u,l,_,b)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${b.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${b.setByOffset("global_idx",_.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:x=>{let w=d?[r,i*p,a*p,s/p**2]:[r,s/p**2,i*p,a*p],S=z.size(w),k=m.dims,I=z.sortBasedOnPerm(k,u);return{outputs:[{dims:w,dataType:x[0].dataType}],dispatchGroup:{x:Math.ceil(S/64)},programUniforms:[{type:12,data:S},...j(k,I)]}},getShaderSource:v}},lh=(e,t)=>{Yo(e.inputs),e.compute(Xo(e.inputs[0],t))},dh=e=>fe({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Ir,Ft,Bi,Jo,eu,tu,ru,Di,iu,ph,hh,Bm=P(()=>{J(),re(),we(),ae(),Ir="[a-zA-Z]|\\.\\.\\.",Ft="("+Ir+")+",Bi="^"+Ft+"$",Jo="("+Ft+",)*"+Ft,eu="^"+Jo+"$",tu=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},ru=class{constructor(e,t){var a;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(eu)))throw new Error("Invalid LHS term");if(r.split(",").forEach((s,n)=>{let u=e[n].dims.slice();if(!s.match(RegExp(Bi)))throw new Error("Invalid LHS term");let d=this.processTerm(s,!0,u,n);this.lhs.push(d)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([s,n])=>n.count===1||s==="...").map(([s])=>s).join("");else if(!i.match(RegExp(Ft)))throw new Error("Invalid RHS");(a=i.match(RegExp(Ir,"g")))==null||a.forEach(s=>{if(s==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let n=this.symbolToInfo.get(s);if(n===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(n.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let a=r.length,s=!1,n=[],u=0;if(!e.match(RegExp(Bi))&&!t&&e!=="")throw new Error("Invalid LHS term");let d=e.match(RegExp(Ir,"g")),p=new tu(i);return d==null||d.forEach((f,m)=>{if(f==="..."){if(s)throw new Error("Only one ellipsis is allowed per input term");s=!0;let l=a-d.length+1;if(l<0)throw new Error("Ellipsis out of bounds");if(n=r.slice(u,u+l),this.hasEllipsis){if(this.ellipsisDims.length!==n.length||this.ellipsisDims.toString()!==n.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=n;else throw new Error("Ellipsis must be specified in the LHS");for(let y=0;y<n.length;y++){let _=String.fromCharCode("0".charCodeAt(0)+y);p.addSymbol(_,m+y),this.addSymbol(_,r[u++],i)}}else p.addSymbol(f,m+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(f,r[u++],i)}),p}},Di=e=>e+"_max",iu=(e,t,r,i)=>{let a=e.map(p=>p.length).map((p,f)=>B(`input${f}`,t,p)),s=z.size(i),n=G("output",t,i.length),u=[...r.symbolToInfo.keys()].filter(p=>!r.rhs.symbolToIndices.has(p)),d=p=>{let f=[],m="var prod = 1.0;",l="var sum = 0.0;",y="sum += prod;",_=[],b=[],v=[],x=[],w=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((k,I)=>{var E;if(r.rhs.symbolToIndices.has(I)){let C=(E=r.rhs.symbolToIndices.get(I))==null?void 0:E[0];C!==void 0&&r.lhs.forEach((R,N)=>{if(k.inputIndices.includes(N)){let q=R.symbolToIndices.get(I);if(q===void 0)throw new Error("Invalid symbol error");q.forEach(ee=>{f.push(`${a[N].indicesSet(`input${N}Indices`,ee,n.indicesGet("outputIndices",C))}`)})}})}else r.lhs.forEach((C,R)=>{if(k.inputIndices.includes(R)){let N=C.symbolToIndices.get(I);if(N===void 0)throw new Error("Invalid symbol error");N.forEach(q=>{_.push(`${a[R].indicesSet(`input${R}Indices`,q,`${I}`)}`)}),x.push(`prod *= ${a[R].getByIndices(`input${R}Indices`)};`)}}),b.push(`for(var ${I}: u32 = 0; ${I} < uniforms.${Di(I)}; ${I}++) {`),v.push("}")});let S=w?[...f,`let sum = ${a.map((k,I)=>k.getByIndices(`input${I}Indices`)).join(" * ")};`]:[...f,l,...b,..._,m,...x,y,...v];return`
            ${p.registerUniforms(u.map(k=>({name:`${Di(k)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...a,n)}

            ${p.mainStart()}
            ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${n.offsetToIndices("global_idx")};
            ${a.map((k,I)=>`var input${I}Indices: ${a[I].type.indices};`).join(`
`)}
            ${S.join(`
`)};
            ${n.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let p=u.filter(m=>r.symbolToInfo.has(m)).map(m=>{var l;return{type:12,data:((l=r.symbolToInfo.get(m))==null?void 0:l.dimValue)||0}});p.push({type:12,data:s});let f=e.map((m,l)=>[...j(m)]).reduce((m,l)=>m.concat(l),p);return f.push(...j(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:f}},getShaderSource:d}},ph=(e,t)=>{let r=new ru(e.inputs,t.equation),i=r.outputDims,a=e.inputs.map((s,n)=>s.dims);e.compute(iu(a,e.inputs[0].dataType,r,i))},hh=e=>{let t=e.equation.replace(/\s+/g,"");return fe({equation:t})}}),au,Mi,nu,su,ch,Dm=P(()=>{J(),re(),ae(),au=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,a=t.length<r.length?0:t.length-r.length;for(;i<r.length&&a<t.length;++i,++a)if(r[i]!==t[a]&&r[i]!==1&&t[a]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Mi=(e,t)=>{let r=e.length-t.length,i=[];for(let a=0;a<r;++a)i.push(e[a]);for(let a=0;a<t.length;++a)i.push(t[a]===1?e[a+r]:t[a]);return i},nu=(e,t)=>e.length>t.length?Mi(e,t):Mi(t,e),su=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=nu(t,r),a=e[0].dataType,s=a===9||z.size(t)===1,n=a===9||t.length>0&&t[t.length-1]%4===0?4:1,u=s||i.length>0&&i[i.length-1]%4===0?4:1,d=Math.ceil(z.size(i)/u),p=m=>{let l=B("input",a,t.length,n),y=G("output",a,i.length,u),_;if(a===9){let b=(v,x,w="")=>`
          let outputIndices${x} = ${y.offsetToIndices(`outputOffset + ${x}u`)};
          let offset${x} = ${l.broadcastedIndicesToOffset(`outputIndices${x}`,y)};
          let index${x} = offset${x} / 4u;
          let component${x} = offset${x} % 4u;
          ${v}[${x}] = ${w}(${l.getByOffset(`index${x}`)}[component${x}]);
        `;_=`
        let outputOffset = global_idx * ${u};
        var data = vec4<u32>(0);
        ${b("data",0,"u32")}
        ${b("data",1,"u32")}
        ${b("data",2,"u32")}
        ${b("data",3,"u32")}
        ${y.setByOffset("global_idx","data")}
      }`}else _=`
        let outputIndices = ${y.offsetToIndices(`global_idx * ${u}`)};
        let inputOffset = ${l.broadcastedIndicesToOffset("outputIndices",y)};
        let data = ${y.type.value}(${l.getByOffset(`inputOffset / ${n}`)});
        ${y.setByOffset("global_idx","data")}
      }`;return`
    ${m.registerUniform("vec_size","u32").declareVariables(l,y)}
    ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${_}`},f=[{type:12,data:d},...j(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${n}${u}`,inputDependencies:["rank"]},getShaderSource:p,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:f})}},ch=e=>{au(e.inputs),e.compute(su(e.inputs),{inputs:[0]})}}),ou,fh,Mm=P(()=>{J(),re(),ae(),Ma(),ou=e=>{let t=e[0].dataType,r=z.size(e[0].dims),i=z.size(e[1].dims),a=i%4===0,s=n=>{let u=B("x",t,[1],4),d=B("bias",t,[1],4),p=G("y",t,[1],4),f=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],m=y=>`
      let bias${y}_offset: u32 = (global_idx * 4 + ${y}) % uniforms.bias_size;
      let bias${y} = ${d.getByOffset(`bias${y}_offset / 4`)}[bias${y}_offset % 4];`,l=a?`
      let bias = ${d.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${m(0)}${m(1)}${m(2)}${m(3)}
      let bias = ${u.type.value}(bias0, bias1, bias2, bias3);`;return`${n.registerUniforms(f).declareVariables(u,d,p)}

    ${pa(Ce(t))}

    ${n.mainStart(Ut)}
      ${n.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${u.getByOffset("global_idx")};
      ${l}
      let x_in = x + bias;
      ${p.setByOffset("global_idx",ha("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${a}`,inputDependencies:["type","type"]},getShaderSource:s,getRunData:n=>({outputs:[{dims:n[0].dims,dataType:n[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/Ut/4)}})}},fh=e=>{e.inputs.length<2||z.size(e.inputs[1].dims)===0?Bp(e):e.compute(ou(e.inputs))}}),uu,lu,mh,gh,Nm=P(()=>{J(),re(),we(),ae(),uu=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},lu=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,s=z.normalizeAxis(t.axis,a),n=r.slice(0);n.splice(s,1,...i);let u=r[s],d=e[0].dataType===9?4:1,p=Math.ceil(z.size(n)/d),f=[{type:12,data:p},{type:6,data:u},{type:12,data:s},...j(e[0].dims,e[1].dims,n)],m=l=>{let y=B("data",e[0].dataType,e[0].dims.length,d),_=B("inputIndices",e[1].dataType,e[1].dims.length),b=G("output",e[0].dataType,n.length,d),v=w=>{let S=i.length,k=`var indicesIndices${w}  = ${_.type.indices}(0);`;for(let I=0;I<S;I++)k+=`${S>1?`indicesIndices${w}[${I}]`:`indicesIndices${w}`} = ${n.length>1?`outputIndices${w}[uniforms.axis + ${I}]`:`outputIndices${w}`};`;k+=`
          var idx${w} = ${_.getByIndices(`indicesIndices${w}`)};
          if (idx${w} < 0) {
            idx${w} = idx${w} + uniforms.axisDimLimit;
          }
          var dataIndices${w} : ${y.type.indices};
        `;for(let I=0,E=0;I<a;I++)I===s?(k+=`${a>1?`dataIndices${w}[${I}]`:`dataIndices${w}`} = u32(idx${w});`,E+=S):(k+=`${a>1?`dataIndices${w}[${I}]`:`dataIndices${w}`} = ${n.length>1?`outputIndices${w}[${E}]`:`outputIndices${w}`};`,E++);return k},x;if(e[0].dataType===9){let w=(S,k,I="")=>`
          let outputIndices${k} = ${b.offsetToIndices(`outputOffset + ${k}u`)};
          ${v(k)};
          let offset${k} = ${y.indicesToOffset(`dataIndices${k}`)};
          let index${k} = offset${k} / 4u;
          let component${k} = offset${k} % 4u;
          ${S}[${k}] = ${I}(${y.getByOffset(`index${k}`)}[component${k}]);
        `;x=`
        let outputOffset = global_idx * ${d};
        var value = vec4<u32>(0);
        ${w("value",0,"u32")}
        ${w("value",1,"u32")}
        ${w("value",2,"u32")}
        ${w("value",3,"u32")}
        ${b.setByOffset("global_idx","value")}
      `}else x=`
      let outputIndices = ${b.offsetToIndices("global_idx")};
      ${v("")};
      let value = ${y.getByIndices("dataIndices")};
      ${b.setByOffset("global_idx","value")};
      `;return`
      ${l.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(y,_,b)}
      ${l.mainStart()}
        ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${x}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:m}},mh=e=>fe({axis:e.axis}),gh=(e,t)=>{let r=e.inputs;uu(r),e.compute(lu(e.inputs,t))}}),du,yh,_h,Pm=P(()=>{J(),re(),ae(),du=(e,t,r,i,a,s,n,u,d)=>{let p=[{type:12,data:s},{type:12,data:i},{type:12,data:a},{type:12,data:r},{type:12,data:n},{type:12,data:u},{type:12,data:d}],f=[s];p.push(...j(t.dims,f));let m=l=>{let y=B("indices_data",t.dataType,t.dims.length),_=G("input_slice_offsets_data",12,1,1),b=[y,_],v=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:a.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${l.registerUniforms(v).declareVariables(...b)}
  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${a.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:f,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:p}),getShaderSource:m},{inputs:[t],outputs:[-1]})[0]},yh=(e,t)=>{let r=e.inputs,i=r[0].dims,a=r[0].dataType,s=r[1].dims,n=s[s.length-1],u=z.sizeToDimension(s,s.length-1),d=z.sizeFromDimension(i,t.batchDims+n),p=z.sizeToDimension(i,t.batchDims),f=z.sizeFromDimension(i,t.batchDims),m=u/p,l=new Array(n),y=d;for(let k=0;k<n;++k)l[n-1-k]=y,y*=i[t.batchDims+n-1-k];let _=du(e,r[1],l,t.batchDims,i,u,m,f,n),b=t.batchDims+n;if(b>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let v=s.slice(0,-1).concat(i.slice(b)),x=z.size(v),w=[{type:12,data:x},{type:12,data:d},...j(r[0].dims,_.dims,v)],S=k=>{let I=B("data",r[0].dataType,r[0].dims.length),E=B("slice_offsets",12,_.dims.length),C=G("output",r[0].dataType,v.length);return`
          ${k.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(I,E,C)}
            ${k.mainStart()}
            ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:v,dataType:a}],dispatchGroup:{x:Math.ceil(x/64)},programUniforms:w}),getShaderSource:S},{inputs:[r[0],_]})},_h=e=>({batchDims:e.batch_dims,cacheKey:""})}),pu,hu,bh,$h,Um=P(()=>{J(),re(),we(),ae(),pu=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=z.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,a=e[0],s=e[2],n=e.length===4?e[3]:void 0;if(s.dims.length!==a.dims.length||!a.dims.map((u,d)=>d===r?Math.ceil(u/i)===s.dims[d]:u===s.dims[d]).reduce((u,d)=>u&&d,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(n){if(n.dataType!==a.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(n.dims.length!==s.dims.length||!n.dims.map((u,d)=>u===s.dims[d]).reduce((u,d)=>u&&d,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},hu=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,s=z.normalizeAxis(t.gatherAxis,a),n=z.normalizeAxis(t.quantizeAxis,a),u=r.slice(0);u.splice(s,1,...i);let d=z.size(u),p=e[2].dataType,f=e[0].dataType===22,m=[{type:12,data:d},{type:12,data:n},{type:12,data:s},{type:12,data:t.blockSize},...j(...e.map((y,_)=>y.dims),u)],l=y=>{let _=B("data",e[0].dataType,e[0].dims.length),b=B("inputIndices",e[1].dataType,e[1].dims.length),v=B("scales",e[2].dataType,e[2].dims.length),x=e.length>3?B("zeroPoint",e[3].dataType,e[3].dims.length):void 0,w=G("output",p,u.length),S=[_,b,v];x&&S.push(x);let k=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${y.registerUniforms(k).declareVariables(...S,w)}
        ${y.mainStart()}
        let output_indices = ${w.offsetToIndices("global_idx")};
        var indices_indices = ${b.type.indices}(0);
        ${(()=>i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${w.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${b.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${w.indicesGet("output_indices","uniforms.gather_axis")};`)()};
        var data_indices = ${_.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${w.indicesGet("output_indices","i")};
          ${_.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${b.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[s]};
        }
        ${_.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${u.length}; i++) {
          let index = ${w.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${_.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${_.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${_.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${f?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${v.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${v.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${v.getByIndices("scale_indices")};
        ${(()=>x?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${x.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${x.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${f?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0")()};
        let dequantized_data = ${Ce(p)}(quantized_data - zero_point) * scale;
        ${w.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((y,_)=>_!==1).map(y=>y.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(y,_)=>"rank")},getRunData:()=>({outputs:[{dims:u,dataType:p}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:m}),getShaderSource:l}},bh=(e,t)=>{let r=e.inputs;pu(r,t),e.compute(hu(e.inputs,t))},$h=e=>fe({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),cu,fu,wh,vh,Wm=P(()=>{J(),re(),we(),ae(),cu=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},fu=(e,t)=>{let r=e[0].dims,i=e[0].dataType,a=r.length,s=e[1].dims,n=e[1].dataType,u=z.normalizeAxis(t.axis,a),d=r[u],p=s.slice(0),f=z.size(p),m=B("input",i,a),l=B("indicesInput",n,s.length),y=G("output",i,p.length),_=[{type:12,data:f},{type:6,data:d},{type:12,data:u}];return _.push(...j(r,s,p)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:p,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:_}),getShaderSource:b=>`
      ${b.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(m,l,y)}
      ${b.mainStart()}
      ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${y.offsetToIndices("global_idx")};

      var idx = ${l.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${m.type.indices}(outputIndices);
      ${m.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${m.getByIndices("inputIndices")};

      ${y.setByOffset("global_idx","value")};
  }`}},wh=e=>fe({axis:e.axis}),vh=(e,t)=>{let r=e.inputs;cu(r),e.compute(fu(e.inputs,t))}}),mu,gu,xh,kh,qm=P(()=>{J(),re(),ae(),mu=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},gu=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[a,s,n]=Sd.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),u=[a,s];if(!u)throw new Error("Can't use gemm on the given tensors");let d=16,p=Math.ceil(s/d),f=Math.ceil(a/d),m=!0,l=z.size(u),y=[{type:12,data:m?p:l},{type:12,data:a},{type:12,data:s},{type:12,data:n},{type:1,data:t.alpha},{type:1,data:t.beta}],_=["type","type"];e.length===3&&(y.push(...j(e[2].dims)),_.push("rank")),y.push(...j(u));let b=x=>{let w="";t.transA&&t.transB?w="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?w="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?w="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(w="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let S=t.alpha===1?"":"value *= uniforms.alpha;",k=B("a",e[0].dataType,e[0].dims),I=B("b",e[1].dataType,e[1].dims),E=k.type.value,C=null,R=[k,I];e.length===3&&(C=B("c",e[2].dataType,e[2].dims.length),R.push(C));let N=G("output",e[0].dataType,u.length);R.push(N);let q=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${x.registerUniforms(q).declareVariables(...R)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${E}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${w}
    }

    ${S}
    ${(()=>C!=null?`let cOffset = ${C.broadcastedIndicesToOffset("vec2(m, n)",N)}; value += ${E}(uniforms.beta) * ${C.getByOffset("cOffset")};`:"")()}
    output[global_idx] = value;
  }`},v=x=>{let w=B("a",e[0].dataType,e[0].dims),S=B("b",e[1].dataType,e[1].dims),k=null,I=[w,S];e.length===3&&(k=B("c",e[2].dataType,e[2].dims.length),I.push(k));let E=G("output",e[0].dataType,u.length);I.push(E);let C=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],R="",N="";t.transA&&t.transB?(N=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,R="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(N=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,R="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(N=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,R="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(N=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${S.type.value}(0);
      }
      `,R="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let q=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${x.registerUniforms(C).declareVariables(...I)}
  var<workgroup> tile_a: array<array<${w.type.storage}, ${d}>, ${d}>;
  var<workgroup> tile_b: array<array<${S.type.storage}, ${d}>, ${d}>;
  ${x.mainStart([d,d,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${d};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${d};
    let num_tiles = (uniforms.K - 1) / ${d} + 1;
    var k_start = 0u;
    var value = ${E.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${N}
      k_start = k_start + ${d};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${d}; k++) {
        ${R}
      }
      workgroupBarrier();
    }

    ${q}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${(()=>k!=null?`let cOffset = ${k.broadcastedIndicesToOffset("vec2(m, n)",E)}; value += ${E.type.value}(uniforms.beta) * ${k.getByOffset("cOffset")};`:"")()}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return m?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:p*f},programUniforms:y}),getShaderSource:v}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:y}),getShaderSource:b}},xh=e=>{let t=e.transA,r=e.transB,i=e.alpha,a=e.beta;return{transA:t,transB:r,alpha:i,beta:a,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},kh=(e,t)=>{mu(e.inputs),e.compute(gu(e.inputs,t))}}),Xe,at,$t,wt,yu,_u,bu,$u,wu,vu,xu,ku,Sh,Th,Lm=P(()=>{J(),re(),we(),ae(),[Xe,at,$t,wt]=[0,1,2,3],yu=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},_u=`
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
`,bu=e=>`
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
`,$u=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,wu=e=>`
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
`,vu=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Xe}] = batch;
     indices[${at}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${$t}] = u32(r);
            indices[${wt}] = u32(c);
          }
        `;case"border":return`
          indices[${$t}] = u32(clamp(r, 0, H - 1));
          indices[${wt}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${$t}] = gs_reflect(r, border[1], border[3]);
          indices[${wt}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,xu=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Xe}], indices[${at}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Xe}], indices[${at}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Xe}], indices[${at}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Xe}], indices[${at}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Xe}], indices[${at}], border);

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
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Xe}], indices[${at}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,ku=(e,t)=>{let r=B("x",e[0].dataType,e[0].dims.length),i=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],a=B("grid",e[1].dataType,i.length,2),s=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(s=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Xe,at,$t,wt]=[0,3,1,2]);let n=G("output",e[0].dataType,s.length),u=r.type.value,d=z.size(s),p=[{type:12,data:d},...j(e[0].dims,i,s)],f=m=>`
  ${m.registerUniform("output_size","u32").declareVariables(r,a,n)}
  ${_u}
  ${bu(u)}
  ${$u(t)}
  ${wu(t)}
  ${vu(r,u,t)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${$t}]);
      let W_in = i32(uniforms.x_shape[${wt}]);

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
      var grid_indices = vec3<u32>(indices[${Xe}], indices[${$t}], indices[${wt}]);
      let nxy = ${a.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${xu(n,u,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:m=>{let l=z.size(s);return{outputs:[{dims:s,dataType:m[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:p}},getShaderSource:f}},Sh=(e,t)=>{yu(e.inputs),e.compute(ku(e.inputs,t))},Th=e=>fe({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),ze,Su,Ih,Ni,Tu,tr,Eh,Ch=P(()=>{J(),re(),we(),Oa(),Da(),ae(),mt(),ze=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Su=(e,t)=>{let r=e[0],i=ze(e,1),a=ze(e,2),s=ze(e,3),n=ze(e,4),u=ze(e,5),d=ze(e,6),p=ze(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let f=r.dims[0],m=r.dims[1],l=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],y=m,_=0,b=0,v=Math.floor(l/t.numHeads);if(d&&p&&z.size(d.dims)&&z.size(p.dims)){if(d.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(d.dims[0]!==f||d.dims[1]!==t.numHeads||d.dims[3]!==v)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(p.dims[0]!==f||p.dims[1]!==t.numHeads||p.dims[3]!==v)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[2]!==p.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(p.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');_=d.dims[2],b=d.dims[2]}else if(d&&z.size(d.dims)||p&&z.size(p.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let x;if(i&&z.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');x=2,y=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==v)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');x=5,y=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==v)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');x=0,y=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');x=3}if(s&&z.size(s.dims)>0){if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let w=_+y,S=0;if(n&&z.size(n.dims)>0){S=8;let C=n.dims;throw C.length===1?C[0]===f?S=1:C[0]===3*f+2&&(S=3):C.length===2&&C[0]===f&&C[1]===w&&(S=5),S===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let k=!1,I=l;if(a&&z.size(a.dims)>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(y!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');I=a.dims[2]}else{if(y!==a.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');I=a.dims[1]*a.dims[3],k=!0}}let E=!1;if(n&&z.size(n.dims)>0)throw new Error("Key padding mask is not supported");if(u&&z.size(u.dims)>0){if(u.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(u.dims[0]!==f||u.dims[1]!==t.numHeads||u.dims[2]!==m||u.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:f,sequenceLength:m,pastSequenceLength:_,kvSequenceLength:y,totalSequenceLength:w,maxSequenceLength:b,inputHiddenSize:0,hiddenSize:l,vHiddenSize:I,headSize:v,vHeadSize:Math.floor(I/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:S,scale:t.scale,broadcastResPosBias:E,passPastInKv:k,qkvFormat:x}},Ih=e=>fe({...e}),Ni=fe({perm:[0,2,1,3]}),Tu=(e,t,r,i,a,s,n)=>{let u=[i,a,s],d=z.size(u),p=[{type:12,data:d},{type:12,data:n},{type:12,data:s}],f=m=>{let l=G("qkv_with_bias",t.dataType,u),y=B("qkv",t.dataType,u),_=B("bias",r.dataType,u),b=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${m.registerUniforms(b).declareVariables(y,_,l)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:u,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:f},{inputs:[t,r],outputs:[-1]})[0]},tr=(e,t,r,i,a,s,n,u)=>{let d=s;if(n&&z.size(n.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return d=Tu(e,s,n,t,i,r*a,u),d=d.reshape([t,i,r,a]),r===1||i===1?d:e.compute(De(d,Ni.perm),{inputs:[d],outputs:[-1]})[0]}else return s.dims.length===3&&(d=s.reshape([t,i,r,a])),r===1||i===1?d:e.compute(De(d,Ni.perm),{inputs:[d],outputs:[-1]})[0]},Eh=(e,t)=>{let r=Su(e.inputs,t),i=e.inputs[0],a=ze(e.inputs,1),s=ze(e.inputs,2),n=ze(e.inputs,3),u=ze(e.inputs,4),d=ze(e.inputs,5),p=ze(e.inputs,6),f=ze(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if((a==null?void 0:a.dims.length)===5)throw new Error("Packed KV is not implemented");let m=a&&s&&a.dims.length===4&&s.dims.length===4,l=tr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,n,0);if(m)return ir(e,l,a,s,u,void 0,p,f,d,r);if(!a||!s)throw new Error("key and value must be provided");let y=tr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,a,n,r.hiddenSize),_=tr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,s,n,2*r.hiddenSize);ir(e,l,y,_,u,void 0,p,f,d,r)}}),Iu,Eu,Cu,zu,ya,zh,Ah,Oh=P(()=>{J(),re(),we(),ae(),Iu=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Eu=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),i=r.length),fe({numOutputs:i,axis:t.axis,splitSizes:r})},Cu=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${F("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,zu=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let a=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(a):i===0?r.push(`if (output_number == ${i}u) { ${a} }`):i===t-1?r.push(`else { ${a} }`):r.push(`else if (output_number == ${i}) { ${a} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},ya=(e,t)=>{let r=e[0].dims,i=z.size(r),a=e[0].dataType,s=z.normalizeAxis(t.axis,r.length),n=new Array(t.numOutputs),u=B("input",a,r.length),d=new Array(t.numOutputs),p=[],f=[],m=0,l=[{type:12,data:i}];for(let _=0;_<t.numOutputs;_++){m+=t.splitSizes[_],d[_]=m;let b=r.slice();b[s]=t.splitSizes[_],f.push(b),n[_]=G(`output${_}`,a,b.length),p.push({dims:f[_],dataType:e[0].dataType})}l.push({type:12,data:d},...j(r,...f));let y=_=>`
  ${_.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",d.length).declareVariables(u,...n)}
  ${Cu(d.length)}
  ${zu(n)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${u.offsetToIndices("global_idx")};
    var index = ${u.indicesGet("indices",s)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${F("uniforms.size_in_split_axis","output_number - 1u",d.length)};
      ${u.indicesSet("indices",s,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:y,getRunData:()=>({outputs:p,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:l})}},zh=(e,t)=>{Iu(e.inputs);let r=e.inputs.length===1?t:Eu(e.inputs,t);e.compute(ya(e.inputs,r),{inputs:[0]})},Ah=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return fe({axis:t,numOutputs:i,splitSizes:r})}}),Au,Ou,Pi,Rh,Vm=P(()=>{we(),Da(),Ch(),Oh(),mt(),Au=(e,t)=>{if(t.doRotary)throw new Error("GroupQuerryAttention do_rotary attribute is not supported");if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],i=e[1],a=e[2],s=e[3],n=e[4];if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let u=!1,d=r.dims[0],p=r.dims[1],f=r.dims.length===3?u?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],m=p,l=0,y=!i||i.dims.length===0,_=Math.floor(y?f/(t.numHeads+2*t.kvNumHeads):f/t.numHeads);y&&(f=_*t.numHeads);let b=s&&s.dims.length!==0,v=n&&n.dims.length!==0;if(b&&s.dims.length===4&&s.dims[0]===d&&s.dims[1]!==t.kvNumHeads&&s.dims[2]===t.kvNumHeads&&s.dims[3]===_)throw new Error("BSNH pastKey/pastValue is not supported");if(b&&v){if(s.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(n.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');l=s.dims[2]}else if(b||v)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let x=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');m=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==_)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');m=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==_)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');m=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');x=3}let w=0,S=!1,k=t.kvNumHeads?_*t.kvNumHeads:f;if(a&&a.dims.length>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(m!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');k=a.dims[2]}else{if(m!==a.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');k=a.dims[1]*a.dims[3],S=!0}}let I=e.length>4?e[5]:void 0;if(I&&I.dims.length!==1&&I.dims[0]!==d)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');let E=-1,C=-1,R=!1;return{batchSize:d,sequenceLength:p,pastSequenceLength:l,kvSequenceLength:m,totalSequenceLength:E,maxSequenceLength:C,inputHiddenSize:0,hiddenSize:f,vHiddenSize:k,headSize:_,vHeadSize:Math.floor(k/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:w,scale:t.scale,broadcastResPosBias:R,passPastInKv:S,qkvFormat:x}},Ou=fe({perm:[0,2,1,3]}),Pi=(e,t,r)=>{let i=t,a=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,a,r.headSize]),i=e.compute(De(i,Ou.perm),{inputs:[i],outputs:[-1]})[0]),i},Rh=(e,t)=>{var v;let r=Au(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((v=e.inputs[1])==null?void 0:v.dims.length)===5)throw new Error("Packed KV is not implemented");let i=e.inputs[0],a=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,s=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,n=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,u=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,d=e.inputs.length>4?e.inputs[5]:void 0,p=e.inputs.length>5?e.inputs[6]:void 0,f=r.kvNumHeads?r.kvNumHeads:r.numHeads,m=fe({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,f*r.headSize,f*r.headSize]}),[l,y,_]=!a&&!s?e.compute(ya([i],m),{inputs:[i],outputs:[-1,-1,-1]}):[i,a,s],b=tr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,l,void 0,0);ir(e,b,Pi(e,y,r),Pi(e,_,r),void 0,void 0,n,u,void 0,r,d,p)}}),Ui,Ru,Bu,Bh,Hm=P(()=>{J(),re(),mt(),ae(),Ui=(e,t,r,i,a,s,n,u)=>{let d=_e(s),p=d===1?"f32":`vec${d}f`,f=d===1?"vec2f":`mat2x${d}f`,m=a*n,l=64;m===1&&(l=256);let y=[a,n,s/d],_=[a,n,2],b=["rank","type","type"],v=[];v.push(...j(y,_));let x=w=>{let S=B("x",t.dataType,3,d),k=B("scale",r.dataType,r.dims),I=B("bias",i.dataType,i.dims),E=G("output",1,3,2),C=[S,k,I,E];return`
  var<workgroup> workgroup_shared : array<${f}, ${l}>;
  const workgroup_size = ${l}u;
  ${w.declareVariables(...C)}
  ${w.mainStart(l)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${p}(0);
    var squared_sum = ${p}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${p}(${S.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${f}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${ft("workgroup_shared[0][0]",d)} / f32(hight * ${d});
      let squared_sum_final = ${ft("workgroup_shared[0][1]",d)} / f32(hight * ${d});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${u}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${d};${u};${l}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:_,dataType:1}],dispatchGroup:{x:m},programUniforms:v}),getShaderSource:x},{inputs:[t,r,i],outputs:[-1]})[0]},Ru=(e,t,r)=>{let i=t[0].dims,a=i,s=2,n=i[0],u=i[1],d=z.sizeFromDimension(i,s),p=_e(d),f=z.size(a)/p,m=Ui(e,t[0],t[1],t[2],n,d,u,r.epsilon),l=[n,u,d/p],y=[n,u],_=["type","none"],b=v=>{let x=B("x",t[0].dataType,l.length,p),w=B("scale_shift",1,y.length,2),S=G("output",t[0].dataType,l.length,p),k=[x,w,S];return`
  ${v.registerUniform("output_size","u32").declareVariables(...k)}
  ${v.mainStart()}
  ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${S.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${w.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${x.getByOffset("global_idx")} * ${S.type.value}(scale_shift.x) + ${S.type.value}(scale_shift.y);
      ${S.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${p}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},...j(l,y,l)]}),getShaderSource:b},{inputs:[t[0],m]})},Bu=(e,t,r)=>{let i=t[0].dims,a=i,s=i[0],n=i[i.length-1],u=z.sizeFromDimension(i,1)/n,d=_e(n),p=z.size(a)/d,f=[{type:12,data:u},{type:12,data:Math.floor(n/d)}],m=["type","type"],l=!1,y=[0,i.length-1];for(let x=0;x<i.length-2;x++)l=l||i[x+1]!==1,y.push(x+1);l=l&&i[i.length-1]!==1;let _=l?e.compute(De(e.inputs[0],y),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:i.length},(x,w)=>i[y[w]])),b=Ui(e,_,t[1],t[2],s,u,n,r.epsilon),v=x=>{let w=Te(t[0].dataType),S=d===1?"vec2f":`mat${d}x2f`,k=C=>{let R=C===0?"x":"y",N=d===1?"f32":`vec${d}f`;switch(d){case 1:return`${w}(${N}(scale.${R}))`;case 2:return`vec2<${w}>(${N}(scale[0].${R}, scale[1].${R}))`;case 4:return`vec4<${w}>(${N}(scale[0].${R}, scale[1].${R}, scale[2].${R}, scale[3].${R}))`;default:throw new Error(`Not supported compoents ${d}`)}},I=B("input",t[0].dataType,t[0].dims,d),E=G("output",t[0].dataType,a,d);return`
  @group(0) @binding(0) var<storage, read> input : array<${I.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${S}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${E.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${x.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${k(0)}, ${k(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${d}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:f}),getShaderSource:v},{inputs:[t[0],b]})},Bh=(e,t)=>{t.format==="NHWC"?Bu(e,e.inputs,t):Ru(e,e.inputs,t)}}),Du,Mu,Dh,Gm=P(()=>{J(),re(),ae(),Du=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Mu=(e,t,r)=>{let i=t.simplified,a=e[0].dims,s=e[1],n=!i&&e[2],u=a,d=z.normalizeAxis(t.axis,a.length),p=z.sizeToDimension(a,d),f=z.sizeFromDimension(a,d),m=z.size(s.dims),l=n?z.size(n.dims):0;if(m!==f||n&&l!==f)throw new Error(`Size of X.shape()[axis:] == ${f}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${m} and bias size of ${l}`);let y=[];for(let I=0;I<a.length;++I)I<d?y.push(a[I]):y.push(1);let _=_e(f),b=["type","type"],v=[{type:12,data:p},{type:1,data:f},{type:12,data:Math.floor(f/_)},{type:1,data:t.epsilon}];n&&b.push("type");let x=r>1,w=r>2,S=I=>{let E=Te(e[0].dataType),C=[B("x",e[0].dataType,e[0].dims,_),B("scale",s.dataType,s.dims,_)];n&&C.push(B("bias",n.dataType,n.dims,_)),C.push(G("output",e[0].dataType,u,_)),x&&C.push(G("mean_data_output",1,y)),w&&C.push(G("inv_std_output",1,y));let R=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${I.registerUniforms(R).declareVariables(...C)}
  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${ua("f32",_)};
    var mean_square_vector = ${ua("f32",_)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Nt(E,_,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${ft("mean_vector",_)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${ft("mean_square_vector",_)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Nt(E,_,"x[j + offset]")};
      let f32scale = ${Nt(E,_,"scale[j]")};
      output[j + offset] = ${C[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${n?`+ ${Nt(E,_,"bias[j]")}`:""}
      );
    }

    ${x?"mean_data_output[global_idx] = mean":""};
    ${w?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},k=[{dims:u,dataType:e[0].dataType}];return x&&k.push({dims:y,dataType:1}),w&&k.push({dims:y,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${_};${r};${i}`,inputDependencies:b},getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(p/64)},programUniforms:v}),getShaderSource:S}},Dh=(e,t)=>{Du(e.inputs),e.compute(Mu(e.inputs,t,e.outputCount))}}),Nu,Mh,Fm=P(()=>{re(),Wa(),qa(),Nu=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Mh=e=>{Nu(e.inputs);let t=Pt.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&i<8)e.compute(Ua(e.inputs,{activation:""},t));else{let a=t[t.length-2],s=z.size(e.inputs[0].dims.slice(0,-2)),n=z.size(e.inputs[1].dims.slice(0,-2));if(s!==1&&a===1&&n===1){let u=e.inputs[0].reshape([1,s,i]),d=e.inputs[1].reshape([1,i,r]),p=[1,s,r],f=[u,d];e.compute(Ur(f,{activation:""},t,p),{inputs:f})}else e.compute(Ur(e.inputs,{activation:""},t))}}}),Pu,Uu,Wu,Nh,Ph,jm=P(()=>{J(),re(),we(),ae(),Pu=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let a=Math.floor((t.k+t.blockSize-1)/t.blockSize),s=t.blockSize/8*t.bits,n=e[1];if(!z.areEqual(n.dims,[t.n,a,s]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let u=e[2].dims;if(z.size(u)!==t.n*a)throw new Error("scales input size error.");if(e.length===4){let d=e[3].dims,p=t.bits>4?t.n*a:t.n*Math.floor((a+1)/2);if(z.size(d)!==p)throw new Error("zeroPoints input size error.")}},Uu=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],s=t.k,n=t.n,u=r.slice(0,i-2),d=z.size(u),p=e[1].dims[2]/4,f=e[0].dataType,m=_e(t.k),l=_e(p),y=_e(n),_=u.concat([a,n]),b=a>1&&n/y%2===0?2:1,v=z.size(_)/y/b,x=64,w=[],S=[d,a,s/m],k=z.convertShape(e[1].dims).slice();k.splice(-1,1,p/l),w.push(...j(S)),w.push(...j(k)),w.push(...j(e[2].dims)),e.length===4&&w.push(...j(z.convertShape(e[3].dims)));let I=[d,a,n/y];w.push(...j(I));let E=C=>{let R=S.length,N=B("a",e[0].dataType,R,m),q=B("b",12,k.length,l),ee=B("scales",e[2].dataType,e[2].dims.length),K=[N,q,ee],H=e.length===4?B("zero_points",12,e[3].dims.length):void 0;H&&K.push(H);let ie=I.length,U=G("output",e[0].dataType,ie,y),X=Te(e[0].dataType),se=(()=>{switch(m){case 1:return`array<${X}, 8>`;case 2:return`mat4x2<${X}>`;case 4:return`mat2x4<${X}>`;default:throw new Error(`${m}-component is not supported.`)}})(),Y=()=>{let M=`
          // reuse a data
            var input_offset = ${N.indicesToOffset(`${N.type.indices}(batch, row, word_offset)`)};
            var a_data: ${se};
            for (var j: u32 = 0; j < ${8/m}; j++) {
              a_data[j] = ${N.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let L=0;L<y*b;L++)M+=`
            b_value = ${l===1?`b${L}_data`:`b${L}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${se}(${Array.from({length:4},(oe,be)=>`${X}(b_value_lower[${be}]), ${X}(b_value_upper[${be}])`).join(", ")});
            b_dequantized_values = ${(()=>m===1?`${se}(${Array.from({length:8},(oe,be)=>`(b_quantized_values[${be}] - ${H?`zero_point${L}`:"zero_point"}) * scale${L}`).join(", ")});`:`(b_quantized_values - ${se}(${Array(8).fill(`${H?`zero_point${L}`:"zero_point"}`).join(",")})) * scale${L};`)()};
            workgroup_shared[local_id.x * ${b} + ${Math.floor(L/y)}]${y>1?`[${L%y}]`:""} += ${Array.from({length:8/m},(oe,be)=>`${m===1?`a_data[${be}] * b_dequantized_values[${be}]`:`dot(a_data[${be}], b_dequantized_values[${be}])`}`).join(" + ")};
          `;return M},te=()=>{let M=`
            var col_index = col * ${y};
            ${H?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${X}(8);`}
            `;for(let L=0;L<y*b;L++)M+=`
            let scale${L} = ${ee.getByOffset("col_index * nBlocksPerCol + block")};
            ${H?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${H.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${L} = ${X}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return M},le=()=>{let M=`col_index = col * ${y};`;for(let L=0;L<y*b;L++)M+=`
            let b${L}_data = ${q.getByIndices(`${q.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return M+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${se};
            var b_dequantized_values: ${se};`,M};return`
        var<workgroup> workgroup_shared: array<${U.type.value}, ${b*x}>;
        ${C.declareVariables(...K,U)}
        ${C.mainStart([x,1,1])}
          let output_indices = ${U.offsetToIndices(`(global_idx / ${x}) * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${x}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/m};
            ${te()}
            for (var word: u32 = 0; word < ${p}; word += ${l}) {
              ${le()}
              for (var i: u32 = 0; i < ${l}; i++) {
                ${Y()}
                word_offset += ${8/m};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${b}) {
            var output_value: ${U.type.value} = ${U.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${x}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${b};
            }
            ${U.setByIndices(`${U.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${m};${l};${y};${b};${x}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:f}],dispatchGroup:{x:v},programUniforms:w}),getShaderSource:E}},Wu=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],s=t.k,n=t.n,u=r.slice(0,i-2),d=z.size(u),p=e[1].dims[2]/4,f=e[0].dataType,m=_e(t.k),l=_e(p),y=u.concat([a,n]),_=128,b=n%8===0?8:n%4===0?4:1,v=_/b,x=v*l*8,w=x/m,S=x/t.blockSize,k=z.size(y)/b,I=[],E=[d,a,s/m],C=z.convertShape(e[1].dims).slice();C.splice(-1,1,p/l),I.push(...j(E)),I.push(...j(C)),I.push(...j(e[2].dims)),e.length===4&&I.push(...j(z.convertShape(e[3].dims)));let R=[d,a,n];I.push(...j(R));let N=q=>{let ee=E.length,K=B("a",e[0].dataType,ee,m),H=B("b",12,C.length,l),ie=B("scales",e[2].dataType,e[2].dims.length),U=[K,H,ie],X=e.length===4?B("zero_points",12,e[3].dims.length):void 0;X&&U.push(X);let se=R.length,Y=G("output",e[0].dataType,se),te=Te(e[0].dataType),le=()=>{switch(m){case 1:return`
          let a_data0 = vec4<${te}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${te}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${te}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${te}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${m}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${K.type.value}, ${w}>;
        var<workgroup> inter_results: array<array<${Y.type.value}, ${v}>, ${b}>;
        ${q.declareVariables(...U,Y)}
        ${q.mainStart([v,b,1])}
          let output_indices = ${Y.offsetToIndices(`workgroup_index * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${S} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${w};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${w}; a_offset += ${_})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${K.getByIndices(`${K.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${K.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${S} + local_id.x;
            ${X?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${X.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${te}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${te}(8);`}
            let scale = ${ie.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${H.getByIndices(`${H.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/m};
            for (var i: u32 = 0; i < ${l}; i++) {
              ${le()}
              let b_value = ${l===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${te}>(${Array.from({length:4},(M,L)=>`${te}(b_value_lower[${L}]), ${te}(b_value_upper[${L}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${te}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(M,L)=>`${`dot(a_data${L}, b_dequantized_values[${L}])`}`).join(" + ")};
              word_offset += ${8/m};
            }
            workgroupBarrier();
          }

          if (local_idx < ${b}) {
            var output_value: ${Y.type.value} = ${Y.type.value}(0);
            for (var b = 0u; b < ${v}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${Y.setByIndices(`${Y.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${m};${l};${v};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:f}],dispatchGroup:{x:k},programUniforms:I}),getShaderSource:N}},Nh=(e,t)=>{Pu(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Wu(e.inputs,t)):e.compute(Uu(e.inputs,t))},Ph=e=>fe(e)}),qu,Lu,Vu,Hu,Gu,Fu,ju,Ku,Uh,Km=P(()=>{J(),re(),ae(),qu=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Lu=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
            k = i32(${e.indicesGet("indices",a)}) - ${F("uniforms.pads",a,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${F("uniforms.x_shape",a,t)})) {
              break;
            }
            offset += k * i32(${F("uniforms.x_strides",a,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},Vu=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${F("uniforms.pads",a,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${F("uniforms.x_shape",a,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${F("uniforms.x_shape",a,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${F("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Hu=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${F("uniforms.pads",a,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${F("uniforms.x_shape",a,t)})) {
                  k = i32(${F("uniforms.x_shape",a,t)}) - 1;
                }
                offset += k * i32(${F("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Gu=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${F("uniforms.pads",a,r)};
                if (k < 0)  {
                  k += i32(${F("uniforms.x_shape",a,t)}]);
                }
                if (k >= i32(${F("uniforms.x_shape",a,t)})) {
                  k -= i32(${F("uniforms.x_shape",a,t)});
                }
                offset += k * i32(${F("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Fu=(e,t,r)=>{switch(r.mode){case 0:return Lu(e,t,r.pads.length);case 1:return Vu(e,t,r.pads.length);case 2:return Hu(e,t,r.pads.length);case 3:return Gu(e,t,r.pads.length);default:throw new Error("Invalid mode")}},ju=(e,t)=>{let r=z.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,a=z.size(r),s=[{type:12,data:a},{type:6,data:t.pads}],n=e.length>=3&&e[2].data;t.mode===0&&s.push({type:n?e[2].dataType:1,data:t.value}),s.push(...j(e[0].dims,r));let u=["rank"],d=p=>{let f=G("output",e[0].dataType,r.length),m=B("x",e[0].dataType,i.length),l=m.type.value,y=Fu(f,i.length,t),_=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&_.push({name:"constant_value",type:n?l:"f32"}),`
            ${p.registerUniforms(_).declareVariables(m,f)}
            ${p.mainStart()}
            ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${f.offsetToIndices("global_idx")};

            var value = ${l}(0);
            ${y}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${n}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(z.size(r)/64)},programUniforms:s}),getShaderSource:d}},Ku=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,a=e[0].dims.length,s=new Int32Array(2*a).fill(0);if(e.length>=4){let u=e[3].getBigInt64Array();for(let d=0;d<u.length;d++)s[Number(u[d])]=Number(r[d]),s[Number(u[d])+a]=Number(r[d+u.length])}else r.forEach((u,d)=>s[Number(d)]=Number(u));let n=[];return s.forEach(u=>n.push(u)),{mode:t.mode,value:i,pads:n}}else return t},Uh=(e,t)=>{qu(e.inputs);let r=Ku(e.inputs,t);e.compute(ju(e.inputs,r),{inputs:[0]})}}),jt,Wi,qi,Li,Vi,Qu,Yu,Hi,Gi,Wh,qh,Fi,Lh,Vh,ji,Hh,Gh,Fh,jh,Qm=P(()=>{Fe(),J(),re(),ae(),jt=e=>{if(ge.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Wi=(e,t,r)=>{let i=t.format==="NHWC",a=e.dims.slice();i&&a.splice(1,0,a.pop());let s=Object.hasOwnProperty.call(t,"dilations"),n=t.kernelShape.slice(),u=t.strides.slice(),d=s?t.dilations.slice():[],p=t.pads.slice();Nr.adjustPoolAttributes(r,a,n,u,d,p);let f=Nr.computePoolOutputShape(r,a,u,d,n,p,t.autoPad),m=Object.assign({},t);s?Object.assign(m,{kernelShape:n,strides:u,pads:p,dilations:d,cacheKey:t.cacheKey}):Object.assign(m,{kernelShape:n,strides:u,pads:p,cacheKey:t.cacheKey});let l=f.slice();return l.push(l.splice(1,1)[0]),[m,i?l:f]},qi=(e,t)=>{let r=t.format==="NHWC",i=z.size(e),a=z.size(t.kernelShape),s=[{type:12,data:i},{type:12,data:a}],n=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let u=t.kernelShape[t.kernelShape.length-1],d=t.strides[t.strides.length-1],p=t.pads[t.pads.length/2-1],f=t.pads[t.pads.length-1],m=!!(p+f);s.push({type:12,data:u},{type:12,data:d},{type:12,data:p},{type:12,data:f}),n.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let l=!1;if(t.kernelShape.length===2){let y=t.kernelShape[t.kernelShape.length-2],_=t.strides[t.strides.length-2],b=t.pads[t.pads.length/2-2],v=t.pads[t.pads.length-2];l=!!(b+v),s.push({type:12,data:y},{type:12,data:_},{type:12,data:b},{type:12,data:v}),n.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[s,n,!0,m,l]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let u=z.computeStrides(t.kernelShape);s.push({type:12,data:u},{type:12,data:t.pads},{type:12,data:t.strides}),n.push({name:"kernelStrides",type:"u32",length:u.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let d=t.pads.reduce((p,f)=>p+f);return[s,n,!!d,!1,!1]}},Li=(e,t,r,i,a,s,n,u,d,p,f,m)=>{let l=a.format==="NHWC",y=t.type.value,_=G("output",t.type.tensor,i);if(a.kernelShape.length<=2){let b="",v="",x="",w=r-(l?2:1);if(f?b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${w}] < 0 || xIndices[${w}]
                      >= uniforms.x_shape[${w}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`:b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`,a.kernelShape.length===2){let S=r-(l?3:2);m?v=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${S}] < 0 || xIndices[${S}] >= uniforms.x_shape[${S}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:v=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sh - uniforms.phStart + j;
                `,x=`
              }
            `}return`
            ${e.registerUniforms(d).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var value = ${y}(${u});
              var pad = 0;
              ${v}
              ${b}
              ${x}
              ${n}

              output[global_idx] = value;
            }`}else{if(l)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let b=a.kernelShape.length,v=a.pads.length,x="";return p?x=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${s}
              }`:x=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${s}
            `,`
            ${e.registerUniforms(d).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var offsets: array<u32, ${b}>;

              var value = ${y}(${u});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${b-1}u; j++) {
                  offsets[j] = offset / ${F("uniforms.kernelStrides","j",b)};
                  offset -= offsets[j] * ${F("uniforms.kernelStrides","j",b)};
                }
                offsets[${b-1}] = offset;

                isPad = false;
                for (var j = ${r-b}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${F("uniforms.strides",`j - ${r-b}u`,b)}
                    + offsets[j - ${r-b}u] - ${F("uniforms.pads","j - 2u",v)};
                  ${x}
              }
              ${n}

              output[global_idx] = value;
            }`}},Vi=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Qu=e=>`${Vi(e)};${e.countIncludePad}`,Yu=e=>`${Vi(e)};${e.storageOrder};${e.dilations}`,Hi=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Gi=(e,t,r,i)=>{let[a,s]=Wi(t,i,r),n=B("x",t.dataType,t.dims.length),u=n.type.value,d="value += x_val;",p="";a.countIncludePad?p+=`value /= ${u}(uniforms.kernelSize);`:p+=`value /= ${u}(i32(uniforms.kernelSize) - pad);`;let[f,m,l,y,_]=qi(s,a);f.push(...j(t.dims,s));let b=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${l};${y};${_}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(z.size(s)/64)},programUniforms:f}),getShaderSource:v=>Li(v,n,t.dims.length,s.length,a,d,p,0,m,l,y,_)}},Wh=e=>{let t=e.count_include_pad!==0,r=Hi(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:Qu(i)}},qh=(e,t)=>{jt(e.inputs),e.compute(Gi("AveragePool",e.inputs[0],!1,t))},Fi={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Lh=e=>{let t=e.format;return{format:t,...Fi,cacheKey:t}},Vh=(e,t)=>{jt(e.inputs),e.compute(Gi("GlobalAveragePool",e.inputs[0],!0,t))},ji=(e,t,r,i)=>{let[a,s]=Wi(t,i,r),n=`
      value = max(x_val, value);
    `,u="",d=B("x",t.dataType,t.dims.length),p=["rank"],[f,m,l,y,_]=qi(s,a);return f.push(...j(t.dims,s)),{name:e,shaderCache:{hint:`${i.cacheKey};${l};${y};${_}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(z.size(s)/64)},programUniforms:f}),getShaderSource:b=>Li(b,d,t.dims.length,s.length,a,n,u,t.dataType===10?-65504:-1e5,m,l,y,_)}},Hh=(e,t)=>{jt(e.inputs),e.compute(ji("MaxPool",e.inputs[0],!1,t))},Gh=e=>{let t=e.storage_order,r=e.dilations,i=Hi(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let a={storageOrder:t,dilations:r,...i,cacheKey:""};return{...a,cacheKey:Yu(a)}},Fh=e=>{let t=e.format;return{format:t,...Fi,cacheKey:t}},jh=(e,t)=>{jt(e.inputs),e.compute(ji("GlobalMaxPool",e.inputs[0],!0,t))}}),Zu,Xu,Kh,Qh,Ym=P(()=>{J(),re(),we(),ae(),Zu=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((a,s)=>s===t.axis||a===e[0].dims[s]).reduce((a,s)=>a&&s,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Xu=(e,t)=>{let r=z.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,a=i===3,s=e[0].dims,n=e[1].dataType,u=z.size(s),d=i===3||i===2,p=d?[Math.ceil(z.size(e[0].dims)/4)]:e[0].dims,f=e[1].dims,m=e.length>2?e[2]:void 0,l=m?d?[Math.ceil(z.size(m.dims)/4)]:m.dims:void 0,y=f.length===0||f.length===1&&f[0]===1,_=y===!1&&f.length===1,b=_e(u),v=y&&(!d||b===4),x=v?b:1,w=v&&!d?b:1,S=B("input",d?12:i,p.length,w),k=B("scale",n,f.length),I=m?B("zero_point",d?12:i,l.length):void 0,E=G("output",n,s.length,x),C=[S,k];I&&C.push(I);let R=[p,f];m&&R.push(l);let N=[{type:12,data:u/x},{type:12,data:r},{type:12,data:t.blockSize},...j(...R,s)],q=ee=>{let K=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${ee.registerUniforms(K).declareVariables(...C,E)}
      ${ee.mainStart()}
          ${ee.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${E.offsetToIndices("global_idx")};

          // Set input x
          ${(()=>d?`
            let input = ${S.getByOffset("global_idx / 4")};
            let x_vec = ${a?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${x===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${S.getByOffset("global_idx")};`)()};

          // Set scale input
          ${(()=>y?`let scale_value= ${k.getByOffset("0")}`:_?`
            let scale_index = ${E.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${k.getByOffset("scale_index")};`:`
            var scale_indices: ${k.type.indices} = output_indices;
            let index = ${k.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${k.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${k.getByIndices("scale_indices")};`)()};

          // Set zero-point input
          ${(()=>I?y?d?`
                let zero_point_input = ${I.getByOffset("0")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${I.getByOffset("0")}`:_?d?`
                let zero_point_index = ${E.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${I.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${E.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${I.getByOffset("zero_point_index")};`:d?`
                let zero_point_offset = ${k.indicesToOffset("scale_indices")};
                let zero_point_input = ${I.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${I.getByIndices("scale_indices")};`:`let zero_point_value = ${d?a?"i32":"u32":S.type.value}(0);`)()};
      // Compute and write output
      ${E.setByOffset("global_idx",`${E.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:I?["rank","rank","rank"]:["rank","rank"]},getShaderSource:q,getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(u/x/64),y:1,z:1},programUniforms:N})}},Kh=(e,t)=>{Zu(e.inputs,t),e.compute(Xu(e.inputs,t))},Qh=e=>fe({axis:e.axis,blockSize:e.blockSize})}),Ju,el,Yh,Zm=P(()=>{Fe(),J(),ae(),Ju=(e,t,r)=>{let i=e===t,a=e<t&&r<0,s=e>t&&r>0;if(i||a||s)throw new Error("Range these inputs' contents are invalid.")},el=(e,t,r,i)=>{let a=Math.abs(Math.ceil((t-e)/r)),s=[a],n=a,u=[{type:12,data:n},{type:i,data:e},{type:i,data:r},...j(s)],d=p=>{let f=G("output",i,s.length),m=f.type.value,l=[{name:"outputSize",type:"u32"},{name:"start",type:m},{name:"delta",type:m}];return`
        ${p.registerUniforms(l).declareVariables(f)}
        ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${m}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:d,getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:u})}},Yh=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),ge.webgpu.validateInputContent&&Ju(t,r,i),e.compute(el(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),tl,rl,Zh,Xh,Xm=P(()=>{J(),re(),we(),ae(),tl=(e,t,r,i)=>{if(e!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${e}.`);let a=`{
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
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return i==="i32"||i==="u32"?`atomicAdd(&${t}, bitcast<${i}>(${r}));`:`
              ${a}bitcast<${i}>(oldValue) + (${r})${s}`;case"max":return i==="i32"||i==="u32"?`atomicMax(&${t}, bitcast<${i}>(${r}));`:`
                ${a}max(bitcast<f32>(oldValue), (${r}))${s}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${t}, bitcast<${i}>(${r}));`:`${a}min(bitcast<${i}>(oldValue), (${r}))${s}`;case"mul":return`${a}(bitcast<${i}>(oldValue) * (${r}))${s}`;default:throw new Error(`Reduction ${e} is not supported.`)}},rl=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r,s=1,n=Math.ceil(z.size(i)/s),u=i[i.length-1],d=z.sizeFromDimension(r,u),p=[{type:12,data:n},{type:12,data:u},{type:12,data:d},...j(e[1].dims,e[2].dims,a)],f=m=>{let l=B("indices",e[1].dataType,e[1].dims.length),y=B("updates",e[2].dataType,e[2].dims.length,s),_=t.reduction!=="none"&&t.reduction!==""?Ed("output",e[0].dataType,a.length):G("output",e[0].dataType,a.length,s);return`
      ${m.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(l,y,_)}
      ${m.mainStart()}
        ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
    ${tl(t.reduction,"output[data_offset + i]","value",_.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:p}),getShaderSource:f}},Zh=e=>fe({reduction:e.reduction}),Xh=(e,t)=>{e.compute(rl(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),il,al,nl,Ki,sl,ol,ul,ll,dl,pl,hl,cl,Qi,fl,ml,gl,yl,_l,Jh,ec,Jm=P(()=>{J(),re(),we(),ae(),il=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},al=(e,t,r)=>{t.every(a=>a>=0&&a<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((a,s)=>i[a]=e[s]),i},nl=(e,t,r,i,a,s)=>{let[n,u,d]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],p=e[0].dims.length;if(n>0&&e.length>n&&e[n].dims.length>0)e[n].getFloat32Array().forEach(f=>s.push(f));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0){if(e[u].getFloat32Array().forEach(f=>i.push(f)),i.length!==0&&i.length!==p&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");il(i,t),t.axes.length>0&&al(i,t.axes,p).forEach((f,m)=>i[m]=f)}if(d>0&&e.length>d&&e[d].dims.length===1&&e[d].dims[0]>0&&(e[d].getBigInt64Array().forEach(f=>a.push(Number(f))),a.length!==0&&a.length!==p&&r>=18&&a.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof a<"u"&&i.length>0&&a.length>p)throw new Error("Resize requires only of scales or sizes to be specified")},Ki=(e,t,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,sl=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Ki("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Ki("xResized","lengthOriginal - 1","lengthResized - 1",t)}
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
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",ol=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",ul=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),a=e.length===0?i:e.slice();return t.length>0?(t.forEach((s,n)=>{i[s]=a[n],i[n+r]=a[t.length+n]}),i):a},ll=(e,t,r,i)=>{let a=[];if(r.length>0)if(i.length>0){if(e.forEach(s=>a.push(s)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((s,n)=>a[s]=r[n])}else r.forEach(s=>a.push(s));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");a=e.map((s,n)=>Math.round(s*t[n]))}return a},dl=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(s=>t[s]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(s=>t[s]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let a=e.slice();return r.axes.length>0?(r.axes.forEach(s=>t[s]=i),r.axes.forEach(s=>a[s]=Math.round(e[s]*t[s]))):(t.fill(i,0,t.length),a.forEach((s,n)=>a[n]=Math.round(s*t[n]))),a},pl=(e,t,r,i,a)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${F("uniforms.scales","i",i)};
        var roi_low = ${F("uniforms.roi","i",a)};
        var roi_hi = ${F("uniforms.roi",`i + ${t.length}`,a)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${F("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${F("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,hl=(e,t,r,i,a,s,n)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${F("uniforms.scales","i",a)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${F("uniforms.roi","i",s)};
          var roi_hi = ${F("uniforms.roi",`i + ${r.length}`,s)};
          var input_shape_i = ${F("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${F("uniforms.output_shape","i",i.length)};
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
    }`,cl=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${F("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Qi=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",fl=(e,t,r,i,a)=>{let[s,n,u,d]=r.length===2?[-1,0,1,-1]:[0,2,3,1],p=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${p} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",n,`max(0, min(row, ${r[n]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(col, ${r[u]} - 1))`)};
      ${Qi(e,d,s,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${p} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${p} = originalIndices[${n}];
      var col:${p} = originalIndices[${u}];
      ${i?`if (row < 0 || row > (${r[n]} - 1) || col < 0 || col > (${r[u]} - 1)) {
        return ${a};
      }`:""};
      row = max(0, min(row, ${r[n]} - 1));
      col = max(0, min(col, ${r[u]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${s}])`:"0"};
      var x11: ${p} = getInputValue(batch, channel, row1, col1);
      var x12: ${p} = getInputValue(batch, channel, row1, col2);
      var x21: ${p} = getInputValue(batch, channel, row2, col1);
      var x22: ${p} = getInputValue(batch, channel, row2, col2);
      var dx1: ${p} = abs(row - ${p}(row1));
      var dx2: ${p} = abs(${p}(row2) - row);
      var dy1: ${p} = abs(col - ${p}(col1));
      var dy2: ${p} = abs(${p}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},ml=(e,t,r,i,a,s,n,u,d,p)=>{let f=r.length===2,[m,l]=f?[0,1]:[2,3],y=e.type.value,_=b=>{let v=b===m?"row":"col";return`
      fn ${v}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${y} {
        var output_index = ${t.indicesGet("output_indices",b)};
        var originalIdx: ${y} = getOriginalCoordinateFromResizedCoordinate(output_index, ${a[b]},
        ${i[b]}, ${r[b]}, ${s[b]}, ${s[b]} + ${r.length});
        var fractOriginalIdx: ${y} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${u} && (originalIdx < 0 || originalIdx > (${r[b]} - 1))) {
          return ${d};
        }
        var data: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${v}: ${y} = originalIdx + ${y}(i);
          if (${v} < 0 || ${v} >= ${r[b]}) {
            ${(()=>p?`coefs[i + 1] = 0.0;
                        continue;`:u?`return ${d};`:`${v} = max(0, min(${v}, ${r[b]} - 1));`)()};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",b,`u32(${v})`)};
          data[i + 1] = ${b===m?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${_(m)};
    ${_(l)};
  fn getCubicInterpolationCoefs(s: ${y}) -> array<${y}, 4> {
    var absS = abs(s);
    var coeffs: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${y} = 1.0 - absS;
    var twoMinusAbsS: ${y} = 2.0 - absS;
    var onePlusAbsS: ${y} = 1.0 + absS;
    coeffs[0] = ((${n} * onePlusAbsS - 5 * ${n}) * onePlusAbsS + 8 * ${n}) * onePlusAbsS - 4 * ${n};
    coeffs[1] = ((${n} + 2) * absS - (${n} + 3)) * absS * absS + 1;
    coeffs[2] = ((${n} + 2) * oneMinusAbsS - (${n} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${n} * twoMinusAbsS - 5 * ${n}) * twoMinusAbsS + 8 * ${n}) * twoMinusAbsS - 4 * ${n};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${y}, 4>, coefs: array<${y}, 4>) -> ${y} {
    var coefsSum: ${y} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${y} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},gl=(e,t,r,i,a)=>{let[s,n,u,d,p]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],f=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${f} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",n,`max(0, min(depth, ${r[n]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(height, ${r[u]} - 1))`)};
      ${e.indicesSet("input_indices",d,`max(0, min(width, ${r[d]} - 1))`)};
      ${Qi(e,p,s,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${f} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${f} = originalIndices[${n}];
      var height:${f} = originalIndices[${u}];
      var width:${f} = originalIndices[${d}];
      ${i?`if (depth < 0 || depth > (${r[n]} - 1) || height < 0 || height > (${r[u]} - 1) || width < 0 || (width > ${r[d]} - 1)) {
      return ${a};
        }`:""};

    depth = max(0, min(depth, ${r[n]} - 1));
      height = max(0, min(height, ${r[u]} - 1));
      width = max(0, min(width, ${r[d]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${p}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${s}])`:"0"};

      var x111: ${f} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${f} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${f} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${f} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${f} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${f} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${f} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${f} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${f} = abs(depth - ${f}(depth1));
      var dx2: ${f} = abs(${f}(depth2) - depth);
      var dy1: ${f} = abs(height - ${f}(height1));
      var dy2: ${f} = abs(${f}(height2) - height);
      var dz1: ${f} = abs(width - ${f}(width1));
      var dz2: ${f} = abs(${f}(width2) - width);
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
    }`},yl=(e,t,r,i,a,s)=>{let n=e.dims,u=ul(s,t.axes,n.length),d=ll(n,i,a,t.axes),p=i.slice();i.length===0&&(p=n.map((w,S)=>w===0?1:d[S]/w),t.keepAspectRatioPolicy!=="stretch"&&(d=dl(n,p,t)));let f=G("output",e.dataType,d.length),m=B("input",e.dataType,n.length),l=z.size(d),y=n.length===d.length&&n.every((w,S)=>w===d[S]),_=t.coordinateTransformMode==="tf_crop_and_resize",b=t.extrapolationValue,v=m.type.value,x=w=>`
      ${y?"":`
      ${sl(t.coordinateTransformMode,v)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${cl(m,n)};
              ${ol(t.nearestMode,r,v)};
              ${hl(m,f,n,d,p.length,u.length,_)};
              `;case"linear":return`
              ${pl(f,n,d,p.length,u.length)};
              ${(()=>{if(n.length===2||n.length===4)return`${fl(m,f,n,_,b)}`;if(n.length===3||n.length===5)return`${gl(m,f,n,_,b)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(n.length===2||n.length===4)return`${ml(m,f,n,d,p,u,t.cubicCoeffA,_,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${w.registerUniform("output_size","u32").registerUniform("scales","f32",p.length).registerUniform("roi","f32",u.length).declareVariables(m,f)}
      ${w.mainStart()}
        ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${y?"output[global_idx] = input[global_idx];":`
        let output_indices = ${f.offsetToIndices("global_idx")};
        var input_indices: ${m.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${m.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${n.length===2||n.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${p.length>0?t.mode==="cubic"?p:p.length:""}|${a.length>0?a:""}|${u.length>0?u:""}|${y}|${t.mode==="nearest"?n.length:n}`,inputDependencies:["rank"]},getShaderSource:x,getRunData:()=>({outputs:[{dims:d,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:[{type:12,data:l},{type:1,data:p},{type:1,data:u},...j(n,d)]})}},_l=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},Jh=(e,t)=>{let r=[],i=[],a=[],s=_l(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");nl(e.inputs,t,s,r,i,a),e.compute(yl(e.inputs[0],t,s,r,i,a),{inputs:[0]})},ec=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,a=e.cubicCoeffA,s=e.excludeOutside!==0,n=e.extrapolationValue,u=e.keepAspectRatioPolicy,d=e.mode,p=e.nearestMode===""?"simple":e.nearestMode;return fe({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:a,excludeOutside:s,extrapolationValue:n,keepAspectRatioPolicy:u,mode:d,nearestMode:p})}}),bl,$l,tc,eg=P(()=>{J(),re(),we(),ae(),bl=(e,t)=>{let[r,i,a,s]=e,{numHeads:n,rotaryEmbeddingDim:u}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!z.areEqual(i.dims,[])&&!z.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(!z.areEqual(a.dims,s.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(u>0&&n===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let d=r.dims[0],p=r.dims[r.dims.length-2],f=a.dims[0],m=z.sizeFromDimension(r.dims,1)/p,l=u===0?a.dims[1]*2:m/n;if(u>l)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(d!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(p!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(l/2!==a.dims[1]&&u/2!==a.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${a.dims[1]}`);if(p>f)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},$l=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:a,scale:s}=t,n=e[0].dims[0],u=z.sizeFromDimension(e[0].dims,1),d=e[0].dims[e[0].dims.length-2],p=u/d,f=e[2].dims[1],m=a===0?f*2:p/i,l=new Array(n,d,p/m,m-f),y=z.computeStrides(l),_=[{type:1,data:s},{type:12,data:l},{type:12,data:y},...e[0].dims.length===3?new Array({type:12,data:[u,p,m,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[u,m,d*m,1]}):[],...j(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],b=v=>{let x=B("input",e[0].dataType,e[0].dims.length),w=B("position_ids",e[1].dataType,e[1].dims.length),S=B("cos_cache",e[2].dataType,e[2].dims.length),k=B("sin_cache",e[3].dataType,e[3].dims.length),I=G("output",e[0].dataType,e[0].dims.length);return v.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:l.length},{name:"global_strides",type:"u32",length:y.length},{name:"input_output_strides",type:"u32",length:y.length}]),`
        ${v.declareVariables(x,w,S,k,I)}

        ${v.mainStart(Ut)}
          let half_rotary_emb_dim = uniforms.${S.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${w.broadcastedIndicesToOffset("bsnh.xy",G("",w.type.tensor,2))};
            let position_id =
                u32(${w.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${x.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} -
                ${x.getByOffset("j")} * ${k.get("position_id","bsnh[3]")};
            ${I.setByOffset("i","re")}
            let im = ${x.getByOffset("i")} * ${k.get("position_id","bsnh[3]")} +
                ${x.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${I.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${I.setByOffset("k",x.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:fe({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(z.size(l)/Ut)},programUniforms:_})}},tc=(e,t)=>{bl(e.inputs,t),e.compute($l(e.inputs,t))}}),wl,vl,rc,tg=P(()=>{J(),re(),ae(),wl=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let a=t.dims[t.dims.length-1],s=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==a)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==s)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==a)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let n=e[3];if(n.dims.length!==1)throw new Error("Beta must be 1D");if(n.dims[n.dims.length-1]!==a)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let n=e[4];if(n.dims.length!==1)throw new Error("Bias must be 1D");if(n.dims[n.dims.length-1]!==a)throw new Error("Bias must have the same hidden size as input")}},vl=(e,t,r,i)=>{let a=t.simplified,s=e[0].dims,n=z.size(s),u=s,d=n,p=s.slice(-1)[0],f=i?s.slice(0,-1).concat(1):[],m=!a&&e.length>3,l=e.length>4,y=i&&r>1,_=i&&r>2,b=r>3,v=64,x=_e(p),w=[{type:12,data:d},{type:12,data:x},{type:12,data:p},{type:1,data:t.epsilon}],S=I=>{let E=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],C=[B("x",e[0].dataType,e[0].dims,x),B("skip",e[1].dataType,e[1].dims,x),B("gamma",e[2].dataType,e[2].dims,x)];m&&C.push(B("beta",e[3].dataType,e[3].dims,x)),l&&C.push(B("bias",e[4].dataType,e[4].dims,x)),C.push(G("output",e[0].dataType,u,x)),y&&C.push(G("mean_output",1,f)),_&&C.push(G("inv_std_output",1,f)),b&&C.push(G("input_skip_bias_sum",e[0].dataType,u,x));let R=Te(e[0].dataType),N=Te(1,x);return`

      ${I.registerUniforms(E).declareVariables(...C)}
      var<workgroup> sum_shared : array<${N}, ${v}>;
      var<workgroup> sum_squared_shared : array<${N}, ${v}>;

      ${I.mainStart([v,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${v};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${v};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${v-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${l?"bias[offset1d + i]":R+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${b?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Nt(R,x,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${v};
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
        let mean = ${ft("sum",x)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${ft("square_sum",x)} / f32(uniforms.hidden_size) ${a?"":"- mean * mean"} + uniforms.epsilon);
        ${y?"mean_output[global_idx] = mean;":""}
        ${_?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${a?"":`- ${R}(mean)`}) *
            ${R}(inv_std_dev) * gamma[offset1d + i]
            ${m?"+ beta[offset1d + i]":""};
        }
      }`},k=[{dims:u,dataType:e[0].dataType}];return r>1&&k.push({dims:f,dataType:1}),r>2&&k.push({dims:f,dataType:1}),r>3&&k.push({dims:s,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${x};${y};${_};${b}`,inputDependencies:e.map((I,E)=>"type")},getShaderSource:S,getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(d/p)},programUniforms:w})}},rc=(e,t)=>{wl(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(vl(e.inputs,t,e.outputCount,!1),{outputs:r})}}),xl,Kt,kl,Yi,Sl,Tl,ic,ac,rg=P(()=>{J(),re(),we(),ae(),xl=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},Kt=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},kl=(e,t)=>{if(e.length>1){let r=Kt(e,1),i=Kt(e,2),a=Kt(e,3);return a.length===0&&(a=[...Array(e[0].dims.length).keys()]),fe({starts:r,ends:i,axes:a})}else return t},Yi=(e,t,r,i,a)=>{let s=e;return e<0&&(s+=r[i[t]]),a[t]<0?Math.max(0,Math.min(s,r[i[t]]-1)):Math.max(0,Math.min(s,r[i[t]]))},Sl=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${F("uniforms.input_shape","i",r.length)};
            let steps_i = ${F("uniforms.steps","i",r.length)};
            let signs_i = ${F("uniforms.signs","i",r.length)};
            let starts_i = ${F("uniforms.starts","i",r.length)};
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
      }`,Tl=(e,t)=>{let r=e[0].dims,i=z.size(r),a=t.axes.length>0?z.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],s=Kt(e,4);s.forEach(x=>x!==0||(()=>{throw new Error("step cannot be 0")})),s.length===0&&(s=Array(a.length).fill(1));let n=t.starts.map((x,w)=>Yi(x,w,r,a,s)),u=t.ends.map((x,w)=>Yi(x,w,r,a,s));if(a.length!==n.length||a.length!==u.length)throw new Error("start, ends and axes should have the same number of elements");if(a.length!==r.length)for(let x=0;x<r.length;++x)a.includes(x)||(n.splice(x,0,0),u.splice(x,0,r[x]),s.splice(x,0,1));let d=s.map(x=>Math.sign(x));s.forEach((x,w,S)=>{if(x<0){let k=(u[w]-n[w])/x,I=n[w],E=I+k*s[w];n[w]=E,u[w]=I,S[w]=-x}});let p=r.slice(0);a.forEach((x,w)=>{p[x]=Math.ceil((u[x]-n[x])/s[x])});let f={dims:p,dataType:e[0].dataType},m=G("output",e[0].dataType,p.length),l=B("input",e[0].dataType,e[0].dims.length),y=z.size(p),_=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:n.length},{name:"signs",type:"i32",length:d.length},{name:"steps",type:"u32",length:s.length}],b=[{type:12,data:y},{type:12,data:n},{type:6,data:d},{type:12,data:s},...j(e[0].dims,p)],v=x=>`
      ${x.registerUniforms(_).declareVariables(l,m)}
        ${Sl(l,m,r)}
        ${x.mainStart()}
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${m.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${m.setByOffset("global_idx",l.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${d.length}_${n.length}_${s.length}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[f],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:b})}},ic=(e,t)=>{xl(e.inputs,t);let r=kl(e.inputs,t);e.compute(Tl(e.inputs,r),{inputs:[0]})},ac=e=>{let t=e.starts,r=e.ends,i=e.axes;return fe({starts:t,ends:r,axes:i})}}),Il,El,nc,sc,ig=P(()=>{J(),re(),we(),mt(),ae(),Il=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},El=(e,t)=>{let r=e.inputs[0],i=r.dims,a=z.size(i),s=i.length,n=z.normalizeAxis(t.axis,s),u=n<i.length-1,d,p=[];u?(p=Array.from({length:s},(C,R)=>R),p[n]=s-1,p[s-1]=n,d=e.compute(De(r,p),{inputs:[r],outputs:[-1]})[0]):d=r;let f=d.dims,m=f[s-1],l=a/m,y=_e(m),_=m/y,b=64;l===1&&(b=256);let v=(C,R)=>R===4?`max(max(${C}.x, ${C}.y), max(${C}.z, ${C}.w))`:R===2?`max(${C}.x, ${C}.y)`:R===3?`max(max(${C}.x, ${C}.y), ${C}.z)`:C,x=B("x",d.dataType,d.dims,y),w=G("result",d.dataType,d.dims,y),S=x.type.value,k=Te(d.dataType)==="f32"?`var threadMax = ${S}(-3.402823e+38f);`:`var threadMax = ${S}(-65504.0h);`,I=C=>`
      var<workgroup> rowMaxShared : ${S};
      var<workgroup> rowSumShared : ${S};
      var<workgroup> threadShared : array<${S}, ${b}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${S} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${S}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${C.registerUniform("packedCols","i32").declareVariables(x,w)}
      ${C.mainStart(b)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${b};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${k}
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
          rowMaxShared = ${S}(${v("threadShared[0]",y)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${S}(0.0);
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
          rowSumShared = ${S}(${ft("threadShared[0]",y)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,E=e.compute({name:"Softmax",shaderCache:{hint:`${y};${b}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:f,dataType:d.dataType}],dispatchGroup:{x:l},programUniforms:[{type:6,data:_}]}),getShaderSource:I},{inputs:[d],outputs:[u?-1:0]})[0];u&&e.compute(De(E,p),{inputs:[E]})},nc=(e,t)=>{Il(e.inputs),El(e,t)},sc=e=>fe({axis:e.axis})}),Zi,Cl,zl,Al,oc,ag=P(()=>{J(),re(),ae(),Zi=e=>Array.from(e.getBigInt64Array(),Number),Cl=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Zi(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},zl=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},Al=(e,t)=>{let r=e[0].dims,i=t??Zi(e[1]),a=zl(r,i),s=z.size(a),n=e[0].dataType,u=B("input",n,r.length),d=G("output",n,a.length),p=f=>`
      const inputShape = ${u.indices(...r)};
      ${f.registerUniform("output_size","u32").declareVariables(u,d)}
      ${f.mainStart()}
      ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${d.offsetToIndices("global_idx")};
      var input_indices: ${u.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${u.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${d.indicesGet("output_indices","i")}  % input_dim_i;

        ${u.indicesSet("input_indices","i","input_dim_value")}
      }
      ${d.setByOffset("global_idx",u.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},...j(e[0].dims,a)]}),getShaderSource:p}},oc=e=>{Cl(e.inputs),e.compute(Al(e.inputs),{inputs:[0]})}}),Ol,Rl,uc,ng=P(()=>{J(),re(),ae(),Ol=(e,t,r,i,a)=>{let s=G("output_data",a,r.length,4),n=B("a_data",t[1].dataType,t[1].dims.length,4),u=B("b_data",t[2].dataType,t[2].dims.length,4),d=B("c_data",t[0].dataType,t[0].dims.length,4),p,f=(m,l,y)=>`select(${l}, ${m}, ${y})`;if(!i)p=s.setByOffset("global_idx",f(n.getByOffset("global_idx"),u.getByOffset("global_idx"),d.getByOffset("global_idx")));else{let m=(l,y,_="")=>{let b=`a_data[index_a${y}][component_a${y}]`,v=`b_data[index_b${y}][component_b${y}]`,x=`bool(c_data[index_c${y}] & (0xffu << (component_c${y} * 8)))`;return`
            let output_indices${y} = ${s.offsetToIndices(`global_idx * 4u + ${y}u`)};
            let offset_a${y} = ${n.broadcastedIndicesToOffset(`output_indices${y}`,s)};
            let offset_b${y} = ${u.broadcastedIndicesToOffset(`output_indices${y}`,s)};
            let offset_c${y} = ${d.broadcastedIndicesToOffset(`output_indices${y}`,s)};
            let index_a${y} = offset_a${y} / 4u;
            let index_b${y} = offset_b${y} / 4u;
            let index_c${y} = offset_c${y} / 4u;
            let component_a${y} = offset_a${y} % 4u;
            let component_b${y} = offset_b${y} % 4u;
            let component_c${y} = offset_c${y} % 4u;
            ${l}[${y}] = ${_}(${f(b,v,x)});
          `};a===9?p=`
            var data = vec4<u32>(0);
            ${m("data",0,"u32")}
            ${m("data",1,"u32")}
            ${m("data",2,"u32")}
            ${m("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:p=`
            ${m("output_data[global_idx]",0)}
            ${m("output_data[global_idx]",1)}
            ${m("output_data[global_idx]",2)}
            ${m("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(d,n,u,s)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${p}
      }`},Rl=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,a=e[1].dataType,s=!(z.areEqual(t,r)&&z.areEqual(r,i)),n=t,u=z.size(t);if(s){let p=Pt.calcShape(Pt.calcShape(t,r,!1),i,!1);if(!p)throw new Error("Can't perform where op on the given tensors");n=p,u=z.size(n)}let d=Math.ceil(u/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:p=>Ol(p,e,n,s,a),getRunData:()=>({outputs:[{dims:n,dataType:a}],dispatchGroup:{x:Math.ceil(u/64/4)},programUniforms:[{type:12,data:d},...j(i,t,r,n)]})}},uc=e=>{e.compute(Rl(e.inputs))}}),lc,sg=P(()=>{bm(),Da(),$m(),wm(),vm(),xm(),km(),Cm(),Am(),Om(),Rm(),Bm(),Dm(),Mm(),Nm(),Pm(),Um(),Wm(),qm(),Lm(),Vm(),Hm(),Gm(),Fm(),jm(),Ch(),Km(),Qm(),Ym(),Zm(),Xm(),Ba(),Jm(),eg(),tg(),rg(),ig(),Oh(),ag(),mt(),Ma(),ng(),lc=new Map([["Abs",[ip]],["Acos",[ap]],["Acosh",[np]],["Add",[Up]],["ArgMax",[Jd,da]],["ArgMin",[Xd,da]],["Asin",[sp]],["Asinh",[op]],["Atan",[up]],["Atanh",[lp]],["Attention",[ep]],["AveragePool",[qh,Wh]],["BatchNormalization",[tp]],["BiasAdd",[rp]],["BiasSplitGelu",[Pp]],["Cast",[pp,dp]],["Ceil",[cp]],["Clip",[hp]],["Concat",[Qp,Yp]],["Conv",[ga,ma]],["ConvTranspose",[sh,nh]],["Cos",[fp]],["Cosh",[mp]],["CumSum",[oh,uh]],["DepthToSpace",[lh,dh]],["DequantizeLinear",[Kh,Qh]],["Div",[Wp]],["Einsum",[ph,hh]],["Elu",[gp,er]],["Equal",[qp]],["Erf",[yp]],["Exp",[_p]],["Expand",[ch]],["FastGelu",[fh]],["Floor",[bp]],["FusedConv",[ga,ma]],["Gather",[gh,mh]],["GatherElements",[vh,wh]],["GatherBlockQuantized",[bh,$h]],["GatherND",[yh,_h]],["Gelu",[$p]],["Gemm",[kh,xh]],["GlobalAveragePool",[Vh,Lh]],["GlobalMaxPool",[jh,Fh]],["Greater",[Gp]],["GreaterOrEqual",[jp]],["GridSample",[Sh,Th]],["GroupQueryAttention",[Rh]],["HardSigmoid",[Ep,Ip]],["InstanceNormalization",[Bh]],["LayerNormalization",[Dh]],["LeakyRelu",[wp,er]],["Less",[Fp]],["LessOrEqual",[Kp]],["Log",[Mp]],["MatMul",[Mh]],["MatMulNBits",[Nh,Ph]],["MaxPool",[Hh,Gh]],["Mul",[Lp]],["MultiHeadAttention",[Eh,Ih]],["Neg",[xp]],["Not",[vp]],["Pad",[Uh]],["Pow",[Vp]],["QuickGelu",[Np,er]],["Range",[Yh]],["Reciprocal",[kp]],["ReduceMin",[jd]],["ReduceMean",[Ld]],["ReduceMax",[Fd]],["ReduceSum",[Qd]],["ReduceProd",[Kd]],["ReduceL1",[Vd]],["ReduceL2",[Hd]],["ReduceLogSum",[Zd]],["ReduceLogSumExp",[Gd]],["ReduceSumSquare",[Yd]],["Relu",[Sp]],["Resize",[Jh,ec]],["RotaryEmbedding",[tc]],["ScatterND",[Xh,Zh]],["Sigmoid",[Tp]],["Sin",[Cp]],["Sinh",[zp]],["Slice",[ic,ac]],["SkipLayerNormalization",[rc]],["Split",[zh,Ah]],["Sqrt",[Ap]],["Softmax",[nc,sc]],["Sub",[Hp]],["Tan",[Op]],["Tanh",[Rp]],["ThresholdedRelu",[Dp,er]],["Tile",[oc]],["Transpose",[zd,Ad]],["Where",[uc]]])}),dc,og=P(()=>{Fe(),nt(),ae(),dc=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,a){et(e.programInfo.name);let s=this.backend.device,n=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let u=[];for(let p of t)u.push({binding:u.length,resource:{buffer:p.buffer}});for(let p of r)u.push({binding:u.length,resource:{buffer:p.buffer}});a&&u.push({binding:u.length,resource:a});let d=s.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:u,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let p={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:d,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(p)}n.setPipeline(e.computePipeline),n.setBindGroup(0,d),n.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Ge(e.programInfo.name)}dispose(){}build(e,t){et(e.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"},{feature:"subgroups-f16",extension:"subgroups_f16"}].forEach(p=>{r.features.has(p.feature)&&i.push(`enable ${p.extension};`)});let a=Cd(t,this.backend.device.limits),s=e.getShaderSource(a),n=`${i.join(`
`)}
${a.additionalImplementations}
${s}`,u=r.createShaderModule({code:n,label:e.name});ce("verbose",()=>`[WebGPU] ${e.name} shader code: ${n}`);let d=r.createComputePipeline({compute:{module:u,entryPoint:"main"},layout:"auto",label:e.name});return Ge(e.name),{programInfo:e,computePipeline:d,uniformVariablesInfo:a.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,a=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=a&&r<=a&&i<=a)return[t,r,i];let s=t*r*i,n=Math.ceil(Math.sqrt(s));if(n>a){if(n=Math.ceil(Math.cbrt(s)),n>a)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[n,n,n]}else return[n,n,1]}}}),Bl,Dl,Ml,Nl,pc,ug=P(()=>{Fe(),J(),nt(),xd(),ym(),sg(),og(),Bl=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let a=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${a}`);break}case"rank":{let s=e[i].dims.length;r.push(`${a};${s}`);break}case"dims":{let s=e[i].dims.join(",");r.push(`${a};${s}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},Dl=(e,t,r)=>{var a,s;let i=e.name;return(a=e.shaderCache)!=null&&a.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${Bl(t,((s=e.shaderCache)==null?void 0:s.inputDependencies)??new Array(t.length).fill("dims"))}`,i},Ml=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Nl=class{constructor(e){this.subgroupsSupported=e.features.has("subgroups"),this.subgroupsF16Supported=e.features.has("subgroups");let t=e.limits;!this.subgroupsSupported||!t.minSubgroupSize||!t.maxSubgroupSize?this.subgroupSizeRange=void 0:this.subgroupSizeRange=[t.minSubgroupSize,t.maxSubgroupSize]}},pc=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},a=s=>t.features.has(s)&&r.push(s)&&!0;a("chromium-experimental-timestamp-query-inside-passes")||a("timestamp-query"),a("shader-f16"),a("subgroups")&&a("subgroups-f16"),this.device=await t.requestDevice(i),this.deviceInfo=new Nl(this.device),this.adapterInfo=new Ml(t.info||await t.requestAdapterInfo()),this.gpuDataManager=kd(this),this.programManager=new dc(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,za(e.logLevel,!!e.debug),this.device.onuncapturederror=s=>{s.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${s.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;et(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var i;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let a=0;a<t.length/2;a++){let s=r[a],n=s.kernelId,u=this.kernels.get(n),d=u.kernelType,p=u.kernelName,f=s.programName,m=s.inputTensorViews,l=s.outputTensorViews,y=t[a*2],_=t[a*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=y);let b=Number(y-this.queryTimeBase),v=Number(_-this.queryTimeBase);if(!Number.isSafeInteger(b)||!Number.isSafeInteger(v))throw new RangeError("incorrect timestamp range");if((i=this.env.webgpu.profiling)!=null&&i.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:m.map(x=>({dims:x.dims,dataType:St(x.dataType)})),outputsMetadata:l.map(x=>({dims:x.dims,dataType:St(x.dataType)})),kernelId:n,kernelType:d,kernelName:p,programName:f,startTime:b,endTime:v});else{let x="";m.forEach((S,k)=>{x+=`input[${k}]: [${S.dims}] | ${St(S.dataType)}, `});let w="";l.forEach((S,k)=>{w+=`output[${k}]: [${S.dims}] | ${St(S.dataType)}, `}),console.log(`[profiling] kernel "${n}|${d}|${p}|${f}" ${x}${w}execution time: ${v-b} ns`)}Br("GPU",`${f}::${y}::${_}`)}e.unmap(),this.pendingQueries.delete(e)}),Ge()}run(e,t,r,i,a,s){et(e.name);let n=[];for(let w=0;w<t.length;++w){let S=t[w].data;if(S===0)continue;let k=this.gpuDataManager.get(S);if(!k)throw new Error(`no GPU data for input: ${S}`);n.push(k)}let{outputs:u,dispatchGroup:d,programUniforms:p}=e.getRunData(t),f=r.length===0?u.map((w,S)=>S):r;if(f.length!==u.length)throw new Error(`Output size ${f.length} must be equal to ${u.length}.`);let m=[],l=[];for(let w=0;w<u.length;++w){if(!Number.isInteger(f[w])||f[w]<-3||f[w]>=s)throw new Error(`Invalid output index: ${f[w]}`);if(f[w]===-3)continue;let S=f[w]===-1,k=f[w]===-2,I=S||k?a(u[w].dataType,u[w].dims):i(f[w],u[w].dataType,u[w].dims);if(m.push(I),I.data===0)continue;let E=this.gpuDataManager.get(I.data);if(!E)throw new Error(`no GPU data for output: ${I.data}`);if(S&&this.temporaryData.push(E),k){let C=this.kernelPersistentData.get(this.currentKernelId);C||(C=[],this.kernelPersistentData.set(this.currentKernelId,C)),C.push(E)}l.push(E)}if(n.length!==t.length||l.length!==m.length){if(l.length===0)return Ge(e.name),m;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let y;if(p){let w=0,S=[];p.forEach(C=>{let R=typeof C.data=="number"?[C.data]:C.data;if(R.length===0)return;let N=C.type===10?2:4,q,ee;C.type===10?(ee=R.length>4?16:R.length>2?8:R.length*N,q=R.length>4?16:N*R.length):(ee=R.length<=2?R.length*N:16,q=16),w=Math.ceil(w/ee)*ee,S.push(w);let K=C.type===10?8:4;w+=R.length>4?Math.ceil(R.length/K)*q:R.length*N});let k=16;w=Math.ceil(w/k)*k;let I=new ArrayBuffer(w);p.forEach((C,R)=>{let N=S[R],q=typeof C.data=="number"?[C.data]:C.data;if(C.type===6)new Int32Array(I,N,q.length).set(q);else if(C.type===12)new Uint32Array(I,N,q.length).set(q);else if(C.type===10)new Uint16Array(I,N,q.length).set(q);else if(C.type===1)new Float32Array(I,N,q.length).set(q);else throw new Error(`Unsupported uniform type: ${St(C.type)}`)});let E=this.gpuDataManager.create(w,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(E.buffer,0,I,0,w),this.gpuDataManager.release(E.id),y={offset:0,size:w,buffer:E.buffer}}let _=this.programManager.normalizeDispatchGroupSize(d),b=_[1]===1&&_[2]===1,v=Dl(e,t,b),x=this.programManager.getArtifact(v);if(x||(x=this.programManager.build(e,_),this.programManager.setArtifact(v,x),ce("info",()=>`[artifact] key: ${v}, programName: ${e.name}`)),p&&x.uniformVariablesInfo){if(p.length!==x.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${x.uniformVariablesInfo.length}, got ${p.length} in program "${x.programInfo.name}".`);for(let w=0;w<p.length;w++){let S=p[w],k=S.type,I=typeof S.data=="number"?1:S.data.length,[E,C]=x.uniformVariablesInfo[w];if(k!==E||I!==C)throw new Error(`Uniform variable ${w} mismatch: expect type ${E} with size ${C}, got type ${k} with size ${I} in program "${x.programInfo.name}".`)}}if(ce("info",()=>`[ProgramManager] run "${e.name}" (key=${v}) with ${_[0]}x${_[1]}x${_[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let w={kernelId:this.currentKernelId,programName:x.programInfo.name,inputTensorViews:t,outputTensorViews:m};this.pendingKernels.push(w),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(w)}return this.programManager.run(x,n,l,_,y),Ge(e.name),m}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let a=lc.get(e);if(!a)throw new Error(`kernel not implemented: ${e}`);let s={kernelType:e,kernelName:i,kernelEntry:a[0],attributes:[a[1],r]};this.kernels.set(t,s)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let a=i.kernelType,s=i.kernelName,n=i.kernelEntry,u=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${a}] ${s}" is not allowed to be called recursively`);this.currentKernelId=e,u[0]&&(u[1]=u[0](u[1]),u[0]=void 0),ce("info",()=>`[WebGPU] Start to run kernel "[${a}] ${s}"...`);let d=this.env.debug;this.temporaryData=[];try{return d&&this.device.pushErrorScope("validation"),n(t,u[1]),0}catch(p){return r.push(Promise.resolve(`[WebGPU] Kernel "[${a}] ${s}" failed. ${p}`)),1}finally{d&&r.push(this.device.popErrorScope().then(p=>p?`GPU validation error for kernel "[${a}] ${s}": ${p.message}`:null));for(let p of this.temporaryData)this.gpuDataManager.release(p.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let a=this.sessionExternalDataMapping.get(e);a||(a=new Map,this.sessionExternalDataMapping.set(e,a));let s=a.get(t),n=this.gpuDataManager.registerExternalBuffer(r,i,s);return a.set(t,[n,r]),n}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await oa(this,e,t);return Aa(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){ce("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){ce("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){ce("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let a=this.getComputePassEncoder(),s=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),a.setPipeline(s.computePipeline),a.setBindGroup(0,s.bindGroup),a.dispatchWorkgroups(...s.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Pl,Xi,Ul,Ji,ea,ta,Wl,hc,lg=P(()=>{nt(),Pl=1,Xi=()=>Pl++,Ul=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Ji=(e,t)=>{let r=Ul.get(e);if(!r)throw new Error("Unsupported data type.");return t.length>0?Math.ceil(t.reduce((i,a)=>i*a)*r/8):0},ea=class{constructor(e){this.sessionId=e.sessionId,this.mlContext=e.context,this.mlTensor=e.tensor,this.dataType=e.dataType,this.tensorShape=e.shape}get tensor(){return this.mlTensor}get type(){return this.dataType}get shape(){return this.tensorShape}get byteLength(){return Ji(this.dataType,this.tensorShape)}destroy(){ce("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((i,a)=>i===r[a])}},ta=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,i){if(this.wrapper){if(this.wrapper.canReuseTensor(e,t,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==Ji(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let a=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(t,r,a,!0,!0),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){if(this.wrapper)if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(e);return}else ce("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor();this.activeUpload?this.activeUpload.set(e):this.activeUpload=new Uint8Array(e)}async download(e){if(this.activeUpload)if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(this.activeUpload):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(this.activeUpload);return}else return this.activeUpload.buffer;if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Wl=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}reserveTensorId(){let e=Xi();return this.tensorTrackersById.set(e,new ta(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,i){ce("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${e}, dataType: ${t}, shape: ${r}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(e);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(this.backend.currentContext,t,r,i)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){ce("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,i){let a=Xi(),s=new ea({sessionId:this.backend.currentSessionId,context:e,tensor:t,dataType:r,shape:i});return this.tensorTrackersById.set(a,new ta(this,s)),this.externalTensors.add(s),a}async getCachedTensor(e,t,r,i,a){let s=this.backend.currentSessionId,n=this.backend.currentContext;for(let[d,p]of this.freeTensors.entries())if(p.canReuseTensor(n,e,t)){ce("verbose",()=>`[WebNN] Reusing tensor {dataType: ${e}, shape: ${t}}`);let f=this.freeTensors.splice(d,1)[0];return f.sessionId=s,f}ce("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${e}, shape: ${t}}`);let u=await n.createTensor({dataType:e,shape:t,dimensions:t,usage:r,writable:i,readable:a});return new ea({sessionId:s,context:n,tensor:u,dataType:e,shape:t})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},hc=(...e)=>new Wl(...e)}),ra,ql,cc,dg=P(()=>{J(),Ct(),xd(),lg(),nt(),ra=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),ql=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length===i.length&&r.every((a,s)=>a===i[s]&&e[a]===t[a])},cc=class{constructor(e){this.tensorManager=hc(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],za(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){this.activeSessionId=e}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(r=>ql(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}get currentContext(){let e=this.getMLContext(this.currentSessionId);if(!e)throw new Error(`No MLContext found for session ${this.currentSessionId}`);return e}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e)}onReleaseSession(e){let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(a=>a.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){ce("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i){let a=ra.get(t);if(!a)throw new Error(`Unsupported ONNX data type: ${t}`);return this.tensorManager.ensureTensor(e,a,r,i)}uploadTensor(e,t){if(!Se().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");ce("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Aa(r,t)}}registerMLTensor(e,t,r){let i=ra.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let a=this.tensorManager.registerTensor(this.currentContext,e,i,r);return ce("verbose",()=>`[WebNN] registerMLTensor {tensor: ${e}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,r,i,a,s){if(!s)throw new Error("External mounted files are not available.");let n=e;e.startsWith("./")&&(n=e.substring(2));let u=s.get(n);if(!u)throw new Error(`File with name ${n} not found in preloaded files.`);if(t+r>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=u.slice(t,t+r).buffer,p;switch(a.dataType){case"float32":p=new Float32Array(d);break;case"float16":p=new Uint16Array(d);break;case"int32":p=new Int32Array(d);break;case"uint32":p=new Uint32Array(d);break;case"int64":p=new BigInt64Array(d);break;case"uint64":p=new BigUint64Array(d);break;case"int8":p=new Int8Array(d);break;case"int4":case"uint4":case"uint8":p=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${a.dataType} in creating WebNN Constant from external data.`)}return ce("verbose",()=>`[WebNN] registerMLConstant {dataType: ${a.dataType}, shape: ${a.shape}}}`),i.constant(a,p)}flush(){}}}),fc={};ar(fc,{init:()=>mc});var Er,Ll,mc,pg=P(()=>{J(),ug(),nt(),re(),dg(),Er=class gc{constructor(t,r,i,a){this.module=t,this.dataType=r,this.data=i,this.dims=a}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=z.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=z.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=z.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=z.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(z.size(t)!==z.size(this.dims))throw new Error("Invalid new shape");return new gc(this.module,this.dataType,this.data,t)}},Ll=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo,this.deviceInfo=t.deviceInfo;let i=e.PTR_SIZE,a=r/e.PTR_SIZE,s=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*a++,s));let n=Number(e.getValue(i*a++,s));this.outputCount=Number(e.getValue(i*a++,s)),this.customDataOffset=Number(e.getValue(i*a++,"*")),this.customDataSize=Number(e.getValue(i*a++,s));let u=[];for(let d=0;d<n;d++){let p=Number(e.getValue(i*a++,s)),f=Number(e.getValue(i*a++,"*")),m=Number(e.getValue(i*a++,s)),l=[];for(let y=0;y<m;y++)l.push(Number(e.getValue(i*a++,s)));u.push(new Er(e,p,f,l))}this.inputs=u}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var n;let r=((n=t==null?void 0:t.inputs)==null?void 0:n.map(u=>typeof u=="number"?this.inputs[u]:u))??this.inputs,i=(t==null?void 0:t.outputs)??[],a=(u,d,p)=>new Er(this.module,d,this.output(u,p),p),s=(u,d)=>{let p=Mt(u,d);if(!p)throw new Error(`Unsupported data type: ${u}`);let f=p>0?this.backend.gpuDataManager.create(p).id:0;return new Er(this.module,u,f,d)};return this.backend.run(e,r,i,a,s,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,a=i===4?"i32":"i64",s=this.module.stackAlloc((1+t.length)*i);this.module.setValue(s,t.length,a);for(let n=0;n<t.length;n++)this.module.setValue(s+i*(n+1),t[n],a);return this.module._JsepOutput(this.opKernelContext,e,s)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},mc=async(e,t,r,i)=>{let a=t.jsepInit;if(!a)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let s=new pc;await s.initialize(r,i),a("webgpu",[s,n=>s.alloc(Number(n)),n=>s.free(n),(n,u,d,p=!1)=>{if(p)ce("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(n)}, dst=${Number(u)}, size=${Number(d)}`),s.memcpy(Number(n),Number(u));else{ce("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(n)}, gpuDataId=${Number(u)}, size=${Number(d)}`);let f=t.HEAPU8.subarray(Number(n>>>0),Number(n>>>0)+Number(d));s.upload(Number(u),f)}},async(n,u,d)=>{ce("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${n}, dataOffset=${u}, size=${d}`),await s.download(Number(n),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+d)>>>0))},(n,u,d)=>s.createKernel(n,Number(u),d,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),n=>s.releaseKernel(n),(n,u,d,p)=>{ce("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${n}, contextDataOffset=${u}`);let f=new Ll(t,s,Number(u));return s.computeKernel(Number(n),f,p)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let s=new cc(r);a("webnn",[s,()=>s.reserveTensorId(),n=>s.releaseTensorId(n),async(n,u,d,p)=>s.ensureTensor(n,u,d,p),(n,u)=>{s.uploadTensor(n,u)},async(n,u)=>s.downloadTensor(n,u)])}}}),Vl,La,Va,ht,Hl,Wr,Ha,Ga,ia,Fa,ja,Ka,yc=P(()=>{mm(),gm(),J(),Ct(),Sa(),vd(),Vl=(e,t)=>{Se()._OrtInit(e,t)!==0&&pe("Can't initialize onnxruntime.")},La=async e=>{Vl(e.wasm.numThreads,Mr(e.logLevel))},Va=async(e,t)=>{{let r=(pg(),Rr(fc)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let i=e.webgpu.adapter;if(i){if(typeof i.limits!="object"||typeof i.features!="object"||typeof i.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let s=e.webgpu.forceFallbackAdapter;if(s!==void 0&&typeof s!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${s}"`);if(i=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:s}),!i)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await r("webgpu",Se(),e,i)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await r("webnn",Se(),e)}}},ht=new Map,Hl=e=>{let t=Se(),r=t.stackSave();try{let i=t.PTR_SIZE,a=t.stackAlloc(2*i);t._OrtGetInputOutputCount(e,a,a+i)!==0&&pe("Can't get session input/output count.");let s=i===4?"i32":"i64";return[Number(t.getValue(a,s)),Number(t.getValue(a+i,s))]}finally{t.stackRestore(r)}},Wr=e=>{let t=Se(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Ha=async(e,t)=>{var m,l,y;let r,i,a=Se();Array.isArray(e)?[r,i]=e:e.buffer===a.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=Wr(e);let s=0,n=0,u=0,d=[],p=[],f=[];try{if([n,d]=wd(t),(t==null?void 0:t.externalData)&&a.mountExternalData){let I=[];for(let E of t.externalData){let C=typeof E=="string"?E:E.path;I.push(Ca(typeof E=="string"?E:E.data).then(R=>{a.mountExternalData(C,R)}))}await Promise.all(I)}for(let I of(t==null?void 0:t.executionProviders)??[])if((typeof I=="string"?I:I.name)==="webnn"){if(a.shouldTransferToMLTensor=!1,typeof I!="string"){let E=I,C=E==null?void 0:E.context,R=E==null?void 0:E.gpuDevice,N=E==null?void 0:E.deviceType,q=E==null?void 0:E.powerPreference;C?a.currentContext=C:R?a.currentContext=await a.jsepCreateMLContext(R):a.currentContext=await a.jsepCreateMLContext({deviceType:N,powerPreference:q})}else a.currentContext=await a.jsepCreateMLContext();break}s=await a._OrtCreateSession(r,i,n),s===0&&pe("Can't create a session."),(m=a.jsepOnCreateSession)==null||m.call(a),a.currentContext&&(a.jsepRegisterMLContext(s,a.currentContext),a.currentContext=void 0,a.shouldTransferToMLTensor=!0);let[_,b]=Hl(s),v=!!(t!=null&&t.enableGraphCapture),x=[],w=[],S=[];for(let I=0;I<_;I++){let E=a._OrtGetInputName(s,I);E===0&&pe("Can't get an input name."),p.push(E),x.push(a.UTF8ToString(E))}for(let I=0;I<b;I++){let E=a._OrtGetOutputName(s,I);E===0&&pe("Can't get an output name."),f.push(E);let C=a.UTF8ToString(E);w.push(C);{if(v&&(t==null?void 0:t.preferredOutputLocation)===void 0){S.push("gpu-buffer");continue}let R=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((l=t==null?void 0:t.preferredOutputLocation)==null?void 0:l[C])??"cpu";if(R!=="cpu"&&R!=="cpu-pinned"&&R!=="gpu-buffer"&&R!=="ml-tensor")throw new Error(`Not supported preferred output location: ${R}.`);if(v&&R!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${R}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);S.push(R)}}let k=null;return S.some(I=>I==="gpu-buffer"||I==="ml-tensor")&&(u=a._OrtCreateBinding(s),u===0&&pe("Can't create IO binding."),k={handle:u,outputPreferredLocations:S,outputPreferredLocationsEncoded:S.map(I=>sa(I))}),ht.set(s,[s,p,f,k,v,!1]),[s,x,w]}catch(_){throw p.forEach(b=>a._OrtFree(b)),f.forEach(b=>a._OrtFree(b)),u!==0&&a._OrtReleaseBinding(u)!==0&&pe("Can't release IO binding."),s!==0&&a._OrtReleaseSession(s)!==0&&pe("Can't release session."),_}finally{a._free(r),n!==0&&a._OrtReleaseSessionOptions(n)!==0&&pe("Can't release session options."),d.forEach(_=>a._free(_)),(y=a.unmountExternalData)==null||y.call(a)}},Ga=e=>{var d;let t=Se(),r=ht.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,a,s,n,u]=r;n&&(u&&t._OrtClearBoundOutputs(n.handle)!==0&&pe("Can't clear bound outputs."),t._OrtReleaseBinding(n.handle)!==0&&pe("Can't release IO binding.")),(d=t.jsepOnReleaseSession)==null||d.call(t,e),a.forEach(p=>t._OrtFree(p)),s.forEach(p=>t._OrtFree(p)),t._OrtReleaseSession(i)!==0&&pe("Can't release session."),ht.delete(e)},ia=(e,t,r,i,a,s=!1)=>{if(!e){t.push(0);return}let n=Se(),u=n.PTR_SIZE,d=e[0],p=e[1],f=e[3],m,l;if(d==="string"&&(f==="gpu-buffer"||f==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&f!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(f==="gpu-buffer"){let b=e[2].gpuBuffer;l=Mt(Xt(d),p);let v=n.jsepRegisterBuffer;if(!v)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');m=v(i,a,b,l)}else if(f==="ml-tensor"){let b=e[2].mlTensor;l=Mt(Xt(d),p);let v=n.jsepRegisterMLTensor;if(!v)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');m=v(b,Xt(d),p)}else{let b=e[2];if(Array.isArray(b)){l=u*b.length,m=n._malloc(l),r.push(m);for(let v=0;v<b.length;v++){if(typeof b[v]!="string")throw new TypeError(`tensor data at index ${v} is not a string`);n.setValue(m+v*u,Ee(b[v],r),"*")}}else l=b.byteLength,m=n._malloc(l),r.push(m),n.HEAPU8.set(new Uint8Array(b.buffer,b.byteOffset,l),m)}let y=n.stackSave(),_=n.stackAlloc(4*p.length);try{p.forEach((v,x)=>n.setValue(_+x*u,v,u===4?"i32":"i64"));let b=n._OrtCreateTensor(Xt(d),m,l,_,p.length,sa(f));b===0&&pe(`Can't create tensor for input/output. session=${i}, index=${a}.`),t.push(b)}finally{n.stackRestore(y)}},Fa=async(e,t,r,i,a,s)=>{var ee,K;let n=Se(),u=n.PTR_SIZE,d=ht.get(e);if(!d)throw new Error(`cannot run inference. invalid session id: ${e}`);let p=d[0],f=d[1],m=d[2],l=d[3],y=d[4],_=d[5],b=t.length,v=i.length,x=0,w=[],S=[],k=[],I=[],E=n.stackSave(),C=n.stackAlloc(b*u),R=n.stackAlloc(b*u),N=n.stackAlloc(v*u),q=n.stackAlloc(v*u);try{(ee=n.jsepOnRunStart)==null||ee.call(n,p),[x,w]=$d(s);for(let U=0;U<b;U++)ia(r[U],S,I,e,t[U],y);for(let U=0;U<v;U++)ia(a[U],k,I,e,b+i[U],y);for(let U=0;U<b;U++)n.setValue(C+U*u,S[U],"*"),n.setValue(R+U*u,f[t[U]],"*");for(let U=0;U<v;U++)n.setValue(N+U*u,k[U],"*"),n.setValue(q+U*u,m[i[U]],"*");if(l&&!_){let{handle:U,outputPreferredLocations:X,outputPreferredLocationsEncoded:se}=l;if(f.length!==b)throw new Error(`input count from feeds (${b}) is expected to be always equal to model's input count (${f.length}).`);for(let Y=0;Y<b;Y++){let te=t[Y];await n._OrtBindInput(U,f[te],S[Y])!==0&&pe(`Can't bind input[${Y}] for session=${e}.`)}for(let Y=0;Y<v;Y++){let te=i[Y];(K=a[Y])!=null&&K[3]?n._OrtBindOutput(U,m[te],k[Y],0)!==0&&pe(`Can't bind pre-allocated output[${Y}] for session=${e}.`):n._OrtBindOutput(U,m[te],0,se[te])!==0&&pe(`Can't bind output[${Y}] to ${X[Y]} for session=${e}.`)}ht.set(e,[p,f,m,l,y,!0])}let H;l?H=await n._OrtRunWithBinding(p,l.handle,v,N,x):H=await n._OrtRun(p,R,C,b,q,v,N,x),H!==0&&pe("failed to call OrtRun().");let ie=[];for(let U=0;U<v;U++){let X=Number(n.getValue(N+U*u,"*"));if(X===k[U]){ie.push(a[U]);continue}let se=n.stackSave(),Y=n.stackAlloc(4*u),te=!1,le,M=0;try{n._OrtGetTensorData(X,Y,Y+u,Y+2*u,Y+3*u)!==0&&pe(`Can't access output tensor data on index ${U}.`);let L=u===4?"i32":"i64",oe=Number(n.getValue(Y,L));M=n.getValue(Y+u,"*");let be=n.getValue(Y+u*2,"*"),ve=Number(n.getValue(Y+u*3,L)),Me=[];for(let me=0;me<ve;me++)Me.push(Number(n.getValue(be+me*u,L)));n._OrtFree(be)!==0&&pe("Can't free memory for tensor dims.");let je=Me.reduce((me,ke)=>me*ke,1);le=St(oe);let Ne=l==null?void 0:l.outputPreferredLocations[i[U]];if(le==="string"){if(Ne==="gpu-buffer"||Ne==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let me=[];for(let ke=0;ke<je;ke++){let tt=n.getValue(M+ke*u,"*"),qr=n.getValue(M+(ke+1)*u,"*"),gt=ke===je-1?void 0:qr-tt;me.push(n.UTF8ToString(tt,gt))}ie.push([le,Me,me,"cpu"])}else if(Ne==="gpu-buffer"&&je>0){let me=n.jsepGetBuffer;if(!me)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ke=me(M),tt=Mt(oe,je);if(tt===void 0||!Ia(le))throw new Error(`Unsupported data type: ${le}`);te=!0,ie.push([le,Me,{gpuBuffer:ke,download:n.jsepCreateDownloader(ke,tt,le),dispose:()=>{n._OrtReleaseTensor(X)!==0&&pe("Can't release tensor.")}},"gpu-buffer"])}else if(Ne==="ml-tensor"&&je>0){let me=n.jsepEnsureTensor;if(!me)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Mt(oe,je)===void 0||!Ea(le))throw new Error(`Unsupported data type: ${le}`);let ke=await me(M,oe,Me,!1);te=!0,ie.push([le,Me,{mlTensor:ke,download:n.jsepCreateMLTensorDownloader(M,le),dispose:()=>{n.jsepReleaseTensorId(M),n._OrtReleaseTensor(X)}},"ml-tensor"])}else{let me=Ta(le),ke=new me(je);new Uint8Array(ke.buffer,ke.byteOffset,ke.byteLength).set(n.HEAPU8.subarray(M,M+ke.byteLength)),ie.push([le,Me,ke,"cpu"])}}finally{n.stackRestore(se),le==="string"&&M&&n._free(M),te||n._OrtReleaseTensor(X)}}return l&&!y&&(n._OrtClearBoundOutputs(l.handle)!==0&&pe("Can't clear bound outputs."),ht.set(e,[p,f,m,l,y,!1])),ie}finally{n.stackRestore(E),S.forEach(H=>n._OrtReleaseTensor(H)),k.forEach(H=>n._OrtReleaseTensor(H)),I.forEach(H=>n._free(H)),x!==0&&n._OrtReleaseRunOptions(x),w.forEach(H=>n._free(H))}},ja=e=>{let t=Se(),r=ht.get(e);if(!r)throw new Error("invalid session id");let i=r[0],a=t._OrtEndProfiling(i);a===0&&pe("Can't get an profile file name."),t._OrtFree(a)},Ka=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),ct,Ae,Bt,Qt,Yt,Cr,aa,zr,vt,xt,Gl,_c,bc,$c,wc,vc,xc,kc,Sc=P(()=>{Fe(),yc(),Ct(),xa(),ct=()=>!!ge.wasm.proxy&&typeof document<"u",Bt=!1,Qt=!1,Yt=!1,zr=new Map,vt=(e,t)=>{let r=zr.get(e);r?r.push(t):zr.set(e,[t])},xt=()=>{if(Bt||!Qt||Yt||!Ae)throw new Error("worker not ready")},Gl=e=>{switch(e.data.type){case"init-wasm":Bt=!1,e.data.err?(Yt=!0,aa[1](e.data.err)):(Qt=!0,aa[0]()),Cr&&(URL.revokeObjectURL(Cr),Cr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=zr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},_c=async()=>{if(!Qt){if(Bt)throw new Error("multiple calls to 'initWasm()' detected.");if(Yt)throw new Error("previous call to 'initWasm()' failed.");if(Bt=!0,ct())return new Promise((e,t)=>{Ae==null||Ae.terminate(),_d().then(([r,i])=>{var a;try{Ae=i,Ae.onerror=n=>t(n),Ae.onmessage=Gl,aa=[e,t];let s={type:"init-wasm",in:ge};!s.in.wasm.wasmPaths&&(r||(a=import.meta.url)!=null&&a.startsWith("file:"))&&(s.in.wasm.wasmPaths={wasm:new URL(""+new URL("../assets/ort-wasm-simd-threaded.jsep.d7de0972.wasm",import.meta.url).href,self.location).href}),Ae.postMessage(s),Cr=r}catch(s){t(s)}},t)});try{await ka(ge.wasm),await La(ge),Qt=!0}catch(e){throw Yt=!0,e}finally{Bt=!1}}},bc=async e=>{if(ct())return xt(),new Promise((t,r)=>{vt("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:ge}};Ae.postMessage(i)});await Va(ge,e)},$c=async e=>ct()?(xt(),new Promise((t,r)=>{vt("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};Ae.postMessage(i,[e.buffer])})):Wr(e),wc=async(e,t)=>{if(ct()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return xt(),new Promise((r,i)=>{vt("create",[r,i]);let a={type:"create",in:{model:e,options:{...t}}},s=[];e instanceof Uint8Array&&s.push(e.buffer),Ae.postMessage(a,s)})}else return Ha(e,t)},vc=async e=>{if(ct())return xt(),new Promise((t,r)=>{vt("release",[t,r]);let i={type:"release",in:e};Ae.postMessage(i)});Ga(e)},xc=async(e,t,r,i,a,s)=>{if(ct()){if(r.some(n=>n[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(a.some(n=>n))throw new Error("pre-allocated output tensor is not supported for proxy.");return xt(),new Promise((n,u)=>{vt("run",[n,u]);let d=r,p={type:"run",in:{sessionId:e,inputIndices:t,inputs:d,outputIndices:i,options:s}};Ae.postMessage(p,Ka(d))})}else return Fa(e,t,r,i,a,s)},kc=async e=>{if(ct())return xt(),new Promise((t,r)=>{vt("end-profiling",[t,r]);let i={type:"end-profiling",in:e};Ae.postMessage(i)});ja(e)}}),na,Fl,Tc,hg=P(()=>{Fe(),Sc(),J(),va(),vd(),na=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Fl=e=>{switch(e[3]){case"cpu":return new Je(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Ia(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:a}=e[2];return Je.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:a})}case"ml-tensor":{let t=e[0];if(!Ea(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:a}=e[2];return Je.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:a})}default:throw new Error(`invalid data location: ${e[3]}`)}},Tc=class{async fetchModelAndCopyToWasmMemory(e){return $c(await Ca(e))}async loadModel(e,t){et();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames]=await wc(r,t),Ge()}async dispose(){return vc(this.sessionId)}async run(e,t,r){et();let i=[],a=[];Object.entries(e).forEach(m=>{let l=m[0],y=m[1],_=this.inputNames.indexOf(l);if(_===-1)throw new Error(`invalid input '${l}'`);i.push(y),a.push(_)});let s=[],n=[];Object.entries(t).forEach(m=>{let l=m[0],y=m[1],_=this.outputNames.indexOf(l);if(_===-1)throw new Error(`invalid output '${l}'`);s.push(y),n.push(_)});let u=i.map((m,l)=>na(m,()=>`input "${this.inputNames[a[l]]}"`)),d=s.map((m,l)=>m?na(m,()=>`output "${this.outputNames[n[l]]}"`):null),p=await xc(this.sessionId,a,u,n,d,r),f={};for(let m=0;m<p.length;m++)f[this.outputNames[n[m]]]=s[m]??Fl(p[m]);return Ge(),f}startProfiling(){}endProfiling(){kc(this.sessionId)}}}),Ic={};ar(Ic,{OnnxruntimeWebAssemblyBackend:()=>ba,initializeFlags:()=>_a,wasmBackend:()=>Ec});var _a,ba,Ec,cg=P(()=>{Fe(),Sc(),hg(),_a=()=>{if((typeof ge.wasm.initTimeout!="number"||ge.wasm.initTimeout<0)&&(ge.wasm.initTimeout=0),ge.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof ge.wasm.proxy!="boolean"&&(ge.wasm.proxy=!1),typeof ge.wasm.trace!="boolean"&&(ge.wasm.trace=!1),typeof ge.wasm.numThreads!="number"||!Number.isInteger(ge.wasm.numThreads)||ge.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)ge.wasm.numThreads=1;else{let e=typeof navigator>"u"?Xf("node:os").cpus().length:navigator.hardwareConcurrency;ge.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},ba=class{async init(e){_a(),await _c(),await bc(e)}async createInferenceSessionHandler(e,t){let r=new Tc;return await r.loadModel(e,t),Promise.resolve(r)}},Ec=new ba});Fe();Fe();Fe();var fg="1.21.0-dev.20250206-d981b153d3",gg=hd;{let e=(cg(),Rr(Ic)).wasmBackend;Dt("webgpu",e,5),Dt("webnn",e,5),Dt("cpu",e,10),Dt("wasm",e,10)}Object.defineProperty(ge.versions,"web",{value:fg,enumerable:!0});/**
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
 */export{pd as InferenceSession,Br as TRACE,et as TRACE_FUNC_BEGIN,Ge as TRACE_FUNC_END,Je as Tensor,gg as default,ge as env,Dt as registerBackend};
