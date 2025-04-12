// Sample job data
const jobs = [
    {
        id: 1,
        title: "Senior Frontend Developer",
        company: "TechFlow Inc.",
        companyInitials: "TF",
        location: "San Francisco, CA",
        jobType: "Full-time",
        salary: "$120K - $150K",
        tags: ["JavaScript", "React", "TypeScript", "UI/UX"],
        description: "We are looking for an experienced Frontend Developer to join our dynamic team...",
        responsibilities: [
            "Develop new user-facing features using React.js",
            "Build reusable components and front-end libraries for future use",
            "Translate designs and wireframes into high-quality code",
            "Optimize components for maximum performance across devices and browsers"
        ],
        requirements: [
            "5+ years of experience in frontend development",
            "Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model",
            "Thorough understanding of React.js and its core principles",
            "Experience with popular React.js workflows such as Redux",
            "Familiarity with newer specifications of EcmaScript"
        ],
        benefits: [
            "Competitive salary and equity",
            "Health, dental, and vision insurance",
            "Unlimited PTO",
            "Remote work options",
            "Professional development budget"
        ],
        postDate: "2 days ago"
    },
    {
        id: 2,
        title: "Product Marketing Manager",
        company: "GrowthWave",
        companyInitials: "GW",
        location: "New York, NY",
        jobType: "Full-time",
        salary: "$95K - $115K",
        tags: ["Marketing", "Product Management", "SEO", "Analytics"],
        description: "Join our marketing team to help shape and execute our product marketing strategy...",
        responsibilities: [
            "Develop positioning and messaging for new and existing products",
            "Create marketing materials like case studies, white papers, and presentations",
            "Collaborate with sales teams to develop effective sales strategies",
            "Analyze market trends and competitor activities"
        ],
        requirements: [
            "3+ years of experience in product marketing",
            "Strong understanding of B2B SaaS marketing strategies",
            "Excellent written and verbal communication skills",
            "Experience with marketing analytics and tools",
            "Bachelor's degree in Marketing, Business, or related field"
        ],
        benefits: [
            "Competitive salary and performance bonuses",
            "Comprehensive healthcare package",
            "401(k) matching",
            "Flexible work schedule",
            "Continued education opportunities"
        ],
        postDate: "1 week ago"
    },
    {
        id: 3,
        title: "Data Scientist",
        company: "DataCore Analytics",
        companyInitials: "DC",
        location: "Remote",
        jobType: "Full-time",
        salary: "$130K - $160K",
        tags: ["Python", "Machine Learning", "SQL", "Data Analysis"],
        description: "We're seeking a talented Data Scientist to help us extract valuable insights from complex datasets...",
        responsibilities: [
            "Develop machine learning models to address business problems",
            "Clean and preprocess large datasets for analysis",
            "Create data visualizations and dashboards",
            "Collaborate with cross-functional teams to implement data-driven solutions"
        ],
        requirements: [
            "Master's or PhD in Computer Science, Statistics, or related field",
            "4+ years of experience in data science or related role",
            "Strong programming skills in Python and SQL",
            "Experience with machine learning frameworks like TensorFlow or PyTorch",
            "Knowledge of statistical analysis and experimental design"
        ],
        benefits: [
            "Industry-leading compensation package",
            "Remote-first company culture",
            "Flexible working hours",
            "Annual learning stipend",
            "Latest hardware and software provided"
        ],
        postDate: "3 days ago"
    },
    {
        id: 4,
        title: "UX/UI Designer",
        company: "CreativeMinds",
        companyInitials: "CM",
        location: "Austin, TX",
        jobType: "Contract",
        salary: "$80K - $100K",
        tags: ["UI Design", "User Research", "Prototyping", "Figma"],
        description: "Help us create beautiful, intuitive interfaces for our cutting-edge products...",
        responsibilities: [
            "Create user flows, wireframes, prototypes, and high-fidelity mockups",
            "Conduct user research and usability testing",
            "Collaborate with developers to implement designs",
            "Stay updated on the latest UI/UX trends and techniques"
        ],
        requirements: [
            "3+ years of experience in UX/UI design",
            "Strong portfolio showcasing your design process",
            "Proficiency in design tools such as Figma, Sketch, or Adobe XD",
            "Understanding of accessibility standards and responsive design",
            "Good communication and collaboration skills"
        ],
        benefits: [
            "Competitive hourly rate",
            "Flexible work schedule",
            "Opportunity for full-time conversion",
            "Creative and collaborative work environment",
            "Portfolio-building projects"
        ],
        postDate: "5 days ago"
    },
    {
        id: 5,
        title: "DevOps Engineer",
        company: "CloudNative Systems",
        companyInitials: "CN",
        location: "Chicago, IL",
        jobType: "Full-time",
        salary: "$110K - $140K",
        tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
        description: "Join our DevOps team to build and maintain our cloud infrastructure and deployment pipelines...",
        responsibilities: [
            "Design and implement CI/CD pipelines",
            "Manage cloud infrastructure using infrastructure as code",
            "Monitor system performance and troubleshoot issues",
            "Collaborate with development teams to improve deployment processes"
        ],
        requirements: [
            "4+ years of experience in DevOps or SRE roles",
            "Strong knowledge of AWS services",
            "Experience with containerization technologies like Docker and Kubernetes",
            "Familiarity with infrastructure as code tools like Terraform",
            "Strong scripting skills (Python, Bash, etc.)"
        ],
        benefits: [
            "Competitive salary and annual bonuses",
            "Comprehensive benefits package",
            "Flexible work arrangements",
            "Professional development opportunities",
            "Regular team building events"
        ],
        postDate: "1 day ago"
    },
    {
        id: 6,
        title: "Marketing Coordinator",
        company: "Brand Elevate",
        companyInitials: "BE",
        location: "Remote",
        jobType: "Part-time",
        salary: "$40K - $50K",
        tags: ["Social Media", "Content Creation", "Email Marketing", "Analytics"],
        description: "Help us coordinate and execute our marketing campaigns across multiple channels...",
        responsibilities: [
            "Assist in the planning and execution of marketing campaigns",
            "Create and schedule social media content",
            "Coordinate email marketing campaigns",
            "Track and report on marketing metrics"
        ],
        requirements: [
            "1-2 years of experience in marketing",
            "Strong written and verbal communication skills",
            "Experience with social media platforms and management tools",
            "Basic understanding of marketing analytics",
            "Bachelor's degree in Marketing or related field (preferred)"
        ],
        benefits: [
            "Flexible working hours",
            "Remote work environment",
            "Professional development opportunities",
            "Supportive team culture",
            "Performance-based incentives"
        ],
        postDate: "2 weeks ago"
    }
];

