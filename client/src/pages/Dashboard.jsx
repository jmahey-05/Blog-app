import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import DashSidebar from '../components/DashSidebar.jsx';
import DashProfile from '../components/DashProfile.jsx';
import DashPosts from '../components/DashPosts.jsx';
import DashUsers from '../components/DashUsers.jsx';
import DashComments from '../components/DashComments.jsx';
import DashboardComp from '../components/DashboardComp.jsx';

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const [tab, setTab] = useState('profile');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get('tab')
    if(tabFromUrl){
      setTab(tabFromUrl);
    }else {
      navigate('/dashboard?tab=profile'); // Redirect to profile tab
    }
  },[location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <aside className='md:w-56'>
        <DashSidebar/>
      </aside>
      {/* profile...*/}
      {tab === 'profile' && <DashProfile></DashProfile>}
      {/* posts...*/}
      {tab === 'posts' && <DashPosts />}
      {/* users */}
      {tab === 'users' && <DashUsers />}
      {/*comments */}
      {tab === 'comments' && <DashComments />}
      {/* dashboard comp */}
      {tab === 'dash' && <DashboardComp />}
    </div>
  )
}
