
const block = document.getElementById('container');
let count = Math.floor(Math.random() * 100);

window.onload = () => {
    let repitBlock = JSON.parse(localStorage.getItem('block'));
    block.innerHTML = repitBlock;

    let points = Array.from(block.getElementsByClassName('wrapper'));
    points.forEach(item => { movePoint(item) });
    
    let pointValue = JSON.parse(localStorage.getItem('inputValue'));
    pointValue.forEach(({ id, value }) => {
        let point = document.getElementById(id);
        point.value = value;
    });
    let delBtn = Array.from(block.getElementsByClassName('btn'));
    delBtn.forEach(item => deletePoint(item));
}

const createPoint = (element, x, y) => {
    const newPoint = document.createElement('div');
    newPoint.classList.add('wrapper');
    
    block.insertAdjacentElement('beforeend', newPoint);
    newPoint.style.left = x + 'px';
    newPoint.style.top = y + 'px';
    
    const pointInput = document.createElement('input');
    pointInput.classList.add('point');
    pointInput.id = count;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'X';
    deleteBtn.classList.add('btn');

    newPoint.appendChild(pointInput);
    newPoint.appendChild(deleteBtn);
    element.appendChild(newPoint);
    movePoint(newPoint);
    deletePoint(deleteBtn);
    count++;
};

block.addEventListener('dblclick', element => {
    const { clientX: x, clientY: y } = element;
    createPoint(block, x, y);
});

const movePoint = newPoint => {
    newPoint.addEventListener('mousedown', function move(event) {
        let shiftX = event.clientX - newPoint.getBoundingClientRect().left;
        let shiftY = event.clientY - newPoint.getBoundingClientRect().top;
        moveAt(event.pageX, event.pageY);
        function moveAt(pageX, pageY) {
            newPoint.style.left = pageX - shiftX + 'px';
            newPoint.style.top = pageY - shiftY + 'px';
        }
        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }
        document.addEventListener('mousemove', onMouseMove);
        newPoint.addEventListener('mouseup', function () {
            document.removeEventListener('mousemove', onMouseMove);
            newPoint.onmouseup = null;
        });
    });
    newPoint.ondragstart = function() {
        return false;
    };
};

const deletePoint = btn => {
    btn.addEventListener('focus', (element) => {
        element.stopPropagation();
        element.target.parentElement.remove();
    });
};

window.onunload = () => {
  const input = Array.from(document.getElementsByClassName('point'));
  const inputValue = input.map(({ id, value }) => ({ id, value }));
  localStorage.setItem('inputValue', JSON.stringify(inputValue));
  localStorage.setItem('block', JSON.stringify(block.innerHTML));
};

