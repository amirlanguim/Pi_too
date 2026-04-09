// main.js — Үндсэн файл
// Энд бүх зүйл нэгтгэгдэнэ

import { Teacher } from './Teacher.json';
import { Review }  from './Review.js';

// ═══════════════════════════════
// 1. JSON татах функц
// fetch гэдэг нь: файлаас өгөгдөл татах
// ═══════════════════════════════
async function fetchData(url) {
    const response = await fetch(url);
    const data     = await response.json();
    return data;
}

// ═══════════════════════════════
// 2. БАГШ НАР — татаж харуулах
// ═══════════════════════════════
async function loadTeachers() {

    // JSON татна
    const data = await fetchData('./data/teachers.json');

    // map — өгөгдөл бүрийг Teacher класс болгоно
    const teachers = data.map(function(item) {
        return new Teacher(item);
    });

    // filter — зөвхөн 4.7-оос дээш үнэлгээтэй багшид
    const topTeachers = teachers.filter(function(t) {
        return t.rating >= 4.7;
    });

    // reduce — нийт дундаж үнэ тооцоолох
    const avgPrice = topTeachers.reduce(function(sum, t) {
        return sum + t.price;
    }, 0) / topTeachers.length;

    console.log('Дундаж үнэ:', avgPrice);

    // join — HTML мөрүүдийг нэгтгэх
    const html = topTeachers
        .map(function(t) { return t.toHTML(); })
        .join('');

    // DOM — хуудас дээр харуулах
    document.getElementById('teachers-list').innerHTML = html;
}

// ═══════════════════════════════
// 3. СЭТГЭГДЭЛ — татаж харуулах
// ═══════════════════════════════
async function loadReviews() {

    const data = await fetchData('./data/reviews.json');

    // map → Review класс болгоно
    const reviews = data.map(function(item) {
        return new Review(item);
    });

    // join → HTML нэгтгэнэ
    const html = reviews
        .map(function(r) { return r.toHTML(); })
        .join('');

    document.getElementById('reviews-list').innerHTML = html;
}

// ═══════════════════════════════
// 4. ТООЛУУР ANIMATION
// ═══════════════════════════════
function countUp(elementId, target, duration) {
    const el    = document.getElementById(elementId);
    if (!el) return;

    let count   = 0;
    const step  = Math.ceil(target / (duration / 20));

    const timer = setInterval(function() {
        count += step;
        if (count >= target) {
            count = target;
            clearInterval(timer);
        }
        el.textContent = count;
    }, 20);
}

// ═══════════════════════════════
// 5. SCROLL → NAV SHADOW
// ═══════════════════════════════
function initScrollNav() {
    const nav = document.querySelector('.main-nav');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
        } else {
            nav.style.boxShadow = 'none';
        }
    });
}

// ═══════════════════════════════
// 6. БҮГДИЙГ ЭХЛҮҮЛЭХ
// Хуудас бэлэн болмогц дуудагдана
// ═══════════════════════════════
document.addEventListener('DOMContentLoaded', function() {
    loadTeachers();
    loadReviews();
    countUp('stat-branches', 8,  1000);
    countUp('stat-hours',    75, 1000);
    initScrollNav();
});