// ------------ Imports -----------------
import logoImg from '../assets/logo.png';
import githubImg from '../assets/github.png';
import instagramImg from '../assets/instagram.png';
import linkedinImg from '../assets/linkedin.png';
import mobMenuImg from '../assets/mob-menu.png';
// ------------ constants -----------------
const logo = document.getElementById('logo');
const github = document.querySelectorAll('.github');
const instagram = document.querySelectorAll('.instagram');
const linkedin = document.querySelectorAll('.linkedin');
const mobMenu = document.getElementById('mob-menu');
// ------------ setting src -----------------
logo.src = logoImg;
mobMenu.src = mobMenuImg;
github[0].src = mobMenuImg;
instagram[0].src = instagramImg;
linkedin[0].src = linkedinImg;
github[1].src = githubImg;
instagram[1].src = instagramImg;
linkedin[1].src = linkedinImg;