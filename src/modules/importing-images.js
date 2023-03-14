// ------------ Imports -----------------
import logoImg from '../assets/logo.png'
import githubImg from '../assets/github.png'
import instagramImg from '../assets/instagram.png'
import linkedinImg from '../assets/linkedin.png'
// ------------ constants -----------------
const logo = document.getElementById('logo')
const github = document.querySelectorAll('.github');
const intagram = document.querySelectorAll('.instagram');
const linkedin = document.querySelectorAll('.linkedin');
// ------------ setting src -----------------
logo.src = logoImg;
github[0].src = githubImg;
intagram[0].src = instagramImg;
linkedin[0].src = linkedinImg;
github[1].src = githubImg;
intagram[1].src = instagramImg;
linkedin[1].src = linkedinImg;