import React, { useState } from "react";

// Example support history
const initialHistory = [
  {
    id: 1,
    subject: "Cannot access inventory dashboard",
    status: "Resolved",
    date: "2025-07-15",
    response: "Issue resolved by resetting your password.",
  },
  {
    id: 2,
    subject: "Need help with procurement request",
    status: "Open",
    date: "2025-07-18",
    response: "",
  },
  {
    id: 3,
    subject: "Work order not updating",
    status: "Closed",
    date: "2025-06-28",
    response: "Problem fixed by updating your app.",
  },
];

const Support = () => {
  const [formState, setFormState] = useState({
    subject: "",
    description: "",
    email: "",
  });
  const [history, setHistory] = useState(initialHistory);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate adding to history
    setHistory([
      {
        id: history.length + 1,
        subject: formState.subject,
        status: "Open",
        date: new Date().toISOString().slice(0, 10),
        response: "",
      },
      ...history,
    ]);
    setSubmitted(true);
    setFormState({ subject: "", description: "", email: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 py-10 px-4">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Support Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Submit a Support Request
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  required
                  rows={4}
                  value={formState.description}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-semibold shadow"
                >
                  Submit
                </button>
                {submitted && (
                  <span className="ml-4 text-green-700 font-medium">
                    Request submitted!
                  </span>
                )}
              </div>
            </form>
          </div>
          {/* Support History */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Your Support History
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border rounded-lg shadow">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="py-2 px-3 text-left text-gray-700">
                      Subject
                    </th>
                    <th className="py-2 px-3 text-left text-gray-700">
                      Status
                    </th>
                    <th className="py-2 px-3 text-left text-gray-700">
                      Date
                    </th>
                    <th className="py-2 px-3 text-left text-gray-700">
                      Response
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="py-2 px-3 font-medium">{item.subject}</td>
                      <td className="py-2 px-3">
                        <span
                          className={
                            item.status === "Open"
                              ? "bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs"
                              : item.status === "Resolved"
                              ? "bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs"
                              : "bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs"
                          }
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="py-2 px-3">{item.date}</td>
                      <td className="py-2 px-3 text-sm text-gray-600">
                        {item.response || <span className="text-gray-400">Awaiting response</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {history.length === 0 && (
                <div className="text-gray-500 text-center py-8">
                  No support requests found.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;