import { Menubar, MenubarContent, MenubarItem, MenubarMenu } from '../components/ui/menubar';

export function Header() {
  return (
    <div className="flex  items-center p-4 gap-4">
        <button>Login</button>
        <button>Register</button>
        {/* <Menubar>
            <MenubarMenu className="gap-4 p-3">
                Login
            </MenubarMenu>
            <MenubarMenu>
                Sign up
            </MenubarMenu>
        </Menubar> */}
    </div>
  )
}
