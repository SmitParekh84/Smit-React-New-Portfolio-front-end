import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import SEO from "../components/SEO/SEO"
import "../assets/css/admin.css"

const AdminLoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  // Check if user is already authenticated
  useEffect(() => {
    const projectAuthToken = localStorage.getItem("projectAuthToken")
    if (projectAuthToken) {
      navigate("/admin/dashboard")
    }
  }, [navigate])

  const handleLogin = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/projecteditaccess`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Authentication failed")
      }

      localStorage.setItem("projectAuthToken", data.token)
      navigate("/project")
    } catch (err) {
      setError(err.message || "Failed to authenticate")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <SEO
        title="Admin Login | Smit Parekh Portfolio"
        description="Admin login page for Smit Parekh's portfolio."
        canonicalUrl="https://www.smitparekh.co.in/admin"
        noIndex={true}
      />

      <section className="admin-login section">
        <div className="admin-container">
          <div className="admin-login__card">
            <h2 className="admin-login__title">Admin Login</h2>
            <p className="admin-login__subtitle">
              Sign in to manage your projects
            </p>

            <form className="admin-login__form" onSubmit={handleLogin}>
              {error && <div className="admin-login__error">{error}</div>}

              <div className="admin-login__form-group">
                <label htmlFor="email" className="admin-login__label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="admin-login__input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="admin-login__form-group">
                <label htmlFor="password" className="admin-login__label">
                  Password
                </label>
                <div className="admin-login__password-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="admin-login__input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    className="admin-login__password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="admin-login__button"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default AdminLoginPage
