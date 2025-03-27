---
layout: default
title: About Me
---

<div class="container">
    <div class="section">
        <h1 class="retro-text">About Me</h1>
        <div class="content">
            <p>I completed my Bachelor's and Master's in Computer Science at Indiana University Bloomington through an accelerated program - finishing my Bachelor's in 3 years and Master's in 1 year. My academic journey strengthened my love for theoretical computer science, particularly in areas of logic and programming language theory.</p>
        </div>
    </div>

    <div class="section">
        <h2 class="retro-text">Featured Research</h2>
        <div class="content">
            <div class="research-showcase">
                <img src="./assets/images/syllogistic-inference-poster.jpg" alt="Logic in Language: the Syllogistic Inference Evaluator - First Place Award Winning Research Poster" class="research-poster">
                <div class="research-description">
                    <h3 class="retro-text">Logic in Language: the Syllogistic Inference Evaluator</h3>
                    <p class="award-badge">🏆 First Place Award</p>
                    <p>During my undergraduate research at IU, I developed a system that bridges classical logic with computational reasoning. Working with my logic professor, I built an evaluator that could analyze and validate syllogistic arguments - a fundamental concept in logical reasoning.</p>
                    <p>The project demonstrates how theoretical concepts in logic can be transformed into practical computational tools, combining my interests in programming language theory and formal systems.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="section">
        <h2 class="retro-text">Technical Toolkit</h2>
        <div class="content">
            <div class="skills-grid">
                <div class="skill-category">
                    <h3 class="retro-text">Languages & Tools</h3>
                    <ul>
                        <li>Go (Golang)</li>
                        <li>Python</li>
                        <li>SQL (PostgreSQL, CockroachDB)</li>
                        <li>JetBrains IDEs</li>
                    </ul>
                </div>
                <div class="skill-category">
                    <h3 class="retro-text">Areas of Focus</h3>
                    <ul>
                        <li>Distributed Systems</li>
                        <li>Database Internals</li>
                        <li>System Design</li>
                        <li>Performance Optimization</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="section">
        <h2 class="retro-text">Beyond Code</h2>
        <div class="content">
            <p>Outside of software engineering, I'm passionate about creative pursuits. You might find me playing guitar, painting, or exploring NYC with my camera. I have a growing interest in music theory, which feels like a natural extension of my love for theoretical computer science - both are about understanding underlying patterns and structures.</p>
            <p>Teaching has always been close to my heart. During my time at IU, I worked as a Teaching Assistant, and I'm actively looking for opportunities to return to teaching in some capacity. There's something special about helping others grasp complex concepts and seeing their understanding grow.</p>
        </div>
    </div>

    <!-- TODO: Add favorite courses section -->
</div>

<style>
.research-showcase {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
}

.research-poster {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 0 30px var(--shadow-color);
    transition: transform 0.3s ease;
}

.research-poster:hover {
    transform: scale(1.02);
}

.research-description {
    text-align: center;
    max-width: 800px;
}

.award-badge {
    font-size: 1.2em;
    color: var(--accent-gold);
    margin: 1rem 0;
    text-shadow: 0 0 10px rgba(200, 169, 126, 0.5);
}

@media (min-width: 768px) {
    .research-showcase {
        flex-direction: row;
        align-items: flex-start;
    }

    .research-poster {
        max-width: 50%;
    }

    .research-description {
        text-align: left;
        padding: 0 2rem;
    }
}
</style> 