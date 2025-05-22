import React from 'react';

const TestComponent = ({ classId }) => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#1a1a2e', color: 'white', borderRadius: '12px' }}>
      <h2>Test Component for {classId}</h2>
      <p>This is a simple test component to check if the routing is working correctly.</p>
    </div>
  );
};

export default TestComponent;
