// Modal System
// Handles account and help modals

class ModalSystem {
  constructor() {
    this.activeModal = null;
    this.init();
  }

  init() {
    this.createModals();
    this.bindEvents();
  }

  createModals() {
    // Create modal HTML and inject into page
    const modalHTML = `
      <!-- Account Modal -->
      <div class="modal-overlay" id="accountModalOverlay">
        <div class="modal" id="accountModal">
          <div class="modal-header">
            <h3 class="modal-title">Account</h3>
            <button class="modal-close" data-close-modal>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
          <div class="modal-body">
            <!-- Profile Section -->
            <div class="account-profile">
              <div class="account-avatar">JD</div>
              <h4 class="account-name">John Doe</h4>
              <p class="account-email">john@example.com</p>
            </div>

            <!-- Plan Section -->
            <div class="account-section">
              <h5 class="account-section-title">Plan</h5>
              <p class="account-section-value">MarketLens Pro</p>
            </div>

            <!-- Subscription Section -->
            <div class="account-section">
              <h5 class="account-section-title">Subscription</h5>
              <p class="account-section-value">Active</p>
              <p class="account-section-meta">Renews Jan 19, 2026</p>
              <button class="account-btn primary" style="margin-top: 12px;">Manage Billing</button>
            </div>

            <!-- API Connections Section -->
            <div class="account-section">
              <h5 class="account-section-title">API Connections</h5>
              <div class="api-connection">
                <span class="api-connection-name">Bloomberg</span>
                <span class="api-connection-status">Coming Soon</span>
              </div>
              <div class="api-connection">
                <span class="api-connection-name">Reuters</span>
                <span class="api-connection-status">Coming Soon</span>
              </div>
            </div>

            <!-- Account Actions -->
            <div class="account-section">
              <button class="account-btn">Change Password</button>
              <button class="account-btn danger">Delete Account</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Help Modal -->
      <div class="modal-overlay" id="helpModalOverlay">
        <div class="modal" id="helpModal" style="max-width: 500px;">
          <div class="modal-header">
            <h3 class="modal-title">Help</h3>
            <button class="modal-close" data-close-modal>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
          <div class="modal-body">
            <!-- Getting Started -->
            <div class="help-section">
              <h5 class="help-section-title">Getting Started</h5>
              <a class="help-link" href="#" onclick="return false;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
                Quick Start Guide
              </a>
              <a class="help-link" href="#" onclick="return false;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
                Your First Research Report
              </a>
              <a class="help-link" href="#" onclick="return false;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
                Setting Up Pulse
              </a>
            </div>

            <!-- Research Frameworks -->
            <div class="help-section">
              <h5 class="help-section-title">Research Frameworks</h5>
              <a class="help-link" href="#" onclick="return false;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
                Traditional Analysis
              </a>
              <a class="help-link" href="#" onclick="return false;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
                Ecosystem Mapping
              </a>
              <a class="help-link" href="#" onclick="return false;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
                Narrative Centric
              </a>
              <a class="help-link" href="#" onclick="return false;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
                Comparative Analysis
              </a>
              <a class="help-link" href="#" onclick="return false;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
                Scenario Modeling
              </a>
              <a class="help-link" href="#" onclick="return false;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
                Company Insights
              </a>
            </div>

            <!-- Support -->
            <div class="help-section">
              <h5 class="help-section-title">Support</h5>
              <a class="help-link" href="#" onclick="return false;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
                Contact Support
              </a>
              <a class="help-link" href="#" onclick="return false;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
                Report a Bug
              </a>
            </div>

            <!-- Data -->
            <div class="help-section">
              <h5 class="help-section-title">Data</h5>
              <a class="help-link" href="#" onclick="return false;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
                Export Research History
              </a>
              <a class="help-link" href="#" onclick="return false;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
                Download All Data
              </a>
            </div>
          </div>
        </div>
      </div>
    `;

    // Inject modals into body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
  }

  bindEvents() {
    // Header clicks
    const userBtn = document.getElementById('headerUser');
    const helpBtn = document.getElementById('headerHelp');
    const logoutBtn = document.getElementById('headerLogout');

    if (userBtn) {
      userBtn.addEventListener('click', () => this.openModal('account'));
    }

    if (helpBtn) {
      helpBtn.addEventListener('click', () => this.openModal('help'));
    }

    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => this.handleLogout());
    }

    // Close buttons
    document.querySelectorAll('[data-close-modal]').forEach(btn => {
      btn.addEventListener('click', () => this.closeModal());
    });

    // Click outside to close
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          this.closeModal();
        }
      });
    });

    // Escape key to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.activeModal) {
        this.closeModal();
      }
    });
  }

  openModal(type) {
    const overlayId = type === 'account' ? 'accountModalOverlay' : 'helpModalOverlay';
    const overlay = document.getElementById(overlayId);
    
    if (overlay) {
      overlay.classList.add('active');
      this.activeModal = type;
      document.body.style.overflow = 'hidden';
    }
  }

  closeModal() {
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.classList.remove('active');
    });
    this.activeModal = null;
    document.body.style.overflow = '';
  }

  handleLogout() {
    // For now, just show an alert
    // Later: clear session, redirect to login
    if (confirm('Are you sure you want to log out?')) {
      alert('Logout functionality will be connected to auth system');
      // window.location.href = '/login';
    }
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.modalSystem = new ModalSystem();
});
