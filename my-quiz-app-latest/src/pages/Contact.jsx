export default function Contact() {
  return (
    <div className="max-w-lg mx-auto mt-16 bg-white p-8 rounded-2xl shadow-md text-center">
      <h2 className="text-3xl font-bold text-black-700 mb-4">Contact Us</h2>
      <p className="text-gray-700 mb-6">
        If you have any questions, feedback, or need support, feel free to reach
        out to us. We’re always happy to help!
      </p>

      <div className="space-y-3 text-gray-800">
        <p>
          📞 <span className="font-semibold">Phone:</span> +251 (911) 510204
        </p>
        <p>
          📧 <span className="font-semibold">Email:</span>{" "}
          Quizzy@quizapp.com
        </p>
      </div>

      <p className="mt-6 text-gray-500 text-sm">
        We’ll get back to you as soon as possible. Thank you for using QUIZZY!
      </p>
    </div>
  );
}
