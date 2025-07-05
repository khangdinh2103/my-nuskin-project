import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Detail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [textareaContent, setTextareaContent] = useState('')

  useEffect(() => {
    // Nếu có slug từ URL, hiển thị trong textarea
    if (slug) {
      const decodedSlug = decodeURIComponent(slug);
      setTextareaContent(decodedSlug);
    }
  }, [slug]);

  const handleBackToHome = () => {
    navigate('/')
  }

  const handleTextareaChange = (e) => {
    setTextareaContent(e.target.value)
  }

  const displayTitle = slug ? decodeURIComponent(slug) : 'Product Detail'

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <button 
                onClick={handleBackToHome}
                className="hover:text-purple-600 transition-colors underline"
              >
                Home
              </button>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium">
              Detail
            </li>
          </ol>
        </nav>

        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Detail Page
          </h1>
          <p className="text-gray-600">
            Kết quả tìm kiếm sẽ hiển thị ở dưới
          </p>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">
                Nội dung tìm kiếm
              </h2>
              
              {/* Textarea để hiển thị từ khóa tìm kiếm */}
              <div className="mb-6">
                <label htmlFor="content-textarea" className="block text-sm font-medium text-gray-700 mb-2">
                  Từ khóa tìm kiếm:
                </label>
                <textarea
                  id="content-textarea"
                  value={textareaContent}
                  onChange={handleTextareaChange}
                  placeholder="Từ khóa tìm kiếm sẽ hiển thị ở đây..."
                  className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-vertical"
                />
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default Detail
