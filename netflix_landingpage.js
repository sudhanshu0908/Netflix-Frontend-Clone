const tabItems=document.querySelectorAll('.tabs-item');
const tabContentItems=document.querySelectorAll('.tab-content-item');
//select tab item
function selectItem(e){
    removeBorder();
    removeShow();
    //add border to current tab
    this.classList.add('tabs-border')
    //get the content from DOM
    const tabContentItem=document.querySelector(`#${this.id}-content`);
    //Add show class
    tabContentItem.classList.add('show')
}
function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tabs-border'))
}
// listen tab switching call for tab-border
tabItems.forEach( item => item.addEventListener('click', selectItem));

function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'))
}
// listen tab switching call for tab-content
tabItems.forEach( item => item.addEventListener('click', selectItem));