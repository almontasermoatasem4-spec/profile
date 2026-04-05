/**
 * Background Animation Script
 * Dynamically generates floating technology names for the portfolio background.
 */

document.addEventListener('DOMContentLoaded', () => {
    const bgContainer = document.getElementById('animated-bg');
    if (!bgContainer) {
        console.error('Animated background container not found!');
        return;
    }

    const technologies = [
        'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React',
        'Node.js', 'Python', 'PHP', 'SQL', 'Git',
        'GitHub', 'API', 'Linux', 'Docker', 'Bootstrap',
        'SASS', 'Oracle APEX', 'UI/UX', 'Next.js'
    ];

    // Professional subtle colors
    const colors = [
        '#3498db', '#e74c3c', '#2ecc71', '#f1c40f', '#9b59b6',
        '#1abc9c', '#e67e22', '#34495e', '#ecf0f1', '#95a5a6'
    ];

    // Reduced density for elegance
    const density = window.innerWidth < 768 ? 8 : 15;

    // Spread across the actual document height
    const pageHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight
    );

    for (let i = 0; i < density; i++) {
        createTechElement(bgContainer, technologies, colors, pageHeight);
    }
});

function createTechElement(container, techList, colorList, maxH) {
    const el = document.createElement('div');
    const randomTech = techList[Math.floor(Math.random() * techList.length)];
    const randomColor = colorList[Math.floor(Math.random() * colorList.length)];

    el.className = 'floating-tech-name';
    el.innerText = randomTech;

    // Position
    const left = Math.random() * 90; // Stay away from right edge
    const top = Math.random() * maxH;

    // Animation
    const duration = 20 + Math.random() * 30; // 20s to 50s
    const delay = Math.random() * -30;

    const scale = 0.7 + Math.random() * 0.5;

    el.style.left = `${left}%`;
    el.style.top = `${top}px`;
    el.style.color = randomColor;
    el.style.animationDuration = `${duration}s`;
    el.style.animationDelay = `${delay}s`;
    el.style.transform = `scale(${scale})`;

    container.appendChild(el);
}
