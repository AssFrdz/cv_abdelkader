export class Experience {
    constructor(title, enterprise, date, list = []) {
        this.title = title;
        this.enterprise = enterprise;
        this.date = date;
        this.list = list;
    }

    getDiv() {
        var first = `
            <div class="exp-box">
            <div>
                <h3  class="title anta text-xl  text-amber-500">${this.title}</h3>
                 <div class="place flex "><img src="assets/maps.svg" alt="" class="icon-lil"><span>${this.enterprise}</span></div>
                <div class="date flex"><img src="assets/time.svg" alt="" class="icon-lil mx-1"><span>${this.date}</span></div>
                <ul class="mx-6">`;

        var second = `</ul>
            </div> </div>`;

        var li = ''; 

        if (this.list && this.list.length > 0) {
            this.list.forEach(e => {
                li += `<li>${e}</li>`;
            });
            return first + li + second;
        }

        return first + second;
    }
}
