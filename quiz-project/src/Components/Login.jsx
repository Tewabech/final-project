function Login() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Login</h1>
      <input
        type="text"
        placeholder="Username"
        className="mb-4 px-4 py-2 border rounded-lg w-64"
      />
      <input
        type="password"
        placeholder="Password"
        className="mb-6 px-4 py-2 border rounded-lg w-64"
      />
      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
        Log In
      </button>
    </div>
  );
}

export default Login;