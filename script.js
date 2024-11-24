
// background: linear-gradient(45deg, rgba(34,193,195,1) 74%, rgba(253,187,45,1) 80%)
// gsap.to('.background', {'background': 'linear-gradient(45deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 10%)', duration: 10, repeat: -1})

var tl = gsap.timeline({repeat: -1});
tl.to('.background', {'background': 'linear-gradient(45deg, rgba(34,193,195,1) 50%, rgba(253,187,45,1) 80%)', duration: 0.26 * 20});
tl.to('.background', {'background': 'linear-gradient(45deg, rgba(34,193,195,1) 50%, rgba(253,187,45,1) 70%)', duration: 0.10 * 20});
// tl.to('.background', {'background': 'linear-gradient(45deg, rgba(34,193,195,1) 50%, rgba(253,187,45,1) 70%)', duration: 0.02 * 20});
tl.to('.background', {'background': 'linear-gradient(45deg, rgba(34,193,195,1) 54%, rgba(253,187,45,1) 70%)', duration: 0.04 * 20}, '+=0.4');
tl.to('.background', {'background': 'linear-gradient(45deg, rgba(34,193,195,1) 64%, rgba(253,187,45,1) 80%)', duration: 0.08 * 20});
tl.to('.background', {'background': 'linear-gradient(45deg, rgba(34,193,195,1) 72%, rgba(253,187,45,1) 80%)', duration: 0.08 * 20});
// tl.to('.background', {'background': 'linear-gradient(45deg, rgba(34,193,195,1) 72%, rgba(253,187,45,1) 80%)', duration: 0.04 * 20});
tl.to('.background', {'background': 'linear-gradient(45deg, rgba(34,193,195,1) 56%, rgba(253,187,45,1) 80%)', duration: 0.16 * 20}, '+=0.8');
// tl.to('.background', {'background': 'linear-gradient(45deg, rgba(34,193,195,1) 56%, rgba(253,187,45,1) 80%)', duration: 0.02 * 20});
tl.to('.background', {'background': 'linear-gradient(45deg, rgba(34,193,195,1) 50%, rgba(253,187,45,1) 80%)', duration: 0.18 * 20}, '+=0.4');