---
layout: default
title: "about · annie pompa"
---

<section class="intro">
    <h1>about me</h1>
    <section class="blurb">
        <p>I completed my Bachelor's and Master's in Computer Science at Indiana University Bloomington through an accelerated program - finishing my Bachelor's in 3 years and Master's in 1 year. My academic journey strengthened my love for theoretical computer science -- particularly in areas of logic and programming language theory.</p> 
        <p> I also have a lot of professors to thank at IU. The PLT community @ IU unlocked my passion for what I do to this day (even if what I do today is not PLT).</p>
    </section>
</section>

<section class="about">
    <section class="research">
        <h2>featured (something i'm proud of)</h2>
        <div class="research-showcase">
            <img src="/assets/images/syllogistic-inference-poster.png" alt="Logic in Language: the Syllogistic Inference Evaluator - First Place Award Winning Research Poster" onclick="openModal(this)">
            <div>
                <h3>Logic in Language: the Syllogistic Inference Evaluator</h3>
                <p class="award">> First Place Award</p>
                <p>During my undergraduate years at IU, I developed a system that bridges classical logic with computational reasoning. Working with (what later turned out to be) my logic professor, I built an evaluator that could analyze and validate syllogistic arguments -- a fundamental concept in logical reasoning.</p>
                <p>The project demonstrates how theoretical concepts in logic can be transformed into practical computational tools.</p>
            </div>
        </div>
    </section>
    
    <section class="interests">
        <h2>beyond</h2>
        <p>Outside of software engineering, I try to keep up with creative pursuits. So far, these include: playing guitar, painting, or exploring NYC with my camera. I have a growing interest in music theory, which feels like a natural extension of my love for theoretical computer science - both are about understanding underlying patterns and structures.</p>
        <p>Teaching has always been close to my heart. During my time at IU, I worked as a TA for multiple courses; I'm actively looking for opportunities to return to teaching in some capacity.</p>
    </section>
</section>

<!-- Modal -->
<div class="modal" onclick="closeModal()">
    <img id="modal-img" src="" alt="">
</div>

<script>
function openModal(img) {
    const modal = document.querySelector('.modal');
    const modalImg = document.getElementById('modal-img');
    modal.classList.add('active');
    modalImg.src = img.src;
    modalImg.alt = img.alt;
}

function closeModal() {
    const modal = document.querySelector('.modal');
    modal.classList.remove('active');
}
</script>