import './index.html';
import './index.scss';

function Controls(){
    const control = document.querySelectorAll('.control');
    control.forEach(item => {
        item.addEventListener('click', () => {
            document.querySelector('.control--active').classList.remove('control--active');
            item.classList.add('control--active');
            document.querySelector('.active').classList.remove('active');
            document.getElementById(item.dataset.id).classList.add('active');
        })
    })
    document.querySelector('.theme').addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
    })
}
Controls();

function Graphik(){
    const graphik = document.querySelectorAll('.skills__item-graphik');
    const percent = document.querySelectorAll('.skills__item-percent');
    graphik.forEach((item, index) => {
        item.style.setProperty('--width', percent[index].innerHTML)
    })
}
Graphik();

function Links(){
    const link = document.querySelectorAll('.link-to');
    link.forEach(item => {
        item.addEventListener('click', () => {
            document.querySelector('.control--active').classList.remove('control--active');
            document.querySelector(`[data-id=${item.getAttribute('name')}]`).classList.add('control--active');
            document.querySelector('.active').classList.remove('active');
            document.getElementById(item.getAttribute('name')).classList.add('active');
        })
    })
}
Links();
