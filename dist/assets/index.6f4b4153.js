import{S as g,P as w,G as y,a as h,A as v,W as b}from"./three.c478ed32.js";import{O as L}from"./@three-ts.19eabff1.js";import{T as P}from"./typed.js.11194ba4.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&u(l)}).observe(document,{childList:!0,subtree:!0});function p(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=p(e);fetch(e.href,t)}})();$(document).ready(function(){$(window).scroll(function(){this.scrollY>20?$(".navbar").addClass("sticky"):$(".navbar").removeClass("sticky")}),$(".menu-btn").click(function(){$(".navbar .menu").toggleClass("active"),$(".menu-btn i").toggleClass("active")}),$(".nav-item").click(function(){$(".navbar .menu").toggleClass("active"),$(".menu-btn i").toggleClass("active")})});new P(".typing",{strings:["Mechatronics Engineer","Software Developer","One Piece Enjoyer","CAD Designer","Hardware Developer"],typeSpeed:65,backSpeed:50,loop:!0});const c=new g,o=new w(80,1,1,1e3);o.position.set(0,5,3);o.lookAt(0,3,0);c.add(o);var n,a;const A=new y;A.load("one_piece_-going_merry.glb",function(r){a=r.scene,c.add(a)});const m=new h(16777215,2.7);m.position.set(5,5);const k=new v("white");c.add(m,k);const d=new b({canvas:render,alpha:!0});d.setSize(600,600);n=new L(o,d.domElement);o.lookAt(0,2.5,0);n.enablePan=!1;n.enableDamping=!0;n.dampingFactor=.01;n.rotateSpeed=.005;n.enableZoom=!1;n.maxPolarAngle=Math.PI/2.6;n.minPolarAngle=Math.PI/3.4;const s={x:0,y:0};window.addEventListener("mousemove",r=>{s.x=r.clientX/window.innerWidth-.5,s.y=r.clientY/window.innerHeight-.5});window.addEventListener("resize",()=>{o.updateProjectionMatrix()});const f=()=>{n.update(),o.lookAt(0,2.5,0);const r=s.x,i=-s.y;d.render(c,o),window.requestAnimationFrame(f),a.rotation.y+=-r/100,a.rotation.x+=(i/5-a.rotation.x)/50};f();
