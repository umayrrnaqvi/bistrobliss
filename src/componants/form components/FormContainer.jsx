import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const FormContainer = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F9F9F7]">
      {isLogin ? (
        <LoginForm onSwitch={() => setIsLogin(false)} />
      ) : (
        <SignupForm onSwitch={() => setIsLogin(true)} />
      )}
    </div>
  );
};

export default FormContainer;
