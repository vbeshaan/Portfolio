// ==========================================
// 🗂️ 1. YOUR DATABASE (Add/Edit Items Here)
// ==========================================

const EXPERIENCE_DATABASE = [
    {
        role: "Research and Development Mechanical Engineering Intern",
        company: "Addverb",
        duration: "June 2026 - Present",
        location: "Noida, India",
        description: "Research and development focusing on intralogistics and autonomous systems.",
        bullets: [
            "Working on warehouse automation and autonomous mobile robots (AMRs) for intralogistics and material handling."
        ],
        tags: ["Warehouse Automation", "AMRs", "Intralogistics"]
    },
    {
        role: "Mechanical Subteam Member",
        company: "Illinois Robotics in Space",
        duration: "August 2025 - May 2026",
        location: "Urbana-Champaign, IL",
        description: "Engineered mechanical subassemblies for a Lunabotics planetary rover.",
        bullets: [
            "Designed a linear-actuated bucket dispenser for a Lunabotics rover, enabling repeatable autonomous regolith dumping in a planetary robotics context.",
            "Optimized regolith-handling geometry (clearances, dump angle, lip profile) to reduce clogging, bridging, and wear in granular material flow."
        ],
        tags: ["CAD", "Planetary Robotics", "Mechanism Design"]
    },
    {
        role: "Robotics Systems Intern",
        company: "xTerra Robotics",
        duration: "June 2025 - August 2025",
        location: "Kanpur, India",
        description: "Created scripts and control stacks for robotic manipulators.",
        bullets: [
            "Designed and fabricated an aluminum base plate and 3D-printed arm mount for a 6-DOF robot arm, improving robot integration safety and mechanical stiffness.",
            "Developed Python scripts for coordinate transforms and trajectory planning of a 6-DOF manipulator, enabling smooth joint-space motion in simulation and hardware.",
            "Tuned PD/PID controllers in the ROS control stack and validated tracking repeatability and accuracy against ISO 9283 robotics performance tests.",
            "Authored interactive lab-style robotics experiments and documentation to teach robot kinematics, control, and system integration using real hardware."
        ],
        tags: ["ROS", "Python", "Kinematics", "Hardware Integration"]
    },
    {
        role: "Student Intern (AI-Driven Screening)",
        company: "India Health Action Trust",
        duration: "Apr 2022 - Jun 2024",
        location: "Uttar Pradesh, India",
        description: "Co-developed the Roshni cataract screening app with AI specialists and healthcare professionals.",
        bullets: [
            "Co-authored research study proposal concept note, securing ethics approval from King George's Medical University.",
            "Collaborated to develop mobile application wireframes for extensive field data collection.",
            "Led User Acceptance Testing (UAT) in Barabanki district, training ASHAs and conducting door-to-door screening.",
            "Conducted training sessions for state-level master trainers, facilitating rollout across 75 districts."
        ],
        tags: ["Python", "Machine Learning", "SQL", "Healthcare AI"]
    },
    {
        role: "Event Coordinator",
        company: "Study Hall",
        duration: "Jul 2023 - Jul 2024",
        location: "Lucknow, India",
        description: "Led a multidisciplinary team to organize large-scale academic events.",
        bullets: [
            "Conceptualized and organized a two-day Model United Nations (MUN) conference.",
            "Secured financial and in-kind support through local business outreach and sponsorships.",
            "Managed event budgets, Instagram marketing campaigns, and presentation logistics."
        ],
        tags: ["Budget Management", "Marketing", "Communication"]
    }
];

