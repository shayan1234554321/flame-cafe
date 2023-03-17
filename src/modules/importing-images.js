// ------------ Imports -----------------
import logoImg from '../assets/logo.png';
import githubImg from '../assets/github.png';
import instagramImg from '../assets/instagram.png';
import linkedinImg from '../assets/linkedin.png';
import downloadImg from '../assets/download.png';
import arrowDownImg from '../assets/arrow-down.png';
import landingImageImg from '../assets/landing-image.png';
import landingBgFlareImg from '../assets/landing-bg-flare.jpg';
import backgroundFlame from '../assets/backgroundFlame.mp4';
import mobMenuImg from '../assets/mob-menu.png';
// ------------ constants -----------------
const logo = document.getElementById('logo');
const flameVideo = document.getElementById('flame-video');
const landingBgFlare = document.getElementById('flame');
const github = document.querySelectorAll('.github');
const instagram = document.querySelectorAll('.instagram');
const linkedin = document.querySelectorAll('.linkedin');
const download = document.getElementById('download');
const arrowDown = document.getElementById('arrow-down');
const landingImage = document.getElementById('landing-image');
const mobMenu = document.getElementById('mob-menu');
// ------------ setting src -----------------
logo.src = logoImg;
flameVideo.src = backgroundFlame;
download.src = downloadImg;
landingImage.src = landingImageImg;
arrowDown.src = arrowDownImg;
landingBgFlare.src = landingBgFlareImg;
logo.src = logoImg;
mobMenu.src = mobMenuImg;
github[0].src = githubImg;
instagram[0].src = instagramImg;
linkedin[0].src = linkedinImg;
github[1].src = githubImg;
instagram[1].src = instagramImg;
linkedin[1].src = linkedinImg;