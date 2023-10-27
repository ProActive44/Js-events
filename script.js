// Challenge 1
const user = document.getElementById('user');

window.onload = () => {
  user.innerHTML = 'Prasad';
};

// Challenge 2
const bgBtn = document.getElementById('btn-click');

bgBtn.onclick = () => {
  bgBtn.style.backgroundColor = 'red';
};

// Challenge 3
const makeSentence = () => {
  const noun = document.getElementById('noun').value;
  const verb = document.getElementById('verb').value;
  const adverb = document.getElementById('adverb').value;

  const sentense = noun + ' ' + verb + ' ' + adverb;
  const statement = document.getElementById('statement');
  statement.innerHTML = sentense;
};

const buildButton = document.getElementById('build-button');
buildButton.addEventListener('click', makeSentence);

// challenge 4.1 ( Event Bubbling)
const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

grandparent.addEventListener('click', () => {
  console.log('grandparent clicked');
});
parent.addEventListener('click', () => {
  console.log('parent clicked');
});
child.addEventListener('click', () => {
  console.log('child clicked');
});

// challenge 4.2 ( event capturing )

grandparent.addEventListener(
  'click',
  () => {
    console.log('grandparent clicked');
  },
  { capture: true }
);
parent.addEventListener(
  'click',
  () => {
    console.log('parent clicked');
  },
  { capture: true }
);
child.addEventListener(
  'click',
  (e) => {
    console.log('child clicked');
  },
  { capture: true }
);

// challenge 5
const category = document.getElementById('category');
category.addEventListener('click', (e) => {
  if (e.target.id === 'blazers') {
    console.log(e.target.id);
  }
});
