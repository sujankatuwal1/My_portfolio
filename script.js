const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (!entry.isIntersecting) return;
  navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
}), { rootMargin: '-35% 0px -55% 0px' });
sections.forEach(section => observer.observe(section));

const intro = document.querySelector('.intro-banner');
if (intro) {
  const text = intro.querySelector('.intro-text');
  const pause = (time) => new Promise(resolve => setTimeout(resolve, time));
  const type = async (words, speed = 115) => {
    for (const letter of words) {
      text.textContent += letter;
      await pause(speed);
    }
  };
  const erase = async (speed = 95) => {
    while (text.textContent.length) {
      text.textContent = text.textContent.slice(0, -1);
      await pause(speed);
    }
  };
  const showRoles = async () => {
    const roles = ['An IT enthusiast', 'An AI/ML engineer', 'A Trader', 'A Realtor'];
    while (true) {
      for (const role of roles) {
        const prefix = document.createElement('span');
        prefix.className = 'intro-prefix';
        prefix.textContent = "I'm ";
        const stage = document.createElement('span');
        stage.className = 'role-stage';
        const word = document.createElement('span');
        word.className = 'role-word';
        word.textContent = role;
        stage.append(word);
        text.replaceChildren(prefix, stage);
        await pause(2550);
      }
    }
  };
  (async () => {
    await pause(700);
    await type('Hi, I am Sujan');
    await pause(1700);
    await erase();
    await pause(650);
    await type("I'm ");
    await pause(550);
    await showRoles();
  })();
}
