import{j as t,R as c,a as u}from"./vendor.115c864a.js";const m=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}};m();var s="/Users/hdung.nguyennfq.asia/Documents/Shopmacher/RecruitingTest/gamescom-partner/src/App.tsx";function d(){return t.exports.jsxDEV("div",{className:"flex justify-center items-center w-screen h-screen bg-gray-900 ",children:t.exports.jsxDEV("div",{className:"w-3/12 p-6 mx-auto rounded text-center bg-gray-800 space-y-5",children:[t.exports.jsxDEV("h1",{className:"text-white text-4xl",children:"Vite + React (Typescript) + Tailwind"},void 0,!1,{fileName:s,lineNumber:7,columnNumber:9},this),t.exports.jsxDEV("p",{className:"text-blue-300 text-2xl",children:"It's working"},void 0,!1,{fileName:s,lineNumber:10,columnNumber:9},this)]},void 0,!0,{fileName:s,lineNumber:6,columnNumber:7},this)},void 0,!1,{fileName:s,lineNumber:5,columnNumber:5},this)}var l="/Users/hdung.nguyennfq.asia/Documents/Shopmacher/RecruitingTest/gamescom-partner/src/main.tsx";c.render(t.exports.jsxDEV(u.StrictMode,{children:t.exports.jsxDEV(d,{},void 0,!1,{fileName:l,lineNumber:9,columnNumber:5},globalThis)},void 0,!1,{fileName:l,lineNumber:8,columnNumber:3},globalThis),document.getElementById("root"));
