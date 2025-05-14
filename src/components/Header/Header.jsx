import { Link, NavLink } from 'react-router-dom';
import { Menubar, MenubarContent, MenubarItem, MenubarMenu } from '../components/ui/menubar';

export function Header() {
  return (
    <div className="flex text-3xl text-center mt-50 p-4 gap-4">
        <NavLink to="/" >Home</NavLink>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        
    </div>
  )
}
