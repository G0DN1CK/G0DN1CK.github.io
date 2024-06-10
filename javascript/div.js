

function showDiv(divNumber) {
    document.getElementById('div1').style.display = 'none';
    document.getElementById('div2').style.display = 'none';
    document.getElementById('div3').style.display = 'none';
    
    document.getElementById(`div${divNumber}`).style.display = 'block';
}

