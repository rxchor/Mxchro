import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { SideBarItem, getSideBarItems } from './components/side_bar/SideBarItemsService';
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar';
import { AppSidebar } from './components/side_bar/AppSideBar';

export default function App() {
    const navBarItems: SideBarItem[] = getSideBarItems();

    return(
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          <BrowserRouter>
            <Routes>
                  {navBarItems.map((item) => (
                    <Route key={item.title} path={item.url} element={<item.component />} />
                  ))}
            </Routes>
          </BrowserRouter>
        </main>
      </SidebarProvider>
    );
}