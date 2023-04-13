// query where reviewers information are contained
const reviews = [
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
];

// getting necessary event from the user in  the DOM
const img = document.querySelector('#person-img');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info')

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randBtn = document.querySelector('.random-btn');

// setting the defult value for the reviewer to be displayed
let currentItem = 0;

// get the person and their details to review
window.addEventListener('DOMContentLoaded', function(){
    console.log('page loaded');
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.innerHTML = item.job;
    info.innerText = item.text;
})

// make the person and their details to review in a function
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.innerHTML = item.job;
    info.innerText = item.text;
}

// funtions for the buttons to do their job
prevBtn.addEventListener('click', prevClick);
function prevClick(){
    console.log('prev clicked')
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
}

nextBtn.addEventListener('click', nextClick);
function nextClick(){
    console.log('next clicked')
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
}

randBtn.addEventListener('click', onclick);
function onclick(){
    console.log('rand clicked')
    let previousItem = currentItem
    currentItem = Math.floor(Math.random() * reviews.length)
    while (true) {
        if (currentItem === previousItem) {
            currentItem = Math.floor(Math.random() * reviews.length)
        }
        else{
            break
        }
    }
    showPerson(currentItem)
}
