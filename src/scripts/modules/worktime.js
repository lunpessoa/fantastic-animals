export default class Worktime {
  constructor(worktime, activeClass) {
    this.worktime = document.querySelector(worktime);
    this.activeClass = activeClass !== undefined ? activeClass : 'open';
  }

  init() {
    if (!this.worktime) return this;
    this.datas();
    this.fromNow();
    this.setOpen();
    return this;
  }

  setOpen() {
    if (this.isOpen()) this.worktime.classList.add(this.activeClass);
  }

  datas() {
    this.week = Array.from(JSON.parse(this.worktime.dataset.week));
    this.hour = Array.from(JSON.parse(this.worktime.dataset.hour));
  }

  fromNow() {
    this.now = new Date();
    this.weekNow = this.now.getDay();
    this.hourNow = this.now.getUTCHours() - 3;
  }

  isOpen() {
    return (
      this.week.includes(this.weekNow) &&
      this.hourNow >= this.hour[0] &&
      this.hourNow < this.hour[1]
    );
  }
}
