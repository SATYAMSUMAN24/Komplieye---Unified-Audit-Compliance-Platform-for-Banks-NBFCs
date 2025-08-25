// Interactive Button Functions for Komplieye Website

// Demo Request Function - Enhanced for responsiveness
function requestDemo(event, serviceName) {
    event.preventDefault();

    // Show loading animation
    const btn = event.target;
    const originalText = btn.innerHTML;

    // Check if on mobile
    const isMobile = window.innerWidth <= 768;
    const loadingText = isMobile ? '<i class="fas fa-spinner fa-spin"></i>' : '<i class="fas fa-spinner fa-spin me-2"></i>Processing...';

    btn.innerHTML = loadingText;
    btn.disabled = true;

    // Simulate API call
    setTimeout(() => {
        const successText = isMobile ? '<i class="fas fa-check"></i>' : '<i class="fas fa-check me-2"></i>Request Sent!';
        btn.innerHTML = successText;
        btn.classList.remove('btn-outline-primary');
        btn.classList.add('btn-success');

        // Show success message
        showNotification(`Demo request for "${serviceName}" has been submitted successfully! Our team will contact you within 24 hours.`, 'success');

        // Redirect to contact page after delay
        setTimeout(() => {
            window.location.href = 'contact.html';
        }, 2000);
    }, 1500);
}

// Talk to Sales Function
function talkToSales(event) {
    event.preventDefault();

    const btn = event.target;
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-phone fa-spin me-2"></i>Connecting...';
    btn.disabled = true;

    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check me-2"></i>Connected!';
        btn.classList.remove('btn-outline-primary');
        btn.classList.add('btn-success');

        showNotification('Redirecting to our sales contact form. You can also call us at +91-9876543210 or email sanjay.yadav@kalolytic.com', 'info');

        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
            btn.classList.remove('btn-success');
            btn.classList.add('btn-outline-primary');
            window.location.href = 'contact.html';
        }, 2000);
    }, 1000);
}

// Service Click Handler
function handleServiceClick(event, serviceType) {
    event.preventDefault();

    const btn = event.target;
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-arrow-right fa-bounce me-2"></i>Loading...';

    setTimeout(() => {
        window.location.href = `service.html#${serviceType}`;
    }, 500);
}

// Read More Function
function readMore(event, contentId) {
    event.preventDefault();

    const btn = event.target;
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-book-open me-2"></i>Opening...';
    btn.disabled = true;

    setTimeout(() => {
        // Show detailed content
        const contentElement = document.getElementById(contentId);
        if (contentElement) {
            contentElement.style.display = 'block';
            contentElement.scrollIntoView({ behavior: 'smooth' });
        }

        btn.innerHTML = '<i class="fas fa-check me-2"></i>Opened!';
        btn.classList.add('btn-success');

        setTimeout(() => {
            btn.innerHTML = 'Read Less';
            btn.disabled = false;
            btn.onclick = function() { readLess(event, contentId); };
        }, 1000);
    }, 800);
}

// Read Less Function
function readLess(event, contentId) {
    event.preventDefault();

    const btn = event.target;
    const contentElement = document.getElementById(contentId);
    if (contentElement) {
        contentElement.style.display = 'none';
    }

    btn.innerHTML = 'Read More';
    btn.classList.remove('btn-success');
    btn.onclick = function() { readMore(event, contentId); };
}

// CTA Click Handler
function handleCTAClick(event, action) {
    event.preventDefault();

    const btn = event.target;
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-rocket me-2"></i>Launching...';

    setTimeout(() => {
        if (action === 'explore-solutions') {
            window.location.href = 'service.html';
        }
    }, 800);
}

// Notification Function
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; max-width: 400px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);';

    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'info' ? 'fa-info-circle' : 'fa-exclamation-triangle'} me-2"></i>
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

    document.body.appendChild(notification);

    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification && notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// FAQ Toggle Function
function toggleFAQ(event, faqId) {
    event.preventDefault();

    const btn = event.target;
    const faqContent = document.getElementById(faqId);

    if (faqContent.style.display === 'none' || !faqContent.style.display) {
        faqContent.style.display = 'block';
        btn.innerHTML = '<i class="fas fa-minus me-2"></i>Show Less';
        faqContent.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
        faqContent.style.display = 'none';
        btn.innerHTML = '<i class="fas fa-plus me-2"></i>Show More';
    }
}

