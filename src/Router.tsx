import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { History } from './pages/History'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="history" element={<History />} />
      </Route>

      {/*
        If I need to create another layout, an Admin layout, for example,
        do the following:

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/" element={<AdminHome />} />
          <Route path="users" element={<AdminUsers />} />
        </Route>

        Then, to access the Admin layout, I need to access the following URL:
        http://localhost:3000/admin
        and for the AdminUsers component:
        http://localhost:3000/admin/users
      */}
    </Routes>
  )
}
