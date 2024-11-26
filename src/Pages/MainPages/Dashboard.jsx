import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const AdminContainer = styled.div`
  padding: 20px;
`;

const MetricsCard = styled.div`
  background: #f7f9fc;
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
`;

function AdminDashboard() {
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/admin/metrics")
      .then((response) => setMetrics(response.data))
      .catch((error) => console.error("Error fetching metrics:", error));
  }, []);

  if (!metrics) {
    return <p>Loading metrics...</p>;
  }

  return (
    <AdminContainer>
      <h1>Admin Dashboard</h1>
      <MetricsCard>
        <h3>Platform Metrics</h3>
        <p>Total Users: {metrics.users}</p>
        <p>Total Cards Created: {metrics.cards}</p>
        <p>Total Transactions: {metrics.transactions}</p>
      </MetricsCard>
      {/* Add functionality for managing templates and resolving disputes */}
    </AdminContainer>
  );
}

export default AdminDashboard;
