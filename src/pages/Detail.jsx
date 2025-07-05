import { useParams, useNavigate } from 'react-router-dom'

const Detail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()

  const handleBackToHome = () => {
    navigate('/')
  }

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
              {slug ? slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Detail'}
            </li>
          </ol>
        </nav>

        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {slug ? slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Product Detail'}
          </h1>
          <p className="text-gray-600">
            Chi tiết sản phẩm cho danh mục: {slug || 'N/A'}
          </p>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Thông tin sản phẩm</h2>
              <div className="space-y-4">
                <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Product Image Placeholder</span>
                </div>
                <div className="prose max-w-none">
                  <p className="text-gray-700">
                    Đây là trang detail cho category: <strong>{slug || 'N/A'}</strong>
                  </p>
                  <p className="text-gray-700">
                    Nội dung chi tiết sản phẩm sẽ được hiển thị ở đây. Bạn có thể thêm mô tả, 
                    hình ảnh, giá cả, và các thông tin khác về sản phẩm.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Thông tin thêm</h3>
              <div className="space-y-3">
                <div className="border-b pb-2">
                  <span className="text-sm text-gray-600">Category:</span>
                  <p className="font-medium">{slug || 'N/A'}</p>
                </div>
                <div className="border-b pb-2">
                  <span className="text-sm text-gray-600">Status:</span>
                  <p className="font-medium text-green-600">Available</p>
                </div>
                <div className="border-b pb-2">
                  <span className="text-sm text-gray-600">Price:</span>
                  <p className="font-medium text-xl text-purple-600">$99.99</p>
                </div>
              </div>
              
              <button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
