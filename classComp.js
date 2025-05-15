export class Competence {
    constructor(title, list = []) {
        this.title = title;
        this.list = list;
    }

    getDiv() {
        var first = `
            <div class="comp-box max-md:w-full">
                <h3 class="title anta text-xl">${this.title}</h3>
                <ul>`;

        var second = `</ul>
            </div>`;

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
