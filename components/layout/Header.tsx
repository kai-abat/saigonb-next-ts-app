'use client';

import React, { startTransition, useState, useTransition } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from '@nextui-org/react';
import {
  HiOutlineHome,
  HiOutlinePhone,
  HiOutlineRocketLaunch
} from 'react-icons/hi2';
import { ThemeSwitcher } from '../ui/ThemeSwitcher';
import { usePathname } from 'next/navigation';
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io';
import LogoHeader from './LogoHeader';
import UserProfileHeader from '../ui/UserProfileHeader';
import { UserProfile } from '@/utils/types/Props';
import { signOut } from '@/utils/actions/adminAction';
import ButtonSignOut from '../ui/ButtonSignOut';
import { FB_URL, INSTAGRAM_URL } from '../../utils/Constants';
import ButtonSignIn from '../ui/ButtonSignIn';

interface Menu {
  name: string;
  to: string;
  icon: React.JSX.Element;
}

const menuItems: Menu[] = [
  { name: 'Home', to: '/', icon: <HiOutlineHome /> },
  { name: 'Menu', to: '/menu', icon: <HiOutlineRocketLaunch /> },
  { name: 'News', to: '/news', icon: <HiOutlineRocketLaunch /> }
  // { name: 'About', to: '/aboutus', icon: <HiOutlineRocketLaunch /> }
  // { name: 'Contact', to: '/contactus', icon: <HiOutlinePhone /> }
];

const Header = ({ userData }: { userData: UserProfile | undefined }) => {
  const asPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function isLinkActive(currentPath: string): boolean {
    const paths: string[] = asPath.split('/');
    const startPath = '/' + paths.at(1);
    return currentPath === startPath;
  }

  return (
    <Navbar
      isBordered
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      className='z-[9999]'
      classNames={{
        base: ['justify-evenly'],
        item: [
          'flex',
          'relative',
          'h-full',
          'items-center',
          "data-[active=true]:after:content-['']",
          'data-[active=true]:after:absolute',
          'data-[active=true]:after:bottom-0',
          'data-[active=true]:after:left-0',
          'data-[active=true]:after:right-0',
          'data-[active=true]:after:h-[2px]',
          'data-[active=true]:after:rounded-[2px]',
          'data-[active=true]:after:bg-primary'
        ],
        wrapper: ['px-4']
      }}
    >
      <NavbarContent>
        <NavbarBrand>
          <LogoHeader />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className='mr-4 hidden gap-4 sm:flex' justify='center'>
        {menuItems.map((item, index) => (
          <NavbarItem key={index} isActive={isLinkActive(item.to)}>
            <Link color='foreground' href={item.to}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* facebook, instagrag link/logo */}
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <Link
            href={FB_URL}
            className=' text-3xl text-stone-900 dark:text-stone-200'
          >
            <IoLogoFacebook />
          </Link>
          <Link
            href={INSTAGRAM_URL}
            className=' text-3xl text-stone-900 dark:text-stone-200'
          >
            <IoLogoInstagram />
          </Link>
        </NavbarItem>
        <NavbarItem className='hidden sm:flex'>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem className={`${userData && 'hidden'}`}>
          <ButtonSignIn showLabel />
        </NavbarItem>
        <NavbarItem>
          <UserProfileHeader userData={userData} />
        </NavbarItem>
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem> */}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
      </NavbarContent>
      {/* mobile toggle menu content */}
      <NavbarMenu className=' z-[9999] gap-4'>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className='flex w-full gap-2'
              color={
                index === 2
                  ? 'warning'
                  : index === menuItems.length - 1
                    ? 'danger'
                    : 'foreground'
              }
              href={item.to}
              size='lg'
              onPress={() => {
                setIsMenuOpen(false);
              }}
            >
              {item.icon}
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem className={`${userData && 'hidden'}`}>
          <Button
            as={Link}
            color='secondary'
            href='/admin/login'
            variant='flat'
            fullWidth
            onPress={() => setIsMenuOpen(false)}
          >
            Sign In
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem className={`${!userData && 'hidden'}`}>
          <ButtonSignOut showLabel />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};
export default Header;
