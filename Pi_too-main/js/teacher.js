// Teacher.js — Багшийн класс
// Класс гэдэг нь: нэг загвар юм
// Жишээ нь: "Багш" гэдэг загвараас
// А.Баясгалан, Амирлангуй гэх мэт олон багш үүсгэж болно

export class Teacher {

    // constructor — шинэ багш үүсгэхэд дуудагдана
    constructor(data) {
        this.id         = data.id;
        this.name       = data.name;
        this.avatar     = data.avatar;
        this.subject    = data.subject;
        this.icon       = data.icon;
        this.experience = data.experience;
        this.rating     = data.rating;
        this.price      = data.price;
        this.type       = data.type;
        this.href       = data.href;
    }

    // Үнийг формат болгох арга
    // 1000000 → "1,000,000₮"
    formatPrice() {
        return this.price.toLocaleString() + '₮';
    }

    // HTML карт үүсгэх арга
    toHTML() {
        return `
            <li class="tcard">
                <figure class="tcard-img">
                    <span class="tcard-av">${this.avatar}</span>
                </figure>
                <article class="tcard-body">
                    <h3 class="tcard-name">
                        ${this.name}
                        <span class="tcard-stars">⭐ ${this.rating}</span>
                    </h3>
                    <p class="tcard-meta">${this.icon} ${this.subject}</p>
                    <p class="tcard-meta">⏱ Туршлага: ${this.experience} жил</p>
                    <p class="tcard-plbl">Үнэ</p>
                    <p class="tcard-price">${this.formatPrice()} <span>/ 75цаг</span></p>
                    <a href="${this.href}" class="tcard-btn">Дэлгэрэнгүй</a>
                </article>
            </li>
        `;
    }
}