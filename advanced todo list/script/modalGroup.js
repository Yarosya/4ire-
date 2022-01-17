import { 
    group,
    modalGroup,
    groupCloseBtn,
    } from './selector'

const groupModalView = (e) => {
    e.preventDefault();
    if(e.target == group){
       modalGroup.style.display = "block";
       window.addEventListener('click', (e) => {
        if (e.target == modalGroup || e.target == groupCloseBtn) {
            modalGroup.style.display = "none"
        }
    })
    }
}


export default groupModalView