const PROJECTS_DATABASE = [
    {
        id: "ros2-dwa",
        title: "ROS 2 DWA Local Navigation Loop",
        subtitle: "Autonomous Mobile Robot Navigation Algorithm",
        meta: "Personal Project / Gazebo",
        summary: "Implemented a custom Dynamic Window Approach (DWA) local planner in Python for a TurtleBot3 Burger.",
        tags: ["ROS 2", "Python", "Gazebo", "Algorithm Design"],
        
        imagePath: "images/ros2-dwa.jpg", 
        imagePosition: "top", 
        
        metrics: [
            { label: "Platform", value: "TurtleBot3" },
            { label: "Logic", value: "DWA Planner" },
            { label: "Framework", value: "ROS 2" }
        ],
        notesHtml: `
            <h3>Algorithm Architecture & Implementation</h3>
            <p><strong>Navigation Node:</strong> Implemented a custom Dynamic Window Approach (DWA) local planner in Python for a TurtleBot3 Burger, subscribing to /odom and /scan and publishing /cmd_vel for autonomous mobile robot navigation in Gazebo.</p>
            <p><strong>Trajectory Scoring:</strong> Sampled linear and angular velocities (v, w) within a dynamic window, simulated trajectories, and scored them with goal, heading, obstacle (LaserScan), smoothness, and progress costs.</p>
            <p><strong>Validation:</strong> Used RViz MarkerArray and logs to debug local planner behavior and velocity command outputs.</p>
        `
    },
    {
        id: "retrolens",
        title: "RetroLens Pro X-Adapter",
        subtitle: "Sustainable Camera Lens Adapter Design",
        meta: "ME 270: Design for Manufacturability",
        summary: "Innovative adapter system repurposing disposable camera lenses for modern mirrorless cameras, focusing on sustainable engineering.",
        tags: ["GD&T", "PETG/Aluminum", "3D Printing", "DFA"],
        
        imagePath: "images/retrolens.jpg", 
        imagePosition: "left", 
        
        metrics: [
            { label: "Cost Reduction", value: "85%" },
            { label: "Assembly Efficiency", value: "82.2%" },
            { label: "Part Reduction", value: "60%" }
        ],
        notesHtml: `
            <h3>Engineering & DFA Analysis</h3>
            <p><strong>Technical Overview:</strong> Redesigned adapter bodies to integrate built-in light sealing mechanisms and mounting tabs. Successfully condensed components down from 5 distinct structural elements to 2 theoretical parts using strict Design for Assembly (DFA) practices.</p>
            <p><strong>Materials Implementation:</strong> Opted for PETG structures over standard thermoplastics to maintain structural resilience while sourcing pristine optical lenses out of recovered Fujifilm units. Included 6061-T6 Aluminum elements.</p>
            <p><strong>Financial Impact:</strong> Achieved a target production cost of $13-17 compared to competitors priced at $89-129.</p>
        `
    },
    {
        id: "fusiondesk",
        title: "Fusion Desk Ergonomic System",
        subtitle: "Comprehensive Workspace Solution",
        meta: "Team Design Project",
        summary: "Complex ergonomic desk system with integrated laptop stand, storage, and LED lighting demonstrating multi-material design expertise.",
        tags: ["System Integration", "Multi-Material", "Financial Modeling", "SolidWorks"],
        
        imagePath: "images/fusiondesk.jpg",
        imagePosition: "right", 
        
        metrics: [
            { label: "Total Components", value: "29 Parts" },
            { label: "Tooling Investment", value: "$321k" },
            { label: "Total Mfg Cost", value: "$859.07" }
        ],
        notesHtml: `
            <h3>Multi-Material System Architecture</h3>
            <p><strong>System Scope:</strong> Developed an enterprise-grade multi-material ergonomic system utilizing Aluminum (ANSI 1050A, 6061), Steel (AISI 1010), and Polycarbonate structures.</p>
            <p><strong>Optimization Modeling:</strong> Handled component-level financial structures mapping tooling investments against future production scale. Identified a 56% potential cost reduction through strategic material substitutions (e.g., substituting wood for specific polycarbonate desktop elements).</p>
            <p><strong>Manufacturing Processes:</strong> Designed specifically for sheet metal forming, plastic molding, and standard stock machining.</p>
        `
    },
    {
        id: "seaguardian",
        title: "SeaGuardian Drone System",
        subtitle: "Semi-Autonomous Lifeguard Rescue UAV",
        meta: "Illinois Design Challenge",
        summary: "Conceptual CAD design for a waterproof search-and-rescue quadcopter featuring AI thermal drowning detection and payload deployment.",
        tags: ["CAD Prototyping", "Thermal AI", "VTOL Design", "Aerospace"],
        
        imagePath: "images/seaguardian.jpg",
        imagePosition: "top", 
        
        metrics: [
            { label: "Drop Accuracy", value: "1-3 ft" },
            { label: "Detection", value: "Thermal AI" },
            { label: "Frame", value: "Carbon Fiber" }
        ],
        notesHtml: `
            <h3>Aerospace Systems Prototyping</h3>
            <p><strong>Design Constraints:</strong> Competed in a 2-day rapid CAD modeling competition to architect a complete UAV system. Solved center of gravity challenges by strategically positioning heavy thermal camera payloads opposite to high-capacity 18650 battery banks.</p>
            <p><strong>Water Surface Detection:</strong> Rejected standard sonar/LiDAR solutions due to high water surface reflection errors. Implemented FLIR thermal imaging paired with computer vision to track disruption patterns in the water.</p>
            <p><strong>Payload Deployment:</strong> Designed a rigid tail system with servo-controlled droppers to deploy collapsible high-density life preservers with strict 1-3 feet accuracy targets.</p>
        `
    }
];

