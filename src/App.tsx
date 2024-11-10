import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd-mobile';
import { router } from './router';
import './styles/main.scss';

function App() {
  return (
    <ConfigProvider
      theme={{
        root: {
          '--adm-color-background': '#111827',
          '--adm-color-text': '#f3f4f6',
        },
      }}
    >
      <div className="dark min-h-screen">
        <RouterProvider router={router} />
      </div>
    </ConfigProvider>
  );
}

export default App;