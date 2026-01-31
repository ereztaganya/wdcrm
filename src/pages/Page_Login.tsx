import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cmp_InputEmail } from '../components/Cmp_InputText';
import { Cmp_ButtonPrimary } from '../components/Cmp_ButtonPrimary';

const list_CarouselImages = [
  'https://images.unsplash.com/photo-1654512721615-5622d6ede1b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBjb3VwbGV8ZW58MXx8fHwxNzY5NDQzMTUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1767986012138-4893f40932d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VyZW1vbnklMjBlTGFnYW50fGVufDF8fHx8MTc2OTM3MzcyNnww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1677691257237-3294c7fd18a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwYnJpZGUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njk0MjM5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1613067532651-7075a620c900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwdmVudWV8ZW58MXx8fHwxNzY5NDM1NjYyfDA&ixlib=rb-4.1.0&q=80&w=1080'
];

export function Page_Login() {
  const navigate = useNavigate();
  const [txt_Email, setEmail] = useState('');
  const [txt_Password, setPassword] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [txt_ErrorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % list_CarouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleLogin = () => {
    // Clear previous errors
    setErrorMessage('');

    // Validate inputs
    if (!txt_Email || !txt_Password) {
      setErrorMessage('נא למלא את כל השדות');
      return;
    }

    // Demo credentials - replace with Supabase authentication
    const validUsers = {
      'admin@studio.com': { password: 'admin123', type: 'admin' },
      'client@example.com': { password: 'client123', type: 'client' }
    };

    const user = validUsers[txt_Email.toLowerCase()];

    if (user && user.password === txt_Password) {
      // Successful login
      if (user.type === 'admin') {
        navigate('/admin');
      } else {
        navigate('/client');
      }
    } else {
      setErrorMessage('אימייל או סיסמה שגויים');
    }
  };

  return (
    <div id="Page_Login" className="relative w-screen h-screen overflow-hidden">
      {/* Background Carousel */}
      <div id="Frame_BackgroundCarousel" className="absolute inset-0">
        {list_CarouselImages.map((img_url, index) => (
          <div
            key={index}
            id={`Frame_CarouselSlide_${index}`}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              opacity: currentImageIndex === index ? 1 : 0,
              backgroundImage: `url(${img_url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        ))}
        {/* Dark overlay */}
        <div id="Frame_Overlay" className="absolute inset-0 bg-black/60" />
      </div>

      {/* Login Panel */}
      <div id="Frame_LoginContainer" className="relative z-10 flex items-center justify-center h-full">
        <div 
          id="Frame_LoginPanel"
          className="bg-white p-12 w-full max-w-md"
          style={{ borderRadius: '6px' }}
        >
          {/* Logo */}
          <div id="Frame_LoginHeader" className="mb-12 text-center">
            <h1 id="txt_AppTitle" className="text-[#1A1A1A] mb-2">מערכת ניהול סטודיו</h1>
            <p id="txt_AppSubtitle" className="text-sm text-[#666666]">פורטל צילומי חתונות</p>
          </div>

          {/* Form */}
          <div id="Frame_LoginForm" className="space-y-6">
            {txt_ErrorMessage && (
              <div 
                id="Frame_ErrorMessage" 
                className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm text-center"
                style={{ borderRadius: '4px' }}
              >
                {txt_ErrorMessage}
              </div>
            )}

            <Cmp_InputEmail
              id="input_Email"
              type="email"
              placeholder="כתובת אימייל"
              value={txt_Email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <Cmp_InputEmail
              id="input_Password"
              type="password"
              placeholder="סיסמה"
              value={txt_Password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleLogin();
                }
              }}
            />

            <Cmp_ButtonPrimary
              id="btn_Login"
              onClick={handleLogin}
              fullWidth
              variant="primary"
            >
              התחברות
            </Cmp_ButtonPrimary>

            {/* Demo credentials hint */}
            <div id="Frame_DemoHint" className="mt-6 p-4 bg-gray-50 text-xs text-gray-600" style={{ borderRadius: '4px' }}>
              <p className="font-semibold mb-2">משתמשים לדוגמה:</p>
              <p><strong>מנהל:</strong> admin@studio.com / admin123</p>
              <p><strong>לקוח:</strong> client@example.com / client123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}