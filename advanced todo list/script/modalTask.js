import { 
    task,
    modalTask,
    taskCloseBtn
} from './selector'

const taskModalView = (e) =>{
    e.preventDefault();
    if(e.target == task){
        modalTask.style.display = 'block';
        window.addEventListener('click', (e) => {
            if (e.target == modalTask || e.target == taskCloseBtn) {
                modalTask.style.display = "none"
            }
        })
    }
}

export default taskModalView;