const SKILLS_DATABASE = [
    {
        category: "Programming & Systems",
        skills: ["ROS 2", "Python", "C++", "Gazebo", "PlotJuggler", "Rviz", "Linux"]
    },
    {
        category: "Engineering & CAD",
        skills: ["SolidWorks", "Fusion 360", "DFA / DFM", "GD&T", "FEA Analysis", "Additive Manufacturing"]
    },
    {
        category: "Core Engineering Coursework",
        skills: [
            "ME 451: Manufacturing & Automation", 
            "ME 330: Materials", 
            "ME 270: Mechanics", 
            "ECE 205/206: Circuits & Electronics", 
            "STAT 400: Statistics", 
            "ME 170: Design & CAD", 
            "ME 200: Thermodynamics"
        ]
    },
    {
        category: "Analysis & Clinical",
        skills: ["Technical Writing", "Data Collection", "User Acceptance Testing", "Wireframing"]
    }
];

// ==========================================
// ⚙️ 2. CORE ENGINE (DO NOT EDIT BELOW)
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    renderExperience();
    renderProjects();
    renderSkills();
});

// --- RENDER EXPERIENCES ---
function renderExperience() {
    const container = document.getElementById('experience-timeline');
    if (!container) return;

    let html = '';
    EXPERIENCE_DATABASE.forEach(exp => {
        const tagsHtml = exp.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        const bulletsHtml = exp.bullets.map(bullet => `<li>${bullet}</li>`).join('');
        
        html += `
            <div class="timeline-item">
                <div class="time-meta">${exp.duration} | ${exp.location}</div>
                <div class="timeline-card">
                    <h3>${exp.role}</h3>
                    <h4>${exp.company}</h4>
                    <p style="color: var(--text-muted); margin-bottom: 1rem; font-style: italic;">${exp.description}</p>
                    <ul>${bulletsHtml}</ul>
                    <div class="p-tags" style="margin-top: 1rem;">${tagsHtml}</div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

// --- RENDER PROJECTS ---
function renderProjects() {
    const container = document.getElementById('project-container');
    if (!container) return;

    let html = '';
    PROJECTS_DATABASE.forEach(project => {
        const tagsHtml = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        
        html += `
            <div class="project-card" onclick="openModal('${project.id}')">
                <div class="p-img-wrapper">
                    <!-- Failsafe if image is missing -->
                    <div class="p-img-placeholder">EV</div>
                </div>
                <div class="p-body">
                    <span class="time-meta" style="margin-bottom: 0.5rem; display: block;">${project.meta}</span>
                    <h3>${project.title}</h3>
                    <p>${project.summary}</p>
                    <div class="p-tags">${tagsHtml}</div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

// --- RENDER SKILLS ---
function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;

    let html = '';
    SKILLS_DATABASE.forEach(group => {
        const skillsHtml = group.skills.map(skill => `<li>${skill}</li>`).join('');
        html += `
            <div class="skill-category">
                <h3>${group.category}</h3>
                <ul class="skill-list">${skillsHtml}</ul>
            </div>
        `;
    });
    container.innerHTML = html;
}

// ==========================================
// 🪟 3. MODAL INTERACTION SYSTEM
// ==========================================

const modal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-dynamic-body');

function openModal(projectId) {
    const project = PROJECTS_DATABASE.find(p => p.id === projectId);
    if (!project) return;

    // Generate Metrics row
    const metricsHtml = project.metrics.map(m => `
        <div class="metric-box">
            <span>${m.value}</span>
            <label>${m.label}</label>
        </div>
    `).join('');

    // Construct Inner Layout based on configuration (top, left, or right)
    let layoutClass = "layout-top";
    if (project.imagePosition === "left") layoutClass = "layout-split reverse";
    if (project.imagePosition === "right") layoutClass = "layout-split";

    let innerHtml = `
        <div class="modal-header-meta">
            <h2>${project.title}</h2>
            <p>${project.subtitle}</p>
        </div>
        <div class="${layoutClass}">
            <div class="modal-text-panel">
                <div class="metric-row">${metricsHtml}</div>
                <div class="modal-notes">
                    ${project.notesHtml}
                </div>
            </div>
            <div class="modal-image-panel">
                <img src="${project.imagePath}" alt="${project.title} visualization" onerror="this.style.display='none'">
            </div>
        </div>
    `;

    modalBody.innerHTML = innerHtml;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scrolling
    // Clear out contents after animation finishes to prevent ghosting
    setTimeout(() => {
        modalBody.innerHTML = '';
    }, 300);
}

// Close modal if user hits Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});
