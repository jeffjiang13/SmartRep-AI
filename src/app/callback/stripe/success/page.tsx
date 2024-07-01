"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const StripeSuccess: React.FC = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push('/dashboard');
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Successful</h1>
      <p>Thank you!</p>
      <button
        onClick={handleGoBack}
        style={{
          padding: '10px 20px',
          marginTop: '20px',
          backgroundColor: 'orange',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Go to Dashboard
      </button>
    </div>
  );
};

export default StripeSuccess;