// Initialize interactive elements when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'transform 0.3s ease';
        });

        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add loading animation to service cards
    const serviceCards = document.querySelectorAll('.service-item');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
            this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });
});
// Interactive Button Functionality for Komplieye Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all button interactions
    initializeAnalysisButtons();
    initializeDemoButtons();
    initializeSalesButtons();
    initializeFeatureButtons();
    initializeResourceButtons();
    initializeBlogButtons();
    initializeUseCaseButtons();
    initializeCaseStudyButtons();
    makeButtonsResponsive();

    // Service Button Interactions
    const serviceButtons = document.querySelectorAll('.service-btn, .analysis-btn');
    const demoButtons = document.querySelectorAll('.demo-btn');
    const salesButtons = document.querySelectorAll('.sales-btn');

    // Handle Service Button Clicks with Detailed Analysis
    serviceButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const serviceName = this.closest('.service-item, .feature-card, .resource-card')?.querySelector('h4, h5')?.textContent || 'Service';
            const serviceDescription = this.closest('.service-item, .feature-card, .resource-card')?.querySelector('p')?.textContent || '';
            showDetailedAnalysisModal(serviceName, serviceDescription, 'service');
        });
    });

    // Handle Demo Request Buttons
    demoButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== 'contact.html') {
                e.preventDefault();
                showDemoModal();
            }
        });
    });

    // Handle Talk to Sales Buttons
    salesButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== 'contact.html') {
                e.preventDefault();
                showSalesModal();
            }
        });
    });

    // Service Modal Function
    function showServiceModal(serviceName) {
        const modal = document.createElement('div');
        modal.className = 'modal fade show';
        modal.style.display = 'block';
        modal.style.backgroundColor = 'rgba(0,0,0,0.5)';

        modal.innerHTML = `
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header bg-primary text-white">
                        <h5 class="modal-title">
                            <i class="fas fa-info-circle me-2"></i>${serviceName}
                        </h5>
                        <button type="button" class="btn-close btn-close-white" onclick="this.closest('.modal').remove()"></button>
                    </div>
                    <div class="modal-body">
                        <div class="text-center mb-4">
                            <div class="spinner-border text-primary mb-3" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            <p class="text-muted">Loading detailed information about ${serviceName}...</p>
                        </div>

                        <div class="service-details" style="display: none;">
                            <div class="row">
                                <div class="col-md-6">
                                    <h6 class="text-primary mb-3">Key Benefits</h6>
                                    <ul class="list-unstyled">
                                        <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Automated workflows</li>
                                        <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Real-time monitoring</li>
                                        <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Compliance reporting</li>
                                        <li class="mb-2"><i class="fas fa-check text-success me-2"></i>Risk assessment</li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <h6 class="text-primary mb-3">Implementation</h6>
                                    <p class="text-muted mb-3">Quick deployment with minimal disruption to existing operations.</p>
                                    <div class="d-grid gap-2">
                                        <a href="contact.html" class="btn btn-primary">Request Demo</a>
                                        <a href="service.html" class="btn btn-outline-primary">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Simulate loading
        setTimeout(() => {
            modal.querySelector('.spinner-border').parentElement.style.display = 'none';
            modal.querySelector('.service-details').style.display = 'block';
        }, 1500);
    }

    // Demo Modal Function
    function showDemoModal() {
        const modal = document.createElement('div');
        modal.className = 'modal fade show';
        modal.style.display = 'block';
        modal.style.backgroundColor = 'rgba(0,0,0,0.5)';

        modal.innerHTML = `
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header bg-success text-white">
                        <h5 class="modal-title">
                            <i class="fas fa-calendar-check me-2"></i>Schedule Your Demo
                        </h5>
                        <button type="button" class="btn-close btn-close-white" onclick="this.closest('.modal').remove()"></button>
                    </div>
                    <div class="modal-body text-center">
                        <div class="mb-4">
                            <i class="fas fa-laptop-code fa-4x text-success mb-3"></i>
                            <h6>Experience Komplieye Live</h6>
                            <p class="text-muted">See how our platform can transform your audit and compliance processes.</p>
                        </div>

                        <div class="row g-3">
                            <div class="col-6">
                                <div class="border rounded p-3">
                                    <i class="fas fa-clock text-primary"></i>
                                    <small class="d-block">30-45 minutes</small>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="border rounded p-3">
                                    <i class="fas fa-users text-primary"></i>
                                    <small class="d-block">Personalized</small>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="border rounded p-3">
                                    <i class="fas fa-video text-primary"></i>
                                    <small class="d-block">Online Demo</small>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="border rounded p-3">
                                    <i class="fas fa-gift text-primary"></i>
                                    <small class="d-block">Free of Cost</small>
                                </div>
                            </div>
                        </div>

                        <div class="mt-4 d-grid gap-2">
                            <a href="contact.html" class="btn btn-success">Schedule Demo Now</a>
                            <button class="btn btn-outline-secondary" onclick="this.closest('.modal').remove()">Maybe Later</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
    }

    // Sales Modal Function
    function showSalesModal() {
        const modal = document.createElement('div');
        modal.className = 'modal fade show';
        modal.style.display = 'block';
        modal.style.backgroundColor = 'rgba(0,0,0,0.5)';

        modal.innerHTML = `
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header bg-primary text-white">
                        <h5 class="modal-title">
                            <i class="fas fa-handshake me-2"></i>Talk to Our Sales Team
                        </h5>
                        <button type="button" class="btn-close btn-close-white" onclick="this.closest('.modal').remove()"></button>
                    </div>
                    <div class="modal-body">
                        <div class="text-center mb-4">
                            <i class="fas fa-user-tie fa-4x text-primary mb-3"></i>
                            <h6>Connect with Compliance Experts</h6>
                            <p class="text-muted">Our team will understand your requirements and provide a tailored solution.</p>
                        </div>

                        <div class="alert alert-info">
                            <h6 class="alert-heading">
                                <i class="fas fa-star me-2"></i>Direct Expert Contact
                            </h6>
                            <p class="mb-2">For immediate assistance, contact our compliance solution expert:</p>
                            <p class="mb-0">
                                <strong>Sanjay Yadav</strong><br>
                                <a href="mailto:sanjay.yadav@kalolytic.com" class="text-decoration-none">
                                    <i class="fas fa-envelope me-1"></i>sanjay.yadav@kalolytic.com
                                </a>
                            </p>
                        </div>

                        <div class="d-grid gap-2">
                            <a href="contact.html" class="btn btn-primary">Contact Sales Team</a>
                            <a href="mailto:sanjay.yadav@kalolytic.com" class="btn btn-outline-primary">Email Expert Directly</a>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
    }

    // Add responsive behavior for mobile devices
    function makeButtonsResponsive() {
        const buttons = document.querySelectorAll('.btn-group-responsive');

        buttons.forEach(group => {
            if (window.innerWidth < 768) {
                group.classList.add('d-flex', 'flex-column');
                group.classList.remove('d-md-flex', 'flex-md-row');
            } else {
                group.classList.add('d-md-flex', 'flex-md-row');
                group.classList.remove('d-flex', 'flex-column');
            }
        });
    }

    // Call on load and resize
    makeButtonsResponsive();
    window.addEventListener('resize', makeButtonsResponsive);

    // Initialize solution page specific buttons
    initializeSolutionButtons();
});

// Initialize demo buttons
function initializeDemoButtons() {
    // Demo button functionality is already implemented above
}

// Initialize sales buttons
function initializeSalesButtons() {
    // Sales button functionality is already implemented above
}

// Initialize solution-specific buttons
function initializeSolutionButtons() {
    const solutionButtons = document.querySelectorAll('.solution-btn, .explore-btn, .learn-more-btn, .explore-kyc-btn, .explore-ai-btn, .explore-more-btn');

    solutionButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            const solutionType = this.dataset.solution || this.getAttribute('data-solution');
            const buttonText = this.textContent.trim().toLowerCase();

            // Handle specific button types
            if (buttonText.includes('explore kyc') || buttonText.includes('kyc')) {
                showSolutionDetailModal('kyc-solution', 'KYC Solution');
            } else if (buttonText.includes('explore ai') || buttonText.includes('ai assistant')) {
                showSolutionDetailModal('fincrime-os', 'FinCrime OS & Agentic AI');
            } else if (buttonText.includes('explore more') || buttonText.includes('learn more')) {
                const solutionName = this.closest('.solution-card, .service-item')?.querySelector('h5, h4')?.textContent || 'Solution';
                showSolutionDetailModal('general', solutionName);
            } else if (solutionType) {
                // Navigate to specific solution page
                if (solutionType === 'fincrime-os') {
                    window.location.href = 'fincrime-os.html';
                } else if (solutionType === 'kyc-solution') {
                    window.location.href = 'kyc-solution.html';
                } else if (solutionType === 'clm-platform') {
                    window.location.href = 'clm-platform.html';
                } else if (solutionType === 'transaction-monitoring') {
                    window.location.href = 'transaction-monitoring.html';
                } else if (solutionType === 'client-onboarding') {
                    window.location.href = 'client-onboarding.html';
                } else if (solutionType === 'regulatory-compliance') {
                    window.location.href = 'regulatory-compliance.html';
                } else {
                    // Show detailed modal for other solutions
                    showSolutionDetailModal(solutionType, buttonText);
                }
            } else {
                // Fallback to modal
                const solutionName = this.closest('.solution-card, .service-item')?.querySelector('h5, h4')?.textContent || 'Solution';
                showSolutionDetailModal('general', solutionName);
            }
        });
    });
}

// Solution detail modal function
function showSolutionDetailModal(solutionType, solutionName) {
    const solutionDetails = getSolutionDetails(solutionType);

    const modal = document.createElement('div');
    modal.className = 'modal fade solution-detail-modal';
    modal.innerHTML = `
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h5 class="modal-title">
                        <i class="fas fa-cogs me-2"></i>
                        ${solutionDetails.title}
                    </h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="row g-4">
                        <div class="col-lg-8">
                            <div class="solution-overview mb-4">
                                <img src="${solutionDetails.image}" class="img-fluid rounded mb-4" alt="${solutionDetails.title}">
                                <h4>${solutionDetails.title}</h4>
                                <p class="lead">${solutionDetails.description}</p>
                            </div>

                            <div class="solution-features">
                                <h5 class="mb-3">Key Features</h5>
                                <div class="row g-3">
                                    ${solutionDetails.features.map(feature => `
                                        <div class="col-md-6">
                                            <div class="feature-item d-flex align-items-start">
                                                <i class="fas fa-check-circle text-success me-3 mt-1"></i>
                                                <div>
                                                    <h6 class="mb-1">${feature.title}</h6>
                                                    <small class="text-muted">${feature.description}</small>
                                                </div>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>

                            <div class="solution-benefits mt-4">
                                <h5 class="mb-3">Business Benefits</h5>
                                <ul class="list-unstyled">
                                    ${solutionDetails.benefits.map(benefit => `
                                        <li class="mb-2">
                                            <i class="fas fa-arrow-right text-primary me-2"></i>
                                            ${benefit}
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="card border-0 shadow-sm">
                                <div class="card-body">
                                    <h6 class="card-title">Get Started</h6>
                                    <div class="d-grid gap-2">
                                        <button class="btn btn-primary" onclick="window.open('contact.html', '_blank')">
                                            <i class="fas fa-calendar me-2"></i>Schedule Demo
                                        </button>
                                        <button class="btn btn-outline-primary" onclick="window.open('contact.html', '_blank')">
                                            <i class="fas fa-download me-2"></i>Download Brochure
                                        </button>
                                        <button class="btn btn-outline-secondary" onclick="window.open('contact.html', '_blank')">
                                            <i class="fas fa-phone me-2"></i>Talk to Expert
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="implementation-info mt-4">
                                <h6>Implementation Timeline</h6>
                                <div class="timeline-simple">
                                    <div class="timeline-item mb-3">
                                        <small class="text-muted">Week 1-2</small>
                                        <div class="fw-semibold">Assessment & Planning</div>
                                    </div>
                                    <div class="timeline-item mb-3">
                                        <small class="text-muted">Week 3-4</small>
                                        <div class="fw-semibold">Setup & Configuration</div>
                                    </div>
                                    <div class="timeline-item">
                                        <small class="text-muted">Week 5-6</small>
                                        <div class="fw-semibold">Training & Go-Live</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onclick="window.open('contact.html', '_blank')">
                        <i class="fas fa-envelope me-2"></i>Contact Sales
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    const bsModal = new bootstrap.Modal(modal);
    bsModal.show();

    modal.addEventListener('hidden.bs.modal', () => {
        document.body.removeChild(modal);
    });
}

// Get solution details based on type
function getSolutionDetails(solutionType) {
    const solutions = {
        'salesforce-integration': {
            title: 'CLM for Core Banking Integration',
            description: 'Seamless integration with existing core banking systems and enterprise applications.',
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300&q=80',
            features: [
                { title: 'API Integration', description: 'RESTful APIs for seamless connectivity' },
                { title: 'Real-time Sync', description: 'Live data synchronization' },
                { title: 'Custom Workflows', description: 'Tailored integration workflows' },
                { title: 'Data Mapping', description: 'Intelligent data transformation' }
            ],
            benefits: [
                'Reduced manual data entry by 90%',
                'Real-time compliance monitoring',
                'Improved data accuracy and consistency',
                'Faster audit cycle completion'
            ]
        },
        'document-processing': {
            title: 'Intelligent Document Processing',
            description: 'AI-powered document analysis with OCR and NLP for automated data extraction.',
            image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300&q=80',
            features: [
                { title: 'OCR Technology', description: 'Advanced optical character recognition' },
                { title: 'NLP Processing', description: 'Natural language understanding' },
                { title: 'Smart Classification', description: 'Automatic document categorization' },
                { title: 'Data Validation', description: 'Intelligent accuracy checking' }
            ],
            benefits: [
                'Process documents 10x faster',
                '99%+ accuracy in data extraction',
                'Eliminate manual document review',
                'Instant compliance verification'
            ]
        },
        'integration-hub': {
            title: 'Integration Hub & Workflows',
            description: 'Comprehensive integration platform with automated workflows and data synchronization.',
            image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300&q=80',
            features: [
                { title: 'Workflow Automation', description: 'Drag-and-drop workflow builder' },
                { title: 'Multi-system Integration', description: 'Connect disparate systems' },
                { title: 'Event-driven Processing', description: 'Real-time event handling' },
                { title: 'Monitoring Dashboard', description: 'Complete visibility and control' }
            ],
            benefits: [
                'Automate 80% of routine tasks',
                'Reduce integration time by 70%',
                'Improve system reliability',
                'Lower operational costs'
            ]
        },
        'general': {
            title: 'Comprehensive Solution',
            description: 'Advanced compliance and audit management solution tailored for financial institutions.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300&q=80',
            features: [
                { title: 'Automated Workflows', description: 'Streamlined audit processes' },
                { title: 'Real-time Monitoring', description: 'Continuous compliance tracking' },
                { title: 'Advanced Analytics', description: 'Data-driven insights' },
                { title: 'Regulatory Updates', description: 'Automatic compliance updates' }
            ],
            benefits: [
                'Improve audit efficiency by 75%',
                'Reduce compliance risks',
                'Enhance regulatory reporting',
                'Streamline operations'
            ]
        }
    };

    return solutions[solutionType] || solutions['general'];

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize analysis buttons for all sections
function initializeAnalysisButtons() {
    const analysisButtons = document.querySelectorAll('.analysis-btn, .detail-btn, .learn-more-btn');
    analysisButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const context = this.dataset.context || 'general';
            const title = this.dataset.title || 'Analysis';
            const description = this.dataset.description || '';
            showDetailedAnalysisModal(title, description, context);
        });
    });
}

