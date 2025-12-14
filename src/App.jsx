import React from 'react'
import NavigationSection from './components/navigationbar/NavigationSection.jsx'
import { ShoppingCart , ReceiptText } from 'lucide-react';
import HomeSection from './components/home/HomeSection.jsx';

const App = () => {
  return (
    <div>
      <NavigationSection/>
      <HomeSection />
    </div>
  )
}

export default App