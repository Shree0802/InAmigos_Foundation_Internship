const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '✕' : '☰';
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navLinks.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.textContent = '☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();

const messages = document.getElementById('chatMessages');
const form = document.getElementById('chatForm');
const input = document.getElementById('chatInput');
function addMessage(text, type) {
  const bubble = document.createElement('div');
  bubble.className = `message ${type === 'user' ? 'user-message' : 'assistant-message'}`;
  bubble.textContent = text;
  messages.appendChild(bubble);
  messages.scrollTop = messages.scrollHeight;
}
function respond(question) {
  const q = question.toLowerCase();
  if (/skill|technolog|stack|language|tool|framework|code/.test(q)) return 'Prathamesh is building skills across web development (HTML, CSS, JavaScript, React, Node.js and MongoDB), AI/ML (Python and machine-learning tools), and data analytics (SQL, Excel, Power BI and Python libraries). His toolkit is growing through practice and projects.';
  if (/project|work|build|portfolio|dypulse|skillpilot|scholarship|dashboard/.test(q)) return 'Some featured project themes are SkillPilot AI, a student career-guidance concept; DYPULSE, a campus merchandise e-commerce concept; a scholarship workflow automation; and a Power BI dashboard. Visit the GitHub profile for the latest repositories and source code.';
  if (/learn|goal|journey|future|intern|about|who|yourself/.test(q)) return 'Prathamesh is an AIML engineering student who learns by building. His current interests include practical AI, full-stack development, data analytics and workflow automation. He is interested in meaningful internship tasks, collaboration and continued learning.';
  if (/contact|linkedin|github|connect/.test(q)) return 'You can connect with Prathamesh on LinkedIn at linkedin.com/in/prathamesh-patil1718 or explore code on github.com/Shree0802. Use the contact links near the bottom of this page.';
  if (/hello|hi|hey/.test(q)) return 'Hey! Ask me about Prathamesh’s tech stack, projects, learning journey or how to connect with him.';
  return 'I can help with a few profile topics: skills and technologies, project themes, learning goals, or contact links. Try asking “What technologies do you work with?”';
}
function submitQuestion(question) {
  const clean = question.trim(); if (!clean) return;
  addMessage(clean, 'user');
  input.value = '';
  window.setTimeout(() => addMessage(respond(clean), 'assistant'), 220);
}
form.addEventListener('submit', event => { event.preventDefault(); submitQuestion(input.value); });
document.querySelectorAll('[data-question]').forEach(button => button.addEventListener('click', () => submitQuestion(button.dataset.question)));