function initializeFeatureButtons() {
    const featureButtons = document.querySelectorAll('.feature-btn, .feature-detail-btn');
    featureButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const featureName = this.closest('.feature-item, .feature-card')?.querySelector('h4, h5')?.textContent || 'Feature';
            const featureDescription = this.closest('.feature-item, .feature-card')?.querySelector('p')?.textContent || '';
            showDetailedAnalysisModal(featureName, featureDescription, 'feature');
        });
    });
}

function initializeResourceButtons() {
    const resourceButtons = document.querySelectorAll('.resource-btn, .resource-detail-btn');
    resourceButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const resourceName = this.closest('.resource-card, .resource-item')?.querySelector('h4, h5')?.textContent || 'Resource';
            const resourceDescription = this.closest('.resource-card, .resource-item')?.querySelector('p')?.textContent || '';
            showDetailedAnalysisModal(resourceName, resourceDescription, 'resource');
        });
    });
}

function initializeBlogButtons() {
    const blogButtons = document.querySelectorAll('.blog-btn, .blog-detail-btn');
    blogButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const blogTitle = this.closest('.blog-card, .blog-item')?.querySelector('h4, h5')?.textContent || 'Blog Post';
            const blogDescription = this.closest('.blog-card, .blog-item')?.querySelector('p')?.textContent || '';
            showDetailedAnalysisModal(blogTitle, blogDescription, 'blog');
        });
    });
}

