window.Koditar=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){var r=n(1),o=n(2),i=n(4);e.exports={render:function(e,t){if(!e||!e.length)throw new Error("Empty text supplied");r(t=t||{});var n=o.initialize(t),l=n.canvas,a=n.ctx;i.set(a,e,t);var c=l.toDataURL("image/png");return l.remove(),c}}},function(e,t){e.exports=function(e){e.size=e.size||300,e.bgColor=e.bgColor||"#eee",e.color=e.color||"#222",e.fontFamily=e.fontFamily||"Calibri",e.fontSize=e.fontSize||100}},function(e,t,n){var r=n(3);e.exports={initialize:function(e){var t=document.createElement("canvas"),n=t.getContext("2d");return t.width=e.size,t.height=e.size,n.fillStyle=e.bgColor,n.fillRect(0,0,t.width,t.height),e.test&&r.drawCross(n,e.size),{canvas:t,ctx:n}}}},function(e,t){e.exports={drawCross:function(e,t){e.beginPath(),e.moveTo(t/2,0),e.lineTo(t/2,t),e.moveTo(0,t/2),e.lineTo(t,t/2),e.strokeStyle="#FF0000",e.stroke()}}},function(e,t){e.exports={set:function(e,t,n){t=function(e){if((e=(e=e.trim().toUpperCase()).replace(/ +(?= )/g,"")).length>2){var t=e.split(" ");t.length>=2?e=t[0][0]+t[1][0]:t&&(e=t[0][0]+t[0][1])}return(e=e.replace("Á","A").replace("É","E").replace("Í","I").replace("Ó","O").replace("Ú","U")).toUpperCase()}(t),e.font="".concat(n.fontSize," ").concat(n.size/2,"px ").concat(n.fontFamily),e.textAlign="center",e.textBaseline="middle",e.fillStyle=n.color,e.fillText(t,n.size/2,n.size/2+.037*n.size,n.width)}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Lb2RpdGFyL21haW4uanMiXSwibmFtZXMiOlsid2luZG93IiwibW9kdWxlcyIsImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJjb25maWdIZWxwZXIiLCJjYW52YXNIZWxwZXIiLCJ0ZXh0SGVscGVyIiwicmVuZGVyIiwidGV4dCIsImNmZyIsImxlbmd0aCIsIkVycm9yIiwiX2NhbnZhc0hlbHBlciRpbml0aWFsIiwiaW5pdGlhbGl6ZSIsImNhbnZhcyIsImN0eCIsInNldCIsImRhdGFVcmwiLCJ0b0RhdGFVUkwiLCJyZW1vdmUiLCJzaXplIiwiYmdDb2xvciIsImNvbG9yIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwidGVzdEhlbHBlciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwidGVzdCIsImRyYXdDcm9zcyIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwidHJpbSIsInRvVXBwZXJDYXNlIiwicmVwbGFjZSIsInBhcnRzIiwic3BsaXQiLCJzYW5pdGl6ZSIsImZvbnQiLCJjb25jYXQiLCJ0ZXh0QWxpZ24iLCJ0ZXh0QmFzZWxpbmUiLCJmaWxsVGV4dCJdLCJtYXBwaW5ncyI6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RCxFQUFRRCxFQUFTRixHQUVqQyxJQUFJd0QsRUFBYXhELEVBQW9CLEdBcUJyQ0csRUFBT0QsUUFBVSxDQUNmMEMsV0FwQkYsU0FBb0JKLEdBQ2xCLElBQUlLLEVBQVNZLFNBQVNDLGNBQWMsVUFDaENaLEVBQU1ELEVBQU9jLFdBQVcsTUFXNUIsT0FWQWQsRUFBT2UsTUFBUXBCLEVBQUlXLEtBQ25CTixFQUFPZ0IsT0FBU3JCLEVBQUlXLEtBRXBCTCxFQUFJZ0IsVUFBWXRCLEVBQUlZLFFBQ3BCTixFQUFJaUIsU0FBUyxFQUFHLEVBQUdsQixFQUFPZSxNQUFPZixFQUFPZ0IsUUFFcENyQixFQUFJd0IsTUFDTlIsRUFBV1MsVUFBVW5CLEVBQUtOLEVBQUlXLE1BR3pCLENBQ0xOLE9BQVFBLEVBQ1JDLElBQUtBLE1BVUgsU0FBVTNDLEVBQVFELEdBY3hCQyxFQUFPRCxRQUFVLENBQ2YrRCxVQWJGLFNBQW1CbkIsRUFBS0ssR0FDdEJMLEVBQUlvQixZQUVKcEIsRUFBSXFCLE9BQU9oQixFQUFPLEVBQUcsR0FDckJMLEVBQUlzQixPQUFPakIsRUFBTyxFQUFHQSxHQUVyQkwsRUFBSXFCLE9BQU8sRUFBR2hCLEVBQU8sR0FDckJMLEVBQUlzQixPQUFPakIsRUFBTUEsRUFBTyxHQUN4QkwsRUFBSXVCLFlBQWMsVUFDbEJ2QixFQUFJd0IsWUFTQSxTQUFVbkUsRUFBUUQsR0FvQ3hCQyxFQUFPRCxRQUFVLENBQ2Y2QyxJQWJGLFNBQWFELEVBQUtQLEVBQU1DLEdBRXRCRCxFQXhCRixTQUFrQkEsR0FLaEIsSUFGQUEsR0FGQUEsRUFBT0EsRUFBS2dDLE9BQU9DLGVBRVBDLFFBQVEsV0FBWSxLQUV2QmhDLE9BQVMsRUFBRyxDQUNuQixJQUFJaUMsRUFBUW5DLEVBQUtvQyxNQUFNLEtBRW5CRCxFQUFNakMsUUFBVSxFQUVsQkYsRUFBT21DLEVBQU0sR0FBRyxHQUFLQSxFQUFNLEdBQUcsR0FFdkJBLElBQ0xuQyxFQUFPbUMsRUFBTSxHQUFHLEdBQUtBLEVBQU0sR0FBRyxJQU1wQyxPQURBbkMsRUFBT0EsRUFBS2tDLFFBQVEsSUFBSyxLQUFLQSxRQUFRLElBQUssS0FBS0EsUUFBUSxJQUFLLEtBQUtBLFFBQVEsSUFBSyxLQUFLQSxRQUFRLElBQUssTUFDckZELGNBS0xJLENBQVNyQyxHQUNoQk8sRUFBSStCLEtBQU8sR0FBR0MsT0FBT3RDLEVBQUllLFNBQVUsS0FBS3VCLE9BQU90QyxFQUFJVyxLQUFPLEVBQUcsT0FBTzJCLE9BQU90QyxFQUFJYyxZQUMvRVIsRUFBSWlDLFVBQVksU0FDaEJqQyxFQUFJa0MsYUFBZSxTQUNuQmxDLEVBQUlnQixVQUFZdEIsRUFBSWEsTUFHcEJQLEVBQUltQyxTQUFTMUMsRUFBTUMsRUFBSVcsS0FBTyxFQUFHWCxFQUFJVyxLQUFPLEVBQWUsS0FBWFgsRUFBSVcsS0FBY1gsRUFBSW9CIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6IiJ9