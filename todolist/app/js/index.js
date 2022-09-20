import { CongViec } from "../model/CongViec.js"
import { jobList } from "../model/jobList.js";

let joblist = new jobList();

document.querySelector('#addItem').onclick = () => {
    //input
    let job = new CongViec();
    //Dom đến thẻ input
    let arrInput = document.querySelector('#newTask');
    console.log(arrInput);
    for(let input of arrInput){
        let { id, value } = input;
        job[id] = value;
    }
    console.log(job);
    // out put
    let html = '';
    //process
    for (let key in job) {
        let giaTri = job[key];
        if(typeof job[key] === 'function') {
            giaTri = job[key]();
            
        }
        html +=`
        <div class="input-group mb-3">
          <input type="radio" aria-label="Radio button for following text input">
          <span id="span-${key}" class="text-muted">${giaTri}</span>
        </div>
        `
    }
    document.querySelector('#todo').innerHTML = html ;
}