function initializeUseCaseButtons() {
    const useCaseButtons = document.querySelectorAll('.usecase-btn, .usecase-detail-btn');
    useCaseButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const useCaseTitle = this.closest('.usecase-card, .usecase-item')?.querySelector('h4, h5')?.textContent || 'Use Case';
            const useCaseDescription = this.closest('.usecase-card, .usecase-item')?.querySelector('p')?.textContent || '';
            showDetailedAnalysisModal(useCaseTitle, useCaseDescription, 'usecase');
        });
    });
}

function initializeCaseStudyButtons() {
    const caseStudyButtons = document.querySelectorAll('.casestudy-btn, .casestudy-detail-btn');
    caseStudyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const studyTitle = this.closest('.case-study-card, .case-study-item')?.querySelector('h4, h5')?.textContent || 'Case Study';
            const studyDescription = this.closest('.case-study-card, .case-study-item')?.querySelector('p')?.textContent || '';
            showDetailedAnalysisModal(studyTitle, studyDescription, 'casestudy');
        });
    });
}

// Enhanced detailed analysis modal function
function showDetailedAnalysisModal(title, description, context) {
    const analysisContent = generateAnalysisContent(title, description, context);

    const modal = document.createElement('div');
    modal.className = 'modal fade detailed-analysis-modal';
    modal.innerHTML = `
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h5 class="modal-title">
                        <i class="fas fa-chart-line me-2"></i>
                        Detailed Analysis: ${title}
                    </h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    ${analysisContent}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onclick="window.open('contact.html', '_blank')">
                        <i class="fas fa-calendar me-2"></i>Schedule Demo
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    const bsModal = new bootstrap.Modal(modal);
    bsModal.show();

    modal.addEventListener('hidden.bs.modal', () => {
        document.body.removeChild(modal);
    });
}

function generateAnalysisContent(title, description, context) {
    const contextData = {
        service: {
            icon: 'fas fa-cogs',
            benefits: ['Automated workflow', 'Real-time monitoring', 'Compliance tracking', 'Risk assessment'],
            features: ['AI-powered analytics', 'Custom dashboards', 'Integration capabilities', 'Audit trails']
        },
        feature: {
            icon: 'fas fa-star',
            benefits: ['Enhanced productivity', 'Streamlined processes', 'Better accuracy', 'Time savings'],
            features: ['User-friendly interface', 'Advanced algorithms', 'Scalable architecture', 'Security protocols']
        },
        resource: {
            icon: 'fas fa-book',
            benefits: ['Knowledge enhancement', 'Best practices', 'Industry insights', 'Expert guidance'],
            features: ['Comprehensive content', 'Regular updates', 'Practical examples', 'Expert analysis']
        },
        blog: {
            icon: 'fas fa-pencil-alt',
            benefits: ['Industry updates', 'Thought leadership', 'Practical insights', 'Expert opinions'],
            features: ['Regular content', 'Expert authors', 'Case studies', 'Actionable advice']
        },
        usecase: {
            icon: 'fas fa-lightbulb',
            benefits: ['Real-world applications', 'Proven solutions', 'Implementation guidance', 'Success metrics'],
            features: ['Step-by-step process', 'Measurable outcomes', 'Best practices', 'Lessons learned']
        },
        casestudy: {
            icon: 'fas fa-chart-bar',
            benefits: ['Proven results', 'ROI demonstration', 'Implementation success', 'Client satisfaction'],
            features: ['Detailed metrics', 'Before/after analysis', 'Implementation timeline', 'Success factors']
        }
    };

    const data = contextData[context] || contextData.service;

    return `
        <div class="row g-4">
            <div class="col-lg-8">
                <div class="analysis-overview">
                    <div class="d-flex align-items-center mb-4">
                        <div class="analysis-icon bg-primary text-white rounded-circle me-3 d-flex align-items-center justify-content-center" style="width: 60px; height: 60px;">
                            <i class="${data.icon} fa-2x"></i>
                        </div>
                        <div>
                            <h4 class="mb-1">${title}</h4>
                            <p class="text-muted mb-0">${description}</p>
                        </div>
                    </div>

                    <div class="analysis-tabs">
                        <ul class="nav nav-pills mb-4" role="tablist">
                            <li class="nav-item">
                                <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#overview-tab">Overview</button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" data-bs-toggle="pill" data-bs-target="#benefits-tab">Key Benefits</button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" data-bs-toggle="pill" data-bs-target="#features-tab">Features</button>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link" data-bs-toggle="pill" data-bs-target="#implementation-tab">Implementation</button>
                            </li>
                        </ul>

                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="overview-tab">
                                <div class="overview-content">
                                    <h5>Comprehensive Analysis</h5>
                                    <p>${description}</p>
                                    <div class="row g-3">
                                        <div class="col-md-6">
                                            <div class="stat-card bg-light p-3 rounded">
                                                <h6 class="text-primary mb-1">Efficiency Gain</h6>
                                                <h4 class="mb-0">75%</h4>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="stat-card bg-light p-3 rounded">
                                                <h6 class="text-success mb-1">Time Saved</h6>
                                                <h4 class="mb-0">40hrs/week</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="benefits-tab">
                                <h5>Key Benefits</h5>
                                <div class="benefits-list">
                                    ${data.benefits.map(benefit => `
                                        <div class="benefit-item d-flex align-items-center mb-3">
                                            <i class="fas fa-check-circle text-success me-3"></i>
                                            <span>${benefit}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>

                            <div class="tab-pane fade" id="features-tab">
                                <h5>Core Features</h5>
                                <div class="features-grid row g-3">
                                    ${data.features.map(feature => `
                                        <div class="col-md-6">
                                            <div class="feature-card bg-light p-3 rounded">
                                                <i class="fas fa-star text-warning me-2"></i>
                                                ${feature}
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>

                            <div class="tab-pane fade" id="implementation-tab">
                                <h5>Implementation Timeline</h5>
                                <div class="timeline">
                                    <div class="timeline-item">
                                        <div class="timeline-marker bg-primary"></div>
                                        <div class="timeline-content">
                                            <h6>Week 1-2: Assessment & Planning</h6>
                                            <p>Initial consultation and requirement analysis</p>
                                        </div>
                                    </div>
                                    <div class="timeline-item">
                                        <div class="timeline-marker bg-warning"></div>
                                        <div class="timeline-content">
                                            <h6>Week 3-4: Setup & Configuration</h6>
                                            <p>System setup and initial configuration</p>
                                        </div>
                                    </div>
                                    <div class="timeline-item">
                                        <div class="timeline-marker bg-success"></div>
                                        <div class="timeline-content">
                                            <h6>Week 5-6: Training & Go-Live</h6>
                                            <p>User training and system deployment</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="analysis-sidebar">
                    <div class="card border-0 shadow-sm mb-4">
                        <div class="card-body">
                            <h6 class="card-title">Quick Actions</h6>
                            <div class="d-grid gap-2">
                                <button class="btn btn-primary btn-sm" onclick="window.open('contact.html', '_blank')">
                                    <i class="fas fa-calendar me-2"></i>Schedule Demo
                                </button>
                                <button class="btn btn-outline-primary btn-sm" onclick="window.open('contact.html', '_blank')">
                                    <i class="fas fa-download me-2"></i>Download Brochure
                                </button>
                                <button class="btn btn-outline-secondary btn-sm" onclick="window.open('contact.html', '_blank')">
                                    <i class="fas fa-phone me-2"></i>Talk to Expert
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="card border-0 shadow-sm">
                        <div class="card-body">
                            <h6 class="card-title">Related Resources</h6>
                            <div class="related-resources">
                                <div class="resource-item mb-3">
                                    <a href="case-studies.html" class="text-decoration-none">
                                        <i class="fas fa-chart-bar text-primary me-2"></i>
                                        Case Studies
                                    </a>
                                </div>
                                <div class="resource-item mb-3">
                                    <a href="use-cases.html" class="text-decoration-none">
                                        <i class="fas fa-lightbulb text-warning me-2"></i>
                                        Use Cases
                                    </a>
                                </div>
                                <div class="resource-item">
                                    <a href="blog.html" class="text-decoration-none">
                                        <i class="fas fa-book text-info me-2"></i>
                                        Expert Insights
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Global functions for onclick handlers
function handleServiceClick(event, serviceName) {
    event.preventDefault();
    console.log(`Learn more clicked for: ${serviceName}`);
    // Additional logic can be added here
}

function requestDemo(event, serviceName) {
    event.preventDefault();
    console.log(`Demo requested for: ${serviceName}`);
    // Additional logic can be added here
}

function talkToSales(event) {
    event.preventDefault();
    console.log('Talk to sales clicked');
    // Additional logic can be added here
}

// Demo request functionality
document.addEventListener('DOMContentLoaded', function() {
    // Ensure all navigation links work properly
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if link has valid href
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                console.log(`Navigating to: ${href}`);
            }
        });
    });

    // Handle feature toggle functions
    window.toggleFeatureDetails = function(sectionId, button) {
        const section = document.getElementById(sectionId);
        if (section) {
            if (section.classList.contains('d-none')) {
                section.classList.remove('d-none');
                section.classList.add('d-block');
                button.textContent = 'Hide Details';
                button.classList.remove('btn-primary');
                button.classList.add('btn-secondary');
            } else {
                section.classList.remove('d-block');
                section.classList.add('d-none');
                button.textContent = 'View Details';
                button.classList.remove('btn-secondary');
                button.classList.add('btn-primary');
            }
        }
    };
});
function requestDemo(event, demoType) {
    event.preventDefault();

    // Create modal content
    const modalContent = `
        <div class="modal fade" id="demoModal" tabindex="-1" aria-labelledby="demoModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header bg-primary text-white">
                        <h5 class="modal-title" id="demoModalLabel">Request Demo - ${demoType}</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="alert alert-info">
                            <i class="fas fa-info-circle me-2"></i>
                            Thank you for your interest in ${demoType}! Our team will contact you within 24 hours to schedule a personalized demonstration.
                        </div>
                        <form>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="fullName" class="form-label">Full Name *</label>
                                    <input type="text" class="form-control" id="fullName" required>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="email" class="form-label">Email Address *</label>
                                    <input type="email" class="form-control" id="email" required>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="phone" class="form-label">Phone Number *</label>
                                    <input type="tel" class="form-control" id="phone" required>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="organization" class="form-label">Organization *</label>
                                    <input type="text" class="form-control" id="organization" required>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="organizationType" class="form-label">Organization Type *</label>
                                <select class="form-select" id="organizationType" required>
                                    <option value="">Select...</option>
                                    <option value="bank">Bank</option>
                                    <option value="nbfc">NBFC</option>
                                    <option value="cooperative">Cooperative Bank</option>
                                    <option value="other">Other Financial Institution</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="requirements" class="form-label">Specific Requirements</label>
                                <textarea class="form-control" id="requirements" rows="3" placeholder="Tell us about your specific audit and compliance requirements..."></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" onclick="submitDemoRequest()">Request Demo</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Add modal to body if it doesn't exist
    if (!document.getElementById('demoModal')) {
        document.body.insertAdjacentHTML('beforeend', modalContent);
    }

    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('demoModal'));
    modal.show();

    console.log(`Demo requested for: ${demoType}`);
}

// Segment filtering functionality
function filterBySegment(segment) {
    console.log('Filtering by segment:', segment);

    // Remove active class from all segment cards
    document.querySelectorAll('.segment-card').forEach(card => {
        card.classList.remove('active');
    });

    // Add active class to clicked segment
    event.target.closest('.segment-card').classList.add('active');

    // Show segment-specific content (implement based on your needs)
    showSegmentContent(segment);
}

function showSegmentContent(segment) {
    // This function would show/hide content based on selected segment
    // Implementation depends on your specific content structure

    const contentMapping = {
        'banking': {
            title: 'Banking Solutions',
            description: 'Comprehensive audit and compliance solutions for commercial, retail, and private banks.',
            solutions: ['Corporate Banking', 'Retail Banking', 'Private Banking', 'Commercial Banking']
        },
        'nbfc': {
            title: 'NBFC Solutions',
            description: 'Specialized compliance management for Non-Banking Financial Companies.',
            solutions: ['Loan Management', 'Asset Finance', 'Investment Services', 'Micro Finance']
        },
        'fintech': {
            title: 'Fintech Solutions',
            description: 'Modern compliance solutions for payment companies and fintech startups.',
            solutions: ['Payment Processing', 'Digital Wallets', 'P2P Lending', 'Crypto Compliance']
        },
        'corporate': {
            title: 'Corporate Solutions',
            description: 'Enterprise-grade solutions for corporate and institutional banking.',
            solutions: ['Trade Finance', 'Treasury Management', 'Corporate Lending', 'Cash Management']
        }
    };

    // Update page content based on segment
    if (contentMapping[segment]) {
        // This is a placeholder - implement actual content switching logic
        console.log('Showing content for:', contentMapping[segment]);
    }
}

// Organization type filtering
function filterByOrgType(orgType) {
    console.log('Filtering by organization type:', orgType);

    // Update content based on organization type
    const solutions = document.querySelectorAll('.solution-card');
    solutions.forEach(solution => {
        // Show/hide solutions based on organization type
        // Implementation depends on your data structure
        solution.style.display = 'block'; // Show all for now
    });
}

// Add event listeners when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Organization type radio buttons
    const orgTypeButtons = document.querySelectorAll('input[name="orgType"]');
    orgTypeButtons.forEach(button => {
        button.addEventListener('change', function() {
            if (this.checked) {
                filterByOrgType(this.id);
            }
        });
    });

    // Case study filtering
    const caseFilterButtons = document.querySelectorAll('input[name="caseFilter"]');
    caseFilterButtons.forEach(button => {
        button.addEventListener('change', function() {
            if (this.checked) {
                filterCaseStudies(this.id);
            }
        });
    });
});

// Case study filtering functionality
function filterCaseStudies(filterType) {
    const caseStudies = document.querySelectorAll('.case-study-card');

    caseStudies.forEach(card => {
        const badge = card.querySelector('.badge');
        const badgeText = badge ? badge.textContent.toLowerCase() : '';

        switch(filterType) {
            case 'all-cases':
                card.parentElement.style.display = 'block';
                break;
            case 'banking-cases':
                card.parentElement.style.display = badgeText.includes('banking') ? 'block' : 'none';
                break;
            case 'nbfc-cases':
                card.parentElement.style.display = badgeText.includes('nbfc') ? 'block' : 'none';
                break;
            case 'compliance-cases':
                card.parentElement.style.display = badgeText.includes('compliance') ? 'block' : 'none';
                break;
            default:
                card.parentElement.style.display = 'block';
        }
    });
}