// Sample company data
const companies = [
    {
        id: 1,
        name: "TechFlow Inc.",
        initials: "TF",
        location: "San Francisco, CA",
        openPositions: 12
    },
    {
        id: 2,
        name: "GrowthWave",
        initials: "GW",
        location: "New York, NY",
        openPositions: 8
    },
    {
        id: 3,
        name: "DataCore Analytics",
        initials: "DC",
        location: "Remote",
        openPositions: 5
    },
    {
        id: 4,
        name: "CreativeMinds",
        initials: "CM",
        location: "Austin, TX",
        openPositions: 3
    }
];

// DOM elements
const jobsContainer = document.getElementById('jobs-container');
const loginBtn = document.getElementById('login-btn');
const searchBtn = document.getElementById('search-btn');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Display jobs
    displayJobs();
    
    // Setup event listeners
    setupEventListeners();
});

// Display jobs
function displayJobs() {
    jobsContainer.innerHTML = '';
    
    jobs.forEach(job => {
        const jobCard = createJobCard(job);
        jobsContainer.appendChild(jobCard);
    });
}

// Create job card element
function createJobCard(job) {
    const jobCard = document.createElement('div');
    jobCard.className = 'job-card';
    jobCard.dataset.jobId = job.id;
    
    jobCard.innerHTML = `
        <div class="job-card-header">
            <div class="company-logo">${job.companyInitials}</div>
            <div class="job-title">
                <h3>${job.title}</h3>
                <div class="company-name">${job.company}</div>
            </div>
        </div>
        <div class="job-card-body">
            <div class="job-details">
                <div class="job-type">📋 ${job.jobType}</div>
                <div class="job-location">📍 ${job.location}</div>
                <div class="job-salary">💰 ${job.salary}</div>
            </div>
            <div class="job-tags">
                ${job.tags.map(tag => `<span class="job-tag">${tag}</span>`).join('')}
            </div>
            <div class="job-description">
                ${job.description.substring(0, 150)}...
            </div>
        </div>
        <div class="job-card-footer">
            <div class="post-date">Posted ${job.postDate}</div>
            <button class="btn btn-outline apply-btn">Apply Now</button>
        </div>
    `;
    
    // Add click event to open job details
    jobCard.addEventListener('click', function(e) {
        // Don't open modal if apply button was clicked
        if (e.target.classList.contains('apply-btn')) {
            e.stopPropagation();
            return;
        }
        openJobDetails(job.id);
    });
    
    // Add click event to apply button
    const applyBtn = jobCard.querySelector('.apply-btn');
    applyBtn.addEventListener('click', function() {
        openJobDetails(job.id, true);
    });
    
    return jobCard;
}

