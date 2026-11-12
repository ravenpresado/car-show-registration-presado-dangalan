
import './App.css'

function App() {
  return (
    <div className="container-fluid bg-light min-vh-100 p-0">
      {/* Dashboard Header */}
      <nav className="navbar navbar-dark bg-dark px-4 py-3">
        <div>
          <span className="navbar-brand fw-bold fs-4">
            AutoVista Events
          </span>
          <div className="text-white-50 small">
            Car Show 2027 Registration Dashboard
          </div>
        </div>
        <span className="badge bg-primary fs-6">
          Admin Dashboard
        </span>
      </nav>

      {/* Main Content */}
      <main className="container py-4">
        <div className="mb-4">
          <h2 className="fw-bold">Registration Overview</h2>
          <p className="text-secondary">
            Manage and monitor Car Show 2027 registrations.
          </p>
        </div>

        {/* KPI Cards */}
        <div className="row g-3 mb-4">
          <div className="col-md-4 col-lg">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <p className="text-secondary mb-2">Total Registrations</p>
                <h3 className="fw-bold">125</h3>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-lg">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <p className="text-secondary mb-2">Collected Payments</p>
                <h3 className="fw-bold text-success">₱85,000</h3>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-lg">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <p className="text-secondary mb-2">Uncollected Payments</p>
                <h3 className="fw-bold text-danger">₱25,000</h3>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-lg">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <p className="text-secondary mb-2">Confirmed</p>
                <h3 className="fw-bold text-primary">95</h3>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-lg">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <p className="text-secondary mb-2">Checked-In</p>
                <h3 className="fw-bold text-info">60</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Table Placeholder */}
        <div className="card shadow-sm border-0">
          <div className="card-body">
            <h5 className="fw-bold mb-3">Recent Registrations</h5>
            <p className="text-secondary mb-0">
              Registration records will appear here.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
