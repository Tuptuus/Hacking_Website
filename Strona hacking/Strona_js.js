                    //łapanie przycisków do rozwijania menu
const HackNav = document.querySelector('.HackerDrop');
const LinNav = document.querySelector('.LinuxDrop');
const HackNav1 = document.querySelector('.HackerDrop1');
const HackBtn = document.querySelector('#HackerButton');
const LinBtn = document.querySelector('#LinuxButton');
const HackBtn1 = document.querySelector('#HackerButton1');
const AttackNav = document.querySelector('.AttackDrop');
const AttackNav1 = document.querySelector('.AttackDrop1');
const LinNav1 = document.querySelector('.LinuxDrop1');
const AttackBtn = document.querySelector('#AttackButton');
const AttackBtn1 = document.querySelector('#AttackButton1');
const LinBtn1 = document.querySelector('#LinuxButton1');
const ham = document.querySelector('#burger');
const ham1 = document.querySelector('.Hamburger-nav');


                    //funkcje do rozwijania menu

const hamburger = function()
    {
        ham1.classList.toggle('activeB');
        
    }

const Hack = function()
{
    HackNav.classList.toggle('activeH');
}

const Lin = function()
{
    LinNav.classList.toggle('activeL');
}

const Hack1 = function()
{
    HackNav1.classList.toggle('HackerDrop1Active');
}

const Attack = function()
{
    AttackNav.classList.toggle('activeA');
}

const Attack1 = function()
{
    AttackNav1.classList.toggle('AttackDrop1Active');
}

const Lin1 = function()
{
    LinNav1.classList.toggle('LinuxDrop1Active');
}




                    //EventListener do funkcji rozwijania menu

AttackBtn.addEventListener('click', Attack);
AttackBtn1.addEventListener('click', Attack1);
HackBtn.addEventListener('click', Hack);
HackBtn1.addEventListener('click', Hack1);
LinBtn1.addEventListener('click', Lin1);
LinBtn.addEventListener('click', Lin);
ham.addEventListener('click', hamburger)

        