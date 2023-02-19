document.getElementById('btn-ellipse').addEventListener('click', function () {
    const newEllipseCalculateFraction = getInnerTextById('ellipse-fraction');


    const newEllipseCalculateA = getValueById('ellipse-a');


    const newEllipseCalculateB = getValueById('ellipse-b');

    const newElement = newEllipseCalculateFraction * newEllipseCalculateA * newEllipseCalculateB;
    setAns('Ellipse', newElement);
    if (newEllipseCalculateA < 0 ) {
        alert('get positive number')
    }
    else if (newEllipseCalculateB < 0) {
        alert('get positive number')
    }
})



function getValueById(id){
    const stringValue = document.getElementById(id);
    const numberValue = parseFloat(stringValue.value);
    return numberValue;
}
function getInnerTextById(id){
    const stringValue = document.getElementById(id);
    const numberValue = parseFloat(stringValue.innerText);
    return numberValue;
}

function setAns(name, A) {
    const div = document.createElement('div');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const button = document.createElement('button');
    div.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'inline-p', 'mb-3', 'split-div', 'fs-6');
    button.classList.add('btn', 'btn-primary', 'fs-6');
    const splitDivs = document.getElementsByClassName('split-div');
    const number = splitDivs.length + 1;
    const serial = document.createElement('li');
    serial.innerText = number + '.';
    li1.innerText = name;
    li2.innerText = A;
    button.innerText = 'Convert to ';
    let m2 = document.createElement('p');
    m2.innerText = 'm';
    const sup2 = document.createElement('sup');
    sup2.innerText = '2';
    let cm2 = document.createElement('p');
    cm2.innerText = 'cm';
    const sup = document.createElement('sup');
    sup.innerText = '2';
    cm2.appendChild(sup);
    m2.appendChild(sup2);
    li2.appendChild(cm2);
    button.appendChild(m2);
    div.appendChild(serial);
    div.appendChild(li1);
    div.appendChild(li2);
    div.appendChild(button);
    const setAddress = document.getElementById('area-calculation');
    setAddress.appendChild(div);

}