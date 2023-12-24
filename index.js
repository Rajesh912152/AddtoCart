let rootEl=document.getElementById('root');

let headingEl=document.createElement('h1');
headingEl.textContent="Add to Cart";
headingEl.classList.add('heading');
rootEl.appendChild(headingEl)

let containerEl=document.createElement('div');
containerEl.classList.add("d-flex","flex-row","justify-content-center");
rootEl.appendChild(containerEl);

let inputEl=document.createElement('input');
inputEl.type='text';
inputEl.id='inputId'
containerEl.appendChild(inputEl);

let btnEl=document.createElement('button');
btnEl.textContent="Add"
btnEl.classList.add("btn",'btn-primary',"ml-2")
containerEl.appendChild(btnEl);

let listContainerEl=document.createElement('div');
rootEl.appendChild(listContainerEl)

let headingEl2=document.createElement('h4');
headingEl2.textContent='my cards items';
headingEl2.classList.add('text-center')
listContainerEl.appendChild(headingEl2);

btnEl.onclick=function(){
    let listEl=document.createElement('li')
    listEl.textContent=inputEl.value
    listEl.classList.add('list')
    listContainerEl.appendChild(listEl);

    inputEl.value=""
}