// Setup general event listeners
function setupEventListeners() {
    // Login button
    loginBtn.addEventListener('click', openLoginModal);
    
    // Search button
    searchBtn.addEventListener('click', searchJobs);
    
    // Close modals when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            closeAllModals();
        }
    });
    
    // Close modals when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });
}

// Search jobs functionality
function searchJobs() {
    const searchInput = document.querySelector('.search-container input').value.toLowerCase();
    const locationSelect = document.querySelector('.search-container select').value;
    
    // Filter jobs based on search criteria
    const filteredJobs = jobs.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchInput) || 
                              job.company.toLowerCase().includes(searchInput) ||
                              job.tags.some(tag => tag.toLowerCase().includes(searchInput));
        
        const matchesLocation = locationSelect === 'All Locations' || job.location === locationSelect;
        
        return matchesSearch && matchesLocation;
    });
    
    // Update jobs display
    jobsContainer.innerHTML = '';
    
    if (filteredJobs.length === 0) {
        jobsContainer.innerHTML = `
            <div class="card" style="text-align: center; padding: 40px;">
                <h3>No jobs found</h3>
                <p>Try adjusting your search criteria.</p>
            </div>
        `;
    } else {
        filteredJobs.forEach(job => {
            const jobCard = createJobCard(job);
            jobsContainer.appendChild(jobCard);
        });
    }
}

