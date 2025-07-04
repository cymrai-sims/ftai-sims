import React, { useEffect, useState } from 'react';

const Requisitions = () => {
  const [requisitions, setRequisitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [newRequisition, setNewRequisition] = useState({ item: '', quantity: '' });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetch('/api/requisitions')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch requisitions');
        return res.json();
      })
      .then((data) => {
        setRequisitions(data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    setNewRequisition({ ...newRequisition, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    fetch('/api/requisitions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRequisition),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to add requisition');
        return res.json();
      })
      .then((data) => {
        setRequisitions([...requisitions, data.data]);
        setNewRequisition({ item: '', quantity: '' });
        setSubmitting(false);
      })
      .catch((err) => {
        setError(err.message);
        setSubmitting(false);
      });
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Requisitions</h1>
      {error && (
        <div className="mb-4 p-2 bg-red-200 text-red-900 rounded">{error}</div>
      )}
      <form onSubmit={handleSubmit} className="mb-8 space-y-4 bg-gray-50 p-4 rounded shadow">
        <div>
          <label className="block text-sm font-semibold">Item</label>
          <input
            type="text"
            name="item"
            value={newRequisition.item}
            onChange={handleChange}
            required
            className="w-full border px-2 py-1 rounded mt-1"
            disabled={submitting}
          />
        </div>
        <div>
          <label className="block text-sm font-semibold">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={newRequisition.quantity}
            onChange={handleChange}
            required
            min="1"
            className="w-full border px-2 py-1 rounded mt-1"
            disabled={submitting}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={submitting}
        >
          {submitting ? 'Adding...' : 'Add Requisition'}
        </button>
      </form>
      {loading ? (
        <div>Loading requisitions...</div>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-3 py-2 text-left">ID</th>
              <th className="border px-3 py-2 text-left">Item</th>
              <th className="border px-3 py-2 text-left">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {requisitions.length === 0 ? (
              <tr>
                <td colSpan={3} className="text-center py-4">
                  No requisitions found.
                </td>
              </tr>
            ) : (
              requisitions.map((req) => (
                <tr key={req.id}>
                  <td className="border px-3 py-2">{req.id}</td>
                  <td className="border px-3 py-2">{req.item}</td>
                  <td className="border px-3 py-2">{req.quantity}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Requisitions;