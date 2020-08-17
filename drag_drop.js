const imgBox=document.querySelector('.imgBox');
const whiteBoxes=document.getElementsByClassName('whiteBox');


imgBox.addEventListener('dragstart',(e)=>{
    console.log('Drag Start');
    e.target.className += ' hold';
    setTimeout(() => { 
        e.target.className =' hide'
    }, 0 );
    
})

imgBox.addEventListener('dragend',(e)=>{
        console.log('DragEnd has been Triggered');
        e.target.className='imgBox';
})

for (whiteBox of whiteBoxes){
    whiteBox.addEventListener('dragover',(e)=>{
        e.preventDefault();
        console.log('DragOver has been triggered');
    });
    whiteBox.addEventListener('dragenter',()=>{
        console.log('DragEnter has been triggered');
    });
    whiteBox.addEventListener('dragleave',()=>{
        console.log('DragLeave has been triggered');
    });
    whiteBox.addEventListener('drop',(e)=>{
        console.log('Drop has been triggered');
        e.target.append(imgBox);
    });
}
 