// Open job details modal
function openJobDetails(jobId, showApplicationForm = false) {
    const job = jobs.find(job => job.id === jobId);
    
    if (!job) return;
    
    // Create modal element
    const modal = document.createElement('div');
    modal.className = 'modal job-detail-modal';
    modal.id = 'job-detail-modal';
    
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">Job Details</h2>
                <span class="close-modal">&times;</span>
            </div>
            <div class="modal-body">
                <div class="job-detail-header">
                    <div class="job-detail-logo">${job.companyInitials}</div>
                    <div class="job-detail-title-group">
                        <h1>${job.title}</h1>
                        <div class="job-detail-company">${job.company}</div>
                        <div class="job-detail-info">
                            <div class="job-detail-info-item">📋 ${job.jobType}</div>
                            <div class="job-detail-info-item">📍 ${job.location}</div>
                            <div class="job-detail-info-item">💰 ${job.salary}</div>
                            <div class="job-detail-info-item">⏱️ Posted ${job.postDate}</div>
                        </div>
                    </div>
                </div>
                
                <div class="job-detail-tags">
                    ${job.tags.map(tag => `<span class="job-tag">${tag}</span>`).join('')}
                </div>
                
                <div class="job-detail-section">
                    <h2>Job Description</h2>
                    <p>${job.description}</p>
                </div>
                
                <div class="job-detail-section">
                    <h2>Responsibilities</h2>
                    <ul>
                        ${job.responsibilities.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="job-detail-section">
                    <h2>Requirements</h2>
                    <ul>
                        ${job.requirements.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="job-detail-section">
                    <h2>Benefits</h2>
                    <ul>
                        ${job.benefits.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="job-detail-apply">
                    <h2>Interested in this job?</h2>
                    <p>Apply now and we'll get back to you within 48 hours.</p>
                    <button class="btn" id="show-application-form-btn">Apply for this position</button>
                    
                    <div class="application-form" id="application-form" style="${showApplicationForm ? 'display: block;' : ''}">
                        <div class="form-group">
                            <label for="full-name">Full Name</label>
                            <input type="text" id="full-name" class="form-control" placeholder="Enter your full name">
                        </div>
                        
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" class="form-control" placeholder="Enter your email">
                        </div>
                        
                        <div class="form-group">
                            <label for="phone">Phone Number</label>
                            <input type="tel" id="phone" class="form-control" placeholder="Enter your phone number">
                        </div>
                        
                        <div class="form-group">
                            <label>Resume/CV</label>
                            <div class="file-input-container">
                                <label class="file-input-label">Upload Resume</label>
                                <input type="file" class="file-input" id="resume">
                                <span class="file-input-name" id="resume-name">No file selected</span>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="cover-letter">Cover Letter</label>
                            <textarea id="cover-letter" class="form-control" placeholder="Write a cover letter explaining why you're a good fit for this position"></textarea>
                        </div>
                        
                        <div class="form-check">
                            <input type="checkbox" id="terms" class="form-check-input">
                            <label for="terms">I agree to the <a href="#">terms and conditions</a> and consent to the processing of my personal data.</label>
                        </div>
                        
                        <div class="form-submit">
                            <button class="btn" id="submit-application-btn">Submit Application</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to DOM
    document.body.appendChild(modal);
    
    // Show modal
    setTimeout(() => {
        modal.style.display = 'block';
    }, 0);
    
    // Close modal button event
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', function() {
        closeModal(modal);
    });
    
    // Show application form button event
    const showFormBtn = modal.querySelector('#show-application-form-btn');
    showFormBtn.addEventListener('click', function() {
        const applicationForm = modal.querySelector('#application-form');
        applicationForm.style.display = 'block';
        this.style.display = 'none';
    });
    
    // File input change event
    const resumeInput = modal.querySelector('#resume');
    const resumeName = modal.querySelector('#resume-name');
    
    resumeInput.addEventListener('change', function() {
        if (this.files.length > 0) {
            resumeName.textContent = this.files[0].name;
        } else {
            resumeName.textContent = 'No file selected';
        }
    });
    
    // Submit application button event
    const submitBtn = modal.querySelector('#submit-application-btn');
    submitBtn.addEventListener('click', function() {
        const fullName = modal.querySelector('#full-name').value;
        const email = modal.querySelector('#email').value;
        const terms = modal.querySelector('#terms').checked;
        
        // Simple validation
        if (!fullName || !email || !terms) {
            alert('Please fill in all required fields and accept the terms.');
            return;
        }
        
        // Simulate application submission
        this.textContent = 'Submitting...';
        this.disabled = true;
        
        setTimeout(() => {
            const applicationForm = modal.querySelector('#application-form');
            applicationForm.innerHTML = `
                <div style="text-align: center; padding: 30px;">
                    <h2 style="color: var(--primary); margin-bottom: 20px;">Application Submitted!</h2>
                    <p>Thank you for your application. We'll review it and get back to you soon.</p>
                </div>
            `;
        }, 1500);
    });
}

// Open login modal
function openLoginModal() {
    // Create modal element
    const modal = document.createElement('div');
    modal.className = 'modal login-modal';
    modal.id = 'login-modal';
    
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">Account Access</h2>
                <span class="close-modal">&times;</span>
            </div>
            <div class="auth-form-container">
                <div class="auth-form-tabs">
                    <div class="auth-form-tab active" data-target="login-form">Login</div>
                    <div class="auth-form-tab" data-target="register-form">Register</div>
                </div>
                
                <div class="auth-form-content active" id="login-form">
                    <div class="form-group">
                        <label for="login-email">Email</label>
                        <input type="email" id="login-email" class="form-control" placeholder="Enter your email">
                    </div>
                    
                    <div class="form-group">
                        <label for="login-password">Password</label>
                        <input type="password" id="login-password" class="form-control" placeholder="Enter your password">
                    </div>
                    
                    <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
                        <div class="form-check">
                            <input type="checkbox" id="remember-me" class="form-check-input">
                            <label for="remember-me">Remember me</label>
                        </div>
                        <a href="#" style="color: var(--primary);">Forgot password?</a>
                    </div>
                    
                    <button class="btn" style="width: 100%;">Login</button>
                </div>
                
                <div class="auth-form-content" id="register-form">
                    <div class="form-group">
                        <label for="register-name">Full Name</label>
                        <input type="text" id="register-name" class="form-control" placeholder="Enter your full name">
                    </div>
                    
                    <div class="form-group">
                        <label for="register-email">Email</label>
                        <input type="email" id="register-email" class="form-control" placeholder="Enter your email">
                    </div>
                    
                    <div class="form-group">
                        <label for="register-password">Password</label>
                        <input type="password" id="register-password" class="form-control" placeholder="Create a password">
                    </div>
                    
                    <div class="form-group">
                        <label for="register-confirm-password">Confirm Password</label>
                        <input type="password" id="register-confirm-password" class="form-control" placeholder="Confirm your password">
                    </div>
                    
                    <div class="form-check" style="margin-bottom: 20px;">
                        <input type="checkbox" id="terms-conditions" class="form-check-input">
                        <label for="terms-conditions">I agree to the <a href="#">terms and conditions</a>.</label>
                    </div>
                    
                    <button class="btn" style="width: 100%;">Create Account</button>
                </div>
                
                <div class="auth-form-footer">
                    <p>Or continue with</p>
                    <div class="social-auth-buttons">
                        <div class="social-auth-btn google-btn">Google</div>
                        <div class="social-auth-btn linkedin-btn">LinkedIn</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to DOM
    document.body.appendChild(modal);
    
    // Show modal
    setTimeout(() => {
        modal.style.display = 'block';
    }, 0);
    
    // Close modal button event
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', function() {
        closeModal(modal);
    });
    
    // Tab switching
    const tabs = modal.querySelectorAll('.auth-form-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const target = this.dataset.target;
            
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            modal.querySelectorAll('.auth-form-content').forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });
}

