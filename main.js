let btn = document.getElementById('btn');
let inp = document.getElementById('inp');
let boxs = document.querySelectorAll('.box');
let drag = null;
btn.onclick = function (){
    if (inp.value != '') {
        boxs[0].innerHTML += `
        <p class="task" draggable="true"><span>
        <a onclick="onDelete()"><i class='fas fa-trash'></i></a>
        </span>
        ${inp.value}<p/>
        

        
        `
        inp.value = '';
    }
    dragItem();
    
}
function dragItem() {
    let tasks = document.querySelectorAll('.task');
    tasks.forEach(task=> {
        task.addEventListener('dragstart', function() {
            drag = task;
            task.style.opacity = '0.5';
        })
        task.addEventListener('dragend', function() {
            drag = null;
            task.style.opacity = '1';
        })

        boxs.forEach(box => {
            box.addEventListener('dragover', function (event) {
                event.preventDefault()
                this.style.background = '#adb5bd';
                this.style.color = '#fff';
            })
            box.addEventListener('dragleave', function () {
                this.style.background = '#fff';
                this.style.color = '#212529';
            })
            box.addEventListener('drop', function() {
                box.append(drag);
                this.style.background = '#fff';
                this.style.color = '#090';
                
            })
        })
           
    })
}
// !--- delete function under construction --!
// onDelete();

// function onDelete() {
//     let task = document.querySelectorAll('.task')
//     task.removeEventListener('delete', function () {
//         task.target.delete();
//     })
    
// }