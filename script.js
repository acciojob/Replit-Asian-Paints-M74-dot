//your JS code here. If required.
document.addEventListener('DOMContentLoaded',()=>{
	const changeBtn = document.querySelector('#change_button');
	const resetBtn = document.querySelector('#reset_button');

	changeBtn.addEventListener('click',()=>{
		const blockId = document.querySelector('#block_id').value;
		const colorId = document.querySelector('#colour_id').value;
		const gridItems = document.querySelectorAll('.grid-item');
		gridItems.forEach(item=>{
			item.style.backgroundColor = 'transparent'
		})
		if(blockId && colorId){
			const block = document.getElementById(blockId);
			if (block) {
                block.style.backgroundColor = colorId;
            } else {
                alert('Invalid block id');
            }
		} else {
            alert('Please enter both block id and color');
        }
	});

	resetBtn.addEventListener('click',()=>{
		const gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach(item => {
            item.style.backgroundColor = 'transparent';
        });
	});
});