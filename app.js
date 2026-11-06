(()=>{var Dt=(s,e,t)=>()=>{if(t)throw t[0];try{return s&&(e=s(s=0)),e}catch(n){throw t=[n],n}};var Tf=(s,e)=>()=>{try{return e||s((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};function Yn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[s&255]+Qt[s>>8&255]+Qt[s>>16&255]+Qt[s>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function kt(s,e,t){return Math.max(e,Math.min(t,s))}function O0(s,e){return(s%e+e)%e}function rp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function ap(s,e,t){return s!==e?(t-s)/(e-s):0}function Vr(s,e,t){return(1-t)*s+t*e}function op(s,e,t,n){return Vr(s,e,1-Math.exp(-t*n))}function cp(s,e=1){return e-Math.abs(O0(s,e*2)-e)}function lp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function hp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function up(s,e){return s+Math.floor(Math.random()*(e-s+1))}function dp(s,e){return s+Math.random()*(e-s)}function fp(s){return s*(.5-Math.random())}function pp(s){s!==void 0&&(zh=s);let e=zh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mp(s){return s*Hr}function gp(s){return s*sr}function bp(s){return(s&s-1)===0&&s!==0}function _p(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function xp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function vp(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,c*u,c*d,o*l);break;case"YZY":s.set(c*d,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*d,o*h,o*l);break;case"XZX":s.set(o*h,c*g,c*p,o*l);break;case"YXY":s.set(c*p,o*h,c*g,o*l);break;case"ZYZ":s.set(c*g,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function qn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function _t(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}function pd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Yr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function yp(){let s=Yr("canvas");return s.style.display="block",s}function kr(s){s in Hh||(Hh[s]=!0,console.warn(s))}function Mp(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Sp(s){let e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ep(s){let e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}function _i(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}function gc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ul.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function _c(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){rs.fromArray(s,r);let o=i.x*Math.abs(rs.x)+i.y*Math.abs(rs.y)+i.z*Math.abs(rs.z),c=e.dot(rs),l=t.dot(rs),h=n.dot(rs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}function Ic(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function Op(s,e,t,n,i,r,a,o){let c;if(e.side===en?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===En,o),c===null)return null;Oa.copy(o),Oa.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Oa);return l<t.near||l>t.far?null:{distance:l,point:Oa.clone(),object:s}}function Fa(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,Da),s.getVertexPosition(c,La),s.getVertexPosition(l,Ua);let h=Op(s,e,t,n,Da,La,Ua,su);if(h){let u=new T;ki.getBarycoord(su,Da,La,Ua,u),i&&(h.uv=ki.getInterpolatedAttribute(i,o,c,l,u,new ae)),r&&(h.uv1=ki.getInterpolatedAttribute(r,o,c,l,u,new ae)),a&&(h.normal=ki.getInterpolatedAttribute(a,o,c,l,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new T,materialIndex:0};ki.getNormal(Da,La,Ua,d.normal),h.face=d,h.barycoord=u}return h}function rr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function an(s){let e={};for(let t=0;t<s.length;t++){let n=rr(s[t]);for(let i in n)e[i]=n[i]}return e}function Fp(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function gd(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}function bd(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Vp(s){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],b=u[p];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++d,u[d]=b)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let b=u[p];s.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}function S1(s,e,t,n,i,r,a){let o=new ye(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function b(y){let v=!1,_=g(y);_===null?f(o,c):_&&_.isColor&&(f(_,1),v=!0);let I=s.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,v){let _=g(v);_&&(_.isCubeTexture||_.mapping===Bo)?(h===void 0&&(h=new Lt(new fs(1,1,1),new yt({name:"BackgroundCubeMaterial",uniforms:rr(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),cs.copy(v.backgroundRotation),cs.x*=-1,cs.y*=-1,cs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(M1.makeRotationFromEuler(cs)),h.material.toneMapped=it.getTransfer(_.colorSpace)!==gt,(u!==_||d!==_.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,p=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Lt(new si(2,2),new yt({name:"BackgroundMaterial",uniforms:rr(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=it.getTransfer(_.colorSpace)!==gt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,p=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function f(y,v){y.getRGB(Ba,gd(s)),n.buffers.color.setClear(Ba.r,Ba.g,Ba.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),c=v,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,f(o,c)},render:b,addToRenderList:m}}function E1(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(M,P,z,V,X){let te=!1,q=u(V,z,P);r!==q&&(r=q,l(r.object)),te=p(M,V,z,X),te&&g(M,V,z,X),X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,_(M,P,z,V),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,P,z){let V=z.wireframe===!0,X=n[M.id];X===void 0&&(X={},n[M.id]=X);let te=X[P.id];te===void 0&&(te={},X[P.id]=te);let q=te[V];return q===void 0&&(q=d(c()),te[V]=q),q}function d(M){let P=[],z=[],V=[];for(let X=0;X<t;X++)P[X]=0,z[X]=0,V[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:V,object:M,attributes:{},index:null}}function p(M,P,z,V){let X=r.attributes,te=P.attributes,q=0,ie=z.getAttributes();for(let W in ie)if(ie[W].location>=0){let he=X[W],ve=te[W];if(ve===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor)),he===void 0||he.attribute!==ve||ve&&he.data!==ve.data)return!0;q++}return r.attributesNum!==q||r.index!==V}function g(M,P,z,V){let X={},te=P.attributes,q=0,ie=z.getAttributes();for(let W in ie)if(ie[W].location>=0){let he=te[W];he===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(he=M.instanceColor));let ve={};ve.attribute=he,he&&he.data&&(ve.data=he.data),X[W]=ve,q++}r.attributes=X,r.attributesNum=q,r.index=V}function b(){let M=r.newAttributes;for(let P=0,z=M.length;P<z;P++)M[P]=0}function m(M){f(M,0)}function f(M,P){let z=r.newAttributes,V=r.enabledAttributes,X=r.attributeDivisors;z[M]=1,V[M]===0&&(s.enableVertexAttribArray(M),V[M]=1),X[M]!==P&&(s.vertexAttribDivisor(M,P),X[M]=P)}function y(){let M=r.newAttributes,P=r.enabledAttributes;for(let z=0,V=P.length;z<V;z++)P[z]!==M[z]&&(s.disableVertexAttribArray(z),P[z]=0)}function v(M,P,z,V,X,te,q){q===!0?s.vertexAttribIPointer(M,P,z,X,te):s.vertexAttribPointer(M,P,z,V,X,te)}function _(M,P,z,V){b();let X=V.attributes,te=z.getAttributes(),q=P.defaultAttributeValues;for(let ie in te){let W=te[ie];if(W.location>=0){let re=X[ie];if(re===void 0&&(ie==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),ie==="instanceColor"&&M.instanceColor&&(re=M.instanceColor)),re!==void 0){let he=re.normalized,ve=re.itemSize,Ge=e.get(re);if(Ge===void 0)continue;let tt=Ge.buffer,K=Ge.type,ce=Ge.bytesPerElement,Te=K===s.INT||K===s.UNSIGNED_INT||re.gpuType===w0;if(re.isInterleavedBufferAttribute){let ue=re.data,Ee=ue.stride,Oe=re.offset;if(ue.isInstancedInterleavedBuffer){for(let He=0;He<W.locationSize;He++)f(W.location+He,ue.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let He=0;He<W.locationSize;He++)m(W.location+He);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let He=0;He<W.locationSize;He++)v(W.location+He,ve/W.locationSize,K,he,Ee*ce,(Oe+ve/W.locationSize*He)*ce,Te)}else{if(re.isInstancedBufferAttribute){for(let ue=0;ue<W.locationSize;ue++)f(W.location+ue,re.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ue=0;ue<W.locationSize;ue++)m(W.location+ue);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let ue=0;ue<W.locationSize;ue++)v(W.location+ue,ve/W.locationSize,K,he,ve*ce,ve/W.locationSize*ue*ce,Te)}}else if(q!==void 0){let he=q[ie];if(he!==void 0)switch(he.length){case 2:s.vertexAttrib2fv(W.location,he);break;case 3:s.vertexAttrib3fv(W.location,he);break;case 4:s.vertexAttrib4fv(W.location,he);break;default:s.vertexAttrib1fv(W.location,he)}}}}y()}function I(){D();for(let M in n){let P=n[M];for(let z in P){let V=P[z];for(let X in V)h(V[X].object),delete V[X];delete P[z]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;let P=n[M.id];for(let z in P){let V=P[z];for(let X in V)h(V[X].object),delete V[X];delete P[z]}delete n[M.id]}function C(M){for(let P in n){let z=n[P];if(z[M.id]===void 0)continue;let V=z[M.id];for(let X in V)h(V[X].object),delete V[X];delete z[M.id]}}function D(){E(),a=!0,r!==i&&(r=i,l(r.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:E,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:b,enableAttribute:m,disableUnusedAttributes:y}}function T1(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function c(l,h,u,d){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let b=0;b<u;b++)g+=h[b]*d[b];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function w1(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==gn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let D=C===_n&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Kn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==jn&&!D)}function c(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:I,maxSamples:A}}function A1(s){let e=this,t=null,n=0,i=!1,r=!1,a=new Xn,o=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,b=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{let y=r?0:n,v=y*4,_=f.clippingState||null;c.value=_,_=h(g,d,v,p);for(let I=0;I!==v;++I)_[I]=t[I];f.clippingState=_,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){let b=u!==null?u.length:0,m=null;if(b!==0){if(m=c.value,g!==!0||m===null){let f=p+b*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,_=p;v!==b;++v,_+=4)a.copy(u[v]).applyMatrix4(y,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function R1(s){let e=new WeakMap;function t(a,o){return o===rl?a.mapping=er:o===al&&(a.mapping=tr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===rl||o===al)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new kl(c.height);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}function C1(s){let e=[],t=[],n=[],i=s,r=s-Ys+1+ou.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let c=1/o;a>s-Ys?c=ou[a-s+Ys-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,b=3,m=2,f=1,y=new Float32Array(b*g*p),v=new Float32Array(m*g*p),_=new Float32Array(f*g*p);for(let A=0;A<p;A++){let C=A%3*2/3-1,D=A>2?0:-1,E=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];y.set(E,b*g*A),v.set(d,m*g*A);let M=[A,A,A,A,A,A];_.set(M,f*g*A)}let I=new wt;I.setAttribute("position",new Rt(y,b)),I.setAttribute("uv",new Rt(v,m)),I.setAttribute("faceIndex",new Rt(_,f)),e.push(I),i>Ys&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function hu(s,e,t){let n=new Kt(s,e,t);return n.texture.mapping=Bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function za(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function P1(s,e,t){let n=new Float32Array(us),i=new T(0,1,0);return new yt({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:F0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zt,depthTest:!1,depthWrite:!1})}function uu(){return new yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:F0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zt,depthTest:!1,depthWrite:!1})}function du(){return new yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:F0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zt,depthTest:!1,depthWrite:!1})}function F0(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function I1(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===rl||c===al,h=c===er||c===tr;if(l||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new fo(s)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return l&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new fo(s)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function D1(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&kr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function L1(s,e,t,n){let i={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let b=d.morphAttributes[g];for(let m=0,f=b.length;m<f;m++)e.remove(b[m])}d.removeEventListener("dispose",a),delete i[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)e.update(d[g],s.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let b=p[g];for(let m=0,f=b.length;m<f;m++)e.update(b[m],s.ARRAY_BUFFER)}}function l(u){let d=[],p=u.index,g=u.attributes.position,b=0;if(p!==null){let y=p.array;b=p.version;for(let v=0,_=y.length;v<_;v+=3){let I=y[v+0],A=y[v+1],C=y[v+2];d.push(I,A,A,C,C,I)}}else if(g!==void 0){let y=g.array;b=g.version;for(let v=0,_=y.length/3-1;v<_;v+=3){let I=v+0,A=v+1,C=v+2;d.push(I,A,A,C,C,I)}}else return;let m=new(pd(d)?lo:co)(d,1);m.version=b;let f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function U1(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,p){s.drawElements(n,p,r,d*a),t.update(p,n,1)}function l(d,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,d*a,g),t.update(p,n,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function u(d,p,g,b){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/a,p[f],b[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,b,0,g);let f=0;for(let y=0;y<g;y++)f+=p[y]*b[y];t.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function N1(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function O1(s,e,t){let n=new WeakMap,i=new ht;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let E=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],v=0;p===!0&&(v=1),g===!0&&(v=2),b===!0&&(v=3);let _=o.attributes.position.count*v,I=1;_>e.maxTextureSize&&(I=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let A=new Float32Array(_*I*4*u),C=new oo(A,_,I,u);C.type=jn,C.needsUpdate=!0;let D=v*4;for(let M=0;M<u;M++){let P=m[M],z=f[M],V=y[M],X=_*I*4*M;for(let te=0;te<P.count;te++){let q=te*D;p===!0&&(i.fromBufferAttribute(P,te),A[X+q+0]=i.x,A[X+q+1]=i.y,A[X+q+2]=i.z,A[X+q+3]=0),g===!0&&(i.fromBufferAttribute(z,te),A[X+q+4]=i.x,A[X+q+5]=i.y,A[X+q+6]=i.z,A[X+q+7]=0),b===!0&&(i.fromBufferAttribute(V,te),A[X+q+8]=i.x,A[X+q+9]=i.y,A[X+q+10]=i.z,A[X+q+11]=V.itemSize===4?i.w:1)}}d={count:u,texture:C,size:new ae(_,I)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let p=0;for(let b=0;b<l.length;b++)p+=l[b];let g=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function F1(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}function br(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=pu[i];if(r===void 0&&(r=new Float32Array(i),pu[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Vt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Gt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Go(s,e){let t=mu[e];t===void 0&&(t=new Int32Array(e),mu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function k1(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function B1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;s.uniform2fv(this.addr,e),Gt(t,e)}}function z1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;s.uniform3fv(this.addr,e),Gt(t,e)}}function H1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;s.uniform4fv(this.addr,e),Gt(t,e)}}function V1(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;_u.set(n),s.uniformMatrix2fv(this.addr,!1,_u),Gt(t,n)}}function G1(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;bu.set(n),s.uniformMatrix3fv(this.addr,!1,bu),Gt(t,n)}}function W1(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;gu.set(n),s.uniformMatrix4fv(this.addr,!1,gu),Gt(t,n)}}function X1(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function q1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;s.uniform2iv(this.addr,e),Gt(t,e)}}function j1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;s.uniform3iv(this.addr,e),Gt(t,e)}}function Y1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;s.uniform4iv(this.addr,e),Gt(t,e)}}function K1(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Z1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;s.uniform2uiv(this.addr,e),Gt(t,e)}}function J1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;s.uniform3uiv(this.addr,e),Gt(t,e)}}function Q1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;s.uniform4uiv(this.addr,e),Gt(t,e)}}function $1(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(fu.compareFunction=fd,r=fu):r=_d,t.setTexture2D(e||r,i)}function eb(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||vd,i)}function tb(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||yd,i)}function nb(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||xd,i)}function ib(s){switch(s){case 5126:return k1;case 35664:return B1;case 35665:return z1;case 35666:return H1;case 35674:return V1;case 35675:return G1;case 35676:return W1;case 5124:case 35670:return X1;case 35667:case 35671:return q1;case 35668:case 35672:return j1;case 35669:case 35673:return Y1;case 5125:return K1;case 36294:return Z1;case 36295:return J1;case 36296:return Q1;case 35678:case 36198:case 36298:case 36306:case 35682:return $1;case 35679:case 36299:case 36307:return eb;case 35680:case 36300:case 36308:case 36293:return tb;case 36289:case 36303:case 36311:case 36292:return nb}}function sb(s,e){s.uniform1fv(this.addr,e)}function rb(s,e){let t=br(e,this.size,2);s.uniform2fv(this.addr,t)}function ab(s,e){let t=br(e,this.size,3);s.uniform3fv(this.addr,t)}function ob(s,e){let t=br(e,this.size,4);s.uniform4fv(this.addr,t)}function cb(s,e){let t=br(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function lb(s,e){let t=br(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function hb(s,e){let t=br(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function ub(s,e){s.uniform1iv(this.addr,e)}function db(s,e){s.uniform2iv(this.addr,e)}function fb(s,e){s.uniform3iv(this.addr,e)}function pb(s,e){s.uniform4iv(this.addr,e)}function mb(s,e){s.uniform1uiv(this.addr,e)}function gb(s,e){s.uniform2uiv(this.addr,e)}function bb(s,e){s.uniform3uiv(this.addr,e)}function _b(s,e){s.uniform4uiv(this.addr,e)}function xb(s,e,t){let n=this.cache,i=e.length,r=Go(t,i);Vt(n,r)||(s.uniform1iv(this.addr,r),Gt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||_d,r[a])}function vb(s,e,t){let n=this.cache,i=e.length,r=Go(t,i);Vt(n,r)||(s.uniform1iv(this.addr,r),Gt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||vd,r[a])}function yb(s,e,t){let n=this.cache,i=e.length,r=Go(t,i);Vt(n,r)||(s.uniform1iv(this.addr,r),Gt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||yd,r[a])}function Mb(s,e,t){let n=this.cache,i=e.length,r=Go(t,i);Vt(n,r)||(s.uniform1iv(this.addr,r),Gt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||xd,r[a])}function Sb(s){switch(s){case 5126:return sb;case 35664:return rb;case 35665:return ab;case 35666:return ob;case 35674:return cb;case 35675:return lb;case 35676:return hb;case 5124:case 35670:return ub;case 35667:case 35671:return db;case 35668:case 35672:return fb;case 35669:case 35673:return pb;case 5125:return mb;case 36294:return gb;case 36295:return bb;case 36296:return _b;case 35678:case 36198:case 36298:case 36306:case 35682:return xb;case 35679:case 36299:case 36307:return vb;case 35680:case 36300:case 36308:case 36293:return yb;case 36289:case 36303:case 36311:case 36292:return Mb}}function xu(s,e){s.seq.push(e),s.map[e.id]=e}function Eb(s,e,t){let n=s.name,i=n.length;for(zc.lastIndex=0;;){let r=zc.exec(n),a=zc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){xu(t,l===void 0?new Bl(o,s,e):new zl(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Hl(o),xu(t,u)),t=u}}}function vu(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}function Ab(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Rb(s){it._getMatrix(yu,it.workingColorSpace,s);let e=`mat3( ${yu.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(s)){case Ho:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Mu(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Ab(s.getShaderSource(e),a)}else return i}function Cb(s,e){let t=Rb(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Pb(s,e){let t;switch(e){case v0:t="Linear";break;case y0:t="Reinhard";break;case M0:t="Cineon";break;case oa:t="ACESFilmic";break;case S0:t="AgX";break;case E0:t="Neutral";break;case Wf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ib(){it.getLuminanceCoefficients(Ha);let s=Ha.x.toFixed(4),e=Ha.y.toFixed(4),t=Ha.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Db(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Br).join(`
`)}function Lb(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ub(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Br(s){return s!==""}function Su(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Eu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Vl(s){return s.replace(Nb,Fb)}function Fb(s,e){let t=et[e];if(t===void 0){let n=Ob.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Vl(t)}function Tu(s){return s.replace(kb,Bb)}function Bb(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function wu(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zb(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Oo?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===_0?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function Hb(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case er:case tr:e="ENVMAP_TYPE_CUBE";break;case Bo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vb(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===tr&&(e="ENVMAP_MODE_REFRACTION"),e}function Gb(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case td:e="ENVMAP_BLENDING_MULTIPLY";break;case Vf:e="ENVMAP_BLENDING_MIX";break;case Gf:e="ENVMAP_BLENDING_ADD";break}return e}function Wb(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Xb(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=zb(t),l=Hb(t),h=Vb(t),u=Gb(t),d=Wb(t),p=Db(t),g=Lb(r),b=i.createProgram(),m,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Br).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Br).join(`
`),f.length>0&&(f+=`
`)):(m=[wu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),f=[wu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zi?"#define TONE_MAPPING":"",t.toneMapping!==zi?et.tonemapping_pars_fragment:"",t.toneMapping!==zi?Pb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,Cb("linearToOutputTexel",t.outputColorSpace),Ib(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Br).join(`
`)),a=Vl(a),a=Su(a,t),a=Eu(a,t),o=Vl(o),o=Su(o,t),o=Eu(o,t),a=Tu(a),o=Tu(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let v=y+m+a,_=y+f+o,I=vu(i,i.VERTEX_SHADER,v),A=vu(i,i.FRAGMENT_SHADER,_);i.attachShader(b,I),i.attachShader(b,A),t.index0AttributeName!==void 0?i.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function C(P){if(s.debug.checkShaderErrors){let z=i.getProgramInfoLog(b).trim(),V=i.getShaderInfoLog(I).trim(),X=i.getShaderInfoLog(A).trim(),te=!0,q=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(te=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,b,I,A);else{let ie=Mu(i,I,"vertex"),W=Mu(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+ie+`
`+W)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(V===""||X==="")&&(q=!1);q&&(P.diagnostics={runnable:te,programLog:z,vertexShader:{log:V,prefix:m},fragmentShader:{log:X,prefix:f}})}i.deleteShader(I),i.deleteShader(A),D=new Qs(i,b),E=Ub(i,b)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(b,Tb)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wb++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=I,this.fragmentShader=A,this}function jb(s,e,t,n,i,r,a){let o=new Kr,c=new Gl,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,M,P,z,V){let X=z.fog,te=V.geometry,q=E.isMeshStandardMaterial?z.environment:null,ie=(E.isMeshStandardMaterial?t:e).get(E.envMap||q),W=ie&&ie.mapping===Bo?ie.image.height:null,re=g[E.type];E.precision!==null&&(p=i.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let he=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,ve=he!==void 0?he.length:0,Ge=0;te.morphAttributes.position!==void 0&&(Ge=1),te.morphAttributes.normal!==void 0&&(Ge=2),te.morphAttributes.color!==void 0&&(Ge=3);let tt,K,ce,Te;if(re){let lt=ti[re];tt=lt.vertexShader,K=lt.fragmentShader}else tt=E.vertexShader,K=E.fragmentShader,c.update(E),ce=c.getVertexShaderID(E),Te=c.getFragmentShaderID(E);let ue=s.getRenderTarget(),Ee=s.state.buffers.depth.getReversed(),Oe=V.isInstancedMesh===!0,He=V.isBatchedMesh===!0,ut=!!E.map,Xe=!!E.matcap,dt=!!ie,F=!!E.aoMap,Nt=!!E.lightMap,je=!!E.bumpMap,Ze=!!E.normalMap,Le=!!E.displacementMap,at=!!E.emissiveMap,Ue=!!E.metalnessMap,R=!!E.roughnessMap,S=E.anisotropy>0,H=E.clearcoat>0,Z=E.dispersion>0,ee=E.iridescence>0,j=E.sheen>0,Ce=E.transmission>0,fe=S&&!!E.anisotropyMap,xe=H&&!!E.clearcoatMap,Je=H&&!!E.clearcoatNormalMap,se=H&&!!E.clearcoatRoughnessMap,Me=ee&&!!E.iridescenceMap,Fe=ee&&!!E.iridescenceThicknessMap,ze=j&&!!E.sheenColorMap,Se=j&&!!E.sheenRoughnessMap,nt=!!E.specularMap,ke=!!E.specularColorMap,ot=!!E.specularIntensityMap,N=Ce&&!!E.transmissionMap,pe=Ce&&!!E.thicknessMap,G=!!E.gradientMap,Q=!!E.alphaMap,me=E.alphaTest>0,ge=!!E.alphaHash,We=!!E.extensions,Mt=zi;E.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Mt=s.toneMapping);let It={shaderID:re,shaderType:E.type,shaderName:E.name,vertexShader:tt,fragmentShader:K,defines:E.defines,customVertexShaderID:ce,customFragmentShaderID:Te,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:He,batchingColor:He&&V._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&V.instanceColor!==null,instancingMorph:Oe&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ue===null?s.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:tn,alphaToCoverage:!!E.alphaToCoverage,map:ut,matcap:Xe,envMap:dt,envMapMode:dt&&ie.mapping,envMapCubeUVHeight:W,aoMap:F,lightMap:Nt,bumpMap:je,normalMap:Ze,displacementMap:d&&Le,emissiveMap:at,normalMapObjectSpace:Ze&&E.normalMapType===Jf,normalMapTangentSpace:Ze&&E.normalMapType===N0,metalnessMap:Ue,roughnessMap:R,anisotropy:S,anisotropyMap:fe,clearcoat:H,clearcoatMap:xe,clearcoatNormalMap:Je,clearcoatRoughnessMap:se,dispersion:Z,iridescence:ee,iridescenceMap:Me,iridescenceThicknessMap:Fe,sheen:j,sheenColorMap:ze,sheenRoughnessMap:Se,specularMap:nt,specularColorMap:ke,specularIntensityMap:ot,transmission:Ce,transmissionMap:N,thicknessMap:pe,gradientMap:G,opaque:E.transparent===!1&&E.blending===Ks&&E.alphaToCoverage===!1,alphaMap:Q,alphaTest:me,alphaHash:ge,combine:E.combine,mapUv:ut&&b(E.map.channel),aoMapUv:F&&b(E.aoMap.channel),lightMapUv:Nt&&b(E.lightMap.channel),bumpMapUv:je&&b(E.bumpMap.channel),normalMapUv:Ze&&b(E.normalMap.channel),displacementMapUv:Le&&b(E.displacementMap.channel),emissiveMapUv:at&&b(E.emissiveMap.channel),metalnessMapUv:Ue&&b(E.metalnessMap.channel),roughnessMapUv:R&&b(E.roughnessMap.channel),anisotropyMapUv:fe&&b(E.anisotropyMap.channel),clearcoatMapUv:xe&&b(E.clearcoatMap.channel),clearcoatNormalMapUv:Je&&b(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&b(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&b(E.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&b(E.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&b(E.sheenColorMap.channel),sheenRoughnessMapUv:Se&&b(E.sheenRoughnessMap.channel),specularMapUv:nt&&b(E.specularMap.channel),specularColorMapUv:ke&&b(E.specularColorMap.channel),specularIntensityMapUv:ot&&b(E.specularIntensityMap.channel),transmissionMapUv:N&&b(E.transmissionMap.channel),thicknessMapUv:pe&&b(E.thicknessMap.channel),alphaMapUv:Q&&b(E.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Ze||S),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!te.attributes.uv&&(ut||Q),fog:!!X,useFog:E.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ee,skinning:V.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Ge,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Mt,decodeVideoTexture:ut&&E.map.isVideoTexture===!0&&it.getTransfer(E.map.colorSpace)===gt,decodeVideoTextureEmissive:at&&E.emissiveMap.isVideoTexture===!0&&it.getTransfer(E.emissiveMap.colorSpace)===gt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ut,flipSided:E.side===en,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:We&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&E.extensions.multiDraw===!0||He)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return It.vertexUv1s=l.has(1),It.vertexUv2s=l.has(2),It.vertexUv3s=l.has(3),l.clear(),It}function f(E){let M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(let P in E.defines)M.push(P),M.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(y(M,E),v(M,E),M.push(s.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function y(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function v(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function _(E){let M=g[E.type],P;if(M){let z=ti[M];P=xn.clone(z.uniforms)}else P=E.uniforms;return P}function I(E,M){let P;for(let z=0,V=h.length;z<V;z++){let X=h[z];if(X.cacheKey===M){P=X,++P.usedTimes;break}}return P===void 0&&(P=new Xb(s,M,E,r),h.push(P)),P}function A(E){if(--E.usedTimes===0){let M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function C(E){c.remove(E)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:I,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:D}}function Yb(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Kb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Au(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ru(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,p,g,b,m){let f=s[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:b,group:m},s[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=b,f.group=m),e++,f}function o(u,d,p,g,b,m){let f=a(u,d,p,g,b,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function c(u,d,p,g,b,m){let f=a(u,d,p,g,b,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||Kb),n.length>1&&n.sort(d||Au),i.length>1&&i.sort(d||Au)}function h(){for(let u=e,d=s.length;u<d;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function Zb(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new Ru,s.set(n,[a])):i>=r.length?(a=new Ru,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Jb(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new ye};break;case"SpotLight":t={position:new T,direction:new T,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new T,halfWidth:new T,halfHeight:new T};break}return s[e.id]=t,t}}}function Qb(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}function e_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function t_(s){let e=new Jb,t=Qb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new T);let i=new T,r=new Be,a=new Be;function o(l){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,g=0,b=0,m=0,f=0,y=0,v=0,_=0,I=0,A=0,C=0;l.sort(e_);for(let E=0,M=l.length;E<M;E++){let P=l[E],z=P.color,V=P.intensity,X=P.distance,te=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=z.r*V,u+=z.g*V,d+=z.b*V;else if(P.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],V);C++}else if(P.isDirectionalLight){let q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ie=P.shadow,W=t.get(P);W.shadowIntensity=ie.intensity,W.shadowBias=ie.bias,W.shadowNormalBias=ie.normalBias,W.shadowRadius=ie.radius,W.shadowMapSize=ie.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=te,n.directionalShadowMatrix[p]=P.shadow.matrix,y++}n.directional[p]=q,p++}else if(P.isSpotLight){let q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(z).multiplyScalar(V),q.distance=X,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[b]=q;let ie=P.shadow;if(P.map&&(n.spotLightMap[I]=P.map,I++,ie.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[b]=ie.matrix,P.castShadow){let W=t.get(P);W.shadowIntensity=ie.intensity,W.shadowBias=ie.bias,W.shadowNormalBias=ie.normalBias,W.shadowRadius=ie.radius,W.shadowMapSize=ie.mapSize,n.spotShadow[b]=W,n.spotShadowMap[b]=te,_++}b++}else if(P.isRectAreaLight){let q=e.get(P);q.color.copy(z).multiplyScalar(V),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=q,m++}else if(P.isPointLight){let q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){let ie=P.shadow,W=t.get(P);W.shadowIntensity=ie.intensity,W.shadowBias=ie.bias,W.shadowNormalBias=ie.normalBias,W.shadowRadius=ie.radius,W.shadowMapSize=ie.mapSize,W.shadowCameraNear=ie.camera.near,W.shadowCameraFar=ie.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=te,n.pointShadowMatrix[g]=P.shadow.matrix,v++}n.point[g]=q,g++}else if(P.isHemisphereLight){let q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(V),q.groundColor.copy(P.groundColor).multiplyScalar(V),n.hemi[f]=q,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let D=n.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==b||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==y||D.numPointShadows!==v||D.numSpotShadows!==_||D.numSpotMaps!==I||D.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=b,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+I-A,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,D.directionalLength=p,D.pointLength=g,D.spotLength=b,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=y,D.numPointShadows=v,D.numSpotShadows=_,D.numSpotMaps=I,D.numLightProbes=C,n.version=$b++)}function c(l,h){let u=0,d=0,p=0,g=0,b=0,m=h.matrixWorldInverse;for(let f=0,y=l.length;f<y;f++){let v=l[f];if(v.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),u++}else if(v.isSpotLight){let _=n.spot[p];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let _=n.hemi[b];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),b++}}}return{setup:o,setupView:c,state:n}}function Cu(s){let e=new t_(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function n_(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new Cu(s),e.set(i,[o])):r>=a.length?(o=new Cu(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function r_(s,e,t){let n=new Zr,i=new ae,r=new ae,a=new ht,o=new Xl({depthPacking:Zf}),c=new ql,l={},h=t.maxTextureSize,u={[En]:en,[en]:En,[Ut]:Ut},d=new yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:i_,fragmentShader:s_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new wt;g.setAttribute("position",new Rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Lt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oo;let f=this.type;this.render=function(A,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let E=s.getRenderTarget(),M=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),z=s.state;z.setBlending(zt),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let V=f!==mi&&this.type===mi,X=f===mi&&this.type!==mi;for(let te=0,q=A.length;te<q;te++){let ie=A[te],W=ie.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);let re=W.getFrameExtents();if(i.multiply(re),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/re.x),i.x=r.x*re.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/re.y),i.y=r.y*re.y,W.mapSize.y=r.y)),W.map===null||V===!0||X===!0){let ve=this.type!==mi?{minFilter:Ht,magFilter:Ht}:{};W.map!==null&&W.map.dispose(),W.map=new Kt(i.x,i.y,ve),W.map.texture.name=ie.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();let he=W.getViewportCount();for(let ve=0;ve<he;ve++){let Ge=W.getViewport(ve);a.set(r.x*Ge.x,r.y*Ge.y,r.x*Ge.z,r.y*Ge.w),z.viewport(a),W.updateMatrices(ie,ve),n=W.getFrustum(),_(C,D,W.camera,ie,this.type)}W.isPointLightShadow!==!0&&this.type===mi&&y(W,D),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(E,M,P)};function y(A,C){let D=e.update(b);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Kt(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(C,null,D,d,b,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(C,null,D,p,b,null)}function v(A,C,D,E){let M=null,P=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)M=P;else if(M=D.isPointLight===!0?c:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let z=M.uuid,V=C.uuid,X=l[z];X===void 0&&(X={},l[z]=X);let te=X[V];te===void 0&&(te=M.clone(),X[V]=te,C.addEventListener("dispose",I)),M=te}if(M.visible=C.visible,M.wireframe=C.wireframe,E===mi?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:u[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let z=s.properties.get(M);z.light=D}return M}function _(A,C,D,E,M){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===mi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);let V=e.update(A),X=A.material;if(Array.isArray(X)){let te=V.groups;for(let q=0,ie=te.length;q<ie;q++){let W=te[q],re=X[W.materialIndex];if(re&&re.visible){let he=v(A,re,E,M);A.onBeforeShadow(s,A,C,D,V,he,W),s.renderBufferDirect(D,null,V,he,A,W),A.onAfterShadow(s,A,C,D,V,he,W)}}}else if(X.visible){let te=v(A,X,E,M);A.onBeforeShadow(s,A,C,D,V,te,null),s.renderBufferDirect(D,null,V,te,A,null),A.onAfterShadow(s,A,C,D,V,te,null)}}let z=A.children;for(let V=0,X=z.length;V<X;V++)_(z[V],C,D,E,M)}function I(A){A.target.removeEventListener("dispose",I);for(let D in l){let E=l[D],M=A.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}function o_(s,e){function t(){let N=!1,pe=new ht,G=null,Q=new ht(0,0,0,0);return{setMask:function(me){G!==me&&!N&&(s.colorMask(me,me,me,me),G=me)},setLocked:function(me){N=me},setClear:function(me,ge,We,Mt,It){It===!0&&(me*=Mt,ge*=Mt,We*=Mt),pe.set(me,ge,We,Mt),Q.equals(pe)===!1&&(s.clearColor(me,ge,We,Mt),Q.copy(pe))},reset:function(){N=!1,G=null,Q.set(-1,0,0,0)}}}function n(){let N=!1,pe=!1,G=null,Q=null,me=null;return{setReversed:function(ge){if(pe!==ge){let We=e.get("EXT_clip_control");pe?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT);let Mt=me;me=null,this.setClear(Mt)}pe=ge},getReversed:function(){return pe},setTest:function(ge){ge?ue(s.DEPTH_TEST):Ee(s.DEPTH_TEST)},setMask:function(ge){G!==ge&&!N&&(s.depthMask(ge),G=ge)},setFunc:function(ge){if(pe&&(ge=a_[ge]),Q!==ge){switch(ge){case Qc:s.depthFunc(s.NEVER);break;case $c:s.depthFunc(s.ALWAYS);break;case el:s.depthFunc(s.LESS);break;case $s:s.depthFunc(s.LEQUAL);break;case tl:s.depthFunc(s.EQUAL);break;case nl:s.depthFunc(s.GEQUAL);break;case il:s.depthFunc(s.GREATER);break;case sl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Q=ge}},setLocked:function(ge){N=ge},setClear:function(ge){me!==ge&&(pe&&(ge=1-ge),s.clearDepth(ge),me=ge)},reset:function(){N=!1,G=null,Q=null,me=null,pe=!1}}}function i(){let N=!1,pe=null,G=null,Q=null,me=null,ge=null,We=null,Mt=null,It=null;return{setTest:function(lt){N||(lt?ue(s.STENCIL_TEST):Ee(s.STENCIL_TEST))},setMask:function(lt){pe!==lt&&!N&&(s.stencilMask(lt),pe=lt)},setFunc:function(lt,pn,zn){(G!==lt||Q!==pn||me!==zn)&&(s.stencilFunc(lt,pn,zn),G=lt,Q=pn,me=zn)},setOp:function(lt,pn,zn){(ge!==lt||We!==pn||Mt!==zn)&&(s.stencilOp(lt,pn,zn),ge=lt,We=pn,Mt=zn)},setLocked:function(lt){N=lt},setClear:function(lt){It!==lt&&(s.clearStencil(lt),It=lt)},reset:function(){N=!1,pe=null,G=null,Q=null,me=null,ge=null,We=null,Mt=null,It=null}}}let r=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,p=[],g=null,b=!1,m=null,f=null,y=null,v=null,_=null,I=null,A=null,C=new ye(0,0,0),D=0,E=!1,M=null,P=null,z=null,V=null,X=null,te=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,ie=0,W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(W)[1]),q=ie>=1):W.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),q=ie>=2);let re=null,he={},ve=s.getParameter(s.SCISSOR_BOX),Ge=s.getParameter(s.VIEWPORT),tt=new ht().fromArray(ve),K=new ht().fromArray(Ge);function ce(N,pe,G,Q){let me=new Uint8Array(4),ge=s.createTexture();s.bindTexture(N,ge),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let We=0;We<G;We++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(pe,0,s.RGBA,1,1,Q,0,s.RGBA,s.UNSIGNED_BYTE,me):s.texImage2D(pe+We,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,me);return ge}let Te={};Te[s.TEXTURE_2D]=ce(s.TEXTURE_2D,s.TEXTURE_2D,1),Te[s.TEXTURE_CUBE_MAP]=ce(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[s.TEXTURE_2D_ARRAY]=ce(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Te[s.TEXTURE_3D]=ce(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ue(s.DEPTH_TEST),a.setFunc($s),je(!1),Ze(Uh),ue(s.CULL_FACE),F(zt);function ue(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function Ee(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function Oe(N,pe){return u[N]!==pe?(s.bindFramebuffer(N,pe),u[N]=pe,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=pe),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=pe),!0):!1}function He(N,pe){let G=p,Q=!1;if(N){G=d.get(pe),G===void 0&&(G=[],d.set(pe,G));let me=N.textures;if(G.length!==me.length||G[0]!==s.COLOR_ATTACHMENT0){for(let ge=0,We=me.length;ge<We;ge++)G[ge]=s.COLOR_ATTACHMENT0+ge;G.length=me.length,Q=!0}}else G[0]!==s.BACK&&(G[0]=s.BACK,Q=!0);Q&&s.drawBuffers(G)}function ut(N){return g!==N?(s.useProgram(N),g=N,!0):!1}let Xe={[Cn]:s.FUNC_ADD,[Rf]:s.FUNC_SUBTRACT,[Cf]:s.FUNC_REVERSE_SUBTRACT};Xe[Pf]=s.MIN,Xe[If]=s.MAX;let dt={[gr]:s.ZERO,[Df]:s.ONE,[Lf]:s.SRC_COLOR,[Zc]:s.SRC_ALPHA,[Ff]:s.SRC_ALPHA_SATURATE,[ko]:s.DST_COLOR,[Fo]:s.DST_ALPHA,[Uf]:s.ONE_MINUS_SRC_COLOR,[Jc]:s.ONE_MINUS_SRC_ALPHA,[Of]:s.ONE_MINUS_DST_COLOR,[Nf]:s.ONE_MINUS_DST_ALPHA,[kf]:s.CONSTANT_COLOR,[Bf]:s.ONE_MINUS_CONSTANT_COLOR,[zf]:s.CONSTANT_ALPHA,[Hf]:s.ONE_MINUS_CONSTANT_ALPHA};function F(N,pe,G,Q,me,ge,We,Mt,It,lt){if(N===zt){b===!0&&(Ee(s.BLEND),b=!1);return}if(b===!1&&(ue(s.BLEND),b=!0),N!==x0){if(N!==m||lt!==E){if((f!==Cn||_!==Cn)&&(s.blendEquation(s.FUNC_ADD),f=Cn,_=Cn),lt)switch(N){case Ks:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Hi:s.blendFunc(s.ONE,s.ONE);break;case Nh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Oh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ks:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Hi:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Nh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Oh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,v=null,I=null,A=null,C.set(0,0,0),D=0,m=N,E=lt}return}me=me||pe,ge=ge||G,We=We||Q,(pe!==f||me!==_)&&(s.blendEquationSeparate(Xe[pe],Xe[me]),f=pe,_=me),(G!==y||Q!==v||ge!==I||We!==A)&&(s.blendFuncSeparate(dt[G],dt[Q],dt[ge],dt[We]),y=G,v=Q,I=ge,A=We),(Mt.equals(C)===!1||It!==D)&&(s.blendColor(Mt.r,Mt.g,Mt.b,It),C.copy(Mt),D=It),m=N,E=!1}function Nt(N,pe){N.side===Ut?Ee(s.CULL_FACE):ue(s.CULL_FACE);let G=N.side===en;pe&&(G=!G),je(G),N.blending===Ks&&N.transparent===!1?F(zt):F(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let Q=N.stencilWrite;o.setTest(Q),Q&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),at(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ue(s.SAMPLE_ALPHA_TO_COVERAGE):Ee(s.SAMPLE_ALPHA_TO_COVERAGE)}function je(N){M!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),M=N)}function Ze(N){N!==wf?(ue(s.CULL_FACE),N!==P&&(N===Uh?s.cullFace(s.BACK):N===Af?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ee(s.CULL_FACE),P=N}function Le(N){N!==z&&(q&&s.lineWidth(N),z=N)}function at(N,pe,G){N?(ue(s.POLYGON_OFFSET_FILL),(V!==pe||X!==G)&&(s.polygonOffset(pe,G),V=pe,X=G)):Ee(s.POLYGON_OFFSET_FILL)}function Ue(N){N?ue(s.SCISSOR_TEST):Ee(s.SCISSOR_TEST)}function R(N){N===void 0&&(N=s.TEXTURE0+te-1),re!==N&&(s.activeTexture(N),re=N)}function S(N,pe,G){G===void 0&&(re===null?G=s.TEXTURE0+te-1:G=re);let Q=he[G];Q===void 0&&(Q={type:void 0,texture:void 0},he[G]=Q),(Q.type!==N||Q.texture!==pe)&&(re!==G&&(s.activeTexture(G),re=G),s.bindTexture(N,pe||Te[N]),Q.type=N,Q.texture=pe)}function H(){let N=he[re];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Je(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Fe(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ze(N){tt.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),tt.copy(N))}function Se(N){K.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),K.copy(N))}function nt(N,pe){let G=l.get(pe);G===void 0&&(G=new WeakMap,l.set(pe,G));let Q=G.get(N);Q===void 0&&(Q=s.getUniformBlockIndex(pe,N.name),G.set(N,Q))}function ke(N,pe){let Q=l.get(pe).get(N);c.get(pe)!==Q&&(s.uniformBlockBinding(pe,Q,N.__bindingPointIndex),c.set(pe,Q))}function ot(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},re=null,he={},u={},d=new WeakMap,p=[],g=null,b=!1,m=null,f=null,y=null,v=null,_=null,I=null,A=null,C=new ye(0,0,0),D=0,E=!1,M=null,P=null,z=null,V=null,X=null,tt.set(0,0,s.canvas.width,s.canvas.height),K.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ue,disable:Ee,bindFramebuffer:Oe,drawBuffers:He,useProgram:ut,setBlending:F,setMaterial:Nt,setFlipSided:je,setCullFace:Ze,setLineWidth:Le,setPolygonOffset:at,setScissorTest:Ue,activeTexture:R,bindTexture:S,unbindTexture:H,compressedTexImage2D:Z,compressedTexImage3D:ee,texImage2D:Me,texImage3D:Fe,updateUBOMapping:nt,uniformBlockBinding:ke,texStorage2D:Je,texStorage3D:se,texSubImage2D:j,texSubImage3D:Ce,compressedTexSubImage2D:fe,compressedTexSubImage3D:xe,scissor:ze,viewport:Se,reset:ot}}function Pu(s,e,t,n){let i=c_(n);switch(t){case ad:return s*e;case cd:return s*e;case ld:return s*e*2;case C0:return s*e/i.components*i.byteLength;case P0:return s*e/i.components*i.byteLength;case hd:return s*e*2/i.components*i.byteLength;case I0:return s*e*2/i.components*i.byteLength;case od:return s*e*3/i.components*i.byteLength;case gn:return s*e*4/i.components*i.byteLength;case D0:return s*e*4/i.components*i.byteLength;case $a:case eo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case to:case no:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cl:case hl:return Math.max(s,16)*Math.max(e,8)/4;case ol:case ll:return Math.max(s,8)*Math.max(e,8)/2;case ul:case dl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case fl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ml:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case gl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case bl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case _l:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case xl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case vl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case yl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ml:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case El:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Tl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case wl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Al:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case io:case Rl:case Cl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ud:case Pl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Il:case Dl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function c_(s){switch(s){case Kn:case id:return{byteLength:1,components:1};case jr:case sd:case _n:return{byteLength:2,components:1};case A0:case R0:return{byteLength:2,components:4};case ds:case w0:case jn:return{byteLength:4,components:1};case rd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function l_(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ae,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return p?new OffscreenCanvas(R,S):Yr("canvas")}function b(R,S,H){let Z=1,ee=Ue(R);if((ee.width>H||ee.height>H)&&(Z=H/Math.max(ee.width,ee.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let j=Math.floor(Z*ee.width),Ce=Math.floor(Z*ee.height);u===void 0&&(u=g(j,Ce));let fe=S?g(j,Ce):u;return fe.width=j,fe.height=Ce,fe.getContext("2d").drawImage(R,0,0,j,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+j+"x"+Ce+")."),fe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function m(R){return R.generateMipmaps}function f(R){s.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(R,S,H,Z,ee=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=S;if(S===s.RED&&(H===s.FLOAT&&(j=s.R32F),H===s.HALF_FLOAT&&(j=s.R16F),H===s.UNSIGNED_BYTE&&(j=s.R8)),S===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(j=s.R8UI),H===s.UNSIGNED_SHORT&&(j=s.R16UI),H===s.UNSIGNED_INT&&(j=s.R32UI),H===s.BYTE&&(j=s.R8I),H===s.SHORT&&(j=s.R16I),H===s.INT&&(j=s.R32I)),S===s.RG&&(H===s.FLOAT&&(j=s.RG32F),H===s.HALF_FLOAT&&(j=s.RG16F),H===s.UNSIGNED_BYTE&&(j=s.RG8)),S===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(j=s.RG8UI),H===s.UNSIGNED_SHORT&&(j=s.RG16UI),H===s.UNSIGNED_INT&&(j=s.RG32UI),H===s.BYTE&&(j=s.RG8I),H===s.SHORT&&(j=s.RG16I),H===s.INT&&(j=s.RG32I)),S===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(j=s.RGB8UI),H===s.UNSIGNED_SHORT&&(j=s.RGB16UI),H===s.UNSIGNED_INT&&(j=s.RGB32UI),H===s.BYTE&&(j=s.RGB8I),H===s.SHORT&&(j=s.RGB16I),H===s.INT&&(j=s.RGB32I)),S===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),H===s.UNSIGNED_INT&&(j=s.RGBA32UI),H===s.BYTE&&(j=s.RGBA8I),H===s.SHORT&&(j=s.RGBA16I),H===s.INT&&(j=s.RGBA32I)),S===s.RGB&&H===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),S===s.RGBA){let Ce=ee?Ho:it.getTransfer(Z);H===s.FLOAT&&(j=s.RGBA32F),H===s.HALF_FLOAT&&(j=s.RGBA16F),H===s.UNSIGNED_BYTE&&(j=Ce===gt?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function _(R,S){let H;return R?S===null||S===ds||S===Vi?H=s.DEPTH24_STENCIL8:S===jn?H=s.DEPTH32F_STENCIL8:S===jr&&(H=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ds||S===Vi?H=s.DEPTH_COMPONENT24:S===jn?H=s.DEPTH_COMPONENT32F:S===jr&&(H=s.DEPTH_COMPONENT16),H}function I(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ht&&R.minFilter!==mn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function A(R){let S=R.target;S.removeEventListener("dispose",A),D(S),S.isVideoTexture&&h.delete(S)}function C(R){let S=R.target;S.removeEventListener("dispose",C),M(S)}function D(R){let S=n.get(R);if(S.__webglInit===void 0)return;let H=R.source,Z=d.get(H);if(Z){let ee=Z[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&E(R),Object.keys(Z).length===0&&d.delete(H)}n.remove(R)}function E(R){let S=n.get(R);s.deleteTexture(S.__webglTexture);let H=R.source,Z=d.get(H);delete Z[S.__cacheKey],a.memory.textures--}function M(R){let S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let ee=0;ee<S.__webglFramebuffer[Z].length;ee++)s.deleteFramebuffer(S.__webglFramebuffer[Z][ee]);else s.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)s.deleteFramebuffer(S.__webglFramebuffer[Z]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let H=R.textures;for(let Z=0,ee=H.length;Z<ee;Z++){let j=n.get(H[Z]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(H[Z])}n.remove(R)}let P=0;function z(){P=0}function V(){let R=P;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function X(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function te(R,S){let H=n.get(R);if(R.isVideoTexture&&Le(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){let Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(H,R,S);return}}t.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+S)}function q(R,S){let H=n.get(R);if(R.version>0&&H.__version!==R.version){K(H,R,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+S)}function ie(R,S){let H=n.get(R);if(R.version>0&&H.__version!==R.version){K(H,R,S);return}t.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+S)}function W(R,S){let H=n.get(R);if(R.version>0&&H.__version!==R.version){ce(H,R,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+S)}let re={[on]:s.REPEAT,[gi]:s.CLAMP_TO_EDGE,[qr]:s.MIRRORED_REPEAT},he={[Ht]:s.NEAREST,[T0]:s.NEAREST_MIPMAP_NEAREST,[Xs]:s.NEAREST_MIPMAP_LINEAR,[mn]:s.LINEAR,[zr]:s.LINEAR_MIPMAP_NEAREST,[ni]:s.LINEAR_MIPMAP_LINEAR},ve={[Qf]:s.NEVER,[sp]:s.ALWAYS,[$f]:s.LESS,[fd]:s.LEQUAL,[ep]:s.EQUAL,[ip]:s.GEQUAL,[tp]:s.GREATER,[np]:s.NOTEQUAL};function Ge(R,S){if(S.type===jn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===mn||S.magFilter===zr||S.magFilter===Xs||S.magFilter===ni||S.minFilter===mn||S.minFilter===zr||S.minFilter===Xs||S.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,re[S.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,re[S.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,re[S.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,he[S.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,he[S.minFilter]),S.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,ve[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ht||S.minFilter!==Xs&&S.minFilter!==ni||S.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function tt(R,S){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",A));let Z=S.source,ee=d.get(Z);ee===void 0&&(ee={},d.set(Z,ee));let j=X(S);if(j!==R.__cacheKey){ee[j]===void 0&&(ee[j]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ee[j].usedTimes++;let Ce=ee[R.__cacheKey];Ce!==void 0&&(ee[R.__cacheKey].usedTimes--,Ce.usedTimes===0&&E(S)),R.__cacheKey=j,R.__webglTexture=ee[j].texture}return H}function K(R,S,H){let Z=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=s.TEXTURE_3D);let ee=tt(R,S),j=S.source;t.bindTexture(Z,R.__webglTexture,s.TEXTURE0+H);let Ce=n.get(j);if(j.version!==Ce.__version||ee===!0){t.activeTexture(s.TEXTURE0+H);let fe=it.getPrimaries(it.workingColorSpace),xe=S.colorSpace===Fi?null:it.getPrimaries(S.colorSpace),Je=S.colorSpace===Fi||fe===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let se=b(S.image,!1,i.maxTextureSize);se=at(S,se);let Me=r.convert(S.format,S.colorSpace),Fe=r.convert(S.type),ze=v(S.internalFormat,Me,Fe,S.colorSpace,S.isVideoTexture);Ge(Z,S);let Se,nt=S.mipmaps,ke=S.isVideoTexture!==!0,ot=Ce.__version===void 0||ee===!0,N=j.dataReady,pe=I(S,se);if(S.isDepthTexture)ze=_(S.format===Gi,S.type),ot&&(ke?t.texStorage2D(s.TEXTURE_2D,1,ze,se.width,se.height):t.texImage2D(s.TEXTURE_2D,0,ze,se.width,se.height,0,Me,Fe,null));else if(S.isDataTexture)if(nt.length>0){ke&&ot&&t.texStorage2D(s.TEXTURE_2D,pe,ze,nt[0].width,nt[0].height);for(let G=0,Q=nt.length;G<Q;G++)Se=nt[G],ke?N&&t.texSubImage2D(s.TEXTURE_2D,G,0,0,Se.width,Se.height,Me,Fe,Se.data):t.texImage2D(s.TEXTURE_2D,G,ze,Se.width,Se.height,0,Me,Fe,Se.data);S.generateMipmaps=!1}else ke?(ot&&t.texStorage2D(s.TEXTURE_2D,pe,ze,se.width,se.height),N&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,se.width,se.height,Me,Fe,se.data)):t.texImage2D(s.TEXTURE_2D,0,ze,se.width,se.height,0,Me,Fe,se.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ke&&ot&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,ze,nt[0].width,nt[0].height,se.depth);for(let G=0,Q=nt.length;G<Q;G++)if(Se=nt[G],S.format!==gn)if(Me!==null)if(ke){if(N)if(S.layerUpdates.size>0){let me=Pu(Se.width,Se.height,S.format,S.type);for(let ge of S.layerUpdates){let We=Se.data.subarray(ge*me/Se.data.BYTES_PER_ELEMENT,(ge+1)*me/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,ge,Se.width,Se.height,1,Me,We)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,Se.width,Se.height,se.depth,Me,Se.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,G,ze,Se.width,Se.height,se.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?N&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,G,0,0,0,Se.width,Se.height,se.depth,Me,Fe,Se.data):t.texImage3D(s.TEXTURE_2D_ARRAY,G,ze,Se.width,Se.height,se.depth,0,Me,Fe,Se.data)}else{ke&&ot&&t.texStorage2D(s.TEXTURE_2D,pe,ze,nt[0].width,nt[0].height);for(let G=0,Q=nt.length;G<Q;G++)Se=nt[G],S.format!==gn?Me!==null?ke?N&&t.compressedTexSubImage2D(s.TEXTURE_2D,G,0,0,Se.width,Se.height,Me,Se.data):t.compressedTexImage2D(s.TEXTURE_2D,G,ze,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?N&&t.texSubImage2D(s.TEXTURE_2D,G,0,0,Se.width,Se.height,Me,Fe,Se.data):t.texImage2D(s.TEXTURE_2D,G,ze,Se.width,Se.height,0,Me,Fe,Se.data)}else if(S.isDataArrayTexture)if(ke){if(ot&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,ze,se.width,se.height,se.depth),N)if(S.layerUpdates.size>0){let G=Pu(se.width,se.height,S.format,S.type);for(let Q of S.layerUpdates){let me=se.data.subarray(Q*G/se.data.BYTES_PER_ELEMENT,(Q+1)*G/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,se.width,se.height,1,Me,Fe,me)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Me,Fe,se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ze,se.width,se.height,se.depth,0,Me,Fe,se.data);else if(S.isData3DTexture)ke?(ot&&t.texStorage3D(s.TEXTURE_3D,pe,ze,se.width,se.height,se.depth),N&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Me,Fe,se.data)):t.texImage3D(s.TEXTURE_3D,0,ze,se.width,se.height,se.depth,0,Me,Fe,se.data);else if(S.isFramebufferTexture){if(ot)if(ke)t.texStorage2D(s.TEXTURE_2D,pe,ze,se.width,se.height);else{let G=se.width,Q=se.height;for(let me=0;me<pe;me++)t.texImage2D(s.TEXTURE_2D,me,ze,G,Q,0,Me,Fe,null),G>>=1,Q>>=1}}else if(nt.length>0){if(ke&&ot){let G=Ue(nt[0]);t.texStorage2D(s.TEXTURE_2D,pe,ze,G.width,G.height)}for(let G=0,Q=nt.length;G<Q;G++)Se=nt[G],ke?N&&t.texSubImage2D(s.TEXTURE_2D,G,0,0,Me,Fe,Se):t.texImage2D(s.TEXTURE_2D,G,ze,Me,Fe,Se);S.generateMipmaps=!1}else if(ke){if(ot){let G=Ue(se);t.texStorage2D(s.TEXTURE_2D,pe,ze,G.width,G.height)}N&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Me,Fe,se)}else t.texImage2D(s.TEXTURE_2D,0,ze,Me,Fe,se);m(S)&&f(Z),Ce.__version=j.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ce(R,S,H){if(S.image.length!==6)return;let Z=tt(R,S),ee=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+H);let j=n.get(ee);if(ee.version!==j.__version||Z===!0){t.activeTexture(s.TEXTURE0+H);let Ce=it.getPrimaries(it.workingColorSpace),fe=S.colorSpace===Fi?null:it.getPrimaries(S.colorSpace),xe=S.colorSpace===Fi||Ce===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let Je=S.isCompressedTexture||S.image[0].isCompressedTexture,se=S.image[0]&&S.image[0].isDataTexture,Me=[];for(let Q=0;Q<6;Q++)!Je&&!se?Me[Q]=b(S.image[Q],!0,i.maxCubemapSize):Me[Q]=se?S.image[Q].image:S.image[Q],Me[Q]=at(S,Me[Q]);let Fe=Me[0],ze=r.convert(S.format,S.colorSpace),Se=r.convert(S.type),nt=v(S.internalFormat,ze,Se,S.colorSpace),ke=S.isVideoTexture!==!0,ot=j.__version===void 0||Z===!0,N=ee.dataReady,pe=I(S,Fe);Ge(s.TEXTURE_CUBE_MAP,S);let G;if(Je){ke&&ot&&t.texStorage2D(s.TEXTURE_CUBE_MAP,pe,nt,Fe.width,Fe.height);for(let Q=0;Q<6;Q++){G=Me[Q].mipmaps;for(let me=0;me<G.length;me++){let ge=G[me];S.format!==gn?ze!==null?ke?N&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,0,0,ge.width,ge.height,ze,ge.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,nt,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,0,0,ge.width,ge.height,ze,Se,ge.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,nt,ge.width,ge.height,0,ze,Se,ge.data)}}}else{if(G=S.mipmaps,ke&&ot){G.length>0&&pe++;let Q=Ue(Me[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,pe,nt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(se){ke?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Me[Q].width,Me[Q].height,ze,Se,Me[Q].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,nt,Me[Q].width,Me[Q].height,0,ze,Se,Me[Q].data);for(let me=0;me<G.length;me++){let We=G[me].image[Q].image;ke?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,0,0,We.width,We.height,ze,Se,We.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,nt,We.width,We.height,0,ze,Se,We.data)}}else{ke?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ze,Se,Me[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,nt,ze,Se,Me[Q]);for(let me=0;me<G.length;me++){let ge=G[me];ke?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,0,0,ze,Se,ge.image[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,nt,ze,Se,ge.image[Q])}}}m(S)&&f(s.TEXTURE_CUBE_MAP),j.__version=ee.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Te(R,S,H,Z,ee,j){let Ce=r.convert(H.format,H.colorSpace),fe=r.convert(H.type),xe=v(H.internalFormat,Ce,fe,H.colorSpace),Je=n.get(S),se=n.get(H);if(se.__renderTarget=S,!Je.__hasExternalTextures){let Me=Math.max(1,S.width>>j),Fe=Math.max(1,S.height>>j);ee===s.TEXTURE_3D||ee===s.TEXTURE_2D_ARRAY?t.texImage3D(ee,j,xe,Me,Fe,S.depth,0,Ce,fe,null):t.texImage2D(ee,j,xe,Me,Fe,0,Ce,fe,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),Ze(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,ee,se.__webglTexture,0,je(S)):(ee===s.TEXTURE_2D||ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,ee,se.__webglTexture,j),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ue(R,S,H){if(s.bindRenderbuffer(s.RENDERBUFFER,R),S.depthBuffer){let Z=S.depthTexture,ee=Z&&Z.isDepthTexture?Z.type:null,j=_(S.stencilBuffer,ee),Ce=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=je(S);Ze(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,fe,j,S.width,S.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,j,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,j,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ce,s.RENDERBUFFER,R)}else{let Z=S.textures;for(let ee=0;ee<Z.length;ee++){let j=Z[ee],Ce=r.convert(j.format,j.colorSpace),fe=r.convert(j.type),xe=v(j.internalFormat,Ce,fe,j.colorSpace),Je=je(S);H&&Ze(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Je,xe,S.width,S.height):Ze(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Je,xe,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,xe,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ee(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(S.depthTexture);Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),te(S.depthTexture,0);let ee=Z.__webglTexture,j=je(S);if(S.depthTexture.format===Zs)Ze(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0);else if(S.depthTexture.format===Gi)Ze(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Oe(R){let S=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let Z=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){let ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",ee)};Z.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=Z}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ee(S.__webglFramebuffer,R)}else if(H){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=s.createRenderbuffer(),ue(S.__webglDepthbuffer[Z],R,!1);else{let ee=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,j)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),ue(S.__webglDepthbuffer,R,!1);else{let Z=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ee=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,ee)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function He(R,S,H){let Z=n.get(R);S!==void 0&&Te(Z.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&Oe(R)}function ut(R){let S=R.texture,H=n.get(R),Z=n.get(S);R.addEventListener("dispose",C);let ee=R.textures,j=R.isWebGLCubeRenderTarget===!0,Ce=ee.length>1;if(Ce||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=S.version,a.memory.textures++),j){H.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[fe]=[];for(let xe=0;xe<S.mipmaps.length;xe++)H.__webglFramebuffer[fe][xe]=s.createFramebuffer()}else H.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let fe=0;fe<S.mipmaps.length;fe++)H.__webglFramebuffer[fe]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(Ce)for(let fe=0,xe=ee.length;fe<xe;fe++){let Je=n.get(ee[fe]);Je.__webglTexture===void 0&&(Je.__webglTexture=s.createTexture(),a.memory.textures++)}if(R.samples>0&&Ze(R)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let fe=0;fe<ee.length;fe++){let xe=ee[fe];H.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[fe]);let Je=r.convert(xe.format,xe.colorSpace),se=r.convert(xe.type),Me=v(xe.internalFormat,Je,se,xe.colorSpace,R.isXRRenderTarget===!0),Fe=je(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Fe,Me,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,H.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),ue(H.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),Ge(s.TEXTURE_CUBE_MAP,S);for(let fe=0;fe<6;fe++)if(S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)Te(H.__webglFramebuffer[fe][xe],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe);else Te(H.__webglFramebuffer[fe],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(S)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let fe=0,xe=ee.length;fe<xe;fe++){let Je=ee[fe],se=n.get(Je);t.bindTexture(s.TEXTURE_2D,se.__webglTexture),Ge(s.TEXTURE_2D,Je),Te(H.__webglFramebuffer,R,Je,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,0),m(Je)&&f(s.TEXTURE_2D)}t.unbindTexture()}else{let fe=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(fe,Z.__webglTexture),Ge(fe,S),S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)Te(H.__webglFramebuffer[xe],R,S,s.COLOR_ATTACHMENT0,fe,xe);else Te(H.__webglFramebuffer,R,S,s.COLOR_ATTACHMENT0,fe,0);m(S)&&f(fe),t.unbindTexture()}R.depthBuffer&&Oe(R)}function Xe(R){let S=R.textures;for(let H=0,Z=S.length;H<Z;H++){let ee=S[H];if(m(ee)){let j=y(R),Ce=n.get(ee).__webglTexture;t.bindTexture(j,Ce),f(j),t.unbindTexture()}}}let dt=[],F=[];function Nt(R){if(R.samples>0){if(Ze(R)===!1){let S=R.textures,H=R.width,Z=R.height,ee=s.COLOR_BUFFER_BIT,j=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=n.get(R),fe=S.length>1;if(fe)for(let xe=0;xe<S.length;xe++)t.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let xe=0;xe<S.length;xe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ce.__webglColorRenderbuffer[xe]);let Je=n.get(S[xe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Je,0)}s.blitFramebuffer(0,0,H,Z,0,0,H,Z,ee,s.NEAREST),c===!0&&(dt.length=0,F.length=0,dt.push(s.COLOR_ATTACHMENT0+xe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(dt.push(j),F.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let xe=0;xe<S.length;xe++){t.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,Ce.__webglColorRenderbuffer[xe]);let Je=n.get(S[xe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.TEXTURE_2D,Je,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let S=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function je(R){return Math.min(i.maxSamples,R.samples)}function Ze(R){let S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Le(R){let S=a.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function at(R,S){let H=R.colorSpace,Z=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==tn&&H!==Fi&&(it.getTransfer(H)===gt?(Z!==gn||ee!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}function Ue(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=z,this.setTexture2D=te,this.setTexture2DArray=q,this.setTexture3D=ie,this.setTextureCube=W,this.rebindTextures=He,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Ze}function h_(s,e){function t(n,i=Fi){let r,a=it.getTransfer(i);if(n===Kn)return s.UNSIGNED_BYTE;if(n===A0)return s.UNSIGNED_SHORT_4_4_4_4;if(n===R0)return s.UNSIGNED_SHORT_5_5_5_1;if(n===rd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===id)return s.BYTE;if(n===sd)return s.SHORT;if(n===jr)return s.UNSIGNED_SHORT;if(n===w0)return s.INT;if(n===ds)return s.UNSIGNED_INT;if(n===jn)return s.FLOAT;if(n===_n)return s.HALF_FLOAT;if(n===ad)return s.ALPHA;if(n===od)return s.RGB;if(n===gn)return s.RGBA;if(n===cd)return s.LUMINANCE;if(n===ld)return s.LUMINANCE_ALPHA;if(n===Zs)return s.DEPTH_COMPONENT;if(n===Gi)return s.DEPTH_STENCIL;if(n===C0)return s.RED;if(n===P0)return s.RED_INTEGER;if(n===hd)return s.RG;if(n===I0)return s.RG_INTEGER;if(n===D0)return s.RGBA_INTEGER;if(n===$a||n===eo||n===to||n===no)if(a===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$a)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$a)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ol||n===cl||n===ll||n===hl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ll)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ul||n===dl||n===fl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ul||n===dl)return a===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===pl||n===ml||n===gl||n===bl||n===_l||n===xl||n===vl||n===yl||n===Ml||n===Sl||n===El||n===Tl||n===wl||n===Al)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===pl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ml)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_l)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ml)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===El)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wl)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Al)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===io||n===Rl||n===Cl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===io)return a===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Cl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ud||n===Pl||n===Il||n===Dl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===io)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Pl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Il)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}function m_(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,gd(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,y,v,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),b(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,y,v):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===en&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===en&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let y=e.get(f),v=y.envMap,_=y.envMapRotation;v&&(m.envMap.value=v,ls.copy(_),ls.x*=-1,ls.y*=-1,ls.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),m.envMapRotation.value.setFromMatrix4(p_.makeRotationFromEuler(ls)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,y,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===en&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function b(m,f){let y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function g_(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,v){let _=v.program;n.uniformBlockBinding(y,_)}function l(y,v){let _=i[y.id];_===void 0&&(g(y),_=h(y),i[y.id]=_,y.addEventListener("dispose",m));let I=v.program;n.updateUBOMapping(y,I);let A=e.render.frame;r[y.id]!==A&&(d(y),r[y.id]=A)}function h(y){let v=u();y.__bindingPointIndex=v;let _=s.createBuffer(),I=y.__size,A=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,I,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,_),_}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let v=i[y.id],_=y.uniforms,I=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let A=0,C=_.length;A<C;A++){let D=Array.isArray(_[A])?_[A]:[_[A]];for(let E=0,M=D.length;E<M;E++){let P=D[E];if(p(P,A,E,I)===!0){let z=P.__offset,V=Array.isArray(P.value)?P.value:[P.value],X=0;for(let te=0;te<V.length;te++){let q=V[te],ie=b(q);typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,s.bufferSubData(s.UNIFORM_BUFFER,z+X,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,X),X+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(y,v,_,I){let A=y.value,C=v+"_"+_;if(I[C]===void 0)return typeof A=="number"||typeof A=="boolean"?I[C]=A:I[C]=A.clone(),!0;{let D=I[C];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return I[C]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(y){let v=y.uniforms,_=0,I=16;for(let C=0,D=v.length;C<D;C++){let E=Array.isArray(v[C])?v[C]:[v[C]];for(let M=0,P=E.length;M<P;M++){let z=E[M],V=Array.isArray(z.value)?z.value:[z.value];for(let X=0,te=V.length;X<te;X++){let q=V[X],ie=b(q),W=_%I,re=W%ie.boundary,he=W+re;_+=re,he!==0&&I-he<ie.storage&&(_+=I-he),z.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=_,_+=ie.storage}}}let A=_%I;return A>0&&(_+=I-A),y.__size=_,y.__cache={},this}function b(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){let v=y.target;v.removeEventListener("dispose",m);let _=a.indexOf(v.__bindingPointIndex);a.splice(_,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function f(){for(let y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:c,update:l,dispose:f}}function Wa(s,e,t,n,i,r){Gs.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Dr.x=r*Gs.x-i*Gs.y,Dr.y=i*Gs.x+r*Gs.y):Dr.copy(Gs),s.copy(e),s.x+=Dr.x,s.y+=Dr.y,s.applyMatrix4(Md)}function Ya(s,e,t,n,i,r){let a=s.geometry.attributes.position;if(xo.fromBufferAttribute(a,i),vo.fromBufferAttribute(a,r),t.distanceSqToSegment(xo,vo,Wc,Vu)>n)return;Wc.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Wc);if(!(c<e.near||c>e.far))return{distance:c,point:Vu.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}function qu(s,e,t,n,i,r,a){let o=Zl.distanceSqToPoint(s);if(o<t){let c=new T;Zl.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}function k0(){let s=0,e=0,t=0,n=0;function i(r,a,o,c){s=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,p*=h,i(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}function ju(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,c=s*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*s+t}function v_(s,e){let t=1-s;return t*t*e}function y_(s,e){return 2*(1-s)*s*e}function M_(s,e){return s*s*e}function Wr(s,e,t,n){return v_(s,e)+y_(s,t)+M_(s,n)}function S_(s,e){let t=1-s;return t*t*t*e}function E_(s,e){let t=1-s;return 3*t*t*s*e}function T_(s,e){return 3*(1-s)*s*s*e}function w_(s,e){return s*s*s*e}function Xr(s,e,t,n,i){return S_(s,e)+E_(s,t)+T_(s,n)+w_(s,i)}function Qa(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function R_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function C_(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Yu(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function Sd(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}function P_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vi;case"vector":case"vector2":case"vector3":case"vector4":return Mi;case"color":return Co;case"quaternion":return yi;case"bool":case"boolean":return Yi;case"string":return Ki}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function I_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=P_(s.type);if(s.times===void 0){let t=[],n=[];Sd(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}function Qu(){return performance.now()}function ed(s,e){return s.distance-e.distance}function b0(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)b0(r[a],e,t,!0)}}var _s,ri,wf,Uh,Af,Oo,_0,mi,En,en,Ut,zt,Ks,Hi,Nh,Oh,x0,Cn,Rf,Cf,Pf,If,gr,Df,Lf,Uf,Zc,Jc,Fo,Nf,ko,Of,Ff,kf,Bf,zf,Hf,Qc,$c,el,$s,tl,nl,il,sl,td,Vf,Gf,zi,v0,y0,M0,oa,Wf,S0,E0,Fh,Xf,nd,er,tr,rl,al,Bo,on,gi,qr,Ht,T0,Xs,mn,zr,ni,Kn,id,sd,jr,w0,ds,jn,_n,A0,R0,Vi,rd,ad,od,gn,cd,ld,Zs,Gi,C0,P0,hd,I0,D0,$a,eo,to,no,ol,cl,ll,hl,ul,dl,fl,pl,ml,gl,bl,_l,xl,vl,yl,Ml,Sl,El,Tl,wl,Al,io,Rl,Cl,ud,Pl,Il,Dl,qf,L0,jf,nr,ir,pc,qs,js,so,U0,Yf,dd,zo,ca,Kf,Zf,N0,Jf,Fi,Et,tn,Ho,gt,ws,kh,Qf,$f,ep,fd,tp,np,ip,sp,Ll,Bh,bi,ro,ii,Qt,zh,Hr,sr,Vo,ae,$e,mc,Hh,it,Vh,Gh,Wh,Xh,qh,As,Ul,Tp,ao,wp,Yt,ht,Nl,Kt,oo,Ol,Tt,T,bc,jh,Pn,li,Vn,Ma,Rs,Cs,Ps,Ii,Di,ss,Ar,Sa,Ea,rs,Ap,Rr,xc,Tn,hi,vc,Ta,Li,yc,wa,Mc,xi,Be,Is,Gn,Rp,Cp,Ui,Aa,Mn,Yh,Kh,cn,Kr,Pp,Zh,Ds,ui,Ra,Cr,Ip,Dp,Jh,Qh,$h,eu,Lp,Ls,Sc,Ct,Wn,di,Ec,fi,Us,Ns,tu,Tc,wc,Ac,Rc,Cc,Pc,ki,md,Ni,Ca,ye,$t,Up,ln,hn,Ot,Pa,Rt,co,lo,st,Np,Rn,Dc,Os,Sn,Pr,jt,wt,nu,as,Ia,iu,Da,La,Ua,Lc,Na,su,Oa,Lt,fs,xn,kp,Bp,yt,ho,Oi,ru,au,Bt,Fs,ks,Fl,uo,kl,Uc,zp,Hp,Xn,os,ka,Zr,si,Gp,Wp,Xp,qp,jp,Yp,Kp,Zp,Jp,Qp,$p,em,tm,nm,im,sm,rm,am,om,cm,lm,hm,um,dm,fm,pm,mm,gm,bm,_m,xm,vm,ym,Mm,Sm,Em,Tm,wm,Am,Rm,Cm,Pm,Im,Dm,Lm,Um,Nm,Om,Fm,km,Bm,zm,Hm,Vm,Gm,Wm,Xm,qm,jm,Ym,Km,Zm,Jm,Qm,$m,eg,tg,ng,ig,sg,rg,ag,og,cg,lg,hg,ug,dg,fg,pg,mg,gg,bg,_g,xg,vg,yg,Mg,Sg,Eg,Tg,wg,Ag,Rg,Cg,Pg,Ig,Dg,Lg,Ug,Ng,Og,Fg,kg,Bg,zg,Hg,Vg,Gg,Wg,Xg,qg,jg,Yg,Kg,Zg,Jg,Qg,$g,e1,t1,n1,i1,s1,r1,a1,o1,c1,l1,h1,u1,d1,f1,p1,m1,g1,b1,_1,x1,v1,y1,et,_e,ti,Ba,cs,M1,Wi,Ys,ou,us,Nc,cu,Oc,Fc,kc,Bc,hs,Bs,lu,fo,ar,_d,fu,xd,vd,yd,pu,mu,gu,bu,_u,Bl,zl,Hl,zc,Qs,Tb,wb,yu,Ha,Nb,Ob,kb,qb,Gl,Wl,$b,Xl,ql,i_,s_,a_,jl,bn,u_,Gr,d_,f_,Yl,Kl,ls,p_,po,mo,go,or,rn,ps,Jr,zs,Ir,Hs,Vs,Gs,Dr,Md,Va,Lr,Ga,Iu,Hc,Du,Qr,Lu,Uu,Nu,b_,Ou,Xa,Vc,Fu,Gc,bo,$r,Xi,ku,__,_o,ms,Ws,Bu,qa,zu,x_,Ur,Nr,In,ea,xo,vo,Hu,Or,ja,Wc,Vu,cr,Gu,Wu,yo,Mo,qi,Xu,Zl,Ka,Za,gs,bs,Zn,So,Jl,Ja,Xc,qc,jc,lr,Ql,$l,e0,t0,n0,Eo,i0,A_,hr,Ye,ta,s0,na,Wt,ia,To,wo,Xt,wn,Ao,ji,r0,Ro,a0,Dn,Yi,Co,vi,o0,yi,Ki,Mi,ur,Bi,c0,D_,Si,pi,l0,sa,h0,dr,fr,Po,Yc,Ku,Zu,ra,u0,Io,Ju,Fr,Kc,d0,Ln,f0,pr,Zi,Do,mr,p0,B0,L_,z0,U_,N_,O_,F_,k_,B_,z_,m0,vt,g0,H_,Lo,$u,Uo,aa,No,Jt=Dt(()=>{_s={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ri={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wf=0,Uh=1,Af=2,Oo=1,_0=2,mi=3,En=0,en=1,Ut=2,zt=0,Ks=1,Hi=2,Nh=3,Oh=4,x0=5,Cn=100,Rf=101,Cf=102,Pf=103,If=104,gr=200,Df=201,Lf=202,Uf=203,Zc=204,Jc=205,Fo=206,Nf=207,ko=208,Of=209,Ff=210,kf=211,Bf=212,zf=213,Hf=214,Qc=0,$c=1,el=2,$s=3,tl=4,nl=5,il=6,sl=7,td=0,Vf=1,Gf=2,zi=0,v0=1,y0=2,M0=3,oa=4,Wf=5,S0=6,E0=7,Fh="attached",Xf="detached",nd=300,er=301,tr=302,rl=303,al=304,Bo=306,on=1e3,gi=1001,qr=1002,Ht=1003,T0=1004,Xs=1005,mn=1006,zr=1007,ni=1008,Kn=1009,id=1010,sd=1011,jr=1012,w0=1013,ds=1014,jn=1015,_n=1016,A0=1017,R0=1018,Vi=1020,rd=35902,ad=1021,od=1022,gn=1023,cd=1024,ld=1025,Zs=1026,Gi=1027,C0=1028,P0=1029,hd=1030,I0=1031,D0=1033,$a=33776,eo=33777,to=33778,no=33779,ol=35840,cl=35841,ll=35842,hl=35843,ul=36196,dl=37492,fl=37496,pl=37808,ml=37809,gl=37810,bl=37811,_l=37812,xl=37813,vl=37814,yl=37815,Ml=37816,Sl=37817,El=37818,Tl=37819,wl=37820,Al=37821,io=36492,Rl=36494,Cl=36495,ud=36283,Pl=36284,Il=36285,Dl=36286,qf=2200,L0=2201,jf=2202,nr=2300,ir=2301,pc=2302,qs=2400,js=2401,so=2402,U0=2500,Yf=2501,dd=0,zo=1,ca=2,Kf=3200,Zf=3201,N0=0,Jf=1,Fi="",Et="srgb",tn="srgb-linear",Ho="linear",gt="srgb",ws=7680,kh=519,Qf=512,$f=513,ep=514,fd=515,tp=516,np=517,ip=518,sp=519,Ll=35044,Bh="300 es",bi=2e3,ro=2001,ii=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zh=1234567,Hr=Math.PI/180,sr=180/Math.PI;Vo={DEG2RAD:Hr,RAD2DEG:sr,generateUUID:Yn,clamp:kt,euclideanModulo:O0,mapLinear:rp,inverseLerp:ap,lerp:Vr,damp:op,pingpong:cp,smoothstep:lp,smootherstep:hp,randInt:up,randFloat:dp,randFloatSpread:fp,seededRandom:pp,degToRad:mp,radToDeg:gp,isPowerOfTwo:bp,ceilPowerOfTwo:_p,floorPowerOfTwo:xp,setQuaternionFromProperEuler:vp,normalize:_t,denormalize:qn},ae=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$e=class s{constructor(e,t,n,i,r,a,o,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],b=i[0],m=i[3],f=i[6],y=i[1],v=i[4],_=i[7],I=i[2],A=i[5],C=i[8];return r[0]=a*b+o*y+c*I,r[3]=a*m+o*v+c*A,r[6]=a*f+o*_+c*C,r[1]=l*b+h*y+u*I,r[4]=l*m+h*v+u*A,r[7]=l*f+h*_+u*C,r[2]=d*b+p*y+g*I,r[5]=d*m+p*v+g*A,r[8]=d*f+p*_+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,p=l*r-a*c,g=t*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return e[0]=u*b,e[1]=(i*l-h*n)*b,e[2]=(o*n-i*a)*b,e[3]=d*b,e[4]=(h*t-i*c)*b,e[5]=(i*r-o*t)*b,e[6]=p*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(mc.makeScale(e,t)),this}rotate(e){return this.premultiply(mc.makeRotation(-e)),this}translate(e,t){return this.premultiply(mc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},mc=new $e;Hh={};it={enabled:!0,workingColorSpace:tn,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===gt&&(s.r=_i(s.r),s.g=_i(s.g),s.b=_i(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===gt&&(s.r=Js(s.r),s.g=Js(s.g),s.b=Js(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fi?Ho:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};Vh=[.64,.33,.3,.6,.15,.06],Gh=[.2126,.7152,.0722],Wh=[.3127,.329],Xh=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qh=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);it.define({[tn]:{primaries:Vh,whitePoint:Wh,transfer:Ho,toXYZ:Xh,fromXYZ:qh,luminanceCoefficients:Gh,workingColorSpaceConfig:{unpackColorSpace:Et},outputColorSpaceConfig:{drawingBufferColorSpace:Et}},[Et]:{primaries:Vh,whitePoint:Wh,transfer:gt,toXYZ:Xh,fromXYZ:qh,luminanceCoefficients:Gh,outputColorSpaceConfig:{drawingBufferColorSpace:Et}}});Ul=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{As===void 0&&(As=Yr("canvas")),As.width=e.width,As.height=e.height;let n=As.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=As}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Yr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=_i(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_i(t[n]/255)*255):t[n]=_i(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Tp=0,ao=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Yn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(gc(i[a].image)):r.push(gc(i[a]))}else r=gc(i);n.url=r}return t||(e.images[this.uuid]=n),n}};wp=0,Yt=class s extends ii{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=gi,i=gi,r=mn,a=ni,o=gn,c=Kn,l=s.DEFAULT_ANISOTROPY,h=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Yn(),this.name="",this.source=new ao(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case on:e.x=e.x-Math.floor(e.x);break;case gi:e.x=e.x<0?0:1;break;case qr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case on:e.y=e.y-Math.floor(e.y);break;case gi:e.y=e.y<0?0:1;break;case qr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=nd;Yt.DEFAULT_ANISOTROPY=1;ht=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],b=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,_=(p+1)/2,I=(f+1)/2,A=(h+d)/4,C=(u+b)/4,D=(g+m)/4;return v>_&&v>I?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=A/n,r=C/n):_>I?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=A/i,r=D/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=C/r,i=D/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-b)/y,this.z=(d-h)/y,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Nl=class extends ii{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Yt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ao(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kt=class extends Nl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},oo=class extends Yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Ol=class extends Yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Tt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],p=r[a+1],g=r[a+2],b=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=b;return}if(u!==b||c!==d||l!==p||h!==g){let m=1-o,f=c*d+l*p+h*g+u*b,y=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){let I=Math.sqrt(v),A=Math.atan2(I,f*y);m=Math.sin(m*A)/I,o=Math.sin(o*A)/I}let _=o*y;if(c=c*m+d*_,l=l*m+p*_,h=h*m+g*_,u=u*m+b*_,m===1-o){let I=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=I,l*=I,h*=I,u*=I}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*p-l*d,e[t+1]=c*g+h*d+l*u-o*p,e[t+2]=l*g+h*p+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),d=c(n/2),p=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return bc.copy(this).projectOnVector(e),this.sub(bc)}reflect(e){return this.sub(bc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},bc=new T,jh=new Tt,Pn=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Vn):Vn.fromBufferAttribute(r,a),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ma.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ma.copy(n.boundingBox)),Ma.applyMatrix4(e.matrixWorld),this.union(Ma)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ar),Sa.subVectors(this.max,Ar),Rs.subVectors(e.a,Ar),Cs.subVectors(e.b,Ar),Ps.subVectors(e.c,Ar),Ii.subVectors(Cs,Rs),Di.subVectors(Ps,Cs),ss.subVectors(Rs,Ps);let t=[0,-Ii.z,Ii.y,0,-Di.z,Di.y,0,-ss.z,ss.y,Ii.z,0,-Ii.x,Di.z,0,-Di.x,ss.z,0,-ss.x,-Ii.y,Ii.x,0,-Di.y,Di.x,0,-ss.y,ss.x,0];return!_c(t,Rs,Cs,Ps,Sa)||(t=[1,0,0,0,1,0,0,0,1],!_c(t,Rs,Cs,Ps,Sa))?!1:(Ea.crossVectors(Ii,Di),t=[Ea.x,Ea.y,Ea.z],_c(t,Rs,Cs,Ps,Sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},li=[new T,new T,new T,new T,new T,new T,new T,new T],Vn=new T,Ma=new Pn,Rs=new T,Cs=new T,Ps=new T,Ii=new T,Di=new T,ss=new T,Ar=new T,Sa=new T,Ea=new T,rs=new T;Ap=new Pn,Rr=new T,xc=new T,Tn=class{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ap.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rr.subVectors(e,this.center);let t=Rr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Rr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rr.copy(e.center).add(xc)),this.expandByPoint(Rr.copy(e.center).sub(xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},hi=new T,vc=new T,Ta=new T,Li=new T,yc=new T,wa=new T,Mc=new T,xi=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){vc.copy(e).add(t).multiplyScalar(.5),Ta.copy(t).sub(e).normalize(),Li.copy(this.origin).sub(vc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ta),o=Li.dot(this.direction),c=-Li.dot(Ta),l=Li.lengthSq(),h=Math.abs(1-a*a),u,d,p,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let b=1/h;u*=b,d*=b,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(vc).addScaledVector(Ta,d),p}intersectSphere(e,t){hi.subVectors(e.center,this.origin);let n=hi.dot(this.direction),i=hi.dot(hi)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,n,i,r){yc.subVectors(t,e),wa.subVectors(n,e),Mc.crossVectors(yc,wa);let a=this.direction.dot(Mc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Li.subVectors(this.origin,e);let c=o*this.direction.dot(wa.crossVectors(Li,wa));if(c<0)return null;let l=o*this.direction.dot(yc.cross(Li));if(l<0||c+l>a)return null;let h=-o*Li.dot(Mc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Be=class s{constructor(e,t,n,i,r,a,o,c,l,h,u,d,p,g,b,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,u,d,p,g,b,m)}set(e,t,n,i,r,a,o,c,l,h,u,d,p,g,b,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=b,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Is.setFromMatrixColumn(e,0).length(),r=1/Is.setFromMatrixColumn(e,1).length(),a=1/Is.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,p=a*u,g=o*h,b=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=d-b*l,t[9]=-o*c,t[2]=b-d*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,p=c*u,g=l*h,b=l*u;t[0]=d+b*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=b+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,p=c*u,g=l*h,b=l*u;t[0]=d-b*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=b-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,p=a*u,g=o*h,b=o*u;t[0]=c*h,t[4]=g*l-p,t[8]=d*l+b,t[1]=c*u,t[5]=b*l+d,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,p=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=b-d*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+g,t[10]=d-b*u}else if(e.order==="XZY"){let d=a*c,p=a*l,g=o*c,b=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+b,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rp,e,Cp)}lookAt(e,t,n){let i=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Ui.crossVectors(n,Mn),Ui.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Ui.crossVectors(n,Mn)),Ui.normalize(),Aa.crossVectors(Mn,Ui),i[0]=Ui.x,i[4]=Aa.x,i[8]=Mn.x,i[1]=Ui.y,i[5]=Aa.y,i[9]=Mn.y,i[2]=Ui.z,i[6]=Aa.z,i[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],b=n[6],m=n[10],f=n[14],y=n[3],v=n[7],_=n[11],I=n[15],A=i[0],C=i[4],D=i[8],E=i[12],M=i[1],P=i[5],z=i[9],V=i[13],X=i[2],te=i[6],q=i[10],ie=i[14],W=i[3],re=i[7],he=i[11],ve=i[15];return r[0]=a*A+o*M+c*X+l*W,r[4]=a*C+o*P+c*te+l*re,r[8]=a*D+o*z+c*q+l*he,r[12]=a*E+o*V+c*ie+l*ve,r[1]=h*A+u*M+d*X+p*W,r[5]=h*C+u*P+d*te+p*re,r[9]=h*D+u*z+d*q+p*he,r[13]=h*E+u*V+d*ie+p*ve,r[2]=g*A+b*M+m*X+f*W,r[6]=g*C+b*P+m*te+f*re,r[10]=g*D+b*z+m*q+f*he,r[14]=g*E+b*V+m*ie+f*ve,r[3]=y*A+v*M+_*X+I*W,r[7]=y*C+v*P+_*te+I*re,r[11]=y*D+v*z+_*q+I*he,r[15]=y*E+v*V+_*ie+I*ve,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],b=e[7],m=e[11],f=e[15];return g*(+r*c*u-i*l*u-r*o*d+n*l*d+i*o*p-n*c*p)+b*(+t*c*p-t*l*d+r*a*d-i*a*p+i*l*h-r*c*h)+m*(+t*l*u-t*o*p-r*a*u+n*a*p+r*o*h-n*l*h)+f*(-i*o*h-t*c*u+t*o*d+i*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],b=e[13],m=e[14],f=e[15],y=u*m*l-b*d*l+b*c*p-o*m*p-u*c*f+o*d*f,v=g*d*l-h*m*l-g*c*p+a*m*p+h*c*f-a*d*f,_=h*b*l-g*u*l+g*o*p-a*b*p-h*o*f+a*u*f,I=g*u*c-h*b*c-g*o*d+a*b*d+h*o*m-a*u*m,A=t*y+n*v+i*_+r*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return e[0]=y*C,e[1]=(b*d*r-u*m*r-b*i*p+n*m*p+u*i*f-n*d*f)*C,e[2]=(o*m*r-b*c*r+b*i*l-n*m*l-o*i*f+n*c*f)*C,e[3]=(u*c*r-o*d*r-u*i*l+n*d*l+o*i*p-n*c*p)*C,e[4]=v*C,e[5]=(h*m*r-g*d*r+g*i*p-t*m*p-h*i*f+t*d*f)*C,e[6]=(g*c*r-a*m*r-g*i*l+t*m*l+a*i*f-t*c*f)*C,e[7]=(a*d*r-h*c*r+h*i*l-t*d*l-a*i*p+t*c*p)*C,e[8]=_*C,e[9]=(g*u*r-h*b*r-g*n*p+t*b*p+h*n*f-t*u*f)*C,e[10]=(a*b*r-g*o*r+g*n*l-t*b*l-a*n*f+t*o*f)*C,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*p-t*o*p)*C,e[12]=I*C,e[13]=(h*b*i-g*u*i+g*n*d-t*b*d-h*n*m+t*u*m)*C,e[14]=(g*o*i-a*b*i-g*n*c+t*b*c+a*n*m-t*o*m)*C,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*d+t*o*d)*C,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,p=r*h,g=r*u,b=a*h,m=a*u,f=o*u,y=c*l,v=c*h,_=c*u,I=n.x,A=n.y,C=n.z;return i[0]=(1-(b+f))*I,i[1]=(p+_)*I,i[2]=(g-v)*I,i[3]=0,i[4]=(p-_)*A,i[5]=(1-(d+f))*A,i[6]=(m+y)*A,i[7]=0,i[8]=(g+v)*C,i[9]=(m-y)*C,i[10]=(1-(d+b))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Is.set(i[0],i[1],i[2]).length(),a=Is.set(i[4],i[5],i[6]).length(),o=Is.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Gn.copy(this);let l=1/r,h=1/a,u=1/o;return Gn.elements[0]*=l,Gn.elements[1]*=l,Gn.elements[2]*=l,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=u,Gn.elements[9]*=u,Gn.elements[10]*=u,t.setFromRotationMatrix(Gn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=bi){let c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),p,g;if(o===bi)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ro)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=bi){let c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(a-r),d=(t+e)*l,p=(n+i)*h,g,b;if(o===bi)g=(a+r)*u,b=-2*u;else if(o===ro)g=r*u,b=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=b,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Is=new T,Gn=new Be,Rp=new T(0,0,0),Cp=new T(1,1,1),Ui=new T,Aa=new T,Mn=new T,Yh=new Be,Kh=new Tt,cn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kh.setFromEuler(this),this.setFromQuaternion(Kh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cn.DEFAULT_ORDER="XYZ";Kr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Pp=0,Zh=new T,Ds=new Tt,ui=new Be,Ra=new T,Cr=new T,Ip=new T,Dp=new Tt,Jh=new T(1,0,0),Qh=new T(0,1,0),$h=new T(0,0,1),eu={type:"added"},Lp={type:"removed"},Ls={type:"childadded",child:null},Sc={type:"childremoved",child:null},Ct=class s extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new T,t=new cn,n=new Tt,i=new T(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Be},normalMatrix:{value:new $e}}),this.matrix=new Be,this.matrixWorld=new Be,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(Jh,e)}rotateY(e){return this.rotateOnAxis(Qh,e)}rotateZ(e){return this.rotateOnAxis($h,e)}translateOnAxis(e,t){return Zh.copy(e).applyQuaternion(this.quaternion),this.position.add(Zh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jh,e)}translateY(e){return this.translateOnAxis(Qh,e)}translateZ(e){return this.translateOnAxis($h,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ra.copy(e):Ra.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(Cr,Ra,this.up):ui.lookAt(Ra,Cr,this.up),this.quaternion.setFromRotationMatrix(ui),i&&(ui.extractRotation(i.matrixWorld),Ds.setFromRotationMatrix(ui),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(eu),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lp),Sc.child=e,this.dispatchEvent(Sc),Sc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(eu),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,e,Ip),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,Dp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Ct.DEFAULT_UP=new T(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Wn=new T,di=new T,Ec=new T,fi=new T,Us=new T,Ns=new T,tu=new T,Tc=new T,wc=new T,Ac=new T,Rc=new ht,Cc=new ht,Pc=new ht,ki=class s{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Wn.subVectors(e,t),i.cross(Wn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Wn.subVectors(i,t),di.subVectors(n,t),Ec.subVectors(e,t);let a=Wn.dot(Wn),o=Wn.dot(di),c=Wn.dot(Ec),l=di.dot(di),h=di.dot(Ec),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,fi.x),c.addScaledVector(a,fi.y),c.addScaledVector(o,fi.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return Rc.setScalar(0),Cc.setScalar(0),Pc.setScalar(0),Rc.fromBufferAttribute(e,t),Cc.fromBufferAttribute(e,n),Pc.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Rc,r.x),a.addScaledVector(Cc,r.y),a.addScaledVector(Pc,r.z),a}static isFrontFacing(e,t,n,i){return Wn.subVectors(n,t),di.subVectors(e,t),Wn.cross(di).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Wn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Us.subVectors(i,n),Ns.subVectors(r,n),Tc.subVectors(e,n);let c=Us.dot(Tc),l=Ns.dot(Tc);if(c<=0&&l<=0)return t.copy(n);wc.subVectors(e,i);let h=Us.dot(wc),u=Ns.dot(wc);if(h>=0&&u<=h)return t.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Us,a);Ac.subVectors(e,r);let p=Us.dot(Ac),g=Ns.dot(Ac);if(g>=0&&p<=g)return t.copy(r);let b=p*l-c*g;if(b<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Ns,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return tu.subVectors(r,i),o=(u-h)/(u-h+(p-g)),t.copy(i).addScaledVector(tu,o);let f=1/(m+b+d);return a=b*f,o=d*f,t.copy(n).addScaledVector(Us,a).addScaledVector(Ns,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},md={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},Ca={h:0,s:0,l:0};ye=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=it.workingColorSpace){if(e=O0(e,1),t=kt(t,0,1),n=kt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ic(a,r,e+1/3),this.g=Ic(a,r,e),this.b=Ic(a,r,e-1/3)}return it.toWorkingColorSpace(this,i),this}setStyle(e,t=Et){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){let n=md[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return it.fromWorkingColorSpace($t.copy(this),e),Math.round(kt($t.r*255,0,255))*65536+Math.round(kt($t.g*255,0,255))*256+Math.round(kt($t.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace($t.copy(this),t);let n=$t.r,i=$t.g,r=$t.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Et){it.fromWorkingColorSpace($t.copy(this),e);let t=$t.r,n=$t.g,i=$t.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(Ca);let n=Vr(Ni.h,Ca.h,t),i=Vr(Ni.s,Ca.s,t),r=Vr(Ni.l,Ca.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$t=new ye;ye.NAMES=md;Up=0,ln=class extends ii{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=Yn(),this.name="",this.blending=Ks,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zc,this.blendDst=Jc,this.blendEquation=Cn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(n.blending=this.blending),this.side!==En&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zc&&(n.blendSrc=this.blendSrc),this.blendDst!==Jc&&(n.blendDst=this.blendDst),this.blendEquation!==Cn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},hn=class extends ln{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=td,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ot=new T,Pa=new ae,Rt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ll,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Pa.fromBufferAttribute(this,t),Pa.applyMatrix3(e),this.setXY(t,Pa.x,Pa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ll&&(e.usage=this.usage),e}},co=class extends Rt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},lo=class extends Rt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},st=class extends Rt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Np=0,Rn=new Be,Dc=new Ct,Os=new T,Sn=new Pn,Pr=new Pn,jt=new T,wt=class s extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pd(e)?lo:co)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $e().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,n){return Rn.makeTranslation(e,t,n),this.applyMatrix4(Rn),this}scale(e,t,n){return Rn.makeScale(e,t,n),this.applyMatrix4(Rn),this}lookAt(e){return Dc.lookAt(e),Dc.updateMatrix(),this.applyMatrix4(Dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new st(n,3))}else{for(let n=0,i=t.count;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){let n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Pr.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(Sn.min,Pr.min),Sn.expandByPoint(jt),jt.addVectors(Sn.max,Pr.max),Sn.expandByPoint(jt)):(Sn.expandByPoint(Pr.min),Sn.expandByPoint(Pr.max))}Sn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)jt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(jt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)jt.fromBufferAttribute(o,l),c&&(Os.fromBufferAttribute(e,l),jt.add(Os)),i=Math.max(i,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<n.count;D++)o[D]=new T,c[D]=new T;let l=new T,h=new T,u=new T,d=new ae,p=new ae,g=new ae,b=new T,m=new T;function f(D,E,M){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,D),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),p.sub(d),g.sub(d);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(b.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),o[D].add(b),o[E].add(b),o[M].add(b),c[D].add(m),c[E].add(m),c[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let D=0,E=y.length;D<E;++D){let M=y[D],P=M.start,z=M.count;for(let V=P,X=P+z;V<X;V+=3)f(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let v=new T,_=new T,I=new T,A=new T;function C(D){I.fromBufferAttribute(i,D),A.copy(I);let E=o[D];v.copy(E),v.sub(I.multiplyScalar(I.dot(E))).normalize(),_.crossVectors(A,E);let P=_.dot(c[D])<0?-1:1;a.setXYZW(D,v.x,v.y,v.z,P)}for(let D=0,E=y.length;D<E;++D){let M=y[D],P=M.start,z=M.count;for(let V=P,X=P+z;V<X;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new T,r=new T,a=new T,o=new T,c=new T,l=new T,h=new T,u=new T;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),b=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),p=0,g=0;for(let b=0,m=c.length;b<m;b++){o.isInterleavedBufferAttribute?p=c[b]*o.data.stride+o.offset:p=c[b]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new Rt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},nu=new Be,as=new xi,Ia=new Tn,iu=new T,Da=new T,La=new T,Ua=new T,Lc=new T,Na=new T,su=new T,Oa=new T,Lt=class extends Ct{constructor(e=new wt,t=new hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Na.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Lc.fromBufferAttribute(u,e),a?Na.addScaledVector(Lc,h):Na.addScaledVector(Lc.sub(t),h))}t.add(Na)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(r),as.copy(e.ray).recast(e.near),!(Ia.containsPoint(as.origin)===!1&&(as.intersectSphere(Ia,iu)===null||as.origin.distanceToSquared(iu)>(e.far-e.near)**2))&&(nu.copy(r).invert(),as.copy(e.ray).applyMatrix4(nu),!(n.boundingBox!==null&&as.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,as)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let m=d[g],f=a[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,I=v;_<I;_+=3){let A=o.getX(_),C=o.getX(_+1),D=o.getX(_+2);i=Fa(this,f,e,n,l,h,u,A,C,D),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let m=g,f=b;m<f;m+=3){let y=o.getX(m),v=o.getX(m+1),_=o.getX(m+2);i=Fa(this,a,e,n,l,h,u,y,v,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){let m=d[g],f=a[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,I=v;_<I;_+=3){let A=_,C=_+1,D=_+2;i=Fa(this,f,e,n,l,h,u,A,C,D),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,p.start),b=Math.min(c.count,p.start+p.count);for(let m=g,f=b;m<f;m+=3){let y=m,v=m+1,_=m+2;i=Fa(this,a,e,n,l,h,u,y,v,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};fs=class s extends wt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(u,2));function g(b,m,f,y,v,_,I,A,C,D,E){let M=_/C,P=I/D,z=_/2,V=I/2,X=A/2,te=C+1,q=D+1,ie=0,W=0,re=new T;for(let he=0;he<q;he++){let ve=he*P-V;for(let Ge=0;Ge<te;Ge++){let tt=Ge*M-z;re[b]=tt*y,re[m]=ve*v,re[f]=X,l.push(re.x,re.y,re.z),re[b]=0,re[m]=0,re[f]=A>0?1:-1,h.push(re.x,re.y,re.z),u.push(Ge/C),u.push(1-he/D),ie+=1}}for(let he=0;he<D;he++)for(let ve=0;ve<C;ve++){let Ge=d+ve+te*he,tt=d+ve+te*(he+1),K=d+(ve+1)+te*(he+1),ce=d+(ve+1)+te*he;c.push(Ge,tt,ce),c.push(tt,K,ce),W+=6}o.addGroup(p,W,E),p+=W,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};xn={clone:rr,merge:an},kp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yt=class extends ln{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kp,this.fragmentShader=Bp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.uniformsGroups=Fp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ho=class extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Be,this.projectionMatrix=new Be,this.projectionMatrixInverse=new Be,this.coordinateSystem=bi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Oi=new T,ru=new ae,au=new ae,Bt=class extends ho{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sr*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z)}getViewSize(e,t){return this.getViewBounds(e,ru,au),t.subVectors(au,ru)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Hr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Fs=-90,ks=1,Fl=class extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Bt(Fs,ks,e,t);i.layers=this.layers,this.add(i);let r=new Bt(Fs,ks,e,t);r.layers=this.layers,this.add(r);let a=new Bt(Fs,ks,e,t);a.layers=this.layers,this.add(a);let o=new Bt(Fs,ks,e,t);o.layers=this.layers,this.add(o);let c=new Bt(Fs,ks,e,t);c.layers=this.layers,this.add(c);let l=new Bt(Fs,ks,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===bi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ro)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},uo=class extends Yt{constructor(e,t,n,i,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:er,super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},kl=class extends Kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new uo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new fs(5,5,5),r=new yt({name:"CubemapFromEquirect",uniforms:rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:zt});r.uniforms.tEquirect.value=t;let a=new Lt(i,r),o=t.minFilter;return t.minFilter===ni&&(t.minFilter=mn),new Fl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},Uc=new T,zp=new T,Hp=new $e,Xn=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Uc.subVectors(n,t).cross(zp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Uc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Hp.getNormalMatrix(e),i=this.coplanarPoint(Uc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},os=new Tn,ka=new T,Zr=class{constructor(e=new Xn,t=new Xn,n=new Xn,i=new Xn,r=new Xn,a=new Xn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bi){let n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],b=i[10],m=i[11],f=i[12],y=i[13],v=i[14],_=i[15];if(n[0].setComponents(c-r,d-l,m-p,_-f).normalize(),n[1].setComponents(c+r,d+l,m+p,_+f).normalize(),n[2].setComponents(c+a,d+h,m+g,_+y).normalize(),n[3].setComponents(c-a,d-h,m-g,_-y).normalize(),n[4].setComponents(c-o,d-u,m-b,_-v).normalize(),t===bi)n[5].setComponents(c+o,d+u,m+b,_+v).normalize();else if(t===ro)n[5].setComponents(o,u,b,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){return os.center.set(0,0,0),os.radius=.7071067811865476,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(ka.x=i.normal.x>0?e.max.x:e.min.x,ka.y=i.normal.y>0?e.max.y:e.min.y,ka.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ka)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};si=class s extends wt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,p=[],g=[],b=[],m=[];for(let f=0;f<h;f++){let y=f*d-a;for(let v=0;v<l;v++){let _=v*u-r;g.push(_,-y,0),b.push(0,0,1),m.push(v/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let y=0;y<o;y++){let v=y+l*f,_=y+l*(f+1),I=y+1+l*(f+1),A=y+1+l*f;p.push(v,_,A),p.push(_,I,A)}this.setIndex(p),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(b,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Gp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Qp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$p=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,em=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,im=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,dm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_m=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xm="gl_FragColor = linearToOutputTexel( gl_FragColor );",vm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ym=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Mm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Em=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Am=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Im=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Um=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Nm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,km=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ym=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Km=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$m=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ng=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ig=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ag=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,og=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ug=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_g=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Eg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Tg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ag=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ig=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ug=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ng=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Og=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$g=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,n1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,i1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,o1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,l1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,h1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,f1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,b1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,v1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,y1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:Gp,alphahash_pars_fragment:Wp,alphamap_fragment:Xp,alphamap_pars_fragment:qp,alphatest_fragment:jp,alphatest_pars_fragment:Yp,aomap_fragment:Kp,aomap_pars_fragment:Zp,batching_pars_vertex:Jp,batching_vertex:Qp,begin_vertex:$p,beginnormal_vertex:em,bsdfs:tm,iridescence_fragment:nm,bumpmap_pars_fragment:im,clipping_planes_fragment:sm,clipping_planes_pars_fragment:rm,clipping_planes_pars_vertex:am,clipping_planes_vertex:om,color_fragment:cm,color_pars_fragment:lm,color_pars_vertex:hm,color_vertex:um,common:dm,cube_uv_reflection_fragment:fm,defaultnormal_vertex:pm,displacementmap_pars_vertex:mm,displacementmap_vertex:gm,emissivemap_fragment:bm,emissivemap_pars_fragment:_m,colorspace_fragment:xm,colorspace_pars_fragment:vm,envmap_fragment:ym,envmap_common_pars_fragment:Mm,envmap_pars_fragment:Sm,envmap_pars_vertex:Em,envmap_physical_pars_fragment:Nm,envmap_vertex:Tm,fog_vertex:wm,fog_pars_vertex:Am,fog_fragment:Rm,fog_pars_fragment:Cm,gradientmap_pars_fragment:Pm,lightmap_pars_fragment:Im,lights_lambert_fragment:Dm,lights_lambert_pars_fragment:Lm,lights_pars_begin:Um,lights_toon_fragment:Om,lights_toon_pars_fragment:Fm,lights_phong_fragment:km,lights_phong_pars_fragment:Bm,lights_physical_fragment:zm,lights_physical_pars_fragment:Hm,lights_fragment_begin:Vm,lights_fragment_maps:Gm,lights_fragment_end:Wm,logdepthbuf_fragment:Xm,logdepthbuf_pars_fragment:qm,logdepthbuf_pars_vertex:jm,logdepthbuf_vertex:Ym,map_fragment:Km,map_pars_fragment:Zm,map_particle_fragment:Jm,map_particle_pars_fragment:Qm,metalnessmap_fragment:$m,metalnessmap_pars_fragment:eg,morphinstance_vertex:tg,morphcolor_vertex:ng,morphnormal_vertex:ig,morphtarget_pars_vertex:sg,morphtarget_vertex:rg,normal_fragment_begin:ag,normal_fragment_maps:og,normal_pars_fragment:cg,normal_pars_vertex:lg,normal_vertex:hg,normalmap_pars_fragment:ug,clearcoat_normal_fragment_begin:dg,clearcoat_normal_fragment_maps:fg,clearcoat_pars_fragment:pg,iridescence_pars_fragment:mg,opaque_fragment:gg,packing:bg,premultiplied_alpha_fragment:_g,project_vertex:xg,dithering_fragment:vg,dithering_pars_fragment:yg,roughnessmap_fragment:Mg,roughnessmap_pars_fragment:Sg,shadowmap_pars_fragment:Eg,shadowmap_pars_vertex:Tg,shadowmap_vertex:wg,shadowmask_pars_fragment:Ag,skinbase_vertex:Rg,skinning_pars_vertex:Cg,skinning_vertex:Pg,skinnormal_vertex:Ig,specularmap_fragment:Dg,specularmap_pars_fragment:Lg,tonemapping_fragment:Ug,tonemapping_pars_fragment:Ng,transmission_fragment:Og,transmission_pars_fragment:Fg,uv_pars_fragment:kg,uv_pars_vertex:Bg,uv_vertex:zg,worldpos_vertex:Hg,background_vert:Vg,background_frag:Gg,backgroundCube_vert:Wg,backgroundCube_frag:Xg,cube_vert:qg,cube_frag:jg,depth_vert:Yg,depth_frag:Kg,distanceRGBA_vert:Zg,distanceRGBA_frag:Jg,equirect_vert:Qg,equirect_frag:$g,linedashed_vert:e1,linedashed_frag:t1,meshbasic_vert:n1,meshbasic_frag:i1,meshlambert_vert:s1,meshlambert_frag:r1,meshmatcap_vert:a1,meshmatcap_frag:o1,meshnormal_vert:c1,meshnormal_frag:l1,meshphong_vert:h1,meshphong_frag:u1,meshphysical_vert:d1,meshphysical_frag:f1,meshtoon_vert:p1,meshtoon_frag:m1,points_vert:g1,points_frag:b1,shadow_vert:_1,shadow_frag:x1,sprite_vert:v1,sprite_frag:y1},_e={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},ti={basic:{uniforms:an([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:an([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ye(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:an([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:an([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:an([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new ye(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:an([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:an([_e.points,_e.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:an([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:an([_e.common,_e.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:an([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:an([_e.sprite,_e.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:an([_e.common,_e.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:an([_e.lights,_e.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};ti.physical={uniforms:an([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};Ba={r:0,b:0,g:0},cs=new cn,M1=new Be;Wi=class extends ho{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ys=4,ou=[.125,.215,.35,.446,.526,.582],us=20,Nc=new Wi,cu=new ye,Oc=null,Fc=0,kc=0,Bc=!1,hs=(1+Math.sqrt(5))/2,Bs=1/hs,lu=[new T(-hs,Bs,0),new T(hs,Bs,0),new T(-Bs,0,hs),new T(Bs,0,hs),new T(0,hs,-Bs),new T(0,hs,Bs),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],fo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Oc=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oc,Fc,kc),this._renderer.xr.enabled=Bc,e.scissorTest=!1,za(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===er||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oc=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:_n,format:gn,colorSpace:tn,depthBuffer:!1},i=hu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=C1(r)),this._blurMaterial=P1(r,e,t)}return i}_compileMaterial(e){let t=new Lt(this._lodPlanes[0],e);this._renderer.compile(t,Nc)}_sceneToCubeUV(e,t,n,i){let o=new Bt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(cu),h.toneMapping=zi,h.autoClear=!1;let p=new hn({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new Lt(new fs,p),b=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,b=!0):(p.color.copy(cu),b=!0);for(let f=0;f<6;f++){let y=f%3;y===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):y===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));let v=this._cubeSize;za(i,y*v,f>2?v:0,v,v),h.setRenderTarget(i),b&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===er||e.mapping===tr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=du()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uu());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new Lt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;za(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Nc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=lu[(i-r-1)%lu.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Lt(this._lodPlanes[i],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*us-1),b=r/g,m=isFinite(r)?1+Math.floor(h*b):us;m>us&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${us}`);let f=[],y=0;for(let C=0;C<us;++C){let D=C/b,E=Math.exp(-D*D/2);f.push(E),C===0?y+=E:C<m&&(y+=2*E)}for(let C=0;C<f.length;C++)f[C]=f[C]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;let _=this._sizeLods[i],I=3*_*(i>v-Ys?i-v+Ys:0),A=4*(this._cubeSize-_);za(t,I,A,3*_,2*_),c.setRenderTarget(t),c.render(u,Nc)}};ar=class extends Yt{constructor(e,t,n,i,r,a,o,c,l,h=Zs){if(h!==Zs&&h!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Zs&&(n=ds),n===void 0&&h===Gi&&(n=Vi),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ht,this.minFilter=c!==void 0?c:Ht,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},_d=new Yt,fu=new ar(1,1),xd=new oo,vd=new Ol,yd=new uo,pu=[],mu=[],gu=new Float32Array(16),bu=new Float32Array(9),_u=new Float32Array(4);Bl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ib(t.type)}},zl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sb(t.type)}},Hl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},zc=/(\w+)(\])?(\[|\.)?/g;Qs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Eb(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};Tb=37297,wb=0;yu=new $e;Ha=new T;Nb=/^[ \t]*#include +<([\w\d./]+)>/gm;Ob=new Map;kb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;qb=0,Gl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Wl(e),t.set(e,n)),n}},Wl=class{constructor(e){this.id=qb++,this.code=e,this.usedTimes=0}};$b=0;Xl=class extends ln{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Kf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ql=class extends ln{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},i_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;a_={[Qc]:$c,[el]:il,[tl]:sl,[$s]:nl,[$c]:Qc,[il]:el,[sl]:tl,[nl]:$s};jl=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},bn=class extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}},u_={type:"move"},Gr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let b of e.hand.values()){let m=t.getJointPose(b,n),f=this._getHandJoint(l,b);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(u_)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new bn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},d_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Yl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new Yt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new yt({vertexShader:d_,fragmentShader:f_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Lt(new si(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Kl=class extends ii{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null,b=new Yl,m=t.getContextAttributes(),f=null,y=null,v=[],_=[],I=new ae,A=null,C=new Bt;C.viewport=new ht;let D=new Bt;D.viewport=new ht;let E=[C,D],M=new jl,P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ce=v[K];return ce===void 0&&(ce=new Gr,v[K]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(K){let ce=v[K];return ce===void 0&&(ce=new Gr,v[K]=ce),ce.getGripSpace()},this.getHand=function(K){let ce=v[K];return ce===void 0&&(ce=new Gr,v[K]=ce),ce.getHandSpace()};function V(K){let ce=_.indexOf(K.inputSource);if(ce===-1)return;let Te=v[ce];Te!==void 0&&(Te.update(K.inputSource,K.frame,l||a),Te.dispatchEvent({type:K.type,data:K.inputSource}))}function X(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",te);for(let K=0;K<v.length;K++){let ce=_[K];ce!==null&&(_[K]=null,v[K].disconnect(ce))}P=null,z=null,b.reset(),e.setRenderTarget(f),p=null,d=null,u=null,i=null,y=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",X),i.addEventListener("inputsourceschange",te),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(I),i.renderState.layers===void 0){let ce={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,ce),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Kt(p.framebufferWidth,p.framebufferHeight,{format:gn,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ce=null,Te=null,ue=null;m.depth&&(ue=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=m.stencil?Gi:Zs,Te=m.stencil?Vi:ds);let Ee={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Ee),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Kt(d.textureWidth,d.textureHeight,{format:gn,type:Kn,depthTexture:new ar(d.textureWidth,d.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),tt.setContext(i),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function te(K){for(let ce=0;ce<K.removed.length;ce++){let Te=K.removed[ce],ue=_.indexOf(Te);ue>=0&&(_[ue]=null,v[ue].disconnect(Te))}for(let ce=0;ce<K.added.length;ce++){let Te=K.added[ce],ue=_.indexOf(Te);if(ue===-1){for(let Oe=0;Oe<v.length;Oe++)if(Oe>=_.length){_.push(Te),ue=Oe;break}else if(_[Oe]===null){_[Oe]=Te,ue=Oe;break}if(ue===-1)break}let Ee=v[ue];Ee&&Ee.connect(Te)}}let q=new T,ie=new T;function W(K,ce,Te){q.setFromMatrixPosition(ce.matrixWorld),ie.setFromMatrixPosition(Te.matrixWorld);let ue=q.distanceTo(ie),Ee=ce.projectionMatrix.elements,Oe=Te.projectionMatrix.elements,He=Ee[14]/(Ee[10]-1),ut=Ee[14]/(Ee[10]+1),Xe=(Ee[9]+1)/Ee[5],dt=(Ee[9]-1)/Ee[5],F=(Ee[8]-1)/Ee[0],Nt=(Oe[8]+1)/Oe[0],je=He*F,Ze=He*Nt,Le=ue/(-F+Nt),at=Le*-F;if(ce.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(at),K.translateZ(Le),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ee[10]===-1)K.projectionMatrix.copy(ce.projectionMatrix),K.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{let Ue=He+Le,R=ut+Le,S=je-at,H=Ze+(ue-at),Z=Xe*ut/R*Ue,ee=dt*ut/R*Ue;K.projectionMatrix.makePerspective(S,H,Z,ee,Ue,R),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function re(K,ce){ce===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ce.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let ce=K.near,Te=K.far;b.texture!==null&&(b.depthNear>0&&(ce=b.depthNear),b.depthFar>0&&(Te=b.depthFar)),M.near=D.near=C.near=ce,M.far=D.far=C.far=Te,(P!==M.near||z!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,z=M.far),C.layers.mask=K.layers.mask|2,D.layers.mask=K.layers.mask|4,M.layers.mask=C.layers.mask|D.layers.mask;let ue=K.parent,Ee=M.cameras;re(M,ue);for(let Oe=0;Oe<Ee.length;Oe++)re(Ee[Oe],ue);Ee.length===2?W(M,C,D):M.projectionMatrix.copy(C.projectionMatrix),he(K,M,ue)};function he(K,ce,Te){Te===null?K.matrix.copy(ce.matrixWorld):(K.matrix.copy(Te.matrixWorld),K.matrix.invert(),K.matrix.multiply(ce.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ce.projectionMatrix),K.projectionMatrixInverse.copy(ce.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=sr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(M)};let ve=null;function Ge(K,ce){if(h=ce.getViewerPose(l||a),g=ce,h!==null){let Te=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let ue=!1;Te.length!==M.cameras.length&&(M.cameras.length=0,ue=!0);for(let Oe=0;Oe<Te.length;Oe++){let He=Te[Oe],ut=null;if(p!==null)ut=p.getViewport(He);else{let dt=u.getViewSubImage(d,He);ut=dt.viewport,Oe===0&&(e.setRenderTargetTextures(y,dt.colorTexture,d.ignoreDepthValues?void 0:dt.depthStencilTexture),e.setRenderTarget(y))}let Xe=E[Oe];Xe===void 0&&(Xe=new Bt,Xe.layers.enable(Oe),Xe.viewport=new ht,E[Oe]=Xe),Xe.matrix.fromArray(He.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(He.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(ut.x,ut.y,ut.width,ut.height),Oe===0&&(M.matrix.copy(Xe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ue===!0&&M.cameras.push(Xe)}let Ee=i.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")){let Oe=u.getDepthInformation(Te[0]);Oe&&Oe.isValid&&Oe.texture&&b.init(e,Oe,i.renderState)}}for(let Te=0;Te<v.length;Te++){let ue=_[Te],Ee=v[Te];ue!==null&&Ee!==void 0&&Ee.update(ue,ce,l||a)}ve&&ve(K,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),g=null}let tt=new bd;tt.setAnimationLoop(Ge),this.setAnimationLoop=function(K){ve=K},this.dispose=function(){}}},ls=new cn,p_=new Be;po=class{constructor(e={}){let{canvas:t=yp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),b=new Int32Array(4),m=null,f=null,y=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Et,this.toneMapping=zi,this.toneMappingExposure=1;let _=this,I=!1,A=0,C=0,D=null,E=-1,M=null,P=new ht,z=new ht,V=null,X=new ye(0),te=0,q=t.width,ie=t.height,W=1,re=null,he=null,ve=new ht(0,0,q,ie),Ge=new ht(0,0,q,ie),tt=!1,K=new Zr,ce=!1,Te=!1,ue=new Be,Ee=new Be,Oe=new T,He=new ht,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xe=!1;function dt(){return D===null?W:1}let F=n;function Nt(x,L){return t.getContext(x,L)}try{let x={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",ge,!1),F===null){let L="webgl2";if(F=Nt(L,x),F===null)throw Nt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let je,Ze,Le,at,Ue,R,S,H,Z,ee,j,Ce,fe,xe,Je,se,Me,Fe,ze,Se,nt,ke,ot,N;function pe(){je=new D1(F),je.init(),ke=new h_(F,je),Ze=new w1(F,je,e,ke),Le=new o_(F,je),Ze.reverseDepthBuffer&&d&&Le.buffers.depth.setReversed(!0),at=new N1(F),Ue=new Yb,R=new l_(F,je,Le,Ue,Ze,ke,at),S=new R1(_),H=new I1(_),Z=new Vp(F),ot=new E1(F,Z),ee=new L1(F,Z,at,ot),j=new F1(F,ee,Z,at),ze=new O1(F,Ze,R),se=new A1(Ue),Ce=new jb(_,S,H,je,Ze,ot,se),fe=new m_(_,Ue),xe=new Zb,Je=new n_(je),Fe=new S1(_,S,H,Le,j,p,c),Me=new r_(_,j,Ze),N=new g_(F,at,Ze,Le),Se=new T1(F,je,at),nt=new U1(F,je,at),at.programs=Ce.programs,_.capabilities=Ze,_.extensions=je,_.properties=Ue,_.renderLists=xe,_.shadowMap=Me,_.state=Le,_.info=at}pe();let G=new Kl(_,F);this.xr=G,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let x=je.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=je.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(x){x!==void 0&&(W=x,this.setSize(q,ie,!1))},this.getSize=function(x){return x.set(q,ie)},this.setSize=function(x,L,O=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=x,ie=L,t.width=Math.floor(x*W),t.height=Math.floor(L*W),O===!0&&(t.style.width=x+"px",t.style.height=L+"px"),this.setViewport(0,0,x,L)},this.getDrawingBufferSize=function(x){return x.set(q*W,ie*W).floor()},this.setDrawingBufferSize=function(x,L,O){q=x,ie=L,W=O,t.width=Math.floor(x*O),t.height=Math.floor(L*O),this.setViewport(0,0,x,L)},this.getCurrentViewport=function(x){return x.copy(P)},this.getViewport=function(x){return x.copy(ve)},this.setViewport=function(x,L,O,k){x.isVector4?ve.set(x.x,x.y,x.z,x.w):ve.set(x,L,O,k),Le.viewport(P.copy(ve).multiplyScalar(W).round())},this.getScissor=function(x){return x.copy(Ge)},this.setScissor=function(x,L,O,k){x.isVector4?Ge.set(x.x,x.y,x.z,x.w):Ge.set(x,L,O,k),Le.scissor(z.copy(Ge).multiplyScalar(W).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(x){Le.setScissorTest(tt=x)},this.setOpaqueSort=function(x){re=x},this.setTransparentSort=function(x){he=x},this.getClearColor=function(x){return x.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(x=!0,L=!0,O=!0){let k=0;if(x){let U=!1;if(D!==null){let oe=D.texture.format;U=oe===D0||oe===I0||oe===P0}if(U){let oe=D.texture.type,be=oe===Kn||oe===ds||oe===jr||oe===Vi||oe===A0||oe===R0,Pe=Fe.getClearColor(),Ie=Fe.getClearAlpha(),Re=Pe.r,we=Pe.g,le=Pe.b;be?(g[0]=Re,g[1]=we,g[2]=le,g[3]=Ie,F.clearBufferuiv(F.COLOR,0,g)):(b[0]=Re,b[1]=we,b[2]=le,b[3]=Ie,F.clearBufferiv(F.COLOR,0,b))}else k|=F.COLOR_BUFFER_BIT}L&&(k|=F.DEPTH_BUFFER_BIT),O&&(k|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),xe.dispose(),Je.dispose(),Ue.dispose(),S.dispose(),H.dispose(),j.dispose(),ot.dispose(),N.dispose(),Ce.dispose(),G.dispose(),G.removeEventListener("sessionstart",ns),G.removeEventListener("sessionend",Es),$n.stop()};function Q(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let x=at.autoReset,L=Me.enabled,O=Me.autoUpdate,k=Me.needsUpdate,U=Me.type;pe(),at.autoReset=x,Me.enabled=L,Me.autoUpdate=O,Me.needsUpdate=k,Me.type=U}function ge(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function We(x){let L=x.target;L.removeEventListener("dispose",We),Mt(L)}function Mt(x){It(x),Ue.remove(x)}function It(x){let L=Ue.get(x).programs;L!==void 0&&(L.forEach(function(O){Ce.releaseProgram(O)}),x.isShaderMaterial&&Ce.releaseShaderCache(x))}this.renderBufferDirect=function(x,L,O,k,U,oe){L===null&&(L=ut);let be=U.isMesh&&U.matrixWorld.determinant()<0,Pe=B(x,L,O,k,U);Le.setMaterial(k,be);let Ie=O.index,Re=1;if(k.wireframe===!0){if(Ie=ee.getWireframeAttribute(O),Ie===void 0)return;Re=2}let we=O.drawRange,le=O.attributes.position,Qe=we.start*Re,ft=(we.start+we.count)*Re;oe!==null&&(Qe=Math.max(Qe,oe.start*Re),ft=Math.min(ft,(oe.start+oe.count)*Re)),Ie!==null?(Qe=Math.max(Qe,0),ft=Math.min(ft,Ie.count)):le!=null&&(Qe=Math.max(Qe,0),ft=Math.min(ft,le.count));let ct=ft-Qe;if(ct<0||ct===1/0)return;ot.setup(U,k,Pe,O,Ie);let Ft,pt=Se;if(Ie!==null&&(Ft=Z.get(Ie),pt=nt,pt.setIndex(Ft)),U.isMesh)k.wireframe===!0?(Le.setLineWidth(k.wireframeLinewidth*dt()),pt.setMode(F.LINES)):pt.setMode(F.TRIANGLES);else if(U.isLine){let Ne=k.linewidth;Ne===void 0&&(Ne=1),Le.setLineWidth(Ne*dt()),U.isLineSegments?pt.setMode(F.LINES):U.isLineLoop?pt.setMode(F.LINE_LOOP):pt.setMode(F.LINE_STRIP)}else U.isPoints?pt.setMode(F.POINTS):U.isSprite&&pt.setMode(F.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)pt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))pt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Ne=U._multiDrawStarts,ci=U._multiDrawCounts,mt=U._multiDrawCount,Hn=Ie?Z.get(Ie).bytesPerElement:1,Ts=Ue.get(k).currentProgram.getUniforms();for(let yn=0;yn<mt;yn++)Ts.setValue(F,"_gl_DrawID",yn),pt.render(Ne[yn]/Hn,ci[yn])}else if(U.isInstancedMesh)pt.renderInstances(Qe,ct,U.count);else if(O.isInstancedBufferGeometry){let Ne=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,ci=Math.min(O.instanceCount,Ne);pt.renderInstances(Qe,ct,ci)}else pt.render(Qe,ct)};function lt(x,L,O){x.transparent===!0&&x.side===Ut&&x.forceSinglePass===!1?(x.side=en,x.needsUpdate=!0,Ri(x,L,O),x.side=En,x.needsUpdate=!0,Ri(x,L,O),x.side=Ut):Ri(x,L,O)}this.compile=function(x,L,O=null){O===null&&(O=x),f=Je.get(O),f.init(L),v.push(f),O.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),x!==O&&x.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();let k=new Set;return x.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let oe=U.material;if(oe)if(Array.isArray(oe))for(let be=0;be<oe.length;be++){let Pe=oe[be];lt(Pe,O,U),k.add(Pe)}else lt(oe,O,U),k.add(oe)}),v.pop(),f=null,k},this.compileAsync=function(x,L,O=null){let k=this.compile(x,L,O);return new Promise(U=>{function oe(){if(k.forEach(function(be){Ue.get(be).currentProgram.isReady()&&k.delete(be)}),k.size===0){U(x);return}setTimeout(oe,10)}je.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let pn=null;function zn(x){pn&&pn(x)}function ns(){$n.stop()}function Es(){$n.start()}let $n=new bd;$n.setAnimationLoop(zn),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(x){pn=x,G.setAnimationLoop(x),x===null?$n.stop():$n.start()},G.addEventListener("sessionstart",ns),G.addEventListener("sessionend",Es),this.render=function(x,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(L),L=G.getCamera()),x.isScene===!0&&x.onBeforeRender(_,x,L,D),f=Je.get(x,v.length),f.init(L),v.push(f),Ee.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),K.setFromProjectionMatrix(Ee),Te=this.localClippingEnabled,ce=se.init(this.clippingPlanes,Te),m=xe.get(x,y.length),m.init(),y.push(m),G.enabled===!0&&G.isPresenting===!0){let oe=_.xr.getDepthSensingMesh();oe!==null&&is(oe,L,-1/0,_.sortObjects)}is(x,L,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(re,he),Xe=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Xe&&Fe.addToRenderList(m,x),this.info.render.frame++,ce===!0&&se.beginShadows();let O=f.state.shadowsArray;Me.render(O,x,L),ce===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();let k=m.opaque,U=m.transmissive;if(f.setupLights(),L.isArrayCamera){let oe=L.cameras;if(U.length>0)for(let be=0,Pe=oe.length;be<Pe;be++){let Ie=oe[be];Sr(k,U,x,Ie)}Xe&&Fe.render(x);for(let be=0,Pe=oe.length;be<Pe;be++){let Ie=oe[be];va(m,x,Ie,Ie.viewport)}}else U.length>0&&Sr(k,U,x,L),Xe&&Fe.render(x),va(m,x,L);D!==null&&(R.updateMultisampleRenderTarget(D),R.updateRenderTargetMipmap(D)),x.isScene===!0&&x.onAfterRender(_,x,L),ot.resetDefaultState(),E=-1,M=null,v.pop(),v.length>0?(f=v[v.length-1],ce===!0&&se.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function is(x,L,O,k){if(x.visible===!1)return;if(x.layers.test(L.layers)){if(x.isGroup)O=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(L);else if(x.isLight)f.pushLight(x),x.castShadow&&f.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||K.intersectsSprite(x)){k&&He.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Ee);let be=j.update(x),Pe=x.material;Pe.visible&&m.push(x,be,Pe,O,He.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||K.intersectsObject(x))){let be=j.update(x),Pe=x.material;if(k&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),He.copy(x.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),He.copy(be.boundingSphere.center)),He.applyMatrix4(x.matrixWorld).applyMatrix4(Ee)),Array.isArray(Pe)){let Ie=be.groups;for(let Re=0,we=Ie.length;Re<we;Re++){let le=Ie[Re],Qe=Pe[le.materialIndex];Qe&&Qe.visible&&m.push(x,be,Qe,O,He.z,le)}}else Pe.visible&&m.push(x,be,Pe,O,He.z,null)}}let oe=x.children;for(let be=0,Pe=oe.length;be<Pe;be++)is(oe[be],L,O,k)}function va(x,L,O,k){let U=x.opaque,oe=x.transmissive,be=x.transparent;f.setupLightsView(O),ce===!0&&se.setGlobalState(_.clippingPlanes,O),k&&Le.viewport(P.copy(k)),U.length>0&&oi(U,L,O),oe.length>0&&oi(oe,L,O),be.length>0&&oi(be,L,O),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Sr(x,L,O,k){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[k.id]===void 0&&(f.state.transmissionRenderTarget[k.id]=new Kt(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?_n:Kn,minFilter:ni,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));let oe=f.state.transmissionRenderTarget[k.id],be=k.viewport||P;oe.setSize(be.z,be.w);let Pe=_.getRenderTarget();_.setRenderTarget(oe),_.getClearColor(X),te=_.getClearAlpha(),te<1&&_.setClearColor(16777215,.5),_.clear(),Xe&&Fe.render(O);let Ie=_.toneMapping;_.toneMapping=zi;let Re=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),f.setupLightsView(k),ce===!0&&se.setGlobalState(_.clippingPlanes,k),oi(x,O,k),R.updateMultisampleRenderTarget(oe),R.updateRenderTargetMipmap(oe),je.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let le=0,Qe=L.length;le<Qe;le++){let ft=L[le],ct=ft.object,Ft=ft.geometry,pt=ft.material,Ne=ft.group;if(pt.side===Ut&&ct.layers.test(k.layers)){let ci=pt.side;pt.side=en,pt.needsUpdate=!0,Er(ct,O,k,Ft,pt,Ne),pt.side=ci,pt.needsUpdate=!0,we=!0}}we===!0&&(R.updateMultisampleRenderTarget(oe),R.updateRenderTargetMipmap(oe))}_.setRenderTarget(Pe),_.setClearColor(X,te),Re!==void 0&&(k.viewport=Re),_.toneMapping=Ie}function oi(x,L,O){let k=L.isScene===!0?L.overrideMaterial:null;for(let U=0,oe=x.length;U<oe;U++){let be=x[U],Pe=be.object,Ie=be.geometry,Re=k===null?be.material:k,we=be.group;Pe.layers.test(O.layers)&&Er(Pe,L,O,Ie,Re,we)}}function Er(x,L,O,k,U,oe){x.onBeforeRender(_,L,O,k,U,oe),x.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),U.onBeforeRender(_,L,O,k,x,oe),U.transparent===!0&&U.side===Ut&&U.forceSinglePass===!1?(U.side=en,U.needsUpdate=!0,_.renderBufferDirect(O,L,k,U,x,oe),U.side=En,U.needsUpdate=!0,_.renderBufferDirect(O,L,k,U,x,oe),U.side=Ut):_.renderBufferDirect(O,L,k,U,x,oe),x.onAfterRender(_,L,O,k,U,oe)}function Ri(x,L,O){L.isScene!==!0&&(L=ut);let k=Ue.get(x),U=f.state.lights,oe=f.state.shadowsArray,be=U.state.version,Pe=Ce.getParameters(x,U.state,oe,L,O),Ie=Ce.getProgramCacheKey(Pe),Re=k.programs;k.environment=x.isMeshStandardMaterial?L.environment:null,k.fog=L.fog,k.envMap=(x.isMeshStandardMaterial?H:S).get(x.envMap||k.environment),k.envMapRotation=k.environment!==null&&x.envMap===null?L.environmentRotation:x.envMapRotation,Re===void 0&&(x.addEventListener("dispose",We),Re=new Map,k.programs=Re);let we=Re.get(Ie);if(we!==void 0){if(k.currentProgram===we&&k.lightsStateVersion===be)return w(x,Pe),we}else Pe.uniforms=Ce.getUniforms(x),x.onBeforeCompile(Pe,_),we=Ce.acquireProgram(Pe,Ie),Re.set(Ie,we),k.uniforms=Pe.uniforms;let le=k.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(le.clippingPlanes=se.uniform),w(x,Pe),k.needsLights=ne(x),k.lightsStateVersion=be,k.needsLights&&(le.ambientLightColor.value=U.state.ambient,le.lightProbe.value=U.state.probe,le.directionalLights.value=U.state.directional,le.directionalLightShadows.value=U.state.directionalShadow,le.spotLights.value=U.state.spot,le.spotLightShadows.value=U.state.spotShadow,le.rectAreaLights.value=U.state.rectArea,le.ltc_1.value=U.state.rectAreaLTC1,le.ltc_2.value=U.state.rectAreaLTC2,le.pointLights.value=U.state.point,le.pointLightShadows.value=U.state.pointShadow,le.hemisphereLights.value=U.state.hemi,le.directionalShadowMap.value=U.state.directionalShadowMap,le.directionalShadowMatrix.value=U.state.directionalShadowMatrix,le.spotShadowMap.value=U.state.spotShadowMap,le.spotLightMatrix.value=U.state.spotLightMatrix,le.spotLightMap.value=U.state.spotLightMap,le.pointShadowMap.value=U.state.pointShadowMap,le.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=we,k.uniformsList=null,we}function ya(x){if(x.uniformsList===null){let L=x.currentProgram.getUniforms();x.uniformsList=Qs.seqWithValue(L.seq,x.uniforms)}return x.uniformsList}function w(x,L){let O=Ue.get(x);O.outputColorSpace=L.outputColorSpace,O.batching=L.batching,O.batchingColor=L.batchingColor,O.instancing=L.instancing,O.instancingColor=L.instancingColor,O.instancingMorph=L.instancingMorph,O.skinning=L.skinning,O.morphTargets=L.morphTargets,O.morphNormals=L.morphNormals,O.morphColors=L.morphColors,O.morphTargetsCount=L.morphTargetsCount,O.numClippingPlanes=L.numClippingPlanes,O.numIntersection=L.numClipIntersection,O.vertexAlphas=L.vertexAlphas,O.vertexTangents=L.vertexTangents,O.toneMapping=L.toneMapping}function B(x,L,O,k,U){L.isScene!==!0&&(L=ut),R.resetTextureUnits();let oe=L.fog,be=k.isMeshStandardMaterial?L.environment:null,Pe=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:tn,Ie=(k.isMeshStandardMaterial?H:S).get(k.envMap||be),Re=k.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,we=!!O.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),le=!!O.morphAttributes.position,Qe=!!O.morphAttributes.normal,ft=!!O.morphAttributes.color,ct=zi;k.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ct=_.toneMapping);let Ft=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,pt=Ft!==void 0?Ft.length:0,Ne=Ue.get(k),ci=f.state.lights;if(ce===!0&&(Te===!0||x!==M)){let An=x===M&&k.id===E;se.setState(k,x,An)}let mt=!1;k.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==ci.state.version||Ne.outputColorSpace!==Pe||U.isBatchedMesh&&Ne.batching===!1||!U.isBatchedMesh&&Ne.batching===!0||U.isBatchedMesh&&Ne.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ne.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ne.instancing===!1||!U.isInstancedMesh&&Ne.instancing===!0||U.isSkinnedMesh&&Ne.skinning===!1||!U.isSkinnedMesh&&Ne.skinning===!0||U.isInstancedMesh&&Ne.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ne.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ne.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ne.instancingMorph===!1&&U.morphTexture!==null||Ne.envMap!==Ie||k.fog===!0&&Ne.fog!==oe||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==se.numPlanes||Ne.numIntersection!==se.numIntersection)||Ne.vertexAlphas!==Re||Ne.vertexTangents!==we||Ne.morphTargets!==le||Ne.morphNormals!==Qe||Ne.morphColors!==ft||Ne.toneMapping!==ct||Ne.morphTargetsCount!==pt)&&(mt=!0):(mt=!0,Ne.__version=k.version);let Hn=Ne.currentProgram;mt===!0&&(Hn=Ri(k,L,U));let Ts=!1,yn=!1,Tr=!1,St=Hn.getUniforms(),ei=Ne.uniforms;if(Le.useProgram(Hn.program)&&(Ts=!0,yn=!0,Tr=!0),k.id!==E&&(E=k.id,yn=!0),Ts||M!==x){Le.buffers.depth.getReversed()?(ue.copy(x.projectionMatrix),Sp(ue),Ep(ue),St.setValue(F,"projectionMatrix",ue)):St.setValue(F,"projectionMatrix",x.projectionMatrix),St.setValue(F,"viewMatrix",x.matrixWorldInverse);let Ci=St.map.cameraPosition;Ci!==void 0&&Ci.setValue(F,Oe.setFromMatrixPosition(x.matrixWorld)),Ze.logarithmicDepthBuffer&&St.setValue(F,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&St.setValue(F,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,yn=!0,Tr=!0)}if(U.isSkinnedMesh){St.setOptional(F,U,"bindMatrix"),St.setOptional(F,U,"bindMatrixInverse");let An=U.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),St.setValue(F,"boneTexture",An.boneTexture,R))}U.isBatchedMesh&&(St.setOptional(F,U,"batchingTexture"),St.setValue(F,"batchingTexture",U._matricesTexture,R),St.setOptional(F,U,"batchingIdTexture"),St.setValue(F,"batchingIdTexture",U._indirectTexture,R),St.setOptional(F,U,"batchingColorTexture"),U._colorsTexture!==null&&St.setValue(F,"batchingColorTexture",U._colorsTexture,R));let wr=O.morphAttributes;if((wr.position!==void 0||wr.normal!==void 0||wr.color!==void 0)&&ze.update(U,O,Hn),(yn||Ne.receiveShadow!==U.receiveShadow)&&(Ne.receiveShadow=U.receiveShadow,St.setValue(F,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(ei.envMap.value=Ie,ei.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&L.environment!==null&&(ei.envMapIntensity.value=L.environmentIntensity),yn&&(St.setValue(F,"toneMappingExposure",_.toneMappingExposure),Ne.needsLights&&Y(ei,Tr),oe&&k.fog===!0&&fe.refreshFogUniforms(ei,oe),fe.refreshMaterialUniforms(ei,k,W,ie,f.state.transmissionRenderTarget[x.id]),Qs.upload(F,ya(Ne),ei,R)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Qs.upload(F,ya(Ne),ei,R),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&St.setValue(F,"center",U.center),St.setValue(F,"modelViewMatrix",U.modelViewMatrix),St.setValue(F,"normalMatrix",U.normalMatrix),St.setValue(F,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let An=k.uniformsGroups;for(let Ci=0,Pi=An.length;Ci<Pi;Ci++){let Lh=An[Ci];N.update(Lh,Hn),N.bind(Lh,Hn)}}return Hn}function Y(x,L){x.ambientLightColor.needsUpdate=L,x.lightProbe.needsUpdate=L,x.directionalLights.needsUpdate=L,x.directionalLightShadows.needsUpdate=L,x.pointLights.needsUpdate=L,x.pointLightShadows.needsUpdate=L,x.spotLights.needsUpdate=L,x.spotLightShadows.needsUpdate=L,x.rectAreaLights.needsUpdate=L,x.hemisphereLights.needsUpdate=L}function ne(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(x,L,O){Ue.get(x.texture).__webglTexture=L,Ue.get(x.depthTexture).__webglTexture=O;let k=Ue.get(x);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=O===void 0,k.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,L){let O=Ue.get(x);O.__webglFramebuffer=L,O.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(x,L=0,O=0){D=x,A=L,C=O;let k=!0,U=null,oe=!1,be=!1;if(x){let Ie=Ue.get(x);if(Ie.__useDefaultFramebuffer!==void 0)Le.bindFramebuffer(F.FRAMEBUFFER,null),k=!1;else if(Ie.__webglFramebuffer===void 0)R.setupRenderTarget(x);else if(Ie.__hasExternalTextures)R.rebindTextures(x,Ue.get(x.texture).__webglTexture,Ue.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let le=x.depthTexture;if(Ie.__boundDepthTexture!==le){if(le!==null&&Ue.has(le)&&(x.width!==le.image.width||x.height!==le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(x)}}let Re=x.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(be=!0);let we=Ue.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(we[L])?U=we[L][O]:U=we[L],oe=!0):x.samples>0&&R.useMultisampledRTT(x)===!1?U=Ue.get(x).__webglMultisampledFramebuffer:Array.isArray(we)?U=we[O]:U=we,P.copy(x.viewport),z.copy(x.scissor),V=x.scissorTest}else P.copy(ve).multiplyScalar(W).floor(),z.copy(Ge).multiplyScalar(W).floor(),V=tt;if(Le.bindFramebuffer(F.FRAMEBUFFER,U)&&k&&Le.drawBuffers(x,U),Le.viewport(P),Le.scissor(z),Le.setScissorTest(V),oe){let Ie=Ue.get(x.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+L,Ie.__webglTexture,O)}else if(be){let Ie=Ue.get(x.texture),Re=L||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ie.__webglTexture,O||0,Re)}E=-1},this.readRenderTargetPixels=function(x,L,O,k,U,oe,be){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Ue.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&be!==void 0&&(Pe=Pe[be]),Pe){Le.bindFramebuffer(F.FRAMEBUFFER,Pe);try{let Ie=x.texture,Re=Ie.format,we=Ie.type;if(!Ze.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=x.width-k&&O>=0&&O<=x.height-U&&F.readPixels(L,O,k,U,ke.convert(Re),ke.convert(we),oe)}finally{let Ie=D!==null?Ue.get(D).__webglFramebuffer:null;Le.bindFramebuffer(F.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(x,L,O,k,U,oe,be){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Ue.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&be!==void 0&&(Pe=Pe[be]),Pe){let Ie=x.texture,Re=Ie.format,we=Ie.type;if(!Ze.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=x.width-k&&O>=0&&O<=x.height-U){Le.bindFramebuffer(F.FRAMEBUFFER,Pe);let le=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,le),F.bufferData(F.PIXEL_PACK_BUFFER,oe.byteLength,F.STREAM_READ),F.readPixels(L,O,k,U,ke.convert(Re),ke.convert(we),0);let Qe=D!==null?Ue.get(D).__webglFramebuffer:null;Le.bindFramebuffer(F.FRAMEBUFFER,Qe);let ft=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Mp(F,ft,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,le),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,oe),F.deleteBuffer(le),F.deleteSync(ft),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,L=null,O=0){x.isTexture!==!0&&(kr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,x=arguments[1]);let k=Math.pow(2,-O),U=Math.floor(x.image.width*k),oe=Math.floor(x.image.height*k),be=L!==null?L.x:0,Pe=L!==null?L.y:0;R.setTexture2D(x,0),F.copyTexSubImage2D(F.TEXTURE_2D,O,0,0,be,Pe,U,oe),Le.unbindTexture()},this.copyTextureToTexture=function(x,L,O=null,k=null,U=0){x.isTexture!==!0&&(kr("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,x=arguments[1],L=arguments[2],U=arguments[3]||0,O=null);let oe,be,Pe,Ie,Re,we,le,Qe,ft,ct=x.isCompressedTexture?x.mipmaps[U]:x.image;O!==null?(oe=O.max.x-O.min.x,be=O.max.y-O.min.y,Pe=O.isBox3?O.max.z-O.min.z:1,Ie=O.min.x,Re=O.min.y,we=O.isBox3?O.min.z:0):(oe=ct.width,be=ct.height,Pe=ct.depth||1,Ie=0,Re=0,we=0),k!==null?(le=k.x,Qe=k.y,ft=k.z):(le=0,Qe=0,ft=0);let Ft=ke.convert(L.format),pt=ke.convert(L.type),Ne;L.isData3DTexture?(R.setTexture3D(L,0),Ne=F.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(R.setTexture2DArray(L,0),Ne=F.TEXTURE_2D_ARRAY):(R.setTexture2D(L,0),Ne=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,L.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,L.unpackAlignment);let ci=F.getParameter(F.UNPACK_ROW_LENGTH),mt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Hn=F.getParameter(F.UNPACK_SKIP_PIXELS),Ts=F.getParameter(F.UNPACK_SKIP_ROWS),yn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ct.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ct.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ie),F.pixelStorei(F.UNPACK_SKIP_ROWS,Re),F.pixelStorei(F.UNPACK_SKIP_IMAGES,we);let Tr=x.isDataArrayTexture||x.isData3DTexture,St=L.isDataArrayTexture||L.isData3DTexture;if(x.isRenderTargetTexture||x.isDepthTexture){let ei=Ue.get(x),wr=Ue.get(L),An=Ue.get(ei.__renderTarget),Ci=Ue.get(wr.__renderTarget);Le.bindFramebuffer(F.READ_FRAMEBUFFER,An.__webglFramebuffer),Le.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let Pi=0;Pi<Pe;Pi++)Tr&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ue.get(x).__webglTexture,U,we+Pi),x.isDepthTexture?(St&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ue.get(L).__webglTexture,U,ft+Pi),F.blitFramebuffer(Ie,Re,oe,be,le,Qe,oe,be,F.DEPTH_BUFFER_BIT,F.NEAREST)):St?F.copyTexSubImage3D(Ne,U,le,Qe,ft+Pi,Ie,Re,oe,be):F.copyTexSubImage2D(Ne,U,le,Qe,ft+Pi,Ie,Re,oe,be);Le.bindFramebuffer(F.READ_FRAMEBUFFER,null),Le.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else St?x.isDataTexture||x.isData3DTexture?F.texSubImage3D(Ne,U,le,Qe,ft,oe,be,Pe,Ft,pt,ct.data):L.isCompressedArrayTexture?F.compressedTexSubImage3D(Ne,U,le,Qe,ft,oe,be,Pe,Ft,ct.data):F.texSubImage3D(Ne,U,le,Qe,ft,oe,be,Pe,Ft,pt,ct):x.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,U,le,Qe,oe,be,Ft,pt,ct.data):x.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,U,le,Qe,ct.width,ct.height,Ft,ct.data):F.texSubImage2D(F.TEXTURE_2D,U,le,Qe,oe,be,Ft,pt,ct);F.pixelStorei(F.UNPACK_ROW_LENGTH,ci),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,mt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Hn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ts),F.pixelStorei(F.UNPACK_SKIP_IMAGES,yn),U===0&&L.generateMipmaps&&F.generateMipmap(Ne),Le.unbindTexture()},this.copyTextureToTexture3D=function(x,L,O=null,k=null,U=0){return x.isTexture!==!0&&(kr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,k=arguments[1]||null,x=arguments[2],L=arguments[3],U=arguments[4]||0),kr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,L,O,k,U)},this.initRenderTarget=function(x){Ue.get(x).__webglFramebuffer===void 0&&R.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?R.setTextureCube(x,0):x.isData3DTexture?R.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?R.setTexture2DArray(x,0):R.setTexture2D(x,0),Le.unbindTexture()},this.resetState=function(){A=0,C=0,D=null,Le.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}},mo=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ye(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},go=class extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},or=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ll,this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},rn=new T,ps=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=qn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Rt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Jr=class extends ln{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ir=new T,Hs=new T,Vs=new T,Gs=new ae,Dr=new ae,Md=new Be,Va=new T,Lr=new T,Ga=new T,Iu=new ae,Hc=new ae,Du=new ae,Qr=class extends Ct{constructor(e=new Jr){if(super(),this.isSprite=!0,this.type="Sprite",zs===void 0){zs=new wt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new or(t,5);zs.setIndex([0,1,2,0,2,3]),zs.setAttribute("position",new ps(n,3,0,!1)),zs.setAttribute("uv",new ps(n,2,3,!1))}this.geometry=zs,this.material=e,this.center=new ae(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hs.setFromMatrixScale(this.matrixWorld),Md.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Vs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hs.multiplyScalar(-Vs.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Wa(Va.set(-.5,-.5,0),Vs,a,Hs,i,r),Wa(Lr.set(.5,-.5,0),Vs,a,Hs,i,r),Wa(Ga.set(.5,.5,0),Vs,a,Hs,i,r),Iu.set(0,0),Hc.set(1,0),Du.set(1,1);let o=e.ray.intersectTriangle(Va,Lr,Ga,!1,Ir);if(o===null&&(Wa(Lr.set(-.5,.5,0),Vs,a,Hs,i,r),Hc.set(0,1),o=e.ray.intersectTriangle(Va,Ga,Lr,!1,Ir),o===null))return;let c=e.ray.origin.distanceTo(Ir);c<e.near||c>e.far||t.push({distance:c,point:Ir.clone(),uv:ki.getInterpolation(Ir,Va,Lr,Ga,Iu,Hc,Du,new ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};Lu=new T,Uu=new ht,Nu=new ht,b_=new T,Ou=new Be,Xa=new T,Vc=new Tn,Fu=new Be,Gc=new xi,bo=class extends Lt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Fh,this.bindMatrix=new Be,this.bindMatrixInverse=new Be,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Pn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xa),this.boundingBox.expandByPoint(Xa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Tn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xa),this.boundingSphere.expandByPoint(Xa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vc.copy(this.boundingSphere),Vc.applyMatrix4(i),e.ray.intersectsSphere(Vc)!==!1&&(Fu.copy(i).invert(),Gc.copy(e.ray).applyMatrix4(Fu),!(this.boundingBox!==null&&Gc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Gc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ht,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Fh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Xf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Uu.fromBufferAttribute(i.attributes.skinIndex,e),Nu.fromBufferAttribute(i.attributes.skinWeight,e),Lu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Nu.getComponent(r);if(a!==0){let o=Uu.getComponent(r);Ou.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(b_.copy(Lu).applyMatrix4(Ou),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},$r=class extends Ct{constructor(){super(),this.isBone=!0,this.type="Bone"}},Xi=class extends Yt{constructor(e=null,t=1,n=1,i,r,a,o,c,l=Ht,h=Ht,u,d){super(null,a,o,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ku=new Be,__=new Be,_o=class s{constructor(e=[],t=[]){this.uuid=Yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Be)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Be;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:__;ku.multiplyMatrices(o,t[r]),ku.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Xi(t,e,e,gn,jn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new $r),this.bones.push(a),this.boneInverses.push(new Be().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},ms=class extends Rt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ws=new Be,Bu=new Be,qa=[],zu=new Pn,x_=new Be,Ur=new Lt,Nr=new Tn,In=class extends Lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ms(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,x_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ws),zu.copy(e.boundingBox).applyMatrix4(Ws),this.boundingBox.union(zu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ws),Nr.copy(e.boundingSphere).applyMatrix4(Ws),this.boundingSphere.union(Nr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Ur.geometry=this.geometry,Ur.material=this.material,Ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nr.copy(this.boundingSphere),Nr.applyMatrix4(n),e.ray.intersectsSphere(Nr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ws),Bu.multiplyMatrices(n,Ws),Ur.matrixWorld=Bu,Ur.raycast(e,qa);for(let a=0,o=qa.length;a<o;a++){let c=qa[a];c.instanceId=r,c.object=this,t.push(c)}qa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ms(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xi(new Float32Array(i*this.count),i,this.count,C0,jn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},ea=class extends ln{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},xo=new T,vo=new T,Hu=new Be,Or=new xi,ja=new Tn,Wc=new T,Vu=new T,cr=class extends Ct{constructor(e=new wt,t=new ea){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)xo.fromBufferAttribute(t,i-1),vo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=xo.distanceTo(vo);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(i),ja.radius+=r,e.ray.intersectsSphere(ja)===!1)return;Hu.copy(i).invert(),Or.copy(e.ray).applyMatrix4(Hu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let b=p,m=g-1;b<m;b+=l){let f=h.getX(b),y=h.getX(b+1),v=Ya(this,e,Or,c,f,y);v&&t.push(v)}if(this.isLineLoop){let b=h.getX(g-1),m=h.getX(p),f=Ya(this,e,Or,c,b,m);f&&t.push(f)}}else{let p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let b=p,m=g-1;b<m;b+=l){let f=Ya(this,e,Or,c,b,b+1);f&&t.push(f)}if(this.isLineLoop){let b=Ya(this,e,Or,c,g-1,p);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};Gu=new T,Wu=new T,yo=class extends cr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Gu.fromBufferAttribute(t,i),Wu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Gu.distanceTo(Wu);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Mo=class extends cr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},qi=class extends ln{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xu=new Be,Zl=new xi,Ka=new Tn,Za=new T,gs=class extends Ct{constructor(e=new wt,t=new qi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ka.copy(n.boundingSphere),Ka.applyMatrix4(i),Ka.radius+=r,e.ray.intersectsSphere(Ka)===!1)return;Xu.copy(i).invert(),Zl.copy(e.ray).applyMatrix4(Xu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=d,b=p;g<b;g++){let m=l.getX(g);Za.fromBufferAttribute(u,m),qu(Za,m,c,i,e,t,this)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,b=p;g<b;g++)Za.fromBufferAttribute(u,g),qu(Za,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};bs=class extends Yt{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);let h=n[i],d=n[i+1]-h,p=(a-h)/d;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),c=t||(a.isVector2?new ae:new T);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new T,i=[],r=[],a=[],o=new T,c=new Be;for(let p=0;p<=e;p++){let g=p/e;i[p]=this.getTangentAt(g,new T)}r[0]=new T,a[0]=new T;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(kt(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(kt(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],p*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},So=class extends Zn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ae){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Jl=class extends So{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};Ja=new T,Xc=new k0,qc=new k0,jc=new k0,lr=class extends Zn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new T){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(Ja.subVectors(i[0],i[1]).add(i[0]),l=Ja);let u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Ja.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ja),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),p),b=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);b<1e-4&&(b=1),g<1e-4&&(g=b),m<1e-4&&(m=b),Xc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,b,m),qc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,b,m),jc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,b,m)}else this.curveType==="catmullrom"&&(Xc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),qc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),jc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Xc.calc(c),qc.calc(c),jc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new T().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};Ql=class extends Zn{constructor(e=new ae,t=new ae,n=new ae,i=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ae){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Xr(e,i.x,r.x,a.x,o.x),Xr(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$l=class extends Zn{constructor(e=new T,t=new T,n=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new T){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Xr(e,i.x,r.x,a.x,o.x),Xr(e,i.y,r.y,a.y,o.y),Xr(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},e0=class extends Zn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},t0=class extends Zn{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},n0=class extends Zn{constructor(e=new ae,t=new ae,n=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ae){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Wr(e,i.x,r.x,a.x),Wr(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Eo=class extends Zn{constructor(e=new T,t=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new T){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Wr(e,i.x,r.x,a.x),Wr(e,i.y,r.y,a.y),Wr(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},i0=class extends Zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(ju(o,c.x,l.x,h.x,u.x),ju(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ae().fromArray(i))}return this}},A_=Object.freeze({__proto__:null,ArcCurve:Jl,CatmullRomCurve3:lr,CubicBezierCurve:Ql,CubicBezierCurve3:$l,EllipseCurve:So,LineCurve:e0,LineCurve3:t0,QuadraticBezierCurve:n0,QuadraticBezierCurve3:Eo,SplineCurve:i0}),hr=class s extends wt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new T,h=new ae;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*i;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(o,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ye=class s extends wt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,b=[],m=n/2,f=0;y(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new st(u,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(p,2));function y(){let _=new T,I=new T,A=0,C=(t-e)/n;for(let D=0;D<=r;D++){let E=[],M=D/r,P=M*(t-e)+e;for(let z=0;z<=i;z++){let V=z/i,X=V*c+o,te=Math.sin(X),q=Math.cos(X);I.x=P*te,I.y=-M*n+m,I.z=P*q,u.push(I.x,I.y,I.z),_.set(te,C,q).normalize(),d.push(_.x,_.y,_.z),p.push(V,1-M),E.push(g++)}b.push(E)}for(let D=0;D<i;D++)for(let E=0;E<r;E++){let M=b[E][D],P=b[E+1][D],z=b[E+1][D+1],V=b[E][D+1];(e>0||E!==0)&&(h.push(M,P,V),A+=3),(t>0||E!==r-1)&&(h.push(P,z,V),A+=3)}l.addGroup(f,A,0),f+=A}function v(_){let I=g,A=new ae,C=new T,D=0,E=_===!0?e:t,M=_===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;let P=g;for(let z=0;z<=i;z++){let X=z/i*c+o,te=Math.cos(X),q=Math.sin(X);C.x=E*q,C.y=m*M,C.z=E*te,u.push(C.x,C.y,C.z),d.push(0,M,0),A.x=te*.5+.5,A.y=q*.5*M+.5,p.push(A.x,A.y),g++}for(let z=0;z<i;z++){let V=I+z,X=P+z;_===!0?h.push(X,X+1,V):h.push(X+1,X,V),D+=3}l.addGroup(f,D,_===!0?1:2),f+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ta=class s extends Ye{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},s0=class s extends wt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new st(r,3)),this.setAttribute("normal",new st(r.slice(),3)),this.setAttribute("uv",new st(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let v=new T,_=new T,I=new T;for(let A=0;A<t.length;A+=3)p(t[A+0],v),p(t[A+1],_),p(t[A+2],I),c(v,_,I,y)}function c(y,v,_,I){let A=I+1,C=[];for(let D=0;D<=A;D++){C[D]=[];let E=y.clone().lerp(_,D/A),M=v.clone().lerp(_,D/A),P=A-D;for(let z=0;z<=P;z++)z===0&&D===A?C[D][z]=E:C[D][z]=E.clone().lerp(M,z/P)}for(let D=0;D<A;D++)for(let E=0;E<2*(A-D)-1;E++){let M=Math.floor(E/2);E%2===0?(d(C[D][M+1]),d(C[D+1][M]),d(C[D][M])):(d(C[D][M+1]),d(C[D+1][M+1]),d(C[D+1][M]))}}function l(y){let v=new T;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(y),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function h(){let y=new T;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];let _=m(y)/2/Math.PI+.5,I=f(y)/Math.PI+.5;a.push(_,1-I)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){let v=a[y+0],_=a[y+2],I=a[y+4],A=Math.max(v,_,I),C=Math.min(v,_,I);A>.9&&C<.1&&(v<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),I<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function p(y,v){let _=y*3;v.x=e[_+0],v.y=e[_+1],v.z=e[_+2]}function g(){let y=new T,v=new T,_=new T,I=new T,A=new ae,C=new ae,D=new ae;for(let E=0,M=0;E<r.length;E+=9,M+=6){y.set(r[E+0],r[E+1],r[E+2]),v.set(r[E+3],r[E+4],r[E+5]),_.set(r[E+6],r[E+7],r[E+8]),A.set(a[M+0],a[M+1]),C.set(a[M+2],a[M+3]),D.set(a[M+4],a[M+5]),I.copy(y).add(v).add(_).divideScalar(3);let P=m(I);b(A,M+0,y,P),b(C,M+2,v,P),b(D,M+4,_,P)}}function b(y,v,_,I){I<0&&y.x===1&&(a[v]=y.x-1),_.x===0&&_.z===0&&(a[v]=I/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}},na=class s extends s0{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Wt=class s extends wt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new T,d=new T,p=[],g=[],b=[],m=[];for(let f=0;f<=n;f++){let y=[],v=f/n,_=0;f===0&&a===0?_=.5/t:f===n&&c===Math.PI&&(_=-.5/t);for(let I=0;I<=t;I++){let A=I/t;u.x=-e*Math.cos(i+A*r)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(i+A*r)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),m.push(A+_,1-v),y.push(l++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<t;y++){let v=h[f][y+1],_=h[f][y],I=h[f+1][y],A=h[f+1][y+1];(f!==0||a>0)&&p.push(v,_,A),(f!==n-1||c<Math.PI)&&p.push(_,I,A)}this.setIndex(p),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(b,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},ia=class s extends wt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],c=[],l=[],h=new T,u=new T,d=new T;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){let b=g/i*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(b),u.y=(e+t*Math.cos(m))*Math.sin(b),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(b),h.y=e*Math.sin(b),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){let b=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,y=(i+1)*p+g;a.push(b,m,y),a.push(m,f,y)}this.setIndex(a),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},To=class s extends wt{constructor(e=new Eo(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new T,c=new T,l=new ae,h=new T,u=[],d=[],p=[],g=[];b(),this.setIndex(g),this.setAttribute("position",new st(u,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(p,2));function b(){for(let v=0;v<t;v++)m(v);m(r===!1?t:0),y(),f()}function m(v){h=e.getPointAt(v/t,h);let _=a.normals[v],I=a.binormals[v];for(let A=0;A<=i;A++){let C=A/i*Math.PI*2,D=Math.sin(C),E=-Math.cos(C);c.x=E*_.x+D*I.x,c.y=E*_.y+D*I.y,c.z=E*_.z+D*I.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function f(){for(let v=1;v<=t;v++)for(let _=1;_<=i;_++){let I=(i+1)*(v-1)+(_-1),A=(i+1)*v+(_-1),C=(i+1)*v+_,D=(i+1)*(v-1)+_;g.push(I,A,D),g.push(A,C,D)}}function y(){for(let v=0;v<=t;v++)for(let _=0;_<=i;_++)l.x=v/t,l.y=_/i,p.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new A_[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},wo=class extends yt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},Xt=class extends ln{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=N0,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},wn=class extends Xt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Ao=class extends ln{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=N0,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};ji=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},r0=class extends ji{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qs,endingEnd:qs}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case js:r=e,o=2*t-n;break;case so:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case js:a=e,c=2*n-t;break;case so:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),b=g*g,m=b*g,f=-d*m+2*d*b-d*g,y=(1+d)*m+(-1.5-2*d)*b+(-.5+d)*g+1,v=(-1-p)*m+(1.5+p)*b+.5*g,_=p*m-p*b;for(let I=0;I!==o;++I)r[I]=f*a[h+I]+y*a[l+I]+v*a[c+I]+_*a[u+I];return r}},Ro=class extends ji{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},a0=class extends ji{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Dn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qa(t,this.TimeBufferType),this.values=Qa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qa(e.times,Array),values:Qa(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new a0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ro(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new r0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case nr:t=this.InterpolantFactoryMethodDiscrete;break;case ir:t=this.InterpolantFactoryMethodLinear;break;case pc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nr;case this.InterpolantFactoryMethodLinear:return ir;case this.InterpolantFactoryMethodSmooth:return pc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&R_(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===pc,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{let u=o*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let b=t[u+g];if(b!==t[d+g]||b!==t[p+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=ir;Yi=class extends Dn{constructor(e,t,n){super(e,t,n)}};Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=nr;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;Co=class extends Dn{};Co.prototype.ValueTypeName="color";vi=class extends Dn{};vi.prototype.ValueTypeName="number";o0=class extends ji{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)Tt.slerpFlat(r,0,a,l-o,a,l,c);return r}},yi=class extends Dn{InterpolantFactoryMethodLinear(e){return new o0(this.times,this.values,this.getValueSize(),e)}};yi.prototype.ValueTypeName="quaternion";yi.prototype.InterpolantFactoryMethodSmooth=void 0;Ki=class extends Dn{constructor(e,t,n){super(e,t,n)}};Ki.prototype.ValueTypeName="string";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=nr;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;Mi=class extends Dn{};Mi.prototype.ValueTypeName="vector";ur=class{constructor(e="",t=-1,n=[],i=U0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Yn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(I_(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Dn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=C_(c);c=Yu(c,1,h),l=Yu(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new vi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,p,g,b){if(p.length!==0){let m=[],f=[];Sd(p,m,f,g),m.length!==0&&b.push(new u(d,m,f))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let p={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let b=0;b<d[g].morphTargets.length;b++)p[d[g].morphTargets[b]]=-1;for(let b in p){let m=[],f=[];for(let y=0;y!==d[g].morphTargets.length;++y){let v=d[g];m.push(v.time),f.push(v.morphTarget===b?1:0)}i.push(new vi(".morphTargetInfluence["+b+"]",m,f))}c=p.length*a}else{let p=".bones["+t[u].name+"]";n(Mi,p+".position",d,"pos",i),n(yi,p+".quaternion",d,"rot",i),n(Mi,p+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};Bi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},c0=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},D_=new c0,Si=class{constructor(e){this.manager=e!==void 0?e:D_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Si.DEFAULT_MATERIAL_NAME="__DEFAULT";pi={},l0=class extends Error{constructor(e,t){super(e),this.response=t}},sa=class extends Si{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Bi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(pi[e]!==void 0){pi[e].push({onLoad:t,onProgress:n,onError:i});return}pi[e]=[],pi[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=pi[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0,b=0,m=new ReadableStream({start(f){y();function y(){u.read().then(({done:v,value:_})=>{if(v)f.close();else{b+=_.byteLength;let I=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:p});for(let A=0,C=h.length;A<C;A++){let D=h[A];D.onProgress&&D.onProgress(I)}f.enqueue(_),y()}},v=>{f.error(v)})}}});return new Response(m)}else throw new l0(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{Bi.add(e,l);let h=pi[e];delete pi[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=pi[e];if(h===void 0)throw this.manager.itemError(e),l;delete pi[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},h0=class extends Si{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Bi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Yr("img");function c(){h(),Bi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}},dr=class extends Si{constructor(e){super(e)}load(e,t,n,i){let r=new Yt,a=new h0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},fr=class extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Po=class extends fr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Yc=new Be,Ku=new T,Zu=new T,ra=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zr,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ku.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ku),Zu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zu),t.updateMatrixWorld(),Yc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Yc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},u0=class extends ra{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=sr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Io=class extends fr{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new u0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ju=new Be,Fr=new T,Kc=new T,d0=class extends ra{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Fr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Fr),Kc.copy(n.position),Kc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Kc),n.updateMatrixWorld(),i.makeTranslation(-Fr.x,-Fr.y,-Fr.z),Ju.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ju)}},Ln=class extends fr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new d0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},f0=class extends ra{constructor(){super(new Wi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},pr=class extends fr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new f0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Zi=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Do=class extends Si{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Bi.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Bi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Bi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Bi.add(e,c),r.manager.itemStart(e)}},mr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Qu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};p0=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Tt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let a=this._workIndex*r;Tt.multiplyQuaternionsFlat(e,a,e,t,e,n),Tt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},B0="\\[\\]\\.:\\/",L_=new RegExp("["+B0+"]","g"),z0="[^"+B0+"]",U_="[^"+B0.replace("\\.","")+"]",N_=/((?:WC+[\/:])*)/.source.replace("WC",z0),O_=/(WCOD+)?/.source.replace("WCOD",U_),F_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",z0),k_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",z0),B_=new RegExp("^"+N_+O_+F_+k_+"$"),z_=["material","materials","bones","map"],m0=class{constructor(e,t,n){let i=n||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},vt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(L_,"")}static parseTrackName(e){let t=B_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);z_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vt.Composite=m0;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];g0=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,a=r.length,o=new Array(a),c={endingStart:qs,endingEnd:qs};for(let l=0;l!==a;++l){let h=r[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=L0,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Yf:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case U0:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,a=n===jf;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===qf){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=js,i.endingEnd=js):(e?i.endingStart=this.zeroSlopeAtStart?js:qs:i.endingStart=so,t?i.endingEnd=this.zeroSlopeAtEnd?js:qs:i.endingEnd=so)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}},H_=new Float32Array(1),Lo=class extends ii{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let d=i[u],p=d.name,g=h[p];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,p));continue}let b=t&&t._propertyBindings[u].binding.parsedPath;g=new p0(vt.create(n,p,b),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,p),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Ro(new Float32Array(2),new Float32Array(2),1,H_),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,a=typeof e=="string"?ur.findByName(i,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=U0),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let h=new g0(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?ur.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},$u=new Be,Uo=class{constructor(e,t,n=0,i=1/0){this.ray=new xi(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Kr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return $u.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($u),this}intersectObject(e,t=!0,n=[]){return b0(e,this,n,t),n.sort(ed),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)b0(e[i],this,n,t);return n.sort(ed),n}};aa=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(kt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},No=class extends ii{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170")});var wd,Td=Dt(()=>{wd={stock:{i:[15042,15048,15049,15051,17239,22334,22335,22336,22337,22338,22339,22340,22341,22342,22343,22344,22345,22346,22347,22787,22788,22789,22790,22791,22792,22793,22794,22795,22796,22797,22798,22799,22800,22801,22802,22803,22804,22805,22954,22957,22959,22964,23019,23020,24464,24465,24466,24467,24468,24469,24717,24718,24719,24742,24743,24744,24745,24746,24833,24834,24835,24836,24837,24838,24839,24840,24841,24842,24843,24844,25158,25159,25160,25243,25244,25245,25246,25247,25248,25249,25250,25350,25351,25352,25353,25354,25355,25356,25360,25361,25362,25363,25364,25424,25425,25426,25427,25428,25429,25430,25431,25432,25433,25434,25435,25436,25437,25438,25439,25440,25441,25442,25601,25602,25603,25604,25685,25686,25687,25688,25689,25690,25691,25692,25693,25694,25695,25696,25697,25698,25699,25700,25701,25702,25703,25704,25705,25706,25707,25708,25709,25710,25711,25712,25713,25714,25715,25716,25717,25718,25719,25720,25806,25807,25808,25820,25821,25822,25823,25824,25825,25826,25827,25828,25829,25830,25831,25832,25833,25834,25835,25836,25837,25838,25839,25840,25841,25842,25843,25844,25845,25846,25847,25848,25849,25850,25851,25852,25856,25857,25858,25859,25860,25861,25921,25922,25923,25924,25925,25926,25927,25928,25929,25930,25931,25932,25933,25934,25935,25936,25937,25938,25939,25940,25941,25942,25943,25944,25945,25946,25947,25948,25949,25950,25951,25952,25953,25954,25955,25956,25957,25958,25959,25960,25961,25962,25963,25964,25981,25982,25983,26042,26043,26044,26045,26059,26060,26061,26097,26098,26103,26104,26105,26106,26107,26108,26114,26115,26117,26118,26119,26120,26121,26122,26123,26124,26125,26126,26127,26128,26129,26130,26131,26132,26133,26134,26135,26136,27443,27444,27445,27446,27447,27448,27449,27450,27451,27452,27453,27454,27455,27456,27457,27458,27459,27460,27461,27462,27463,27464,27465,27466,27467,27468,27469,27470,27471,28869,28870,28871,28872,28873,28874,28876,28880,28881,28882,30003,30004,30005,30006,30007,30008,30009,30010,30011,30012,30013,30014,30015,30016,30017,30018,30019,30526,30527,30528,30607,30608,30609,31456,31457,31458,31465,31466,31467,31489,31490,31491,31512,31513,31514,31515,31516,31517,31593,31594,31595,31599,31600,31601,32032,32033,32034],p:[0,0,-.006824,0,0,-.006732,0,0,-.005934,0,0,-.009416,0,0,-.006824,0,0,-.008856,0,0,-.005363,0,0,-.006287,0,0,-.012377,0,0,-.011467,0,0,-.007995,0,0,-.010805,0,0,-.008029,0,0,-.010352,0,0,-.01085,0,0,-.008243,0,0,-.003612,0,0,-.001059,-0,-0,.001352,0,0,-.005934,0,0,-.006824,0,0,-.005789,0,0,-.00591,-0,-0,946e-6,0,0,-.004285,-0,-0,.001682,-0,-0,.008502,-0,-0,.008301,-0,-0,.00769,0,0,-.005666,-0,-0,.005716,-0,-0,.008502,-0,-0,.008214,0,0,-.006989,0,0,-.008029,0,0,-.010805,0,0,-.006732,0,0,-.009416,0,0,-.006824,0,0,-.010174,0,0,-.012888,0,0,-.014651,0,0,-.010793,0,0,-.004126,0,0,-.005666,0,0,-.010805,-0,-0,.001352,0,0,-.005666,-0,-0,.004594,-0,-0,.005716,-0,-0,.005716,-0,-0,.004594,-0,-0,.008214,0,0,-.006824,-0,-0,946e-6,0,0,-.004364,0,0,-.002346,0,0,-.007381,-0,-0,.001352,0,0,-.001959,-0,-0,.004594,0,0,-.003612,0,0,-.00762,-0,-0,.003423,-0,-0,.008214,-0,-0,.00769,-0,-0,.008502,-0,-0,.008301,0,0,-.004108,-0,-0,.003423,-0,-0,.001682,-0,-0,946e-6,0,0,-.00591,-0,-0,.00769,-0,-0,.002935,-0,-0,.001682,-0,-0,.003423,0,0,-163e-6,0,0,-85e-5,0,0,-85e-5,0,0,-.002609,0,0,-.008243,0,0,-.005056,0,0,-.003612,0,0,-.010352,0,0,-.007411,0,0,-.01085,0,0,-.007702,-0,-0,.001682,0,0,-.002609,-0,-0,946e-6,0,0,-.005752,0,0,-.002346,0,0,-.007381,0,0,-.004364,0,0,-.009559,0,0,-.004562,0,0,-.002346,0,0,-.007544,0,0,-.008973,0,0,-.011464,0,0,-.011757,0,0,-.013304,0,0,-.014642,0,0,-.012888,0,0,-.014642,0,0,-.014651,0,0,-.010174,0,0,-.007381,0,0,-.006824,0,0,-.007381,0,0,-.010174,0,0,-.005056,0,0,-.007411,0,0,-.003612,0,0,-.007702,0,0,-.00762,0,0,-.003612,0,0,-.011056,0,0,-.014071,0,0,-.014148,0,0,-.015618,0,0,-.015918,0,0,-.015241,0,0,-.012679,0,0,-.007702,0,0,-.013587,0,0,-.008856,0,0,-.007702,0,0,-.015335,0,0,-.011685,0,0,-.016274,0,0,-.014735,0,0,-.014887,0,0,-.012851,0,0,-.010656,0,0,-.013089,0,0,-.015416,0,0,-.009041,0,0,-.009197,0,0,-.007641,0,0,-.006595,0,0,-.004875,0,0,-.007538,0,0,-.004669,-0,-0,149e-6,-0,-0,.003071,0,0,-.002029,0,0,-581e-6,0,0,-.002892,0,0,-.003893,0,0,-.004875,0,0,-85e-5,0,0,-163e-6,0,0,-.001565,0,0,-.001959,0,0,-.00762,0,0,-.004108,0,0,-.010268,0,0,-.014071,0,0,-.01254,0,0,-.015918,0,0,-.014887,0,0,-.012851,0,0,-.006316,0,0,-.007739,0,0,-.007609,0,0,-.006126,0,0,-.00453,0,0,-.003038,0,0,-163e-6,-0,-0,.003423,0,0,-.007281,0,0,-.002676,-0,-0,328e-6,0,0,-.007416,0,0,-.010656,0,0,-.003067,-0,-0,.002661,-0,-0,.006005,-0,-0,.008709,-0,-0,.010865,-0,-0,.009722,-0,-0,.003071,-0,-0,.004333,-0,-0,.002431,0,0,-.004669,0,0,-.010656,0,0,-.011467,0,0,-.012377,0,0,-.01085,0,0,-.002609,0,0,-85e-5,0,0,-.005752,0,0,-.002346,0,0,-.005752,0,0,-.004562,0,0,-.007544,0,0,-.010952,0,0,-.007178,0,0,-85e-5,0,0,-.003038,0,0,-.007271,0,0,-.00453,0,0,-.007609,0,0,-.015188,0,0,-.007739,0,0,-.006316,0,0,-.01303,0,0,-.007111,0,0,-.002676,-0,-0,328e-6,0,0,-.001618,-0,-0,.002661,-0,-0,824e-6,-0,-0,.008709,-0,-0,.003385,0,0,-.002559,0,0,-.00652,0,0,-.006185,0,0,-.009659,0,0,-.00901,0,0,-.014884,0,0,-.011878,0,0,-.013253,0,0,-.016441,0,0,-.016873,0,0,-.013536,0,0,-.011757,0,0,-.015885,0,0,-.013512,0,0,-.008973,0,0,-.012555,0,0,-.015885,0,0,-.016873,0,0,-.013661,0,0,-.010227,-0,-0,824e-6,0,0,-.007702,0,0,-.011056,0,0,-.003612,0,0,-.01085,0,0,-.008856,0,0,-.007702,0,0,-.012377,0,0,-.001565,0,0,-.003038,0,0,-85e-5,0,0,-.004012,0,0,-.006287,0,0,-.00124,0,0,-.00912,0,0,-.012381,0,0,-.012377,0,0,-.012554,0,0,-.006966,0,0,-.00222,0,0,-.00565,0,0,-.006725,0,0,-.010346,0,0,-.008726,0,0,-.011357,0,0,-.011455,0,0,-.011685,0,0,-.012381,0,0,-.008856,0,0,-.012377,0,0,-.009041,0,0,-.007641,0,0,-.01078,0,0,-.009395,0,0,-.009452,0,0,-.008386,0,0,-.008726,0,0,-.008137,0,0,-.001565,0,0,-163e-6,0,0,-.003038,0,0,-.011757,0,0,-.013106,0,0,-.014642,0,0,-.013536,0,0,-.014651,0,0,-.014088,0,0,-.013253,0,0,-.011878,0,0,-.010489,0,0,-.00901,0,0,-.006185,0,0,-.005591,0,0,-.001633,-0,-0,.003385,0,0,-.002559,0,0,-.006185,-0,-0,512e-6,-0,-0,.008709,-0,-0,.010865,0,0,-.004836,0,0,-.004936,0,0,-.001657,-0,-0,.010865,-0,-0,.009722,0,0,-.004384,0,0,-.006342,0,0,-.008137,-0,-0,.006983,0,0,-.008137,0,0,-.014651,0,0,-.010793,0,0,-.005591,0,0,-.004126,0,0,-.004836,0,0,-.002799,0,0,-.006342,0,0,-.006725,0,0,-.008726,0,0,-.008137,0,0,-.011455,0,0,-.009395,0,0,-.007641,0,0,-.006595,0,0,-.004875,0,0,-.009452,0,0,-.01078,0,0,-.003893,0,0,-.008091,0,0,-.008386,0,0,-.002892,0,0,-581e-6,-0,-0,149e-6,-0,-0,708e-6,0,0,-.005119,-0,-0,.002431,0,0,-.008137,0,0,-.007111,0,0,-.001618,-0,-0,824e-6,0,0,-.007416,0,0,-.010656,0,0,-.003067,-0,-0,.003071,-0,-0,149e-6,-0,-0,708e-6,-0,-0,.003071,-0,-0,708e-6,-0,-0,.002431,0,0,-.008137,0,0,-.008091,0,0,-.008386,-0,-0,.002431,0,0,-.005119,-0,-0,.004333,-0,-0,.004333,-0,-0,.006983,-0,-0,.009722,-0,-0,.006983,-0,-0,.004333,0,0,-.005119,-0,-0,.006983,0,0,-.005119,0,0,-.008137,0,0,-.004936,0,0,-.006342,0,0,-.004836],n:[.2224,-.3352,.033,.2819,-.119,.0308,.209,-.1282,.0258,.2051,-.0309,.0145,.2226,-.3903,.0403,.2209,.1476,.071,.1567,.1804,.1019,.1056,.1733,.1204,.1216,.1811,.0899,.1323,.0614,.026,.2529,.0701,.0449,-.0866,-.1486,-.0235,.0293,-.07,-.0124,-.3316,-.2998,.0233,-.2082,-.2295,-.0154,-.5585,-.7065,.2653,-.7344,-.6188,.3877,-.8114,-.5043,.4163,-.8384,-.4691,.4253,.1221,-.1047,.0035,.1051,-.1148,-9e-4,-.2624,.0901,.0333,-.6563,.3338,.3384,-.6783,.2351,.2958,-.8559,.2414,.5179,-.668,.425,.485,-.649,.4657,.5526,-.5608,.5043,.5123,-.3204,.5707,.4551,-.6199,-.038,.1478,-.9321,.045,.5745,-.9715,.0229,.5848,-.8744,1e-4,.4133,-.2344,-.0841,-.005,.0375,-.1009,-.0164,-.2523,-.164,.005,.147,-.0643,.0035,.174,-.0935,-.0027,.2721,-.3753,.059,.2038,-.4021,.0027,.1459,-.4078,-.0563,.1158,-.3886,-.0891,-.2284,-.4374,-.0232,-.1338,-.2094,.0453,-1.0659,-.3217,.8033,-.9749,-.345,.8009,-1.0105,-.3353,.8031,-1.0659,-.3217,.8033,-1.0307,-.3335,.8027,-1.0428,-.3401,.8102,-.2725,-.2615,-.0095,-.2609,-.2628,-.0092,-.2917,-.2677,-.0125,-.0372,.6223,.4661,.0054,.6049,.4842,-.0155,.5814,.4748,.3479,.322,.3117,-.0011,.5581,.4044,.5948,-.1936,.1877,.5529,-.2695,.1623,.6286,-.3808,.2438,.5616,-.1604,.1432,.5003,-.1627,.1267,.529,-.4115,.1846,.5881,-.401,.2346,.5382,-.3588,.1951,.3933,-.2216,.0875,.5415,-.4719,.2208,.4811,-.414,.1264,.529,-.4115,.1846,-.2812,.6128,.5016,-.2857,.6062,.4992,-.293,.6318,.505,.5977,.4098,.7163,.4598,.4932,.6348,.6026,.3545,.6346,.3709,.5163,.5631,.2239,.5983,.6361,.1531,.6803,.8293,.5805,.3445,.5682,.5858,.3519,.5985,-.9113,-.6122,.7675,-.8559,-.6869,.6799,-.916,-.6188,.783,-.8187,-.7403,.6621,-.7543,-.7984,.58,-.7248,-.8578,.6028,-.54,-.919,.4146,.4675,-.2849,.1464,.5765,-.1702,.2283,.5637,-.1735,.2326,.6052,-.1743,.2563,.569,-.2298,.2326,-.0164,.6549,.5837,.0546,.5863,.5078,.0745,.465,.3531,.1095,.5268,.4389,.1899,.4316,.3281,.0567,.5443,.4863,.0657,.4253,.3254,.1004,.2608,.17,.0826,.4144,.3446,.1102,.1546,.103,-.1074,.4933,.5175,.1146,-.1015,-.0173,.1521,-.1599,-.0403,.1401,-.4673,-.086,.1627,.0145,.0468,.1569,.1674,.1032,-.0372,.6223,.4661,-.0011,.5581,.4044,.0217,.3533,.2183,-.0865,-.3101,-.0321,-.0931,-.3261,-.0352,-.1096,-.3025,-.0283,-.0925,-.3378,-.0361,.3379,-.1541,.0424,.5054,-.1212,.1132,.3315,-.0849,.0418,.2052,-.1765,-.0139,.2099,-.0331,.0161,.1017,-.0519,-.0079,-.0283,-.0635,-.0182,.1121,.0356,.0196,.2788,.0622,.0636,.3398,.0786,.0849,.1278,.2129,.1071,.1602,.2283,.1185,.3398,.0786,.0849,.07,.1837,.0851,-.011,.1612,.074,-.0119,.0183,.006,-.1503,-.0175,.0051,-.1166,-.0829,-.017,-.2009,-.1018,-.0054,-.316,-.0428,.0404,-.2285,.0819,.0536,-.1169,.1155,.0515,-.2039,.1454,.0754,-.3209,.0871,.0771,-.2714,.1199,.0749,-.38,.0949,.0976,-.4788,.0358,.1186,-.4498,-.0066,.1013,-.5354,-.1116,.1378,-.5902,-.0727,.17,-.5894,-.1616,.188,-.5244,-.0291,.1284,.0427,-.3043,-.0308,.1265,-.392,-.0158,.1765,-.4282,-.0028,.2206,-.4514,.0094,.0897,.5992,.5159,.186,.5474,.4925,.1847,.5432,.491,.481,-.3401,.117,.3054,-.2805,.021,.332,-.359,.039,.1775,-.3106,-.031,.1094,-.2325,-.0378,-.0288,-.2826,-.0546,.0032,-.1896,-.0415,-.0773,-.2009,-.041,-.2336,-.2664,-.0187,-.1755,-.3769,-.0479,-.0531,-.3684,-.0701,.057,-.3079,-.0595,.2495,-.367,-.0122,.2592,-.3517,3e-4,.3575,-.5032,.0671,.4072,-.4554,.0975,.4658,-.4114,.1377,-.2784,-.3045,3e-4,-.2477,-.371,-.0095,-.3854,-.3578,.0592,-.3516,-.2493,.0284,-.3101,-.1991,.0108,-.5079,-.307,.1173,-.5264,-.3932,.1561,-.539,-.3924,.1757,-.5818,-.2086,.223,-.6192,-.3654,.2585,-.6008,-.405,.2346,-.5954,-.3264,.1903,-.6409,-.2941,.2205,-.5619,-.1705,.1488,-.4885,-.1902,.0981,-.4127,-.1991,.0505,-.2917,-.3942,.0187,-.4514,-.6424,.12,-.4761,-.6713,.1751,.0873,.6113,.5439,.2071,.5987,.5867,.4605,-.1749,.134,.4896,-.3166,.1622,.4605,-.1749,.134,.4558,-.3264,.1326,.3718,-.3778,.0687,.3996,-.1285,.0941,.2567,.5349,.5304,.2071,.5987,.5867,.1381,.6113,.6394,.0423,.6327,.6401,-.0071,.6257,.6497,.0017,.6268,.7526,.0056,.5879,.6455,-.0216,.6255,.819,-.0331,.6249,.7745,-.0562,.5965,.6492,-.1212,.6203,.6758,-.0358,.6536,.7997,-.0633,.6589,.7429,-.1961,.6272,.6988,-.4334,.5308,.7146,-.6458,.1484,.4329,-.6352,.3489,.6883,-.6495,.0536,.393,-.5644,-.1566,.2181,-.5355,-.035,.2097,-.4405,-.3145,.0955,-.3646,-.2842,.0415,-.2954,-.3949,.0032,-.2465,-.3732,-.0321,-.2132,-.4825,-.039,-.0981,-.4585,-.0813,-.1075,.1102,.0609,.0699,-.3975,-.0721,.0699,-.4111,-.0837,.1467,-.4182,-.0532,.1571,-.3353,-.048,.2859,-.35,.0039,.3022,-.5005,.0327,.114,.4984,.4252,.0468,.4447,.3534,.0151,.3249,.2173,-.261,.1952,.1585,-.3598,.1983,.2087,-.4259,.3852,.4245,.4655,-.0077,.1084,.4341,.0017,.1113,.4485,.0197,.1165,-.4761,-.6713,.1751,-.5487,-.8264,.3134,-.5663,-.9062,.4278,-.4514,-.6424,.12,-.1153,.3521,1.7052,-.1054,.3389,1.7018,-.1222,.3746,1.7114,-.0114,.0906,.0836,.0606,.1909,.1309,-.0194,.0216,.0222,-.0165,.2233,.1255,.0434,.2041,.0996,-.004,.2549,.1324,-.0534,.1671,.0774,-.1619,.2523,.1302,-.0706,.0386,.0302,-.2593,.0815,.0433,-.1934,.0289,.0269,-.1795,.056,.0261,-.2724,.0746,.0577,-.1515,.1336,.0588,.0523,-.4268,-.0419,-.011,-.4772,-.0482,-.004,-.4346,-.0514,.003,-.3847,-.045,.0276,-.3599,-.0551,.0719,-.6586,.0183,.0761,-.6533,.0253,.0939,-.2433,-.0351,.1291,-.4093,-.022,.1581,-.1988,-.0157,.2531,-.1819,.0085,.2476,-.1613,.0083,.2634,-.1178,.0147,.1847,.5432,.491,.186,.5474,.4925,.281,.4735,.4488,.1075,.2617,.1826,.0937,.2409,.1648,.074,.1648,.1059,-.0092,.2172,.1334,-.0492,.1565,.0943,-.1371,-.2519,-.0629,-.043,.2202,.138,-.1595,.2365,.1688,-.1669,.2233,.1612,-.2156,.3856,.3367,-.0723,.5459,.5016,.1803,.6293,.5485,-.0595,.6066,.5671,.2717,.6092,.5367,-.3113,.3702,.3455,-.3157,.2599,.2511,.6517,.4525,.5302,.4817,.5719,.6006,.46,.59,.6109,.5383,.5084,.4728,.7471,.0715,.2747,.9491,.0956,.6025,.9005,.2255,.6511,1.0027,-.0198,.7048,.9875,-.2037,.6152,.642,-.1552,.1608,.6101,-.2362,.1813,1.0122,-.2881,.7309,.9615,-.3462,.734,-.1435,-.3806,-.0918,-.1481,-.2639,-.0422,-.1813,.0139,.0466,-.1197,-.0862,.0239,-.1383,-.1363,-1e-4,-.1185,-.061,.025,-.1527,-.1233,-4e-4,-.2491,-.0963,.0162,-.0992,-.0828,-.0131,.1362,-.103,-.0101,.4692,-1.0403,.4836,.5769,-.9045,.4681,.4701,-1.0006,.4569,.5325,-.9042,.4133,.669,-.8604,.5587,.727,-.7436,.5278,.5569,-.6356,.2315,.7891,-.7424,.6478,.8829,-.5757,.7052,.8108,-.5669,.5116,.844,-.6994,.7506,.8944,-.5962,.7454,.9305,-.5376,.8017,.9485,-.4967,.8097,.9351,-.4832,.7093,.9733,-.4066,.7717,.8069,-.4569,.4259,-.5224,-.4662,.1487,-.5111,-.4423,.1557,-.504,-.434,.1577,-.7901,.3163,.9283,-.8037,.3112,.9268,-.7733,.3218,.9295,-.3393,-.1533,.0432,-.1402,-.1361,-.0179,-.3788,-.1491,.0448,-.3393,-.1533,.0432,-.3788,-.1491,.0448,-.5383,-.1705,.1329,.2634,-.1178,.0147,.442,-.2294,.0839,.2531,-.1819,.0085,.9535,-.4705,.7393,.9844,-.3812,.8665,1.0065,-.3809,.8663,-.0657,-.3491,-.0222,-.0451,-.3509,-.0233,-.0202,-.3581,-.0266,1.0403,-.2959,.9677,1.0065,-.3809,.8663,.9844,-.3812,.8665,1.0122,-.2881,.7309,.7629,-.5544,.4018,.9615,-.3462,.734,.498,-.2661,1.8806,.4627,-.2575,1.8856,.516,-.2781,1.8756]},mail:{i:[15690,15692,15693,15701,15702,15703,15704,15705,15706,15707,15708,15709,15710,15711,15712,15721,15722,15725,15726,15727,15728,15729,15730,15731,15732,15733,15734,15735,15736,15737,15742,15743,15744,15745,15746,15747,15748,15749,15750,15751,15752,15753,15754,15755,15756,15757,15758,15759,15760,15761,15762,15763,15764,15765,15766,15767,15768,15769,15770,15771,15772,15773,15774,21821,21823,21824,21830,21831,21832,21833,26042,26043,26044,26045,26046,26047,26048,26049,26050,26051,26052,26125,26126,26127,26128,26176,26177,26178,26179,26180,26293,26294,26295,26296,26300,26301,26302,26303,26304,26305,26306,26307,26308,26309,26310,26311,26312,26313,26314,26315,26316,26317,26318,26319,26320,26321,26322,26323,26324,26325,26326,26327,26328,26329,26330,26331,26332,26333,26334,26335,26336,26337,26636,26637,26638,26639,26854,26855,26856,26857,26858,26859,26860,27041,27042,27043,27046,27047,27048,27975,27976,27977,27978,27979,29630,29631,29632,29633,29634,29635,29636,29637,29638,29639,29640,29666,29667,29669,29670,30164,30165,30166,30167,30168,30169,30170,31540,31541,31542,31800,31801,31802,32059,32060,32061,32173,32174,32175,32176,32223,32224,32225,32303,32304,32305,32306,32420,32421,32422,32423,32463,32464,32465,32466,32470,32471,32472,32473,32549,32550,32551,32559,32560,32561,32562,32563,32564,32565,32566,32630,32631,32632,32740,32741,32742,32743,32744,32938,32939,32940,32941,32997,32998,32999,33e3,33860,33862,33869,35444],p:[-0,-0,-132e-6,-0,-0,-.003106,-0,-0,-.007574,-0,-0,-.00207,-0,-0,-.009998,-0,-0,-.010609,-0,-0,-.011187,-0,-0,-.011693,-0,-0,-.011005,-0,-0,-.014496,-0,-0,-.012128,-0,-0,-.015731,-0,-0,-.014496,-0,-0,-.009059,-0,-0,-.003463,-0,-0,-.010066,-0,-0,-.008972,-0,-0,-.009296,-0,-0,-.01159,-0,-0,-.017522,-0,-0,-.017181,-0,-0,-.015241,-0,-0,-.014496,-0,-0,-.017362,-0,-0,-.01746,-0,-0,-.01587,-0,-0,-.003515,-0,-0,-.014071,-0,-0,-.010701,-0,-0,-.008701,-0,-0,-.015201,-0,-0,-.017181,-0,-0,-.015241,-0,-0,-.010198,-0,-0,-.014496,0,0,.020999,0,0,.020188,-0,-0,-.011005,-0,-0,-.014496,0,0,.019732,-0,-0,-.009393,0,0,.01558,-0,-0,-.009442,0,0,.013255,0,0,.019732,-0,-0,-.008126,0,0,.006197,0,0,.001892,-0,-0,-.009303,0,0,978e-6,-0,-0,-.008261,0,0,.023195,-0,-0,-.002809,-0,-0,-.013989,-0,-0,-.01746,0,0,.012082,0,0,.023477,0,0,.02227,0,0,.023536,0,0,.023323,0,0,.023323,-0,-0,-.007232,0,0,.022318,-0,-0,-.004714,-0,-0,-291e-6,-0,-0,-.006372,-0,-0,-.008713,-0,-0,-.007794,-0,-0,-.009221,-0,-0,-.009302,-0,-0,-.011187,-0,-0,-.010609,-0,-0,-.009442,-0,-0,-.008126,-0,-0,-.009476,-0,-0,-.009303,-0,-0,-.009998,-0,-0,-.008261,-0,-0,-.009095,-0,-0,-.007218,-0,-0,-.005597,-0,-0,-.011187,-0,-0,-.009442,-0,-0,-.009393,-0,-0,-.011005,0,0,.013255,0,0,.006197,0,0,.003651,0,0,.001892,0,0,978e-6,0,0,.020744,0,0,.020188,0,0,.019732,0,0,.020999,0,0,.013255,0,0,.008295,0,0,.019732,0,0,.020744,0,0,.020999,0,0,.01165,0,0,.022135,0,0,.023195,0,0,.015409,0,0,.023477,0,0,.013517,0,0,.023536,0,0,.023323,0,0,.021147,0,0,.022318,0,0,.018896,0,0,.010174,0,0,.005185,0,0,.00405,-0,-0,-.001945,-0,-0,-.001886,-0,-0,-.003802,-0,-0,-.002214,-0,-0,-.004508,-0,-0,-.005104,-0,-0,-.005597,-0,-0,-.005119,-0,-0,-.004586,-0,-0,-.004434,-0,-0,-.002671,0,0,.001911,0,0,.003644,0,0,.003938,0,0,.003651,0,0,978e-6,-0,-0,-.002231,-0,-0,-.002197,-0,-0,-816e-6,0,0,978e-6,-0,-0,-.008261,-0,-0,-.002945,-0,-0,-816e-6,-0,-0,-.002945,-0,-0,-.002197,-0,-0,-816e-6,-0,-0,-.008261,-0,-0,-.004586,-0,-0,-.007218,-0,-0,-.005597,-0,-0,-.009095,-0,-0,-.008456,-0,-0,-.004714,-0,-0,-.006372,-0,-0,-.00819,-0,-0,-.007794,-0,-0,-.005597,-0,-0,-.009095,-0,-0,-.007765,-0,-0,-.008456,-0,-0,-.005119,-0,-0,-.005119,-0,-0,-.008456,-0,-0,-.005712,-0,-0,-.004508,-0,-0,-.00819,-0,-0,-.006297,-0,-0,-.007794,-0,-0,-.004508,-0,-0,-.005712,-0,-0,-.002214,-0,-0,-.001945,-0,-0,-.003515,-0,-0,-.010701,-0,-0,-.003216,-0,-0,-.008701,-0,-0,-.01746,-0,-0,-.014071,-0,-0,-.017362,-0,-0,-.01587,-0,-0,-.013989,-0,-0,-.007232,-0,-0,-.008701,0,0,.012082,0,0,.02227,0,0,.023323,-0,-0,-.007794,0,0,735e-6,-0,-0,-.001945,-0,-0,-.001945,0,0,735e-6,0,0,.00405,-0,-0,-.007794,-0,-0,-.008713,-0,-0,-.008886,-0,-0,-.009221,-0,-0,-.008886,0,0,735e-6,-0,-0,-.007794,-0,-0,-.007369,0,0,735e-6,-0,-0,-.008886,-0,-0,-.007961,-0,-0,-.007232,-0,-0,-.007824,-0,-0,-.008701,-0,-0,-.008633,0,0,735e-6,-0,-0,-.007369,0,0,.00405,0,0,.010174,-0,-0,-.007232,0,0,.022318,0,0,.01893,0,0,.021147,-0,-0,-.007824,-0,-0,-.007232,0,0,.01893,-0,-0,-.007961,0,0,.010174,-0,-0,-.007369,0,0,.015032,0,0,.01893,-0,-0,-.007824,0,0,.018896,0,0,.021147,0,0,.010174,0,0,.015032,0,0,.018896,-0,-0,-.008886,-0,-0,-.009221,-0,-0,-.007961,-0,-0,-.008633,-0,-0,-.007824,-0,-0,-.009221,-0,-0,-.009302,-0,-0,-.008297,-0,-0,-.008633,-0,-0,-.008633,-0,-0,-.008297,-0,-0,-.001856,-0,-0,-.009302,-0,-0,-.001856,-0,-0,-.003216,-0,-0,-.009302,-0,-0,-.009302],n:[.0041,-.0049,.0028,.2368,-.109,.0655,.2415,-.0212,.0575,.0223,.0831,.0443,.1934,.2278,.1105,.2272,.0506,.0638,.2554,-.0592,.0692,.3167,-.2464,.0926,.1369,.175,.1029,.2473,.1878,.1737,.2478,-.4393,.0501,.1506,-.3528,-.0297,.3017,-.5619,.1121,.1688,-.4939,-.1029,.047,-.2865,.0085,.2774,-.3289,-.1191,-.187,-.2864,-.116,-.2649,-.4057,-.0728,-.0629,-.3925,-.1593,.0924,-.2928,-.0738,.1469,-.1634,-.021,.1336,-.0115,.0298,.0958,.0361,.0363,-.0809,-.2879,-.08,.0954,.134,.083,-.1957,-.3845,-.0354,-.051,-.2342,.0031,-.2515,-.3624,.0166,-.2348,-.2851,.0366,-.2435,.0743,.1047,-.2099,.627,.9146,-.1215,.4913,.4214,-.0863,.5799,.5004,-.3902,.7064,.9148,.0101,.5497,.4273,-.3583,.6949,.9725,-.6969,.5954,.9489,-.8961,.4453,.9204,-.5494,.5726,.5774,-1.1096,.1017,.9305,-1.1407,-.018,.9492,-1.1337,-.0605,.9471,-1.1443,-.2068,.972,-1.13,-.2537,.968,-1.0308,-.2371,.442,-1.0922,-.3378,.983,-1.0936,-.3471,.9746,-1.0529,-.4727,.9695,-.9871,-.6053,.8773,-.8516,-.7826,.7272,-.7767,-.8271,.7003,-.1936,.5995,.922,-.0725,.5883,.9573,.2277,.6543,.9464,-.0622,.5464,.621,.1531,.6032,.9153,.0989,.5882,.7495,.2001,.651,.685,.1835,.5884,.5265,.2266,.6162,.506,.3689,.6991,.9539,.4474,.7053,.9847,.5582,.6631,.9523,-.0317,.3246,.1645,-.0013,.0015,.0013,-.2251,.2611,.1137,-.2361,.2022,.1007,.084,.1098,.0238,-.2604,.0978,.0786,-.2569,.0465,.0721,-1.1351,-.1693,.7066,-.9206,-.1459,.4019,-1.0339,-.1359,.5155,-.8247,-.1728,.2842,-.5952,-.2098,.114,-.3172,-.1163,.0084,-.3741,-.2147,.0219,-.3308,-.3418,.0303,-.3771,-.5671,.1262,-.3992,-.6341,.1667,-.3379,-.6358,.1597,-.7342,.2073,.2595,-.7666,.0925,.2475,-.7303,.2011,.2587,-.6189,.3967,.3294,-.556,-.5451,.1254,-.5916,-.5278,.1658,-.6133,-.5453,.1987,-.7547,-.5595,.3243,-.7506,-.5554,.3255,-.5076,.4184,.2941,-.5105,.4189,.2937,-.6444,.3376,.2928,-.4214,.4359,.2957,.2792,-.443,.085,.1812,-.5321,.0516,.1914,-.5373,.0695,.1924,-.5662,.0713,.0427,-.634,.029,.0608,-.6385,.0082,-.0038,-.7756,.0253,-.0436,-.8451,.0222,-.0551,-.7353,.0159,-.0426,-.8294,.0199,-.1423,-.6114,.0461,-.0597,-.7391,.0489,-.104,-.6496,.0564,-.159,-.5787,.0707,.1102,-.3114,-.0447,-.2059,-.5035,.0666,-.2812,-.448,.0816,-.213,-.4115,.0301,-.2394,-.323,.0396,-.2153,-.2415,.0234,-.1379,-.3186,-.0047,-.1398,-.1465,-.0031,-.1738,-.074,.0129,-.0442,-.0201,-.0011,-.0083,-.1122,-.0145,-.0307,-.0216,-.0041,-.0186,-.1203,-.0111,.0997,-.0754,.0022,.107,-.1417,-.0045,.0539,-.3707,-.004,-.0513,-.5159,.0112,.1343,-.4432,.011,.2554,-.3657,.0496,.3623,-.3569,.1028,.2558,-.272,.0441,.1928,-.2525,.0196,.252,-.0859,.0423,.2611,-.1246,.0435,-.9638,-.6503,1.1203,-.9531,-.6254,1.1479,-.9571,-.6396,1.1228,-.9381,-.7009,.9484,-.5947,-.9386,.5874,-.5768,-.9777,.6582,-.6058,-.8028,.3963,-.5677,-.9963,.7066,-.521,-1.0181,.7411,-.454,-1.0659,.7958,-.3845,-1.0831,.8295,.0565,.2926,.101,-.0302,.3082,.0991,.0024,.27,.1166,-.0435,.2918,.0918,-.1105,.2466,.0781,-.0972,.1094,.0334,-.1726,-.9996,.466,-.2508,-.9441,.395,-.1844,-.882,.3206,-.1638,-.6829,.1555,-.1212,-.8305,.2623,.1708,-.9488,.4123,.096,-.8426,.2787,.1667,-.775,.2228,.2069,-.8596,.3054,.227,-.6717,.1653,.3824,-.7202,.2419,.4789,-.9245,.5125,.4438,-.996,.6573,.3938,-1.0548,.7999,.472,-.9885,.6314,.4931,-.9802,.624,-.0597,-.282,.0275,-.2974,-.3952,.0767,-.1856,-.1745,.0795,-.3381,-.1458,.1042,-.1726,.2905,.2104,-.022,.4075,.2796,-.1046,.3751,.3145,-.0228,.387,.2945,-.0791,.2714,.169,-.0474,.5083,.3409,.0074,.541,.354,.2942,-.92,1.7392,.3648,-.8414,1.7603,.3756,-.8053,1.7699,.7577,-.7931,.6886,.7686,-.8065,.6858,.7581,-.7973,.6879,-.0648,-.3666,.0129,-.0543,-.3757,.0108,-.0432,-.3857,.0083,.1392,-.0165,.001,.1507,-.0193,-0,.1619,-.0443,-.0048,.3454,-.0588,.0279,.9016,-.7215,.8872,.8899,-.7149,.8891,.8789,-.7015,.8919,.7448,-.0303,.2628,.7251,.2457,.3692,.7463,-.0284,.2631,.774,-.1819,.2277,.3843,.0528,.027,.4291,.0348,.0341,.4492,.0359,.0308,.4225,.0544,.0493,.9448,-.6282,.9521,1.0149,-.4941,.9579,1.0158,-.4955,.9576,1.0647,-.4095,.9608,.97,.3389,.9296,1.0149,.2707,.9445,.9566,.3584,.9368,1.013,.2706,.9108,.8226,.507,.9098,.97,.3389,.9296,.9566,.3584,.9368,1.1066,-.2448,.9649,1.0751,-.3548,.9686,1.0463,-.3764,.9814,1.1221,-.2475,.9529,1.1481,-.1554,.9604,1.1572,-.155,.9649,1.1116,-.165,.7345,1.0658,-.139,.5577,.9459,-.3779,.4962,.9809,-.3971,.4884,.9984,-.4092,.4832,.1619,-.0443,-.0048,.3454,-.0588,.0279,.3915,-.0555,.0258,.5257,-.0551,.0626,.3181,-.0055,-.002,.0063,-.0271,-.0049,.333,-.0874,.0106,.0826,-.0574,-.0193,-.105,-.0388,.0123,-.151,-4e-4,.0328,-.2875,-.1286,.0695,-.1378,-.018,.0518,-.3036,-.0402,.0732,-.1063,-.0459,.0325,-.1332,-.1795,.0481,-.2728,-.1817,.0481,-.2405,.0461,.0658]},plastic:{i:[15612,15613,15622,15625,15639,15640,15641,15642,15643,15644,15645,15646,15647,15648,15650,15653,15702,15703,15704,15705,15706,15707,15708,15710,15711,15712,15713,15714,15715,15716,15717,15718,15719,15720,15721,15722,15723,15724,15725,15726,15727,15728,15729,15730,15731,15732,15733,15734,15735,15736,15737,15738,15739,15740,15741,15742,15743,15744,15745,15746,15747,15748,15749,15750,15751,15752,15753,15754,15755,15756,15757,15758,15759,15760,15761,15762,15763,15764,15765,15766,15767,15768,15769,15770,15771,15772,15773,15774,15775,15776,15777,15778,15779,15780,15781,15782,15783,15784,15785,15786,15787,15788,15789,15790,15791,15792,15793,15794,15795,15796,15797,15798,15799,15800,15801,15802,15803,15804,25901,25902,25903,31169,31443,31444,31445,31446,31447,31448,31449,31450,31451,31452,31453,31454,31455,31456,31457,31458,31459,31460,31461,31462,31463,31464,31465,31466,31467,31468,31469,31470,31471,31472,31473,31474,31475,31476,31477,31478,31479,31480,31513,31514,31515,31516,31539,31540,31541,31542,31543,31544,31545,31546,31547,31548,31893,31894,31895,32566,32567,32568,32569,32570,32571,32572,32573,32574,32590,32591,32592,32593,32594,32980,32981,32982,32983,32984,32985,33692,33693,33694],p:[0,-0,-.001254,-0,0,278e-6,-0,0,599e-6,0,-0,-363e-6,0,-0,-724e-6,0,-0,-.006698,0,-0,-.005802,0,-0,-.003335,0,-0,-.007459,0,-0,-.005842,0,-0,-.007398,0,-0,-.005445,-0,0,.001806,0,-0,-174e-6,-0,0,35e-5,0,-0,-344e-6,0,-0,-833e-6,0,-0,-557e-6,0,-0,-349e-6,-0,0,803e-6,-0,0,871e-6,-0,0,99e-5,-0,0,832e-6,-0,0,.007694,-0,0,.008548,-0,0,.00405,-0,0,.008455,-0,0,.004732,-0,0,.004568,-0,0,871e-6,-0,0,.005776,-0,0,.004732,-0,0,.009072,-0,0,.006122,-0,0,.007694,-0,0,.004074,0,-0,-.002272,0,-0,-.004024,0,-0,-.007398,0,-0,-.007459,0,-0,-.005117,0,-0,-.005842,-0,0,.001791,-0,0,.003402,-0,0,.004074,-0,0,.00691,-0,0,.024556,-0,0,.011658,-0,0,.028212,-0,0,.026144,-0,0,.037521,-0,0,.040142,-0,0,.041507,-0,0,.021256,-0,0,.013596,-0,0,.005292,-0,0,.030174,-0,0,.043235,-0,0,.040912,-0,0,.046096,-0,0,.04534,-0,0,.045399,-0,0,.041484,-0,0,.040696,-0,0,.037394,-0,0,.037521,-0,0,.036955,-0,0,.033305,-0,0,.033451,-0,0,.03407,-0,0,.036955,-0,0,.032008,-0,0,.023995,-0,0,.012887,-0,0,.00691,-0,0,.003402,-0,0,.008814,-0,0,.007694,-0,0,.028797,-0,0,.026501,-0,0,.02192,-0,0,.012887,-0,0,.011251,-0,0,.013829,-0,0,.008548,-0,0,.007694,-0,0,.012887,-0,0,.008455,-0,0,.014025,-0,0,.019793,-0,0,.029277,-0,0,.029609,-0,0,.025421,-0,0,.028485,-0,0,.032991,-0,0,.028428,-0,0,.027316,-0,0,.043764,-0,0,.04534,-0,0,.046096,-0,0,.041001,-0,0,.041258,-0,0,.031438,-0,0,.026967,-0,0,.02851,-0,0,.020202,-0,0,.020688,0,-0,-.023617,-0,0,.0164,-0,0,.028428,-0,0,.010005,-0,0,.014025,-0,0,.009072,-0,0,.008455,-0,0,.006122,-0,0,.004568,-0,0,.004732,-0,0,.007536,-0,0,.007694,-0,0,.00691,-0,0,.004074,0,-0,-557e-6,-0,0,.041507,-0,0,.032647,-0,0,.030174,-0,0,.040912,-0,0,.013596,-0,0,.025327,-0,0,.007557,-0,0,.005292,-0,0,.035778,-0,0,.041491,-0,0,.04534,-0,0,.041303,-0,0,.041258,-0,0,.036833,-0,0,.035019,-0,0,.031506,-0,0,.031438,-0,0,.02851,-0,0,.030523,-0,0,.026469,-0,0,.02851,-0,0,.023559,-0,0,.024738,-0,0,.032557,-0,0,.027378,-0,0,.011044,-0,0,.007557,-0,0,.026158,-0,0,.022507,-0,0,.018289,-0,0,.010412,-0,0,.007536,-0,0,.009475,0,-0,-.023617,-0,0,.020688,-0,0,.026469,-0,0,.02851,-0,0,.026967,0,-0,-.001254,0,-0,-.003335,-0,0,186e-6,-0,0,.003149,0,-0,-.005842,-0,0,.001791,0,-0,-.003335,-0,0,.003149,-0,0,.004459,-0,0,.006595,-0,0,.005292,0,-0,-.005117,-0,0,.007557,-0,0,.011044,-0,0,.004568,-0,0,.005776,-0,0,.007536,-0,0,.005776,-0,0,871e-6,-0,0,803e-6,-0,0,.00377,-0,0,.006645,-0,0,.010412,-0,0,.007536,-0,0,129e-6,0,-0,-557e-6,-0,0,186e-6,-0,0,.003149,-0,0,.003149,-0,0,.006595,-0,0,.006645,-0,0,.006645,-0,0,.008921,-0,0,.010412,-0,0,.006595,-0,0,.011044,-0,0,.004459,-0,0,.00377,-0,0,129e-6,-0,0,.006645],n:[.0146,-.1326,-.031,.0037,.0313,.0178,-.0887,-.2394,-.1186,-.0135,.0288,.0125,-.0299,-.2474,-.0674,-.0112,-.2935,-.0741,-.0825,-.2281,-.0427,-.1451,-.0364,.021,-.1449,-.0641,-.0096,-.1337,-.2691,-.0317,.1341,-.2104,-.0366,.1855,-.083,.0173,.2048,.0978,.0577,.0239,.0037,.0055,-.0799,.0553,.02,.0073,-.0011,-6e-4,.0152,.0182,.005,.0013,.0079,.0016,-.026,-.1134,-.0187,.0196,-.1029,-.0187,.0192,-.4784,.0098,.0188,-.1812,-.029,-.1293,-.0516,.0074,-.3957,-.0167,.058,-.2868,-.2416,.0017,-.1577,-.3982,-.0103,-.3813,-.7562,.1848,-.0448,-.5374,.0162,.022,-.7257,.1055,.0193,-.4951,.0144,.0869,-.75,.119,-.2099,-1.0715,.4433,-.2169,-1.1341,.5615,-.0862,-1.1639,.6174,.3671,.4177,.3216,.2492,.3656,.2064,.1569,.3823,.2354,.0198,.5587,.4347,.0877,.3202,.2024,.0525,.4185,.2972,.0061,.661,1.0695,-.0153,.5808,.513,.0036,.722,.6248,-.1352,.7835,1.077,-.0273,.7755,.7122,-.0357,.7403,.6681,-.1727,.7218,1.0427,-.412,.7232,1.0658,-.2806,.7584,.8604,-.5845,.6605,.9521,-.3275,.7096,.6893,-.1567,.6444,.7297,.0335,.6445,.8034,.0139,.6362,1.0279,.174,.7467,1.1453,.18,.752,1.1818,.1175,.7146,.9591,-.0954,.4767,.3326,.1385,.5068,.3219,.0099,.4127,.2736,.1407,.3457,.1877,-.1412,-.0818,-.0203,-.2876,.3324,.1757,-.257,-.399,-.0012,-.4641,-.2427,.0586,-.3903,.0806,.0685,-.2607,.0385,.025,-.3466,-.575,.0791,-.7567,-.4928,.3199,-.9223,-.2112,.4728,-.7947,.227,.4406,-.876,.3321,.7408,-1.0031,.1292,1.1108,-.6963,.5651,1.0937,-.7571,.5185,1.0296,-.7713,.4973,.8252,-.923,.2935,1.1012,-.9347,.2371,1.1021,-1.005,-.3652,.7318,-1.0462,-.0811,.9768,-1.0171,-.4008,1.1171,-1.0461,-.1374,1.1951,-1.0403,-.3632,.9817,-.9281,-.6582,1.1613,-.9637,-.5644,.7667,-.9178,-.3074,.487,-.9003,-.1529,.4161,-.8874,-.7741,.9625,-.8643,-.7515,1.2226,-.8494,-.826,.9784,-.9328,-.6315,.7596,-.6965,-.7791,.4434,-.5161,-1.0809,.7104,-.3517,-.8056,.206,-.1216,-.6103,.0433,-.1185,-.7222,.1005,-.066,-1.1228,.5229,-.0955,-.5474,-.0039,.0854,-.4351,-.0365,.0021,-.3054,-.0554,.0489,-.5441,-.0017,.1663,-.5314,.0108,.021,-.6369,.0565,.0958,-1.1638,.6267,.1275,-.9337,.2674,.0263,-1.2252,.9347,.1443,-1.2191,.9019,.0754,-1.2182,1.0916,-.1259,-1.2247,1.0662,-.2363,-1.1935,.759,-.3821,-1.1778,.947,-.4761,-1.1111,1.1981,-.2648,-1.1525,1.3093,-.4446,-1.0951,1.2929,-.0623,-1.2158,1.1457,.0852,-1.2165,1.1155,-.1078,-1.2074,1.2068,.234,-1.1905,1.1771,-.2857,.2652,.1295,-.3101,.2673,.1284,-.294,.2907,.1342,-.0124,.0389,.014,.12,.6202,.6935,.3,.7389,.7641,.2358,.6924,.7777,.2718,.6307,.5428,.4256,.7158,1.0039,.6675,.6179,.9831,.4532,.7176,1.1015,.4712,.6985,1.0956,.5787,.5462,.5397,.3374,.2733,.1433,.2109,.0123,.0119,.389,-.1857,.0138,.2207,-.5296,.0168,.612,-.2056,.1235,.4509,-.4259,.0708,.2382,-.5868,.0545,.1309,-.5722,.0371,.2213,-.6535,.0836,.7362,-.5575,.3173,.5413,-.7546,.2738,.2213,-.6535,.0836,.6695,-.9849,.7435,.9544,-.5825,.7197,.9761,-.2634,.551,.9986,.1855,.9137,1.0646,-.1443,1.0781,1.0446,.0728,.9756,1.0634,-.2326,.9601,1.0299,-.4421,1.0049,.8095,-.858,1.1604,.9291,-.6572,1.2007,.5554,-1.0533,1.2313,.4233,-1.1477,1.0983,.2252,-1.1952,1.1311,.34,-1.1674,.8003,.3771,-1.1325,.689,.3173,-1.1385,.6559,.3004,-1.1402,.6582,-.0187,-.1857,-.0251,-.1683,-.1077,.0145,-.0912,.0318,.0293,-.281,.076,.0757,-.1802,.3358,.2308,-.0196,.671,.5159,-.0735,.4593,.2831,-.0206,.5594,.3032,.1462,.6365,.4202,.082,.2992,.1132,.1171,.7689,.8361,-.0096,.6662,.8729,.2647,.6719,.5264,.3396,.5882,.4321,.1873,-1.2129,1.0362,.2206,-1.2131,1.0349,.2181,-1.2129,1.0351,.1185,-.4894,.0085,-.0517,-.4558,.006,.0511,-.3237,-.0212,.1328,-.3816,-.0143,.2978,-.5427,.0541,.3954,-.6267,.1219,.4077,-.6467,.1359,.0556,-.0262,-.0043,-.0066,.0078,.0021,.0373,.0362,.0023,.3104,.0436,.0397,.3104,.0436,.0397,.4141,-.0692,.0524,.2905,-.1346,.0047,.9147,-.4972,.5379,.8595,-.3523,.3922,.8716,-.3673,.411,.8591,-.1486,.3807,.8047,-.0497,.3137,.8179,.221,.4497,-.3005,-.8227,.2465,-.1036,-.3647,.2165,-.2999,-.8198,.2472]},acnh:{i:[11538,11539,11540,11541,11542,11543,11544,11545,11546,11547,11548,11549,11550,11551,11552,11553,11554,11555,11556,11557,11558,11559,11560,11561,11563,11564,11565,11566,11567,11568,11569,11570,11571,11572,11631,11633,11634,11635,11636,11637,11638,11639,11640,11641,11642,11643,11644,11645,11646,11647,11648,11649,11650,11651,11652,11653,11654,11655,11656,11657,11658,11659,11660,11661,11662,11663,11664,11665,11666,11667,11668,11669,11670,11671,11672,11673,11674,11675,11676,11677,11678,11679,11686,15755,15756,15757,15758,15759,15761,15762,15763,15764,15765,15766,15767,15768,15769,15770,22182,22183,22184,22185,22186,22187,22188,22189,22190,22191,22554,22555,22556,22560,22561,22562,22563,22564,22565,22566,22567,22568,22569,22570,22571,22572,22573,22574,22575,22576,22577,22578,22579,22580,22582,22583,22584,22585,22592,22593,22594,22595,22596,22597,22598,22599,22600,22601,22602,22603,22604,22605,23855,23856,23857,23858,23859,23860,24242,24243,24244,24245,24246,24247,24248,24525,24526,24527,24528,24529,24530,24531,24532,24533,24534,24535,24536,24537,24538,24539,24540,24541,24542,24543,24544,24545,24546,24547,24548,24549,24550,24551,24552,24553,24554,24555,24556,24557,24558,24559,24560,24561,24562,24563,24564,24565,24566,24567,24568,25374,25375,25376,25647,25648,25649,25650,25651,25652,25653,25654,25711,25728,25729,25730,26771,26772,26773,26774,26775,26776,26777,26778,26779,26780,26781,26782,26783,26784,26785,26786,26796,27003,27004,27005,27033,27034,27035,27036,27037,27166,27167,27168,27176,27177,27178,27190,27191,27192,27374,27375,27376,29182,29183,29184,29532,29533,29534,30268,30269,30631,30632,30633,30634,30635],p:[0,-0,-.00254,0,-0,-.003018,0,-0,-.006098,0,-0,-.021241,0,-0,-.019066,0,-0,-.022718,0,-0,-.023821,0,-0,-.027163,0,-0,-.027902,0,-0,-.033142,0,-0,-.013886,0,-0,-.002564,0,-0,-.00462,0,-0,-.021361,0,-0,-.024352,0,-0,-.033142,0,-0,-.034259,0,-0,-.007324,0,-0,-.008512,0,-0,-.00695,0,-0,-.007267,0,-0,-.005991,0,-0,-.004017,0,-0,-.003029,0,-0,-.011076,0,-0,-.005168,0,-0,-.011066,0,-0,-.007267,0,-0,-.007585,0,-0,-.007472,0,-0,-.004446,0,-0,-.005424,0,-0,-.006303,0,-0,-.004794,0,-0,-.00314,0,-0,-.004471,0,-0,-.004133,0,-0,-.004649,0,-0,-.006486,0,-0,-.006404,0,-0,-.006056,0,-0,-.007267,0,-0,114e-6,0,-0,65e-5,0,-0,-.001151,0,-0,-.006404,0,-0,-.00645,-0,0,445e-6,0,-0,-.006695,0,-0,-.007687,0,-0,-.01689,0,-0,-.00645,0,-0,-.008933,-0,0,-.00378,-0,0,445e-6,-0,0,-.006059,0,-0,-.016974,0,-0,-.019552,0,-0,-.007469,0,-0,65e-5,0,-0,-.001151,0,-0,-223e-6,0,-0,114e-6,0,-0,-.017568,0,-0,-.019552,-0,0,-.009074,0,-0,-.013772,0,-0,-.011906,-0,0,-.009026,-0,0,-.009074,0,-0,-.013983,0,-0,-.011906,0,-0,-.017951,0,-0,-.016844,0,-0,-.011906,0,-0,-.022496,0,-0,-.01478,0,-0,-.008756,0,-0,-.004778,0,-0,-.003805,0,-0,-.00632,-0,0,265e-6,0,-0,-.001957,0,-0,-.007182,0,-0,-.00689,0,-0,-.011288,0,-0,-.007614,-0,0,265e-6,0,-0,-.003805,0,-0,-.004778,0,-0,-.008756,0,-0,-.009371,0,-0,-.01478,0,-0,-.011756,0,-0,-.008053,0,-0,-.012385,0,-0,-.024932,0,-0,-.022496,0,-0,-.007267,0,-0,114e-6,0,-0,-.007324,0,-0,-223e-6,0,-0,-.008006,0,-0,-.024352,0,-0,-.034259,0,-0,-.018589,0,-0,-.007469,0,-0,-.019552,0,-0,-44e-5,0,-0,-.002825,0,-0,-.008868,0,-0,-.015129,0,-0,-.01557,0,-0,-.002569,0,-0,-.007454,0,-0,-.010357,0,-0,-.007788,0,-0,-.008512,0,-0,-.010132,0,-0,-.007315,0,-0,-.008808,0,-0,-.008929,0,-0,-.005861,0,-0,-.010805,0,-0,-.019858,0,-0,-.022215,0,-0,-.007633,0,-0,-.022945,0,-0,-.027406,-0,0,-.027062,0,-0,-.028278,0,-0,-.015821,0,-0,-.015869,-0,0,-.028155,0,-0,-.014676,0,-0,-.002095,0,-0,-.006098,0,-0,-.013767,0,-0,-.021241,0,-0,-.023821,0,-0,-.016093,0,-0,-.024209,0,-0,-.030716,0,-0,-.027163,0,-0,-.031369,0,-0,-.034274,0,-0,-.033142,0,-0,-.033286,0,-0,-.033136,0,-0,-.027406,0,-0,-.027163,0,-0,-.033142,0,-0,-.031369,0,-0,-.007469,0,-0,-.016974,0,-0,-.019552,0,-0,-.036595,0,-0,-.033142,0,-0,-.034259,0,-0,-.018589,0,-0,-.034274,0,-0,-.033286,0,-0,-.033136,0,-0,-.013772,-0,0,-.01293,0,-0,-.017568,-0,0,-.009026,0,-0,-.01788,0,-0,-.019552,0,-0,-.013681,-0,0,-756e-6,-0,0,762e-6,0,-0,.001196,0,-0,-.00621,0,-0,.001015,0,-0,774e-6,0,-0,-665e-6,0,-0,-.007633,0,-0,-.026727,0,-0,-.022215,0,-0,-.027406,0,-0,-.033136,0,-0,-.036595,0,-0,-.01788,0,-0,-.018589,0,-0,-.019552,-0,0,-.00498,-0,0,762e-6,0,-0,-.004339,0,-0,.001196,0,-0,-.008808,0,-0,-554e-6,0,-0,.001015,0,-0,774e-6,0,-0,-.005861,0,-0,774e-6,0,-0,-.00967,0,-0,-.012478,-0,0,-.004654,0,-0,-.012478,0,-0,-.016844,0,-0,-.011906,0,-0,-.019641,0,-0,-.022496,0,-0,-.016934,0,-0,-.012478,0,-0,-.019641,0,-0,-.022496,0,-0,-.024932,0,-0,-.019641,0,-0,-.019641,0,-0,-.024932,0,-0,-.014611,0,-0,-.008053,0,-0,-.016934,0,-0,-.00891,0,-0,-.006092,0,-0,-.00689,-0,0,.001865,-0,0,262e-6,0,-0,-.007328,0,-0,-.005545,0,-0,-.013267,0,-0,-.009385,0,-0,-.00967,0,-0,-.007155,0,-0,-.009508,0,-0,-.008808,0,-0,-.008305,0,-0,-.008929,0,-0,-.007771,0,-0,-.007389,0,-0,-.004454,0,-0,-.005125,0,-0,-.007315,0,-0,-.007788,0,-0,-.004858,0,-0,-.005783,-0,0,.001922,-0,0,.002285,0,-0,-.00321,0,-0,-5e-5,0,-0,-665e-6,0,-0,774e-6,0,-0,-.005842,0,-0,-.005861,0,-0,-.007633,0,-0,-.00967,0,-0,-.008808,0,-0,-.004339,0,-0,-.00967,0,-0,-.009385,0,-0,-.008808,0,-0,-.007633,0,-0,-.005842,0,-0,-.010805,0,-0,-.010805,0,-0,-.005842,0,-0,-.005861,0,-0,-.007788,0,-0,-.010357,0,-0,-.007315,0,-0,-.010132,0,-0,-.008929,0,-0,-.007315,0,-0,-44e-5,-0,0,.001922,0,-0,-.005783,0,-0,-44e-5,0,-0,-.008868,-0,0,.001922,0,-0,-.007788],n:[0,0,0,0,0,0,0,0,0,.0643,-.5091,.1673,-.0015,-.0287,.0156,.2919,-.665,.0438,.284,-.7995,-.0248,.2806,-.58,-.0225,.4176,-.3654,.1067,.332,-.4281,.001,.1098,-.2302,.0978,0,0,0,.1356,-.0656,.0962,.4093,-.0739,.1943,.2713,.2146,.2384,.3237,.1401,.1914,.4019,-.1183,.1015,.2504,.3669,.2958,.3242,.0195,.1632,.2114,.3277,.2153,.2216,.4089,.2893,.0433,-.0365,.0121,0,0,0,0,0,0,0,0,0,0,0,0,-.0044,-.0699,-.0117,.0884,-.0154,.0207,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.1086,-.01,.0147,.108,-.0644,.0065,-.6902,-.0392,.1202,-.7132,.2274,.204,-.7298,.1452,.1971,-.7131,-.0467,.1318,-.6581,-.2199,.11,-.5854,-.2224,.0887,-.5162,-.3167,.0591,-.7978,-.3126,.2459,0,0,0,.0793,.057,.0397,.2002,.18,.0952,.0498,-.2225,-.0164,-.2408,-.4949,.0337,-.1634,-.4332,-.001,.3181,-.1083,.074,.2073,-.0358,.0402,.2738,-.1989,.021,.2215,-.2105,-.0237,.3053,-.1765,.0715,.3587,-.1249,.12,.1277,-.1491,.0045,.243,.0663,.1074,.0667,.2465,.1126,.2153,-.0827,.01,.2215,-.2105,-.0237,.1331,.0897,.0348,.0608,.063,.0167,.0276,.1398,.0285,-.0015,.0944,.0176,.0068,-.4139,.0294,.0087,-.26,.0019,.0592,-.3184,.011,.0361,.2924,.0865,.0753,-.0563,-.0034,.0592,-.3184,.011,.0821,.3156,.0894,.0321,.1358,.0661,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-.004,.1534,.0774,0,0,0,0,0,0,0,0,0,-.0542,.3935,.1329,.0034,.3953,.1271,-.3524,.5983,.3674,-.2717,.5838,.3732,-.1266,.6809,.5158,-.0714,.6161,.4613,-.0639,.6291,.5872,-.0278,.574,.5773,-.0073,.5379,.6046,.0338,.5466,.5865,-.0319,.5658,.4623,.1107,.4647,.419,0,0,0,0,0,0,0,0,0,.0047,-.0315,.0157,-.0115,-.0817,.0423,0,0,0,-.0369,-.0253,.0286,-.0037,-.002,.0011,0,0,0,-.1164,.0042,.0338,-.0414,-.0391,.0016,0,0,0,-.0206,-.0457,-.0064,0,0,0,-.0946,.1298,.0596,-.3385,-.041,.162,-.3709,-.3641,.1404,-.4156,-.2708,.1397,-.3155,.2723,.2823,-.3331,-.6141,.0433,-.4141,-.4576,.0815,-.2654,-.6298,-.012,-.1785,-.1518,-.0177,-.0504,-.4579,.1359,-.0974,-.699,.0191,-.1119,-.6606,-.079,-.0131,-.6908,.0303,.0093,-.0265,.0185,0,0,0,0,0,0,.003,-.5307,.1647,.1262,-.87,-.0553,.0077,-.6522,.0685,1e-4,-.805,-.085,.1339,-.6126,-.0805,.1464,-.6744,-.0613,.1743,-.4249,-.0654,.1004,-.2315,-.0704,.1187,.0379,.0407,-.0994,-.3095,-.0842,-.2166,.0956,.1023,-.2155,.2586,.2494,.5568,-.2804,.1978,.6151,-.2309,.2314,.6161,-.2435,.2255,-.056,-1.2618,.6841,.0059,-1.3159,.6749,.0716,-1.3434,.6701,.065,.5067,.5513,-3e-4,.46,.438,-.047,.5421,.6058,.0098,.5666,.6428,.0371,.3959,.3494,-.0284,.3652,.3032,-.0124,.4214,.3678,-.0569,.0393,.0094,-.1232,-.0259,.0065,-.0438,-.1056,-.0248,-.1982,.0073,.0355,-.0485,-.2048,-.0568,-.0464,-.2258,-.0656,-.2307,.0859,.1005,-.2523,-.0773,.0509,-.3764,-.1286,.101,-.355,-.1032,.1002,-.293,-.0781,.0844,-.3962,-.1058,.1461,-.1871,.2752,.1811,.0031,.6012,.459,.0452,.6769,.5715,-.0463,.5249,.5349,-.2414,.2874,.2906,-.2627,.1956,.2179,-.0283,.5171,.565,-.0292,.5318,.6215,.0618,.5731,.6374,-.053,.5669,.6349,-.0779,.4407,.3564,.3193,-.4821,.0256,.5051,-.396,.065,.5467,-.3506,.0761,.5661,-.2763,.0648,.7096,-.2265,.1599,.6925,-.1208,.125,.3978,-.0814,-.0077,.6464,.007,.0965,.7941,-.0743,.1763,.6464,.007,.0965,-.0639,-.2218,-.0108,-.1323,-.1097,.0156,.0964,-.4817,.0174,.0952,-.408,.0153,-.0666,-.135,-.0024,-.0589,-.3091,.0106,.0157,-.0303,-.0049,-.0752,.1104,.0207,-.149,-.0348,.0285,-.1323,-.1097,.0156,-.1882,.2522,.1074,-.0752,.1104,.0207,.0013,-.072,-.005,.0157,-.0303,-.0049,-.1577,.3165,.128,-.1175,.3862,.1397,-.0498,.1302,.0765,0,0,0,-.259,.1937,.1325,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-.2032,.166,.1211,-.2218,.0031,.055,-.2519,-.0722,.0565,-.0163,.0062,.0067,-.0463,.0287,.0138,-.0133,-.0212,-.0028,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.3647,.5617,.3805,.5294,.4328,.2913,.5231,.5318,.3475,.6319,.4414,.3294,.337,.6279,.4383,1.0786,-.5288,1.0245,1.0658,-.5414,1.0234,1.0574,-.5471,1.0231,-.2455,-.0795,.0528,-.2615,-.1153,.0466,-.2584,-.0922,.0517,-.3155,.2723,.2823,-.2711,.2734,.2285,-.3385,-.041,.162,.9196,.4092,.5207,.5231,.5318,.3475,.6319,.4414,.3294,0,0,0,-.0012,-.0027,5e-4,0,0,0,-.0353,-.0795,-.002,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}}});function H0(s,e){if(e===dd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===ca||e===zo){let t=s.getIndex();if(t===null){let a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===ca)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Ad=Dt(()=>{Jt()});function G_(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function q_(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Xt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:En})),s.DefaultMaterial}function xs(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ei(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function j_(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Y_(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function K_(s){let e,t=s.extensions&&s.extensions[rt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+W0(t.attributes):e=s.indices+":"+W0(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+W0(s.targets[n]);return e}function W0(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function mh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Z_(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}function Q_(s,e,t){let n=e.attributes,i=new Pn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new T(c[0],c[1],c[2]),new T(l[0],l[1],l[2])),o.normalized){let h=mh(_r[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new T,c=new T;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){let b=mh(_r[d.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new Tn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Id(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(let a in n){let o=ph[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return it.workingColorSpace!==tn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${it.workingColorSpace}" not supported.`),Ei(s,e),Q_(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?j_(s,e.targets,t):s})}var Wo,rt,X0,q0,j0,Y0,K0,Z0,J0,Q0,$0,eh,th,nh,ih,sh,rh,ah,oh,ch,Dd,la,Rd,lh,hh,uh,dh,Xo,W_,fh,Un,_r,Cd,Pd,V0,ph,Ji,X_,G0,J_,gh,Ld=Dt(()=>{Jt();Ad();Wo=class extends Si{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Y0(t)}),this.register(function(t){return new K0(t)}),this.register(function(t){return new sh(t)}),this.register(function(t){return new rh(t)}),this.register(function(t){return new ah(t)}),this.register(function(t){return new J0(t)}),this.register(function(t){return new Q0(t)}),this.register(function(t){return new $0(t)}),this.register(function(t){return new eh(t)}),this.register(function(t){return new j0(t)}),this.register(function(t){return new th(t)}),this.register(function(t){return new Z0(t)}),this.register(function(t){return new ih(t)}),this.register(function(t){return new nh(t)}),this.register(function(t){return new X0(t)}),this.register(function(t){return new oh(t)}),this.register(function(t){return new ch(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Zi.extractUrlBase(e);a=Zi.resolveURL(l,this.path)}else a=Zi.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new sa(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Dd){try{a[rt.KHR_BINARY_GLTF]=new lh(e)}catch(u){i&&i(u);return}r=JSON.parse(a[rt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new gh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case rt.KHR_MATERIALS_UNLIT:a[u]=new q0;break;case rt.KHR_DRACO_MESH_COMPRESSION:a[u]=new hh(r,this.dracoLoader);break;case rt.KHR_TEXTURE_TRANSFORM:a[u]=new uh;break;case rt.KHR_MESH_QUANTIZATION:a[u]=new dh;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};rt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},X0=class{constructor(e){this.parser=e,this.name=rt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new ye(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],tn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new pr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ln(h),l.distance=u;break;case"spot":l=new Io(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Ei(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},q0=class{constructor(){this.name=rt.KHR_MATERIALS_UNLIT}getMaterialType(){return hn}extendParams(e,t,n){let i=[];e.color=new ye(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],tn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Et))}return Promise.all(i)}},j0=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Y0=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ae(o,o)}return Promise.all(r)}},K0=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Z0=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},J0=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new ye(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],tn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Et)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Q0=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},$0=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new ye().setRGB(o[0],o[1],o[2],tn),Promise.all(r)}},eh=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},th=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new ye().setRGB(o[0],o[1],o[2],tn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Et)),Promise.all(r)}},nh=class{constructor(e){this.parser=e,this.name=rt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},ih=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},sh=class{constructor(e){this.parser=e,this.name=rt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},rh=class{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ah=class{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},oh=class{constructor(e){this.name=rt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(p),h,u,d,i.mode,i.filter),p})})}else return null}},ch=class{constructor(e){this.name=rt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Un.TRIANGLES&&l.mode!==Un.TRIANGLE_STRIP&&l.mode!==Un.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,p=[];for(let g of u){let b=new Be,m=new T,f=new Tt,y=new T(1,1,1),v=new In(g.geometry,g.material,d);for(let _=0;_<d;_++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,_),c.SCALE&&y.fromBufferAttribute(c.SCALE,_),v.setMatrixAt(_,b.compose(m,f,y));for(let _ in c)if(_==="_COLOR_0"){let I=c[_];v.instanceColor=new ms(I.array,I.itemSize,I.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,c[_]);Ct.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),p.push(v)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},Dd="glTF",la=12,Rd={JSON:1313821514,BIN:5130562},lh=class{constructor(e){this.name=rt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,la),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Dd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-la,r=new DataView(e,la),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Rd.JSON){let l=new Uint8Array(e,la+a,o);this.content=n.decode(l)}else if(c===Rd.BIN){let l=la+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},hh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=rt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=ph[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=ph[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],p=_r[d.componentType];l[u]=p.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(p){for(let g in p.attributes){let b=p.attributes[g],m=c[g];m!==void 0&&(b.normalized=m)}u(p)},o,l,tn,d)})})}},uh=class{constructor(){this.name=rt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},dh=class{constructor(){this.name=rt.KHR_MESH_QUANTIZATION}},Xo=class extends ji{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,d=u*u,p=d*u,g=e*l,b=g-l,m=-2*p+3*d,f=p-d,y=1-m,v=f-d+u;for(let _=0;_!==o;_++){let I=a[b+_+o],A=a[b+_+c]*h,C=a[g+_+o],D=a[g+_]*h;r[_]=y*I+v*A+m*C+f*D}return r}},W_=new Tt,fh=class extends Xo{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return W_.fromArray(r).normalize().toArray(r),r}},Un={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},_r={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Cd={9728:Ht,9729:mn,9984:T0,9985:zr,9986:Xs,9987:ni},Pd={33071:gi,33648:qr,10497:on},V0={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ph={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},X_={CUBICSPLINE:void 0,LINEAR:ir,STEP:nr},G0={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};J_=new Be,gh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new G_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new dr(this.options.manager):this.textureLoader=new Do(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new sa(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return xs(r,o,i),Ei(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[rt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(Zi.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=V0[i.type],o=_r[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Rt(l,a,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=V0[i.type],l=_r[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,b,m;if(p&&p!==u){let f=Math.floor(d/p),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count,v=t.cache.get(y);v||(b=new l(o,f*p,i.count*p/h),v=new or(b,p/h),t.cache.add(y,v)),m=new ps(v,c,d%p/h,g)}else o===null?b=new l(i.count*c):b=new l(o,d,i.count*c),m=new Rt(b,c,g);if(i.sparse!==void 0){let f=V0.SCALAR,y=_r[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,I=new y(a[1],v,i.sparse.count*f),A=new l(a[2],_,i.sparse.count*c);o!==null&&(m=new Rt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,D=I.length;C<D;C++){let E=I[C];if(m.setX(E,A[C*c]),c>=2&&m.setY(E,A[C*c+1]),c>=3&&m.setZ(E,A[C*c+2]),c>=4&&m.setW(E,A[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Cd[d.magFilter]||mn,h.minFilter=Cd[d.minFilter]||ni,h.wrapS=Pd[d.wrapS]||on,h.wrapT=Pd[d.wrapT]||on,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ht&&h.minFilter!==mn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(b){let m=new Yt(b);m.needsUpdate=!0,d(m)}),t.load(Zi.resolveURL(u,r.path),g,void 0,p)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),Ei(u,a),u.userData.mimeType=a.mimeType||Z_(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[rt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[rt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[rt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new qi,ln.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new ea,ln.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Xt}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[rt.KHR_MATERIALS_UNLIT]){let u=i[rt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new ye(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],tn),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Et)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Ut);let h=r.alphaMode||G0.OPAQUE;if(h===G0.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===G0.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==hn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ae(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==hn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==hn){let u=r.emissiveFactor;o.emissive=new ye().setRGB(u[0],u[1],u[2],tn)}return r.emissiveTexture!==void 0&&a!==hn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Et)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Ei(u,r),t.associations.set(u,{materials:e}),r.extensions&&xs(i,u,r),u})}createUniqueName(e){let t=vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[rt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Id(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=K_(l),u=i[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[rt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Id(new wt,l,t),i[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?q_(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,g=h.length;p<g;p++){let b=h[p],m=a[p],f,y=l[p];if(m.mode===Un.TRIANGLES||m.mode===Un.TRIANGLE_STRIP||m.mode===Un.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new bo(b,y):new Lt(b,y),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===Un.TRIANGLE_STRIP?f.geometry=H0(f.geometry,zo):m.mode===Un.TRIANGLE_FAN&&(f.geometry=H0(f.geometry,ca));else if(m.mode===Un.LINES)f=new yo(b,y);else if(m.mode===Un.LINE_STRIP)f=new cr(b,y);else if(m.mode===Un.LINE_LOOP)f=new Mo(b,y);else if(m.mode===Un.POINTS)f=new gs(b,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&Y_(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),Ei(f,r),m.extensions&&xs(i,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&xs(i,u[0],r),u[0];let d=new bn;r.extensions&&xs(i,d,r),t.associations.set(d,{meshes:e});for(let p=0,g=u.length;p<g;p++)d.add(u[p]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Bt(Vo.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Wi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ei(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new Be;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new _o(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let p=i.channels[u],g=i.samplers[p.sampler],b=p.target,m=b.node,f=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;b.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",y)),l.push(g),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],p=u[1],g=u[2],b=u[3],m=u[4],f=[];for(let y=0,v=d.length;y<v;y++){let _=d[y],I=p[y],A=g[y],C=b[y],D=m[y];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let E=n._createAnimationTracks(_,I,A,C,D);if(E)for(let M=0;M<E.length;M++)f.push(E[M])}return new ur(r,void 0,f)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,J_)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new $r:l.length>1?h=new bn:l.length===1?h=l[0]:h=new Ct,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Ei(h,r),r.extensions&&xs(n,h,r),r.matrix!==void 0){let u=new Be;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new bn;n.name&&(r.name=i.createUniqueName(n.name)),Ei(r,n),n.extensions&&xs(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,p]of i.associations)(d instanceof ln||d instanceof Yt)&&u.set(d,p);return h.traverse(d=>{let p=i.associations.get(d);p!=null&&u.set(d,p)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,c=[];Ji[r.path]===Ji.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(Ji[r.path]){case Ji.weights:l=vi;break;case Ji.rotation:l=yi;break;case Ji.position:case Ji.scale:l=Mi;break;default:n.itemSize===1?l=vi:l=Mi;break}let h=i.interpolation!==void 0?X_[i.interpolation]:ir,u=this._getArrayFromAccessor(n);for(let d=0,p=c.length;d<p;d++){let g=new l(c[d]+"."+Ji[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=mh(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof yi?fh:Xo;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});function ex(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function tx(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function nx(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Od),this.state=xt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ix(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case _s.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=xt.DOLLY;break;case _s.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=xt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=xt.ROTATE}break;case _s.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=xt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=xt.PAN}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(_h)}function sx(s){switch(this.state){case xt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case xt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function rx(s){this.enabled===!1||this.enableZoom===!1||this.state!==xt.NONE||(s.preventDefault(),this.dispatchEvent(_h),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Od))}function ax(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function ox(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ri.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=xt.TOUCH_ROTATE;break;case ri.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=xt.TOUCH_PAN;break;default:this.state=xt.NONE}break;case 2:switch(this.touches.TWO){case ri.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=xt.TOUCH_DOLLY_PAN;break;case ri.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=xt.TOUCH_DOLLY_ROTATE;break;default:this.state=xt.NONE}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(_h)}function cx(s){switch(this._trackPointer(s),this.state){case xt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case xt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case xt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case xt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=xt.NONE}}function lx(s){this.enabled!==!1&&s.preventDefault()}function hx(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ux(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ud,_h,Od,qo,Nd,$_,qt,vn,xt,bh,jo,Fd=Dt(()=>{Jt();Ud={type:"change"},_h={type:"start"},Od={type:"end"},qo=new xi,Nd=new Xn,$_=Math.cos(70*Vo.DEG2RAD),qt=new T,vn=2*Math.PI,xt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bh=1e-6,jo=class extends No{constructor(e,t=null){super(e,t),this.state=xt.NONE,this.enabled=!0,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_s.ROTATE,MIDDLE:_s.DOLLY,RIGHT:_s.PAN},this.touches={ONE:ri.ROTATE,TWO:ri.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new T,this._lastQuaternion=new Tt,this._lastTargetPosition=new T,this._quat=new Tt().setFromUnitVectors(e.up,new T(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new aa,this._sphericalDelta=new aa,this._scale=1,this._panOffset=new T,this._rotateStart=new ae,this._rotateEnd=new ae,this._rotateDelta=new ae,this._panStart=new ae,this._panEnd=new ae,this._panDelta=new ae,this._dollyStart=new ae,this._dollyEnd=new ae,this._dollyDelta=new ae,this._dollyDirection=new T,this._mouse=new ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=tx.bind(this),this._onPointerDown=ex.bind(this),this._onPointerUp=nx.bind(this),this._onContextMenu=lx.bind(this),this._onMouseWheel=rx.bind(this),this._onKeyDown=ax.bind(this),this._onTouchStart=ox.bind(this),this._onTouchMove=cx.bind(this),this._onMouseDown=ix.bind(this),this._onMouseMove=sx.bind(this),this._interceptControlDown=hx.bind(this),this._interceptControlUp=ux.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ud),this.update(),this.state=xt.NONE}update(e=null){let t=this.object.position;qt.copy(t).sub(this.target),qt.applyQuaternion(this._quat),this._spherical.setFromVector3(qt),this.autoRotate&&this.state===xt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=vn:n>Math.PI&&(n-=vn),i<-Math.PI?i+=vn:i>Math.PI&&(i-=vn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(qt.setFromSpherical(this._spherical),qt.applyQuaternion(this._quatInverse),t.copy(this.target).add(qt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=qt.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new T(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new T(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=qt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(qo.origin.copy(this.object.position),qo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(qo.direction))<$_?this.object.lookAt(this.target):(Nd.setFromNormalAndCoplanarPoint(this.object.up,this.target),qo.intersectPlane(Nd,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>bh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bh||this._lastTargetPosition.distanceToSquared(this.target)>bh?(this.dispatchEvent(Ud),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?vn/60*this.autoRotateSpeed*e:vn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){qt.setFromMatrixColumn(t,0),qt.multiplyScalar(-e),this._panOffset.add(qt)}_panUp(e,t){this.screenSpacePanning===!0?qt.setFromMatrixColumn(t,1):(qt.setFromMatrixColumn(t,0),qt.crossVectors(this.object.up,qt)),qt.multiplyScalar(e),this._panOffset.add(qt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;qt.copy(i).sub(this.target);let r=qt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(vn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-vn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(vn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-vn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ae,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}});var kd,Bd=Dt(()=>{kd=(function(){"use strict";var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:s,r,a=WebAssembly.instantiate(o(i),{}).then(function(f){r=f.instance,r.exports.__wasm_call_ctors()});function o(f){for(var y=new Uint8Array(f.length),v=0;v<f.length;++v){var _=f.charCodeAt(v);y[v]=_>96?_-97:_>64?_-39:_+4}for(var I=0,v=0;v<f.length;++v)y[I++]=y[v]<60?n[y[v]]:(y[v]-60)*64+y[++v];return y.buffer.slice(0,I)}function c(f,y,v,_,I,A){var C=r.exports.sbrk,D=v+3&-4,E=C(D*_),M=C(I.length),P=new Uint8Array(r.exports.memory.buffer);P.set(I,M);var z=f(E,v,_,M,I.length);if(z==0&&A&&A(E,D,_),y.set(P.subarray(E,E+v*_)),C(E-C(0)),z!=0)throw new Error("Malformed buffer data: "+z)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function p(f){var y={object:new Worker(f),pending:0,requests:{}};return y.object.onmessage=function(v){var _=v.data;y.pending-=_.count,y.requests[_.id][_.action](_.value),delete y.requests[_.id]},y}function g(f){for(var y="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),v=new Blob([y],{type:"text/javascript"}),_=URL.createObjectURL(v),I=0;I<f;++I)u[I]=p(_);URL.revokeObjectURL(_)}function b(f,y,v,_,I){for(var A=u[0],C=1;C<u.length;++C)u[C].pending<A.pending&&(A=u[C]);return new Promise(function(D,E){var M=new Uint8Array(v),P=d++;A.pending+=f,A.requests[P]={resolve:D,reject:E},A.object.postMessage({id:P,count:f,size:y,source:M,mode:_,filter:I},[M.buffer])})}function m(f){a.then(function(){var y=f.data;try{var v=new Uint8Array(y.count*y.size);c(r.exports[y.mode],v,y.count,y.size,y.source,r.exports[y.filter]),self.postMessage({id:y.id,count:y.count,action:"resolve",value:v},[v.buffer])}catch(_){self.postMessage({id:y.id,count:y.count,action:"reject",value:_})}})}return{ready:a,supported:!0,useWorkers:function(f){g(f)},decodeVertexBuffer:function(f,y,v,_,I){c(r.exports.meshopt_decodeVertexBuffer,f,y,v,_,r.exports[l[I]])},decodeIndexBuffer:function(f,y,v,_){c(r.exports.meshopt_decodeIndexBuffer,f,y,v,_)},decodeIndexSequence:function(f,y,v,_){c(r.exports.meshopt_decodeIndexSequence,f,y,v,_)},decodeGltfBuffer:function(f,y,v,_,I,A){c(r.exports[h[I]],f,y,v,_,r.exports[l[A]])},decodeGltfBufferAsync:function(f,y,v,_,I){return u.length>0?b(f,y,v,h[_],l[I]):a.then(function(){var A=new Uint8Array(f*y);return c(r.exports[h[_]],A,f,y,v,r.exports[l[I]]),A})}}})()});var Qi,Yo=Dt(()=>{Qi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`}});var un,dx,xh,fx,ai,vs=Dt(()=>{Jt();un=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},dx=new Wi(-1,1,1,-1,0,1),xh=class extends wt{constructor(){super(),this.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new st([0,2,0,0,2,0],2))}},fx=new xh,ai=class{constructor(e){this._mesh=new Lt(fx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,dx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}});var Ko,zd=Dt(()=>{Jt();vs();Ko=class extends un{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof yt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=xn.clone(e.uniforms),this.material=new yt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ai(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}});var ha,Zo,vh=Dt(()=>{vs();ha=class extends un{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},Zo=class extends un{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}});var Jo,Hd=Dt(()=>{Jt();Yo();zd();vh();vh();Jo=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ae);this._width=n.width,this._height=n.height,t=new Kt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:_n}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ko(Qi),this.copyPass.material.blending=zt,this.clock=new mr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ha!==void 0&&(a instanceof ha?n=!0:a instanceof Zo&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}});var ua,Vd=Dt(()=>{Jt();vs();ua=class extends un{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ye}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}});function Gd(s=5){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=px(e),n=t.length,i=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],c=2*Math.PI*o/n,l=new T(Math.cos(c),Math.sin(c),0).normalize();i[a*4]=(l.x*.5+.5)*255,i[a*4+1]=(l.y*.5+.5)*255,i[a*4+2]=127,i[a*4+3]=255}let r=new Xi(i,e,e);return r.wrapS=on,r.wrapT=on,r.needsUpdate=!0,r}function px(s){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=e*e,n=Array(t).fill(0),i=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(i===-1&&r===e?(r=e-2,i=0):(r===e&&(r=0),i<0&&(i=e-1)),n[i*e+r]!==0){r-=2,i++;continue}else n[i*e+r]=a++;r++,i--}return n}var da,fa,Qo,Wd=Dt(()=>{Jt();da={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ae},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Be},cameraProjectionMatrixInverse:{value:new Be},cameraWorldMatrix:{value:new Be},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new T(-1,-1,-1)},sceneBoxMax:{value:new T(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},fa={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Qo={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`}});function yh(s,e,t){let n=mx(s,e,t),i="vec3[SAMPLES](";for(let r=0;r<s;r++){let a=n[r];i+=`vec3(${a.x}, ${a.y}, ${a.z})${r<s-1?",":")"}`}return i}function mx(s,e,t){let n=[];for(let i=0;i<s;i++){let r=2*Math.PI*e*i/s,a=Math.pow(i/(s-1),t);n.push(new T(Math.cos(r),Math.sin(r),a))}return n}var pa,Xd=Dt(()=>{Jt();pa={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:yh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ae},cameraProjectionMatrixInverse:{value:new Be},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`}});var $o,qd=Dt(()=>{$o=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}dot4(e,t,n,i,r){return e[0]*t+e[1]*n+e[2]*i+e[3]*r}noise(e,t){let n,i,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,c=Math.floor(e+o),l=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(c+l)*h,d=c-u,p=l-u,g=e-d,b=t-p,m,f;g>b?(m=1,f=0):(m=0,f=1);let y=g-m+h,v=b-f+h,_=g-1+2*h,I=b-1+2*h,A=c&255,C=l&255,D=this.perm[A+this.perm[C]]%12,E=this.perm[A+m+this.perm[C+f]]%12,M=this.perm[A+1+this.perm[C+1]]%12,P=.5-g*g-b*b;P<0?n=0:(P*=P,n=P*P*this.dot(this.grad3[D],g,b));let z=.5-y*y-v*v;z<0?i=0:(z*=z,i=z*z*this.dot(this.grad3[E],y,v));let V=.5-_*_-I*I;return V<0?r=0:(V*=V,r=V*V*this.dot(this.grad3[M],_,I)),70*(n+i+r)}noise3d(e,t,n){let i,r,a,o,l=(e+t+n)*.3333333333333333,h=Math.floor(e+l),u=Math.floor(t+l),d=Math.floor(n+l),p=1/6,g=(h+u+d)*p,b=h-g,m=u-g,f=d-g,y=e-b,v=t-m,_=n-f,I,A,C,D,E,M;y>=v?v>=_?(I=1,A=0,C=0,D=1,E=1,M=0):y>=_?(I=1,A=0,C=0,D=1,E=0,M=1):(I=0,A=0,C=1,D=1,E=0,M=1):v<_?(I=0,A=0,C=1,D=0,E=1,M=1):y<_?(I=0,A=1,C=0,D=0,E=1,M=1):(I=0,A=1,C=0,D=1,E=1,M=0);let P=y-I+p,z=v-A+p,V=_-C+p,X=y-D+2*p,te=v-E+2*p,q=_-M+2*p,ie=y-1+3*p,W=v-1+3*p,re=_-1+3*p,he=h&255,ve=u&255,Ge=d&255,tt=this.perm[he+this.perm[ve+this.perm[Ge]]]%12,K=this.perm[he+I+this.perm[ve+A+this.perm[Ge+C]]]%12,ce=this.perm[he+D+this.perm[ve+E+this.perm[Ge+M]]]%12,Te=this.perm[he+1+this.perm[ve+1+this.perm[Ge+1]]]%12,ue=.6-y*y-v*v-_*_;ue<0?i=0:(ue*=ue,i=ue*ue*this.dot3(this.grad3[tt],y,v,_));let Ee=.6-P*P-z*z-V*V;Ee<0?r=0:(Ee*=Ee,r=Ee*Ee*this.dot3(this.grad3[K],P,z,V));let Oe=.6-X*X-te*te-q*q;Oe<0?a=0:(Oe*=Oe,a=Oe*Oe*this.dot3(this.grad3[ce],X,te,q));let He=.6-ie*ie-W*W-re*re;return He<0?o=0:(He*=He,o=He*He*this.dot3(this.grad3[Te],ie,W,re)),32*(i+r+a+o)}noise4d(e,t,n,i){let r=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,h,u,d,p,g,b=(e+t+n+i)*c,m=Math.floor(e+b),f=Math.floor(t+b),y=Math.floor(n+b),v=Math.floor(i+b),_=(m+f+y+v)*l,I=m-_,A=f-_,C=y-_,D=v-_,E=e-I,M=t-A,P=n-C,z=i-D,V=E>M?32:0,X=E>P?16:0,te=M>P?8:0,q=E>z?4:0,ie=M>z?2:0,W=P>z?1:0,re=V+X+te+q+ie+W,he=a[re][0]>=3?1:0,ve=a[re][1]>=3?1:0,Ge=a[re][2]>=3?1:0,tt=a[re][3]>=3?1:0,K=a[re][0]>=2?1:0,ce=a[re][1]>=2?1:0,Te=a[re][2]>=2?1:0,ue=a[re][3]>=2?1:0,Ee=a[re][0]>=1?1:0,Oe=a[re][1]>=1?1:0,He=a[re][2]>=1?1:0,ut=a[re][3]>=1?1:0,Xe=E-he+l,dt=M-ve+l,F=P-Ge+l,Nt=z-tt+l,je=E-K+2*l,Ze=M-ce+2*l,Le=P-Te+2*l,at=z-ue+2*l,Ue=E-Ee+3*l,R=M-Oe+3*l,S=P-He+3*l,H=z-ut+3*l,Z=E-1+4*l,ee=M-1+4*l,j=P-1+4*l,Ce=z-1+4*l,fe=m&255,xe=f&255,Je=y&255,se=v&255,Me=o[fe+o[xe+o[Je+o[se]]]]%32,Fe=o[fe+he+o[xe+ve+o[Je+Ge+o[se+tt]]]]%32,ze=o[fe+K+o[xe+ce+o[Je+Te+o[se+ue]]]]%32,Se=o[fe+Ee+o[xe+Oe+o[Je+He+o[se+ut]]]]%32,nt=o[fe+1+o[xe+1+o[Je+1+o[se+1]]]]%32,ke=.6-E*E-M*M-P*P-z*z;ke<0?h=0:(ke*=ke,h=ke*ke*this.dot4(r[Me],E,M,P,z));let ot=.6-Xe*Xe-dt*dt-F*F-Nt*Nt;ot<0?u=0:(ot*=ot,u=ot*ot*this.dot4(r[Fe],Xe,dt,F,Nt));let N=.6-je*je-Ze*Ze-Le*Le-at*at;N<0?d=0:(N*=N,d=N*N*this.dot4(r[ze],je,Ze,Le,at));let pe=.6-Ue*Ue-R*R-S*S-H*H;pe<0?p=0:(pe*=pe,p=pe*pe*this.dot4(r[Se],Ue,R,S,H));let G=.6-Z*Z-ee*ee-j*j-Ce*Ce;return G<0?g=0:(G*=G,g=G*G*this.dot4(r[nt],Z,ee,j,Ce)),27*(h+u+d+p+g)}}});var ma,jd=Dt(()=>{Jt();vs();Wd();Xd();Yo();qd();ma=class s extends un{constructor(e,t,n,i,r,a,o){super(),this.width=n!==void 0?n:512,this.height=i!==void 0?i:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Gd(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Kt(this.width,this.height,{type:_n}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new yt({defines:Object.assign({},da.defines),uniforms:xn.clone(da.uniforms),vertexShader:da.vertexShader,fragmentShader:da.fragmentShader,blending:zt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ao,this.normalMaterial.blending=zt,this.pdMaterial=new yt({defines:Object.assign({},pa.defines),uniforms:xn.clone(pa.uniforms),vertexShader:pa.vertexShader,fragmentShader:pa.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new yt({defines:Object.assign({},fa.defines),uniforms:xn.clone(fa.uniforms),vertexShader:fa.vertexShader,fragmentShader:fa.fragmentShader,blending:zt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new yt({uniforms:xn.clone(Qi.uniforms),vertexShader:Qi.vertexShader,fragmentShader:Qi.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ko,blendDst:gr,blendEquation:Cn,blendSrcAlpha:Fo,blendDstAlpha:gr,blendEquationAlpha:Cn}),this.blendMaterial=new yt({uniforms:xn.clone(Qo.uniforms),vertexShader:Qo.vertexShader,fragmentShader:Qo.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:x0,blendSrc:ko,blendDst:gr,blendEquation:Cn,blendSrcAlpha:Fo,blendDstAlpha:gr,blendEquationAlpha:Cn}),this.fsQuad=new ai(null),this.originalClearColor=new ye,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new ar,this.depthTexture.format=Gi,this.depthTexture.type=Vi,this.normalRenderTarget=new Kt(this.width,this.height,{minFilter:Ht,magFilter:Ht,type:_n,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=yh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Off:break;case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=zt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=zt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=zt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=zt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=zt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,i,r){e.getClearColor(this.originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}renderOverride(e,t,n,i,r){e.getClearColor(this.originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let i=t.get(n);n.visible=i}),t.clear()}generateNoise(e=64){let t=new $o,n=e*e*4,i=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let c=a,l=o;i[(a*e+o)*4]=(t.noise(c,l)*.5+.5)*255,i[(a*e+o)*4+1]=(t.noise(c+e,l)*.5+.5)*255,i[(a*e+o)*4+2]=(t.noise(c,l+e)*.5+.5)*255,i[(a*e+o)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}let r=new Xi(i,e,e,gn,Kn);return r.wrapS=on,r.wrapT=on,r.needsUpdate=!0,r}};ma.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5}});var Yd,Kd=Dt(()=>{Jt();Yd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ye(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`}});var xr,Zd=Dt(()=>{Jt();vs();Yo();Kd();xr=class s extends un{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ae(e.x,e.y):new ae(256,256),this.clearColor=new ye(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Kt(r,a,{type:_n}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Kt(r,a,{type:_n});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let p=new Kt(r,a,{type:_n});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}let o=Yd;this.highPassUniforms=xn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new yt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ae(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Qi;this.copyUniforms=xn.clone(h.uniforms),this.blendMaterial=new yt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Hi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ye,this.oldClearAlpha=1,this.basic=new hn,this.fsQuad=new ai(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new ae(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new yt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ae(.5,.5)},direction:{value:new ae(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new yt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};xr.BlurDirectionX=new ae(1,0);xr.BlurDirectionY=new ae(0,1)});var Jd,Qd=Dt(()=>{Jd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`}});var ec,$d=Dt(()=>{Jt();vs();Qd();ec=class extends un{constructor(){super();let e=Jd;this.uniforms=xn.clone(e.uniforms),this.material=new wo({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ai(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},it.getTransfer(this._outputColorSpace)===gt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===v0?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===y0?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===M0?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===oa?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===S0?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===E0&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}});function Nn(s,e,t,n,i,r){let a=2*Math.PI*i/4,o=Math.max(r-2*i,0),c=Math.PI/4;ga.copy(e),ga[n]=0,ga.normalize();let l=.5*a/(a+o),h=1-ga.angleTo(s)/c;return Math.sign(ga[t])===1?h*l:o/(a+o)+l+l*(1-h)}var ga,tc,ef=Dt(()=>{Jt();ga=new T;tc=class extends fs{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new T,c=new T,l=new T(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,g=new T,b=.5/i;for(let m=0,f=0;m<h.length;m+=3,f+=2)switch(o.fromArray(h,m),c.copy(o),c.x-=Math.sign(c.x)*b,c.y-=Math.sign(c.y)*b,c.z-=Math.sign(c.z)*b,c.normalize(),h[m+0]=l.x*Math.sign(o.x)+c.x*r,h[m+1]=l.y*Math.sign(o.y)+c.y*r,h[m+2]=l.z*Math.sign(o.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/p)){case 0:g.set(1,0,0),d[f+0]=Nn(g,c,"z","y",r,n),d[f+1]=1-Nn(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),d[f+0]=1-Nn(g,c,"z","y",r,n),d[f+1]=1-Nn(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),d[f+0]=1-Nn(g,c,"x","z",r,e),d[f+1]=Nn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[f+0]=1-Nn(g,c,"x","z",r,e),d[f+1]=1-Nn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[f+0]=1-Nn(g,c,"x","y",r,e),d[f+1]=1-Nn(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),d[f+0]=Nn(g,c,"x","y",r,e),d[f+1]=1-Nn(g,c,"y","x",r,t);break}}}});function dn(s,e,t,n=[1,1],i=!0){let r=document.createElement("canvas");r.width=s,r.height=e;let a=r.getContext("2d");t(a,s,e);let o=new bs(r);return o.wrapS=o.wrapT=on,o.repeat.set(n[0],n[1]),i&&(o.colorSpace=Et),o.anisotropy=8,o}function Eh(s,e,t,n,i,r=40){for(let a=0;a<r;a++){s.strokeStyle=Ti(i,$(.78,1.12)),s.globalAlpha=$(.15,.45),s.lineWidth=$(.6,2.2);let o=t+$(0,n),c=$(.5,3),l=$(.004,.02),h=$(0,6);s.beginPath();for(let u=0;u<=e;u+=8)s.lineTo(u,o+Math.sin(u*l+h)*c);s.stroke()}s.globalAlpha=1}function J(s,e,t=0,n=0,i=0,r,a=!0){let o=new Lt(s,e);return o.position.set(t,n,i),o.castShadow=a,o.receiveShadow=!0,r.add(o),o}function tf(s,e,t="#fff",n=256,i=64,r=34){return dn(n,i,a=>{a.fillStyle=e,a.fillRect(0,0,n,i),a.fillStyle=t,a.font=`bold ${r}px "Noto Sans TC","PingFang TC","Microsoft JhengHei",sans-serif`,a.textAlign="center",a.textBaseline="middle",a.fillText(s,n/2,i/2+2)})}function Ms(s,e,t,n=1,i=0){let r=bt(s,e,i,t);r.scale.setScalar(n),J(new Ye(.11,.085,.18,20),de.pot,0,.09,0,r),J(new Ye(.1,.1,.01,20),Ae({color:4863011}),0,.175,0,r,!1);for(let a=0;a<9;a++){let o=a/9*Math.PI*2+$(0,.5),c=$(.35,.9),l=J(new Wt(.07,14,10),a%2?de.leaf:de.leaf2,Math.sin(o)*.08*c,.2+$(.05,.28),Math.cos(o)*.08*c,r);l.scale.set(.55,.22,1.25),l.rotation.set(-.6*c,o,0)}return r}function Sh(s,e,t,n,i=15986146){let r=bt(s,e,t,n);J(new Ye(.035,.03,.075,18),Ae({color:i,roughness:.3}),0,.037,0,r);let a=J(new ia(.02,.006,8,16),Ae({color:i,roughness:.3}),.037,.04,0,r);return a.rotation.y=Math.PI/2,J(new Ye(.03,.03,.002,18),Ae({color:5978658,roughness:.2}),0,.07,0,r,!1),r}function Sx(s,e,t,n,i=0){let r=bt(s,e,t,n,i);J(new Ye(.06,.07,.02,20),de.brass,0,.01,0,r);let a=J(new Ye(.008,.008,.26,8),de.brass,0,.13,0,r);a.rotation.z=.15;let o=bt(r,-.03,.26,.04);return o.rotation.x=.7,J(new Ye(.03,.075,.09,20,1,!0),Ae({color:3104080,side:Ut,roughness:.4}),0,0,0,o),J(new Wt(.025,12,8),de.bulb,0,-.03,0,o,!1),r}function nf(s,e){let t={seats:{},lounge:[],sleepSeats:[],spots:{},animated:[],lights:{}},n={top:{value:new ye(7846124)},bot:{value:new ye(15201279)}},i=new Lt(new Wt(90,32,16),new yt({side:en,depthWrite:!1,fog:!1,uniforms:n,vertexShader:"varying vec3 vP; void main(){ vP=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform vec3 top; uniform vec3 bot; varying vec3 vP; void main(){ float h=clamp(vP.y*1.6+0.1,0.0,1.0); gl_FragColor=vec4(mix(bot,top,pow(h,0.8)),1.0);}"}));s.add(i),t.skyU=n;let r=[];for(let w=0;w<700;w++){let B=$(0,6.28),Y=$(.12,1.4);r.push(Math.cos(B)*Math.cos(Y)*80,Math.sin(Y)*80,Math.sin(B)*Math.cos(Y)*80)}let a=new wt;a.setAttribute("position",new st(r,3)),t.stars=new gs(a,new qi({color:16777215,size:.35,transparent:!0,opacity:0,fog:!1})),s.add(t.stars);let o=J(new hr(60,64),Ae({map:yx,roughness:1}),0,0,0,s,!1);o.rotation.x=-Math.PI/2;let c=J(new hr(9,48),Ae({color:10274663,roughness:1,transparent:!0,alphaMap:dn(256,256,w=>{let B=w.createRadialGradient(128,128,30,128,128,128);B.addColorStop(0,"#fff"),B.addColorStop(.65,"#bbb"),B.addColorStop(1,"#000"),w.fillStyle=B,w.fillRect(0,0,256,256)},[1,1],!1),depthWrite:!1}),0,.005,.5,s,!1);c.rotation.x=-Math.PI/2,c.scale.set(1.3,1,1);let l=bt(s),h=Ke.x1-Ke.x0,u=Ke.z1-Ke.z0,d=(Ke.z0+Ke.z1)/2;J(De(h+.5,.12,u+.4,.04),de.stone,0,.06,d,l);let p=J(De(h+.2,.03,u+.1,.01),de.floor,0,Ve-.015,d,l);J(De(1.4,.08,.4,.03),de.stone,-.3,.04,Ke.z1+.42,l);let g=.13,b=.245,m=10,f=m*b;t.wallTop=f;let y=[de.log,de.logEnd,de.logEnd];function v(w,B,Y,ne,x){let L=J(new Ye(g,g,w,18),y,B,Y,ne,l);return x==="x"?L.rotation.z=Math.PI/2:L.rotation.x=Math.PI/2,L}for(let w=0;w<m;w++){let B=Ve+g+w*b;v(h+.6,0,B,Ke.z0-.05,"x");let Y=w/(m-1),ne=(u+.3)*(1-Y*.72);for(let x of[Ke.x0-.02,Ke.x1+.02])v(ne,x,B+b/2,Ke.z0-.15+ne/2,"z")}function _(w,B,Y,ne){let x=bt(l,w,B,Ke.z0+.1);J(De(Y,ne,.04,.01),de.window,0,0,0,x,!1);for(let[L,O,k,U]of[[Y+.12,.07,0,ne/2],[Y+.12,.07,0,-ne/2],[.07,ne,-Y/2,0],[.07,ne,Y/2,0],[.04,ne,0,0],[Y,.04,0,0]])J(De(L,O,.08,.015),de.woodLight,k,U,.02,x);return J(De(Y+.24,.05,.18,.02),de.woodLight,0,-ne/2-.05,.08,x),x}_(-5.05,Ve+1.5,.75,.75);let I=_(-.35,Ve+1.55,.9,.85);Ms(I,-.25,.12,.45,-.39),Ms(I,.25,.12,.4,-.39);for(let w of[Ke.x0-.02,Ke.x1+.02])J(new Ye(.16,.18,f+.35,18),de.logDark,w,Ve+(f+.35)/2,Ke.z0-.08,l),J(new Ye(.14,.16,.9,18),de.logDark,w,Ve+.45,Ke.z1+.05,l);let A=bt(s,-4.4,0,Ke.z1+1.15,.25);for(let w of[-.55,.55])J(new Ye(.04,.05,.85,10),de.logDark,w,.42,0,A);J(De(1.4,.4,.06,.03),new Xt({map:tf("\u5EE3\u8343 bot \u68EE\u6797\u5C0F\u5C4B","#7a5233","#fff6dd",512,140,60),roughness:.6}),0,.7,.03,A);let C=new Wt(.035,10,8),D=Ae({color:2762016}),E=new In(C,de.bulb,400),M=0,P=new Be;function z(w,B,Y){let ne=[];for(let O=0;O<=40;O++){let k=O/40,U=w.clone().lerp(B,k);U.y-=Math.sin(k*Math.PI)*Y,ne.push(U)}let x=new lr(ne);J(new To(x,60,.006,4),D,0,0,0,s,!1);let L=Math.floor(w.distanceTo(B)/.32);for(let O=1;O<L;O++){let k=x.getPoint(O/L);P.makeTranslation(k.x,k.y-.03,k.z),E.setMatrixAt(M++,P)}}let V=Ve+f+.05;for(let w=0;w<4;w++){let B=Ke.x0+w*h/4,Y=B+h/4;z(new T(B,V,Ke.z0+.12),new T(Y,V,Ke.z0+.12),.28)}z(new T(Ke.x0,V-.25,-1.4),new T(Ke.x1,V-.25,-1.4),.45),E.count=M,E.castShadow=!1,s.add(E);let X={stock:(w,B,Y)=>{w.fillStyle="#10161f",w.fillRect(0,0,B,Y),w.strokeStyle="#25303f";for(let x=1;x<6;x++)w.beginPath(),w.moveTo(0,x*Y/6),w.lineTo(B,x*Y/6),w.stroke();let ne=Y*.6;for(let x=0;x<26;x++){let L=ne,O=ne+$(-26,22),k=O<L;w.fillStyle=k?"#ff4d4d":"#2ecc71";let U=14+x*18;w.fillRect(U+4,Math.min(L,O)-$(4,12),2,Math.abs(O-L)+$(10,22)),w.fillRect(U,Math.min(L,O),10,Math.max(3,Math.abs(O-L))),ne=Math.max(30,Math.min(Y-30,O))}w.fillStyle="#ffd34d",w.font="bold 26px sans-serif",w.fillText("\u52A0\u6B0A\u6307\u6578 \u25B2 1.8%",14,32)},mail:(w,B,Y)=>{w.fillStyle="#c99b63",w.fillRect(0,0,B,Y);for(let ne=0;ne<300;ne++)w.fillStyle=$i()<.5?"#b5864f":"#d9ad75",w.fillRect($(0,B),$(0,Y),3,3);for(let ne=0;ne<7;ne++){let x=30+ne%4*118+$(-8,8),L=40+Math.floor(ne/4)*150+$(-8,8);w.save(),w.translate(x+45,L+30),w.rotate($(-.2,.2)),w.fillStyle=["#fff","#ffe9d6","#e8f1ff"][ne%3],w.fillRect(-48,-32,96,64),w.strokeStyle="#d4a017",w.lineWidth=3,w.beginPath(),w.moveTo(-48,-32),w.lineTo(0,4),w.lineTo(48,-32),w.stroke(),w.fillStyle="#e33b3b",w.beginPath(),w.arc(0,-36,6,0,7),w.fill(),w.restore()}w.fillStyle="#5a3a1a",w.font="bold 28px sans-serif",w.fillText("\u6536\u4EF6\u5323 \u2709 0 \u672A\u8B80",150,Y-24)},plastic:(w,B,Y)=>{w.fillStyle="#1f4f8f",w.fillRect(0,0,B,Y),w.strokeStyle="rgba(255,255,255,0.18)";for(let ne=0;ne<B;ne+=16)w.beginPath(),w.moveTo(ne,0),w.lineTo(ne,Y),w.stroke(),w.beginPath(),w.moveTo(0,ne),w.lineTo(B,ne),w.stroke();w.strokeStyle="#fff",w.lineWidth=3,w.strokeRect(60,70,260,170),w.beginPath(),w.moveTo(60,160),w.lineTo(200,160),w.lineTo(200,240),w.moveTo(320,120),w.lineTo(400,120),w.lineTo(400,240),w.lineTo(320,240),w.stroke(),w.beginPath(),w.arc(200,160,40,0,Math.PI/2),w.stroke(),w.fillStyle="#fff",w.font="bold 24px sans-serif",w.fillText("\u5857\u88DD\u5831\u50F9 A-102",300,290),w.fillText("12.5 m",150,60)},acnh:(w,B,Y)=>{w.fillStyle="#7fc8e8",w.fillRect(0,0,B,Y),w.fillStyle="#f3e3a8",w.beginPath(),w.ellipse(B/2,Y/2,210,120,.1,0,7),w.fill(),w.fillStyle="#7cc25a",w.beginPath(),w.ellipse(B/2,Y/2,190,102,.1,0,7),w.fill(),w.fillStyle="#4f9a3c";for(let ne=0;ne<14;ne++)w.beginPath(),w.arc(B/2+$(-150,150),Y/2+$(-70,70),$(8,14),0,7),w.fill();w.fillStyle="#6ec6ff",w.beginPath(),w.ellipse(B/2+60,Y/2+10,40,22,0,0,7),w.fill(),w.fillStyle="#fff",w.font="bold 30px sans-serif",w.fillText("\u4ECA\u65E5\u7F8E\u5CF6 \u{1F3DD}",150,50)},kid:(w,B,Y)=>{let g=w.createLinearGradient(0,0,0,Y);g.addColorStop(0,"#8fd4f2"),g.addColorStop(.52,"#d7f1fb"),g.addColorStop(.52,"#1e88c8"),g.addColorStop(1,"#1565a8"),w.fillStyle=g,w.fillRect(0,0,B,Y),w.fillStyle="#fff8e6",w.fillRect(78,48,356,220),w.strokeStyle="#1e88c8",w.lineWidth=6,w.strokeRect(78,48,356,220),w.fillStyle="#1e88c8",w.font="bold 28px sans-serif",w.fillText("\u4ECA\u65E5\u8DD1\u817F\u6E05\u55AE",96,92),w.fillStyle="#5a4128",w.font="22px sans-serif",w.fillText("1. 10:00 \u8DD1\u817F",108,145),w.fillText("2. 15:00 \u8DD1\u817F",108,185),w.fillText("3. \u8B1B\u4E00\u500B\u51B7\u7B11\u8A71",108,225),w.fillStyle="#f08a2a",w.beginPath(),w.moveTo(400,250),w.lineTo(470,200),w.lineTo(455,275),w.closePath(),w.fill()}};t.screens=[],e.forEach((w,B)=>{let Y=gx[B],ne=bt(s,Y,Ve,bx);J(De(.92,.05,.5,.02),de.woodLight,0,.42,0,ne);for(let Re of[-.42,.42])J(De(.05,.4,.44,.02),de.wood,Re,.2,0,ne);J(De(.84,.16,.03,.01),de.wood,0,.32,.2,ne),J(De(.42,.1,.02,.008),new Xt({map:tf(w.name,w.color),roughness:.5}),0,.33,.225,ne);let x=bt(ne,-.05,.445,-.01);J(De(.3,.015,.2,.006),de.metal,0,.007,0,x);let L=bt(x,0,.01,.1);L.rotation.x=.35,J(De(.3,.19,.012,.006),de.metal,0,.095,0,L);let O=new Xt({color:0,emissive:new ye(w.color).lerp(new ye("#fff"),.4),emissiveIntensity:.9});J(new si(.27,.16),O,0,.095,-.007,L,!1).rotation.y=Math.PI,Sx(ne,-.36,.445,-.1,.4),Ms(ne,.36,-.12,.45,.445);let k=bt(s,Y,Ve,Mh),U=new ye(w.color).lerp(new ye("#fff"),.25),oe=Ae({map:vr("#"+U.getHexString()),roughness:.9});J(De(.38,.06,.36,.025),oe,0,Jn-.03,0,k),J(De(.38,.3,.06,.03),oe,0,Jn+.16,-.19,k),J(new Ye(.02,.02,Jn-.04,10),de.metal,0,(Jn-.04)/2+.02,0,k);for(let Re=0;Re<5;Re++){let we=Re/5*Math.PI*2,le=J(De(.17,.02,.03,.008),de.metal,Math.sin(we)*.08,.02,Math.cos(we)*.08,k);le.rotation.y=we+Math.PI/2}t.seats[w.id]={pos:new T(Y,Ve+Jn,Mh),yaw:0,approach:new T(Y+.7,Ve,Mh),via:[new T(Y+.7,Ve,ys)],kind:"desk"},t.spots[w.id]={stand:new T(Y,Ve,-.9),via:[new T(Y,Ve,ys)]};let be=dn(512,320,X[w.id]),Pe=bt(s,Y,Ve+1.25,Ke.z0+.1);J(De(.86,.58,.04,.02),de.woodDark,0,0,0,Pe);let Ie=new Xt({map:be,roughness:.6,emissive:16777215,emissiveMap:be,emissiveIntensity:w.id==="stock"?.5:.05});if(J(new si(.76,.48),Ie,0,0,.022,Pe,!1),t.screens.push(Ie),w.id==="stock"){Sh(ne,.2,.445,.08,3100559);let Re=bt(ne,.12,.445,-.14);for(let le=0;le<4;le++)J(De(.16,.006,.21,.002),de.white,$(-.01,.01),le*.007,$(-.01,.01),Re).rotation.y=$(-.15,.15);let we=bt(ne,.3,.445,.12,-2.4);J(new Ye(.03,.04,.01,12),de.metal,0,.005,0,we),J(new Ye(.008,.008,.08,8),de.metal,0,.04,0,we),J(De(.2,.13,.01,.004),de.metal,0,.13,0,we),J(new si(.18,.11),new Xt({map:be,emissive:16777215,emissiveMap:be,emissiveIntensity:.8}),0,.13,.006,we,!1)}else if(w.id==="mail"){let Re=bt(ne,.2,.445,.06);for(let we=0;we<2;we++){J(De(.2,.012,.15,.004),de.brass,0,we*.06,0,Re);for(let le of[-.095,.095])J(De(.008,.06,.15,.003),de.brass,le,we*.06+.03,0,Re);for(let le=0;le<3;le++)J(De(.17,.005,.11,.002),Ae({color:[16777215,16769732,14674687][le]}),$(-.01,.01),we*.06+.012+le*.006,$(-.01,.01),Re).rotation.y=$(-.2,.2)}for(let we=0;we<3;we++){let le=J(De(.12,.004,.08,.002),Ae({color:16774880}),-.28+we*.03,.447+we*.004,.14,ne);le.rotation.y=$(-.5,.5)}J(new Wt(.012,10,8),Ae({color:12597547}),-.26,.46,.14,ne)}else if(w.id==="plastic"){let Re=bt(ne,.24,.445,.08),we=J(new Wt(.08,24,12,0,Math.PI*2,0,Math.PI/2),Ae({color:16052714,roughness:.35}),0,.012,0,Re);J(new Ye(.1,.1,.012,24),Ae({color:16052714,roughness:.35}),.012,.006,0,Re),J(De(.012,.06,.14,.005),Ae({color:16052714}),0,.06,0,Re);for(let le=0;le<3;le++){let Qe=J(new Ye(.02,.02,.38,12),Ae({color:[8366297,10404328,16777215][le]}),-.3+le*.01,.465+le*.03,.12-le*.04,ne);Qe.rotation.z=Math.PI/2,Qe.rotation.y=.3}for(let[le,Qe,ft]of[[.62,.18,14969631],[.72,.42,3832789],[.5,.45,15911244]]){let ct=bt(ne,le-.05,0,Qe+.25);J(new Ye(.075,.075,.15,20),Ae({color:14211288,metalness:.6,roughness:.35}),0,.075,0,ct),J(new Ye(.076,.076,.07,20),Ae({color:ft,roughness:.5}),0,.08,0,ct),J(new Ye(.072,.072,.01,20),Ae({color:ft,roughness:.3}),0,.152,0,ct);let Ft=J(new ia(.07,.004,6,20,Math.PI),de.metal,0,.15,0,ct);Ft.rotation.y=$(0,3)}}else if(w.id==="acnh"){let Re=bt(ne,.2,.445,.08);J(new Ye(.1,.08,.06,20,1,!0),Ae({color:13146974,side:Ut,map:nc("#c89b5e")}),0,.03,0,Re);for(let le=0;le<4;le++){let Qe=bt(Re,Math.sin(le*1.7)*.045,.06+(le===3?.03:0),Math.cos(le*1.7)*.045);J(new Wt(.035,16,12),Ae({color:16447216,roughness:.4}),0,0,0,Qe).scale.set(1,.9,1),J(new Wt(.0355,16,8,0,Math.PI*2,Math.PI*.55,Math.PI*.45),Ae({color:10115768,roughness:.4}),0,0,0,Qe).rotation.x=Math.PI;for(let ct=0;ct<3;ct++){let Ft=J(new Wt(.02,8,6),de.leaf2,0,.045,0,Qe);Ft.scale.set(.5,1.8,.3),Ft.rotation.set($(-.4,.4),ct*2.1,$(-.4,.4))}}let we=J(new Wt(.05,12,8),Ae({color:7126858}),-.28,.452,.12,ne);we.scale.set(1,.12,1.4),we.rotation.y=.6}else if(w.id==="kid"){let Re=bt(ne,.18,.458,.04,-.5);J(De(.2,.008,.1,.001),Ae({color:15765546}),0,0,0,Re),J(De(.11,.006,.055,.001),Ae({color:15765546}),.03,.006,-.015,Re).rotation.z=.4;let we=bt(ne,-.16,.452,-.04,.7);J(De(.18,.008,.09,.001),Ae({color:16777215}),0,0,0,we),J(De(.1,.006,.05,.001),Ae({color:16777215}),-.02,.006,.012,we).rotation.z=-.35;let le=J(new Wt(.055,18,12),Ae({color:16777215,roughness:.4}),Y,Ve+.055,bx+.95,s);for(let Qe=0;Qe<6;Qe++)J(new Wt(.011,8,6),Ae({color:2001096}),Math.cos(Qe)*.028,Math.sin(Qe*1.7)*.02,Math.sin(Qe)*.028,le)}}) ;let te=J(new hr(1,48),de.rug,-2.95,Ve+.004,-.5,s,!1);te.rotation.x=-Math.PI/2,te.scale.set(1.75,1.25,1);let q=-.55,ie=bt(s,-1.75,Ve,-1.5,q);J(De(2.1,.08,.7,.03),de.woodDark,0,.03,0,ie),J(De(2,.07,.66,.035),de.sofa,0,.08,0,ie);for(let w of[-.67,0,.67])J(De(.65,.07,.56,.035,4),de.sofa,w,Jn+.005-.035+.02,.05,ie);J(De(2.1,.42,.2,.08,4),de.sofa,0,.3,-.27,ie);for(let w of[-1.02,1.02])J(De(.18,.3,.72,.08,4),de.sofa,w,.2,0,ie);for(let[w,B,Y]of[[-.78,de.pillow,.25],[.8,de.pillow2,-.25]])J(De(.28,.26,.09,.07,4),B,w,Jn+.15,-.12,ie).rotation.set(-.25,0,Y);let W=J(De(.5,.02,.62,.01),Ae({map:vr("#b84a3a",[3,3])}),0,.52,-.29,ie);W.rotation.x=-.25,ie.updateMatrixWorld(!0);for(let w of[-.67,0,.67]){let B=new T(w,Jn+.02,0).applyMatrix4(ie.matrixWorld),Y=new T(w,0,.62).applyMatrix4(ie.matrixWorld);Y.y=Ve,t.lounge.push({pos:B,yaw:q,approach:Y,via:[new T(-1,Ve,ys),new T(-1,Ve,-.6)],kind:"sofa",name:"\u6C99\u767C"})}let re=bt(s,-4.6,Ve,-1.35,.7);J(De(.72,.1,.66,.04),de.woodDark,0,.04,0,re),J(De(.56,.08,.56,.035,4),de.sofa2,0,Jn-.02,.04,re),J(De(.72,.5,.18,.08,4),de.sofa2,0,.32,-.26,re);for(let w of[-.33,.33])J(De(.14,.28,.66,.06,4),de.sofa2,w,.2,0,re);J(De(.3,.26,.09,.07,4),de.pillow,0,Jn+.16,-.14,re).rotation.x=-.2,re.updateMatrixWorld(!0);{let w=new T(0,Jn+.02,0).applyMatrix4(re.matrixWorld),B=new T(0,0,.62).applyMatrix4(re.matrixWorld);B.y=Ve,t.lounge.push({pos:w,yaw:.7,approach:B,via:[new T(B.x,Ve,ys)],kind:"armchair",name:"\u6276\u624B\u6905"})}let bb=bt(s,-4.95,Ve,.85,0);J(new Wt(.42,28,18),Ae({color:15765546,roughness:.72}),0,.12,0,bb).scale.set(1.28,.62,1.12),bb.updateMatrixWorld(!0);{let w=new T(0,.32,.02).applyMatrix4(bb.matrixWorld),B=new T(0,0,.78).applyMatrix4(bb.matrixWorld);B.y=Ve,t.lounge.push({pos:w,yaw:Math.PI,approach:B,via:[new T(B.x,Ve,ys)],kind:"beanbag",name:"\u61F6\u9AA8\u982D"})}t.sleepSeats=[t.lounge[0],t.lounge[1],t.lounge[2],t.lounge[3],t.lounge[4]];let he=bt(s,-2.8,Ve,-.3,q+Math.PI/2);J(De(.55,.05,1.1,.025),de.wood,0,.24,0,he),J(De(.5,.03,1,.015),de.woodDark,0,.09,0,he);for(let[w,B]of[[-.22,-.48],[.22,-.48],[-.22,.48],[.22,.48]])J(new Ye(.025,.02,.24,10),de.woodDark,w,.12,B,he);let ve=.265;J(De(.16,.2,.06,.03,4),Ae({map:dn(128,160,w=>{w.fillStyle="#e8402f",w.fillRect(0,0,128,160),w.fillStyle="#ffd34d",w.beginPath(),w.ellipse(64,80,46,34,0,0,7),w.fill(),w.fillStyle="#c0392b",w.font="bold 30px sans-serif",w.textAlign="center",w.fillText("\u6D0B\u828B\u7247",64,92)}),roughness:.35,metalness:.2}),.08,ve+.09,-.36,he).rotation.set(-.25,1.2,.1);for(let w=0;w<6;w++)J(new Wt(.022,8,6),Ae({color:15909198}),$(-.05,.12),ve+.004,$(-.3,-.18),he).scale.set(1,.18,.8);J(new Ye(.13,.1,.02,28),de.ceramic,-.05,ve+.01,0,he);for(let w=0;w<6;w++){let B=w/6*6.28,Y=J(new Ye(.035,.035,.012,16),Ae({color:13208139,roughness:.9}),-.05+Math.sin(B)*.06,ve+.026+w%2*.006,Math.cos(B)*.06,he);Y.rotation.x=$(-.15,.15)}Sh(he,.15,ve,.22,14121569),Sh(he,-.15,ve,.3,8365455);for(let[w,B,Y]of[[.14,.4,3832789],[0,.42,5025616]])J(new Ye(.028,.028,.1,16),Ae({color:Y,metalness:.7,roughness:.3}),w,ve+.05,B,he),J(new Ye(.025,.025,.005,16),Ae({color:13421772,metalness:.9,roughness:.2}),w,ve+.102,B,he);J(new Ye(.07,.05,.11,16,1,!0),Ae({color:15022389,side:Ut}),.1,ve+.055,-.08,he);for(let w=0;w<14;w++)J(new Wt(.018,8,6),Ae({color:16774876}),.1+$(-.04,.04),ve+.11+$(0,.03),-.08+$(-.04,.04),he,!1);let tt=bt(s,-5.7,Ve,-.35,1.2);J(De(1.4,.32,.4,.03),de.woodDark,0,.16,0,tt);for(let w of[-.35,.35])J(De(.6,.22,.01,.005),de.wood,w,.16,.2,tt);J(De(.2,.02,.12,.01),de.metal,0,.33,0,tt),J(De(.05,.12,.03,.01),de.metal,0,.39,-.02,tt),J(De(1.1,.64,.05,.02),Ae({color:1776930,roughness:.3}),0,.76,0,tt);let K=document.createElement("canvas");K.width=320,K.height=180;let ce=K.getContext("2d"),Te=new bs(K);Te.colorSpace=Et,J(new si(1.02,.57),new Xt({color:0,emissive:16777215,emissiveMap:Te,emissiveIntensity:1}),0,.76,.026,tt,!1);let ue=new Ln(10473727,.6,3.5,2);ue.position.set(-5.2,Ve+.8,-.2),s.add(ue),t.animated.push(w=>{let B=ce,Y=320,ne=180,x=w/1e3,L=B.createLinearGradient(0,0,0,ne);L.addColorStop(0,"#7fd3ff"),L.addColorStop(1,"#2b7bc7"),B.fillStyle=L,B.fillRect(0,0,Y,ne),B.fillStyle="#ffe66b",B.beginPath(),B.arc(270,36,18,0,7),B.fill(),B.fillStyle="#3f9e4d",B.beginPath(),B.moveTo(0,150);for(let k=0;k<=Y;k+=10)B.lineTo(k,140+Math.sin(k/40+x*.5)*8);B.lineTo(Y,ne),B.lineTo(0,ne),B.fill();for(let k=0;k<4;k++){let U=(x*50+k*90)%(Y+60)-30,oe=70+Math.sin(x*2+k)*20+k*12;B.fillStyle=["#ff8a65","#ffd54f","#f06292","#fff"][k],B.beginPath(),B.ellipse(U,oe,16,10,0,0,7),B.fill(),B.beginPath(),B.moveTo(U-14,oe),B.lineTo(U-26,oe-9),B.lineTo(U-26,oe+9),B.fill(),B.fillStyle="#222",B.beginPath(),B.arc(U+8,oe-2,2.4,0,7),B.fill()}let O=120-Math.abs(Math.sin(x*3))*40;B.fillStyle="#fff",B.beginPath(),B.arc(60,O,14,0,7),B.fill(),B.fillStyle="#e53935",B.beginPath(),B.arc(60,O,14,Math.PI,0),B.fill(),Te.needsUpdate=!0,ue.intensity=(t.night?1.2:.4)*(.85+Math.sin(x*7)*.1)});let Ee=bt(s,-3.35,Ve,Ke.z0+.28);J(De(1.4,1.05,.5,.05),de.stone,0,.525,0,Ee),J(De(.8,.55,.3,.03),de.dark,0,.35,.12,Ee),J(De(.95,1.45,.4,.05),de.stone,0,1.75,-.05,Ee),J(De(1.6,.08,.6,.02),de.woodDark,0,1.08,.02,Ee),J(De(1.5,.06,.5,.02),de.stone,0,.03,.35,Ee);for(let w of[-.12,.12]){let B=J(new Ye(.05,.05,.4,10),[de.logDark,de.logEnd,de.logEnd],w*.5,.12,.15,Ee);B.rotation.z=Math.PI/2,B.rotation.y=w*2}let Oe=[];for(let w=0;w<5;w++){let B=J(new ta(.07+$(0,.04),.3,10),w%2?de.fire:de.fire2,$(-.2,.2),.28,.15+$(-.03,.03),Ee,!1);Oe.push(B)}for(let w=0;w<3;w++)J(new Ye(.025,.025,.12+w*.03,12),de.ceramic,.45+w*.08,1.18+w*.015,.05,Ee);J(new Wt(.012,8,6),de.glow,.45,1.25,.05,Ee,!1);let He=bt(Ee,-.42,1.25,.08);J(De(.26,.2,.02,.008),de.brass,0,0,0,He),J(new si(.21,.15),new Xt({map:dn(128,96,w=>{w.fillStyle="#9ed2f0",w.fillRect(0,0,128,96),w.fillStyle="#4c9a2a",w.beginPath(),w.ellipse(64,80,70,30,0,0,7),w.fill(),w.fillStyle="#f3e3a8",w.beginPath(),w.ellipse(64,74,30,10,0,0,7),w.fill()})}),0,0,.012,He,!1);let ut=new Ln(16747068,2,5,1.8);ut.position.set(-3.35,Ve+.45,Ke.z0+.8),s.add(ut),t.animated.push(w=>{let B=w/1e3;Oe.forEach((Y,ne)=>{Y.scale.set(1,.8+Math.sin(B*9+ne*2)*.2+Math.sin(B*23+ne)*.08,1)}),ut.intensity=(t.night?3.2:1)*(.85+Math.sin(B*11)*.08+Math.sin(B*27)*.06)});let Xe=bt(s,-1.6,Ve,Ke.z0+.2);J(De(1.05,1.6,.32,.03),de.wood,0,.8,0,Xe),J(De(.97,1.52,.02,.005),de.woodDark,0,.8,-.14,Xe);for(let w=0;w<4;w++){let B=.06+w*.38;J(De(.97,.03,.29,.008),de.wood,0,B,.01,Xe);let Y=-.45;for(;Y<.42;){let ne=$(.035,.07),x=$(.22,.32);if($i()<.12){Y+=.08;continue}let L=J(De(ne,x,$(.18,.24),.006),Ae({color:new ye().setHSL($(0,1),$(.35,.6),$(.35,.6)),roughness:.7}),Y+ne/2,B+.015+x/2,.02,Xe);$i()<.15&&(L.rotation.z=.2),Y+=ne+.005}}Ms(Xe,.3,.02,.5,1.6);let dt=bt(s,-1.25,Ve,-1.95);J(new Ye(.12,.14,.03,20),de.brass,0,.015,0,dt),J(new Ye(.012,.012,1.25,8),de.brass,0,.63,0,dt),J(new Ye(.13,.2,.22,24,1,!0),Ae({color:16181192,side:Ut,emissive:16762219,emissiveIntensity:.3,roughness:.9}),0,1.3,0,dt),J(new Wt(.05,12,8),de.bulb,0,1.25,0,dt,!1);let F=new Ln(16762739,0,5,1.6);F.position.set(-1.25,Ve+1.2,-1.95),s.add(F),Ms(s,-.35,Ke.z0+.45,1.9,Ve),Ms(s,5.75,Ke.z0+.4,1.6,Ve),Ms(s,-5.7,Ke.z0+.4,1.4,Ve);let Nt=new Ln(16763274,0,9,1.4);Nt.position.set(-3,Ve+2.3,-.6),s.add(Nt);let je=new Ln(16767392,0,9,1.4);je.position.set(3,Ve+2.3,-.8),s.add(je),t.lights={in1:Nt,in2:je,floorLight:F},t.spots.rug=[[-3.1,.8],[-4.2,.7],[-1.2,.3]].map(([w,B])=>({stand:new T(w,Ve,B),via:[new T(w,Ve,ys)]})),t.spots.fire={stand:new T(-3.35,Ve,-2.3),via:[new T(-3.8,Ve,ys),new T(-3.8,Ve,-.9)]},t.spots.outside=[[1.6,4],[-1.8,4.2],[3.6,4.5],[-3.4,3.6]].map(([w,B])=>({stand:new T(w,0,B),via:[new T(-.3,Ve,ys),new T(-.3,0,Ke.z1+.8)]}));let Ze=new Ye(.12,.18,1,10);Ze.translate(0,.5,0);let Le=new ta(1,1,14,1);Le.translate(0,.5,0);let at=[],Ue=0;for(;at.length<90&&Ue++<3e3;){let w=$(0,Math.PI*2),B=$(8.5,26),Y=Math.cos(w)*B*1.25,ne=Math.sin(w)*B-1;ne>3&&Math.abs(Y)<10+(ne-3)*.6||at.some(x=>(x[0]-Y)**2+(x[1]-ne)**2<2.2)||at.push([Y,ne,$(.8,1.5)])}let R=new In(Ze,Ae({map:ic("#6b4428")}),at.length),S=new In(Le,Ae({color:16777215,roughness:.85}),at.length*3),H=new Tt,Z=new T,ee=new T,j=new ye;t.pineData=[],at.forEach(([w,B,Y],ne)=>{P.compose(ee.set(w,0,B),H.identity(),Z.set(Y,Y*1.1,Y)),R.setMatrixAt(ne,P);let x=$(.27,.36),L=$(.22,.32);for(let O=0;O<3;O++){let k=(1.25-O*.3)*Y,U=(1.5-O*.2)*Y,oe=(.7+O*.95)*Y;P.compose(ee.set(w,oe,B),H.setFromEuler(new cn(0,$(0,6),0)),Z.set(k,U,k)),S.setMatrixAt(ne*3+O,P),S.setColorAt(ne*3+O,j.setHSL(x,.45,L+O*.05))}}),R.castShadow=S.castShadow=!0,R.receiveShadow=S.receiveShadow=!0,s.add(R,S);let Ce=new na(1,3),fe=new In(Ce,Ae({color:16777215,roughness:.8}),40),xe=0;for(let[w,B]of[[-8.2,-4.5],[8.6,-4.2],[-9.5,1.5],[9.8,2.2],[-7.4,-6.8],[7.2,-7.2]]){let Y=J(new Ye(.14,.2,1.6,10),Ae({map:ic("#7a5232")}),w,.8,B,s);for(let ne=0;ne<5;ne++)P.compose(ee.set(w+$(-.6,.6),2+$(0,.9),B+$(-.6,.6)),H.identity(),Z.setScalar($(.7,1))),fe.setMatrixAt(xe,P),fe.setColorAt(xe++,j.setHSL($(.22,.3),.5,$(.38,.5)))}fe.count=xe,fe.castShadow=!0,s.add(fe);let Je=[[-24,7.5],[-14,6.2],[-7,7],[-2,6],[3,6.6],[8,5.6],[14,6.8],[24,6]].map(([w,B])=>new T(w,0,B)),se=new lr(Je),Me=200,Fe=[],ze=[],Se=[],nt=1.1;for(let w=0;w<=Me;w++){let B=w/Me,Y=se.getPoint(B),ne=se.getTangent(B),x=-ne.z,L=ne.x,O=nt*(.85+Math.sin(B*17)*.15);if(Fe.push(Y.x+x*O,.03,Y.z+L*O,Y.x-x*O,.03,Y.z-L*O),ze.push(B*30,0,B*30,1),w<Me){let k=w*2;Se.push(k,k+1,k+2,k+1,k+3,k+2)}}let ke=new wt;ke.setAttribute("position",new st(Fe,3)),ke.setAttribute("uv",new st(ze,2)),ke.setIndex(Se),ke.computeVertexNormals();let ot=dn(256,128,(w,B,Y)=>{w.fillStyle="#4aa8c8",w.fillRect(0,0,B,Y);for(let ne=0;ne<60;ne++){w.strokeStyle="rgba(255,255,255,"+$(.15,.45)+")",w.lineWidth=$(1,2.5);let x=$(10,Y-10),L=$(0,B);w.beginPath(),w.moveTo(L,x),w.quadraticCurveTo(L+12,x-3,L+$(20,40),x),w.stroke()}},[1,1]),N=new Lt(ke,new Xt({map:ot,roughness:.08,metalness:.15,transparent:!0,opacity:.92,side:Ut}));N.receiveShadow=!0,s.add(N),J(ke.clone(),Ae({color:9075294,roughness:1}),0,-.01,0,s,!1).scale.set(1,1,1),t.animated.push(w=>{ot.offset.x=-w/9e3});let G=new na(1,2);{let w=G.attributes.position;for(let B=0;B<w.count;B++){let Y=1+(Math.sin(w.getX(B)*9.1)+Math.cos(w.getZ(B)*7.3))*.06;w.setXYZ(B,w.getX(B)*Y,w.getY(B)*Y*.7,w.getZ(B)*Y)}G.computeVertexNormals()}let Q=new In(G,Ae({color:16777215,roughness:.75}),260),me=0;for(let w=0;w<130;w++){let B=$(0,1),Y=se.getPoint(B),ne=se.getTangent(B),x=$i()<.5?-1:1,L=nt*$(.95,1.35)*x,O=$(.05,.16);P.compose(ee.set(Y.x-ne.z*L,O*.25,Y.z+ne.x*L),H.setFromEuler(new cn(0,$(0,6),0)),Z.setScalar(O)),Q.setMatrixAt(me,P),Q.setColorAt(me++,j.setHSL(.08,.06,$(.45,.7)))}for(let[w,B,Y]of[[-6.8,4.2,.55],[-7.4,4.7,.32],[6.9,3.7,.45],[7.6,4.3,.28],[-9.5,-2,.6],[9.2,-1.2,.5],[2.4,8.6,.5],[-3.6,8.3,.4],[4.8,7.6,.3]])P.compose(ee.set(w,Y*.3,B),H.setFromEuler(new cn($(-.2,.2),$(0,6),0)),Z.set(Y*1.3,Y,Y)),Q.setMatrixAt(me,P),Q.setColorAt(me++,j.setHSL(.1,.05,$(.5,.62)));Q.count=me,Q.castShadow=!0,Q.receiveShadow=!0,s.add(Q);let ge=se.getPoint(.47),We=bt(s,ge.x,0,ge.z,.08);for(let w=-6;w<=6;w++)J(De(.16,.06,1,.02),de.wood,0,.12+Math.cos(w/6*1.2)*.12,w*.18,We).rotation.x=0;for(let w of[-.5,.5]){let B=J(new Ye(.03,.03,2.4,8),de.logDark,w,.55,0,We);B.rotation.x=Math.PI/2;for(let Y of[-1,0,1])J(new Ye(.035,.035,.45,8),de.logDark,w,.33,Y*1,We)}We.rotation.y=Math.PI/2+.1;for(let w=0;w<8;w++){let B=w/7,Y=-.3+(ge.x+.3)*B+Math.sin(w*1.3)*.15,ne=Ke.z1+.9+(ge.z-1.2-Ke.z1-.9)*B,x=J(new Ye(.28,.3,.04,14),de.stone,Y,.02,ne,s,!1);x.scale.set(1,1,$(.7,.95)),x.rotation.y=$(0,3)}let Mt=new Wt(1,10,6);Mt.translate(0,0,1),Mt.scale(.12,.02,.45);let It=new In(Mt,Ae({color:16777215,roughness:.7,side:Ut}),1400),lt=0,pn=(w,B,Y)=>{let x=$(.26,.33);for(let L=0;L<9;L++){let O=L/9*6.28+$(0,.4);P.compose(ee.set(w,.03,B),H.setFromEuler(new cn(-$(.35,.75),O,0,"YXZ")),Z.setScalar(Y*$(.8,1.1))),It.setMatrixAt(lt,P),It.setColorAt(lt++,j.setHSL(x,.5,$(.3,.42)))}};for(let w=0;w<120;w++){let B=$(0,6.28),Y=$(7,13),ne=Math.cos(B)*Y*1.2,x=Math.sin(B)*Y;x>2.5&&Math.abs(ne)<6||pn(ne,x,$(.6,1.1))}for(let[w,B]of[[-6.9,2.6],[6.9,2.3],[-5.6,3.6],[5.4,3.4],[-1.9,7.6],[1.2,7.4],[-8,5.4],[8.4,5.2],[-2.9,3.1],[2.6,3.2]])pn(w,B,$(.8,1.2));It.count=lt,It.castShadow=!0,s.add(It);let zn=new Wt(.045,8,6),ns=new In(zn,Ae({color:16777215,roughness:.6,emissive:0}),300),Es=0,$n=[16748459,16765286,16777215,12033279,16752488];for(let w=0;w<300;w++){let B=$(-11,11),Y=$(-6,9);B>Ke.x0-.6&&B<Ke.x1+.6&&Y>Ke.z0-.6&&Y<Ke.z1+1.2||(P.compose(ee.set(B,.07,Y),H.identity(),Z.setScalar($(.7,1.2))),ns.setMatrixAt(Es,P),ns.setColorAt(Es++,j.set($n[w%$n.length])))}ns.count=Es,s.add(ns);let is=bt(s,7,0,2.6,-.5);J(new Ye(.04,.05,.8,10),de.logDark,0,.4,0,is),J(De(.26,.22,.4,.09,4),Ae({color:3829680,roughness:.4}),0,.9,0,is),t.flag=J(De(.02,.18,.08,.008),Ae({color:14891835}),.14,.95,-.08,is);let va=bt(s,-6.2,0,4.6);for(let w=0;w<10;w++){let B=w/10*6.28;P.compose(ee.set(-6.2+Math.cos(B)*.45,.06,4.6+Math.sin(B)*.45),H.identity(),Z.setScalar(.13)),Q.setMatrixAt(me++,P)}Q.count=me,Q.instanceMatrix.needsUpdate=!0;for(let[w,B,Y]of[[-1.1,.2,1.4],[.2,-1.1,.1]]){let ne=J(new Ye(.16,.16,1,14),[de.log,de.logEnd,de.logEnd],w,.16,B,va);ne.rotation.z=Math.PI/2,ne.rotation.y=Y}let Sr=60,oi=new Float32Array(Sr*3),Er=[];for(let w=0;w<Sr;w++){let B=$(0,6.28),Y=$(6.5,12);Er.push([Math.cos(B)*Y*1.2,$(.3,1.8),Math.sin(B)*Y+1,$(0,6)])}let Ri=new wt;Ri.setAttribute("position",new Rt(oi,3));let ya=dn(64,64,w=>{let B=w.createRadialGradient(32,32,0,32,32,32);B.addColorStop(0,"rgba(255,255,200,1)"),B.addColorStop(.3,"rgba(220,255,120,0.6)"),B.addColorStop(1,"rgba(200,255,100,0)"),w.fillStyle=B,w.fillRect(0,0,64,64)});return t.fireflies=new gs(Ri,new qi({map:ya,size:.25,transparent:!0,depthWrite:!1,blending:Hi,opacity:0})),s.add(t.fireflies),t.animated.push(w=>{if(t.fireflies.material.opacity<=0)return;let B=w/1e3;Er.forEach(([Y,ne,x,L],O)=>{oi[O*3]=Y+Math.sin(B*.5+L)*.6,oi[O*3+1]=ne+Math.sin(B*.9+L*2)*.3,oi[O*3+2]=x+Math.cos(B*.4+L)*.6}),Ri.attributes.position.needsUpdate=!0}),t.mats=de,t.bulbs=E,t.inside=w=>w.x>Ke.x0&&w.x<Ke.x1&&w.z>Ke.z0&&w.z<Ke.z1+.05,t}var Ve,Jn,ys,gx,bx,Mh,Ke,$i,$,Ti,_x,nc,vr,xx,ic,vx,yx,Mx,Ae,de,De,bt,sf=Dt(()=>{Jt();ef();Ve=.14,Jn=.09,ys=1.3,gx=[.65,1.75,2.85,3.95,5.05],bx=-1.7,Mh=-2.35,Ke={x0:-6.15,x1:6.15,z0:-3.3,z1:2.35},$i=(()=>{let s=7;return()=>(s=s*16807%2147483647)/2147483647})(),$=(s,e)=>s+$i()*(e-s);Ti=(s,e)=>{let t=new ye(s);return t.multiplyScalar(e),"#"+t.getHexString()};_x=(s,e=6,t=[3,3])=>dn(1024,1024,(n,i,r)=>{let a=r/e;for(let o=0;o<e;o++){let c=-$(0,400);for(;c<i;){let l=$(380,700),h=Ti(s,$(.86,1.1));n.fillStyle=h,n.fillRect(c,o*a,l,a),n.save(),n.beginPath(),n.rect(c,o*a,l,a),n.clip(),Eh(n,i,o*a,a,h,26),$i()<.35&&(n.fillStyle=Ti(h,.7),n.globalAlpha=.5,n.beginPath(),n.ellipse(c+$(40,l-40),o*a+a/2,$(6,12),$(3,6),0,0,7),n.fill(),n.globalAlpha=1),n.restore(),n.fillStyle=Ti(s,.45),n.fillRect(c,o*a,3,a),c+=l}n.fillStyle=Ti(s,.42),n.fillRect(0,o*a,i,4)}},t),nc=(s,e=[1,1])=>dn(512,512,(t,n,i)=>{t.fillStyle=s,t.fillRect(0,0,n,i),Eh(t,n,0,i,s,90)},e),vr=(s,e=[2,2])=>dn(256,256,(t,n,i)=>{t.fillStyle=s,t.fillRect(0,0,n,i);for(let r=0;r<n;r+=3)t.fillStyle=Ti(s,r%6?.93:1.06),t.globalAlpha=.5,t.fillRect(r,0,1,i),t.fillRect(0,r,n,1);t.globalAlpha=.12;for(let r=0;r<1600;r++)t.fillStyle=$i()<.5?"#000":"#fff",t.fillRect($(0,n),$(0,i),1.5,1.5);t.globalAlpha=1},e),xx=(s=[1,1])=>dn(512,512,(e,t,n)=>{e.fillStyle="#6f6a63",e.fillRect(0,0,t,n);for(let i=0;i<70;i++){let r=$(0,t),a=$(0,n),o=$(28,60),c=$(20,38),l=$(.8,1.25);for(let h of[-t,0,t])for(let u of[-n,0,n])e.fillStyle=Ti("#a39d93",l),e.beginPath(),e.ellipse(r+h,a+u,o,c,$(-.3,.3),0,7),e.fill(),e.fillStyle="rgba(255,255,255,0.12)",e.beginPath(),e.ellipse(r+h-o*.2,a+u-c*.3,o*.6,c*.4,0,0,7),e.fill()}},s),ic=s=>dn(512,128,(e,t,n)=>{e.fillStyle=s,e.fillRect(0,0,t,n),Eh(e,t,0,n,s,60),e.globalAlpha=.25;for(let i=0;i<10;i++)e.fillStyle=Ti(s,.6),e.beginPath(),e.ellipse($(0,t),$(0,n),$(6,14),$(2,4),0,0,7),e.fill();e.globalAlpha=1},[3,1]),vx=dn(128,128,(s,e)=>{for(let t=64;t>0;t-=5)s.fillStyle=t%10?"#e2c08e":"#c99a62",s.beginPath(),s.arc(64,64,t,0,7),s.fill()}),yx=dn(512,512,(s,e,t)=>{s.fillStyle="#6aa84a",s.fillRect(0,0,e,t);for(let n=0;n<9e3;n++){s.strokeStyle=Ti("#6aa84a",$(.7,1.3)),s.globalAlpha=.6,s.lineWidth=1.2;let i=$(0,e),r=$(0,t);s.beginPath(),s.moveTo(i,r),s.lineTo(i+$(-2,2),r-$(3,8)),s.stroke()}s.globalAlpha=1},[40,40]),Mx=dn(512,512,(s,e,t)=>{let n=["#c8553d","#f2d0a4","#2e6e6a","#f2d0a4","#e4a548","#f2d0a4"];for(let i=0;i<18;i++)s.fillStyle=n[i%n.length],s.beginPath(),s.arc(256,256,256-i*14,0,7),s.fill();s.globalAlpha=.15;for(let i=0;i<3e3;i++)s.fillStyle=$i()<.5?"#000":"#fff",s.fillRect($(0,e),$(0,t),2,2);s.globalAlpha=1}),Ae=s=>new Xt({roughness:.8,...s}),de={floor:Ae({map:_x("#b9824e",7,[2.5,1.2]),roughness:.62}),log:Ae({map:ic("#a8703f"),roughness:.85}),logDark:Ae({map:ic("#7d5230"),roughness:.9}),logEnd:Ae({map:vx,roughness:.9}),wood:Ae({map:nc("#c79a63"),roughness:.55}),woodLight:Ae({map:nc("#e3c497"),roughness:.5}),woodDark:Ae({map:nc("#6e4728"),roughness:.6}),stone:Ae({map:xx([1,1]),roughness:.95}),metal:Ae({color:3882822,roughness:.35,metalness:.6}),brass:Ae({color:14263361,roughness:.3,metalness:.8}),white:Ae({color:16183783,roughness:.5}),ceramic:Ae({color:15986146,roughness:.25}),pot:Ae({color:13202506,roughness:.7}),leaf:Ae({color:5216838,roughness:.6}),leaf2:Ae({color:7125082,roughness:.6}),sofa:Ae({map:vr("#7fa58f"),roughness:.95}),sofa2:Ae({map:vr("#e3b25a"),roughness:.95}),pillow:Ae({map:vr("#f0e3c8",[1,1]),roughness:.95}),pillow2:Ae({map:vr("#d77a61",[1,1]),roughness:.95}),rug:Ae({map:Mx,roughness:1}),glow:new Xt({color:16773577,emissive:16762219,emissiveIntensity:1.5,roughness:.4}),bulb:new Xt({color:16773577,emissive:16758861,emissiveIntensity:1.5}),window:new Xt({color:12575743,emissive:16762219,emissiveIntensity:0,roughness:.1,metalness:.1}),fire:new hn({color:16752704,transparent:!0,opacity:.9,blending:Hi,depthWrite:!1}),fire2:new hn({color:16769162,transparent:!0,opacity:.9,blending:Hi,depthWrite:!1}),dark:Ae({color:1907482,roughness:.9})},De=(s,e,t,n=.03,i=3)=>new tc(s,e,t,i,Math.min(n,s/2-.001,e/2-.001,t/2-.001));bt=(s,e=0,t=0,n=0,i=0)=>{let r=new bn;return r.position.set(e,t,n),r.rotation.y=i,s.add(r),r}});var Kx=Tf(()=>{Jt();Td();Ld();Fd();Bd();Hd();Vd();jd();Zd();$d();sf();var Ex=new Set(["plastic"]),qe=new URLSearchParams(location.search),es=qe.get("t"),_a=qe.has("d")?+qe.get("d"):null;function mf(){let s=new Date(Date.now()+288e5),e=s.getUTCHours(),t=s.getUTCMinutes(),n=s.getUTCSeconds(),i=s.getUTCDay();if(es){let[r,a]=es.split(":").map(Number);e=r,t=a,n=0}return _a!==null&&(i=_a),{h:e,m:t,s:n,wd:i,min:e*60+t+n/60}}var oc=s=>s>=1&&s<=5,Tx=s=>s.min<390||s.min>=1410,gf=[{id:"stock",name:"\u53F0\u80A1\u4E8C\u6B21\u5B50",color:"#2f4f8f",schedule:"\u5E73\u65E5 07:15 \u76E4\u524D\u5206\u6790\uFF0875 \u5206\u9418\uFF09",slots:s=>{let e=[];return oc(s.wd)&&e.push([435,75]),e}},{id:"mail",name:"Gmail \u5C0F\u738B\u5B50",color:"#d4a017",schedule:"\u6BCF\u5929 08:00\u201318:15 \u5750\u5728\u5EA7\u4F4D\u4E0A\uFF1A\u6BCF\u5C0F\u6642\u6574\u9EDE\u6536\u4FE1\u901A\u77E5\uFF1B\u5E73\u65E5 08:00 1111 \u5C65\u6B77\u300109:00 \u4FC3\u92B7\u5206\u6790",slots:s=>[[480,615]]},{id:"plastic",name:"\u5EE3\u8343\u4E09\u7687\u5B50",color:"#e46b1f",schedule:"\u5E73\u65E5 08:00\u201318:00 \u4E0A\u73ED\uFF0808:00 \u5831\u50F9\u300115:30 \u5DE5\u5730\u5831\u50F9\uFF09",slots:s=>oc(s.wd)?[[480,600]]:[]},{id:"acnh",name:"\u52D5\u68EE\u79C1\u751F\u5B50",color:"#4c9a2a",schedule:"\u6BCF\u5929 08:00\u201318:00 \u4E0A\u73ED\u6574\u7406\u5CF6\u5DBC\u8CC7\u6599\u300120:00 \u7F8E\u5CF6\u5206\u4EAB\uFF0860 \u5206\u9418\uFF09",slots:s=>[[480,600],[1200,60]]},{id:"kid",name:"\u9811\u76AE\u5C0F\u5152\u5B50",color:"#1e88c8",schedule:"\u6BCF\u5929 10:00\u300115:00 \u5E6B\u5927\u5BB6\u8DD1\u817F\uFF08\u5404 60 \u5206\u9418\uFF09\uFF0C\u5176\u4ED6\u6642\u9593\u5230\u8655\u9592\u6643\u8B1B\u7B11\u8A71",slots:s=>[[600,60],[900,60]]}];function wx(s,e){for(let[t,n]of s.slots(e))if(e.min>=t&&e.min<t+n)return{start:t,dur:n,left:t+n-e.min};return null}function Ax(s,e){let t=null;for(let[n]of s.slots(e))n>e.min&&(t===null||n<t)&&(t=n);return t===null?"\u660E\u5929":String(Math.floor(t/60)).padStart(2,"0")+":"+String(t%60).padStart(2,"0")}var Rx={idle:"Idle",walk:"Casual_Walk",sit:"Chair_Sit_Idle_F",cheer:"Cheer_with_Both_Hands_Up",headache:"Headache_Relief",wave:"Wave_One_Hand",drink:"Sit_and_Drink",answer:"Sitting_Answering_Questions",sleep:"Sit_and_Doze_Off",desksleep:"Sleep_on_Desk"},rf={idle:"\u5F85\u6A5F",walk:"\u8D70\u8DEF",sit:"\u5750\u8457",cheer:"\u6B61\u547C",headache:"\u62B1\u982D",wave:"\u63EE\u624B",drink:"\u5750\u8457\u559D\u6771\u897F",answer:"\u5750\u8457\u56DE\u7B54",sleep:"\u9589\u773C\u719F\u7761",desksleep:"\u8DB4\u684C\u7761"},bf=new Set(["sit","drink","answer","sleep","desksleep"]),Cx=.07,xa=(navigator.maxTouchPoints||0)>1||matchMedia("(pointer: coarse)").matches||/iPad|iPhone|Android/i.test(navigator.userAgent),ts=qe.has("mobile")||xa&&!qe.has("desktop"),_f=qe.has("lite");document.documentElement.classList.toggle("touch",xa);var Zt=new po({antialias:!0,preserveDrawingBuffer:!ts,powerPreference:"high-performance"});Zt.setPixelRatio(Math.min(devicePixelRatio,_f?1.25:ts?1.5:1.75));Zt.setSize(innerWidth,innerHeight);Zt.shadowMap.enabled=!0;Zt.shadowMap.type=ts?Oo:_0;Zt.outputColorSpace=Et;Zt.toneMapping=oa;Zt.toneMappingExposure=1;document.getElementById("app").appendChild(Zt.domElement);var fn=new go;fn.fog=new mo(13625048,20,55);var Pt=new Bt(+(new URLSearchParams(location.search).get("fov")||42),innerWidth/innerHeight,.05,220),Bn={pos:new T(-.45,5.9,9.6),tgt:new T(-.45,.45,-.8)},Px=Bn.pos.clone(),af=Bn.tgt.clone();function xf(){let s=Math.min(2.1,Math.max(1,1.6/(innerWidth/innerHeight)));Bn.tgt.copy(af).add(new T(0,(s-1)*2.2,0)),Bn.pos.copy(Bn.tgt).add(Px.clone().sub(af).multiplyScalar(s))}xf();Pt.position.copy(Bn.pos);var sn=new jo(Pt,Zt.domElement);sn.target.copy(Bn.tgt);sn.enableDamping=!0;sn.minDistance=1.2;sn.maxDistance=30;sn.maxPolarAngle=Math.PI*.47;sn.autoRotate=!1;sn.touches={ONE:ri.ROTATE,TWO:ri.DOLLY_PAN};sn.rotateSpeed=xa?.7:1;sn.zoomSpeed=1;var rc=new Po(14938623,7047754,.9);fn.add(rc);var kn=new pr(16773590,2.6);kn.castShadow=!0;kn.shadow.mapSize.set(ts?1024:2048,ts?1024:2048);Object.assign(kn.shadow.camera,{left:-11,right:11,top:9,bottom:-9,near:1,far:50});kn.shadow.bias=-4e-4;kn.shadow.normalBias=.025;kn.shadow.radius=4;fn.add(kn);fn.add(kn.target);var vf=new Ln(16773600,.55,7,1.6);vf.position.set(0,.3,0);Pt.add(vf);fn.add(Pt);var At=nf(fn,gf),uc=At.seats,cc=1,nn=null;if(!_f){if(nn=new Jo(Zt),nn.addPass(new ua(fn,Pt)),!ts)try{let n=new ma(fn,Pt,innerWidth,innerHeight);n.updateGtaoMaterial({radius:.35,distanceExponent:1.5,thickness:1,scale:1.2,samples:12}),n.blendIntensity=.85,nn.addPass(n),nn._ao=n}catch(n){console.warn("AO \u505C\u7528",n)}let s=new ua(fn,Pt);s.clear=!1;let e=s.render.bind(s);s.render=(...n)=>{let i=fn.background,r=Zt.shadowMap.autoUpdate;fn.background=null,Zt.shadowMap.autoUpdate=!1,Pt.layers.set(cc),e(...n),Pt.layers.set(0),fn.background=i,Zt.shadowMap.autoUpdate=r},nn.addPass(s);let t=new xr(new ae(innerWidth*(ts?.5:1),innerHeight*(ts?.5:1)),.35,.5,.88);nn.addPass(t),nn._bloom=t,nn.addPass(new ec)}function Ss(s,e){let t=document.createElement("canvas");t.width=t.height=128;let n=t.getContext("2d");return n.fillStyle="#ffffff",n.beginPath(),n.arc(64,64,60,0,Math.PI*2),n.fill(),n.fillStyle=e,n.beginPath(),n.arc(64,64,51,0,Math.PI*2),n.fill(),n.font='bold 64px "Noto Color Emoji","Apple Color Emoji","Segoe UI Emoji",sans-serif',n.textAlign="center",n.textBaseline="middle",n.fillStyle="#333",n.fillText(s,64,70),yf(t)}function yf(s){let e=new bs(s);return e.colorSpace=Et,e.premultiplyAlpha=!0,e}function of(s){return new Jr({map:s,transparent:!0,depthWrite:!1,depthTest:!1,premultipliedAlpha:!0,toneMapped:!1,color:new ye(.84,.84,.84)})}nn||Pt.layers.enable(cc);var Ix=(()=>{let s=document.createElement("canvas");s.width=s.height=64;let e=s.getContext("2d");return e.font='bold 46px "Noto Sans TC",sans-serif',e.textAlign="center",e.textBaseline="middle",e.lineJoin="round",e.lineWidth=9,e.strokeStyle="#ffffff",e.strokeText("z",32,34),e.fillStyle="#5b6fa8",e.fillText("z",32,34),yf(s)})(),cf={zzz:Ss("Zz","#d9e6ff"),cheer:Ss("\u266A","#fff2a8"),mad:Ss("\u{1F4A2}","#ffd6d6"),mail:Ss("\u2709","#dbeeff"),idea:Ss("!","#fff2a8"),drink:Ss("\u2615","#f3e1c8"),heart:Ss("\u2665","#ffd6e6")},Ah=new Wo;Ah.setMeshoptDecoder(kd);var Ph=window.__V?"?v="+window.__V:"";function lf(s){return new Promise((e,t)=>{let n=window.__GLB&&window.__GLB[s];if(n){let i=atob(n),r=new Uint8Array(i.length);for(let a=0;a<i.length;a++)r[a]=i.charCodeAt(a);Ah.parse(r.buffer,"",e,t)}else Ah.load("models/"+s+".glb"+Ph,e,void 0,t)})}var Mf=qe.get("skin")!=="v1";function Dx(s){if(!Mf)return Promise.resolve(null);let e=window.__BIN&&window.__BIN[s];if(e){let t=atob(e),n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return Promise.resolve(n.buffer)}return fetch("models/"+s+".bin"+Ph).then(t=>t.ok?t.arrayBuffer():null).catch(()=>null)}function Lx(s){return new Promise((e,t)=>{let n=window.__IMG&&window.__IMG[s]||"models/"+s+".webp"+Ph;new dr().load(n,i=>{i.flipY=!1,i.colorSpace=Et,i.anisotropy=8,e(i)},void 0,t)})}var hf=3.6,Ux={mail:1},wi=(s,e)=>s+Math.random()*(e-s),Rh=s=>s[Math.floor(Math.random()*s.length)],Nx={stock:new T(-2.6,Ve,1.3),mail:new T(-1,Ve,1.3),plastic:new T(.6,Ve,1.3),acnh:new T(2.2,Ve,1.3),kid:new T(3.8,Ve,1.3)},Ch=class{constructor(e,t,n,i,r,a){this.cfg=e,this.idx=r,this.root=new bn,fn.add(this.root),this.model=t.scene,this.root.add(this.model),this.mats=[],this.model.traverse(c=>{c.isMesh&&(c.castShadow=!0,c.receiveShadow=!0,c.frustumCulled=!1,c.material.map&&(c.material.map.anisotropy=8,this.mats.push(c.material)),c.material.roughness=Math.max(.55,c.material.roughness??.6))}),this.faces=i||{},this.faces.awake&&this.mats.forEach(c=>{let l=this.faces.awake.clone();c.map&&(l.wrapS=c.map.wrapS,l.wrapT=c.map.wrapT),l.needsUpdate=!0,c.map=l,c.needsUpdate=!0}),(qe.get("side")==="front"||qe.get("side")!=="double"&&Ux[this.cfg.id])&&this.mats.forEach(c=>{c.side=En,c.needsUpdate=!0}),this.openMaps=this.mats.map(c=>c.map),this.sleepTex=this.faces.sleep,this.face="open",this.eyesClosed=!1,this.mixer=new Lo(this.model),this.actions={};let o=[...t.animations,...n?n.animations:[]];for(let[c,l]of Object.entries(Rx)){let h=o.find(u=>u.name===l);h&&(this.actions[c]=this.mixer.clipAction(h))}if(this.hips=this.model.getObjectByName("Hips"),this.head=this.model.getObjectByName("Head"),this.neck=this.model.getObjectByName("neck"),this.headFront=this.model.getObjectByName("headfront"),this.headEnd=this.model.getObjectByName("head_end"),this.calibrate(),this.cur=null,this.queue=[],this.task=null,this.mode=null,this.status="\u6E96\u5099\u4E2D",this.lastDone="\u2014",this.root.position.copy(Nx[e.id]),this.yaw=0,this.seat=null,this.teleport=!0,this.curVia=[],this.emote=new Qr(of(cf.idea)),this.emote.layers.set(cc),this.emote.scale.setScalar(.28),this.zs=[0,1,2].map(()=>{let c=new Qr(of(Ix));return c.layers.set(cc),c.visible=!1,c.userData.t0=-1e9,this.root.add(c),c}),this.zi=0,this.lastPhase=0,this.emote.position.set(.32,.95,0),this.emote.visible=!1,this.root.add(this.emote),this.emoteUntil=0,a)try{this.applySkinV2(a)}catch(c){console.warn("skin v2",c)}try{this.buildMouthMorph()}catch(c){console.warn("mouth morph",c)}this.nextBlink=performance.now()+wi(1500,4500),this.blinkUntil=0,this.play("idle",0)}buildMouthMorph(){let e=wd[this.cfg.id];e&&this.model.traverse(t=>{if(!t.isSkinnedMesh||this.mouthMeshes)return;let n=t.geometry,i=n.attributes.position.count;if(e.i[e.i.length-1]>=i)return;let r=new Float32Array(i*3),a=new Float32Array(i*3);e.i.forEach((o,c)=>{for(let l=0;l<3;l++)r[o*3+l]=e.p[c*3+l],a[o*3+l]=e.n[c*3+l];if(this.origN){let l=n.attributes.normal,h=1,u=[l.getX(o),l.getY(o),l.getZ(o)];for(let d=0;d<3;d++)a[o*3+d]+=this.origN[o*3+d]/h-u[d]}}),n.morphAttributes.position=[new Rt(r,3)],n.morphAttributes.normal=[new Rt(a,3)],n.morphTargetsRelative=!0,t.updateMorphTargets(),t.morphTargetInfluences[0]=0,this.mouthMeshes=[t],this.mouthInfo={verts:e.i.length}})}applySkinV2(e){let t=new Uint32Array(e,0,2),n=t[0],i=t[1],r=8+n*3+(4-n*3%4)%4,a=new Int8Array(e,8,n*3),o=new Uint32Array(e,r,i),c=new Float32Array(e,r+i*4,i*3);this.model.traverse(l=>{if(!l.isSkinnedMesh||this.skinV2)return;let h=l.geometry,u=h.attributes.position,d=h.attributes.normal;if(u.count!==n){console.warn("skin v2 vertex count mismatch",this.cfg.id,u.count,n);return}this.origN=new Float32Array(n*3);for(let b=0;b<n;b++)this.origN[b*3]=d.getX(b),this.origN[b*3+1]=d.getY(b),this.origN[b*3+2]=d.getZ(b);let p=0;for(let b=0;b<n;b++){let m=a[b*3],f=a[b*3+1],y=a[b*3+2];(m||f||y)&&(d.setXYZ(b,m/127,f/127,y/127),p++)}for(let b=0;b<i;b++){let m=o[b];u.setXYZ(m,u.getX(m)+c[b*3],u.getY(m)+c[b*3+1],u.getZ(m)+c[b*3+2])}d.needsUpdate=!0,u.needsUpdate=!0,this.skinV2={normals:p,moved:i};let g=qe.get("skinmat");if(g)for(let b of this.mats)b.roughness=+g,b.needsUpdate=!0})}setMouthFill(e){if(this.mouthMeshes)for(let t of this.mouthMeshes)t.morphTargetInfluences[0]=e}setFace(e){if(e===this.face||!this.sleepTex)return;this.face=e,this.eyesClosed=e!=="open";let t=e==="open"?null:this.faces[e]||this.faces.sleep;this.mats.forEach((i,r)=>{i.map=qe.has("flat")?null:t||this.openMaps[r],i.needsUpdate=!0});let n=e==="sleep"||e==="sleepo";this.setMouthFill(n?1:0),Ex.has(this.cfg.id)&&this.mats.forEach(i=>{i.side=n?Ut:En})}calibrate(){this.sitOff={};for(let e of bf){let t=this.actions[e];if(!t)continue;this.mixer.stopAllAction(),t.reset().play();let n=new T,i=8;for(let r=0;r<i;r++)this.mixer.setTime(t.getClip().duration*(.2+.6*r/i)),this.model.updateMatrixWorld(!0),n.add(this.hips.getWorldPosition(new T).sub(this.root.position));n.divideScalar(i),this.sitOff[e]=n,t.stop()}this.mixer.stopAllAction()}play(e,t=.35){if(this.actions[e]||(e=e==="sleep"?"sit":"idle"),this.cur===e)return;let n=this.actions[e];n.reset(),n.enabled=!0,n.setEffectiveWeight(1),n.setLoop(L0),this.cur&&this.actions[this.cur]?(n.play(),this.actions[this.cur].crossFadeTo(n,t,!1)):n.play(),this.cur=e,this.curSince=performance.now()}showEmote(e,t=2.5){this.emote.material.map=cf[e],this.emote.material.needsUpdate=!0,this.emote.visible=!0,this.emoteUntil=performance.now()+t*1e3}sitOn(e,t){if(e.taken&&e.taken!==this){this.play("idle");return}e.taken=this,this.seat=e;let n=this.sitOff[t]||this.sitOff.sit||new T(0,.23,-.1),i=e.yaw,r=new T(n.x,0,n.z).applyAxisAngle(new T(0,1,0),i);this.root.position.set(e.pos.x-r.x,e.pos.y+Cx-n.y,e.pos.z-r.z),this.yaw=i,this.targetYaw=i,this.play(t,.25)}standUp(){if(!this.seat)return;let e=this.seat;this.seat=null,e.taken===this&&(e.taken=null),this.root.position.copy(e.approach)}setTasks(e){this.queue=e,this.task=null}faceDir(e=new T){this.model.updateMatrixWorld(!0);let t=this.head.getWorldPosition(new T),n=this.headFront.getWorldPosition(new T);return e.subVectors(n,t).normalize()}faceCenter(){let e=this.head.getWorldPosition(new T),t=this.headEnd.getWorldPosition(new T);return e.lerp(t,.42)}sleepHead(e,t=0){if(!this.neck||!this.headFront||e<=0)return;let n=this.faceDir(),i=new T(Math.sin(this.yaw),0,Math.cos(this.yaw)),r=.12+.07*(1-t),a=i.clone().multiplyScalar(Math.cos(r)).add(new T(0,-Math.sin(r),0)).normalize(),o=new Tt().setFromUnitVectors(n,a);o.slerp(new Tt,1-e);let c=new Tt().setFromAxisAngle(a,(this.idx%2?-1:1)*.24*e);o.premultiply(c);let l=this.neck.parent.getWorldQuaternion(new Tt),h=this.neck.getWorldQuaternion(new Tt);this.neck.quaternion.copy(l.invert().multiply(o).multiply(h)),this.model.updateMatrixWorld(!0)}update(e,t){this.mixer.update(e),this.cur==="sleep"&&this.seat?this.sleepW=Math.min(1,(this.sleepW||0)+e*1.2):this.sleepW=Math.max(0,(this.sleepW||0)-e*3);let n=this.cur==="sleep"||this.cur==="desksleep",i=(t/1e3+this.idx*.9)%hf/hf,r=i<.45?Math.sin(i/.45*Math.PI/2):Math.cos((i-.45)/.55*Math.PI/2);this.breath=n?r:0,this.sleepW>0&&this.sleepHead(this.sleepW,this.breath*this.sleepW),!n&&t>this.nextBlink&&(this.blinkUntil=t+150,this.nextBlink=t+wi(2500,6e3),Math.random()<.2&&(this.nextBlink=t+320));let a=window.__face||(n?qe.has("snoreo")||!qe.has("snorec")&&i>.12&&i<.45?"sleepo":"sleep":t<this.blinkUntil||window.__forceEyes===!0?"blink":"open");if(this.setFace(a),n&&this.lastPhase<.45&&i>=.45){let c=this.zs[this.zi++%3];c.userData.t0=t,c.userData.dx=wi(-.03,.05),c.visible=!0}this.lastPhase=i;for(let c of this.zs){let l=(t-c.userData.t0)/2200;if(l<0||l>1){c.visible=!1;continue}c.position.set(.02+c.userData.dx-l*.14,(this.seat?.74:.92)+l*.4,0),c.scale.setScalar(.07+l*.08),c.material.opacity=Math.min(1,l*6)*(1-l)}if(this.emote.visible&&t>this.emoteUntil&&(this.emote.visible=!1),this.emote.visible&&(this.emote.position.y=.95+Math.sin(t/250)*.03,this.emote.scale.setScalar(.28*(n?1+.1*this.breath:1))),!this.task){if(!this.queue.length)return!0;this.task=this.queue.shift(),this.task.t0=t;let c=this.task;if(c.status&&(this.status=c.status),c.walk&&!c.routed){this.standUp();let l=c.via||[],h=[...this.curVia.slice().reverse(),...l,c.walk];if(this.curVia=l,this.teleport)return this.root.position.copy(c.walk),this.task=null,!1;let u=h.map(d=>({walk:d,routed:!0,status:c.status}));this.queue.unshift(...u.slice(1)),this.task=u[0],this.task.t0=t,this.play("walk")}else c.walk?(this.standUp(),this.play("walk")):c.seat?(this.sitOn(c.seat,c.clip),this.teleport=!1):(this.teleport=!1,this.seat&&this.standUp(),this.play(c.clip||"idle"),c.face!==void 0&&(this.targetYaw=c.face));c.emote&&this.showEmote(c.emote,Math.min(c.dur||3,4)),c.done&&(this.lastDone=c.done)}let o=this.task;if(!o)return!1;if(o.walk){let c=this.root.position,l=new T(o.walk.x-c.x,0,o.walk.z-c.z),h=l.length();if(h<.05)return c.x=o.walk.x,c.z=o.walk.z,this.task=null,!1;this.targetYaw=Math.atan2(l.x,l.z);let u=Math.min(h,.6*e);c.x+=l.x/h*u,c.z+=l.z/h*u,c.y=At.inside(c)?Ve:c.z<Ke.z1+.5&&Math.abs(c.x+.3)<.75?Ve*.5:0}else(t-o.t0)/1e3>(o.dur||3)&&(this.task=null);if(this.targetYaw!==void 0&&!this.seat){let c=this.targetYaw-this.yaw;c=Math.atan2(Math.sin(c),Math.cos(c)),this.yaw+=c*Math.min(1,e*7)}return this.root.rotation.y=this.yaw,!1}},Ox=s=>{let e=At.lounge.filter(t=>!t.taken||t.taken===s);return e.length?Rh(e):null},Mr=(s,e)=>({walk:s.approach,via:s.via,status:e}),Th=(s,e)=>({walk:s.stand,via:s.via,status:e});function Fx(s){let e=Math.random(),t=[],n=Ox(s);if(e<.26&&n)n.taken=s,t.push(Mr(n,"\u53BB\u4F11\u606F\u5340\u770B\u96FB\u8996"),{seat:n,clip:"sit",dur:wi(12,20),status:`\u7AA9\u5728${n.name}\u770B\u5361\u901A \u{1F4FA}`});else if(e<.46&&n)n.taken=s,t.push(Mr(n,"\u53BB\u62FF\u96F6\u98DF"),{seat:n,clip:"drink",dur:wi(10,16),status:`\u5728${n.name}\u5403\u6D0B\u828B\u7247\u3001\u559D\u98F2\u6599`,emote:"drink"});else if(e<.6&&n)n.taken=s,t.push(Mr(n,"\u627E\u5927\u5BB6\u804A\u5929"),{seat:n,clip:"answer",dur:9.7,status:"\u5728\u6C99\u767C\u4E0A\u8DDF\u5927\u5BB6\u804A\u5929",emote:"heart"});else if(e<.7){let i=Rh(At.spots.rug);t.push(Th(i,"\u8D70\u5230\u5730\u6BEF\u4E0A"),{clip:"wave",dur:4.1,status:"\u8DDF\u5927\u5BB6\u63EE\u624B\u6253\u62DB\u547C",emote:"heart",face:Math.PI*.75})}else if(e<.78)t.push(Th(At.spots.fire,"\u53BB\u58C1\u7210\u65C1"),{clip:"idle",dur:wi(5,8),status:"\u5728\u58C1\u7210\u65C1\u70E4\u706B\u53D6\u6696",face:Math.PI});else if(e<.88){let i=Rh(At.spots.outside);t.push(Th(i,"\u51FA\u9580\u5230\u5C0F\u6EAA\u908A\u6563\u6B65"),{clip:"idle",dur:wi(4,7),status:"\u5728\u6EAA\u908A\u770B\u98A8\u666F",face:wi(-1,1)},{clip:"cheer",dur:3.8,status:"\u68EE\u6797\u7A7A\u6C23\u597D\u597D\uFF0C\u6B61\u547C\uFF01",emote:"cheer"})}else{let i=uc[s.cfg.id];t.push(Mr(i,"\u56DE\u5EA7\u4F4D\u4F11\u606F"),{seat:i,clip:"sit",dur:wi(8,14),status:"\u5750\u5728\u5EA7\u4F4D\u4E0A\u653E\u7A7A"})}return t}function kx(s,e){let t=s.cfg.id,n=uc[t],i=[],r=s._t||mf(),a=e.left<1.5;s.seat!==n&&i.push(Mr(n,"\u8D70\u5230\u81EA\u5DF1\u7684\u8FA6\u516C\u684C"));let o=(c,l,h,u)=>i.push({seat:n,clip:c,dur:l,status:h,emote:u});if(t==="stock")o("answer",9.7,"\u76E4\u524D\u5206\u6790\uFF1A\u56DE\u7B54\u5927\u5BB6\u7684\u53F0\u80A1\u554F\u984C","idea"),o(Math.random()<.35?"drink":"answer",9.7,"\u4E00\u908A\u559D\u5496\u5561\u4E00\u908A\u770B\u76E4"),a&&i.push({clip:"cheer",dur:3.8,status:"\u76E4\u524D\u5831\u544A\u5B8C\u6210\uFF01",emote:"cheer",done:"\u76E4\u524D\u5206\u6790\u5B8C\u6210"});else if(t==="mail"){let c=Math.floor(r.min)%60,l=Math.floor(r.min/60);oc(r.wd)&&l===8&&c<50?o("answer",9.7,"\u6574\u7406 1111 \u65B0\u5C65\u6B77","mail"):oc(r.wd)&&l===9&&c<30?o("answer",9.7,"\u5206\u6790\u4ECA\u5929\u7684\u4FC3\u92B7\u4FE1","idea"):c<15&&o("answer",9.7,`${l} \u9EDE\u6574\u9EDE\u6536\u4FE1\uFF1A\u6AA2\u67E5\u65B0\u90F5\u4EF6\u4E26\u901A\u77E5`,"mail"),c<15?i[i.length-1].done=`${l}:00 \u6536\u4FE1\u4E26\u901A\u77E5`:o("answer",9.7,"\u56DE\u8986\u90F5\u4EF6\u3001\u6574\u7406\u6536\u4EF6\u5323"),o("sit",8,"\u628A\u4FE1\u4EF6\u5206\u985E\u653E\u9032\u4FE1\u4EF6\u76E4"),c<15&&Math.random()<.3&&o("drink",9.7,"\u908A\u559D\u8336\u908A\u770B\u65B0\u4FE1")}else if(t==="plastic")(o("answer",9.7,"\u6574\u7406\u5DE5\u5730\u5831\u50F9\u55AE"),o("sit",8,"\u5C08\u5FC3\u6838\u5C0D\u5857\u88DD\u6578\u91CF"),Math.random()<.3&&o("drink",9.7,"\u559D\u53E3\u5496\u5561\u7E7C\u7E8C\u7B97\u5831\u50F9"),a&&i.push({clip:"cheer",dur:3.8,status:"\u5831\u50F9\u505A\u5B8C\u4E86\uFF0C\u6B61\u547C\uFF01",emote:"cheer",done:"\u5DE5\u5730\u5831\u50F9\u5B8C\u6210",face:0}));else if(t==="kid")o("answer",9.7,"\u6574\u7406\u4ECA\u5929\u7684\u8DD1\u817F\u6E05\u55AE","idea"),o(Math.random()<.5?"drink":"sit",9.7,Math.random()<.5?"\u5077\u5077\u60F3\u65B0\u7684\u51B7\u7B11\u8A71":"\u5728\u684C\u4E0A\u6298\u7D19\u98DB\u6A5F"),a&&i.push({clip:"cheer",dur:3.8,status:"\u8DD1\u817F\u4EFB\u52D9\u5B8C\u6210\uFF01\u8036\uFF5E",emote:"cheer",done:"\u8DD1\u817F\u4EFB\u52D9\u5B8C\u6210"});else (e.start===1200?(o("answer",9.7,"\u6574\u7406\u4ECA\u5929\u7684\u7F8E\u5CF6\u5206\u4EAB","idea"),o("sit",7,"\u6311\u9078\u5927\u982D\u83DC\u50F9\u683C\u6700\u597D\u7684\u5CF6")):(o("answer",9.7,"\u6574\u7406\u5CF6\u5DBC\u8CC7\u6599\u3001\u56DE\u8986\u5CF6\u6C11\u7559\u8A00"),o("sit",8,"\u67E5\u770B\u4ECA\u5929\u7684\u5927\u982D\u83DC\u50F9\u683C")),a&&i.push({clip:"cheer",dur:3.8,status:"\u627E\u5230\u8D85\u7F8E\u7684\u5CF6\uFF01\u6B61\u547C",emote:"cheer",done:"\u5206\u4EAB\u7F8E\u5CF6",face:0}));return i}function Bx(s){let e=At.sleepSeats[s.idx];return[Mr(e,"\u8D70\u53BB\u4F11\u606F\u5340\u7761\u89BA"),{seat:e,clip:"sleep",dur:30,status:`\u5728${e.name}\u4E0A\u9589\u773C\u719F\u7761 \u{1F4A4}`,emote:"zzz"}]}var ba=!1,zx=["idle","walk","sit","cheer","headache","wave","drink","answer","sleep"];function Hx(s){return qe.has("still")?[{clip:qe.get("still")||"idle",dur:9999,status:"\u9810\u89BD",face:0}]:zx.map(e=>bf.has(e)?{seat:uc[s.cfg.id],clip:e,dur:e==="sleep"?4.5:3.2,status:"\u793A\u7BC4\uFF1A"+rf[e],emote:e==="sleep"?"zzz":void 0}:{clip:e,dur:e==="cheer"?3.8:3.2,status:"\u793A\u7BC4\uFF1A"+rf[e],face:0,emote:e==="cheer"?"cheer":e==="headache"?"mad":e==="wave"?"heart":void 0})}var uf=s=>At.spots[s].stand,df=document.getElementById("bots"),Vx=document.getElementById("labels"),On=[],Fn=null,Ai=null,Ih=!1;function Gx(){df.innerHTML="";for(let s of On){let e=document.createElement("div");e.className="bot",e.style.setProperty("--c",s.cfg.color),e.innerHTML=`<div class="nm">${s.cfg.name}</div><div class="st"></div><div class="sc">${s.cfg.schedule}</div><div class="ld"></div>`,e.onclick=()=>{Fn=Fn===s?null:s,document.querySelectorAll(".bot").forEach(n=>n.classList.remove("on")),Fn?e.classList.add("on"):Ai={...Bn}},df.appendChild(e),s.row=e;let t=document.createElement("div");t.className="lab",t.style.setProperty("--c",s.cfg.color),t.textContent=s.cfg.name,Vx.appendChild(t),s.lab=t,t.onclick=e.onclick}}var dc=s=>{for(let e of On)e.standUp(),e.setTasks([]),e.mode=null,s&&(e.teleport=!0);for(let e of[...At.lounge,...Object.values(uc)])e.taken=null};document.getElementById("all").onclick=()=>{Fn=null,Ih=!1,document.querySelectorAll(".bot").forEach(s=>s.classList.remove("on")),Ai={pos:Bn.pos.clone(),tgt:Bn.tgt.clone()}};var ac=document.getElementById("demo");ac.onclick=()=>{ba=!ba,ac.textContent=ba?"\u7D50\u675F\u793A\u7BC4":"\u52D5\u4F5C\u793A\u7BC4",ac.classList.toggle("on",ba),dc(!1)};function Sf(){let s=new URL(location.href);s.searchParams.set("v",Date.now()),location.replace(s.href)}document.getElementById("reload").onclick=Sf;var Wx=!qe.has("snap")&&!qe.has("noupdate")&&location.protocol.startsWith("http")&&!!window.__V,wh=!1;function Dh(){!Wx||wh||(wh=!0,fetch("version.json?t="+Date.now(),{cache:"no-store"}).then(s=>s.ok?s.json():null).then(s=>{s&&s.v&&String(s.v)!==String(window.__V)&&Sf()}).catch(()=>{}).finally(()=>{wh=!1}))}setInterval(Dh,600*1e3);var sc=0;document.addEventListener("visibilitychange",()=>{if(document.hidden){sc=Date.now();return}Dh(),sc&&Date.now()-sc>2e4&&!qe.has("still")&&dc(!0),sc=0});window.addEventListener("pageshow",s=>{s.persisted&&(Dh(),dc(!0))});var lc=document.getElementById("time");lc.onchange=()=>{let s=lc.value;if(s==="now")es=null,_a=null;else{let[e,t]=s.split(" ");_a=+e,es=t}dc(!0)};if(es){let s=document.createElement("option");s.value=(_a??2)+" "+es,s.textContent="\u7DB2\u5740\u6307\u5B9A "+es,lc.appendChild(s),lc.value=s.value}var Qn=s=>new ye(s),yr={dayTop:Qn(7320554),dayBot:Qn(14676223),duskTop:Qn(7106488),duskBot:Qn(16759178),nightTop:Qn(462116),nightBot:Qn(1912666)};function Xx(s){let e=s.min/60,t;e<5.5||e>19.5?t=0:e<7?t=(e-5.5)/1.5:e>18?t=(19.5-e)/1.5:t=1;let n=e>16.5&&e<19.5?Math.sin((e-16.5)/3*Math.PI):e>5&&e<7.5?Math.sin((e-5)/2.5*Math.PI)*.6:0,i=yr.nightTop.clone().lerp(yr.dayTop,t).lerp(yr.duskTop,n*.5),r=yr.nightBot.clone().lerp(yr.dayBot,t).lerp(yr.duskBot,n*.7);At.skyU.top.value.copy(i),At.skyU.bot.value.copy(r),fn.fog.color.copy(r).lerp(Qn(10470298),.25*t);let a=1-t;At.night=a>.5,kn.intensity=.35+2.4*t,rc.intensity=.35+.6*t,rc.color.set(14938623).lerp(Qn(9085144),a),rc.groundColor.set(7047754).lerp(Qn(2763322),a),kn.color.set(16773590).lerp(Qn(16753515),n*.6).lerp(Qn(10467071),a);let o=(e-6)/12*Math.PI;t>0?kn.position.set(Math.cos(o)*14+2,8+Math.max(0,Math.sin(o))*10,9):kn.position.set(-8,14,9),At.mats.window.emissiveIntensity=a*.9,At.mats.bulb.emissiveIntensity=.6+a*3.4,At.mats.glow.emissiveIntensity=.5+a*2,At.lights.in1.intensity=.6+a*5,At.lights.in2.intensity=.6+a*4.5,At.lights.floorLight.intensity=a*3.5,At.stars.material.opacity=a,At.fireflies.material.opacity=a,Zt.toneMappingExposure=1+a*.15,nn&&nn._bloom&&(nn._bloom.strength=.25+a*.45)}var qx=new mr,ff=-1e9,jx=document.getElementById("clock"),Yx=["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"];function Ef(){let s=Math.min(qx.getDelta(),.1),e=performance.now(),t=mf();if(e-ff>1e3){ff=e,jx.textContent=`\u53F0\u5317\u6642\u9593 \u9031${Yx[t.wd]} ${String(t.h).padStart(2,"0")}:${String(t.m).padStart(2,"0")}${es?"\uFF08\u9810\u89BD\uFF09":""}`,Xx(t);for(let r of On){let a=wx(r.cfg,t),o=ba?"demo":Tx(t)?"sleep":a?"work":"free";if(o!==r.mode){r.mode=o,r.standUp(),r.setTasks([]);for(let c of At.lounge)c.taken===r&&(c.taken=null)}r._slot=a,r._t=t}}for(let r of On){if(r.update(s,e)){let o=r.mode==="demo"?Hx(r):r.mode==="sleep"?Bx(r):r.mode==="work"?kx(r,r._slot):Fx(r);r.mode==="demo"&&(r.standUp(),r.root.position.copy(uf(r.cfg.id)),r.curVia=At.spots[r.cfg.id].via,r.yaw=0,r.targetYaw=0),r.setTasks(o)}r.mode==="demo"&&r.task&&!r.task.seat&&!r.seat&&(r.root.position.copy(uf(r.cfg.id)),r.yaw=0),r.mode==="sleep"&&r.seat&&(qe.has("emote")||Math.random()<.004)&&r.showEmote("zzz",3),r.breath>0?r.model.scale.set(1+r.breath*.006,1+r.breath*.014,1+r.breath*.006):r.model.scale.set(1,1,1)}for(let r of At.animated)r(e);if(At.flag&&(At.flag.rotation.x=(On.find(r=>r.cfg.id==="mail")?.status||"").includes("\u4FE1")?-1.2:0),Fn){let r=+(qe.get("dist")||1),a=qe.has("fy")?+qe.get("fy"):null,o=Fn.root.position.clone().add(new T(0,a??(Fn.seat?.45:.6),0));sn.target.lerp(o,Math.min(1,s*3));let c;if(qe.has("face")){let l=Fn.faceCenter();l.y+=+(qe.get("ty")||0),o.copy(l);let h=Fn.faceDir().applyAxisAngle(new T(0,1,0),+(qe.get("fa")||0)*Math.PI/180);c=l.clone().add(h.multiplyScalar(.62*r)).add(new T(0,.03+ +(qe.get("fe")||0),0))}else{let l=new T(.35,.55,1.9).multiplyScalar(r).applyAxisAngle(new T(0,1,0),Fn.yaw);c=o.clone().add(l)}Pt.position.lerp(c,qe.has("snap")?1:Math.min(1,s*1.5)),qe.has("snap")&&sn.target.copy(o)}else Ai&&(sn.target.lerp(Ai.tgt,Math.min(1,s*2)),Pt.position.lerp(Ai.pos,Math.min(1,s*2)),Pt.position.distanceTo(Ai.pos)<.05&&(Ai=null));sn.update(),nn?nn.render():Zt.render(fn,Pt);let n=innerWidth,i=innerHeight;for(let r of On){let a=r.root.position.clone();a.y+=r.seat?.95:1.12,a.project(Pt);let o=a.z<1&&Math.abs(a.x)<1.1&&Math.abs(a.y)<1.1&&!qe.has("nolabel");r.lab.style.display=o?"block":"none",r.lab.style.transform=`translate(-50%,-100%) translate(${(a.x*.5+.5)*n}px,${(-a.y*.5+.5)*i}px)`,r.row.querySelector(".st").textContent=r.status;let c=r.mode==="work"?`\u672C\u6BB5\u5269 ${Math.ceil(r._slot.left)} \u5206\u9418`:`\u4E0B\u6B21\u5DE5\u4F5C ${Ax(r.cfg,r._t)}`;r.row.querySelector(".ld").textContent=`${c}\uFF5C\u6700\u8FD1\u5B8C\u6210\uFF1A${r.lastDone}`}requestAnimationFrame(Ef)}window.__cam=()=>({p:Pt.position.toArray().map(s=>+s.toFixed(2)),d:+Pt.position.distanceTo(sn.target).toFixed(2)});var hc=document.getElementById("hud");(innerWidth<1100||xa&&innerHeight>innerWidth||qe.has("fold"))&&(hc.classList.add("folded"),document.getElementById("fold").textContent="\uFF0B");xa&&(document.getElementById("tip").textContent="\u55AE\u6307\u62D6\u66F3\u65CB\u8F49\u30FB\u96D9\u6307\u7E2E\u653E\uFF0F\u5E73\u79FB\u30FB\u9EDE\u540D\u5B57\u8DDF\u62CD");function fc(){let s=innerWidth>900&&!hc.classList.contains("folded")&&!Fn?150:0;s?Pt.setViewOffset(innerWidth,innerHeight,-s,0,innerWidth,innerHeight):Pt.clearViewOffset()}document.getElementById("fold").onclick=s=>{s.stopPropagation(),hc.classList.toggle("folded"),document.getElementById("fold").textContent=hc.classList.contains("folded")?"\uFF0B":"\uFF0D",fc()};setInterval(fc,500);fc();addEventListener("resize",()=>{xf(),!Fn&&!Ih&&(Ai={pos:Bn.pos.clone(),tgt:Bn.tgt.clone()}),Pt.aspect=innerWidth/innerHeight,Pt.updateProjectionMatrix(),fc(),Zt.setSize(innerWidth,innerHeight),nn&&nn.setSize(innerWidth,innerHeight)});sn.addEventListener("start",()=>{Ai=null,Ih=!0});if(qe.has("cam")){let s=qe.get("cam").split(",").map(Number);Pt.position.set(s[0],s[1],s[2]),sn.target.set(s[3],s[4],s[5])}var pf=document.getElementById("loading");Promise.all(gf.map((s,e)=>Promise.all([lf(s.id),lf(s.id+"_sleep_anim").catch(()=>null),Promise.all(["sleep","sleepo","blink","awake"].map(t=>t==="awake"&&!Mf?null:Lx(s.id+"_"+t).catch(()=>null))),Dx(s.id+"_skin")]).then(([t,n,[i,r,a,o],c])=>(pf.textContent=`\u8F09\u5165\u89D2\u8272\u4E2D\u2026 ${s.name} \u2713`,new Ch(s,t,n,i?{sleep:i,sleepo:r||i,blink:a||i,awake:o}:o?{awake:o}:null,e,c))).catch(t=>(console.error("\u8F09\u5165\u5931\u6557",s.id,t),null)))).then(s=>{for(let e of s)e&&On.push(e);if(Gx(),pf.style.display="none",qe.has("demo")&&ac.onclick(),qe.has("eyes")&&(window.__forceEyes=!0),qe.has("force")&&(window.__face=qe.get("force")),qe.has("clean")&&(document.getElementById("hud").style.display="none",document.getElementById("tip").style.display="none"),qe.has("focus")){let e=On.find(t=>t.cfg.id===qe.get("focus"));e&&e.row.onclick()}Ef(),setTimeout(()=>{if(window.__dbg={n:On.length,st:On.map(e=>[e.cfg.id,e.mode,e.status,e.cur,e.face,e.mouthInfo,e.skinV2,e.root.position.toArray().map(t=>+t.toFixed(2))]),sit:On.map(e=>Object.fromEntries(Object.entries(e.sitOff).map(([t,n])=>[t,n.toArray().map(i=>+i.toFixed(3))])))},qe.has("pick"))try{let e=JSON.parse(qe.get("pick")),t=new Uo,n=[],i=Zt.domElement.clientWidth,r=Zt.domElement.clientHeight,a=On.find(l=>l.cfg.id===(qe.get("focus")||"mail")),o=[];a.model.traverse(l=>{l.isMesh&&o.push(l)});let c=o.map(l=>[].concat(l.material).map(h=>{let u=h.side;return h.side=Ut,u}));for(let[l,h]of e)t.setFromCamera(new ae(l/i*2-1,-(h/r)*2+1),Pt),n.push([l,h,t.intersectObjects(o,!1).slice(0,6).map(u=>[u.object.name,u.faceIndex,+u.distance.toFixed(4),u.face.a,u.face.b,u.face.c,+u.face.normal.dot(t.ray.direction).toFixed(2),u.uv?[+u.uv.x.toFixed(4),+u.uv.y.toFixed(4)]:null,[u.face.a,u.face.b,u.face.c].map(d=>{let p=u.object.geometry.attributes.normal;return[p.getX(d),p.getY(d),p.getZ(d)].map(g=>+g.toFixed(2))}),u.face.normal.toArray().map(d=>+d.toFixed(2)),[].concat(u.object.material)[0].side])]);o.forEach((l,h)=>[].concat(l.material).forEach((u,d)=>u.side=c[h][d])),window.__pick={W:i,H:r,out:n}}catch(e){window.__pick={err:String(e)}}document.title+=" ready"},+(qe.get("wait")||6e3))})});Kx();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
