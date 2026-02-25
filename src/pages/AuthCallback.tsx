import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function AuthCallback() {
  const navigate = useNavigate()

  useEffect(() => {
    // fake login delay
    setTimeout(() => {
      navigate("/dashboard")
    }, 2000)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
        <p className="text-neutral-400">Processing authentication...</p>
      </div>
    </div>
  )
}