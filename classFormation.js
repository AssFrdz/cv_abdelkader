export class Formation {
    constructor(title, place, date) {
        this.title = title;
        this.place = place;
        this.date = date;
    }

    getDiv() {
        return `
            <div class="blue-box max-md:w-full">
                <h3 class="title anta text-xl blue">${this.title}</h3>
                <div class="place text-amber-500"><span>${this.place}</span></div>
                <div class="date"><span>${this.date}</span></div>
            </div>`;

    }
}
