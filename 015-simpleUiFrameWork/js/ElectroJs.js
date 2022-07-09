"use strict";

class ToastManager {
    constructor() {
        this.elementPool = document.createElement("div");
        this.elementPool.id = "pool";
        document.body.append(this.elementPool);
        this.toastStack = [];
        this.isActiveToast = false;
        setInterval(this.run.bind(this), 2);
    }

    async run() {
        if (this.toastStack.length > 0) {
            if (!this.isActiveToast) {
                this.isActiveToast = true;

                let result = await this.toastStack.shift().render();

                this.isActiveToast = false;
            }
        }
    }
}

let toastManager = new ToastManager();

class Toaster {
    constructor(text, delayTime, toastType) {
        this.deleyTime = delayTime;

        this.toastType = toastType;
        this.toasterIcon = "fa-circle";

        switch (toastType) {
            case 1:
                this.toastType = "toast--danger";
                this.toasterIcon = "fa-shield"
                break;
            case 2:
                this.toastType = "toast--warning";
                this.toasterIcon = "fa-warning";
                break;
            case 3:
                this.toastType = "toast--success";
                this.toasterIcon = "fa-clipboard-check";
                break;
        }


        this.toastHtml = `
        <div class="toast ${this.toastType}" id="active_toast">
    <div class="toaster__icon_container">
        <i class="fa ${this.toasterIcon}"></i>
    </div>
    <div class="toaster__text">
        <p>
            ${text}
        </p>
    </div>
</div>
        `;
    }

    render() {
        document.getElementById("pool").innerHTML = this.toastHtml + document.getElementById("pool").innerHTML;
        this.toaserNode = document.getElementById("active_toast");
        return new Promise((resolve) => {
            this.toaserNode.style.animation = `leftIn 1.2s`;
            setTimeout(() => {

                this.toaserNode.style.animation = "upAnim 2s infinite";

                setTimeout(() => {
                    this.toaserNode.style.animation = `leftOut 1.2s`;
                    setTimeout(() => {
                        document.getElementById("pool").removeChild(this.toaserNode);
                        resolve("ok");
                    }, 1100);
                }, this.deleyTime * 1000);

            }, 1200);
        });
    }

}


document.getElementById("btn").addEventListener("click", () => {
    toastManager.toastStack.push(new Toaster("ann Massage With success!!", 2, 3));
});