// Close a specific modal
function closeModal(modal) {
    modal.style.display = 'none';
    
    // Remove modal from DOM after animation
    setTimeout(() => {
        if (modal.parentNode) {
            modal.parentNode.removeChild(modal);
        }
    }, 300);
}

// Close all modals
function closeAllModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        closeModal(modal);
    });
}

// Add companies to the page
function displayCompanies() {
    const companiesContainer = document.createElement('div');
    companiesContainer.className = 'companies-grid';
    
    companies.forEach(company => {
        const companyCard = document.createElement('div');
        companyCard.className = 'company-card';
        
        companyCard.innerHTML = `
            <div class="company-banner"></div>
            <div class="company-info">
                <div class="company-info-logo">${company.initials}</div>
                <div class="company-info-content">
                    <h3>${company.name}</h3>
                    <div class="company-location">📍 ${company.location}</div>
                    <div class="open-positions">${company.openPositions} open positions</div>
                </div>
            </div>
        `;
        
        companiesContainer.appendChild(companyCard);
    });
    
    // Find companies section or create one if it doesn't exist
    let companiesSection = document.querySelector('.companies .container');
    if (companiesSection) {
        companiesSection.innerHTML = '';
        companiesSection.appendChild(companiesContainer);
    }
}

// Call this function if you have a companies section in your HTML
// displayCompanies();